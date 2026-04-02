import styles from "./Footer.module.css";
import FooterNav from "./FooterNav";
import Subtitle from "../../../components/subtitle/Subtitle.jsx";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className="container">

        <div className={styles.top}>

          <div className={styles.brand}>
            <Subtitle line="zion" />
          </div>

          <div className={styles.infoGrid}>

            <div>
              <h4>Endereço</h4>
              <p>Fenriz Gym</p>
              <p>Lobeckstraße 36</p>
              <p>10969 Berlin</p>
            </div>

            <div>
              <h4>Horário</h4>
              <p>Seg-Sex <strong>07–22</strong></p>
              <p>Sábado <strong>07–12</strong></p>
              <p>Domingo <strong>Fechado</strong></p>
            </div>

            <div>
              <h4>Redes</h4>

              <div className={styles.socials}>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">YouTube</a>
              </div>
            </div>

          </div>

        </div>

        <FooterNav />

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <a href="#">Política de privacidade</a>
            <span>•</span>
            <p>Desenvolvido por Lucas Vidal</p>
          </div>

          <div className={styles.copy}>
            © 2026 Zion Brazilian Jiu Jitsu
          </div>
        </div>

      </div>

    </footer>
  );
}