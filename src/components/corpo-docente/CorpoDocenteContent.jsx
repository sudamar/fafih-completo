import { useMemo, useState } from 'react';
import { useProfessors } from '@/features/professors/hooks/useProfessors';

const CorpoDocenteContent = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const {
    professors: professores,
    loading,
    error
  } = useProfessors({ degree: activeFilter === 'todos' ? undefined : activeFilter });

  const filteredProfessores = useMemo(() => {
    if (!professores) return [];
    return activeFilter === 'todos'
      ? professores
      : professores.filter(prof => prof.categoria === activeFilter);
  }, [activeFilter, professores]);

  // Loading state
  if (loading) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <h1 className="page-title">Corpo Docente</h1>
          </div>
          <div className="text-center">
            <p>Carregando professores...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <h1 className="page-title">Corpo Docente</h1>
          </div>
          <div className="text-center">
            <h2>Erro ao carregar professores</h2>
            <p>{error.message}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Corpo Docente</h1>
        </div>

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
                  <img src={professor.foto} alt={professor.name} />
                </div>
                <div className="professor-nome-area">
                  <h3>{professor.name}</h3>
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
                    {professor.telefone ? (
                      <a href={`tel:${professor.telefone}`} className="contato-link">
                        {professor.telefone}
                      </a>
                    ) : (
                      <span className="contato-link">Não informado</span>
                    )}
                  </div>
                  <div className="contato-item">
                    <span className="contato-label">✉️</span>
                    {professor.email ? (
                      <a href={`mailto:${professor.email}`} className="contato-link">
                        {professor.email}
                      </a>
                    ) : (
                      <span className="contato-link">Não informado</span>
                    )}
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
