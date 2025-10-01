import styles from '@/components/curso-detalhes/curso-detalhado.module.css';

const CourseOverview = ({ paragraphs, highlights }) => {
  if (!paragraphs?.length && !highlights?.length) {
    return null;
  }

  return (
    <article className={`${styles.card} ${styles.innerCard}`}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Sobre o Curso</h2>
      </header>

      {paragraphs?.length > 0 && (
        <div>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.sectionDescription}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {highlights?.length > 0 && (
        <div className={styles.highlightGrid}>
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className={styles.highlightCard}
              style={{ background: highlight.background }}
            >
              <span
                className={styles.highlightIcon}
                style={{ background: highlight.iconBackground }}
              >
                <i aria-hidden className={highlight.icon} />
              </span>
              <h3 className={styles.highlightTitle}>{highlight.title}</h3>
              <p className={styles.highlightText}>{highlight.description}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
};

export default CourseOverview;
