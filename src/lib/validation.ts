export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const MAX_NAME_LENGTH = 100;
export const MAX_EMAIL_LENGTH = 200;
export const MAX_MESSAGE_LENGTH = 3000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email);
}

export type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

export function validateContactPayload(input: unknown): ValidationResult {
  if (typeof input !== "object" || input === null) {
    return { ok: false, error: "Champs requis manquants" };
  }

  const body = input as Record<string, unknown>;

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return { ok: false, error: "Champs requis manquants" };
  }

  if (!isValidEmail(email)) {
    return { ok: false, error: "Email invalide" };
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return { ok: false, error: "Contenu trop long" };
  }

  return { ok: true, data: { name, email, message } };
}
