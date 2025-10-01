import { useEffect, useState } from 'react';
import styles from '@/components/curso-detalhes/curso-detalhado.module.css';

const normalizeToArray = (value) => {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
};

const CourseCurriculum = ({ items }) => {
  const [openItems, setOpenItems] = useState([]);

  useEffect(() => {
    setOpenItems(items.map(() => false));
  }, [items]);

  if (!items?.length) {
    return null;
  }

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <article className={`${styles.card} ${styles.innerCard}`}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Grade Curricular</h2>
      </header>
      <div className={styles.curriculumList}>
        {items.map((item, index) => {
          const hours = item.hours || item.horas || '';
          const summary = item.summary || (() => {
            const text = item.description || '';
            return text.includes('-') ? text.split('-').slice(1).join('-').trim() : text;
          })();
          const ementa = normalizeToArray(item.ementa);
          const objetivos = normalizeToArray(item.objetivos);
          const bibliography = item.bibliography || [];

          return (
            <div key={item.number ?? index} className={styles.curriculumItem}>
              <button
                type="button"
                className={styles.curriculumHeader}
                onClick={() => toggleItem(index)}
                aria-expanded={openItems[index] ?? false}
              >
                <div className={styles.curriculumMain}>
                  <span
                    className={`${styles.curriculumToggleSymbol} ${
                      openItems[index] ? styles.curriculumToggleOpen : ''
                    }`}
                    aria-hidden="true"
                  >
                    {openItems[index] ? '−' : '+'}
                  </span>
                  <div className={styles.curriculumTexts}>
                    <h3>{item.title}</h3>
                    {summary && (
                      <span className={styles.curriculumSummary}>{summary}</span>
                    )}
                  </div>
                </div>
              </button>
              <div
                className={`${styles.curriculumContent} ${
                  openItems[index] ? styles.curriculumContentOpen : ''
                }`}
              >
                {hours && (
                  <p className={styles.curriculumHours}>
                    <strong>Carga horária:</strong> {hours}
                  </p>
                )}

                {summary && <p className={styles.curriculumSummaryText}>{summary}</p>}

                {ementa.length > 0 && (
                  <div className={styles.curriculumSection}>
                    <h4>Ementa</h4>
                    <ul className={styles.curriculumListDetailed}>
                      {ementa.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {objetivos.length > 0 && (
                  <div className={styles.curriculumSection}>
                    <h4>Objetivos</h4>
                    <ul className={styles.curriculumListDetailed}>
                      {objetivos.map((goal) => (
                        <li key={goal}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {bibliography.length > 0 && (
                  <div className={styles.curriculumSection}>
                    <h4>Bibliografia</h4>
                    <ul className={styles.curriculumListDetailed}>
                      {bibliography.map((ref) => (
                        <li key={ref}>{ref}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default CourseCurriculum;
