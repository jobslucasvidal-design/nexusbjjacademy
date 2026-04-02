import styles from './Title.module.css';

export default function Title({ line, highlight }) {
  const [before, after] = line.split(highlight);

  return (
    <h1 className={styles.title}>
      {before}
      <span className={styles.highlight}>{highlight}</span>
      {after}
    </h1>
  );
}