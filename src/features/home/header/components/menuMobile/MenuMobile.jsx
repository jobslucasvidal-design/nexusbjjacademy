import { useState } from 'react';
import HeaderNav from '../HeaderNav';
import styles from './MenuMobile.module.css';

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={`${styles.navToggle} ${isOpen && styles.navToggleActive}`}
        onClick={() => setIsOpen(prev => !prev)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`${styles.navOverlay} ${isOpen && styles.navOverlayActive}`}
      >
        <HeaderNav isMobile onClickLink={() => setIsOpen(false)} />
      </div>
    </div>
  );
}