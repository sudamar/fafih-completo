import { useState, useMemo } from 'react';
import calendarData from '@/data/calendar-events.json';
import '@/components/iniciacao-cientifica/IniciacaoCientifica.css';

const CalendarioAcademicoContent = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedMonth, setSelectedMonth] = useState('todos');

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

    // Filtro por mês
    if (selectedMonth !== 'todos') {
      events = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getMonth() + 1 === parseInt(selectedMonth);
      });
    }

    return sortEventsByDate(events);
  }, [activeFilter, selectedMonth]);

  // Obter meses únicos dos eventos
  const availableMonths = useMemo(() => {
    const months = calendarData.events.map(event => {
      const date = new Date(event.date);
      return {
        value: date.getMonth() + 1,
        label: date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })
      };
    });

    // Remover duplicatas
    const uniqueMonths = months.filter((month, index, self) =>
      index === self.findIndex(m => m.value === month.value)
    );

    return uniqueMonths.sort((a, b) => a.value - b.value);
  }, []);

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
          <h2>Filtrar Eventos</h2>

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

          {/* Filtro por mês */}
          <div className="filter-section">
            <h3>Por Mês</h3>
            <div className="filter-select-container">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="filter-select"
              >
                <option value="todos">Todos os meses</option>
                {availableMonths.map(month => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
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

        .filter-container {
          margin: 2rem 0;
          padding: 1.5rem;
          background: var(--card-bg);
          border-radius: 10px;
          box-shadow: var(--shadow);
        }

        .filter-section {
          margin-bottom: 1.5rem;
        }

        .filter-section:last-child {
          margin-bottom: 0;
        }

        .filter-section h3 {
          color: var(--secondary-color);
          font-size: 1.1rem;
          margin-bottom: 0.8rem;
          font-family: 'Montserrat', sans-serif;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .filter-btn {
          background: var(--background-color);
          border: 2px solid var(--secondary-color);
          color: var(--secondary-color);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--secondary-color);
          color: white;
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
          .filter-buttons {
            justify-content: center;
          }

          .filter-btn {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }

          .legend-grid {
            grid-template-columns: 1fr;
          }

          .polo-schedule-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default CalendarioAcademicoContent;