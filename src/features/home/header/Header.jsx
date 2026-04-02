import styles from './Header.module.css';
import MobileMenu from './components/menuMobile/MenuMobile.jsx';
import HeaderNav from './components/HeaderNav.jsx';

import zionLogo from "../../../assets/icons/logo.svg"

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={zionLogo} alt="Logo Zion" />
      <nav>
        <HeaderNav />
        <MobileMenu />
      </nav>
    </header>
  );
}