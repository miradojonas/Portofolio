import styles from "./HeroSection.module.css";
import Container from "@/components/layout/Container";
import { content } from "@/data/content";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroInner}>
          <p className={`${styles.role} ${styles.reveal} ${styles.reveal1}`}>
            {content.hero.subheadline}
          </p>

          <h1 className={`${styles.headline} ${styles.reveal} ${styles.reveal2}`}>
            {content.hero.headline}
          </h1>

          <p className={`${styles.statement} ${styles.reveal} ${styles.reveal3}`}>
            {content.site.title}
          </p>

          <div className={`${styles.ctas} ${styles.reveal} ${styles.reveal4}`}>
            <a
              className={`${styles.ctaLink} tap`}
              href={content.hero.ctas[0]?.href ?? "#projects"}
            >
              <span className={styles.ctaArrow}>↓</span>
              {content.hero.ctas[0]?.label ?? "Explore my work"}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
