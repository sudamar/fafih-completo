import { useState } from 'react';

const ApoioContent = () => {
  const [activeTab, setActiveTab] = useState('apresentacao');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="page-section">
      <div className="container">
        <h1>Núcleo de Apoio Psicopedagógico</h1>

        <div className="tabs-container">
          <button
            className={`tab-link ${activeTab === 'apresentacao' ? 'active' : ''}`}
            onClick={() => openTab('apresentacao')}
          >
            Apresentação
          </button>
          <button
            className={`tab-link ${activeTab === 'servicos' ? 'active' : ''}`}
            onClick={() => openTab('servicos')}
          >
            Serviços
          </button>
          <button
            className={`tab-link ${activeTab === 'agenda' ? 'active' : ''}`}
            onClick={() => openTab('agenda')}
          >
            Agendar Atendimento
          </button>
          <button
            className={`tab-link ${activeTab === 'contato' ? 'active' : ''}`}
            onClick={() => openTab('contato')}
          >
            Contato
          </button>
        </div>

        <div className={`tab-content ${activeTab === 'apresentacao' ? 'active' : ''}`}>
          <h2>Apresentação</h2>
          <p>O Núcleo de Apoio Psicopedagógico é um espaço dedicado ao suporte educacional, psicológico e pedagógico dos nossos estudantes. Nosso objetivo é promover o desenvolvimento integral do aluno, oferecendo suporte especializado para questões relacionadas à aprendizagem, adaptação acadêmica e bem-estar emocional.</p>

          <h3>Nossa Missão</h3>
          <p>Proporcionar um ambiente de apoio e orientação para que os estudantes possam superar dificuldades acadêmicas e pessoais, desenvolvendo todo o seu potencial durante a jornada universitária.</p>

          <h3>Nossa Equipe</h3>
          <p>Contamos com uma equipe multidisciplinar composta por psicólogos, pedagogos e profissionais especializados em educação superior, todos comprometidos com o sucesso acadêmico e pessoal dos nossos alunos.</p>
        </div>

        <div className={`tab-content ${activeTab === 'servicos' ? 'active' : ''}`}>
          <h2>Serviços Oferecidos</h2>

          <h3>Apoio Psicológico</h3>
          <ul>
            <li>Atendimento psicológico individual</li>
            <li>Orientação para questões de ansiedade e estresse acadêmico</li>
            <li>Suporte para adaptação à vida universitária</li>
            <li>Acompanhamento em situações de crise</li>
          </ul>

          <h3>Apoio Pedagógico</h3>
          <ul>
            <li>Orientação sobre métodos de estudo</li>
            <li>Técnicas de organização e planejamento acadêmico</li>
            <li>Suporte para dificuldades de aprendizagem</li>
            <li>Acompanhamento do rendimento acadêmico</li>
          </ul>

          <h3>Programas Especiais</h3>
          <ul>
            <li>Programa de acolhimento para calouros</li>
            <li>Grupos de apoio temáticos</li>
            <li>Workshops sobre saúde mental</li>
            <li>Palestras sobre bem-estar estudantil</li>
          </ul>
        </div>

        <div className={`tab-content ${activeTab === 'agenda' ? 'active' : ''}`}>
          <h2>Agendar Atendimento</h2>
          <p>Para agendar um atendimento, utilize uma das opções abaixo:</p>

          <div className="info-cards">
            <div className="info-card">
              <h3>Por E-mail</h3>
              <p>Envie um e-mail para <strong>apoio@fafih.edu.br</strong> informando:</p>
              <ul>
                <li>Nome completo</li>
                <li>Curso e semestre</li>
                <li>Motivo do atendimento</li>
                <li>Preferência de horário</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Por Telefone</h3>
              <p>Ligue para <strong>(11) 3456-7890</strong></p>
              <p>Horário de atendimento: Segunda a sexta, das 8h às 18h</p>
            </div>

            <div className="info-card">
              <h3>Presencial</h3>
              <p>Visite nossa secretaria no campus</p>
              <p>Horário: Segunda a sexta, das 8h às 17h</p>
            </div>
          </div>
        </div>

        <div className={`tab-content ${activeTab === 'contato' ? 'active' : ''}`}>
          <h2>Contato</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" id="nome" name="nome" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="curso">Curso</label>
              <input type="text" id="curso" name="curso" required />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" name="telefone" />
            </div>

            <div className="form-group">
              <label htmlFor="assunto">Assunto</label>
              <select id="assunto" name="assunto" required>
                <option value="">Selecione...</option>
                <option value="apoio-psicologico">Apoio Psicológico</option>
                <option value="apoio-pedagogico">Apoio Pedagógico</option>
                <option value="orientacao-academica">Orientação Acadêmica</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" required></textarea>
            </div>

            <div className="checkbox-container">
              <input type="checkbox" id="privacy" name="privacy" required />
              <label htmlFor="privacy">
                Li e aceito a <a href="politica-privacidade.html" target="_blank">Política de Privacidade da FAFIH</a>.
                Estou ciente de que as informações e dados pessoais aqui compartilhados serão utilizados pela FAFIH
                exclusivamente para resolução da solicitação feita, de acordo com a Política de Privacidade.
              </label>
            </div>

            <button type="submit" className="btn-submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApoioContent;