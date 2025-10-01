import styles from '@/components/curso-detalhes/curso-detalhado.module.css';

const CourseHero = ({ title, subtitle, badges, media }) => {
  const isVideo = media?.type === 'video' && Boolean(media.source);
  const altText = media?.alt || `Apresentação do curso ${title}`;

  return (
    <article className={`${styles.card} ${styles.hero}`}>
      <figure className={styles.heroFigure}>
        {isVideo ? (
          <video
            className={styles.heroImage}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            title={altText}
            aria-label={altText}
          >
            <source src={media.source} type="video/mp4" />
            {media?.fallbackImage && (
              <img src={media.fallbackImage} alt={altText} className={styles.heroImage} />
            )}
          </video>
        ) : media?.fallbackImage || media?.source ? (
          <img
            src={media.fallbackImage || media.source}
            alt={altText}
            className={styles.heroImage}
            loading="lazy"
          />
        ) : (
          <div className={styles.heroPlaceholder} aria-hidden="true" />
        )}
        <div className={styles.heroOverlay} />
        <figcaption className={styles.heroContent}>
          {badges?.length > 0 && (
            <div className={styles.badgeList}>
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={styles.badge}
                  style={{ background: badge.color }}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          )}
          <div>
            <h1 className={styles.courseTitle}>{title}</h1>
            {subtitle && <p className={styles.courseSubtitle}>{subtitle}</p>}
          </div>
        </figcaption>
      </figure>
    </article>
  );
};

export default CourseHero;
