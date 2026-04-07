import styles from './HeaderNav.module.css';

export default function HeaderNav({ isMobile = false, onClickLink }) {
  const links = [
    { label: "início", href: "#inicio" },
    { label: "aulas", href: "#aulas" },
    { label: "horários", href: "#horarios" },
    { label: "sobre nós", href: "#sobrenos" },
    { label: "contato", href: "#contato" }
  ];

  return (
    <ul className={`${styles.navMenu} ${isMobile && styles.mobile}`}>
      {links.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className={styles.navLink}
            onClick={onClickLink}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}