import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styles from './curso-detalhado.module.css';
import { getCourseDetails } from './courseDetailsData';

const highlightBackgroundMap = {
  'bg-blue-50': 'linear-gradient(145deg, #e9f1ff, #d8e7ff)',
  'bg-green-50': 'linear-gradient(145deg, #e3f7f1, #ccefe3)',
  'bg-purple-50': 'linear-gradient(145deg, #efe7ff, #dacdf9)',
  'bg-red-50': 'linear-gradient(145deg, #ffe9ed, #ffd6dd)',
  'bg-amber-50': 'linear-gradient(145deg, #fff8e6, #ffefcc)',
  'bg-yellow-50': 'linear-gradient(145deg, #fffde7, #fff8c4)',
  'bg-indigo-50': 'linear-gradient(145deg, #eaedff, #dfe2ff)',
};

const highlightIconMap = {
  'bg-blue-500': 'linear-gradient(135deg, #4a6bff, #3e4ddf)',
  'bg-green-500': 'linear-gradient(135deg, #32c194, #05b18b)',
  'bg-purple-500': 'linear-gradient(135deg, #8e72ff, #6f48ff)',
  'bg-red-500': 'linear-gradient(135deg, #ff6b6b, #f44336)',
  'bg-amber-500': 'linear-gradient(135deg, #ffca6b, #ffb300)',
  'bg-yellow-500': 'linear-gradient(135deg, #ffe066, #fdd835)',
  'bg-indigo-500': 'linear-gradient(135deg, #6a71ff, #3f51b5)',
};

const defaultHighlightBackground = 'linear-gradient(145deg, #eef2ff, #e3e9ff)';
const defaultHighlightIconBackground = 'linear-gradient(135deg, #4a68ff, #3e4ddf)';

const contactHelpers = {
  phone: 'Seg. a Sex., 9h às 18h',
  whatsapp: 'Resposta em até 1 hora útil',
  email: 'Retorno em até 24h',
};

const contactAccent = {
  phone: '#1f3bb6',
  whatsapp: '#05B18B',
  email: '#5126ff',
};

const contactTint = {
  phone: 'rgba(33, 5, 208, 0.12)',
  whatsapp: 'rgba(5, 177, 139, 0.12)',
  email: 'rgba(81, 38, 255, 0.12)',
};

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

const formatPrice = (price) => {
  if (price === null || price === undefined) {
    return null;
  }

  if (typeof price === 'number') {
    const formatted = price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return formatted.replace(',00', '');
  }

  return price;
};

const CursoDetalhado = ({ courseId }) => {
  const params = useParams();
  const explicitId = courseId ?? params?.id;
  const hasExplicitId = explicitId !== undefined && explicitId !== null;
  const resolvedId = hasExplicitId ? explicitId : '1';

  const course = useMemo(
    () => getCourseDetails(resolvedId, { fallback: !hasExplicitId }),
    [resolvedId, hasExplicitId]
  );

  if (!course) {
    return (
      <section className={styles.notFoundSection}>
        <div className={styles.notFoundCard}>
          <div className={styles.notFoundMedia}>
            <div className={styles.notFoundIconWrapper} aria-hidden="true">
              <span className={styles.notFoundIcon}>404</span>
            </div>
          </div>
          <div className={styles.notFoundContent}>
            <span className={styles.notFoundTag}>Erro 404</span>
            <h1 className={styles.notFoundTitle}>Curso não encontrado</h1>
            <p className={styles.notFoundDescription}>
              O conteúdo que você procura não está disponível ou o endereço digitado está incorreto.
              Explore outros cursos ou volte para a página inicial.
            </p>
            <div className={styles.notFoundActions}>
              <a href="/escolha-cursos" className={styles.notFoundPrimary}>
                Ver outros cursos
              </a>
              <a href="/" className={styles.notFoundSecondary}>
                Voltar para o início
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const breadcrumbItems = useMemo(() => {
    const crumbs = course.breadcrumb ?? [];
    if (!crumbs.length) {
      return [
        { label: 'Início', href: '/' },
        { label: 'Cursos', href: '/escolha-cursos' },
        { label: course.title },
      ];
    }

    return crumbs.map((label, index, arr) => ({
      label,
      href: index === 0 ? '/' : index < arr.length - 1 ? '/escolha-cursos' : undefined,
    }));
  }, [course]);

  const heroBadges = [
    course.categoryLabel && { label: course.categoryLabel, color: '#05B18B' },
    course.duration && { label: course.duration, color: '#2105D0' },
    course.modalidade && { label: course.modalidade, color: '#1b2a4a' },
  ].filter(Boolean);

  const overviewParagraphs = course.fullDescription?.length
    ? course.fullDescription
    : course.description
      ? [course.description]
      : [];

  const highlightCards = (course.highlights ?? []).map((card) => ({
    icon: card.icon,
    title: card.title,
    description: card.description,
    background: highlightBackgroundMap[card.bgColor] ?? defaultHighlightBackground,
    iconBackground: highlightIconMap[card.iconColor] ?? defaultHighlightIconBackground,
  }));

  const curriculumItems = course.curriculum ?? [];
  const facultyMembers = course.professors ?? [];

  const enrollmentInfo = [
    { icon: 'fas fa-calendar', label: 'Início', value: course.startDate },
    { icon: 'fas fa-clock', label: 'Duração', value: course.duration },
    { icon: 'fas fa-map-marker-alt', label: 'Modalidade', value: course.modalidade },
    { icon: 'fas fa-users', label: 'Turma', value: course.maxStudents },
    { icon: 'fas fa-certificate', label: 'Certificação', value: course.certificate },
    { icon: 'fas fa-book', label: 'Carga Horária', value: course.workload },
  ].filter((item) => item.value);

  const supportChannels = [
    course.contact?.phone && { type: 'phone', title: 'Central de Atendimento', value: course.contact.phone },
    course.contact?.whatsapp && { type: 'whatsapp', title: 'Coordenação pelo WhatsApp', value: course.contact.whatsapp },
    course.contact?.email && { type: 'email', title: 'E-mail da Secretaria', value: course.contact.email },
  ]
    .filter(Boolean)
    .map((channel) => ({
      ...channel,
      helper: contactHelpers[channel.type] ?? null,
      accent: contactAccent[channel.type] ?? '#2105d0',
      tint: contactTint[channel.type] ?? 'rgba(33, 5, 208, 0.12)',
    }));

  const price = formatPrice(course.price);
  const monthlyPrice = course.monthlyPrice ?? null;
  const heroLabel = course.hero?.alt ?? `Apresentação do curso ${course.title}`;

  const heroType = course.hero?.type ?? 'image';
  const heroSource = course.hero?.source || '';
  const heroFallback = course.hero?.fallbackImage || course.image || '';

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbWrapper}>
          {breadcrumbItems.map((item, index) => (
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

        <div className={styles.main}>
          <div className={styles.content}>
            <article className={`${styles.card} ${styles.hero}`}>
              <figure className={styles.heroFigure}>
                {heroType === 'video' && heroSource ? (
                  <video
                    className={styles.heroImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    title={heroLabel}
                    aria-label={heroLabel}
                  >
                    <source src={heroSource} type="video/mp4" />
                    {heroFallback && (
                      <img src={heroFallback} alt={heroLabel} className={styles.heroImage} />
                    )}
                  </video>
                ) : heroFallback ? (
                  <img
                    src={heroFallback}
                    alt={heroLabel}
                    className={styles.heroImage}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.heroPlaceholder} aria-hidden="true" />
                )}
                <div className={styles.heroOverlay} />
                <figcaption className={styles.heroContent}>
                  {heroBadges.length > 0 && (
                    <div className={styles.badgeList}>
                      {heroBadges.map((badge) => (
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
                    <h1 className={styles.courseTitle}>{course.title}</h1>
                    {course.subtitle && <p className={styles.courseSubtitle}>{course.subtitle}</p>}
                  </div>
                </figcaption>
              </figure>
            </article>

            <article className={`${styles.card} ${styles.innerCard}`}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Sobre o Curso</h2>
              </header>
              <div>
                {overviewParagraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.sectionDescription}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {highlightCards.length > 0 && (
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
              )}
            </article>

            {curriculumItems.length > 0 && (
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
            )}

            {facultyMembers.length > 0 && (
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
                        {member.experience && (
                          <p className={styles.facultyExperience}>{member.experience}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            )}
          </div>

          <aside className={styles.sidebar}>
            <section className={styles.sidebarCard}>
              <div className={styles.sidebarPrice}>
                {price && <strong>{price}</strong>}
                {price && <span>À vista ou em até 18x</span>}
                {monthlyPrice && <small>{monthlyPrice}</small>}
              </div>

              {enrollmentInfo.length > 0 && (
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

            {supportChannels.length > 0 && (
              <section className={styles.contactCard}>
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
                      style={{ borderColor: `${channel.accent}1f` }}
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
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CursoDetalhado;
