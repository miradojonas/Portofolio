import styles from "./Header.module.css";
import Container from "@/components/layout/Container";

const NAV_LINKS = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#formations", label: "Formations" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <a className={styles.brand} href="#top">
            Portfolio
          </a>
          <div className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} className="tap" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
