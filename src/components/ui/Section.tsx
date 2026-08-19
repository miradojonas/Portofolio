import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  title: string;
  number?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, number, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.header}>
        {number ? (
          <span className={styles.number}>{number}</span>
        ) : null}
        <h2 className={styles.h2}>{title}</h2>
      </div>
      {children}
    </section>
  );
}
