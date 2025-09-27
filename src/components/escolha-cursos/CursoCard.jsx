import { Link } from 'react-router-dom';

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
          <Link to={`/curso-detalhes/${curso.slug || curso.id}`}>Saiba Mais</Link>
        </div>
      </div>
    </div>
  );
};

export default CursoCard;
