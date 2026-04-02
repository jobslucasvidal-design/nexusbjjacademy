import styles from './Cta.module.css';
import img from '../../../assets/images/fight-1.png';

import Subtitle from '../../../components/subtitle/Subtitle.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Button from '../../../components/button/Button.jsx';

export default function Cta() {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.ctaContent}`}>

        <div className={`${styles.ctaText} fade-up`}>
          <Subtitle line="academia zion são roque" highlight="zion" />

          <Paragraph
            text={`Bem-vindo à Gracie Academy Berlin, lar de centenas de atletas.
            Seja você um competidor experiente ou iniciante, nosso ambiente
            inclusivo recebe todos de braços abertos.`}
          />

          <Button url="#" text="descubra nossas aulas" />
        </div>

        <div className={`${styles.ctaImage} fade-up delay-1`}>
          <img src={img} alt="Atleta treinando jiu jitsu" />
        </div>

      </div>
    </section>
  );
}