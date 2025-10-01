import styles from '@/components/curso-detalhes/curso-detalhado.module.css';

const CourseSupport = ({ renderIcon, channels }) => {
  if (!channels?.length) {
    return null;
  }

  return (
    <section className={styles.contactCard}>
      <div className={styles.contactIntro}>
        <span className={styles.contactIconBeam}>{renderIcon?.('support')}</span>
        <div className={styles.contactIntroText}>
          <h3 className={styles.contactTitle}>Precisa de Ajuda?</h3>
          <p className={styles.contactSubtitle}>
            Nossa equipe está pronta para orientar você durante a inscrição.
          </p>
        </div>
      </div>
      <div className={styles.contactGrid}>
        {channels.map((channel) => (
          <div
            key={channel.value}
            className={styles.contactTile}
            style={{ borderColor: `${channel.accent}1f` }}
          >
            <div className={styles.contactTileHeader}>
              <span
                className={styles.contactTileIcon}
                style={{ background: channel.tint, color: channel.accent }}
              >
                {renderIcon?.(channel.type)}
              </span>
              <span className={styles.contactTileTitle}>{channel.title}</span>
            </div>
            <span className={styles.contactTileValue}>{channel.value}</span>
            {channel.helper && (
              <span className={styles.contactTileHelper}>{channel.helper}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSupport;
