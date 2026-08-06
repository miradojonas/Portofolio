import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { POST } from "./route";

function buildRequest(body: string, url = "http://localhost/api/contact") {
  return new Request(url, { method: "POST", body });
}

const ORIGINAL_ENV = process.env;

describe("POST /api/contact", () => {
  beforeEach(() => {
    process.env = { ...ORIGINAL_ENV };
    process.env.N8N_WEBHOOK_URL = "https://webhook.example.com";
    process.env.N8N_SHARED_SECRET = "top-secret";
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV;
    vi.unstubAllGlobals();
  });

  it("renvoie 400 si le corps est vide", async () => {
    const response = await POST(buildRequest("") as never);
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Body vide" });
  });

  it("renvoie 400 si le JSON est invalide", async () => {
    const response = await POST(buildRequest("{pas du json") as never);
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "JSON invalide" });
  });

  it("renvoie 400 si un champ requis manque", async () => {
    const response = await POST(
      buildRequest(JSON.stringify({ name: "Mirado", email: "m@example.com" })) as never,
    );
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Champs requis manquants" });
  });

  it("renvoie 400 si l'email est invalide", async () => {
    const response = await POST(
      buildRequest(JSON.stringify({ name: "Mirado", email: "nope", message: "Hi" })) as never,
    );
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Email invalide" });
  });

  it("renvoie 400 si le contenu est trop long", async () => {
    const response = await POST(
      buildRequest(JSON.stringify({ name: "Mirado", email: "m@example.com", message: "x".repeat(3001) })) as never,
    );
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Contenu trop long" });
  });

  it("renvoie 500 si les variables serveur manquent", async () => {
    delete process.env.N8N_WEBHOOK_URL;
    const response = await POST(
      buildRequest(JSON.stringify({ name: "Mirado", email: "m@example.com", message: "Hi" })) as never,
    );
    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Variables serveur manquantes" });
  });

  it("transmet la charge au webhook et renvoie 200", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    const response = await POST(
      buildRequest(JSON.stringify({ name: "Mirado", email: "m@example.com", message: "Bonjour" })) as never,
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://webhook.example.com",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ "x-api-key": "top-secret" }),
      }),
    );
  });

  it("renvoie 502 si le webhook rejette la requête", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 400 })));

    const response = await POST(
      buildRequest(JSON.stringify({ name: "Mirado", email: "m@example.com", message: "Bonjour" })) as never,
    );

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ error: "Webhook n8n a rejeté la requête" });
  });
});
