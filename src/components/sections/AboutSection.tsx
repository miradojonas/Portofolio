import styles from "./AboutSection.module.css";
import Section from "@/components/ui/Section";
import { content } from "@/data/content";

export default function AboutSection() {
  return (
    <Section id="about" title={content.about.title}>
      <div className={styles.aboutGrid}>
        <div className={styles.stack}>
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.p}>
              {paragraph}
            </p>
          ))}
        </div>

        <ul className={styles.highlightGrid}>
          {content.about.highlights.map((highlight) => (
            <li key={highlight.label} className={styles.card}>
              <div className={styles.cardLabel}>{highlight.label}</div>
              <div className={styles.cardValue}>{highlight.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
