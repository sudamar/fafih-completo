import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      <section id="noticias">
        <div className="container">
          <h2>Notícias</h2>
          <div className="noticias-container">
            <a href="noticia-cursos.html" className="noticia-item">Cursos de Psicologia Junguiana; Arteterapia e Psicossomática</a>
            <a href="noticia-carta-aberta.html" className="noticia-item">Carta aberta do coordenador dos cursos da FAFIH aos alunos e interessados</a>
            <a href="noticia-duvidas-frequentes.html" className="noticia-item">Dúvidas Frequentes - Perguntas e Respostas - Informações a respeito dos Cursos</a>
          </div>
        </div>
      </section>

      <footer id="contato">
        <div className="footer-top-container">
          <div className="footer-group-left">
            <div className="footer-col col-logo">
              <img src="https://i.imgur.com/ywaVFnj.png" alt="Logo FAFIH no rodapé" className="footer-logo-img" />
            </div>
            <div className="footer-col">
              <h4>Institucional</h4>
              <ul>
                <li><Link to="/conheca-fafih">Conheça a FAFIH</Link></li>
                <li><a href="https://ijep.com.br/" target="_blank" rel="noopener noreferrer">Conheça o IJEP</a></li>
                <li><a href="/#focos">Focos Acadêmicos</a></li>
                <li><a href="iniciacao-cientifica.html">Iniciação Científica</a></li>
                <li><Link to="/extensao">Extensão</Link></li>
                <li><a href="/#noticias">Notícias</a></li>
                <li><Link to="/cpa">Comissão Própria de Avaliação</Link></li>
                <li><a href="calendario-academico.html">Calendário Acadêmico</a></li>
                <li><a href="https://ijep.com.br/biblioteca-ijep" target="_blank" rel="noopener noreferrer">Biblioteca</a></li>
                <li><Link to="/consultar-diploma">Consultar Diploma</Link></li>
                <li><a href="politica-privacidade.html">Política de Privacidade</a></li>
                <li><a href="#" title="Página em construção">Política de Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-col">
            <h4>Cursos</h4>
            <ul>
              <li><a href="/?filter=graduacao#cursos">Graduação</a></li>
              <li><a href="/?filter=especializacao#cursos">Pós-graduação</a></li>
              <li><a href="/?filter=extensao#cursos">Curta e Média Duração</a></li>
              <li><a href="/?filter=eventos#cursos">Eventos</a></li>
              <li><a href="formas-de-ingresso.html">Formas de Ingresso</a></li>
              <li><a href="regulamentos.html">Regulamentos</a></li>
              <li><a href="polos.html">Polos</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Comunidade Acadêmica</h4>
            <ul>
              <li><a href="https://ijep.com.br/login-aluno" target="_blank" rel="noopener noreferrer">Portal do Aluno</a></li>
              <li><Link to="/apoio-psicopedagogico">Núcleo de Apoio Psicopedagógico</Link></li>
              <li><a href="https://ijep.com.br/login-aluno" target="_blank" rel="noopener noreferrer">Egresso</a></li>
              <li><Link to="/corpo-docente">Corpo Docente</Link></li>
              <li><a href="membros-analistas.html">Membros Analistas</a></li>
              <li><a href="nucleo-apoio-docente.html">Núcleo de Apoio e Desenvolvimento Docente</a></li>
              <li><a href="portal-do-docente.html">Portal do Docente</a></li>
              <li><a href="servicos-comunidade.html">Serviços para a Comunidade</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              <li className="contact-item">
                <a href="mailto:contato@fafih.edu.br">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                  </svg>
                  <span>contato@fafih.edu.br</span>
                </a>
              </li>
              <li className="contact-item">
                <a href="tel:+551134567890">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z"></path>
                  </svg>
                  <span>(11) 3456-7890</span>
                </a>
              </li>
              <li><a href="#" onClick={openModal}>Ouvidoria</a></li>
              <li><Link to="/perguntas-frequentes">Perguntas Frequentes</Link></li>
            </ul>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" aria-label="YouTube">
                <svg viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" aria-label="TikTok">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col col-emec">
            <a href="#" target="_blank">
              <img src="https://i.imgur.com/i7LTAu5.png" alt="Consulte aqui o cadastro da instituição no e-MEC" className="footer-emec-img" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Credenciada EaD pela Portaria Ministerial nº 579, de 25/06/2024, DOU nº 122, de 27/06/2024, seção 1, p. 63.</p>
          <p>Mantida pelo IJEP - Instituto Junguiano de Ensino e Pesquisa</p>
          <p>Página atualizada em 12 de setembro de 2025.</p>
          <p>© 2025 FAFIH - Faculdade de Artes, Filosofia e do Imaginário Humano. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Modal da Ouvidoria */}
      {showModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>Canal da Ouvidoria</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="ouvidoria-nome">Nome Completo</label>
                <input type="text" id="ouvidoria-nome" name="nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="ouvidoria-email">E-mail para Contato</label>
                <input type="email" id="ouvidoria-email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="ouvidoria-telefone">Telefone/WhatsApp</label>
                <input type="tel" id="ouvidoria-telefone" name="telefone" />
              </div>
              <div className="form-group">
                <label htmlFor="ouvidoria-assunto">Assunto</label>
                <select id="ouvidoria-assunto" name="assunto" required>
                  <option value="" disabled selected>Selecione o motivo do contato...</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="elogio">Elogio</option>
                  <option value="reclamacao">Reclamação</option>
                  <option value="denuncia">Denúncia</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="ouvidoria-mensagem">Mensagem</label>
                <textarea id="ouvidoria-mensagem" name="mensagem" required></textarea>
              </div>
              <p className="form-note">A resposta da sua manifestação será enviada para o e-mail informado.</p>
              <button type="submit" className="btn-submit">Enviar Manifestação</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;