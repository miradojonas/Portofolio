import { describe, expect, it } from "vitest";
import { validateContactPayload, isValidEmail } from "./validation";

describe("isValidEmail", () => {
  it("accepte un email valide", () => {
    expect(isValidEmail("mirado@example.com")).toBe(true);
  });

  it("rejette un email sans @", () => {
    expect(isValidEmail("mirado")).toBe(false);
  });

  it("rejette un email sans domaine", () => {
    expect(isValidEmail("mirado@")).toBe(false);
  });

  it("rejette une chaîne vide", () => {
    expect(isValidEmail("")).toBe(false);
  });
});

describe("validateContactPayload", () => {
  it("rejette une entrée non-objet", () => {
    expect(validateContactPayload(null)).toEqual({
      ok: false,
      error: "Champs requis manquants",
    });
    expect(validateContactPayload("texte")).toEqual({
      ok: false,
      error: "Champs requis manquants",
    });
  });

  it("rejette si un champ requis manque", () => {
    const result = validateContactPayload({ name: "Mirado", email: "m@example.com" });
    expect(result).toEqual({ ok: false, error: "Champs requis manquants" });
  });

  it("rejette un email invalide", () => {
    const result = validateContactPayload({
      name: "Mirado",
      email: "pas-un-email",
      message: "Hello",
    });
    expect(result).toEqual({ ok: false, error: "Email invalide" });
  });

  it("rejette un contenu trop long", () => {
    const result = validateContactPayload({
      name: "M",
      email: "m@example.com",
      message: "x".repeat(3001),
    });
    expect(result).toEqual({ ok: false, error: "Contenu trop long" });
  });

  it("accepte une charge valide et nettoie les espaces", () => {
    const result = validateContactPayload({
      name: "  Mirado  ",
      email: "  mirado@example.com ",
      message: "  Bonjour  ",
    });
    expect(result).toEqual({
      ok: true,
      data: { name: "Mirado", email: "mirado@example.com", message: "Bonjour" },
    });
  });
});
