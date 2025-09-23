import styles from './faculty-members.module.css';

// Versão simples - apenas nome, foto, cargo e botão individual "Veja mais"
export function FacultyMembersSimple({ facultyMembers }) {
  if (!facultyMembers || facultyMembers.length === 0) {
    return null;
  }

  // Pega apenas os primeiros 8 membros para a versão simples
  const limitedMembers = facultyMembers.slice(0, 8);

  // Função para gerar avatar fictício baseado no index
  const generateAvatarUrl = (index) => {
    const avatarSeed = `professor-${index}`;
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&size=200`;
  };

  // Função para gerar ID único do professor baseado no nome
  const generateProfessorId = (name, index) => {
    return name.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/^(doutor|doutora|mestre|especialista)\s*/, '') // Remove títulos
      || `professor-${index}`; // Fallback para index se nome for inválido
  };

  return (
    <article className={styles.facultyCard}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Corpo Docente</h2>
      </header>
      <div className={styles.facultyGridSimple}>
        {limitedMembers.map((member, index) => (
          <div key={index} className={styles.facultyMemberSimple}>
            <div className={styles.facultyAvatarWrapper}>
              <img
                src={generateAvatarUrl(index)}
                alt={member.name}
                className={styles.facultyAvatarSimple}
                loading="lazy"
              />
            </div>
            <div className={styles.facultyInfoSimple}>
              <h3 className={styles.facultyNameSimple}>{member.name}</h3>
              <p className={styles.facultyTitleSimple}>{member.title}</p>
              <a
                href={`/professor/${generateProfessorId(member.name, index)}`}
                className={styles.professorLink}
              >
                Veja mais
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.facultyViewMore}>
        <a href="/corpo-docente" className={styles.viewMoreLink}>
          Ver Corpo Docente Completo
          <span className={styles.viewMoreIcon}>→</span>
        </a>
      </div>
    </article>
  );
}

// Versão completa - com todas as informações
export function FacultyMembers({ facultyMembers }) {
  if (!facultyMembers || facultyMembers.length === 0) {
    return null;
  }

  // Função para gerar avatar fictício baseado no index
  const generateAvatarUrl = (index) => {
    const avatarSeed = `professor-${index}`;
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&size=200`;
  };

  return (
    <article className={styles.facultyCard}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Corpo Docente</h2>
      </header>
      <div className={styles.facultyGrid}>
        {facultyMembers.map((member, index) => (
          <div key={index} className={styles.facultyMember}>
            <div className={styles.facultyAvatarWrapper}>
              <img
                src={generateAvatarUrl(index)}
                alt={member.name}
                className={styles.facultyAvatar}
                loading="lazy"
              />
            </div>
            <div className={styles.facultyInfo}>
              <h3 className={styles.facultyName}>{member.name}</h3>
              <p className={styles.facultyTitle}>{member.title}</p>
              <p className={styles.facultyDescription}>{member.description}</p>
              {member.address && (
                <p className={styles.facultyAddress}>{member.address}</p>
              )}
              <div className={styles.facultyContact}>
                {member.phone && (
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Telefone:</span>
                    <span className={styles.contactValue}>{member.phone}</span>
                  </div>
                )}
                {member.email && (
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Email:</span>
                    <a
                      href={`mailto:${member.email}`}
                      className={styles.contactValue}
                    >
                      {member.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}