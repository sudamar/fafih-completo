import ExtensaoTabs from '../components/extensao/ExtensaoTabs';
import { Link } from 'react-router-dom';

const ExtensaoPage = () => {
  return (
    <main>
      <section className="page-section">
        <div className="container">
          <h1>Extensão Universitária</h1>
          <p className="page-intro">A Curricularização da Extensão é um processo orgânico e dinâmico. Ocorre quando a Faculdade oferece importantes serviços à população, realizando a integração entre teoria e prática.</p>

          <ExtensaoTabs />

          <div className="page-actions">
            <Link to="/" className="btn-page-action btn-secondary">Voltar</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExtensaoPage;