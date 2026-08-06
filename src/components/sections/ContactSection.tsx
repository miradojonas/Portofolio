import styles from "./ContactSection.module.css";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/forms/ContactForm";
import { content } from "@/data/content";

export default function ContactSection() {
  return (
    <Section id="contact" title={content.contact.title}>
      <div className={styles.contactCard}>
        <p className={styles.contactText}>{content.contact.text}</p>

        <div className={styles.contactRow}>
          <Button href={`mailto:${content.links.email}`}>Envoyer un email</Button>
          <Button variant="ghost" href={content.links.github}>
            GitHub
          </Button>
          <Button variant="ghost" href={content.links.linkedin}>
            LinkedIn
          </Button>
          <Button variant="ghost" href={content.links.facebook}>
            Facebook
          </Button>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
