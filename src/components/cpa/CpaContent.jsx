import { useState } from 'react';

const CpaContent = () => {
  const [activeTab, setActiveTab] = useState('Apresentacao');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="page-section">
      <div className="container">
        <h1>Comissão Própria de Avaliação (CPA)</h1>

        <div className="tabs-container">
          <button
            className={`tab-link ${activeTab === 'Apresentacao' ? 'active' : ''}`}
            onClick={() => openTab('Apresentacao')}
          >
            Apresentação
          </button>
          <button
            className={`tab-link ${activeTab === 'Relatorios' ? 'active' : ''}`}
            onClick={() => openTab('Relatorios')}
          >
            Relatórios e Projetos
          </button>
          <button
            className={`tab-link ${activeTab === 'Agenda' ? 'active' : ''}`}
            onClick={() => openTab('Agenda')}
          >
            Agenda
          </button>
          <button
            className={`tab-link ${activeTab === 'Noticias' ? 'active' : ''}`}
            onClick={() => openTab('Noticias')}
          >
            Notícias
          </button>
          <button
            className={`tab-link ${activeTab === 'ContatoCPA' ? 'active' : ''}`}
            onClick={() => openTab('ContatoCPA')}
          >
            Contato
          </button>
          <button
            className={`tab-link ${activeTab === 'Legislacao' ? 'active' : ''}`}
            onClick={() => openTab('Legislacao')}
          >
            Legislação
          </button>
          <button
            className={`tab-link ${activeTab === 'Depoimentos' ? 'active' : ''}`}
            onClick={() => openTab('Depoimentos')}
          >
            Depoimentos
          </button>
        </div>

        <div className={`tab-content ${activeTab === 'Apresentacao' ? 'active' : ''}`}>
          <h2>Apresentação</h2>
          <h3>O que é Autoavaliação Institucional?</h3>
          <p>A Autoavaliação Institucional está em consonância com o Sistema Nacional de Avaliação da Educação Superior -- SINAES, instituído pela Lei Nº 10.861 de 14 de abril de 2004, que possui como principal finalidade a melhoria da qualidade da educação superior visando a efetividade acadêmica e social.</p>
          <p>A Autoavaliação em alinhamento com o Plano de Desenvolvimento Institucional (PDI) compreende um processo de autoconhecimento, que conduzido pela Comissão Própria de Avaliação (CPA) promove a participação de todos os atores envolvidos com a comunidade universitária, sendo eles membros do corpo acadêmico (docentes, discentes etc), administrativo, diretivo e a comunidade, promovendo uma cultura participativa e de engajamento na promoção da melhoria contínua das atividades acadêmicas desenvolvidas.</p>

          <h3>Apresentação</h3>
          <p>A Comissão Própria de Avaliação (CPA) constitui um órgão colegiado de natureza consultiva, com atribuições de elaboração, implementação, aplicação e monitoramento do processo de Autoavaliação Institucional com foco em melhoria contínua.</p>
          <p>A CPA tem como objetivo subsidiar e orientar a gestão institucional em sua dimensão acadêmica e administrativa a fim de promover os ajustes necessários à elevação do seu padrão de desempenho e à melhoria permanente da qualidade.</p>

          <h3>Qual a função da CPA?</h3>
          <p>São atribuições da CPA a condução dos processos internos avaliativos, a sistematização e disponibilidade das informações solicitadas pelo Ministério da Educação/INEP conforme as seguintes diretrizes: a) assegura uma análise global e integrada das dimensões, estruturas, compromisso social, atividades, finalidade e responsabilidade social da Instituição e seus cursos; b) o caráter público de todos os procedimentos, dados e resultados dos processos avaliativos; c) o respeito à identidade e à diversidade da instituição e seus cursos; d) a participação do corpo discente, docente e técnico administrativo da instituição, e da sociedade civil, por meio de suas representações (LEI 10.861).</p>
        </div>

        <div className={`tab-content ${activeTab === 'Relatorios' ? 'active' : ''}`}>
          <h2>Relatórios e Projetos</h2>
          <h3>Relatórios de Autoavaliação Institucional</h3>
          <p className="placeholder-text">(Em breve, os relatórios serão disponibilizados aqui.)</p>

          <h3>Relato Institucional</h3>
          <p className="placeholder-text">(Em breve, os relatos institucionais serão disponibilizados aqui.)</p>

          <h3>Projeto de Autoavaliação</h3>
          <p className="placeholder-text">(Em breve, o projeto de autoavaliação será disponibilizado aqui.)</p>
        </div>

        <div className={`tab-content ${activeTab === 'Agenda' ? 'active' : ''}`}>
          <h2>Agenda</h2>
          <p className="placeholder-text">(Em breve, a agenda de atividades da CPA será disponibilizada aqui.)</p>
        </div>

        <div className={`tab-content ${activeTab === 'Noticias' ? 'active' : ''}`}>
          <h2>Notícias</h2>
          <p className="placeholder-text">(Em breve, as notícias relacionadas à CPA serão disponibilizadas aqui.)</p>
        </div>

        <div className={`tab-content ${activeTab === 'ContatoCPA' ? 'active' : ''}`}>
          <h2>Contato</h2>
          <p>Utilize o formulário abaixo para enviar suas dúvidas, sugestões ou outras manifestações para a Comissão Própria de Avaliação.</p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="cpa-nome">Nome Completo</label>
              <input type="text" id="cpa-nome" name="nome" required />
            </div>
            <div className="form-group">
              <label htmlFor="cpa-cpf">CPF</label>
              <input type="text" id="cpa-cpf" name="cpf" required />
            </div>
            <div className="form-group">
              <label htmlFor="cpa-email">E-mail</label>
              <input type="email" id="cpa-email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="cpa-telefone">Telefone</label>
              <input type="tel" id="cpa-telefone" name="telefone" />
            </div>
            <div className="form-group">
              <label htmlFor="cpa-mensagem">Mensagem</label>
              <textarea id="cpa-mensagem" name="mensagem" required></textarea>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="cpa-privacy" name="privacy" required />
              <label htmlFor="cpa-privacy">
                Li e aceito a <a href="politica-privacidade.html" target="_blank">Política de Privacidade da FAFIH</a>.
                Estou ciente de que as informações e dados pessoais aqui compartilhados serão utilizados pela FAFIH
                exclusivamente para resolução da solicitação feita, de acordo com a Política de Privacidade.
              </label>
            </div>
            <button type="submit" className="btn-submit">Enviar</button>
          </form>
        </div>

        <div className={`tab-content ${activeTab === 'Legislacao' ? 'active' : ''}`}>
          <h2>Legislação</h2>
          <div className="document-list">
            <div className="document-item">
              <span>Lei Nº 10.861, de 14 de abril de 2004 - Institui o Sistema Nacional de Avaliação da Educação Superior, SINAES e dá outras Providências.</span>
              <a href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/lei/l10.861.htm" target="_blank" className="btn-download">Acessar</a>
            </div>
            <div className="document-item">
              <span>Lei Nº 9.394, de 20 de dezembro de 1996 - Estabelece as Diretrizes e bases da Educação Nacional.</span>
              <a href="https://www.planalto.gov.br/ccivil_03/leis/l9394.htm" target="_blank" className="btn-download">Acessar</a>
            </div>
            <div className="document-item">
              <span>Instrumento de Avaliação de Cursos de Graduação Presencial e a Distância - Documento que regulamenta a avaliação de reconhecimento e renovação de reconhecimento dos cursos de graduação (bacharelado, licenciatura, tecnólogo) pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (Inep).</span>
              <a href="https://download.inep.gov.br/educacao_superior/avaliacao_cursos_graduacao/instrumentos/2017/curso_reconhecimento.pdf" target="_blank" className="btn-download">Acessar PDF</a>
            </div>
            <div className="document-item">
              <span>Instrumento de Avaliação Institucional Externa Presencial e a Distância - Documento que regulamenta a avaliação de recredenciamento e transformação de organização acadêmica pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (Inep).</span>
              <a href="https://download.inep.gov.br/educacao_superior/avaliacao_institucional/instrumentos/2017/IES_recredenciamento.pdf" target="_blank" className="btn-download">Acessar PDF</a>
            </div>
          </div>
        </div>

        <div className={`tab-content ${activeTab === 'Depoimentos' ? 'active' : ''}`}>
          <h2>Depoimentos</h2>
          <p className="placeholder-text">(Em breve, depoimentos sobre o processo de avaliação serão disponibilizados aqui.)</p>
        </div>
      </div>
    </section>
  );
};

export default CpaContent;