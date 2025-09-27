const ServicoParaComunidadeContent = () => {
  return (
    <section className="page-section">
      <div className="container">
        <h1>Serviço para Comunidade</h1>

        <div className="servico-intro">
          <p>A FAFIH acredita na importância de estabelecer uma ponte sólida entre a universidade e a comunidade, oferecendo serviços especializados que promovem o desenvolvimento social, cultural e educacional da região.</p>
        </div>

        <div className="content-section">
          <h2>Nossa Responsabilidade Social</h2>
          <p>Como instituição de ensino superior comprometida com a transformação social, a FAFIH desenvolve projetos e oferece serviços que atendem às necessidades da comunidade local e regional, aplicando nosso conhecimento em artes, filosofia e estudos do imaginário humano para benefício de todos.</p>
        </div>

        <div className="content-section">
          <h2>Serviços Oferecidos</h2>

          <div className="servicos-grid">
            <div className="servico-item">
              <h3>Atendimento Psicológico Comunitário</h3>
              <p>Oferecemos atendimento psicológico baseado na abordagem junguiana para a comunidade, com preços acessíveis e atendimento gratuito para casos de vulnerabilidade social.</p>
            </div>

            <div className="servico-item">
              <h3>Oficinas de Arte e Criatividade</h3>
              <p>Workshops e oficinas abertas ao público, explorando diferentes formas de expressão artística como meio de desenvolvimento pessoal e comunitário.</p>
            </div>

            <div className="servico-item">
              <h3>Círculos de Diálogo Filosófico</h3>
              <p>Encontros comunitários para discussão de temas filosóficos relevantes, promovendo o pensamento crítico e o debate construtivo sobre questões contemporâneas.</p>
            </div>

            <div className="servico-item">
              <h3>Consultoria em Desenvolvimento Humano</h3>
              <p>Assessoria para organizações não governamentais, empresas e instituições públicas em projetos de desenvolvimento humano e cultural.</p>
            </div>

            <div className="servico-item">
              <h3>Programas de Capacitação</h3>
              <p>Cursos e treinamentos para profissionais da área de saúde, educação e assistência social, focados em abordagens inovadoras do cuidado humano.</p>
            </div>

            <div className="servico-item">
              <h3>Eventos Culturais e Educativos</h3>
              <p>Palestras, seminários, exposições e apresentações artísticas abertas ao público, promovendo o acesso ao conhecimento e à cultura.</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Parcerias e Colaborações</h2>
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
          <h2>Projetos em Andamento</h2>

          <div className="projeto-destaque">
            <h3>Projeto "Arte e Cura"</h3>
            <p>Programa de arteterapia em hospitais e centros de saúde, utilizando a expressão artística como ferramenta complementar no processo de cura e bem-estar.</p>
          </div>

          <div className="projeto-destaque">
            <h3>Programa "Filosofia na Escola"</h3>
            <p>Iniciativa que leva o ensino de filosofia para escolas públicas da região, desenvolvendo o pensamento crítico e reflexivo em crianças e adolescentes.</p>
          </div>

          <div className="projeto-destaque">
            <h3>Centro de Estudos do Imaginário Popular</h3>
            <p>Pesquisa e preservação das tradições culturais locais, promovendo o reconhecimento e valorização do patrimônio cultural imaterial da região.</p>
          </div>
        </div>

        <div className="content-section">
          <h2>Como Participar</h2>
          <p>A comunidade pode participar de nossos serviços através de:</p>
          <ul>
            <li><strong>Inscrições diretas:</strong> Para oficinas, palestras e eventos abertos</li>
            <li><strong>Encaminhamentos:</strong> Por meio de parceiros institucionais</li>
            <li><strong>Voluntariado:</strong> Oportunidades para estudantes e profissionais</li>
            <li><strong>Parcerias:</strong> Propostas de colaboração institucional</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>Impacto Social</h2>
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
          <h2>Entre em Contato</h2>
          <p>Para mais informações sobre nossos serviços para a comunidade ou para propor parcerias:</p>
          <div className="contato-info">
            <p><strong>E-mail:</strong> comunidade@fafih.edu.br</p>
            <p><strong>Telefone:</strong> (11) 3456-7890</p>
            <p><strong>Coordenação:</strong> Prof. Dr. Maria da Silva</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-section {
          padding: 2rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        h1 {
          color: #2105D0;
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2.5rem;
        }

        .servico-intro {
          background: #f8f9ff;
          padding: 2rem;
          border-radius: 8px;
          margin-bottom: 3rem;
          text-align: center;
        }

        .servico-intro p {
          font-size: 1.2rem;
          color: #333;
          margin: 0;
        }

        .content-section {
          margin-bottom: 3rem;
        }

        .content-section h2 {
          color: #2105D0;
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .content-section h3 {
          color: #0A2342;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }

        .content-section p {
          line-height: 1.6;
          color: #555;
          margin-bottom: 1rem;
        }

        .servicos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .servico-item {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          border-left: 4px solid #05B18B;
        }

        .servico-item h3 {
          color: #05B18B;
          margin-bottom: 1rem;
        }

        .projeto-destaque {
          background: #f0f8ff;
          padding: 1.5rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          border-left: 4px solid #2105D0;
        }

        .projeto-destaque h3 {
          color: #2105D0;
          margin-bottom: 0.5rem;
        }

        .impacto-numeros {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .numero-item {
          text-align: center;
          padding: 1.5rem;
          background: linear-gradient(135deg, #2105D0, #05B18B);
          color: white;
          border-radius: 8px;
        }

        .numero {
          display: block;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .descricao {
          font-size: 0.9rem;
        }

        .contato-info {
          background: #f8f9ff;
          padding: 1.5rem;
          border-radius: 8px;
          margin-top: 1rem;
        }

        .contato-info p {
          margin: 0.5rem 0;
          color: #333;
        }

        ul {
          padding-left: 1.5rem;
        }

        li {
          margin-bottom: 0.5rem;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .servicos-grid {
            grid-template-columns: 1fr;
          }

          .impacto-numeros {
            grid-template-columns: repeat(2, 1fr);
          }

          .servico-intro {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicoParaComunidadeContent;