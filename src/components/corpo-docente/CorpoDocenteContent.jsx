import { useState } from 'react';

const CorpoDocenteContent = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const professores = [
    {
      id: 1,
      nome: "Dr. Carlos Eduardo Silva",
      area: "Filosofia",
      formacao: "Doutor em Filosofia pela USP",
      especialidade: "Filosofia Contemporânea, Epistemologia",
      email: "carlos.silva@fafih.edu.br",
      categoria: "doutor",
      foto: "https://i.imgur.com/placeholder1.jpg"
    },
    {
      id: 2,
      nome: "Dra. Maria Fernanda Santos",
      area: "Artes Visuais",
      formacao: "Doutora em Artes pela UNICAMP",
      especialidade: "Arte Contemporânea, Curadoria",
      email: "maria.santos@fafih.edu.br",
      categoria: "doutor",
      foto: "https://i.imgur.com/placeholder2.jpg"
    },
    {
      id: 3,
      nome: "Ms. João Paulo Oliveira",
      area: "Psicologia Analítica",
      formacao: "Mestre em Psicologia pelo IJEP",
      especialidade: "Psicologia Junguiana, Imaginário",
      email: "joao.oliveira@fafih.edu.br",
      categoria: "mestre",
      foto: "https://i.imgur.com/placeholder3.jpg"
    },
    {
      id: 4,
      nome: "Dra. Ana Beatriz Costa",
      area: "Literatura",
      formacao: "Doutora em Literatura Comparada pela UERJ",
      especialidade: "Literatura e Imaginário, Mitocrítica",
      email: "ana.costa@fafih.edu.br",
      categoria: "doutor",
      foto: "https://i.imgur.com/placeholder4.jpg"
    },
    {
      id: 5,
      nome: "Dr. Roberto Mendes",
      area: "História da Arte",
      formacao: "Doutor em História da Arte pela PUC-SP",
      especialidade: "Arte Medieval, Iconografia",
      email: "roberto.mendes@fafih.edu.br",
      categoria: "doutor",
      foto: "https://i.imgur.com/placeholder5.jpg"
    },
    {
      id: 6,
      nome: "Ms. Claudia Ferreira",
      area: "Educação",
      formacao: "Mestre em Educação pela UNICAMP",
      especialidade: "Pedagogia Waldorf, Arte-Educação",
      email: "claudia.ferreira@fafih.edu.br",
      categoria: "mestre",
      foto: "https://i.imgur.com/placeholder6.jpg"
    }
  ];

  const filteredProfessores = activeFilter === 'todos'
    ? professores
    : professores.filter(prof => prof.categoria === activeFilter);

  return (
    <section className="page-section">
      <div className="container">
        <h1>Corpo Docente</h1>

        <div className="docente-intro">
          <p>Conheça nosso corpo docente altamente qualificado, composto por professores doutores e mestres reconhecidos em suas áreas de atuação. Nossa equipe acadêmica é formada por pesquisadores, artistas e profissionais experientes, comprometidos com a excelência do ensino e a formação integral de nossos estudantes.</p>
        </div>

        <div className="filter-container">
          <h2>Filtrar por Titulação</h2>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
              onClick={() => setActiveFilter('todos')}
            >
              Todos
            </button>
            <button
              className={`filter-btn ${activeFilter === 'doutor' ? 'active' : ''}`}
              onClick={() => setActiveFilter('doutor')}
            >
              Doutores
            </button>
            <button
              className={`filter-btn ${activeFilter === 'mestre' ? 'active' : ''}`}
              onClick={() => setActiveFilter('mestre')}
            >
              Mestres
            </button>
          </div>
        </div>

        <div className="professores-grid">
          {filteredProfessores.map(professor => (
            <div key={professor.id} className="professor-card">
              <div className="professor-foto">
                <img src={professor.foto} alt={professor.nome} />
              </div>
              <div className="professor-info">
                <h3>{professor.nome}</h3>
                <p className="professor-area">{professor.area}</p>
                <p className="professor-formacao">{professor.formacao}</p>
                <p className="professor-especialidade"><strong>Especialidades:</strong> {professor.especialidade}</p>
                <div className="professor-contato">
                  <a href={`mailto:${professor.email}`} className="btn-contato">
                    Contato
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="content-section">
          <h2>Critérios de Seleção</h2>
          <p>Nosso corpo docente é selecionado através de rigorosos critérios acadêmicos e profissionais:</p>
          <ul>
            <li><strong>Formação Acadêmica:</strong> Titulação mínima de mestrado em suas áreas de especialização</li>
            <li><strong>Experiência Profissional:</strong> Ampla experiência prática e teórica em suas respectivas áreas</li>
            <li><strong>Produção Científica:</strong> Participação ativa em pesquisas e publicações acadêmicas</li>
            <li><strong>Compromisso Pedagógico:</strong> Dedicação ao ensino e à formação integral dos estudantes</li>
            <li><strong>Visão Interdisciplinar:</strong> Capacidade de integrar diferentes áreas do conhecimento</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>Áreas de Especialização</h2>
          <p>Nossos professores cobrem um amplo espectro de áreas do conhecimento, garantindo uma formação abrangente e interdisciplinar:</p>

          <div className="areas-grid">
            <div className="area-item">
              <h3>Filosofia</h3>
              <p>Filosofia Contemporânea, Epistemologia, Ética, Estética, História da Filosofia</p>
            </div>

            <div className="area-item">
              <h3>Artes</h3>
              <p>Artes Visuais, História da Arte, Curadoria, Arte Contemporânea, Arte-Educação</p>
            </div>

            <div className="area-item">
              <h3>Psicologia</h3>
              <p>Psicologia Analítica, Psicologia Junguiana, Estudos do Imaginário, Psicoterapia</p>
            </div>

            <div className="area-item">
              <h3>Literatura</h3>
              <p>Literatura Comparada, Mitocrítica, Literatura e Imaginário, Teoria Literária</p>
            </div>

            <div className="area-item">
              <h3>Educação</h3>
              <p>Pedagogia Waldorf, Arte-Educação, Metodologias Ativas, Educação Integral</p>
            </div>

            <div className="area-item">
              <h3>Antropologia</h3>
              <p>Antropologia Cultural, Simbolismo, Rituais, Estudos Culturais</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Desenvolvimento Docente</h2>
          <p>A FAFIH investe continuamente no desenvolvimento profissional de seu corpo docente através de:</p>
          <ul>
            <li>Programas de capacitação pedagógica</li>
            <li>Apoio à participação em congressos e eventos acadêmicos</li>
            <li>Incentivo à produção científica e artística</li>
            <li>Parcerias para intercâmbios acadêmicos</li>
            <li>Grupos de pesquisa interdisciplinares</li>
            <li>Sabbaticals para aprofundamento de estudos</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>Pesquisa e Extensão</h2>
          <p>Nossos professores estão ativamente envolvidos em projetos de pesquisa e extensão que enriquecem o ambiente acadêmico e conectam a universidade com a comunidade:</p>

          <h3>Linhas de Pesquisa Principais</h3>
          <ul>
            <li>Imaginário e Representações Simbólicas</li>
            <li>Arte e Contemporaneidade</li>
            <li>Filosofia e Práticas Educativas</li>
            <li>Psicologia Analítica e Cultura</li>
            <li>Literatura e Estudos Culturais</li>
            <li>Educação Integral e Desenvolvimento Humano</li>
          </ul>

          <h3>Projetos de Extensão</h3>
          <ul>
            <li>Oficinas de arte para a comunidade</li>
            <li>Ciclos de palestras e conferências</li>
            <li>Atendimento psicológico comunitário</li>
            <li>Projetos de arte-educação em escolas públicas</li>
            <li>Grupos de estudo abertos ao público</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>Contato com o Corpo Docente</h2>
          <p>Os estudantes podem entrar em contato com nossos professores através dos seguintes canais:</p>
          <ul>
            <li><strong>E-mail institucional:</strong> Cada professor possui e-mail institucional para contato acadêmico</li>
            <li><strong>Horários de atendimento:</strong> Horários específicos para orientação de estudantes</li>
            <li><strong>Plataforma acadêmica:</strong> Comunicação através do ambiente virtual de aprendizagem</li>
            <li><strong>Secretaria acadêmica:</strong> Intermediação de contatos quando necessário</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CorpoDocenteContent;