import styles from './CourseHero.module.css'; 

const getHeroMedia = (hero = {}, fallbackImage) => {
  if (!hero) {
    return { type: 'image', source: fallbackImage, fallback: fallbackImage };
  }

  const type = hero.type || (hero.source && hero.source.endsWith('.mp4') ? 'video' : 'image');

  return {
    type,
    source: hero.source || fallbackImage,
    fallback: hero.fallbackImage || fallbackImage,
    alt: hero.alt || '',
    label: hero.label || null
  };
};

const CourseHero = ({ course }) => {
  if (!course) {
    return null;
  }

  const heroMedia = getHeroMedia(course.hero, course.image);
  const badges = [
    course.categoryLabel && { id: 'category', label: course.categoryLabel },
    course.duration && { id: 'duration', label: course.duration },
    course.modalidade && { id: 'modality', label: course.modalidade }
  ].filter(Boolean);

  return (
    <section className={styles.hero} data-testid="course-hero">
      <div className={styles.content}>
        <div className={styles.header}>
          {course.parentCategory && (
            <span className={styles.parent}>{course.parentCategory}</span>
          )}
          <h1 className={styles.title}>{course.title}</h1>
          {course.subtitle && <p className={styles.subtitle}>{course.subtitle}</p>}
          {!!badges.length && (
            <ul className={styles.badges}>
              {badges.map((badge) => (
                <li key={badge.id} className={styles.badge}>
                  {badge.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.actions}>
          {course.enrollmentLink && (
            <a className={styles.primaryButton} href={course.enrollmentLink}>
              Inscreva-se agora
            </a>
          )}
          {course.contactLink && (
            <a className={styles.secondaryButton} href={course.contactLink}>
              Fale com a secretaria
            </a>
          )}
        </div>

        {course.highlights?.length && (
          <ul className={styles.highlights}>
            {course.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight.title} className={styles.highlightCard}>
                <div className={styles.highlightIcon} aria-hidden>
                  <span>{highlight.icon || '★'}</span>
                </div>
                <div>
                  <strong>{highlight.title}</strong>
                  <p>{highlight.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.media}>
        {heroMedia.type === 'video' ? (
          <video
            className={styles.video}
            poster={heroMedia.fallback}
            controls
            preload="metadata"
          >
            <source src={heroMedia.source} type="video/mp4" />
            Seu navegador não suporta vídeo HTML5. Veja a apresentação em
            <a href={heroMedia.source}> {heroMedia.source}</a>.
          </video>
        ) : (
          <img
            className={styles.image}
            src={heroMedia.source || heroMedia.fallback}
            alt={heroMedia.alt || `Imagem ilustrativa do curso ${course.title}`}
          />
        )}
        {heroMedia.label && (
          <span className={styles.mediaLabel}>{heroMedia.label}</span>
        )}
      </div>
    </section>
  );
};

export default CourseHero;
