import { useParams } from 'react-router-dom';
import CursoDetalhado from '../components/curso-detalhes/curso-detalhado';

const CursoDetalhadoPage = () => {
  const { id } = useParams();

  return <CursoDetalhado courseId={id} />;
};

export default CursoDetalhadoPage;
