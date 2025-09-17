import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import CookieConsent from '../components/shared/CookieConsent';
import CursoAionJoContent from '../components/curso-aion-jo/CursoAionJoContent';

const CursoAionJoPage = () => {
  return (
    <>
      <Header />
      <main>
        <CursoAionJoContent />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default CursoAionJoPage;