import styles from './Button.module.css';

const Button = ({ url, text }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      {text}
    </a>
  );
};

export default Button;