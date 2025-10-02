import { useMemo, useState } from 'react';
import { getMembrosAnalistas, getTiposAnalistas } from '@/services/membrosAnalistasService.js';

const buildFallbackAvatar = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Analista')}&size=80&background=2C678F&color=ffffff&bold=true`;

const MembrosAnalistasDirectory = ({ showIntro = true }) => {
  const allMembros = useMemo(() => getMembrosAnalistas(), []);
  const tipos = useMemo(() => getTiposAnalistas(), []);

  const [activeFilter, setActiveFilter] = useState('todos');

  const filteredMembros = useMemo(() => {
    if (activeFilter === 'todos') {
      return allMembros;
    }

    return allMembros.filter((membro) =>
      String(membro.tipo || '').toLowerCase() === activeFilter.toLowerCase()
    );
  }, [activeFilter, allMembros]);

  const FILTERS = [
    { value: 'todos', label: 'Todos' },
    ...tipos.map(tipo => ({ value: tipo.toLowerCase(), label: tipo }))
  ];

  return (
    <>
      {showIntro && (
        <div className="conheca-intro">
          <p>
            Conheça o corpo de analistas do IJEP, profissionais qualificados, especialistas
            pós-graduados pela FAFIH, dedicados à prática clínica e ao contínuo aprofundamento
            de sua formação em psicologia analítica e suas vertentes.
          </p>
        </div>
      )}

      <div className="filter-container">
        <div className="filter-buttons">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="analistas-directory">
        {filteredMembros.map((membro, index) => (
          <article key={index} className="analista-card">
            <div className="analista-header">
              <img
                src={buildFallbackAvatar(membro.nome)}
                alt={membro.nome}
                className="analista-avatar"
                loading="lazy"
              />
              <div className="analista-info">
                <h3 className="analista-nome">{membro.nome}</h3>
                <p className="analista-tipo">{membro.tipo}</p>
              </div>
            </div>

            <div className="analista-details">
              {membro.endereco && (
                <p className="detail-item">
                  <strong>Endereço:</strong> {membro.endereco}
                </p>
              )}

              {membro.cidade && (
                <p className="detail-item">
                  <strong>Cidade:</strong> {membro.cidade}
                </p>
              )}

              {membro.telefone && (
                <p className="detail-item">
                  <strong>Telefone:</strong> {membro.telefone}
                </p>
              )}

              {membro.email && (
                <p className="detail-item">
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${membro.email}`} className="email-link">
                    {membro.email}
                  </a>
                </p>
              )}

              {membro.biografia && (
                <p className="detail-item biografia">
                  <strong>Biografia:</strong> {membro.biografia}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      {filteredMembros.length === 0 && (
        <div className="no-results">
          <p>Nenhum membro analista encontrado com este filtro.</p>
        </div>
      )}
    </>
  );
};

export default MembrosAnalistasDirectory;
