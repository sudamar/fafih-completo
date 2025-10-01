const formatDate = (value) => {
  const date = new Date(value);
  return date.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const formatPeriod = (start, end) => {
  if (!end) {
    return formatDate(start);
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  if (startDate.toDateString() === endDate.toDateString()) {
    return formatDate(start);
  }

  return `${startDate.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })} a ${endDate.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}`;
};

const CalendarEventsList = ({ events, eventTypes }) => {
  if (!events?.length) {
    return (
      <div className="ic-card no-events" data-testid="calendar-empty">
        <h2>Nenhum evento encontrado</h2>
        <p>Não há eventos para os filtros selecionados. Tente ajustar os filtros para ver mais eventos.</p>
      </div>
    );
  }

  return (
    <div className="ic-grid" data-testid="calendar-events">
      {events.map((event) => {
        const eventType = eventTypes[event.type] || {};
        return (
          <div key={event.id} className="ic-card event-card">
            <div className="event-header">
              <div className="event-type-indicator" style={{ backgroundColor: eventType.color }}>
                <span className="event-icon">{eventType.icon}</span>
              </div>
              <div className="event-type-label">{eventType.label || 'Evento'}</div>
            </div>

            <h2 className="event-title">{event.title}</h2>

            <div className="event-details">
              <div className="event-date">
                <strong>📅 Data:</strong> {formatPeriod(event.date, event.endDate)}
              </div>
              {event.time && (
                <div className="event-time">
                  <strong>🕐 Horário:</strong> {event.time}
                  {event.endTime && ` às ${event.endTime}`}
                </div>
              )}
              {event.location && (
                <div className="event-location">
                  <strong>📍 Local:</strong> {event.location}
                </div>
              )}
            </div>

            {event.description && (
              <p className="event-description">{event.description}</p>
            )}

            {event.recurring && (
              <div className="event-recurring">
                <span className="recurring-badge">🔄 Evento Recorrente</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarEventsList;
