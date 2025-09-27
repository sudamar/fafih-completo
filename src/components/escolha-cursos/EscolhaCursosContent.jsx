import { useState, useMemo, useEffect } from 'react';
import CursoCard from './CursoCard';
import { listCourseCards } from '@/services/courseCatalog.js';

const EscolhaCursosContent = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const coursesData = useMemo(() => listCourseCards(), []);

  const filterButtons = [
    { filter: 'all', label: 'Todos os Cursos' },
    { filter: 'graduacao', label: 'Graduação' },
    { filter: 'especializacao', label: 'Pós-Graduação' },
    { filter: 'extensao', label: 'Curta Duração' },
    { filter: 'formacao', label: 'Formação' },
    { filter: 'eventos', label: 'Eventos' }
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlFilter = urlParams.get('filter');
    if (urlFilter && filterButtons.some(btn => btn.filter === urlFilter)) {
      setActiveFilter(urlFilter);
    }
  }, []);

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      // Filtro principal por categoria
      const mainCategoryMatch = activeFilter === 'all' || course.category === activeFilter;
      return mainCategoryMatch;
    });
  }, [activeFilter, coursesData]);

  return (
    <section className="page-section">
      <div className="container">
        <div className="text-center mb-8">
          <h2>Nossos Cursos</h2>
          <p className="page-intro" style={{fontSize: '1.1rem', marginTop: '-2rem'}}>Encontre a formação ideal para impulsionar sua carreira e expandir seus conhecimentos.</p>
        </div>

        <div className="curso-filters mb-6">
          {filterButtons.map(button => (
            <button
              key={button.filter}
              className={activeFilter === button.filter ? 'active' : ''}
              onClick={() => setActiveFilter(button.filter)}
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* <FiltroCursos
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            modalities={modalities}
        /> */}

        <div className="cursos-grid">
          {filteredCourses.map(course => (
            <CursoCard key={course.id} curso={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20 bg-white rounded-lg shadow-md mt-8">
            <p className="text-2xl font-semibold text-gray-700">Nenhum curso encontrado</p>
            <p className="text-gray-500 mt-2">Tente ajustar seus filtros.</p>
          </div>
        )}


      </div>
    </section>
  );
};

export default EscolhaCursosContent;
