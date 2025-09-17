import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import CookieConsent from '../components/shared/CookieConsent';
import CorpoDocenteContent from '../components/corpo-docente/CorpoDocenteContent';

const CorpoDocentePage = () => {
  return (
    <>
      <Header />
      <main>
        <CorpoDocenteContent />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default CorpoDocentePage;