import styles from "./Footer.module.css";
import Container from "@/components/layout/Container";
import { content } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerRow}>
          <span>
            © {year} {content.site.name}
          </span>
          <span className={styles.footerLinks}>
            <a className="tap" href={content.links.github}>
              GitHub
            </a>
            <a className="tap" href={content.links.linkedin}>
              LinkedIn
            </a>
            <a className="tap" href={`mailto:${content.links.email}`}>
              Email
            </a>
            <a className="tap" href={content.links.facebook}>
              Facebook
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
