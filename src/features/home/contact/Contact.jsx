import styles from './Contact.module.css';
import imgMapa from '../../../assets/images/mapa.png';
import ContactActions from '../contact/data/ContactActions.jsx';

import Subtitle from '../../../components/subtitle/Subtitle.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';

export default function Contact() {
  return (
    <section className={styles.contact} aria-labelledby="contact-title">
      
      <div className="container">

        <div className={styles.grid}>
          
          <div className={`${styles.left} fade-up`}>
            <Subtitle line="faq & contato" id="contact-title" />
          </div>

          <div className={`${styles.right} fade-up delay-1`}>
            
            <div className={styles.textBlock}>
              <Paragraph text="Tem alguma dúvida sobre a academia, as aulas ou o treino experimental?" />
              <Paragraph text="Acesse nossa central de ajuda ou fale diretamente com a nossa equipe." />
            </div>

            <div className={styles.textBlock}>
              <Paragraph text="Caso não encontre sua resposta, envie-nos um e-mail ou fale sobre parcerias e colaborações." />
            </div>

            <ContactActions />

          </div>

          <div className={`${styles.mapWrapper} fade-up delay-2`}>
            <img
              src={imgMapa}
              alt="Mapa mostrando localização da academia"
              className={styles.map}
            />
          </div>

        </div>

      </div>
    </section>
  );
}