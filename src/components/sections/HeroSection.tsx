import Image from "next/image";
import styles from "./HeroSection.module.css";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { content } from "@/data/content";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.heroGhost}>PORTFOLIO</p>

            <p className={`${styles.kicker} ${styles.reveal} ${styles.reveal1}`}>
              {content.site.title}
            </p>
            <h1 className={`${styles.h1} ${styles.reveal} ${styles.reveal2}`}>
              {content.hero.headline}
            </h1>
            <p className={`${styles.lead} ${styles.reveal} ${styles.reveal3}`}>
              {content.hero.subheadline}
            </p>

            <div className={`${styles.ctas} ${styles.reveal} ${styles.reveal4}`}>
              {content.hero.ctas.map((cta) => (
                <Button key={cta.href} href={cta.href}>
                  {cta.label}
                </Button>
              ))}
              {content.links.cv ? (
                <Button variant="ghost" href={content.links.cv}>
                  Télécharger le CV
                </Button>
              ) : null}
            </div>

            <div className={styles.metaRow}>
              <span>{content.site.location}</span>
              <span>•</span>
              <a className="tap" href={`mailto:${content.links.email}`}>
                {content.links.email}
              </a>
            </div>

            <div className={styles.sideLinks}>
              <a className={`${styles.sideLink} tap`} href={content.links.github}>
                GitHub
              </a>
              <a className={`${styles.sideLink} tap`} href={content.links.linkedin}>
                LinkedIn
              </a>
              <a className={`${styles.sideLink} tap`} href={content.links.facebook}>
                Facebook
              </a>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.profileAvatarWrap}>
              <Image
                className={styles.profileAvatar}
                src={content.profile.image.src}
                alt={content.profile.image.alt}
                width={220}
                height={220}
                priority
              />
            </div>
            <p className={styles.profileName}>{content.site.name}</p>
            <p className={styles.profileRole}>{content.site.title}</p>

            <ul className={styles.profileDetails}>
              {content.profile.details.map((detail) => (
                <li key={detail.label}>
                  <Badge>
                    {detail.label} : {detail.value}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
