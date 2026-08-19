import styles from "./AboutSection.module.css";
import Section from "@/components/ui/Section";
import { content } from "@/data/content";

export default function AboutSection() {
  return (
    <Section id="about" title="About" number="01">
      <div className={styles.grid}>
        <div className={styles.statement}>
          <p className={styles.statementText}>
            A strong statement about who I am and what I build.
          </p>
        </div>

        <div className={styles.body}>
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.p}>
              {paragraph}
            </p>
          ))}

          <ul className={styles.details}>
            {content.about.highlights.map((highlight) => (
              <li key={highlight.label} className={styles.detail}>
                <span className={styles.detailLabel}>{highlight.label}</span>
                <span className={styles.detailValue}>{highlight.value}</span>
              </li>
            ))}
            {content.profile.details.map((detail) => (
              <li key={detail.label} className={styles.detail}>
                <span className={styles.detailLabel}>{detail.label}</span>
                <span className={styles.detailValue}>{detail.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
