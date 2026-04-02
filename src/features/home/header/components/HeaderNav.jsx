import styles from './HeaderNav.module.css';

export default function HeaderNav({ isMobile = false, onClickLink }) {
  const links = [
    { label: "home", href: "#home" },
    { label: "sobre mim", href: "#sobre" },
    { label: "projetos", href: "#projetos" },
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