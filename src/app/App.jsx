import { useEffect } from 'react';
import AppProviders from './providers.jsx';
import AppRoutes from './routes.jsx';

import Header from '../components/shared/Header.jsx';
import Footer from '../components/shared/Footer.jsx';
import CookieConsent from '../components/shared/CookieConsent.jsx';

import styles from './app.module.css';

const AppShell = () => {
  useEffect(() => {
    const linkPreconnectFonts = document.createElement('link');
    linkPreconnectFonts.rel = 'preconnect';
    linkPreconnectFonts.href = 'https://fonts.googleapis.com';
    document.head.appendChild(linkPreconnectFonts);

    const linkPreconnectGstatic = document.createElement('link');
    linkPreconnectGstatic.rel = 'preconnect';
    linkPreconnectGstatic.href = 'https://fonts.gstatic.com';
    linkPreconnectGstatic.crossOrigin = 'anonymous';
    document.head.appendChild(linkPreconnectGstatic);

    const linkFonts = document.createElement('link');
    linkFonts.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@700;800&display=swap';
    linkFonts.rel = 'stylesheet';
    document.head.appendChild(linkFonts);

    document.title = 'FAFIH - Faculdade de Artes, Filosofia e do Imaginário Humano';

    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }

    return () => {
      document.head.removeChild(linkPreconnectFonts);
      document.head.removeChild(linkPreconnectGstatic);
      document.head.removeChild(linkFonts);
    };
  }, []);

  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.main}>
        <AppRoutes />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

const App = () => (
  <AppProviders>
    <AppShell />
  </AppProviders>
);

export default App;
