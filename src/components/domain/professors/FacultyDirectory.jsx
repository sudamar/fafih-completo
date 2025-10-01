import { useMemo, useState } from 'react';
import { listProfessorsSummary } from '@/services/professorCatalog.js';

const FILTERS = [
  { value: 'todos', label: 'Todos' },
  { value: 'doutor', label: 'Doutores' },
  { value: 'mestre', label: 'Mestres' },
];

const buildFallbackAvatar = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Professor')}&size=80&background=2C678F&color=ffffff&bold=true`;

const FacultyDirectory = ({ showIntro = false, limit = null }) => {
  const allProfessors = useMemo(() => {
    const data = listProfessorsSummary();
    if (limit && Number.isFinite(limit) && limit > 0) {
      return data.slice(0, limit);
    }
    return data;
  }, [limit]);

  const [activeFilter, setActiveFilter] = useState('todos');

  const filteredProfessors = useMemo(() => {
    if (activeFilter === 'todos') {
      return allProfessors;
    }

    return allProfessors.filter((professor) =>
      String(professor.categoria || '').toLowerCase() === activeFilter
    );
  }, [activeFilter, allProfessors]);

  return (
    <>
      {showIntro && (
        <div className="docente-intro">
          <p>
            Conheça nosso corpo docente altamente qualificado, composto por professores doutores e mestres
            reconhecidos em suas áreas de atuação. Nossa equipe acadêmica é formada por pesquisadores, artistas
            e profissionais experientes, comprometidos com a excelência do ensino e a formação integral de nossos
            estudantes.
          </p>
        </div>
      )}

      <div className="filter-container">
        <h2>Filtrar por Titulação</h2>
        <div className="filter-buttons">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="professores-grid">
        {filteredProfessors.map((professor) => {
          const fallbackAvatar = buildFallbackAvatar(professor.name);
          const photo = professor.foto || professor.photo || fallbackAvatar;

          return (
            <div key={professor.slug || professor.legacySlug || professor.id} className="professor-card-redesigned">
              <div className="professor-header">
                <div className="professor-foto-redesigned">
                  <img
                    src={photo}
                    alt={professor.name}
                    onError={(event) => {
                      event.currentTarget.src = fallbackAvatar;
                    }}
                  />
                </div>
                <div className="professor-nome-area">
                  <h3>{professor.name}</h3>
                  {professor.title && <p className="professor-area">{professor.title}</p>}
                </div>
              </div>

              <div className="professor-info-redesigned">
                <div className="professor-content">
                  {(professor.formacao || professor.qualifications) && (
                    <p className="professor-formacao">
                      {professor.formacao || (Array.isArray(professor.qualifications) ? professor.qualifications[0] : '') ||
                        'Especialização não informada'}
                    </p>
                  )}
                  {professor.bio && <p className="professor-bio">{professor.bio}</p>}
                </div>

                <div className="professor-contato-info">
                  <div className="contato-item">
                    <span className="contato-label" aria-hidden>
                      📞
                    </span>
                    {professor.telefone ? (
                      <a href={`tel:${professor.telefone.replace(/[^\d+]/g, '')}`} className="contato-link">
                        {professor.telefone}
                      </a>
                    ) : (
                      <span className="contato-link">Não informado</span>
                    )}
                  </div>
                  <div className="contato-item">
                    <span className="contato-label" aria-hidden>
                      ✉️
                    </span>
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
          );
        })}
      </div>

      <style jsx>{`
        .filter-container h2::after {
          display: none;
        }

        .filter-container h2 {
          margin-bottom: 1.25rem;
        }

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

        .professor-area {
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

        .professor-formacao {
          font-style: italic;
          color: #666;
          margin: 0;
          font-size: 0.9rem;
        }

        .professor-bio {
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

export default FacultyDirectory;
