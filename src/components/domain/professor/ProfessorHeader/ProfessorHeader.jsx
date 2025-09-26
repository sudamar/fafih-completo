import styles from './ProfessorHeader.module.css';

const ProfessorHeader = ({ professor }) => {
  if (!professor) {
    return null;
  }

  const specialties = Array.isArray(professor.specialties)
    ? professor.specialties
    : professor.specialty
      ? [professor.specialty]
      : [];

  const contact = professor.contact || {};

  return (
    <section className={styles.header} data-testid="professor-header">
      <div className={styles.avatar} aria-hidden>
        {professor.photo || professor.foto ? (
          <img src={professor.photo || professor.foto} alt={professor.name} />
        ) : (
          <span>{professor.name?.slice(0, 1) || '?'}</span>
        )}
      </div>

      <div className={styles.info}>
        <h1>{professor.name}</h1>
        {professor.title && <p className={styles.title}>{professor.title}</p>}

        {!!specialties.length && (
          <ul className={styles.specialties}>
            {specialties.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        )}

        {(contact.phone || contact.email) && (
          <div className={styles.contact}>
            {contact.phone && (
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>Telefone: {contact.phone}</a>
            )}
            {contact.email && (
              <a href={`mailto:${contact.email}`}>E-mail: {contact.email}</a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfessorHeader;
