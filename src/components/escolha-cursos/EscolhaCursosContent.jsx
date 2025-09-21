import { useState, useMemo } from 'react';
import CursoCard from './CursoCard';
import FiltroCursos from './FiltroCursos';

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

const categories = ['Pós-Graduação', 'Curta Duração', 'Formação', 'Eventos'];
const modalities = ['Online', 'Presencial', 'Híbrido'];

const EscolhaCursosContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    categories: [],
    modalities: [],
  });

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(course.categoryLabel);
      const modalityMatch = filters.modalities.length === 0 || filters.modalities.includes(course.modalidade);
      const searchMatch = searchTerm === '' ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && modalityMatch && searchMatch;
    });
  }, [searchTerm, filters]);

  return (
    <section className="page-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2>Nossos Cursos</h2>
          <p className="page-intro" style={{fontSize: '1.1rem', marginTop: '-2rem'}}>Encontre a formação ideal para impulsionar sua carreira e expandir seus conhecimentos.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/4">
            <FiltroCursos 
                filters={filters} 
                setFilters={setFilters} 
                categories={categories}
                modalities={modalities}
            />
          </aside>

          <div className="md:w-3/4">
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Buscar por nome ou palavra-chave..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="cursos-grid">
              {filteredCourses.map(course => (
                <CursoCard key={course.id} curso={course} />
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-20 bg-white rounded-lg shadow-md mt-8">
                <p className="text-2xl font-semibold text-gray-700">Nenhum curso encontrado</p>
                <p className="text-gray-500 mt-2">Tente ajustar seus filtros ou termos de busca.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EscolhaCursosContent;