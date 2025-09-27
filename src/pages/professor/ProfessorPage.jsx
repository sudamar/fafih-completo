import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProfessorErrorBoundary from '@/features/professors/components/ProfessorErrorBoundary.jsx';
import { useProfessor } from '@/features/professors/hooks/useProfessor.js';
import {
  ProfessorHeader,
  PublicationsShowcase,
  CourseAssignments
} from '@/components/domain/professor';
import styles from '@/professor.module.css';

const ProfessorPageContent = ({ slug }) => {
  const {
    professor,
    loading,
    error,
    initialized,
    notFound,
    refetch
  } = useProfessor(slug, { identifierType: 'slug', fetchPublications: true, fetchCourses: true });

  const pageTitle = professor?.name ? `${professor.name} | Corpo Docente FAFIH` : 'Professor | FAFIH';

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  if (loading && !initialized) {
    return (
      <div className={styles.state}>
        <div className={styles.spinner} aria-hidden />
        <p>Carregando perfil do professor…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.state}>
        <h2>Não foi possível carregar o professor</h2>
        <p>{error.message || 'Tente novamente em instantes.'}</p>
        <button onClick={() => refetch(true)}>Tentar novamente</button>
      </div>
    );
  }

  if (notFound || !professor) {
    return (
      <div className={styles.state}>
        <h2>Professor não encontrado</h2>
        <p>
          O perfil solicitado não está disponível. Consulte a lista completa em
          <Link to="/corpo-docente"> corpo docente</Link>.
        </p>
      </div>
    );
  }

  const bioParagraphs = Array.isArray(professor.bio) ? professor.bio : [professor.bio].filter(Boolean);
  const qualifications = Array.isArray(professor.qualifications) ? professor.qualifications : [];

  return (
    <div className={styles.container}>
      <ProfessorHeader professor={professor} />

      <div className={styles.grid}>
        <article className={styles.main}>
          {!!bioParagraphs.length && (
            <section className={styles.block}>
              <h2>Trajetória</h2>
              {bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          )}

          {!!qualifications.length && (
            <section className={styles.block}>
              <h2>Formação e especialidades</h2>
              <ul>
                {qualifications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <PublicationsShowcase publications={professor.publications} />
          <CourseAssignments courses={professor.courses} />
        </article>

        <aside className={styles.side}>
          {professor.research && (
            <section className={styles.sideBlock}>
              <h3>Linhas de pesquisa</h3>
              <p>{professor.research}</p>
            </section>
          )}

          {professor.contact && (
            <section className={styles.sideBlock}>
              <h3>Contato direto</h3>
              {professor.contact.phone && (
                <a href={`tel:${professor.contact.phone.replace(/[^\d+]/g, '')}`}>
                  {professor.contact.phone}
                </a>
              )}
              {professor.contact.email && (
                <a href={`mailto:${professor.contact.email}`}>
                  {professor.contact.email}
                </a>
              )}
            </section>
          )}
        </aside>
      </div>
    </div>
  );
};

const ProfessorPage = () => {
  const { slug } = useParams();

  return (
    <ProfessorErrorBoundary>
      <ProfessorPageContent slug={slug} />
    </ProfessorErrorBoundary>
  );
};

export default ProfessorPage;
