import styles from "./FormationsSection.module.css";
import Section from "@/components/ui/Section";
import { content } from "@/data/content";

export default function FormationsSection() {
  return (
    <Section id="formations" title="Experience" number="04">
      <div className={styles.timeline}>
        {content.formations.items.map((formation) => (
          <div
            key={`${formation.title}-${formation.organization}`}
            className={styles.item}
          >
            <div className={styles.itemLeft}>
              <span className={styles.period}>{formation.period}</span>
            </div>

            <div className={styles.itemRight}>
              <h3 className={styles.role}>{formation.title}</h3>
              <p className={styles.company}>{formation.organization}</p>
              {formation.bullets ? (
                <ul className={styles.bullets}>
                  {formation.bullets.map((bullet) => (
                    <li key={bullet} className={styles.bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
