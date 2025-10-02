import { useMemo } from 'react';
import { getFormasIngressoContent } from '@/services/formasIngressoService.js';

const FormasIngressoContent = () => {
  const content = useMemo(() => getFormasIngressoContent(), []);
  const options = content.options ?? [];
  const pageActions = content.pageActions ?? [];

  return (
    <section className="page-section" data-testid="formas-ingresso">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Formas de Ingresso</h1>
        </div>

        {content.intro && <p className="page-intro">{content.intro}</p>}

        <div className="ingresso-grid">
          {options.map((option) => (
            <article key={option.title} className="ingresso-card">
              <h2 className="card-heading no-underline">{option.title}</h2>
              <p>{option.description}</p>
              {option.action && (
                <a href={option.action.url} className="btn-card">
                  {option.action.label}
                </a>
              )}
            </article>
          ))}
        </div>

        {pageActions.length > 0 && (
          <div className="page-actions">
            {pageActions.map((action) => (
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

    </section>
  );
};

export default FormasIngressoContent;
