import { useEffect, useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseDetails } from '@/services/courseCatalog.js';
import { useProfessors } from '@/features/professors/hooks/useProfessors';
import { Testimonials } from '@/components/ui/testimonials';
import { FacultyMembers } from '@/components/ui/faculty-members';
import CourseBreadcrumb from '@/components/domain/course/CourseBreadcrumb.jsx';
import CourseHero from '@/components/domain/course/CourseHero.jsx';
import CourseOverview from '@/components/domain/course/CourseOverview.jsx';
import CourseInfoSections from '@/components/domain/course/CourseInfoSections.jsx';
import CourseCurriculum from '@/components/domain/course/CourseCurriculum.jsx';
import CourseSupport from '@/components/domain/course/CourseSupport.jsx';
import CourseSidebar from '@/components/domain/course/CourseSidebar.jsx';
import styles from '@/components/curso-detalhes/curso-detalhado.module.css';

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

const CourseDetailsPage = () => {
  const { id, slug } = useParams();
  const resolvedId = slug ?? id ?? '1';

  const [course, setCourse] = useState(null);
  const [courseLoading, setCourseLoading] = useState(true);
  const [courseError, setCourseError] = useState(null);

  const {
    professors: courseFacultyMembers,
    loading: facultyLoading
  } = useProfessors({ limit: 8 });

  useEffect(() => {
    console.log('🔍 CourseDetailsPage: Loading course with ID:', resolvedId);
    try {
      const courseData = getCourseDetails(resolvedId);
      console.log('📚 CourseDetailsPage: Course data:', courseData);
      setCourse(courseData);
      setCourseLoading(false);
    } catch (error) {
      console.error('❌ CourseDetailsPage: Error loading course:', error);
      setCourseError(error.message);
      setCourseLoading(false);
    }
  }, [resolvedId]);

  useEffect(() => {
    if (course?.title) {
      document.title = `${course.title} | FAFIH`;
    }
  }, [course?.title]);

  // Todos os useMemo devem estar aqui, antes de qualquer return condicional
  const breadcrumbItems = useMemo(() => {
    if (!course) return [];

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

  const heroBadges = useMemo(() => {
    if (!course) return [];

    return [
      course.categoryLabel && { label: course.categoryLabel, color: '#05B18B' },
      course.duration && { label: course.duration, color: '#2105D0' },
      course.modalidade && { label: course.modalidade, color: '#1b2a4a' },
    ].filter(Boolean);
  }, [course]);

  const overviewParagraphs = useMemo(() => {
    if (!course) return [];

    return course.fullDescription?.length
      ? course.fullDescription
      : course.description
        ? [course.description]
        : [];
  }, [course]);

  const justificationParagraphs = useMemo(() => {
    if (!course) return [];

    return Array.isArray(course.justificativa)
      ? course.justificativa
      : course.justificativa
        ? [course.justificativa]
        : [];
  }, [course]);

  const objectivesList = useMemo(() => {
    if (!course) return [];

    return Array.isArray(course.objetivos)
      ? course.objetivos
      : course.objetivos
        ? [course.objetivos]
        : [];
  }, [course]);

  const audienceList = useMemo(() => {
    if (!course) return [];

    return Array.isArray(course.publico)
      ? course.publico
      : course.publico
        ? [course.publico]
        : [];
  }, [course]);

  const highlightCards = useMemo(() => {
    if (!course) return [];

    return (course.highlights ?? []).map((card) => ({
      icon: card.icon,
      title: card.title,
      description: card.description,
      background: highlightBackgroundMap[card.bgColor] ?? defaultHighlightBackground,
      iconBackground: highlightIconMap[card.iconColor] ?? defaultHighlightIconBackground,
    }));
  }, [course]);

  const price = useMemo(() => formatPrice(course?.price), [course?.price]);
  const precoMatricula = useMemo(() => formatPrice(course?.precoMatricula), [course?.precoMatricula]);
  const originalPrice = useMemo(() => formatPrice(course?.originalPrice), [course?.originalPrice]);

  const heroMedia = useMemo(() => ({
    type: course?.hero?.type ?? 'image',
    source: course?.hero?.source || '',
    fallbackImage: course?.hero?.fallbackImage || course?.image || '',
    alt: course?.hero?.alt,
  }), [course]);

  const sidebarPriceLabel = useMemo(() => {
    if (!course?.duration) {
      return 'Matrícula';
    }

    const match = course.duration.match(/(\d+)/);
    if (!match) {
      return 'Matrícula';
    }

    const months = parseInt(match[1], 10) + 1;
    return `${months}x`;
  }, [course?.duration]);

  const curriculumItems = useMemo(() => course?.curriculum ?? [], [course]);
  const testimonials = useMemo(() => course?.testimonials ?? [], [course]);
  const normalizedTestimonials = useMemo(() => (
    testimonials.map((testimonial) => ({
      image: testimonial.image || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: testimonial.text,
      name: testimonial.author,
      username: `@${testimonial.author?.toLowerCase().replace(/\s+/g, '') || 'aluno'}`,
      social: 'https://i.imgur.com/VRtqhGC.png',
    }))
  ), [testimonials]);

  const displayedFacultyMembers = useMemo(() => (
    facultyLoading ? [] : courseFacultyMembers
  ), [facultyLoading, courseFacultyMembers]);
  const promocaoPrice = useMemo(() => {
    if (originalPrice && price) {
      return `${originalPrice} por ${price}`;
    }
    return price;
  }, [originalPrice, price]);

  const enrollmentInfo = useMemo(() => {
    if (!course) return [];

    return [
      { icon: 'fas fa-clock', label: 'De', value: promocaoPrice },
      { icon: 'fas fa-clock', label: 'Duração', value: course.duration },
      { icon: 'fas fa-map-marker-alt', label: 'Modalidade', value: course.modalidade },
      { icon: 'fas fa-certificate', label: 'Certificação', value: course.certificate },
      { icon: 'fas fa-book', label: 'Carga Horária', value: course.workload },
    ].filter((item) => item.value);
  }, [course, promocaoPrice]);

  const supportChannels = useMemo(() => {
    if (!course) return [];

    return [
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
  }, [course]);

  // Loading state
  if (courseLoading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Carregando curso...</p>
      </div>
    );
  }

  // Error state
  if (courseError) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Erro ao carregar curso</h2>
        <p>{courseError}</p>
      </div>
    );
  }

  // Not found state
  if (!courseLoading && !course) {
    return <Navigate to="/404" replace state={{ from: resolvedId }} />;
  }

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <CourseBreadcrumb items={breadcrumbItems} />

        <div className={styles.main}>
          <div className={styles.content}>
            <CourseHero
              title={course.title}
              subtitle={course.subtitle}
              badges={heroBadges}
              media={heroMedia}
            />

            <CourseOverview
              paragraphs={overviewParagraphs}
              highlights={highlightCards}
            />

            <CourseInfoSections
              justification={justificationParagraphs}
              objectives={objectivesList}
              targetAudience={audienceList}
            />

            <CourseCurriculum items={curriculumItems} />

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

            <FacultyMembers facultyMembers={displayedFacultyMembers} />

            {normalizedTestimonials.length > 0 && (
              <Testimonials testimonials={normalizedTestimonials} />
            )}

            <CourseSupport renderIcon={renderContactIcon} channels={supportChannels} />
          </div>

          <CourseSidebar
            enrollmentInfo={enrollmentInfo}
            priceLabel={precoMatricula ? sidebarPriceLabel : undefined}
            priceValue={precoMatricula}
            categoryLabel={course.categoryLabel}
            modality={course.modalidade}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;
