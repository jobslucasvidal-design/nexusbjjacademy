import styles from "./Footer.module.css"

export default function FooterNav() {
  const footerLinks = [
    { label: "ajuda", href: "#ajuda" },
    { label: "aulas", href: "#aulas" },
    { label: "sobre nós", href: "#sobre" },
    { label: "onde estamos", href: "#localizacao" },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {footerLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}