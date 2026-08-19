import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={`${styles.brand} tap`} href="#top">
        MIRADO
      </a>
      <nav className={styles.nav}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} className={`${styles.navLink} tap`} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
