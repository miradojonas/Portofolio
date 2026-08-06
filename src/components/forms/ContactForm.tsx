"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "@/components/ui/Button";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        setState("error");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formTitle}>Me contacter</div>

      <div className={styles.formGrid}>
        <label className={styles.formField}>
          Nom
          <input type="text" name="name" placeholder="Votre nom" required />
        </label>

        <label className={styles.formField}>
          Email
          <input type="email" name="email" placeholder="Votre email" required />
        </label>
      </div>

      <label className={styles.formField}>
        Message
        <textarea name="message" placeholder="Votre message" rows={5} required />
      </label>

      <Button
        type="submit"
        disabled={state === "submitting"}
        className={styles.submitButton}
      >
        {state === "submitting" ? "Envoi…" : "Envoyer"}
      </Button>

      {state === "success" ? (
        <p className={styles.formSuccess} role="status">
          Message envoyé avec succès !
        </p>
      ) : null}
      {state === "error" ? (
        <p className={styles.formError} role="alert">
          Une erreur est survenue. Réessaie plus tard.
        </p>
      ) : null}
    </form>
  );
}
