const CalendarSchedules = ({ schedules }) => {
  if (!schedules?.length) {
    return null;
  }

  return (
    <div className="content-section" data-testid="calendar-schedule">
      <h2>Cronograma de Aulas por Polo</h2>
      <div className="polo-schedule-grid">
        {schedules.map((item) => (
          <div key={item.title} className="polo-schedule-card">
            <h3>{item.icon} {item.title}</h3>
            <p><strong>Frequência:</strong> {item.frequency}</p>
            <p><strong>Horário:</strong> {item.time}</p>
            <p><strong>Modalidade:</strong> {item.modality}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarSchedules;
