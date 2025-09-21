const CursoCard = ({ curso }) => {
  return (
    <div className="curso-card">
      <div className="curso-card-img">
        <img src={curso.image} alt={curso.title} />
      </div>
      <div className="curso-card-content">
        <span className="curso-card-cat">{curso.categoryLabel}</span>
        <h3>{curso.title}</h3>
        <p className="curso-card-desc">{curso.description}</p>
        <div className="curso-card-actions">
          <a href={curso.link}>Saiba Mais</a>
        </div>
      </div>
    </div>
  );
};

export default CursoCard;
