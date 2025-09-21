import styles from './modelo2.module.css';
import heroVideo from '../../assets/videos/video-aula-jung.mp4';

const breadcrumbItems = [
  { label: 'Início', href: '/' },
  { label: 'Pós-Graduação', href: '/pos-graduacao' },
  { label: 'Psicologia Junguiana' },
];

const heroBadges = [
  { label: 'Pós-Graduação', color: '#05B18B' },
  { label: '18 meses', color: '#2105D0' },
];

const heroMedia = {
  video: heroVideo,
  poster: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e30c4d6bd3-d8d26c9e64de72469123.png',
  alt: 'Ambiente acadêmico para o curso Pós-Graduação em Psicologia Junguiana',
};

const courseOverviewParagraphs = [
  'A Pós-Graduação em Psicologia Junguiana oferece uma formação aprofundada na teoria e prática da Psicologia Analítica desenvolvida por Carl Gustav Jung. Este programa é destinado a profissionais da área da saúde mental que desejam se especializar nesta abordagem terapêutica única e transformadora.',
  'O curso aborda conceitos fundamentais como inconsciente coletivo, arquétipos, individuação, tipos psicológicos e análise de sonhos, proporcionando uma compreensão integral da psique humana segundo a perspectiva junguiana.',
];

const highlightCards = [
  {
    icon: 'fas fa-brain',
    title: 'Abordagem Profunda',
    description: 'Estudo aprofundado da teoria junguiana e suas aplicações práticas',
    background: 'linear-gradient(145deg, #e9f1ff, #d8e7ff)',
    iconBackground: 'linear-gradient(135deg, #4a6bff, #3e4ddf)',
  },
  {
    icon: 'fas fa-users',
    title: 'Corpo Docente',
    description: 'Professores especialistas e analistas junguianos certificados',
    background: 'linear-gradient(145deg, #e3f7f1, #ccefe3)',
    iconBackground: 'linear-gradient(135deg, #32c194, #05b18b)',
  },
  {
    icon: 'fas fa-certificate',
    title: 'Certificação',
    description: 'Certificado reconhecido pelo MEC e entidades especializadas',
    background: 'linear-gradient(145deg, #efe7ff, #dacdf9)',
    iconBackground: 'linear-gradient(135deg, #8e72ff, #6f48ff)',
  },
];

const curriculumItems = [
  {
    number: '1',
    title: 'Fundamentos da Psicologia Analítica',
    description: '60h - Introdução aos conceitos básicos da teoria junguiana',
  },
  {
    number: '2',
    title: 'Inconsciente Coletivo e Arquétipos',
    description: '60h - Estudo aprofundado dos padrões universais da psique',
  },
  {
    number: '3',
    title: 'Tipos Psicológicos',
    description: '45h - Classificação tipológica e aplicações clínicas',
  },
  {
    number: '4',
    title: 'Análise de Sonhos',
    description: '45h - Técnicas de interpretação e análise onírica',
  },
  {
    number: '5',
    title: 'Prática Clínica Supervisionada',
    description: '90h - Aplicação prática com supervisão especializada',
  },
];

const facultyMembers = [
  {
    name: 'Prof. Dra. Maria Silva',
    title: 'Analista Junguiana Certificada',
    experience: '25 anos de experiência clínica',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
  },
  {
    name: 'Prof. Dr. João Santos',
    title: 'Especialista em Tipos Psicológicos',
    experience: 'PhD em Psicologia Analítica',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
  },
  {
    name: 'Prof. Dra. Ana Costa',
    title: 'Especialista em Análise de Sonhos',
    experience: 'Membro da IAAP',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
  },
  {
    name: 'Prof. Dr. Carlos Lima',
    title: 'Pesquisador em Arquétipos',
    experience: 'Autor de 15 livros',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
  },
];

const enrollmentInfo = [
  { icon: 'fas fa-calendar', label: 'Início', value: 'Março 2024' },
  { icon: 'fas fa-clock', label: 'Duração', value: '18 meses' },
  { icon: 'fas fa-map-marker-alt', label: 'Modalidade', value: 'Presencial' },
  { icon: 'fas fa-users', label: 'Turma', value: 'Máx. 25 alunos' },
  { icon: 'fas fa-certificate', label: 'Certificação', value: 'Reconhecida MEC' },
];

const supportChannels = [
  {
    type: 'phone',
    title: 'Central de Atendimento',
    value: '(11) 3333-4444',
    helper: 'Seg. a Sex., 9h às 18h',
    accent: '#1f3bb6',
    tint: 'rgba(33, 5, 208, 0.12)',
  },
  {
    type: 'whatsapp',
    title: 'Coordenação pelo WhatsApp',
    value: '(11) 99999-8888',
    helper: 'Resposta em até 1 hora útil',
    accent: '#05B18B',
    tint: 'rgba(5, 177, 139, 0.12)',
  },
  {
    type: 'email',
    title: 'E-mail da Secretaria',
    value: 'contato@fafih.edu.br',
    helper: 'Retorno em até 24h',
    accent: '#5126ff',
    tint: 'rgba(81, 38, 255, 0.12)',
  },
];

const renderContactIcon = (type) => {
  const baseProps = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  switch (type) {
    case 'phone':
      return (
        <svg {...baseProps}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.24 1.55.42 2.36.54A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...baseProps}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8Z" />
          <path d="M8.5 12.5 10 14a2.4 2.4 0 0 0 2.5.6l.5-.2a.6.6 0 0 0 .2-1l-.7-1.1a1.6 1.6 0 0 0-1-.7l-.4-.1" />
          <path d="M12 6v0" />
        </svg>
      );
    case 'email':
      return (
        <svg {...baseProps}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'support':
    default:
      return (
        <svg {...baseProps}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
          <line x1="9.17" y1="14.83" x2="4.93" y2="19.07" />
        </svg>
      );
  }
};

const Modelo2 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbWrapper}>
          {breadcrumbItems.map((item, index) => (
            <span key={item.label} className={styles.breadcrumbItem}>
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

        <div className={styles.main}>
          <div className={styles.content}>
            <article className={`${styles.card} ${styles.hero}`}>
              <figure className={styles.heroFigure}>
                <video
                  className={styles.heroImage}
                  src={heroMedia.video}
                  poster={heroMedia.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  {heroMedia.alt}
                </video>
                <div className={styles.heroOverlay} />
                <figcaption className={styles.heroContent}>
                  <div className={styles.badgeList}>
                    {heroBadges.map((badge) => (
                      <span
                        key={badge.label}
                        className={styles.badge}
                        style={{ background: badge.color, color: '#ffffff' }}
                      >
                        {badge.label}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h1 className={styles.courseTitle}>Pós-Graduação em Psicologia Junguiana</h1>
                    <p className={styles.courseSubtitle}>
                      Formação especializada em Psicologia Analítica de Carl Gustav Jung
                    </p>
                  </div>
                </figcaption>
              </figure>
            </article>

            <article className={`${styles.card} ${styles.innerCard}`}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Sobre o Curso</h2>
              </header>
              <div>
                {courseOverviewParagraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.sectionDescription}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className={styles.highlightGrid}>
                {highlightCards.map((card) => (
                  <div
                    key={card.title}
                    className={styles.highlightCard}
                    style={{ background: card.background }}
                  >
                    <span
                      className={styles.highlightIcon}
                      style={{ background: card.iconBackground }}
                    >
                      <i aria-hidden className={card.icon} />
                    </span>
                    <h3 className={styles.highlightTitle}>{card.title}</h3>
                    <p className={styles.highlightText}>{card.description}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className={`${styles.card} ${styles.innerCard}`}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Grade Curricular</h2>
              </header>
              <div className={styles.curriculumList}>
                {curriculumItems.map((item) => (
                  <div key={item.number} className={styles.curriculumItem}>
                    <div className={styles.curriculumMain}>
                      <span className={styles.curriculumNumber}>{item.number}</span>
                      <div className={styles.curriculumTexts}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <i aria-hidden className={`fas fa-chevron-down ${styles.curriculumArrow}`} />
                  </div>
                ))}
              </div>
            </article>

            <article className={`${styles.card} ${styles.innerCard}`}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Corpo Docente</h2>
              </header>
              <div className={styles.facultyGrid}>
                {facultyMembers.map((member) => (
                  <div key={member.name} className={styles.facultyCard}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className={styles.facultyAvatar}
                      loading="lazy"
                    />
                    <div>
                      <p className={styles.facultyName}>{member.name}</p>
                      <p className={styles.facultyTitle}>{member.title}</p>
                      <p className={styles.facultyExperience}>{member.experience}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <section className={`${styles.card} ${styles.contactCard}`}>
              <div className={styles.contactIntro}>
                <span className={styles.contactIconBeam}>{renderContactIcon('support')}</span>
                <div className={styles.contactIntroText}>
                  <h3 className={styles.contactTitle}>Precisa de Ajuda?</h3>
                  <p className={styles.contactSubtitle}>
                    Nossa equipe está pronta para orientar você durante a inscrição.
                  </p>
                </div>
              </div>
              <div className={styles.contactGrid}>
                {supportChannels.map((channel) => (
                  <div
                    key={channel.value}
                    className={styles.contactTile}
                    style={{ borderColor: channel.accent + '1f' }}
                  >
                    <div className={styles.contactTileHeader}>
                      <span
                        className={styles.contactTileIcon}
                        style={{
                          background: channel.tint,
                          color: channel.accent,
                        }}
                      >
                        {renderContactIcon(channel.type)}
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

          </div>

          <aside className={styles.sidebar}> 
            <section className={styles.sidebarCard}>
              <div className={styles.sidebarPrice}>
                <strong>R$ 2.890</strong>
                <span>À vista ou em até 18x</span>
                <small>R$ 160,56/mês</small>
              </div>

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
        </div>
      </div>
    </section>
  );
};

export default Modelo2;
