import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    let consentGiven = false;
    try {
      consentGiven = localStorage.getItem('cookieConsentFafih') === 'true';
    } catch (e) {
      console.warn('Não foi possível acessar o localStorage. O banner de cookies será exibido.', e.message);
      consentGiven = false;
    }

    if (!consentGiven) {
      setTimeout(() => {
        setShowBanner(true);
      }, 1500);
    }
  }, []);

  const acceptCookies = () => {
    setShowBanner(false);
    try {
      localStorage.setItem('cookieConsentFafih', 'true');
    } catch (e) {
      console.warn('Não foi possível salvar o consentimento de cookies no localStorage.', e.message);
    }
  };

  if (!showBanner) return null;

  return (
    <div id="cookie-consent-banner" className="show">
      <p>
        Este site utiliza cookies para garantir que você obtenha a melhor experiência de navegação.
        Ao continuar, você concorda com nossa <a href="#">Política de Cookies</a>.
      </p>
      <button id="cookie-accept-btn" onClick={acceptCookies}>Aceitar</button>
    </div>
  );
};

export default CookieConsent;