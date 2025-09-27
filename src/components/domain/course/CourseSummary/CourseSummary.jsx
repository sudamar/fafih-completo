import styles from './CourseSummary.module.css';

const buildList = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean);
  return [value];
};

const CourseSummary = ({ course }) => {
  if (!course) {
    return null;
  }

  const descriptionParagraphs = buildList(course.fullDescription?.length ? course.fullDescription : course.description);
  const objectives = buildList(course.objetivos);
  const audience = buildList(course.publico);
  const outcomes = buildList(course.resultados);

  const metadata = [
    course.duration && { label: 'Duração', value: course.duration },
    course.workload && { label: 'Carga horária', value: course.workload },
    course.modalidade && { label: 'Modalidade', value: course.modalidade },
    course.startDate && { label: 'Início', value: course.startDate },
    course.certificate && { label: 'Certificação', value: course.certificate }
  ].filter(Boolean);

  return (
    <section className={styles.summary} data-testid="course-summary">
      <header className={styles.header}>
        <h2>Sobre o cursooooooo</h2>
        <p>
          Conheça os principais diferenciais, objetivos e público da formação{course.categoryLabel ? ` ${course.categoryLabel.toLowerCase()}` : ''}.
        </p>
      </header>

      {!!metadata.length && (
        <dl className={styles.metadata}>
          {metadata.map((item) => (
            <div key={item.label} className={styles.metadataItem}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {!!descriptionParagraphs.length && (
        <article className={styles.block}>
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      )}

      {!!objectives.length && (
        <article className={styles.block}>
          <h3>Objetivos</h3>
          <ul>
            {objectives.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      )}

      {!!audience.length && (
        <article className={styles.block}>
          <h3>Para quem é</h3>
          <ul>
            {audience.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      )}

      {!!outcomes.length && (
        <article className={styles.block}>
          <h3>Resultados esperados</h3>
          <ul>
            {outcomes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      )}
    </section>
  );
};

export default CourseSummary;
