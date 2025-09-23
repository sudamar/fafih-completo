import { useEffect, useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import styles from './curso-detalhado.module.css';
import { getCourseDetails } from './courseDetailsData';
import { Testimonials } from '../ui/testimonials';
import { FacultyMembers } from '../ui/faculty-members';
import { facultyMembers } from './facultyData';

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
    return <Navigate to="/404" replace state={{ from: resolvedId }} />;
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

  const justificationParagraphs = Array.isArray(course.justificativa)
    ? course.justificativa
    : course.justificativa
      ? [course.justificativa]
      : [];

  const objectivesList = Array.isArray(course.objetivos)
    ? course.objetivos
    : course.objetivos
      ? [course.objetivos]
      : [];

  const audienceList = Array.isArray(course.publico)
    ? course.publico
    : course.publico
      ? [course.publico]
      : [];

  const highlightCards = (course.highlights ?? []).map((card) => ({
    icon: card.icon,
    title: card.title,
    description: card.description,
    background: highlightBackgroundMap[card.bgColor] ?? defaultHighlightBackground,
    iconBackground: highlightIconMap[card.iconColor] ?? defaultHighlightIconBackground,
  }));

  const price = formatPrice(course.price);
  const precoMatricula = formatPrice(course.precoMatricula);
  const originalPrice = formatPrice(course.originalPrice);
  const heroLabel = course.hero?.alt ?? `Apresentação do curso ${course.title}`;

  const heroType = course.hero?.type ?? 'image';
  const heroSource = course.hero?.source || '';
  const heroFallback = course.hero?.fallbackImage || course.image || '';

  const curriculumItems = course.curriculum ?? [];
  // Using global faculty members from facultyData
  const courseFacultyMembers = facultyMembers;
  const testimonials = course.testimonials ?? [];
  const promocaoPrice =  originalPrice + " por " + price;  

  const enrollmentInfo = [
    { icon: 'fas fa-clock', label: 'De', value: promocaoPrice },
    { icon: 'fas fa-clock', label: 'Duração', value: course.duration },
    { icon: 'fas fa-map-marker-alt', label: 'Modalidade', value: course.modalidade },
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


  const [openCurriculum, setOpenCurriculum] = useState([]);

  useEffect(() => {
    setOpenCurriculum(curriculumItems.map(() => false));
  }, [course.id, curriculumItems.length]);

  const toggleCurriculum = (index) => {
    setOpenCurriculum((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

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

          <article className={`${styles.card} ${styles.innerCard}`}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Demais Informações</h2>
            </header>

            {justificationParagraphs.length > 0 && (
              <section className={styles.textBlock}>
                <h3>Justificativa</h3>
                {justificationParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            )}

            {objectivesList.length > 0 && (
              <section className={styles.textBlock}>
                <h3>Objetivos</h3>
                <ul className={styles.bulletList}>
                  {objectivesList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {audienceList.length > 0 && (
              <section className={styles.textBlock}>
                <h3>Para quem é</h3>
                <div>
                  {audienceList.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </section>
            )}
          </article>

          {curriculumItems.length > 0 && (
            <article className={`${styles.card} ${styles.innerCard}`}>
              <header className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>Grade Curricular</h2>
                </header>
                <div className={styles.curriculumList}>
                  {curriculumItems.map((item, index) => {
                    const hours = item.hours || item.horas || '';
                    const summary = item.summary || (() => {
                      const text = item.description || '';
                      return text.includes('-') ? text.split('-').slice(1).join('-').trim() : text;
                    })();
                    const ementaList = Array.isArray(item.ementa)
                      ? item.ementa
                      : item.ementa
                        ? [item.ementa]
                        : [];
                    const objetivosCurriculo = Array.isArray(item.objetivos)
                      ? item.objetivos
                      : item.objetivos
                        ? [item.objetivos]
                        : [];
                    const bibliografia = item.bibliography || [];
                    const bibliografiaDescricao = '';

                    return (
                      <div key={item.number} className={styles.curriculumItem}>
                        <button
                          type="button"
                          className={styles.curriculumHeader}
                          onClick={() => toggleCurriculum(index)}
                          aria-expanded={openCurriculum[index] ?? false}
                        >
                          <div className={styles.curriculumMain}>
                            <span
                              className={`${styles.curriculumToggleSymbol} ${
                                openCurriculum[index] ? styles.curriculumToggleOpen : ''
                              }`}
                              aria-hidden="true"
                            >
                              {openCurriculum[index] ? '−' : '+'}
                            </span>
                            <div className={styles.curriculumTexts}>
                              <h3>{item.title}</h3>
                              {summary && (
                                <span className={styles.curriculumSummary}>{summary}</span>
                              )}
                            </div>
                          </div>
                        </button>
                        <div
                          className={`${styles.curriculumContent} ${
                            openCurriculum[index] ? styles.curriculumContentOpen : ''
                          }`}
                        >
                          {hours && (
                            <p className={styles.curriculumHours}>
                              <strong>Carga horária:</strong> {hours}
                            </p>
                          )}
                          {summary && <p className={styles.curriculumSummaryText}>{summary}</p>}
                          {ementaList.length > 0 && (
                            <div className={styles.curriculumSection}>
                              <h4>Ementa</h4>
                              <ul className={styles.curriculumListDetailed}>
                                {ementaList.map((topic) => (
                                  <li key={topic}>{topic}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {objetivosCurriculo.length > 0 && (
                            <div className={styles.curriculumSection}>
                              <h4>Objetivos</h4>
                              <ul className={styles.curriculumListDetailed}>
                                {objetivosCurriculo.map((goal) => (
                                  <li key={goal}>{goal}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {bibliografia.length > 0 && (
                            <div className={styles.curriculumSection}>
                              <h4>Bibliografia</h4>
                              {bibliografiaDescricao && (
                                <p className={styles.curriculumBibliographyNote}>{bibliografiaDescricao}</p>
                              )}
                              <ul className={styles.curriculumListDetailed}>
                                {bibliografia.map((ref) => (
                                  <li key={ref}>{ref}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            )}

            {course.cargahoraria && (
              <article className={`${styles.card} ${styles.innerCard}`}>
                <header className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>Carga Horária</h2>
                </header>
                <div className={styles.workloadContent}>
                  {course.cargahoraria.texto && course.cargahoraria.texto.length > 0 && (
                    <div className={styles.workloadDescription}>
                      {course.cargahoraria.texto.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {course.cargahoraria.atividades && course.cargahoraria.atividades.length > 0 && (
                    <div className={styles.workloadTable}>
                      <h3>Distribuição da Carga Horária</h3>
                      <div className={styles.workloadGrid}>
                        {course.cargahoraria.atividades.map((item, index) => (
                          <div
                            key={index}
                            className={`${styles.workloadItem} ${item.descricao.includes('Total') ? styles.workloadTotal : ''}`}
                          >
                            <span className={styles.workloadActivity}>{item.descricao}</span>
                            <span className={styles.workloadHours}>{item.carga}h</span>
                          </div>
                        ))}
                      </div>
                      {course.cargahoraria.observacao && (
                        <p className={styles.workloadNote}>{course.cargahoraria.observacao}</p>
                      )}
                    </div>
                  )}
                </div>
              </article>
            )}

            {course.avaliacao && course.avaliacao.length > 0 && (
              <article className={`${styles.card} ${styles.innerCard}`}>
                <header className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>Avaliação e Certificação</h2>
                </header>
                <div className={styles.evaluationContent}>
                  <ul className={styles.evaluationList}>
                    {course.avaliacao.map((item, index) => (
                      <li key={index} className={styles.evaluationItem}>
                        <span className={styles.evaluationIcon}>
                          <i className="fas fa-check-circle" aria-hidden="true" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )}

            {course.coordenacao && (
              <article className={`${styles.card} ${styles.innerCard}`}>
                <header className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>Coordenação</h2>
                </header>
                <div className={styles.coordinationCard}>
                  <div className={styles.coordinationInfo}>
                    <h3 className={styles.coordinationName}>{course.coordenacao.professor}</h3>
                    <p className={styles.coordinationDescription}>{course.coordenacao.descricao}</p>
                  </div>
                </div>
              </article>
            )}
            
            <FacultyMembers facultyMembers={courseFacultyMembers} />

            {testimonials.length > 0 && (
              <Testimonials testimonials={testimonials.map(testimonial => ({
                image: testimonial.image || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                text: testimonial.text,
                name: testimonial.author,
                username: `@${testimonial.author.toLowerCase().replace(/\s+/g, '')}`,
                social: 'https://i.imgur.com/VRtqhGC.png'
              }))} />
            )}

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
          </div>

          <aside className={styles.sidebar}>
            <section className={styles.sidebarCard}>
              <div className={styles.sidebarPrice}>
                {precoMatricula && (
                  <>
                    <small className={styles.priceLabel}>
                      {(() => {
                        const durationMatch = course.duration?.match(/(\d+)/);
                        if (durationMatch) {
                          const months = parseInt(durationMatch[1]) + 1;
                          return `${months}x`;
                        }
                        return 'Matrícula';
                      })()}
                    </small>
                    <strong>{precoMatricula}</strong>
                  </>
                )}
                {course.categoryLabel && <span>{course.categoryLabel}</span>}
                {course.modalidade && <small>{course.modalidade}</small>}
              </div>

              {/* {investmentLines.length > 0 && (
                <ul className={styles.investmentList}>
                  <li className={styles.originalPrice}>
                    <span>De:</span> <s>{originalPrice}</s> <span>Por:</span> <s>{price}</s>
                  </li>
                </ul>
              )} */}

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
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CursoDetalhado;
