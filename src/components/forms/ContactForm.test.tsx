import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, afterEach } from "vitest";
import ContactForm from "./ContactForm";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("ContactForm", () => {
  it("affiche le formulaire et ses champs", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText("Nom")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Envoyer" })).toBeInTheDocument();
  });

  it("envoie vers /api/contact et affiche le succès", async () => {
    const user = userEvent.setup();
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    render(<ContactForm />);

    await user.type(screen.getByLabelText("Nom"), "Mirado");
    await user.type(screen.getByLabelText("Email"), "mirado@example.com");
    await user.type(screen.getByLabelText("Message"), "Bonjour");
    await user.click(screen.getByRole("button", { name: "Envoyer" }));

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({ method: "POST" }),
    );
    expect(await screen.findByText("Message envoyé avec succès !")).toBeInTheDocument();
  });

  it("affiche une erreur si l'API répond avec un statut d'échec", async () => {
    const user = userEvent.setup();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response(JSON.stringify({ error: "x" }), { status: 500 })),
    );

    render(<ContactForm />);

    await user.type(screen.getByLabelText("Nom"), "Mirado");
    await user.type(screen.getByLabelText("Email"), "mirado@example.com");
    await user.type(screen.getByLabelText("Message"), "Bonjour");
    await user.click(screen.getByRole("button", { name: "Envoyer" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/Une erreur est survenue/);
  });

  it("désactive le bouton pendant l'envoi", async () => {
    const user = userEvent.setup();
    vi.stubGlobal("fetch", vi.fn().mockReturnValue(new Promise(() => {})));

    render(<ContactForm />);

    await user.type(screen.getByLabelText("Nom"), "Mirado");
    await user.type(screen.getByLabelText("Email"), "mirado@example.com");
    await user.type(screen.getByLabelText("Message"), "Bonjour");
    await user.click(screen.getByRole("button", { name: "Envoyer" }));

    expect(screen.getByRole("button", { name: "Envoi…" })).toBeDisabled();
  });
});
