import styles from "./SkillsSection.module.css";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { content } from "@/data/content";

export default function SkillsSection() {
  return (
    <Section id="skills" title={content.skills.title}>
      <div className={styles.skillsGrid}>
        {content.skills.groups.map((group) => (
          <div key={group.name} className={styles.skillPanel}>
            <h3 className={styles.h3}>{group.name}</h3>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item.name}>
                  <Badge>
                    {item.name}
                    {item.level ? ` : ${item.level}` : ""}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
