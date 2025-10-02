import { useState } from 'react';

const ValidaDLSContent = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [openCurriculum, setOpenCurriculum] = useState([false, true]); // primeiro fechado, segundo aberto

  return (
    <div className="container">
      {/* [@DLS-TABS] Seção: Abas/Tabs
          Classes CSS: .tabs-container, .tab-link, .tab-link.active, .tab-content, .tab-content.active */}
      <section className="dls-section" data-component="DLS-TABS" id="tabs_exemplo">
        <h1>Design System - Abas (Tabs)</h1>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '1rem'}}>
          <code>#tabs_exemplo</code> : Componente de abas/tabs<br/>
          <strong>Classes:</strong> <code>.tabs-container</code>, <code>.tab-link</code>, <code>.tab-link.active</code>, <code>.tab-content</code>, <code>.tab-content.active</code>
        </p>

        <div className="tabs-container" role="tablist">
          <button
            type="button"
            className={`tab-link ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab1')}
          >
            Aba 1
          </button>
          <button
            type="button"
            className={`tab-link ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab2')}
          >
            Aba 2
          </button>
          <button
            type="button"
            className={`tab-link ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab3')}
          >
            Aba 3
          </button>
        </div>

        <div className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}>
          <h3 className="card-heading">Conteúdo da Aba 1</h3>
          <p>Este é o conteúdo da primeira aba. As abas são usadas para organizar conteúdo em seções navegáveis.</p>
        </div>

        <div className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}>
          <h3 className="card-heading">Conteúdo da Aba 2</h3>
          <p>Este é o conteúdo da segunda aba. Cada aba pode conter qualquer tipo de conteúdo.</p>
        </div>

        <div className={`tab-content ${activeTab === 'tab3' ? 'active' : ''}`}>
          <h3 className="card-heading">Conteúdo da Aba 3</h3>
          <p>Este é o conteúdo da terceira aba. Use a classe .tab-link para os botões e .tab-content para o conteúdo.</p>
        </div>
      </section>

      {/* [@DLS-TITULOS] Seção: Títulos
          Classes CSS: .page-title, .card-heading, .card-subheading, .section-subtitle */}
      <section className="dls-section" data-component="DLS-TITULOS" id="titulos_exemplo">
        <h1>Design System - Títulos</h1>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '1rem'}}>
          <code>#titulos_exemplo</code> : Componente de títulos (h1, h2, h3)<br/>
          <strong>Classes:</strong> <code>.page-title</code>, <code>.card-heading</code>, <code>.card-subheading</code>, <code>.section-subtitle</code>
        </p>

        <h2 className="card-heading">Card Heading - H2 com linha decorativa</h2>
        <h3 className="card-subheading">Card Subheading - H3 com linha decorativa</h3>
        <h2 className="section-subtitle">Section Subtitle - Subtítulo de seção</h2>
      </section>

      {/* [@DLS-CARDS] Seção: Cards
          Classes CSS: .dls-demo-card, .card-accent-left, .ingresso-card, .info-card */}
      <section className="dls-section" data-component="DLS-CARDS" id="cards_basicos">
        <h2 className="card-heading">Cards</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '1rem'}}>
          <code>#cards_basicos</code> : Componentes de cards básicos<br/>
          <strong>Classes:</strong> <code>.dls-demo-card</code>, <code>.card-accent-left</code>, <code>.ingresso-card</code>, <code>.info-card</code>
        </p>

        <div className="dls-cards-grid">
          {/* [@DLS-CARD-PADRAO] Card Padrão */}
          <div className="dls-demo-card" data-component="DLS-CARD-PADRAO">
            <h3 className="card-heading">Card Padrão</h3>
            <p>Este é um card padrão com background branco e sombra suave.</p>
          </div>

          {/* [@DLS-CARD-ACENTO] Card com Acento */}
          <div className="dls-demo-card card-accent-left" data-component="DLS-CARD-ACENTO">
            <h3 className="card-heading">Card com Acento</h3>
            <p>Card com borda colorida à esquerda usando gradiente rainbow.</p>
          </div>

          {/* [@DLS-CARD-INGRESSO] Ingresso Card */}
          <div className="dls-demo-card ingresso-card" data-component="DLS-CARD-INGRESSO">
            <h3 className="card-heading">Ingresso Card</h3>
            <p>Card específico para informações de ingresso com estilo diferenciado.</p>
          </div>

          {/* [@DLS-CARD-INFO] Info Card */}
          <div className="dls-demo-card info-card" data-component="DLS-CARD-INFO">
            <h3 className="card-heading">Info Card</h3>
            <p>Card para exibir informações importantes com destaque visual.</p>
          </div>
        </div>
      </section>

      {/* [@DLS-HIGHLIGHT-CARDS] Seção: Highlight Cards
          Classes CSS: .dls-highlight-grid, .dls-highlight-card, .dls-highlight-icon, .dls-highlight-title, .dls-highlight-text */}
      <section className="dls-section" data-component="DLS-HIGHLIGHT-CARDS" id="cards_highlight">
        <h2 className="card-heading">Highlight Cards (Destaques)</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
          <code>#cards_highlight</code> : Cards de destaque com gradientes<br/>
          <strong>Classes:</strong> <code>.dls-highlight-grid</code>, <code>.dls-highlight-card</code>, <code>.dls-highlight-icon</code>, <code>.dls-highlight-title</code>, <code>.dls-highlight-text</code>
        </p>
        <p style={{textAlign: 'center', marginBottom: '2rem'}}>Cards de destaque usados em páginas de cursos com gradientes e ícones</p>

        <div className="dls-highlight-grid">
          {/* Blue */}
          <div
            className="dls-highlight-card"
            style={{background: 'linear-gradient(145deg, #e9f1ff, #d8e7ff)'}}
            data-component="DLS-HIGHLIGHT-BLUE"
          >
            <span
              className="dls-highlight-icon"
              style={{background: 'linear-gradient(135deg, #4a6bff, #3e4ddf)'}}
            >
              <i className="fas fa-graduation-cap" aria-hidden="true"></i>
            </span>
            <h3 className="dls-highlight-title">Excelência Acadêmica</h3>
            <p className="dls-highlight-text">Corpo docente altamente qualificado com mestres e doutores.</p>
          </div>

          {/* Green */}
          <div
            className="dls-highlight-card"
            style={{background: 'linear-gradient(145deg, #e3f7f1, #ccefe3)'}}
            data-component="DLS-HIGHLIGHT-GREEN"
          >
            <span
              className="dls-highlight-icon"
              style={{background: 'linear-gradient(135deg, #32c194, #05b18b)'}}
            >
              <i className="fas fa-certificate" aria-hidden="true"></i>
            </span>
            <h3 className="dls-highlight-title">Certificação MEC</h3>
            <p className="dls-highlight-text">Diploma reconhecido nacionalmente pelo MEC.</p>
          </div>

          {/* Purple */}
          <div
            className="dls-highlight-card"
            style={{background: 'linear-gradient(145deg, #efe7ff, #dacdf9)'}}
            data-component="DLS-HIGHLIGHT-PURPLE"
          >
            <span
              className="dls-highlight-icon"
              style={{background: 'linear-gradient(135deg, #8e72ff, #6f48ff)'}}
            >
              <i className="fas fa-laptop" aria-hidden="true"></i>
            </span>
            <h3 className="dls-highlight-title">100% Online</h3>
            <p className="dls-highlight-text">Estude quando e onde quiser, no seu ritmo.</p>
          </div>

          {/* Red */}
          <div
            className="dls-highlight-card"
            style={{background: 'linear-gradient(145deg, #ffe9ed, #ffd6dd)'}}
            data-component="DLS-HIGHLIGHT-RED"
          >
            <span
              className="dls-highlight-icon"
              style={{background: 'linear-gradient(135deg, #ff6b6b, #f44336)'}}
            >
              <i className="fas fa-users" aria-hidden="true"></i>
            </span>
            <h3 className="dls-highlight-title">Networking</h3>
            <p className="dls-highlight-text">Conecte-se com profissionais da sua área.</p>
          </div>

          {/* Amber */}
          <div
            className="dls-highlight-card"
            style={{background: 'linear-gradient(145deg, #fff8e6, #ffefcc)'}}
            data-component="DLS-HIGHLIGHT-AMBER"
          >
            <span
              className="dls-highlight-icon"
              style={{background: 'linear-gradient(135deg, #ffca6b, #ffb300)'}}
            >
              <i className="fas fa-book-open" aria-hidden="true"></i>
            </span>
            <h3 className="dls-highlight-title">Material Didático</h3>
            <p className="dls-highlight-text">Conteúdo atualizado e de qualidade.</p>
          </div>

          {/* Indigo */}
          <div
            className="dls-highlight-card"
            style={{background: 'linear-gradient(145deg, #eaedff, #dfe2ff)'}}
            data-component="DLS-HIGHLIGHT-INDIGO"
          >
            <span
              className="dls-highlight-icon"
              style={{background: 'linear-gradient(135deg, #6a71ff, #3f51b5)'}}
            >
              <i className="fas fa-award" aria-hidden="true"></i>
            </span>
            <h3 className="dls-highlight-title">Suporte Dedicado</h3>
            <p className="dls-highlight-text">Atendimento personalizado durante todo o curso.</p>
          </div>
        </div>
      </section>

      {/* [@DLS-DEPOIMENTOS] Seção: Cards de Depoimentos
          Classes CSS: .dls-testimonials-container, .dls-testimonial-card, .dls-testimonial-content, .dls-quote-icon, .dls-testimonial-text, .dls-testimonial-author, .dls-author-image, .dls-author-info, .dls-author-name, .dls-author-role, .dls-carousel-indicators, .dls-indicator */}
      <section className="dls-section" data-component="DLS-DEPOIMENTOS" id="cards_depoimentos">
        <h2 className="card-heading">Cards de Depoimentos (Carousel)</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
          <code>#cards_depoimentos</code> : Carousel de depoimentos<br/>
          <strong>Classes:</strong> <code>.dls-testimonials-container</code>, <code>.dls-testimonial-card</code>, <code>.dls-testimonial-content</code>, <code>.dls-quote-icon</code>, <code>.dls-carousel-indicators</code>
        </p>
        <p style={{textAlign: 'center', marginBottom: '2rem'}}>Carousel de depoimentos com navegação e indicadores</p>

        <div className="dls-testimonials-container">
          <div className="dls-testimonials-header">
            <h3 className="card-heading">Depoimentos</h3>
          </div>

          <div className="dls-testimonial-card">
            <div className="dls-testimonial-content">
              <div className="dls-quote-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                </svg>
              </div>

              <blockquote className="dls-testimonial-text">
                "A FAFIH transformou minha vida profissional. O curso de Psicologia Junguiana foi excepcional e os professores são referências na área."
              </blockquote>

              <div className="dls-testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop"
                  alt="Maria Silva"
                  className="dls-author-image"
                />
                <div className="dls-author-info">
                  <h4 className="dls-author-name">Maria Silva</h4>
                  <p className="dls-author-role">Ex-aluno FAFIH</p>
                </div>
              </div>
            </div>
          </div>

          <div className="dls-carousel-indicators">
            <button className="dls-indicator active" aria-label="Depoimento 1"></button>
            <button className="dls-indicator" aria-label="Depoimento 2"></button>
            <button className="dls-indicator" aria-label="Depoimento 3"></button>
          </div>
        </div>
      </section>

      {/* [@DLS-ACCORDION] Seção: Accordion/Toggle (Grade Curricular)
          Classes CSS: .dls-curriculum-list, .dls-curriculum-item, .dls-curriculum-header, .dls-curriculum-main, .dls-curriculum-toggle-symbol, .dls-curriculum-toggle-open, .dls-curriculum-texts, .dls-curriculum-summary, .dls-curriculum-content, .dls-curriculum-content-open, .dls-curriculum-hours, .dls-curriculum-section, .dls-curriculum-list-detailed */}
      <section className="dls-section" data-component="DLS-ACCORDION" id="toggle_accordion">
        <h2 className="card-heading">Accordion / Toggle (Grade Curricular)</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
          <code>#toggle_accordion</code> : Sistema de accordion/toggle<br/>
          <strong>Classes:</strong> <code>.dls-curriculum-list</code>, <code>.dls-curriculum-item</code>, <code>.dls-curriculum-header</code>, <code>.dls-curriculum-toggle-symbol</code>, <code>.dls-curriculum-content</code>
        </p>
        <p style={{textAlign: 'center', marginBottom: '2rem'}}>Sistema de expansão/colapso usado na grade curricular</p>

        <div className="dls-curriculum-list">
          <div className="dls-curriculum-item">
            <button
              className="dls-curriculum-header"
              type="button"
              onClick={() => setOpenCurriculum([!openCurriculum[0], openCurriculum[1]])}
              aria-expanded={openCurriculum[0]}
            >
              <div className="dls-curriculum-main">
                <span className={`dls-curriculum-toggle-symbol ${openCurriculum[0] ? 'dls-curriculum-toggle-open' : ''}`}>
                  {openCurriculum[0] ? '−' : '+'}
                </span>
                <div className="dls-curriculum-texts">
                  <h3>Módulo 1 - Introdução à Psicologia Junguiana</h3>
                  <span className="dls-curriculum-summary">Fundamentos teóricos e históricos</span>
                </div>
              </div>
            </button>
            <div className={`dls-curriculum-content ${openCurriculum[0] ? 'dls-curriculum-content-open' : ''}`}>
              <p className="dls-curriculum-hours"><strong>Carga horária:</strong> 40h</p>
              <div className="dls-curriculum-section">
                <h4>Ementa</h4>
                <ul className="dls-curriculum-list-detailed">
                  <li>História da Psicologia Analítica</li>
                  <li>Conceitos fundamentais</li>
                  <li>Estrutura da psique</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dls-curriculum-item">
            <button
              className="dls-curriculum-header"
              type="button"
              onClick={() => setOpenCurriculum([openCurriculum[0], !openCurriculum[1]])}
              aria-expanded={openCurriculum[1]}
            >
              <div className="dls-curriculum-main">
                <span className={`dls-curriculum-toggle-symbol ${openCurriculum[1] ? 'dls-curriculum-toggle-open' : ''}`}>
                  {openCurriculum[1] ? '−' : '+'}
                </span>
                <div className="dls-curriculum-texts">
                  <h3>Módulo 2 - Arquétipos e Inconsciente Coletivo</h3>
                  <span className="dls-curriculum-summary">Estudo dos arquétipos principais</span>
                </div>
              </div>
            </button>
            <div className={`dls-curriculum-content ${openCurriculum[1] ? 'dls-curriculum-content-open' : ''}`}>
              <p className="dls-curriculum-hours"><strong>Carga horária:</strong> 50h</p>
              <div className="dls-curriculum-section">
                <h4>Ementa</h4>
                <ul className="dls-curriculum-list-detailed">
                  <li>O conceito de arquétipo</li>
                  <li>Inconsciente coletivo</li>
                  <li>Principais arquétipos: Anima, Animus, Sombra, Self</li>
                </ul>
              </div>
              <div className="dls-curriculum-section">
                <h4>Objetivos</h4>
                <ul className="dls-curriculum-list-detailed">
                  <li>Compreender a teoria dos arquétipos</li>
                  <li>Identificar manifestações arquetípicas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [@DLS-TABELA-CARGA] Seção: Tabela de Carga Horária
          Classes CSS: .dls-workload-content, .dls-workload-description, .dls-workload-table, .dls-workload-grid, .dls-workload-item, .dls-workload-activity, .dls-workload-hours, .dls-workload-total, .dls-workload-note */}
      <section className="dls-section" data-component="DLS-TABELA-CARGA" id="tabela_carga_horaria">
        <h2 className="card-heading">Tabela de Carga Horária</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
          <code>#tabela_carga_horaria</code> : Tabela de distribuição de horas<br/>
          <strong>Classes:</strong> <code>.dls-workload-content</code>, <code>.dls-workload-grid</code>, <code>.dls-workload-item</code>, <code>.dls-workload-total</code>
        </p>
        <p style={{textAlign: 'center', marginBottom: '2rem'}}>Tabela de distribuição de carga horária dos cursos</p>

        <div className="dls-workload-content">
          <div className="dls-workload-description">
            <p>A carga horária do curso é distribuída entre atividades teóricas, práticas e complementares, totalizando 360 horas.</p>
          </div>

          <div className="dls-workload-table">
            <h3>Distribuição da Carga Horária</h3>
            <div className="dls-workload-grid">
              <div className="dls-workload-item">
                <span className="dls-workload-activity">Aulas Teóricas</span>
                <span className="dls-workload-hours">200h</span>
              </div>
              <div className="dls-workload-item">
                <span className="dls-workload-activity">Atividades Práticas</span>
                <span className="dls-workload-hours">100h</span>
              </div>
              <div className="dls-workload-item">
                <span className="dls-workload-activity">Estudos Dirigidos</span>
                <span className="dls-workload-hours">40h</span>
              </div>
              <div className="dls-workload-item">
                <span className="dls-workload-activity">Atividades Complementares</span>
                <span className="dls-workload-hours">20h</span>
              </div>
              <div className="dls-workload-item dls-workload-total">
                <span className="dls-workload-activity">Carga Horária Total</span>
                <span className="dls-workload-hours">360h</span>
              </div>
            </div>
            <p className="dls-workload-note">* As atividades práticas incluem estudos de caso, supervisão e práticas clínicas.</p>
          </div>
        </div>
      </section>

      {/* [@DLS-BOTOES] Seção: Botões
          Classes CSS: .btn-inscreva-se, .btn-saiba-mais-institucional, .btn-card, .btn-page-action, .btn-primary, .btn-secondary, .btn-detalhes, .btn-matricular, .btn-matricular-modal, .btn-download, .btn-contato, .btn-matricule-agora, .btn-voltar, .btn-submit */}
      <section className="dls-section" data-component="DLS-BOTOES" id="botoes_exemplos">
        <h2 className="card-heading">Botões</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '1rem'}}>
          <code>#botoes_exemplos</code> : Componentes de botões<br/>
          <strong>Classes:</strong> <code>.btn-inscreva-se</code>, <code>.btn-primary</code>, <code>.btn-secondary</code>, <code>.btn-matricular</code>, <code>.btn-submit</code>
        </p>

        <div className="dls-buttons-grid">
          <button className="btn-inscreva-se" data-btn="btn-inscreva-se">Inscreva-se (Header)</button>
          <button className="btn-saiba-mais-institucional" data-btn="btn-saiba-mais-institucional">Saiba Mais Institucional</button>
          <button className="btn-card" data-btn="btn-card">Botão de Card</button>
          <button className="btn-page-action btn-primary" data-btn="btn-primary">Ação Primária</button>
          <button className="btn-page-action btn-secondary" data-btn="btn-secondary">Ação Secundária</button>
          <button className="btn-detalhes" data-btn="btn-detalhes">Detalhes</button>
          <button className="btn-matricular" data-btn="btn-matricular">Matricular</button>
          <button className="btn-matricular" data-btn="btn-matricular-disabled" disabled>Matricular (Desabilitado)</button>
          <button className="btn-matricular-modal" data-btn="btn-matricular-modal">Matricular Modal</button>
          <button className="btn-download" data-btn="btn-download">Download</button>
          <button className="btn-contato" data-btn="btn-contato">Contato</button>
          <button className="btn-matricule-agora" data-btn="btn-matricule-agora">Matricule Agora</button>
          <button className="btn-voltar" data-btn="btn-voltar">Voltar</button>
          <button className="btn-submit" data-btn="btn-submit">Submit (Form)</button>
        </div>
      </section>

      {/* [@DLS-FORMULARIOS] Seção: Formulários
          Classes CSS: .dls-demo-form, .dls-form-group, .dls-form-actions */}
      <section className="dls-section" data-component="DLS-FORMULARIOS" id="formularios_exemplos">
        <h2 className="card-heading">Formulários</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '1rem'}}>
          <code>#formularios_exemplos</code> : Componentes de formulários<br/>
          <strong>Classes:</strong> <code>.dls-demo-form</code>, <code>.dls-form-group</code>, <code>.dls-form-actions</code>
        </p>

        <form className="dls-demo-form">
          <div className="dls-form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" id="nome" placeholder="Digite seu nome completo" />
          </div>

          <div className="dls-form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="seu@email.com" />
          </div>

          <div className="dls-form-group">
            <label htmlFor="telefone">Telefone</label>
            <input type="tel" id="telefone" placeholder="(00) 00000-0000" />
          </div>

          <div className="dls-form-group">
            <label htmlFor="curso">Curso de Interesse</label>
            <select id="curso">
              <option value="">Selecione um curso</option>
              <option value="1">Administração</option>
              <option value="2">Pedagogia</option>
              <option value="3">Direito</option>
            </select>
          </div>

          <div className="dls-form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" rows="5" placeholder="Digite sua mensagem aqui..."></textarea>
          </div>

          <div className="dls-form-actions">
            <button type="submit" className="btn-submit">Enviar</button>
            <button type="reset" className="btn-voltar">Limpar</button>
          </div>
        </form>
      </section>

      {/* [@DLS-CORES] Seção: Tipografia e Cores
          Classes CSS: .dls-color-palette, .dls-color-box, .dls-typography-demo
          Variáveis CSS: --primary-color, --secondary-color, --background-color, --card-bg, --footer-blue, --card-green-dark */}
      <section className="dls-section" data-component="DLS-CORES" id="cores_tipografia">
        <h2 className="card-heading">Tipografia & Cores</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '1rem'}}>
          <code>#cores_tipografia</code> : Paleta de cores e tipografia<br/>
          <strong>Classes:</strong> <code>.dls-color-palette</code>, <code>.dls-color-box</code>, <code>.dls-typography-demo</code>
        </p>

        <div className="dls-color-palette">
          <div className="dls-color-box" style={{backgroundColor: 'var(--primary-color)'}}>
            <span>Primary</span>
            <code>#0A2342</code>
          </div>
          <div className="dls-color-box" style={{backgroundColor: 'var(--secondary-color)'}}>
            <span>Secondary</span>
            <code>#2C678F</code>
          </div>
          <div className="dls-color-box" style={{backgroundColor: 'var(--footer-blue)'}}>
            <span>Footer Blue</span>
            <code>#1d4397</code>
          </div>
          <div className="dls-color-box" style={{backgroundColor: 'var(--card-green-dark)', color: 'white'}}>
            <span>Green Dark</span>
            <code>#006400</code>
          </div>
          <div className="dls-color-box" style={{backgroundColor: 'var(--background-color)'}}>
            <span>Background</span>
            <code>#F4F4F9</code>
          </div>
          <div className="dls-color-box" style={{backgroundColor: 'var(--card-bg)', border: '1px solid #ccc'}}>
            <span>Card BG</span>
            <code>#FFFFFF</code>
          </div>
        </div>

        <div className="dls-typography-demo">
          <p style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.5rem'}}>
            Montserrat Bold - Títulos e Headings
          </p>
          <p style={{fontFamily: 'Lato, sans-serif', fontSize: '1rem'}}>
            Lato Regular - Texto de corpo e parágrafos
          </p>
        </div>
      </section>

      {/* [@DLS-GRADIENTE] Seção: Gradiente Rainbow
          Classes CSS: .dls-gradient-demo
          Variável CSS: --gradient */}
      <section className="dls-section" data-component="DLS-GRADIENTE" id="gradiente_rainbow">
        <h2 className="card-heading">Gradiente Rainbow</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '1rem'}}>
          <code>#gradiente_rainbow</code> : Gradiente arco-íris<br/>
          <strong>Variável CSS:</strong> <code>--gradient</code>
        </p>

        <div className="dls-gradient-demo"></div>
        <p style={{textAlign: 'center', marginTop: '1rem'}}>
          <code>linear-gradient(90deg, #6A0DAD, #0000FF, #008000, #FFFF00, #FFA500, #FF0000)</code>
        </p>
      </section>

      {/* [@DLS-SOCIAL] Seção: Ícones Sociais
          Classes CSS: .dls-social-colors, .dls-social-box
          Variáveis CSS: --linkedin-color, --instagram-color, --youtube-color, --tiktok-color */}
      <section className="dls-section" data-component="DLS-SOCIAL" id="icones_sociais">
        <h2 className="card-heading">Cores de Ícones Sociais</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '1rem'}}>
          <code>#icones_sociais</code> : Cores de redes sociais<br/>
          <strong>Variáveis CSS:</strong> <code>--linkedin-color</code>, <code>--instagram-color</code>, <code>--youtube-color</code>, <code>--tiktok-color</code>
        </p>

        <div className="dls-social-colors">
          <div className="dls-social-box" style={{backgroundColor: 'var(--linkedin-color)'}}>
            <span>LinkedIn</span>
            <code>#0077B5</code>
          </div>
          <div className="dls-social-box" style={{backgroundColor: 'var(--instagram-color)'}}>
            <span>Instagram</span>
            <code>#E1306C</code>
          </div>
          <div className="dls-social-box" style={{backgroundColor: 'var(--youtube-color)'}}>
            <span>YouTube</span>
            <code>#FF0000</code>
          </div>
          <div className="dls-social-box" style={{backgroundColor: 'var(--tiktok-color)'}}>
            <span>TikTok</span>
            <code>#000000</code>
          </div>
        </div>
      </section>

      {/* [@DLS-SOMBRAS] Seção: Sombras e Efeitos
          Classes CSS: .dls-shadow-demo, .dls-shadow-box
          Variável CSS: --shadow */}
      <section className="dls-section" data-component="DLS-SOMBRAS" id="sombras_efeitos">
        <h2 className="card-heading">Sombras e Efeitos</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '1rem'}}>
          <code>#sombras_efeitos</code> : Sombras padrão<br/>
          <strong>Variável CSS:</strong> <code>--shadow</code>
        </p>

        <div className="dls-shadow-demo">
          <div className="dls-shadow-box">
            <p>Shadow Padrão</p>
            <code>0 4px 12px rgba(0, 0, 0, 0.08)</code>
          </div>
        </div>
      </section>

      {/* [@DLS-CARD-DETALHADO] Seção: Card Detalhado (Polo)
          Classes CSS: .dls-polo-card, .info-card, .dls-polo-info, .dls-polo-cursos, .dls-map-button */}
      <section className="dls-section" data-component="DLS-CARD-DETALHADO" id="card_detalhado">
        <h2 className="card-heading">Card Detalhado (Polo)</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
          <code>#card_detalhado</code> : Card com informações completas<br/>
          <strong>Classes:</strong> <code>.dls-polo-card</code>, <code>.info-card</code>, <code>.dls-polo-info</code>, <code>.dls-polo-cursos</code>, <code>.dls-map-button</code>
        </p>
        <p style={{textAlign: 'center', marginBottom: '2rem'}}>Card com múltiplas informações, lista e botão de ação</p>

        <div className="dls-polo-card info-card">
          <div>
            <h3>Polo Belo Horizonte - MG</h3>
            <div className="dls-polo-info">
              <p>
                <strong>Endereço:</strong> Rua dos Guajajaras, 910 - Centro, Belo Horizonte - MG, CEP 30180-100
              </p>
              <p>
                <strong>Telefone:</strong> (31) 3287-5400
              </p>
              <p>
                <strong>E-mail:</strong> polo.bh@fafih.edu.br
              </p>
              <p>
                <strong>Coordenador:</strong> Prof. Dr. Carlos Eduardo Silva
              </p>
            </div>
            <div className="dls-polo-cursos">
              <h4>Cursos Oferecidos:</h4>
              <ul>
                <li>Graduação em Administração</li>
                <li>Pós-Graduação em Psicologia Junguiana</li>
                <li>Pós-Graduação em Gestão de Pessoas</li>
                <li>Curso de Extensão em Marketing Digital</li>
              </ul>
            </div>
          </div>
          <a
            href="#"
            className="dls-map-button"
            onClick={(e) => e.preventDefault()}
          >
            Ver no mapa
          </a>
        </div>
      </section>

      {/* [@DLS-CARDS-PESSOAS] Seção: Cards de Pessoas (Professores)
          Classes CSS: .dls-professores-grid, .dls-professor-card, .dls-professor-header, .dls-professor-foto, .dls-professor-nome-area, .dls-professor-area, .dls-professor-info, .dls-professor-content, .dls-professor-formacao, .dls-professor-bio, .dls-professor-contato-info, .dls-contato-item, .dls-contato-label, .dls-contato-link */}
      <section className="dls-section" data-component="DLS-CARDS-PESSOAS" id="cards_pessoas">
        <h2 className="card-heading">Cards de Pessoas (Professores)</h2>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
          <code>#cards_pessoas</code> : Cards de professores/pessoas<br/>
          <strong>Classes:</strong> <code>.dls-professores-grid</code>, <code>.dls-professor-card</code>, <code>.dls-professor-header</code>, <code>.dls-professor-foto</code>, <code>.dls-professor-contato-info</code>
        </p>
        <p style={{textAlign: 'center', marginBottom: '2rem'}}>Cards com foto, informações acadêmicas e contato</p>

        <div className="dls-professores-grid">
          <div className="dls-professor-card">
            <div className="dls-professor-header">
              <div className="dls-professor-foto">
                <img
                  src="https://ui-avatars.com/api/?name=Ana+Santos&size=80&background=2C678F&color=ffffff&bold=true"
                  alt="Dra. Ana Santos"
                />
              </div>
              <div className="dls-professor-nome-area">
                <h3>Dra. Ana Paula Santos</h3>
                <p className="dls-professor-area">Psicologia Analítica</p>
              </div>
            </div>

            <div className="dls-professor-info">
              <div className="dls-professor-content">
                <p className="dls-professor-formacao">
                  Doutora em Psicologia pela USP, especialista em Psicologia Junguiana
                </p>
                <p className="dls-professor-bio">
                  Psicóloga clínica com mais de 15 anos de experiência em atendimento e supervisão.
                  Pesquisadora na área de sonhos e símbolos na abordagem junguiana.
                </p>
              </div>

              <div className="dls-professor-contato-info">
                <div className="dls-contato-item">
                  <span className="dls-contato-label" aria-hidden="true">📞</span>
                  <a href="tel:+5531987654321" className="dls-contato-link">(31) 98765-4321</a>
                </div>
                <div className="dls-contato-item">
                  <span className="dls-contato-label" aria-hidden="true">✉️</span>
                  <a href="mailto:ana.santos@fafih.edu.br" className="dls-contato-link">ana.santos@fafih.edu.br</a>
                </div>
              </div>
            </div>
          </div>

          <div className="dls-professor-card">
            <div className="dls-professor-header">
              <div className="dls-professor-foto">
                <img
                  src="https://ui-avatars.com/api/?name=Carlos+Lima&size=80&background=2C678F&color=ffffff&bold=true"
                  alt="Prof. Carlos Lima"
                />
              </div>
              <div className="dls-professor-nome-area">
                <h3>Prof. Me. Carlos Lima</h3>
                <p className="dls-professor-area">Filosofia e Fenomenologia</p>
              </div>
            </div>

            <div className="dls-professor-info">
              <div className="dls-professor-content">
                <p className="dls-professor-formacao">
                  Mestre em Filosofia pela UFMG, graduado em Teologia
                </p>
                <p className="dls-professor-bio">
                  Professor universitário há 10 anos, com foco em fenomenologia existencial e filosofia contemporânea.
                  Autor de diversos artigos sobre hermenêutica.
                </p>
              </div>

              <div className="dls-professor-contato-info">
                <div className="dls-contato-item">
                  <span className="dls-contato-label" aria-hidden="true">📞</span>
                  <a href="tel:+5531987123456" className="dls-contato-link">(31) 98712-3456</a>
                </div>
                <div className="dls-contato-item">
                  <span className="dls-contato-label" aria-hidden="true">✉️</span>
                  <a href="mailto:carlos.lima@fafih.edu.br" className="dls-contato-link">carlos.lima@fafih.edu.br</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValidaDLSContent;
