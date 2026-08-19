import styles from "./ContactSection.module.css";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/forms/ContactForm";
import { content } from "@/data/content";

export default function ContactSection() {
  return (
    <Section id="contact" title="Contact" number="05">
      <div className={styles.grid}>
        <div className={styles.left}>
          <p className={styles.text}>{content.contact.text}</p>

          <div className={styles.links}>
            <Button href={`mailto:${content.links.email}`}>
              Envoyer un email
            </Button>
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

          <div className={styles.cvLink}>
            <a className={styles.link} href={content.links.cv}>
              Télécharger mon CV ↗
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
