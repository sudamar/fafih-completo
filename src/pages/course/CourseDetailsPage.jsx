import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CourseErrorBoundary from '../../features/courses/components/CourseErrorBoundary.jsx';
import { useCourse } from '../../features/courses/hooks/useCourse.js';
import {
  CourseHero,
  CourseSummary,
  CurriculumAccordion,
  InvestmentCard,
  TestimonialsSection
} from '../../components/domain/course';
import styles from './course-details.module.css';

const CourseDetailsContent = ({ identifier, identifierType }) => {
  const {
    course,
    loading,
    error,
    initialized,
    notFound,
    refetch
  } = useCourse(identifier, { identifierType });

  const pageTitle = course?.title ? `${course.title} | FAFIH` : 'Curso | FAFIH';

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  if (loading && !initialized) {
    return (
      <div className={styles.state}>
        <div className={styles.spinner} aria-hidden />
        <p>Carregando dados do curso…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.state}>
        <h2>Algo deu errado</h2>
        <p>{error.message || 'Não foi possível carregar o curso.'}</p>
        <button onClick={() => refetch(true)}>Tentar novamente</button>
      </div>
    );
  }

  if (notFound || !course) {
    return (
      <div className={styles.state}>
        <h2>Curso não encontrado</h2>
        <p>
          Não localizamos o curso solicitado. Você pode explorar outras opções na página de
          <Link to="/cursos"> cursos disponíveis</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <CourseHero course={course} />

      <div className={styles.mainGrid}>
        <div className={styles.mainColumn}>
          <CourseSummary course={course} />
          <CurriculumAccordion curriculum={course.curriculum} />
          <TestimonialsSection testimonials={course.testimonials} />
        </div>

        <div className={styles.sideColumn}>
          <InvestmentCard course={course} />
          {course.support && (
            <div className={styles.supportBox}>
              <h3>Atendimento personalizado</h3>
              <p>{course.support}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CourseDetailsPage = () => {
  const { slug, id } = useParams();
  const identifier = slug || id;
  const identifierType = slug ? 'slug' : id ? 'id' : 'auto';

  return (
    <CourseErrorBoundary>
      <CourseDetailsContent identifier={identifier} identifierType={identifierType} />
    </CourseErrorBoundary>
  );
};

export default CourseDetailsPage;
