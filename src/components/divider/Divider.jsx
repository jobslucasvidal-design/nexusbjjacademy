import styles from "./Divider.module.css";
import useInView from "../../hooks/useInView";

export default function Divider({ image }) {
  const [ref, isVisible] = useInView();

  return (
    <section
      ref={ref}
      className={`${styles.divider} ${isVisible ? styles.show : ""}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay}></div>

      {/* ELEMENTOS GEOMÉTRICOS */}
      <div className={styles.shapeTop}></div>
      <div className={styles.shapeMiddle}></div>
      <div className={styles.shapeBottom}></div>
    </section>
  );
}