import styles from "./About.module.css";
import Partners from "./data/Partners.jsx";
import Subtitle from "../../../components/subtitle/Subtitle.jsx";
import Paragraph from "../../../components/paragraph/Paragraph.jsx";
import Button from "../../../components/button/Button.jsx";

export default function About() {
  return (
    <section
      className={styles.about}
      id="sobrenos"
      aria-labelledby="about-title"
    >
      <div className="container">

        <header className={`${styles.headerAbout} fade-up`}>
          <h2 id="about-title">
            <Subtitle line="sobre nós" />
          </h2>
        </header>

        <div className={`${styles.contentAbout} fade-up delay-1`}>

          <Paragraph
            text="Em São Roque - SP, somos uma academia especializada em Jiu Jitsu, construída para quem busca um ambiente sério, técnico e comprometido com a prática no tatame."
          />

          <Paragraph
            text="Oferecemos treinos ao longo de toda a semana, com foco total em técnica, evolução e prática constante no Jiu Jitsu. Nosso espaço conta com amplos tatames ideais para treinos, drills e sessões de sparring."
          />

          <div className={styles.ctaWrapper}>
            <Button url="#" text="saiba mais" />
          </div>

        </div>

        <Partners />

      </div>
    </section>
  );
}