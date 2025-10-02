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
                <li><Link to="/calendario-academico">Calendário Acadêmico</Link></li>
                <li><Link to="/formas-de-ingresso">Formas de Ingresso</Link></li>
                <li><a href="https://ijep.com.br/biblioteca-ijep" target="_blank" rel="noopener noreferrer">Biblioteca</a></li>
                <li><a href="https://ijep.com.br/login-aluno" target="_blank" rel="noopener noreferrer">Egressos</a></li>
                <li><Link to="/servico-para-comunidade">Serviço para Comunidade</Link></li>
                <li><a href="/#noticias">Notícias</a></li>
                <li><a href="https://ijep.com.br/" target="_blank" rel="noopener noreferrer">Mantenedora</a></li>
              </ul>
            </li>
            <li className={openDropdown === 'cursos' ? 'open' : ''}>
              <a href="/#cursos" onClick={() => toggleDropdown('cursos')}>Cursos</a>
              <ul className="dropdown-menu">
                <li><Link to="/escolha-cursos">Todos</Link></li>
                <li><a href="/escolha-cursos?filter=graduacao">Graduação</a></li>
                <li><Link to="/escolha-cursos?filter=especializacao">Pós-Graduação</Link></li>
                <li><Link to="/escolha-cursos?filter=cursos">Curta e Média Duração</Link></li>
                <li><Link to="/escolha-cursos?filter=eventos">Eventos</Link></li>
                <li><Link to="/cursos/pos-graduacao-psicologia-junguiana">Modelo de Curso</Link></li>
                <li><Link to="/formas-de-ingresso">Formas de Ingresso</Link></li>
                <li><Link to="/regulamentos">Regulamentos</Link></li>
                <li><Link to="/polos">Polos</Link></li>
                <li><Link to="/valida-dls">Design System</Link></li>
              </ul>
            </li>
            <li><Link to="/iniciacao-cientifica">Iniciação Científica</Link></li>
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
