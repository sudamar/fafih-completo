import { useState, useMemo } from 'react';
import calendarData from '@/data/calendar-events.json';
import '@/components/iniciacao-cientifica/IniciacaoCientifica.css';

const CalendarioAcademicoContent = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Função para formatar data
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Função para formatar período
  const formatDatePeriod = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start.toDateString() === end.toDateString()) {
      return formatDate(startDate);
    }

    return `${start.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })} a ${end.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}`;
  };

  // Função para ordenar eventos por data
  const sortEventsByDate = (events) => {
    return events.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  // Filtrar eventos
  const filteredEvents = useMemo(() => {
    let events = [...calendarData.events];

    // Filtro por tipo
    if (activeFilter !== 'todos') {
      events = events.filter(event => event.type === activeFilter);
    }

    // Filtro por intervalo de datas
    if (startDate || endDate) {
      events = events.filter(event => {
        const eventDate = new Date(event.date);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        // Se apenas data inicial foi especificada
        if (start && !end) {
          return eventDate >= start;
        }

        // Se apenas data final foi especificada
        if (!start && end) {
          return eventDate <= end;
        }

        // Se ambas as datas foram especificadas
        if (start && end) {
          return eventDate >= start && eventDate <= end;
        }

        return true;
      });
    }

    return sortEventsByDate(events);
  }, [activeFilter, startDate, endDate]);

  // Função para limpar filtros
  const clearFilters = () => {
    setActiveFilter('todos');
    setStartDate('');
    setEndDate('');
  };


  return (
    <section className="page-section">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Calendário Acadêmico</h1>
        </div>

        <div className="conheca-intro">
          <p>Acompanhe todas as datas importantes do ano letivo, incluindo vestibulares, início e término dos cursos, cronograma de aulas por polo e eventos especiais da FAFIH.</p>
        </div>

        {/* Filtros */}
        <div className="filter-container">
          {/* Filtro por tipo */}
          <div className="filter-section">
            <h3>Por Tipo de Evento</h3>
            <div className="filter-buttons">
              <button
                className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
                onClick={() => setActiveFilter('todos')}
              >
                Todos
              </button>
              {Object.entries(calendarData.eventTypes).map(([key, type]) => (
                <button
                  key={key}
                  className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(key)}
                >
                  {type.icon} {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filtro por intervalo de datas */}
          <div className="filter-section">
            <h3>Por Período</h3>
            <div className="date-range-container">
              <div className="date-input-group">
                <label htmlFor="start-date">Data Inicial:</label>
                <input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="date-input"
                />
              </div>
              <div className="date-input-group">
                <label htmlFor="end-date">Data Final:</label>
                <input
                  id="end-date"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="date-input"
                />
              </div>
              {(startDate || endDate) && (
                <button className="clear-dates-btn" onClick={clearFilters}>
                  ✕ Limpar Filtros
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Legenda */}
        <div className="calendar-legend">
          <h3>Legenda</h3>
          <div className="legend-grid">
            {Object.entries(calendarData.eventTypes).map(([key, type]) => (
              <div key={key} className="legend-item">
                <span
                  className="legend-color"
                  style={{ backgroundColor: type.color }}
                ></span>
                <span className="legend-icon">{type.icon}</span>
                <span className="legend-label">{type.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lista de Eventos */}
        <div className="ic-grid">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => {
              const eventType = calendarData.eventTypes[event.type];
              return (
                <div key={event.id} className="ic-card event-card">
                  <div className="event-header">
                    <div
                      className="event-type-indicator"
                      style={{ backgroundColor: eventType.color }}
                    >
                      <span className="event-icon">{eventType.icon}</span>
                    </div>
                    <div className="event-type-label">
                      {eventType.label}
                    </div>
                  </div>

                  <h2 className="event-title">{event.title}</h2>

                  <div className="event-details">
                    <div className="event-date">
                      <strong>📅 Data: </strong>
                      {event.endDate ?
                        formatDatePeriod(event.date, event.endDate) :
                        formatDate(event.date)
                      }
                    </div>

                    {event.time && (
                      <div className="event-time">
                        <strong>🕐 Horário: </strong>
                        {event.time}
                        {event.endTime && ` às ${event.endTime}`}
                      </div>
                    )}

                    <div className="event-location">
                      <strong>📍 Local: </strong>
                      {event.location}
                    </div>
                  </div>

                  <p className="event-description">{event.description}</p>

                  {event.recurring && (
                    <div className="event-recurring">
                      <span className="recurring-badge">🔄 Evento Recorrente</span>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="ic-card no-events">
              <h2>Nenhum evento encontrado</h2>
              <p>Não há eventos para os filtros selecionados. Tente ajustar os filtros para ver mais eventos.</p>
            </div>
          )}
        </div>

        {/* Informações sobre cronograma de aulas */}
        <div className="content-section">
          <h2>Cronograma de Aulas por Polo</h2>
          <div className="polo-schedule-grid">
            <div className="polo-schedule-card">
              <h3>🏛️ Polo Brasília</h3>
              <p><strong>Frequência:</strong> Todo 2º sábado do mês</p>
              <p><strong>Horário:</strong> 08:00 às 18:00</p>
              <p><strong>Modalidade:</strong> Presencial</p>
            </div>

            <div className="polo-schedule-card">
              <h3>🏙️ Polo São Paulo</h3>
              <p><strong>Frequência:</strong> Todo 3º sábado do mês</p>
              <p><strong>Horário:</strong> 08:00 às 18:00</p>
              <p><strong>Modalidade:</strong> Presencial</p>
            </div>

            <div className="polo-schedule-card">
              <h3>🏖️ Polo Rio de Janeiro</h3>
              <p><strong>Frequência:</strong> Todo 4º sábado do mês</p>
              <p><strong>Horário:</strong> 08:00 às 18:00</p>
              <p><strong>Modalidade:</strong> Presencial</p>
            </div>
          </div>
        </div>

        <div className="page-actions">
          <a href="/" className="btn-page-action btn-secondary">Voltar</a>
        </div>
      </div>

      {/* CSS Customizado */}
      <style jsx>{`
        .conheca-intro::before {
          display: none !important;
        }

        .ic-card h2::after {
          display: none !important;
        }

        .date-range-container {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 1.5rem;
          align-items: end;
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 12px;
          border: 1px solid #e9ecef;
        }

        .date-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .date-input-group label {
          font-weight: 600;
          color: var(--primary-color);
          font-size: 0.95rem;
          font-family: 'Montserrat', sans-serif;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .date-input-group:first-child label:before {
          content: "📅";
          font-size: 0.9rem;
        }

        .date-input-group:nth-child(2) label:before {
          content: "🏁";
          font-size: 0.9rem;
        }

        .date-input {
          padding: 0.8rem 1rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 0.95rem;
          background: white;
          color: var(--text-color);
          min-width: 160px;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .date-input:focus {
          outline: none;
          border-color: var(--secondary-color);
          box-shadow: 0 0 0 3px rgba(44, 103, 143, 0.1);
          background: #fafbfc;
        }

        .date-input:hover {
          border-color: var(--secondary-color);
        }

        .clear-dates-btn {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          border: none;
          padding: 0.8rem 1.4rem;
          border-radius: 25px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          height: fit-content;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .clear-dates-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .clear-dates-btn:active {
          transform: translateY(0);
        }

        .filter-container {
          margin: 2rem 0;
          padding: 2rem;
          background: var(--card-bg);
          border-radius: 15px;
          box-shadow: var(--shadow);
          border: 1px solid #e9ecef;
        }

        .filter-section {
          margin-bottom: 2rem;
        }

        .filter-section:last-child {
          margin-bottom: 0;
        }

        .filter-section h3 {
          color: var(--primary-color);
          font-size: 1.2rem;
          margin-bottom: 1.2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-section h3:before {
          content: "🔍";
          font-size: 1rem;
        }

        .filter-section h3:nth-child(1):before {
          content: "🏷️";
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .filter-btn {
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          color: var(--text-color);
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          position: relative;
          overflow: hidden;
        }

        .filter-btn:hover {
          background: #e9ecef;
          border-color: var(--secondary-color);
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .filter-btn.active {
          background: var(--secondary-color);
          color: white;
          border-color: var(--secondary-color);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(44, 103, 143, 0.3);
        }

        .filter-select-container {
          margin-top: 0.5rem;
        }

        .filter-select {
          padding: 0.5rem 1rem;
          border: 2px solid var(--secondary-color);
          border-radius: 5px;
          background: white;
          color: var(--text-color);
          font-size: 0.9rem;
          min-width: 200px;
        }

        .calendar-legend {
          margin: 2rem 0;
          padding: 1.5rem;
          background: var(--card-bg);
          border-radius: 10px;
          box-shadow: var(--shadow);
        }

        .calendar-legend h3 {
          color: var(--secondary-color);
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
        }

        .legend-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .legend-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .legend-icon {
          font-size: 1.1rem;
        }

        .legend-label {
          font-size: 0.9rem;
          color: var(--text-color);
        }

        .event-card {
          border-left: 4px solid var(--secondary-color);
        }

        .event-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }

        .event-type-indicator {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }

        .event-icon {
          font-size: 1.2rem;
        }

        .event-type-label {
          font-size: 0.9rem;
          color: var(--secondary-color);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .event-title {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .event-details {
          margin: 1rem 0;
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 8px;
        }

        .event-details div {
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .event-details div:last-child {
          margin-bottom: 0;
        }

        .event-description {
          color: #666;
          font-style: italic;
          margin: 1rem 0;
        }

        .event-recurring {
          margin-top: 1rem;
        }

        .recurring-badge {
          background: var(--secondary-color);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .no-events {
          text-align: center;
          color: #666;
        }

        .polo-schedule-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin: 1.5rem 0;
        }

        .polo-schedule-card {
          background: var(--card-bg);
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: var(--shadow);
          border-left: 4px solid var(--secondary-color);
        }

        .polo-schedule-card h3 {
          color: var(--primary-color);
          font-family: 'Montserrat', sans-serif;
          margin-bottom: 1rem;
        }

        .polo-schedule-card p {
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .polo-schedule-card p:last-child {
          margin-bottom: 0;
        }

        /* Responsividade */
        @media (max-width: 768px) {
          .filter-container {
            padding: 1.5rem;
          }

          .date-range-container {
            grid-template-columns: 1fr;
            gap: 1.2rem;
            padding: 1.2rem;
          }

          .date-input {
            min-width: auto;
            width: 100%;
          }

          .clear-dates-btn {
            justify-self: center;
            width: fit-content;
          }

          .filter-buttons {
            justify-content: center;
            gap: 0.6rem;
          }

          .filter-btn {
            font-size: 0.85rem;
            padding: 0.5rem 1rem;
          }

          .filter-section h3 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          .legend-grid {
            grid-template-columns: 1fr;
          }

          .polo-schedule-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .filter-container {
            padding: 1rem;
            margin: 1.5rem 0;
          }

          .date-range-container {
            padding: 1rem;
            gap: 1rem;
          }

          .filter-btn {
            font-size: 0.8rem;
            padding: 0.5rem 0.8rem;
          }

          .date-input-group label {
            font-size: 0.9rem;
          }

          .date-input {
            font-size: 0.9rem;
            padding: 0.7rem 0.8rem;
          }

          .clear-dates-btn {
            font-size: 0.85rem;
            padding: 0.7rem 1.2rem;
          }

          .filter-section h3 {
            font-size: 1rem;
          }

          .filter-buttons {
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CalendarioAcademicoContent;