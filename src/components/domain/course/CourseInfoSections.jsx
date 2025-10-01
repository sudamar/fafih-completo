import styles from '@/components/curso-detalhes/curso-detalhado.module.css';

const SectionBlock = ({ title, paragraphs, listItems }) => {
  if ((!paragraphs || paragraphs.length === 0) && (!listItems || listItems.length === 0)) {
    return null;
  }

  return (
    <section className={styles.textBlock}>
      <h3>{title}</h3>
      {paragraphs?.map((paragraph, index) => (
        <p key={`${title}-p-${index}`}>{paragraph}</p>
      ))}
      {listItems?.length > 0 && (
        <ul className={styles.bulletList}>
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

const CourseInfoSections = ({ justification, objectives, targetAudience }) => {
  if (!justification?.length && !objectives?.length && !targetAudience?.length) {
    return null;
  }

  return (
    <article className={`${styles.card} ${styles.innerCard}`}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Demais Informações</h2>
      </header>

      <SectionBlock title="Justificativa" paragraphs={justification} />
      <SectionBlock title="Objetivos" listItems={objectives} />
      <SectionBlock title="Para quem é" paragraphs={targetAudience} />
    </article>
  );
};

export default CourseInfoSections;
