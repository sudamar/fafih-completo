import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import CookieConsent from '@/components/shared/CookieConsent';
import ScrollToAnchor from '@/components/shared/ScrollToAnchor';
import IndexPage from '@/pages/IndexPage';
import ExtensaoPage from '@/pages/extensao/ExtensaoPage';
import PerguntasFrequentesPage from '@/pages/contato/PerguntasFrequentesPage';
import ApoioPsicopedagogicoPage from '@/pages/ApoioPsicopedagogicoPage';
import ConhecaFafihPage from '@/pages/institucional/ConhecaFafihPage';
import ServicoParaComunidadePage from '@/pages/institucional/ServicoParaComunidadePage';
import ConsultarDiplomaPage from '@/pages/contato/ConsultarDiplomaPage';
import CorpoDocentePage from '@/pages/institucional/CorpoDocentePage';
import ProfessorPage from '@/pages/ProfessorPage';
import CpaPage from '@/pages/cpa/CpaPage';
import FormasIngressoPage from '@/pages/FormasIngressoPage';
import IniciacaoCientificaPage from '@/pages/iniciacao/IniciacaoCientificaPage';
import NoticiasCartaAbertaPage from '@/pages/NoticiasCartaAbertaPage';
import NoticiasCursosPage from '@/pages/NoticiasCursosPage';
import OuvidoriaPage from '@/pages/contato/OuvidoriaPage'
import NucleoApoioDocentePage from '@/pages/NucleoApoioDocentePage';
import PolosPage from '@/pages/PolosPage';
import RegulamentosPage from '@/pages/RegulamentosPage';
import EscolhaCursosPage from '@/pages/lista-cursos/EscolhaCursosPage';
import CourseDetailsPage from '@/pages/curso-detalhes/CourseDetailsPage';
import CalendarioAcademicoPage from '@/pages/calendario/CalendarioAcademicoPage';
import NotFoundPage from '@/pages/notfound/NotFoundPage';

function App() {
  useEffect(() => {
    // Add Google Fonts
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    const link3 = document.createElement('link');
    link3.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@700;800&display=swap';
    link3.rel = 'stylesheet';
    document.head.appendChild(link3);

    // Update page title and meta
    document.title = 'FAFIH - Faculdade de Artes, Filosofia e do Imaginário Humano';

    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }

    // Cleanup function
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
    };
  }, []);

  return (
    <Router>
      <ScrollToAnchor />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/extensao" element={<ExtensaoPage />} />
          <Route path="/perguntas-frequentes" element={<PerguntasFrequentesPage />} />
          <Route path="/apoio-psicopedagogico" element={<ApoioPsicopedagogicoPage />} />
          <Route path="/conheca-fafih" element={<ConhecaFafihPage />} />
          <Route path="/servico-para-comunidade" element={<ServicoParaComunidadePage />} />
          <Route path="/consultar-diploma" element={<ConsultarDiplomaPage />} />
          <Route path="/corpo-docente" element={<CorpoDocentePage />} />
          <Route path="/professor/:slug" element={<ProfessorPage />} />
          <Route path="/cpa" element={<CpaPage />} />
          <Route path="/formas-de-ingresso" element={<FormasIngressoPage />} />
          <Route path="/iniciacao-cientifica" element={<IniciacaoCientificaPage />} />
          {/* <Route path="/membros-analistas" element={<MembrosAnalistasPage />} /> */}
          <Route path="/noticia-carta-aberta" element={<NoticiasCartaAbertaPage />} />
          <Route path="/noticia-cursos" element={<NoticiasCursosPage />} />
          <Route path="/ouvidoria" element={<OuvidoriaPage />} />
          <Route path="/nucleo-apoio-docente" element={<NucleoApoioDocentePage />} />
          <Route path="/polos" element={<PolosPage />} />
          <Route path="/regulamentos" element={<RegulamentosPage />} />
          <Route path="/escolha-cursos" element={<EscolhaCursosPage />} />
          <Route path="/cursos/:slug" element={<CourseDetailsPage />} />
          <Route path="/calendario-academico" element={<CalendarioAcademicoPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
