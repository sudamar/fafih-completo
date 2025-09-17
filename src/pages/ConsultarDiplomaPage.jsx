import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import CookieConsent from '../components/shared/CookieConsent';
import ConsultarDiplomaContent from '../components/consultar-diploma/ConsultarDiplomaContent';

const ConsultarDiplomaPage = () => {
  return (
    <>
      <Header />
      <main>
        <ConsultarDiplomaContent />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default ConsultarDiplomaPage;