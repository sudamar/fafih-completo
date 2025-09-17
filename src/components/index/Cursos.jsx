import { useState, useEffect } from 'react';

const Cursos = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const cursos = [
    {
      category: 'especializacao',
      image: 'https://i.imgur.com/STdPJA5.png',
      title: 'Psicologia Junguiana',
      description: 'Uma jornada de autoconhecimento e capacitação profissional baseada na obra de C.G. Jung.',
      link: 'curso-psicologia-junguiana.html',
      categoryLabel: 'Pós-Graduação'
    },
    {
      category: 'especializacao',
      image: 'https://i.imgur.com/cTs1Zdf.png',
      title: 'Psicossomática',
      description: 'Explore a integração entre corpo, alma e espírito com uma abordagem holística e humanista.',
      link: 'curso-psicossomatica.html',
      categoryLabel: 'Pós-Graduação'
    },
    {
      category: 'especializacao',
      image: 'https://i.imgur.com/iVpnrwc.png',
      title: 'Arteterapia e Expressões Criativas',
      description: 'Capacite-se para despertar e utilizar a criatividade como uma poderosa ferramenta terapêutica.',
      link: 'curso-arteterapia.html',
      categoryLabel: 'Pós-Graduação'
    },
    {
      category: 'extensao',
      image: 'https://i.imgur.com/qwiCmA6.jpeg',
      title: 'Livros Negros e Livro Vermelho',
      description: 'De volta com mais uma edição do Curso sobre Os Livros Negros e Liber Novus, com a professora Lilian Wurzba, lembrando a importância que as experiências registradas no período de nov/1913 a dez/1932 teve na obra ulterior de Jung.',
      link: 'curso-livros-negros.html',
      categoryLabel: 'Curta e Média Duração'
    },
    {
      category: 'extensao',
      image: 'https://i.imgur.com/AnnChjx.png',
      title: 'Sonhando Através da Arteterapia: Jornada na Arteterapia a Partir de Imagens Oníricas e Representações Simbólicas',
      description: 'Oficina Imersiva Arteterapia e Sonhos com as professoras Ana Paula Maluf e Bárbara Pessanha',
      link: 'curso-sonhando-arteterapia.html',
      categoryLabel: 'Curta e Média Duração'
    },
    {
      category: 'extensao',
      image: 'https://i.imgur.com/REzhmRK.jpeg',
      title: 'De Aion a Jó',
      description: 'Do Javismo da Antiga Era de Áries à Revolução Aquariana do Mundo que Deseja Nascer, com os professores Dimas Künsch e Waldemar Magaldi.',
      link: 'curso-aion-jo.html',
      categoryLabel: 'Curta e Média Duração'
    },
    {
      category: 'extensao',
      image: 'https://i.imgur.com/lXkjLLG.png',
      title: 'Formação de Membros Analistas Junguianos do IJEP',
      description: 'Filiação e Formação de Analistas. Somente para Ex-Alunos do Curso de Psicologia Junguiana do IJEP.',
      link: 'curso-formacao-analistas.html',
      categoryLabel: 'Curta e Média Duração'
    },
    {
      category: 'eventos',
      image: 'https://i.imgur.com/M3vP6UT.png',
      title: 'Congressos Junguianos do IJEP',
      description: 'Adquira ou saiba mais deste e dos demais Congressos Junguianos do IJEP.',
      link: 'eventos-congressos-junguianos.html',
      categoryLabel: 'Eventos'
    }
  ];

  const filterButtons = [
    { filter: 'all', label: 'Todos os Cursos' },
    { filter: 'graduacao', label: 'Graduação' },
    { filter: 'especializacao', label: 'Pós-Graduação' },
    { filter: 'extensao', label: 'Curta e Média Duração' },
    { filter: 'eventos', label: 'Eventos' }
  ];

  const filteredCursos = activeFilter === 'all'
    ? cursos
    : cursos.filter(curso => curso.category === activeFilter);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlFilter = urlParams.get('filter');
    if (urlFilter && filterButtons.some(btn => btn.filter === urlFilter)) {
      setActiveFilter(urlFilter);
    }
  }, []);

  return (
    <section id="cursos">
      <div className="container">
        <h2>Nossos Cursos</h2>
        <div className="curso-filters">
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
        <div className="cursos-grid">
          {filteredCursos.map((curso, index) => (
            <div key={index} className="curso-card" style={{ display: 'flex' }}>
              <div className="curso-card-img">
                <img src={curso.image} alt={curso.title} />
              </div>
              <div className="curso-card-content">
                <span className="curso-card-cat">{curso.categoryLabel}</span>
                <h3>{curso.title}</h3>
                <p className="curso-card-desc">{curso.description}</p>
                <div className="curso-card-actions">
                  <a href={curso.link}>Saiba Mais</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cursos;