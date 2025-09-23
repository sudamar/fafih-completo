import { useState, useMemo, useEffect } from 'react';
import CursoCard from './CursoCard';


const coursesData = [
  {
    id: 1,
    category: 'especializacao',
    image: 'https://i.imgur.com/STdPJA5.png',
    title: 'Psicologia Junguiana',
    description: 'Uma jornada de autoconhecimento e capacitação profissional baseada na obra de C.G. Jung.',
    link: 'curso-psicologia-junguiana.html',
    categoryLabel: 'Pós-Graduação',
    price: 2500.00,
    modalidade: 'Online'
  },
  {
    id: 2,
    category: 'especializacao',
    image: 'https://i.imgur.com/cTs1Zdf.png',
    title: 'Psicossomática',
    description: 'Explore a integração entre corpo, alma e espírito com uma abordagem holística e humanista.',
    link: 'curso-psicossomatica.html',
    categoryLabel: 'Pós-Graduação',
    price: 2200.00,
    modalidade: 'Presencial'
  },
  {
    id: 3,
    category: 'especializacao',
    image: 'https://i.imgur.com/iVpnrwc.png',
    title: 'Arteterapia e Expressões Criativas',
    description: 'Capacite-se para despertar e utilizar a criatividade como uma poderosa ferramenta terapêutica.',
    link: 'curso-arteterapia.html',
    categoryLabel: 'Pós-Graduação',
    price: 2800.00,
    modalidade: 'Híbrido'
  },
  {
    id: 4,
    category: 'extensao',
    image: 'https://i.imgur.com/qwiCmA6.jpeg',
    title: 'Livros Negros e Livro Vermelho',
    description: 'De volta com mais uma edição do Curso sobre Os Livros Negros e Liber Novus, com a professora Lilian Wurzba.',
    link: 'curso-livros-negros.html',
    categoryLabel: 'Curta Duração',
    price: 850.00,
    modalidade: 'Online'
  },
  {
    id: 5,
    category: 'extensao',
    image: 'https://i.imgur.com/AnnChjx.png',
    title: 'Sonhando Através da Arteterapia',
    description: 'Oficina Imersiva Arteterapia e Sonhos com as professoras Ana Paula Maluf e Bárbara Pessanha.',
    link: 'curso-sonhando-arteterapia.html',
    categoryLabel: 'Curta Duração',
    price: 950.00,
    modalidade: 'Presencial'
  },
  {
    id: 6,
    category: 'extensao',
    image: 'https://i.imgur.com/REzhmRK.jpeg',
    title: 'De Aion a Jó',
    description: 'Do Javismo da Antiga Era de Áries à Revolução Aquariana do Mundo que Deseja Nascer.',
    link: 'curso-aion-jo.html',
    categoryLabel: 'Curta Duração',
    price: 790.00,
    modalidade: 'Online'
  },
  {
    id: 7,
    category: 'formacao',
    image: 'https://i.imgur.com/lXkjLLG.png',
    title: 'Formação de Membros Analistas Junguianos',
    description: 'Filiação e Formação de Analistas. Somente para Ex-Alunos do Curso de Psicologia Junguiana do IJEP.',
    link: 'curso-formacao-analistas.html',
    categoryLabel: 'Formação',
    price: 12000.00,
    modalidade: 'Presencial'
  },
  {
    id: 8,
    category: 'eventos',
    image: 'https://i.imgur.com/M3vP6UT.png',
    title: 'Congressos Junguianos do IJEP',
    description: 'Adquira ou saiba mais deste e dos demais Congressos Junguianos do IJEP.',
    link: 'eventos-congressos-junguianos.html',
    categoryLabel: 'Eventos',
    price: 450.00,
    modalidade: 'Online'
  }
];

const EscolhaCursosContent = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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
  }, [activeFilter]);

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
