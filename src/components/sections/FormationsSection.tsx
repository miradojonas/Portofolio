import styles from "./FormationsSection.module.css";
import Section from "@/components/ui/Section";
import { content } from "@/data/content";

export default function FormationsSection() {
  return (
    <Section id="formations" title={content.formations.title}>
      <div className={styles.timeline}>
        {content.formations.items.map((formation) => (
          <div
            key={`${formation.title}-${formation.organization}`}
            className={styles.timelineItem}
          >
            <div className={styles.timelineLeft}>
              <div className={styles.timelineRole}>{formation.title}</div>
              <div className={styles.timelineCompany}>{formation.organization}</div>
              <div className={styles.timelinePeriod}>{formation.period}</div>
            </div>

            {formation.bullets ? (
              <ul className={styles.bullets}>
                {formation.bullets.map((bullet) => (
                  <li key={bullet} className={styles.p}>
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
