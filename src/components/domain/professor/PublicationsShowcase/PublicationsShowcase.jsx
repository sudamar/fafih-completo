import styles from './PublicationsShowcase.module.css';

const PublicationsShowcase = ({ publications = [] }) => {
  if (!publications.length) {
    return null;
  }

  return (
    <section className={styles.section} data-testid="professor-publications">
      <header>
        <h2>Publicações e Produções Acadêmicas</h2>
        <p>Conheça algumas obras e materiais publicados pelo docente.</p>
      </header>

      <div className={styles.grid}>
        {publications.map((publication) => (
          <article key={publication.id || publication.title} className={styles.card}>
            {publication.cover && (
              <img src={publication.cover} alt={`Capa do material ${publication.title}`} />
            )}
            <div className={styles.content}>
              <strong>{publication.title}</strong>
              {publication.publisher && <span>{publication.publisher}</span>}
              {publication.type && <small>{publication.type}</small>}
              {publication.link && (
                <a href={publication.link} target="_blank" rel="noreferrer">
                  Acessar publicação
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PublicationsShowcase;
