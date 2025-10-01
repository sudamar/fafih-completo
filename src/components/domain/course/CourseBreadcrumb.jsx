import styles from '@/components/curso-detalhes/curso-detalhado.module.css';

const CourseBreadcrumb = ({ items }) => {
  if (!items?.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbWrapper}>
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className={styles.breadcrumbItem}>
          {index > 0 && <span className={styles.breadcrumbSeparator}>›</span>}
          {item.href ? (
            <a href={item.href} className={styles.breadcrumbLink}>
              {item.label}
            </a>
          ) : (
            <span className={styles.breadcrumbActive}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default CourseBreadcrumb;
