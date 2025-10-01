const CalendarFilters = ({ eventTypes, activeFilter, onFilterChange, startDate, endDate, onDateChange, onClear }) => {
  const typeEntries = Object.entries(eventTypes || {});

  return (
    <div className="calendar-filter-container" data-testid="calendar-filters">
      <div className="filter-section">
        <h3>Por Tipo de Evento</h3>
        <div className="filter-buttons">
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
            onClick={() => onFilterChange?.('todos')}
          >
            Todos
          </button>
          {typeEntries.map(([key, type]) => (
            <button
              key={key}
              type="button"
              className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
              onClick={() => onFilterChange?.(key)}
            >
              {type.icon} {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Por Período</h3>
        <div className="date-range-container">
          <div className="date-input-group">
            <label htmlFor="calendar-start-date">Data Inicial:</label>
            <input
              id="calendar-start-date"
              type="date"
              value={startDate}
              onChange={(event) => onDateChange?.('start', event.target.value)}
              className="date-input"
            />
          </div>
          <div className="date-input-group">
            <label htmlFor="calendar-end-date">Data Final:</label>
            <input
              id="calendar-end-date"
              type="date"
              value={endDate}
              onChange={(event) => onDateChange?.('end', event.target.value)}
              className="date-input"
            />
          </div>
          {(startDate || endDate) && (
            <button type="button" className="clear-dates-btn" onClick={onClear}>
              ✕ Limpar Filtros
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarFilters;
