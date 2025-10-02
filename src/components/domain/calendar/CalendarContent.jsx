import { useMemo, useState } from 'react';
import { getCalendarContent } from '@/services/calendarService.js';
import CalendarHero from './CalendarHero.jsx';
import CalendarFilters from './CalendarFilters.jsx';
import CalendarLegend from './CalendarLegend.jsx';
import CalendarEventsList from './CalendarEventsList.jsx';
import CalendarSchedules from './CalendarSchedules.jsx';
import '@/components/domain/iniciacao-cientifica/iniciacao-cientifica.css';

const sortByDate = (events) => events.slice().sort((a, b) => new Date(a.date) - new Date(b.date));

const CalendarContent = () => {
  const { hero, events, eventTypes, schedules } = useMemo(() => getCalendarContent(), []);
  const [activeFilter, setActiveFilter] = useState('todos');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filteredEvents = useMemo(() => {
    const ordered = sortByDate(events);

    return ordered.filter((event) => {
      if (activeFilter !== 'todos' && event.type !== activeFilter) {
        return false;
      }

      const eventDate = new Date(event.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      if (start && eventDate < start) {
        return false;
      }

      if (end && eventDate > end) {
        return false;
      }

      return true;
    });
  }, [events, activeFilter, startDate, endDate]);

  const handleDateChange = (type, value) => {
    if (type === 'start') {
      setStartDate(value);
    }

    if (type === 'end') {
      setEndDate(value);
    }
  };

  const clearFilters = () => {
    setActiveFilter('todos');
    setStartDate('');
    setEndDate('');
  };

  return (
    <section className="page-section" data-testid="calendar-content">
      <div className="container">
        <CalendarHero hero={hero} />

        <CalendarFilters
          eventTypes={eventTypes}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          startDate={startDate}
          endDate={endDate}
          onDateChange={handleDateChange}
          onClear={clearFilters}
        />

        <CalendarLegend eventTypes={eventTypes} />

        <CalendarEventsList events={filteredEvents} eventTypes={eventTypes} />

        <CalendarSchedules schedules={schedules} />

        <div className="page-actions">
          <a href="/" className="btn-page-action btn-secondary">Voltar</a>
        </div>
      </div>
    </section>
  );
};

export default CalendarContent;
