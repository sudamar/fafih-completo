import ExtensaoTabs from '@/components/extensao/ExtensaoTabs';
import { Link } from 'react-router-dom';

const ExtensaoPage = () => {
  return (
    <div className="bg-gray-50">
      <main>
        <section className="page-section">
          <div className="container">
            <div className="section-header">
              <h1 className="page-title">Extensão Universitária</h1>
            </div>

            <div className="conheca-intro">
              <p>A Curricularização da Extensão é um processo orgânico e dinâmico. Ocorre quando a Faculdade oferece importantes serviços à população, realizando a integração entre teoria e prática.</p>
            </div>

            <ExtensaoTabs />

            <div className="page-actions">
              <Link to="/" className="btn-page-action btn-secondary">Voltar</Link>
            </div>
          </div>
        </section>

        <style jsx>{`
          .conheca-intro::before {
            display: none !important;
          }
        `}</style>
      </main>
    </div>
  );
};

export default ExtensaoPage;
