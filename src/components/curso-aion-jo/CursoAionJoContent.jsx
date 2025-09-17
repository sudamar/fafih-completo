const CursoAionJoContent = () => {
  return (
    <>
      <section className="curso-hero">
        <div className="curso-container">
          <div className="curso-imagem">
            <img src="https://i.imgur.com/REzhmRK.jpeg" alt="Curso De Aion a Jó" />
          </div>
          <div className="curso-info">
            <h1>De Aion a Jó</h1>
            <h4 className="subtitulo-curso">Do Javismo da Antiga Era de Áries à Revolução Aquariana do Mundo que Deseja Nascer</h4>
            <div className="info-block">
              <h3>Informações do Curso</h3>
              <ul>
                <li><strong>Facilitadores:</strong> Dimas Künsch e Waldemar Magaldi</li>
                <li><strong>Formato:</strong> 8 encontros online, via plataforma Zoom</li>
                <li><strong>Datas:</strong> Todas as quintas-feiras, de 9 de outubro a 27 de novembro</li>
                <li><strong>Horário:</strong> das 17h às 19h</li>
                <li><strong>Carga Horária:</strong> 16 horas (válido como 3 créditos para a formação do IJEP)</li>
              </ul>
            </div>
            <div className="info-block">
              <h3>Investimento</h3>
              <ul>
                <li><strong>Valor:</strong> Matrícula de R$ 350,00 + 1 parcela de R$ 350,00</li>
                <li><strong>Membros analistas em formação:</strong> Matrícula + 1 parcela de R$ 315,00</li>
              </ul>
            </div>
            <div className="info-block" style={{borderLeftColor: '#006400'}}>
              <p style={{margin:0, fontSize: '1rem'}}>Oportunidade única e exclusiva, desenvolvida especialmente para alunos e ex-alunos da FAFIH e IJEP.</p>
            </div>
            <div className="curso-actions">
              <a href="https://www.ijep.com.br/campanha/aion" target="_blank" rel="noopener noreferrer" className="btn btn-matricule-agora">Matricule-se Agora</a>
            </div>
          </div>
        </div>
      </section>

      <section className="curso-detalhes">
        <div className="detalhes-container">
          <div className="detalhes-section">
            <h2>Descrição do Curso</h2>
            <blockquote>"Ói, ói o trem, vem trazendo de longe as cinzas do velho éon" - (Raul Seixas, "O trem das 7")</blockquote>
            <p>Mergulhe em uma jornada transformadora de acolhimento e ao mesmo tempo de confronto com a imagem da divindade em nós e na história do nosso mundo. Vamos juntos na companhia de Jó e com o auxílio de Carl Gustav Jung, por meio de duas de suas obras seminais e complementares: "Aion: um estudo sobre o simbolismo do si-mesmo" e "Resposta a Jó".</p>
            <p>A evolução da imagem de Deus na Era de Peixes e em sua transição para a Era de Aquário. Investigaremos como a jornada pessoal de Jung, ao superar os aspectos negativos de seu próprio complexo paterno, ilumina os desafios contemporâneos de um contexto patriarcal de perda de referências simbólicas, de desencanto e ameaças à vida no planeta. Entretanto, é da sombra -- a nigredo dos alquimistas -- que se ergue o grito de esperança, como diz Jung, no "esplendor sereno da vida".</p>
          </div>

          <div className="detalhes-section">
            <h2>Objetivos e Benefícios para sua Carreira</h2>
            <p>O curso foi desenhado para oferecer um profundo avanço em sua formação teórica e prática. Ao final dos encontros, você estará apto a:</p>
            <ul>
              <li><strong>Aprofundar o Conhecimento Teórico:</strong> Compreender teórica e vivencialmente os conceitos junguianos de Aion, do Si-mesmo e da complexa relação simbólica apresentada em "Resposta a Jó".</li>
              <li><strong>Potencializar o Autoconhecimento:</strong> Refletir sobre as dinâmicas do arquétipo da divindade, ou do instinto religioso, no sentido numinoso do "relegere", como o propõe Jung, isto é, o sentido da totalidade.</li>
              <li><strong>Aprimorar a Prática Clínica:</strong> Adquirir ferramentas analíticas e sensibilidade terapêutica para identificar e trabalhar não só a dimensão religiosa do "relegere", mas também, e particularmente, a temática do patriarcado e da ausência paterna na psicoterapia.</li>
              <li><strong>Manter-se Relevante:</strong> Conectar a psicologia analítica clássica aos desafios sociais e psicológicos mais urgentes do século XXI, agregando um diferencial competitivo à sua atuação profissional.</li>
            </ul>
          </div>

          <div className="curso-actions" style={{justifyContent: 'center', paddingTop: '2rem'}}>
            <a href="/" className="btn btn-voltar">Voltar</a>
            <a href="https://www.ijep.com.br/campanha/aion" target="_blank" rel="noopener noreferrer" className="btn btn-matricule-agora">Matricule-se Agora</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CursoAionJoContent;