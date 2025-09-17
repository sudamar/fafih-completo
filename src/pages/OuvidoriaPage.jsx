import React from 'react';
import OuvidoriaContent from '../components/ouvidoria/OuvidoriaContent';
import '../components/ouvidoria/Ouvidoria.css';

const OuvidoriaPage = () => {
  return (
    <main className="ouvidoria-page">
      <div className="page-header">
        <div className="container">
          <h1 className="text-4xl font-bold text-white">Ouvidoria FAFIH</h1>
          <p className="page-subtitle text-white">
            Um canal direto de comunicação entre você e nossa instituição.
          </p>
        </div>
      </div>
      <OuvidoriaContent />
    </main>
  );
};

export default OuvidoriaPage;
