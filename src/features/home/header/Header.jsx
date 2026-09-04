// Import do CSS do Header
import styles from './Header.module.css';
// Import dos Components menuMobile e HeaderNav
import MobileMenu from './components/menuMobile/MenuMobile.jsx';
import HeaderNav from './components/HeaderNav.jsx';
// Import do Logotipo
import nexusLogo from "../../../assets/icons/nexus-logo.svg"

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={nexusLogo} alt="Logo Nexus" />
      <nav>
        <HeaderNav />
        <MobileMenu />
      </nav>
    </header>
  );
}