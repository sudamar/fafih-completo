import { getPolosContent } from '@/services/polosService.js';

const PolosContent = () => {
  const { locations, highlights } = getPolosContent();

  return (
    <section className="page-section">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Polos de Ensino</h1>
          <p>
            A FAFIH expandiu sua presença para melhor atender estudantes em
            diferentes regiões, oferecendo ensino de qualidade através de uma rede
            de polos estrategicamente localizados. Cada polo mantém os mesmos
            padrões de excelência acadêmica da sede.
          </p>
        </div>

        <div className="info-cards">
          {locations.map((polo) => (
            <div className="info-card" key={polo.name}>
              <div>
                <h3>{polo.name}</h3>
                <div className="polo-info">
                  <p>
                    <strong>Endereço:</strong> {polo.address}
                  </p>
                  <p>
                    <strong>Telefone:</strong> {polo.phone}
                  </p>
                  <p>
                    <strong>E-mail:</strong> {polo.email}
                  </p>
                  <p>
                    <strong>Coordenador:</strong> {polo.coordinator}
                  </p>
                </div>
                <div className="polo-cursos">
                  <h4>Cursos Oferecidos:</h4>
                  <ul>
                    {polo.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href={polo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                Ver no mapa
              </a>
            </div>
          ))}
        </div>

        <div className="info-card" style={{ marginTop: '3rem' }}>
          <h3>Informações Gerais sobre os Polos</h3>
          <div
            className="info-cards"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
          >
            {highlights.map((highlight) => (
              <div className="info-card" key={highlight.title}>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .info-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .polo-info {
          margin-bottom: 1.5rem;
        }

        .polo-info p {
          margin: 0.5rem 0;
          font-size: 0.95rem;
        }

        .map-button {
          display: block;
          background-color: var(--primary-color);
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          margin-top: 1rem;
          font-size: 1rem;
          text-align: center;
          transition: background-color 0.3s;
        }

        .map-button:hover {
          background-color: var(--secondary-color);
        }

        .polo-cursos {
          background: #f8f9ff;
          padding: 1rem;
          border-radius: 6px;
          margin-top: 1rem;
        }

        .polo-cursos h4 {
          color: var(--secondary-color);
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .polo-cursos ul {
          margin: 0;
          padding-left: 1.2rem;
        }

        .polo-cursos li {
          margin-bottom: 0.3rem;
          color: #555;
          font-size: 0.9rem;
        }
      `}</style>
    </section>
  );
};

export default PolosContent;
