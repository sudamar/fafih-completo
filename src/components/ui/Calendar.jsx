import { useState, useMemo } from 'react';

const Calendar = ({ events = [], onDateSelect, selectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Obter primeiro e último dia do mês
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // Gerar array de dias do mês
  const daysInMonth = lastDayOfMonth.getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Dias do mês anterior para preencher a primeira semana
  const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 0);
  const prevMonthDays = Array.from(
    { length: firstDayOfWeek },
    (_, i) => prevMonth.getDate() - firstDayOfWeek + i + 1
  );

  // Dias do próximo mês para preencher a última semana
  const totalCells = Math.ceil((daysInMonth + firstDayOfWeek) / 7) * 7;
  const nextMonthDays = Array.from(
    { length: totalCells - daysInMonth - firstDayOfWeek },
    (_, i) => i + 1
  );

  // Agrupar eventos por data
  const eventsByDate = useMemo(() => {
    const grouped = {};
    events.forEach(event => {
      const eventDate = new Date(event.date);
      const dateKey = `${eventDate.getFullYear()}-${eventDate.getMonth()}-${eventDate.getDate()}`;

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(event);

      // Se o evento tem endDate (período), adicionar para todos os dias do período
      if (event.endDate) {
        const endDate = new Date(event.endDate);
        const currentDate = new Date(eventDate);

        while (currentDate <= endDate) {
          const periodDateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
          if (!grouped[periodDateKey]) {
            grouped[periodDateKey] = [];
          }
          if (!grouped[periodDateKey].includes(event)) {
            grouped[periodDateKey].push(event);
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
    });
    return grouped;
  }, [events]);

  // Verificar se há eventos em uma data específica
  const hasEvents = (year, month, day) => {
    const dateKey = `${year}-${month}-${day}`;
    return eventsByDate[dateKey] && eventsByDate[dateKey].length > 0;
  };

  // Obter eventos de uma data específica
  const getEventsForDate = (year, month, day) => {
    const dateKey = `${year}-${month}-${day}`;
    return eventsByDate[dateKey] || [];
  };

  // Navegar entre meses
  const goToPrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Verificar se é a data selecionada
  const isSelectedDate = (year, month, day) => {
    if (!selectedDate) return false;
    const selected = new Date(selectedDate);
    return (
      selected.getFullYear() === year &&
      selected.getMonth() === month &&
      selected.getDate() === day
    );
  };

  // Verificar se é hoje
  const isToday = (year, month, day) => {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  };

  // Manipular clique em data
  const handleDateClick = (year, month, day) => {
    const clickedDate = new Date(year, month, day);
    const eventsForDate = getEventsForDate(year, month, day);

    if (onDateSelect) {
      onDateSelect(clickedDate, eventsForDate);
    }
  };

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <div className="calendar-container">
      {/* Header do Calendário */}
      <div className="calendar-header">
        <button onClick={goToPrevMonth} className="calendar-nav-btn">
          ‹
        </button>
        <h3 className="calendar-title">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button onClick={goToNextMonth} className="calendar-nav-btn">
          ›
        </button>
      </div>

      {/* Grid do Calendário */}
      <div className="calendar-grid">
        {/* Cabeçalho dos dias da semana */}
        {weekDays.map(day => (
          <div key={day} className="calendar-weekday">
            {day}
          </div>
        ))}

        {/* Dias do mês anterior (cinza) */}
        {prevMonthDays.map(day => (
          <div key={`prev-${day}`} className="calendar-day calendar-day-other-month">
            {day}
          </div>
        ))}

        {/* Dias do mês atual */}
        {daysArray.map(day => {
          const year = currentMonth.getFullYear();
          const month = currentMonth.getMonth();
          const dayHasEvents = hasEvents(year, month, day);
          const eventsForDay = getEventsForDate(year, month, day);
          const isSelected = isSelectedDate(year, month, day);
          const isTodayDate = isToday(year, month, day);

          return (
            <div
              key={day}
              className={`calendar-day ${dayHasEvents ? 'calendar-day-with-events' : ''} ${
                isSelected ? 'calendar-day-selected' : ''
              } ${isTodayDate ? 'calendar-day-today' : ''}`}
              onClick={() => handleDateClick(year, month, day)}
            >
              <span className="calendar-day-number">{day}</span>
              {dayHasEvents && (
                <div className="calendar-events-indicators">
                  {eventsForDay.slice(0, 3).map((event, index) => (
                    <div
                      key={`${event.id}-${index}`}
                      className="calendar-event-dot"
                      style={{ backgroundColor: event.color }}
                      title={event.title}
                    />
                  ))}
                  {eventsForDay.length > 3 && (
                    <div className="calendar-event-more">
                      +{eventsForDay.length - 3}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Dias do próximo mês (cinza) */}
        {nextMonthDays.map(day => (
          <div key={`next-${day}`} className="calendar-day calendar-day-other-month">
            {day}
          </div>
        ))}
      </div>

      <style jsx>{`
        .calendar-container {
          background: var(--card-bg);
          border-radius: 10px;
          box-shadow: var(--shadow);
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .calendar-title {
          color: var(--primary-color);
          font-family: 'Montserrat', sans-serif;
          font-size: 1.3rem;
          margin: 0;
        }

        .calendar-nav-btn {
          background: var(--secondary-color);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .calendar-nav-btn:hover {
          background: var(--primary-color);
          transform: scale(1.05);
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 1px;
          background: #e9ecef;
          border-radius: 8px;
          overflow: hidden;
        }

        .calendar-weekday {
          background: var(--secondary-color);
          color: white;
          padding: 0.8rem 0.5rem;
          text-align: center;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .calendar-day {
          background: white;
          min-height: 80px;
          padding: 0.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          border: 2px solid transparent;
        }

        .calendar-day:hover {
          background: #f8f9fa;
          border-color: var(--secondary-color);
        }

        .calendar-day-other-month {
          background: #f5f5f5;
          color: #999;
          cursor: default;
        }

        .calendar-day-other-month:hover {
          background: #f5f5f5;
          border-color: transparent;
        }

        .calendar-day-today {
          background: #e3f2fd;
          border-color: var(--primary-color);
        }

        .calendar-day-selected {
          background: var(--secondary-color);
          color: white;
        }

        .calendar-day-selected .calendar-day-number {
          color: white;
        }

        .calendar-day-with-events {
          background: #fff3e0;
        }

        .calendar-day-with-events:hover {
          background: #ffe0b2;
        }

        .calendar-day-number {
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 0.3rem;
        }

        .calendar-events-indicators {
          display: flex;
          flex-wrap: wrap;
          gap: 2px;
          margin-top: auto;
        }

        .calendar-event-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .calendar-event-more {
          font-size: 0.7rem;
          color: #666;
          font-weight: 500;
        }

        /* Responsividade */
        @media (max-width: 768px) {
          .calendar-container {
            padding: 1rem;
          }

          .calendar-day {
            min-height: 60px;
            padding: 0.3rem;
          }

          .calendar-title {
            font-size: 1.1rem;
          }

          .calendar-nav-btn {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }

          .calendar-weekday {
            padding: 0.5rem 0.3rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .calendar-day {
            min-height: 50px;
          }

          .calendar-weekday {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Calendar;