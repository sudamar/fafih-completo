import { useMemo, useState } from 'react';
import { getExtensaoContent } from '@/services/extensaoService.js';
import ExtensaoTabs from './ExtensaoTabs.jsx';
import ExtensaoFAQ from './ExtensaoFAQ.jsx';

const ICONS = {
  flag: (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M17.73 12.01c.2-.2.2-.51 0-.71l-1.42-1.42c-.2-.2-.51-.2-.71 0l-1.06 1.06-2.83-2.83 1.06-1.06c.2-.2.2-.51 0-.71L11.34 4.9c-.2-.2-.51-.2-.71 0L9.58 6.06 6.75 3.22 3.22 6.75l2.83 2.83L4.9 11.34c-.2.2-.2.51 0 .71l1.42 1.42c.2.2.51.2.71 0l1.06-1.06 2.83 2.83-1.06 1.06c-.2.2-.2.51 0 .71l1.42 1.42c.2.2.51.2.71 0l1.06-1.06 2.83 2.83 3.54-3.54-2.83-2.83 1.07-1.06zM6.59 9.17l-1.42-1.42L6.25 6.7l1.42 1.42L6.59 9.17zm7.07 7.07-1.42 1.42L13.25 19.3l1.42-1.42 1.08-1.07z" />
    </svg>
  ),
  document: (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  ),
  checklist: (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" />
      <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ),
  certificate: (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )
};

const TAB_LABELS = {
  Apresentacao: 'Apresentação',
  Programas: 'Programas',
  Atividades: 'Atividades Extensionistas',
  Jornada: 'Jornada da Extensão',
  Editais: 'Editais',
  Regulamentacao: 'Regulamentação',
  FAQ: 'FAQ',
};

const ExtensaoContent = () => {
  const content = useMemo(() => getExtensaoContent(), []);
  const tabData = content.tabs ?? [];
  const navigationTabs = useMemo(
    () =>
      tabData.map((tab) => ({
        id: tab.id,
        label: TAB_LABELS[tab.id] ?? tab.id,
      })),
    [tabData]
  );

  const [activeTab, setActiveTab] = useState(tabData[0]?.id ?? '');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleTabSelect = (tabId) => {
    setActiveTab(tabId);
  };

  const handleProjectClick = (project, schedule) => {
    setSelectedProject({ ...project, schedule });
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const renderBlocks = (blocks = []) =>
    blocks.map((block, index) => {
      if (block.type === 'heading') {
        const Tag = block.level === 2 ? 'h2' : 'h3';
        return <Tag key={`${block.text}-${index}`}>{block.text}</Tag>;
      }

      if (block.type === 'quote') {
        return <blockquote key={`${block.text}-${index}`}>{block.text}</blockquote>;
      }

      if (block.type === 'list') {
        return (
          <ul key={`list-${index}`}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      }

      if (block.type === 'paragraph') {
        if (block.emphasis === 'italic') {
          return (
            <p key={`${block.text}-${index}`}>
              <i>{block.text}</i>
            </p>
          );
        }

        return <p key={`${block.text}-${index}`}>{block.text}</p>;
      }

      return null;
    });

  const renderActivities = (activities) => {
    if (!activities) {
      return null;
    }

    return (
      <>
        {activities.title && <h2>{activities.title}</h2>}
        {activities.description && <p>{activities.description}</p>}

        <table className="activities-table">
          <thead>
            <tr>
              <th>Nome do Projeto</th>
              <th>Data de Início</th>
              <th>Data de Conclusão</th>
              <th>Modalidade</th>
              <th>Carga Horária</th>
            </tr>
          </thead>
          <tbody>
            {activities.projects.map((project) => (
              <tr key={project.name}>
                <td>
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      handleProjectClick(project, activities.schedule);
                    }}
                  >
                    {project.name}
                  </a>
                </td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.modality}</td>
                <td>{project.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  const renderJourney = (journey) => {
    if (!journey) {
      return null;
    }

    return (
      <>
        {journey.title && <h2>{journey.title}</h2>}
        <div className="jornada-container">
          {journey.steps.map((step) => {
            const icon = ICONS[step.icon] ?? ICONS.flag;
            const iconWrapper = (
              <div className="jornada-icon-wrapper" key={`icon-${step.title}`}>
                <div className="jornada-icon">{icon}</div>
              </div>
            );

            const text = (
              <div className="jornada-text" key={`text-${step.title}`}>
                <h4>{step.title}</h4>
                <p style={{ whiteSpace: 'pre-line' }}>{step.description}</p>
              </div>
            );

            return (
              <div className="jornada-step" key={step.title}>
                {step.iconPosition === 'right' ? (
                  <>
                    {text}
                    {iconWrapper}
                  </>
                ) : (
                  <>
                    {iconWrapper}
                    {text}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const renderDocuments = (documents) => {
    if (!documents) {
      return null;
    }

    return (
      <>
        {documents.title && <h2>{documents.title}</h2>}
        {documents.description && <p>{documents.description}</p>}

        {documents.items && (
          <div className="document-list">
            {documents.items.map((doc) => (
              <div className="document-item" key={doc.label}>
                <span>{doc.label}</span>
                <a
                  href={doc.url}
                  className="btn-download"
                  target={doc.external ? '_blank' : undefined}
                  rel={doc.external ? 'noopener noreferrer' : undefined}
                >
                  {doc.external ? 'Acessar PDF' : 'Visualizar PDF'}
                </a>
              </div>
            ))}
          </div>
        )}

        {documents.groups &&
          documents.groups.map((group) => (
            <div key={group.title} className="document-group">
              <h3>{group.title}</h3>
              {group.description && <p>{group.description}</p>}
              <div className="document-list">
                {group.items.map((doc) => (
                  <div className="document-item" key={doc.label}>
                    <span>{doc.label}</span>
                    <a
                      href={doc.url}
                      className="btn-download"
                      target={doc.external ? '_blank' : undefined}
                      rel={doc.external ? 'noopener noreferrer' : undefined}
                    >
                      {doc.external ? 'Acessar PDF' : 'Acessar PDF'}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </>
    );
  };

  const renderFaq = (faq) => {
    if (!faq) {
      return null;
    }

    return (
      <>
        {faq.title && <h2>{faq.title}</h2>}
        <ExtensaoFAQ groupTitle={faq.groupTitle} items={faq.items} />
      </>
    );
  };

  return (
    <>
      <ExtensaoTabs tabs={navigationTabs} activeTab={activeTab} onTabSelect={handleTabSelect} />

      {tabData.map((tab) => (
        <div
          key={tab.id}
          id={tab.id}
          className={`tab-content ${activeTab === tab.id ? 'active' : ''}`}
          role="tabpanel"
          aria-hidden={activeTab === tab.id ? 'false' : 'true'}
        >
          {renderBlocks(tab.blocks)}
          {renderActivities(tab.activities)}
          {renderJourney(tab.journey)}
          {renderDocuments(tab.documents)}
          {renderFaq(tab.faq)}
        </div>
      ))}

      {selectedProject && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <button type="button" className="close-button" onClick={closeModal} aria-label="Fechar">
              &times;
            </button>
            <h2>{selectedProject.name}</h2>
            <h3>Identificação</h3>
            <p>
              <b>Atividade Extensionista:</b> {selectedProject.name}
              <br />
              <b>Modalidade:</b> {selectedProject.modality}
              <br />
              <b>Área de Conhecimento:</b> {selectedProject.area}
            </p>
            <h3>Cronograma</h3>
            <table className="activities-table">
              <thead>
                <tr>
                  <th>Atividade</th>
                  <th>Carga Horária</th>
                </tr>
              </thead>
              <tbody>
                {selectedProject.schedule?.map((item) => (
                  <tr key={item.activity}>
                    <td>{item.activity}</td>
                    <td>{item.hours}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Carga Horária Total</th>
                  <th>{selectedProject.hours}</th>
                </tr>
              </tfoot>
            </table>
            <h3>Informações Gerais da Atividade</h3>
            <p>{selectedProject.info}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ExtensaoContent;
