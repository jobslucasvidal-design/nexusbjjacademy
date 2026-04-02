import styles from './Subtitle.module.css';

export default function Subtitle({ line, highlight }) {
  const [before, after] = highlight
    ? line.split(highlight)
    : [line, ""];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subtitle}>
        {before}
        {highlight && <span>{highlight}</span>}
        {after}
      </h2>

      <div className={styles.beltBar}>
        <span className={styles.red}></span>
      </div>
    </div>
  );
}