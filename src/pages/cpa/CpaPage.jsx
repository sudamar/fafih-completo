import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import CookieConsent from '@/components/shared/CookieConsent';
import CpaContent from '@/components/cpa/CpaContent';

const CpaPage = () => {
  return (
    <>
      <main>
        <CpaContent />
      </main>
      <CookieConsent />
    </>
  );
};

export default CpaPage;