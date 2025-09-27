import { useMemo, useState } from 'react';
import professorsData from '@/data/professors.json';

const CorpoDocente = ({ title = "Filtrar por Titulação", showIntro = false, limit = null }) => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filteredProfessores = useMemo(() => {
    if (!professorsData) return [];
    let filtered = professorsData;

    if (activeFilter === 'todos') {
      filtered = professorsData;
    } else {
      filtered = professorsData.filter(prof => {
        const firstQualification = prof.qualifications?.[0] || '';
        if (activeFilter === 'doutor') {
          return firstQualification.toLowerCase().includes('doutor');
        }
        if (activeFilter === 'mestre') {
          return firstQualification.toLowerCase().includes('mestre');
        }
        return true;
      });
    }

    // Aplicar limite se especificado
    if (limit && limit > 0) {
      filtered = filtered.slice(0, limit);
    }

    return filtered;
  }, [activeFilter, limit]);

  return (
    <>
      {showIntro && (
        <div className="docente-intro">
          <p>Conheça nosso corpo docente altamente qualificado, composto por professores doutores e mestres reconhecidos em suas áreas de atuação. Nossa equipe acadêmica é formada por pesquisadores, artistas e profissionais experientes, comprometidos com a excelência do ensino e a formação integral de nossos estudantes.</p>
        </div>
      )}

      <div className="filter-container">
        <h2>{title}</h2>
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
                <img
                  src={professor.photo || "https://via.placeholder.com/80x80/2C678F/ffffff?text=Prof"}
                  alt={professor.name}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/80x80/2C678F/ffffff?text=Prof";
                  }}
                />
              </div>
              <div className="professor-nome-area">
                <h3>{professor.name}</h3>
                <p className="professor-area">{professor.title}</p>
              </div>
            </div>
            <div className="professor-info-redesigned">
              <div className="professor-content">
                <p className="professor-formacao">{professor.qualifications?.[0] || 'Especialização não informada'}</p>
                <p className="professor-bio">{Array.isArray(professor.bio) ? professor.bio.join(' ') : professor.bio}</p>
              </div>
              <div className="professor-contato-info">
                <div className="contato-item">
                  <span className="contato-label">📞</span>
                  {professor.contact?.phone ? (
                    <a href={`tel:${professor.contact.phone}`} className="contato-link">
                      {professor.contact.phone}
                    </a>
                  ) : (
                    <span className="contato-link">Não informado</span>
                  )}
                </div>
                <div className="contato-item">
                  <span className="contato-label">✉️</span>
                  {professor.contact?.email ? (
                    <a href={`mailto:${professor.contact.email}`} className="contato-link">
                      {professor.contact.email}
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

      {/* CSS Customizado para o layout dos professores */}
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
    </>
  );
};

export default CorpoDocente;