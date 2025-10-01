import { Routes, Route } from 'react-router-dom';

import IndexPage from '../pages/IndexPage.jsx';
import ExtensaoPage from '../pages/extensao/ExtensaoPage.jsx';
import PerguntasFrequentesPage from '../pages/PerguntasFrequentesPage.jsx';
import ApoioPsicopedagogicoPage from '../pages/ApoioPsicopedagogicoPage.jsx';
import ConhecaFafihPage from '../pages/institucional/ConhecaFafihPage.jsx';
import ConsultarDiplomaPage from '../pages/ConsultarDiplomaPage.jsx';
import CorpoDocentePage from '../pages/corpo-docente/CorpoDocentePage.jsx';
import CpaPage from '../pages/cpa/CpaPage.jsx';
import CursoAionJoPage from '../pages/CursoAionJoPage.jsx';
import FormasIngressoPage from '../pages/FormasIngressoPage.jsx';
import IniciacaoCientificaPage from '../pages/iniciacao/IniciacaoCientificaPage.jsx';
import MembrosAnalistasPage from '../pages/MembrosAnalistasPage.jsx';
import NoticiasCartaAbertaPage from '../pages/NoticiasCartaAbertaPage.jsx';
import NoticiasCursosPage from '../pages/NoticiasCursosPage.jsx';
import OuvidoriaPage from '../pages/OuvidoriaPage.jsx';
import NucleoApoioDocentePage from '../pages/NucleoApoioDocentePage.jsx';
import PolosPage from '../pages/PolosPage.jsx';
import RegulamentosPage from '../pages/RegulamentosPage.jsx';
import EscolhaCursosPage from '../pages/lista-cursos/EscolhaCursosPage.jsx';
import NotFoundPage from '../pages/notfound/NotFoundPage.jsx';

import CoursesListPage from '../pages/lista-cursos/CoursesListPage.jsx';
import CourseDetailsPage from '../pages/curso-detalhes/CourseDetailsPage.jsx';
import ProfessorPage from '../pages/professor/ProfessorPage.jsx';

export const ROUTES = [
  { path: '/', element: <IndexPage /> },
  { path: '/extensao', element: <ExtensaoPage /> },
  { path: '/perguntas-frequentes', element: <PerguntasFrequentesPage /> },
  { path: '/apoio-psicopedagogico', element: <ApoioPsicopedagogicoPage /> },
  { path: '/conheca-fafih', element: <ConhecaFafihPage /> },
  { path: '/consultar-diploma', element: <ConsultarDiplomaPage /> },
  { path: '/corpo-docente', element: <CorpoDocentePage /> },
  { path: '/professores/:slug', element: <ProfessorPage /> },
  { path: '/cpa', element: <CpaPage /> },
  { path: '/curso-aion-jo', element: <CursoAionJoPage /> },
  { path: '/formas-de-ingresso', element: <FormasIngressoPage /> },
  { path: '/iniciacao-cientifica', element: <IniciacaoCientificaPage /> },
  { path: '/membros-analistas', element: <MembrosAnalistasPage /> },
  { path: '/noticia-carta-aberta', element: <NoticiasCartaAbertaPage /> },
  { path: '/noticia-cursos', element: <NoticiasCursosPage /> },
  { path: '/ouvidoria', element: <OuvidoriaPage /> },
  { path: '/nucleo-apoio-docente', element: <NucleoApoioDocentePage /> },
  { path: '/polos', element: <PolosPage /> },
  { path: '/regulamentos', element: <RegulamentosPage /> },
  { path: '/escolha-cursos', element: <EscolhaCursosPage /> },
  { path: '/cursos', element: <CoursesListPage /> },
  { path: '/cursos/:slug', element: <CourseDetailsPage /> },
  { path: '/404', element: <NotFoundPage /> }
];

const AppRoutes = () => {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
