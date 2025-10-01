const CalendarHero = ({ hero }) => {
  if (!hero) {
    return null;
  }

  return (
    <div className="section-header" data-testid="calendar-hero">
      <h1 className="page-title">{hero.title}</h1>
      <br />
      {hero.intro && <p className="page-intro">{hero.intro}</p>}
    </div>
  );
};

export default CalendarHero;
