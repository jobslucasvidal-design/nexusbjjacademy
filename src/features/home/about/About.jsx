import styles from './About.module.css';
import Partners from './data/Partners';
import Subtitle from '../../../components/subtitle/Subtitle.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Button from '../../../components/button/Button.jsx';

export default function About() {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      
      <div className="container">

        <div className={styles.grid}>

          <div className={`${styles.left} fade-up`}>
            <Subtitle line="sobre nós" />
          </div>

          <div className={`${styles.right} fade-up delay-1`}>
            <Paragraph text="Fundada em 2010, nossa academia está localizada na Moritzplatz desde então. Inicialmente, começamos como uma academia focada exclusivamente em MMA, mas com o tempo nos tornamos um centro para diversas artes marciais, com ênfase em MMA, BJJ e Muay Thai." />

            <Paragraph text="Sete dias por semana, nossa equipe e comunidade oferecem uma enorme variedade de atividades em mais de 140 aulas. Nossa área de fitness e grandes tatames também oferecem oportunidades para treinamento individual de força e técnica ou sessões de sparring com amigos." />

            <div className={styles.ctaWrapper}>
              <Button url="#" text="saiba mais" />
            </div>
          </div>

        </div>

        <Partners />

      </div>
    </section>
  );
}