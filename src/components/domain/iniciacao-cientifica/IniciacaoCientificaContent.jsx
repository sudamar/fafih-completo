import { useMemo } from 'react';
import { getIniciacaoCientificaContent } from '@/services/iniciacaoCientificaService.js';
import './iniciacao-cientifica.css';

const IniciacaoCientificaContent = () => {
  const content = useMemo(() => getIniciacaoCientificaContent(), []);
  const programs = content.programs ?? [];
  const actions = content.actions ?? [];

  return (
    <section className="page-section" data-testid="iniciacao-cientifica">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Iniciação Científica</h1>
        </div>

        {content.intro && (
          <div className="conheca-intro">
            <p>{content.intro}</p>
          </div>
        )}

        <div className="ic-grid">
          {programs.map((program) => (
            <article key={program.title} className="ic-card">
              <h2 className="card-heading no-underline">{program.title}</h2>
              <p>{program.description}</p>
              {program.links?.length > 0 && (
                <div className="card-buttons">
                  {program.links.map((link) => (
                    <a key={link.label} href={link.url} className="btn-card">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {actions.length > 0 && (
          <div className="page-actions">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.url}
                className={`btn-page-action btn-${action.variant ?? 'secondary'}`}
              >
                {action.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .conheca-intro::before {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default IniciacaoCientificaContent;
