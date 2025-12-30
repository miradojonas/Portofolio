import { content } from "@/app/content";
import styles from "./page.module.css";

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
            <a className={styles.brand} href="#top">
              {content.site.name}
            </a>

            <div className={styles.navLinks}>
              <a href="#about">À propos</a>
              <a href="#skills">Compétences</a>
              <a href="#projects">Projets</a>
              <a href="#experience">Expérience</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </Container>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <Container>
            <p className={styles.kicker}>{content.site.title}</p>
            <h1 className={styles.h1}>{content.hero.headline}</h1>
            <p className={styles.lead}>{content.hero.subheadline}</p>

            <div className={styles.ctas}>
              {content.hero.ctas.map((cta) => (
                <a key={cta.href} className={styles.button} href={cta.href}>
                  {cta.label}
                </a>
              ))}
              <a className={styles.buttonGhost} href={content.links.cv}>
                Télécharger le CV
              </a>
            </div>

            <div className={styles.metaRow}>
              <span>{content.site.location}</span>
              <span>•</span>
              <a href={`mailto:${content.links.email}`}>{content.links.email}</a>
            </div>
          </Container>
        </section>

        <Container>
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
                      <a className={styles.link} href={p.links.demo}>
                        Demo
                      </a>
                    ) : (
                      <span className={styles.linkMuted}>Demo</span>
                    )}
                    {p.links.repo ? (
                      <a className={styles.link} href={p.links.repo}>
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

          <Section id="experience" title={content.experience.title}>
            <div className={styles.timeline}>
              {content.experience.items.map((e) => (
                <div key={`${e.role}-${e.company}`} className={styles.timelineItem}>
                  <div className={styles.timelineLeft}>
                    <div className={styles.timelineRole}>{e.role}</div>
                    <div className={styles.timelineCompany}>{e.company}</div>
                    <div className={styles.timelinePeriod}>{e.period}</div>
                  </div>
                  <ul className={styles.bullets}>
                    {e.points.map((pt) => (
                      <li key={pt} className={styles.p}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" title={content.contact.title}>
            <p className={styles.p}>{content.contact.text}</p>

            <div className={styles.contactRow}>
              <a className={styles.button} href={`mailto:${content.links.email}`}>
                Envoyer un email
              </a>
              <a className={styles.buttonGhost} href={content.links.github}>
                GitHub
              </a>
              <a className={styles.buttonGhost} href={content.links.linkedin}>
                LinkedIn
              </a>
            </div>
          </Section>
        </Container>
      </main>

      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerRow}>
            <span>
              © {new Date().getFullYear()} {content.site.name}
            </span>
            <span className={styles.footerLinks}>
              <a href={content.links.github}>GitHub</a>
              <a href={content.links.linkedin}>LinkedIn</a>
              <a href={`mailto:${content.links.email}`}>Email</a>
            </span>
          </div>
        </Container>
      </footer>
    </>
  );
}