import styles from "./Aulas.module.css";
import Subtitle from "../../../components/subtitle/Subtitle.jsx"

import img1 from "../../../assets/images/women.png";
import img2 from "../../../assets/images/adults.png";
import img3 from "../../../assets/images/kids.png";

const classes = [
  {
    title: "BJJ MULHERES",
    text: "Treine em um ambiente seguro, acolhedor e focado no desenvolvimento técnico. Fortaleça sua confiança, condicionamento físico e habilidades reais de defesa pessoal. Aqui, cada evolução é respeitada no seu tempo.",
    image: img1,
  },
  {
    title: "BJJ ADULTOS",
    text: "Aulas para todos os níveis, do iniciante ao avançado, com foco em técnica e evolução constante. Desenvolva disciplina, resistência e controle em um ambiente desafiador. Treine com propósito e supere seus limites a cada sessão.",
    image: img2,
  },
  {
    title: "BJJ KIDS",
    text: "Aulas dinâmicas que desenvolvem disciplina, respeito e coordenação motora. Um ambiente divertido e seguro para o crescimento físico e emocional das crianças. Aqui, elas aprendem muito além do esporte.",
    image: img3,
  },
];

export default function Aulas() {
  return (
    <section className={styles.section}>
      <div className="container">
        
        <div className={`${styles.header} fade-up`}>
          <Subtitle line="nossas aulas" id="aulas-title" />
        </div>

        <div className={styles.grid}>
          {classes.map((item, index) => (
            <div
              key={item.title}
              className={`${styles.card} fade-up delay-${index}`}
            >
              <img src={item.image} alt={item.title} />

              <div className={styles.overlay} />

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}