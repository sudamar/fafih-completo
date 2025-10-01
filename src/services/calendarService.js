import calendarData from '@/data/calendar-events.json' with { type: 'json' };

const listEvents = () => calendarData.events.map((event) => ({ ...event }));

const listEventTypes = () => ({ ...calendarData.eventTypes });

const listSchedules = () => calendarData.schedules?.map((schedule) => ({ ...schedule })) ?? [];

const getHero = () => ({ ...calendarData.hero });

export const getCalendarContent = () => ({
  hero: getHero(),
  events: listEvents(),
  eventTypes: listEventTypes(),
  schedules: listSchedules(),
});

export default {
  getCalendarContent,
  listEvents,
  listEventTypes,
  listSchedules,
  getHero,
};
