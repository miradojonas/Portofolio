import styles from "./SkillsSection.module.css";
import Section from "@/components/ui/Section";
import { content } from "@/data/content";

export default function SkillsSection() {
  return (
    <Section id="skills" title="Expertise" number="02">
      <div className={styles.grid}>
        {content.skills.groups.map((group, index) => (
          <div key={group.name} className={styles.domain}>
            <div className={styles.domainHeader}>
              <span className={styles.domainNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.domainName}>{group.name}</h3>
            </div>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item.name} className={styles.item}>
                  <span className={styles.itemName}>{item.name}</span>
                  {item.level ? (
                    <span className={styles.itemLevel}>{item.level}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
