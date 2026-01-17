import { content } from "@/app/content";
import styles from "./page.module.css";
import RevealOnScroll from "./RevealOnScroll";

function Container({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.h2}>{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <nav className={styles.nav}>
            <a className={`${styles.brand} ${styles.tap}`} href="#top">
              {content.site.name}
            </a>

            <div className={styles.navLinks}>
              <a className={styles.tap} href="#about">
                À propos
              </a>
              <a className={styles.tap} href="#skills">
                Compétences
              </a>
              <a className={styles.tap} href="#projects">
                Projets
              </a>
              <a className={styles.tap} href="#contact">
                Contact
              </a>
            </div>
          </nav>
        </Container>
      </header>

      <main id="top" className={styles.pageEnter}>
        <section className={styles.hero}>
          <Container>
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
                <a
                  key={cta.href}
                  className={`${styles.button} ${styles.tap}`}
                  href={cta.href}
                >
                  {cta.label}
                </a>
              ))}
              {content.links.cv ? (
                <a className={`${styles.buttonGhost} ${styles.tap}`} href={content.links.cv}>
                  Télécharger le CV
                </a>
              ) : null}
            </div>

            <div className={styles.metaRow}>
              <span>{content.site.location}</span>
              <span>•</span>
              <a className={styles.tap} href={`mailto:${content.links.email}`}>
                {content.links.email}
              </a>
            </div>
          </Container>
        </section>

        <Container>
          <RevealOnScroll>
            <Section id="about" title={content.about.title}>
              <div className={styles.twoCols}>
                <div className={styles.stack}>
                  {content.about.paragraphs.map((p) => (
                    <p key={p} className={styles.p}>
                      {p}
                    </p>
                  ))}
                </div>

                <ul className={styles.cardList}>
                  {content.about.highlights.map((h) => (
                    <li key={h.label} className={styles.card}>
                      <div className={styles.cardLabel}>{h.label}</div>
                      <div className={styles.cardValue}>{h.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </Section>
          </RevealOnScroll>

          <RevealOnScroll>
            <Section id="skills" title={content.skills.title}>
              <div className={styles.grid3}>
                {content.skills.groups.map((g) => (
                  <div key={g.name} className={styles.panel}>
                    <h3 className={styles.h3}>{g.name}</h3>
                    <ul className={styles.list}>
                      {g.items.map((it) => (
                        <li key={it} className={styles.badge}>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>
          </RevealOnScroll>

          <RevealOnScroll>
            <Section id="projects" title={content.projects.title}>
              <div className={styles.grid2}>
                {content.projects.items.map((p) => (
                  <article key={p.name} className={styles.projectCard}>
                    <div>
                      <h3 className={styles.h3}>{p.name}</h3>
                      <p className={styles.p}>{p.description}</p>

                      <div className={styles.tagRow}>
                        {p.tags.map((t) => (
                          <span key={t} className={styles.tag}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.projectLinks}>
                      {p.links.demo ? (
                        <a className={`${styles.link} ${styles.tap}`} href={p.links.demo}>
                          Demo
                        </a>
                      ) : (
                        <span className={styles.linkMuted}>Demo</span>
                      )}
                      {p.links.repo ? (
                        <a className={`${styles.link} ${styles.tap}`} href={p.links.repo}>
                          Code
                        </a>
                      ) : (
                        <span className={styles.linkMuted}>Code</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </Section>
          </RevealOnScroll>

          <RevealOnScroll>
            <Section id="contact" title={content.contact.title}>
              <p className={styles.p}>{content.contact.text}</p>

              <div className={styles.contactRow}>
                <a className={`${styles.button} ${styles.tap}`} href={`mailto:${content.links.email}`}>
                  Envoyer un email
                </a>
                <a className={`${styles.buttonGhost} ${styles.tap}`} href={content.links.github}>
                  GitHub
                </a>
                <a className={`${styles.buttonGhost} ${styles.tap}`} href={content.links.linkedin}>
                  LinkedIn
                </a>
                <a className={`${styles.buttonGhost} ${styles.tap}`} href={content.links.linkedin}>
                  Facebook
                </a>
              </div>
            </Section>
          </RevealOnScroll>
        </Container>
      </main>

      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerRow}>
            <span>
              © {new Date().getFullYear()} {content.site.name}
            </span>
            <span className={styles.footerLinks}>
              <a className={styles.tap} href={content.links.github}>
                GitHub
              </a>
              <a className={styles.tap} href={content.links.linkedin}>
                LinkedIn
              </a>
              <a className={styles.tap} href={`mailto:${content.links.email}`}>
                Email
              </a>
              <a className={styles.tap} href={`mailto:${content.links.email}`}>
                Facebook
              </a>
            </span>
          </div>
        </Container>
      </footer>
    </>
  );
}