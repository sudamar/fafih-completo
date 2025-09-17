import ExtensaoTabs from '../components/extensao/ExtensaoTabs';
import { Link } from 'react-router-dom';

const ExtensaoPage = () => {
  return (
       <section className="page-section">
      <div className="container">
        <h1>Extensão Universitária</h1>

        <div className="conheca-intro">
          <p>A Curricularização da Extensão é um processo orgânico e dinâmico. Ocorre quando a Faculdade oferece importantes serviços à população, realizando a integração entre teoria e prática.</p>
        </div>

        <ExtensaoTabs />

        <div className="page-actions">
          <Link to="/" className="btn-page-action btn-secondary">Voltar</Link>
        </div>
      </div>
    </section>
  );
};

export default ExtensaoPage;