const ServicoParaComunidadeContent = () => {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Serviço para Comunidade</h1>
        </div>

        <p className="page-intro">
          A FAFIH acredita na importância de estabelecer uma ponte sólida entre a universidade e a comunidade,
          oferecendo serviços especializados que promovem o desenvolvimento social, cultural e educacional da região.
        </p>

        <div className="content-section">
          <h2 className="card-heading">Serviços Oferecidos</h2>

          <div className="servicos-grid">
            <div className="servico-item">
              <h3 className="card-subheading">Atendimento Psicológico Comunitário</h3>
              <p>Oferecemos atendimento psicológico baseado na abordagem junguiana para a comunidade, com preços acessíveis e atendimento gratuito para casos de vulnerabilidade social.</p>
            </div>

            <div className="servico-item">
              <h3 className="card-subheading">Oficinas de Arte e Criatividade</h3>
              <p>Workshops e oficinas abertas ao público, explorando diferentes formas de expressão artística como meio de desenvolvimento pessoal e comunitário.</p>
            </div>

            <div className="servico-item">
              <h3 className="card-subheading">Círculos de Diálogo Filosófico</h3>
              <p>Encontros comunitários para discussão de temas filosóficos relevantes, promovendo o pensamento crítico e o debate construtivo sobre questões contemporâneas.</p>
            </div>

            <div className="servico-item">
              <h3 className="card-subheading">Consultoria em Desenvolvimento Humano</h3>
              <p>Assessoria para organizações não governamentais, empresas e instituições públicas em projetos de desenvolvimento humano e cultural.</p>
            </div>

            <div className="servico-item">
              <h3 className="card-subheading">Programas de Capacitação</h3>
              <p>Cursos e treinamentos para profissionais da área de saúde, educação e assistência social, focados em abordagens inovadoras do cuidado humano.</p>
            </div>

            <div className="servico-item">
              <h3 className="card-subheading">Eventos Culturais e Educativos</h3>
              <p>Palestras, seminários, exposições e apresentações artísticas abertas ao público, promovendo o acesso ao conhecimento e à cultura.</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2 className="card-heading no-underline">Parcerias e Colaborações</h2>
          <p>Trabalhamos em parceria com:</p>
          <ul>
            <li>Secretarias municipais de Saúde, Educação e Cultura</li>
            <li>Organizações não governamentais da região</li>
            <li>Hospitais e centros de saúde comunitários</li>
            <li>Escolas públicas e privadas</li>
            <li>Centros culturais e espaços artísticos</li>
            <li>Empresas com responsabilidade social</li>
          </ul>
        </div>

        <div className="content-section">
          <h2 className="card-heading no-underline">Projetos em Andamento</h2>

          <div className="projetos-grid">
            <div className="projeto-destaque">
              <h3 className="card-subheading">Projeto "Arte e Cura"</h3>
              <p>Programa de arteterapia em hospitais e centros de saúde, utilizando a expressão artística como ferramenta complementar no processo de cura e bem-estar.</p>
            </div>

            <div className="projeto-destaque">
              <h3 className="card-subheading">Programa "Filosofia na Escola"</h3>
              <p>Iniciativa que leva o ensino de filosofia para escolas públicas da região, desenvolvendo o pensamento crítico e reflexivo em crianças e adolescentes.</p>
            </div>

            <div className="projeto-destaque">
              <h3 className="card-subheading">Centro de Estudos do Imaginário Popular</h3>
              <p>Pesquisa e preservação das tradições culturais locais, promovendo o reconhecimento e valorização do patrimônio cultural imaterial da região.</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2 className="card-heading no-underline">Como Participar</h2>
          <p>A comunidade pode participar de nossos serviços através de:</p>
          <ul>
            <li><strong>Inscrições diretas:</strong> Para oficinas, palestras e eventos abertos</li>
            <li><strong>Encaminhamentos:</strong> Por meio de parceiros institucionais</li>
            <li><strong>Voluntariado:</strong> Oportunidades para estudantes e profissionais</li>
            <li><strong>Parcerias:</strong> Propostas de colaboração institucional</li>
          </ul>
        </div>

        <div className="content-section">
          <h2 className="card-heading no-underline">Impacto Social</h2>
          <p>Nossos serviços já impactaram:</p>
          <div className="impacto-numeros">
            <div className="numero-item">
              <span className="numero">500+</span>
              <span className="descricao">Pessoas atendidas em programas comunitários</span>
            </div>
            <div className="numero-item">
              <span className="numero">50+</span>
              <span className="descricao">Oficinas e workshops realizados</span>
            </div>
            <div className="numero-item">
              <span className="numero">20+</span>
              <span className="descricao">Parcerias ativas com organizações locais</span>
            </div>
            <div className="numero-item">
              <span className="numero">100+</span>
              <span className="descricao">Profissionais capacitados em nossos programas</span>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2 className="card-heading no-underline">Entre em Contato</h2>
          <p>Para mais informações sobre nossos serviços para a comunidade ou para propor parcerias:</p>
          <div className="contato-info">
            <p><strong>E-mail:</strong> comunidade@fafih.edu.br</p>
            <p><strong>Telefone:</strong> (11) 3456-7890</p>
            <p><strong>Coordenação:</strong> Prof. Dr. Maria da Silva</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .content-section {
          margin-bottom: 3rem;
        }

        .content-section p {
          line-height: 1.6;
          color: #555;
          margin-bottom: 1rem;
        }

        .content-section > .card-heading {
          font-size: 1.6rem;
        }

        .content-section > .card-heading + p {
          margin-top: 1rem;
        }

        .servicos-grid,
        .impacto-numeros {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .projetos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }

        .servico-item,
        .projeto-destaque {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .servico-item::before,
        .projeto-destaque::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(33, 5, 208, 0.03), rgba(5, 177, 139, 0.03));
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .servico-item:hover,
        .projeto-destaque:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }

        .servico-item:hover::before,
        .projeto-destaque:hover::before {
          opacity: 1;
        }

        .numero-item {
          background: linear-gradient(135deg, #2105D0, #05B18B);
          color: #ffffff;
          text-align: center;
          border-radius: 8px;
          padding: 2rem 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .numero-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }

        .numero {
          font-size: 2.6rem;
          font-weight: 700;
        }

        .descricao {
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .contato-info {
          background: linear-gradient(135deg, rgba(33, 5, 208, 0.06), rgba(5, 177, 139, 0.06));
          border: 1px solid rgba(33, 5, 208, 0.12);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        @media (max-width: 1024px) {
          .projetos-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .servicos-grid {
            grid-template-columns: 1fr;
          }

          .impacto-numeros {
            grid-template-columns: repeat(2, 1fr);
          }

          .servico-item,
          .projeto-destaque {
            padding: 1.5rem;
          }
        }

      `}</style>
    </section>
  );
};

export default ServicoParaComunidadeContent;
