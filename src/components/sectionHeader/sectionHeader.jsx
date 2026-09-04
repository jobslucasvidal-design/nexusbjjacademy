// Import do CSS sectionHeader
import styles from "../sectionHeader/sectionHeader.module.css";
// Import dos Components Globais
import Subtitle from "../subtitle/Subtitle.jsx";
import Paragraph from "../paragraph/Paragraph.jsx";

export default function SectionHeader({ title, description }) {
  return (
    <div className={styles.sectionHeader}>
      <Subtitle line={title} />
      {description && (
        <Paragraph text={description} />
      )}
    </div>
  );
}