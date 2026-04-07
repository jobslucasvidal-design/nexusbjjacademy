import styles from "../About.module.css"
import { partners } from "./partnersData"

export default function Partners() {
  return (
    <aside className={styles.partners}>

      <h3 className={styles.partnersTitle}>
        Nossos parceiros
      </h3>

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
  )
}