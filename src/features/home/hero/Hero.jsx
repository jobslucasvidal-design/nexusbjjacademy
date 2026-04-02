import styles from './Hero.module.css';
import Title from '../../../components/title/Title.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Button from '../../../components/button/Button.jsx';
import useInView from '../../../hooks/useInView';

export default function Hero() {
  const [ref, isVisible] = useInView();

  return (
    <section className={styles.hero}>
      <div
        ref={ref}
        className={`container ${styles.heroSection} fade-up ${
          isVisible ? "show" : ""
        }`}
      >
        <Title
          line="brazilian jiu jitsu disciplina evolução."
        />

        <Paragraph
          text="Venha treinar conosco no coração de Berlim. Uma ótima comunidade com instrutores experientes espera por você. Juntos, vamos extrair o melhor de você."
        />

        <Button url="#" text="venha treinar conosco" />
      </div>
    </section>
  );
}