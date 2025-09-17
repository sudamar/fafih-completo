import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import CookieConsent from '../components/shared/CookieConsent';
import ApoioContent from '../components/apoio-psicopedagogico/ApoioContent';

const ApoioPsicopedagogicoPage = () => {
  return (
    <>
      <Header />
      <main>
        <ApoioContent />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default ApoioPsicopedagogicoPage;