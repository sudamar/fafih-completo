import { useState } from 'react';

const CorpoDocenteContent = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const professores = [
    {
      id: 1,
      nome: "Dr. Carlos Eduardo Silva",
      area: "Filosofia",
      formacao: "Doutor em Filosofia pela USP",
      bio: "Especialista em Filosofia Contemporânea e Epistemologia, com mais de 15 anos de experiência no ensino superior. Desenvolveu pesquisas pioneiras sobre fenomenologia e hermenêutica, publicando diversos artigos em revistas indexadas. Atua como consultor em projetos interdisciplinares que conectam filosofia e práticas educativas, contribuindo para uma formação humanística integral.",
      telefone: "(11) 3456-7890",
      email: "carlos.silva@fafih.edu.br",
      categoria: "doutor",
      foto: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      nome: "Dra. Maria Fernanda Santos",
      area: "Artes Visuais",
      formacao: "Doutora em Artes pela UNICAMP",
      bio: "Artista visual e curadora com reconhecimento nacional, especializada em Arte Contemporânea e processos curatoriais. Sua pesquisa explora as intersecções entre arte, tecnologia e sociedade. Organizou mais de 20 exposições e possui obras em acervos importantes. Dedica-se à formação de novos artistas e à democratização do acesso à arte.",
      telefone: "(11) 3456-7891",
      email: "maria.santos@fafih.edu.br",
      categoria: "doutor",
      foto: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      nome: "Ms. João Paulo Oliveira",
      area: "Psicologia Analítica",
      formacao: "Mestre em Psicologia pelo IJEP",
      bio: "Psicólogo junguiano com formação especializada em Imaginário e Simbolismo. Desenvolve trabalhos terapêuticos e de pesquisa focados na integração da psique através de abordagens criativas. Membro ativo de grupos de estudos em Psicologia Analítica e facilitador de oficinas sobre desenvolvimento pessoal e autoconhecimento.",
      telefone: "(11) 3456-7892",
      email: "joao.oliveira@fafih.edu.br",
      categoria: "mestre",
      foto: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      nome: "Dra. Ana Beatriz Costa",
      area: "Literatura",
      formacao: "Doutora em Literatura Comparada pela UERJ",
      bio: "Pesquisadora em Literatura e Imaginário, com foco em Mitocrítica e análises simbólicas de textos literários. Autora de livros sobre literatura contemporânea e coordenadora de projetos de extensão em letramento literário. Sua abordagem interdisciplinar conecta literatura, antropologia e estudos culturais.",
      telefone: "(11) 3456-7893",
      email: "ana.costa@fafih.edu.br",
      categoria: "doutor",
      foto: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      id: 5,
      nome: "Dr. Roberto Mendes",
      area: "História da Arte",
      formacao: "Doutor em História da Arte pela PUC-SP",
      bio: "Historiador da arte especializado em Arte Medieval e Iconografia, com pesquisas sobre simbolismo religioso e cultura visual. Consultor de museus e instituições culturais, desenvolve projetos de educação patrimonial. Suas análises iconográficas contribuem para a compreensão da arte como linguagem simbólica universal.",
      telefone: "(11) 3456-7894",
      email: "roberto.mendes@fafih.edu.br",
      categoria: "doutor",
      foto: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      nome: "Ms. Claudia Ferreira",
      area: "Educação",
      formacao: "Mestre em Educação pela UNICAMP",
      bio: "Educadora especializada em Pedagogia Waldorf e Arte-Educação, com ampla experiência em metodologias ativas e educação integral. Desenvolve projetos inovadores que integram arte, natureza e desenvolvimento humano. Formadora de professores e consultora em transformação de espaços educativos para uma aprendizagem mais significativa.",
      telefone: "(11) 3456-7895",
      email: "claudia.ferreira@fafih.edu.br",
      categoria: "mestre",
      foto: "https://randomuser.me/api/portraits/women/6.jpg"
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
            <div key={professor.id} className="professor-card-redesigned">
              <div className="professor-header">
                <div className="professor-foto-redesigned">
                  <img src={professor.foto} alt={professor.nome} />
                </div>
                <div className="professor-nome-area">
                  <h3>{professor.nome}</h3>
                  <p className="professor-area">{professor.area}</p>
                </div>
              </div>
              <div className="professor-info-redesigned">
                <div className="professor-content">
                  <p className="professor-formacao">{professor.formacao}</p>
                  <p className="professor-bio">{professor.bio}</p>
                </div>
                <div className="professor-contato-info">
                  <div className="contato-item">
                    <span className="contato-label">📞</span>
                    <a href={`tel:${professor.telefone}`} className="contato-link">
                      {professor.telefone}
                    </a>
                  </div>
                  <div className="contato-item">
                    <span className="contato-label">✉️</span>
                    <a href={`mailto:${professor.email}`} className="contato-link">
                      {professor.email}
                    </a>
                  </div>
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

      {/* CSS Customizado para o novo layout */}
      <style jsx>{`
        .professores-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
          align-items: stretch;
        }
        .professor-card-redesigned {
          background-color: var(--card-bg);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100%;
          min-height: 450px;
        }

        .professor-card-redesigned:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .professor-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .professor-foto-redesigned {
          flex: 0 0 auto;
          width: 80px;
          height: 80px;
        }

        .professor-foto-redesigned img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--secondary-color);
        }

        .professor-nome-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 80px;
        }

        .professor-nome-area h3 {
          color: var(--primary-color);
          font-family: 'Montserrat', sans-serif;
          margin: 0 0 0.5rem 0;
          font-size: 1.2rem;
          line-height: 1.3;
        }

        .professor-nome-area .professor-area {
          color: var(--secondary-color);
          font-weight: 700;
          font-size: 1rem;
          margin: 0;
        }

        .professor-info-redesigned {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          flex: 1;
          justify-content: space-between;
        }

        .professor-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .professor-info-redesigned .professor-formacao {
          font-style: italic;
          color: #666;
          margin: 0;
          font-size: 0.9rem;
        }

        .professor-info-redesigned .professor-bio {
          margin: 0;
          font-size: 0.9rem;
          color: #444;
          line-height: 1.5;
          text-align: justify;
        }

        .professor-contato-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: auto;
          padding-top: 0.8rem;
          border-top: 1px solid #e9ecef;
          flex-shrink: 0;
        }

        .contato-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .contato-label {
          font-size: 1rem;
          flex-shrink: 0;
        }

        .contato-link {
          color: var(--secondary-color);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .contato-link:hover {
          color: var(--primary-color);
          text-decoration: underline;
        }

        /* Responsividade */
        @media (max-width: 480px) {
          .professor-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .professor-foto-redesigned {
            width: 100px;
            height: 100px;
          }

          .professor-nome-area {
            min-height: auto;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default CorpoDocenteContent;