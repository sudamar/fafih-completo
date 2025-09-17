import { useState } from 'react';

const ExtensaoTabs = () => {
  const [activeTab, setActiveTab] = useState('Apresentacao');
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const openActivityModal = (title, modality, area, hours, info) => {
    setModalData({ title, modality, area, hours, info });
    setShowActivityModal(true);
  };

  const closeModal = () => {
    setShowActivityModal(false);
  };

  return (
    <>
      <div className="tabs-container">
        <button className={`tab-link ${activeTab === 'Apresentacao' ? 'active' : ''}`} onClick={() => openTab('Apresentacao')}>Apresentação</button>
        <button className={`tab-link ${activeTab === 'Programas' ? 'active' : ''}`} onClick={() => openTab('Programas')}>Programas</button>
        <button className={`tab-link ${activeTab === 'Atividades' ? 'active' : ''}`} onClick={() => openTab('Atividades')}>Atividades Extensionistas</button>
        <button className={`tab-link ${activeTab === 'Jornada' ? 'active' : ''}`} onClick={() => openTab('Jornada')}>Jornada da Extensão</button>
        <button className={`tab-link ${activeTab === 'Editais' ? 'active' : ''}`} onClick={() => openTab('Editais')}>Editais</button>
        <button className={`tab-link ${activeTab === 'Regulamentacao' ? 'active' : ''}`} onClick={() => openTab('Regulamentacao')}>Regulamentação</button>
        <button className={`tab-link ${activeTab === 'FAQ' ? 'active' : ''}`} onClick={() => openTab('FAQ')}>FAQ</button>
      </div>

      <div id="Apresentacao" className={`tab-content ${activeTab === 'Apresentacao' ? 'active' : ''}`}>
        <h2>Seja bem-vindo à Extensão</h2>
        <p>A Curricularização da Extensão é um processo orgânico e dinâmico. Ocorre pela vontade de mudar o mundo por meio da Educação, o transformando em um lugar melhor para todos. Mais do que o cumprimento da legislação, a curricularização da extensão mudou o modelo da Educação Superior.</p>
        <p>Entendendo as demandas da comunidade, podemos nos conectar com elas e realizar ações efetivas, contribuindo com uma transformação positiva da sociedade, tendo como protagonista o estudante.</p>
        <h3>Definição Legal</h3>
        <blockquote>A Extensão na Educação Superior Brasileira é a atividade que se integra à matriz curricular e à organização da pesquisa, constituindo-se em processo interdisciplinar, político educacional, cultural, científico, tecnológico, que promove a interação transformadora entre as instituições de ensino superior e os outros setores da sociedade, por meio da produção e da aplicação do conhecimento, em articulação permanente com o ensino e a pesquisa. (RESOLUÇÃO MEC Nº 7, DE 18 DE DEZEMBRO DE 2018)</blockquote>
        <h3>O Papel da Extensão na FAFIH</h3>
        <p>Toda Instituição de Ensino Superior deve ter os três pilares da educação: Ensino, Pesquisa e Extensão. As atividades de extensão da FAFIH tem por objetivo ampliar a formação acadêmica, possibilitando experiências práticas que desenvolvam a consciência social, política, cultural e ambiental dos estudantes e de toda a comunidade acadêmica, bem como assegurar a sua com o Ensino e a Iniciação Científica, baseando-se nas necessidades e interesses reais da Sociedade.</p>
        <h3>Pilares a extensão universitária?</h3>
        <ul>
          <li>Atuar como um dos pilares da educação superior e articular com o ensino e a pesquisa, conforme previsto na Constituição Federal.</li>
          <li>Aplicar na prática o conhecimento produzido na faculdade para a sociedade, realizando a conexão entre a academia e o mundo exterior em situações reais.</li>
          <li>Promover a formação integral do estudante como cidadão crítico, ético e responsável.</li>
          <li>Oferecer ao corpo docente a oportunidade de validar a teoria na prática e atualizar seu o conteúdo didático, quando necessário.</li>
          <li>Levar o conhecimento acadêmico, recursos da faculdade e serviços especializados para a população.</li>
          <li>Incluir projetos sociais, cursos, oficinas, eventos prestação de serviços à comunidade em diversas áreas.</li>
          <li>Atuar na solução de problemas reais e contribuir para o desenvolvimento econômico, social e cultural do entorno.</li>
          <li>Interagir com a sociedade como um processo educativo, cultural e científico.</li>
          <li>Proporcionar que toda a comunidade acadêmica aprenda com as experiências e saberes locais.</li>
          <li>Ter na matriz curricular dos cursos de graduação a dedicação de, no mínimo, dez por cento (10%) do total da carga horária curricular, conforme previsto na Resolução nº 7, de 18 de dezembro de 2018.</li>
        </ul>
      </div>

      <div id="Programas" className={`tab-content ${activeTab === 'Programas' ? 'active' : ''}`}>
        <h2>Nossos Programas</h2>
        <p>Os Programas de Extensão reúnem, a médio e longo prazo, projetos e ações integradas com objetivos comuns, alinhados às linhas de ensino e pesquisa da FAFIH. Abrangem iniciativas socioeducativas em saúde, educação, comunicação, cultura, empreendedorismo, meio ambiente e outras áreas, visando à formação integral dos estudantes e ao atendimento à comunidade. Promovem a convergência entre ensino, pesquisa e extensão, evitando ações meramente assistencialistas.</p>
        <h3>Conheça alguns dos nossos Programas Institucionais de Extensão:</h3>
        <p><i>(Em breve, a lista de programas será disponibilizada).</i></p>
      </div>

      <div id="Atividades" className={`tab-content ${activeTab === 'Atividades' ? 'active' : ''}`}>
        <h2>Projetos de Extensão</h2>
        <p>Consulte abaixo a lista de projetos de extensão disponíveis. Clique no nome do projeto para ver mais detalhes e informações sobre como participar.</p>
        <table className="activities-table">
          <thead>
            <tr>
              <th>Nome do Projeto</th>
              <th>Data de Início</th>
              <th>Data de Conclusão</th>
              <th>Modalidade</th>
              <th>Carga Horária</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a onClick={() => openActivityModal('Oficinas de Arte e Saúde Mental', 'Oficina', 'Psicologia Analítica', '40h', 'Promover o bem-estar emocional em comunidades locais através de oficinas de arteterapia.')}>Oficinas de Arte e Saúde Mental</a></td>
              <td>01/03/2025</td>
              <td>15/05/2025</td>
              <td>Oficina</td>
              <td>40h</td>
            </tr>
            <tr>
              <td><a onClick={() => openActivityModal('Círculos de Leitura Filosófica', 'Evento', 'Filosofia', '30h', 'Estimular o pensamento crítico e o diálogo filosófico com a comunidade externa por meio de encontros de leitura.')}>Círculos de Leitura Filosófica</a></td>
              <td>15/02/2025</td>
              <td>30/04/2025</td>
              <td>Evento</td>
              <td>30h</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="Jornada" className={`tab-content ${activeTab === 'Jornada' ? 'active' : ''}`}>
        <h2>Jornada do Estudante na Extensão</h2>
        <div className="jornada-container">
          <div className="jornada-step">
            <div className="jornada-icon-wrapper">
              <div className="jornada-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>
              </div>
            </div>
            <div className="jornada-text">
              <h4>Início</h4>
              <p>Acesse em seu AVA, na aba EXTENSÃO, as atividades disponíveis para realização.</p>
            </div>
          </div>

          <div className="jornada-step">
            <div className="jornada-text">
              <h4>Escolha da Atividade</h4>
              <p>1. Selecione a atividade de extensão que deseja participar.<br/>2. Faça a leitura completa da atividade.<br/>3. Busque um local na comunidade para realizá-la.</p>
            </div>
            <div className="jornada-icon-wrapper">
              <div className="jornada-icon">
                <svg viewBox="0 0 24 24"><path d="M17.73 12.01c.2-.2.2-.51 0-.71l-1.42-1.42c-.2-.2-.51-.2-.71 0l-1.06 1.06-2.83-2.83 1.06-1.06c.2-.2.2-.51 0-.71L11.34 4.9c-.2-.2-.51-.2-.71 0L9.58 6.06 6.75 3.22 3.22 6.75l2.83 2.83L4.9 11.34c-.2.2-.2.51 0 .71l1.42 1.42c.2.2.51.2.71 0l1.06-1.06 2.83 2.83-1.06 1.06c-.2.2-.2.51 0 .71l1.42 1.42c.2.2.51.2.71 0l1.06-1.06 2.83 2.83 3.54-3.54-2.83-2.83 1.07-1.06zM6.59 9.17l-1.42-1.42L6.25 6.7l1.42 1.42L6.59 9.17zm7.07 7.07-1.42 1.42L13.25 19.3l1.42-1.42 1.08-1.07z"></path></svg>
              </div>
            </div>
          </div>

          <div className="jornada-step">
            <div className="jornada-icon-wrapper">
              <div className="jornada-icon">
                <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg>
              </div>
            </div>
            <div className="jornada-text">
              <h4>Documentação</h4>
              <p>Os documentos necessários para realizar a atividade de extensão encontram-se disponíveis na aba "Regulamentação" nesta página.</p>
            </div>
          </div>

          <div className="jornada-step">
            <div className="jornada-text">
              <h4>Desenvolvimento</h4>
              <p>Uma vez que você aderiu à atividade, ela ficará disponível em "minhas atividades". Após a realização, você fará a submissão das evidências na etapa "Comprovação".</p>
            </div>
            <div className="jornada-icon-wrapper">
              <div className="jornada-icon">
                <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
              </div>
            </div>
          </div>

          <div className="jornada-step">
            <div className="jornada-icon-wrapper">
              <div className="jornada-icon">
                <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
              </div>
            </div>
            <div className="jornada-text">
              <h4>Avaliação da Comunidade</h4>
              <p>Após o preenchimento do questionário, será disponibilizado um link para avaliação da comunidade. Encaminhe este link para o responsável do local onde a atividade foi realizada, para que possa fazer a avaliação sobre sua atuação e o impacto social do trabalho realizado.</p>
            </div>
          </div>

          <div className="jornada-step">
            <div className="jornada-text">
              <h4>Avaliação e Encerramento</h4>
              <p>Aguarde a validação das evidências. Ao final da jornada, você terá acesso ao certificado ou declaração de conclusão, com a creditação da carga horária de extensão.</p>
            </div>
            <div className="jornada-icon-wrapper">
              <div className="jornada-icon">
                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Editais" className={`tab-content ${activeTab === 'Editais' ? 'active' : ''}`}>
        <h2>Editais de Extensão</h2>
        <p>Fique atento aos editais para submissão de novos projetos de extensão e oportunidades de participação.</p>
        <div className="document-list">
          <div className="document-item">
            <span>Edital 001/2025 - Projetos de Extensão</span>
            <a href="#" className="btn-download">Visualizar PDF</a>
          </div>
          <div className="document-item">
            <span>Edital 002/2025 - Programas Contínuos</span>
            <a href="#" className="btn-download">Visualizar PDF</a>
          </div>
        </div>
      </div>

      <div id="Regulamentacao" className={`tab-content ${activeTab === 'Regulamentacao' ? 'active' : ''}`}>
        <h2>Regulamentação e Documentos</h2>
        <h3>Documentos Legais</h3>
        <p>Consulte aqui, os documentos legais que regulamentam a extensão universitária.</p>
        <div className="document-list">
          <div className="document-item">
            <span>RESOLUÇÃO Nº 7, DE 18 DE DEZEMBRO DE 2018 - Diretrizes para Extensão na Educação Superior</span>
            <a href="https://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=105102-rces007-18&Itemid=30192" className="btn-download" target="_blank" rel="noopener noreferrer">Acessar PDF</a>
          </div>
        </div>
        <h3>Documentos Institucionais</h3>
        <p>Consulte aqui, os documentos para o desenvolvimento das atividades extensionistas.</p>
        <div className="document-list">
          <div className="document-item">
            <span>FICHA DE FREQUÊNCIA</span>
            <a href="#" className="btn-download">Acessar PDF</a>
          </div>
          <div className="document-item">
            <span>TERMO DE CESSÃO DE USO DE IMAGEM</span>
            <a href="#" className="btn-download">Acessar PDF</a>
          </div>
        </div>
      </div>

      <div id="FAQ" className={`tab-content ${activeTab === 'FAQ' ? 'active' : ''}`}>
        <h2>FAQ | Curricularização da Extensão</h2>
        <ExtensaoFAQ />
      </div>

      {/* Modal para Atividades de Extensão */}
      {showActivityModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{modalData.title}</h2>
            <h3>Identificação</h3>
            <p><b>Atividade Extensionista:</b> {modalData.title}<br/><b>Modalidade:</b> {modalData.modality}<br/><b>Área de Conhecimento:</b> {modalData.area}</p>
            <h3>Cronograma</h3>
            <table className="activities-table">
              <thead><tr><th>Atividade</th><th>Carga Horária</th></tr></thead>
              <tbody>
                <tr><td>Planejamento e Contato com a Comunidade</td><td>4h</td></tr>
                <tr><td>Execução das Atividades</td><td>30h</td></tr>
                <tr><td>Relatório e Avaliação</td><td>6h</td></tr>
              </tbody>
              <tfoot><tr><th>Carga Horária Total</th><th>{modalData.hours}</th></tr></tfoot>
            </table>
            <h3>Informações Gerais da Atividade</h3>
            <p>{modalData.info}</p>
          </div>
        </div>
      )}
    </>
  );
};

const ExtensaoFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "1.1. Qual é o conceito de extensão curricular?",
      answer: "A extensão integra a matriz curricular com atividades e projetos que vão além do currículo formal, ampliando oportunidades de aprendizagem e envolvimento estudantil. Complementa a formação com experiências enriquecedoras e desenvolve competências acadêmicas e socioemocionais, como colaboração, liderança, resiliência, pensamento crítico e ética. Seu objetivo central é levar conhecimento e habilidades técnicas da instituição à comunidade, atendendo suas demandas."
    },
    {
      question: "1.2. Qual é a norma do Ministério da Educação que estabelece as diretrizes da curricularização da extensão?",
      answer: "Resolução nº 7, de 18 de dezembro de 2018, que estabelece as Diretrizes para a Extensão na Educação Superior Brasileira."
    },
    {
      question: "1.3. Quais são as modalidades de atividades de extensão determinadas na Resolução nº 7, de 18 de dezembro de 2018?",
      answer: "As atividades extensionistas, segundo sua caracterização nos Projetos Político-pedagógicos dos cursos, inserem-se nas seguintes modalidades:\n\n• Programas: atividades integradas, de médio e longo prazo, orientadas a um objetivo comum, articulando projetos e outras atividades de extensão.\n• Projetos: atividade de caráter educativo, social, cultural, científico, tecnológico com prazo determinado.\n• Cursos e oficinas: cursos de atualização, treinamento, qualificação profissional, aperfeiçoamento.\n• Eventos: congresso, seminário, ciclo de debates, exposição, espetáculo, evento esportivo, festival.\n• Prestação de serviço: serviço de consultoria, assessoria e curadoria, assistência à saúde humana, assistência à saúde animal, assistência jurídica e judicial."
    }
  ];

  return (
    <div className="faq-container">
      <h3>1. Conceitos e Normativas</h3>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            className={`faq-question ${openFAQ === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </button>
          <div
            className="faq-answer"
            style={{
              maxHeight: openFAQ === index ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease-out'
            }}
          >
            <p style={{ whiteSpace: 'pre-line' }}>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtensaoTabs;