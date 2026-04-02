import styles from "../About.module.css"
import zion from "../../../../assets/icons/zion.svg"
import feu from "../../../../assets/icons/feu.svg"

export default function Partners() {
  const partners = [
    { id: 1, name: "ZION", logo: zion },
    { id: 2, name: "FEU", logo: feu },
  ];

  return (
    <aside className={styles.partners}>
      <h3 className={styles.partnersTitle}>Nossos parceiros</h3>

      <ul className={styles.partnersList}>
        {partners.map((partner) => (
          <li key={partner.id} className={styles.partner}>
            <img
              src={partner.logo}
              alt={`Logo ${partner.name}`}
              className={styles.partnerLogo}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}