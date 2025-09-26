import { useSearchParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useCourses } from '../../features/courses/hooks/useCourses.js';
import styles from './courses-list.module.css';

const CoursesListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const query = searchParams.get('q') || '';

  const {
    courses,
    loading,
    error,
    categories,
    stats,
    refetch
  } = useCourses({
    category,
    searchQuery: query,
    autoFetch: true
  });

  useEffect(() => {
    document.title = 'Cursos FAFIH';
  }, []);

  const handleFilterChange = (event) => {
    const next = new URLSearchParams(searchParams);
    if (event.target.name === 'category') {
      next.set('category', event.target.value);
    }
    if (event.target.name === 'q') {
      if (event.target.value) {
        next.set('q', event.target.value);
      } else {
        next.delete('q');
      }
    }
    setSearchParams(next);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <span className={styles.pill}>Formações</span>
          <h1>Encontre o curso ideal para o seu momento</h1>
          <p>
            Explore nossas pós-graduações, especializações e cursos livres preparados para potencializar a sua carreira.
          </p>
        </div>
        <div className={styles.filters}>
          <label className={styles.filterField}>
            <span>Buscar</span>
            <input
              type="search"
              name="q"
              placeholder="Digite o nome do curso"
              defaultValue={query}
              onBlur={handleFilterChange}
            />
          </label>
          <label className={styles.filterField}>
            <span>Categoria</span>
            <select name="category" value={category} onChange={handleFilterChange}>
              <option value="all">Todas</option>
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>

      {loading && (
        <div className={styles.state}>Carregando cursos…</div>
      )}

      {error && (
        <div className={styles.state}>
          <p>Não foi possível carregar os cursos.</p>
          <button onClick={() => refetch(true)}>Tentar novamente</button>
        </div>
      )}

      {!loading && !error && !courses.length && (
        <div className={styles.state}>
          <p>Nenhum curso encontrado com os filtros selecionados.</p>
          <button onClick={() => setSearchParams(new URLSearchParams())}>
            Limpar filtros
          </button>
        </div>
      )}

      <div className={styles.grid}>
        {courses.map((course) => (
          <article key={course.id} className={styles.card}>
            {course.image && (
              <img src={course.image} alt={course.title} loading="lazy" />
            )}
            <div className={styles.cardContent}>
              <span className={styles.category}>{course.categoryLabel}</span>
              <h2>{course.title}</h2>
              {course.description && <p>{course.description}</p>}
              <Link to={`/cursos/${course.slug}`} className={styles.link}>
                Ver detalhes
              </Link>
            </div>
          </article>
        ))}
      </div>

      {stats && (
        <footer className={styles.footer}>
          <div>
            <strong>{stats.totalCourses}</strong>
            <span>Cursos ativos</span>
          </div>
          <div>
            <strong>{stats.totalCategories}</strong>
            <span>Categorias</span>
          </div>
          <div>
            <strong>{stats.categoriesDistribution?.[0]?.count || '-'}</strong>
            <span>Cursos na categoria mais popular</span>
          </div>
        </footer>
      )}
    </div>
  );
};

export default CoursesListPage;
