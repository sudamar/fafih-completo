import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import EscolhaCursosContent from '../components/escolha-cursos/EscolhaCursosContent';

const EscolhaCursosPage = () => {
  return (
    <div className="escolha-cursos-page bg-gray-50">
      <main>
        <EscolhaCursosContent />
      </main>
    </div>
  );
};

export default EscolhaCursosPage;