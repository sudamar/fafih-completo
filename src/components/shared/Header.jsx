import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    if (window.innerWidth <= 992) {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <div className="header-group-left">
        <Link to="/" className="logo-container">
          <img className="logo-img" src="https://i.imgur.com/2wUar6U.png" alt="Logo FAFIH" />
        </Link>
        <span className="logo-text-full">
          Faculdade de Artes,<br />Filosofia e do<br />Imaginário Humano
        </span>
      </div>
      <button
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`header-group-right ${isMenuOpen ? 'nav-active' : ''}`}>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li className={openDropdown === 'institucional' ? 'open' : ''}>
              <a href="#conheca-fafih" onClick={() => toggleDropdown('institucional')}>Institucional</a>
              <ul className="dropdown-menu">
                <li><Link to="/conheca-fafih">Conheça a FAFIH</Link></li>
                <li><a href="/#focos">Focos Acadêmicos</a></li>
                <li><Link to="/corpo-docente">Corpo Docente</Link></li>
                <li><a href="calendario-academico.html">Calendário Acadêmico</a></li>
                <li><a href="https://ijep.com.br/biblioteca-ijep" target="_blank" rel="noopener noreferrer">Biblioteca</a></li>
                <li><a href="https://ijep.com.br/login-aluno" target="_blank" rel="noopener noreferrer">Egressos</a></li>
                <li><a href="servicos-comunidade.html">Serviços para a Comunidade</a></li>
                <li><a href="/#noticias">Notícias</a></li>
                <li><a href="https://ijep.com.br/" target="_blank" rel="noopener noreferrer">Mantenedora</a></li>
              </ul>
            </li>
            <li className={openDropdown === 'cursos' ? 'open' : ''}>
              <a href="/#cursos" onClick={() => toggleDropdown('cursos')}>Cursos</a>
              <ul className="dropdown-menu">
                <li><Link to="/escolha-cursos">Todos</Link></li>
                <li><a href="/?filter=graduacao#cursos">Graduação</a></li>
                <li><a href="/?filter=especializacao#cursos">Pós-Graduação</a></li>
                <li><a href="/?filter=extensao#cursos">Curta e Média Duração</a></li>
                <li><a href="/?filter=eventos#cursos">Eventos</a></li>
                <li><a href="formas-de-ingresso.html">Formas de Ingresso</a></li>
                <li><a href="regulamentos.html">Regulamentos</a></li>
                <li><a href="polos.html">Polos</a></li>
              </ul>
            </li>
            <li><a href="iniciacao-cientifica.html">Iniciação Científica</a></li>
            <li><Link to="/extensao">Extensão</Link></li>
            <li><a href="https://ijep.com.br/login-aluno" target="_blank" rel="noopener noreferrer">Portal do Aluno</a></li>
            <li className={openDropdown === 'contato' ? 'open' : ''}>
              <a href="#contato" onClick={() => toggleDropdown('contato')}>Contato</a>
              <ul className="dropdown-menu">
                <li><Link to="/ouvidoria">Ouvidoria</Link></li>
                <li><Link to="/perguntas-frequentes">Perguntas Frequentes</Link></li>
                <li><Link to="/consultar-diploma">Consultar Diploma</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <a href="https://ijep.com.br/inscricao/aluno" target="_blank" rel="noopener noreferrer" className="btn-inscreva-se">Inscreva-se</a>
      </div>
    </header>
  );
};

export default Header;