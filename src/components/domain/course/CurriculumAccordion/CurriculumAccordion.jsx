import styles from './CurriculumAccordion.module.css';

const CurriculumAccordion = ({ curriculum = [] }) => {
  if (!curriculum.length) {
    return null;
  }

  return (
    <section className={styles.curriculum} data-testid="course-curriculum">
      <header>
        <h2>Estrutura curricular</h2>
        <p>Conheça os principais módulos, cargas horárias e referências bibliográficas.</p>
      </header>

      <div className={styles.list}>
        {curriculum.map((module) => (
          <details key={module.number || module.title} className={styles.item}>
            <summary>
              <span className={styles.badge}>{module.number || '•'}</span>
              <div className={styles.summaryContent}>
                <strong>{module.title}</strong>
                {module.hours && <small>{module.hours}h</small>}
              </div>
            </summary>

            <div className={styles.panel}>
              {module.ementa && (
                <div className={styles.section}>
                  <h3>Ementa</h3>
                  <p>{module.ementa}</p>
                </div>
              )}

              {module.objetivos && (
                <div className={styles.section}>
                  <h3>Objetivos</h3>
                  <p>{module.objetivos}</p>
                </div>
              )}

              {Array.isArray(module.bibliography) && module.bibliography.length > 0 && (
                <div className={styles.section}>
                  <h3>Bibliografia</h3>
                  <ul>
                    {module.bibliography.map((book, index) => (
                      <li key={index}>{book}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default CurriculumAccordion;
