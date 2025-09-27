const PolosContent = () => {
  const polos = [
    {
      name: 'Polo São Paulo - Capital',
      address: 'Rua Augusta, 1508 - Consolação, São Paulo - SP, 01304-001',
      phone: '(11) 3456-7890',
      email: 'saopaulo@fafih.edu.br',
      coordinator: 'Prof. Dr. João Silva',
      courses: [
        'Pós-Graduação em Psicologia Junguiana',
        'Arteterapia e Expressão Criativa',
        'Filosofia Contemporânea',
        'Todos os cursos de extensão',
      ],
    },
    {
      name: 'Polo Rio de Janeiro',
      address: 'Av. Copacabana, 1200 - Copacabana, Rio de Janeiro - RJ, 22070-001',
      phone: '(21) 3456-7890',
      email: 'riodejaneiro@fafih.edu.br',
      coordinator: 'Profa. Dra. Maria Santos',
      courses: [
        'Pós-Graduação em Psicologia Junguiana',
        'Psicossomática',
        'Arte e Imaginário',
        'Cursos de curta duração',
      ],
    },
    {
      name: 'Polo Brasília',
      address: 'SCS Quadra 02, Bloco C - Asa Sul, Brasília - DF, 70318-900',
      phone: '(61) 3456-7890',
      email: 'brasilia@fafih.edu.br',
      coordinator: 'Profa. Dra. Ana Costa',
      courses: [
        'Pós-Graduação em Psicologia Junguiana',
        'Arte e Criatividade',
        'Eventos e workshops',
      ],
    },
  ];

  const getMapsUrl = (address) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
  };

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
          {polos.map((polo) => (
            <div className="info-card" key={polo.name}>
              <h3>{polo.name}</h3>
              <div className="polo-info">
                <p>
                  <strong>Endereço:</strong> {polo.address}
                </p>
                <a
                  href={getMapsUrl(polo.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-button"
                >
                  Ver no mapa
                </a>
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
          ))}
        </div>

        <div className="info-card" style={{ marginTop: '3rem' }}>
          <h3>Informações Gerais sobre os Polos</h3>
          <div
            className="info-cards"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
          >
            <div className="info-card">
              <h4>Infraestrutura</h4>
              <p>
                Todos os polos contam com salas climatizadas, recursos
                audiovisuais, biblioteca e laboratórios especializados.
              </p>
            </div>
            <div className="info-card">
              <h4>Modalidades</h4>
              <p>
                Oferecemos ensino presencial, híbrido e semipresencial,
                adaptando-se às necessidades dos estudantes.
              </p>
            </div>
            <div className="info-card">
              <h4>Contato Central</h4>
              <p>Para informações: (11) 3456-7890 ou polos@fafih.edu.br</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .polo-info {
          margin-bottom: 1.5rem;
        }

        .polo-info p {
          margin: 0.5rem 0;
          font-size: 0.95rem;
        }

        .map-button {
          display: inline-block;
          background-color: var(--primary-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          margin-top: 0.5rem;
          font-size: 0.9rem;
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