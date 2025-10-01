import styles from '@/components/curso-detalhes/curso-detalhado.module.css';

const CourseSidebar = ({ enrollmentInfo, priceLabel, priceValue, categoryLabel, modality }) => {
  if (!enrollmentInfo?.length && !priceValue) {
    return null;
  }

  return (
    <aside className={styles.sidebar}>
      <section className={styles.sidebarCard}>
        <div className={styles.sidebarPrice}>
          {priceValue && (
            <>
              {priceLabel && <small className={styles.priceLabel}>{priceLabel}</small>}
              <strong>{priceValue}</strong>
            </>
          )}
          {categoryLabel && <span>{categoryLabel}</span>}
          {modality && <small>{modality}</small>}
        </div>

        {enrollmentInfo?.length > 0 && (
          <div className={styles.sidebarMeta}>
            {enrollmentInfo.map((item) => (
              <span key={item.label}>
                <span className={styles.metaIcon}>
                  <i aria-hidden className={item.icon} />
                </span>
                {item.label}: {item.value}
              </span>
            ))}
          </div>
        )}

        <div className={styles.sidebarButtons}>
          <button type="button" className={styles.primaryButton}>
            Inscrever-se Agora
          </button>
          <button type="button" className={styles.secondaryButton}>
            Download da Ementa
          </button>
        </div>
      </section>
    </aside>
  );
};

export default CourseSidebar;
