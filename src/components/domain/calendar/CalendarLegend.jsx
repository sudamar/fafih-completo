const CalendarLegend = ({ eventTypes }) => {
  const entries = Object.entries(eventTypes || {});

  if (!entries.length) {
    return null;
  }

  return (
    <div className="calendar-legend" data-testid="calendar-legend">
      <h3>Legenda</h3>
      <div className="legend-grid">
        {entries.map(([key, type]) => (
          <div key={key} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: type.color }} />
            <span className="legend-icon">{type.icon}</span>
            <span className="legend-label">{type.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarLegend;
