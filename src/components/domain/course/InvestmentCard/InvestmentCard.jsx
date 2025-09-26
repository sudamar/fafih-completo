import styles from './InvestmentCard.module.css';

const formatCurrency = (value) => {
  if (value === null || value === undefined) return null;
  if (typeof value === 'number') {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  return value;
};

const InvestmentCard = ({ course }) => {
  if (!course) {
    return null;
  }

  const price = formatCurrency(course.price);
  const originalPrice = formatCurrency(course.originalPrice);
  const enrollmentPrice = formatCurrency(course.precoMatricula);
  const monthlyPrice = course.monthlyPrice || course.mensalidadeFormatada;

  return (
    <aside className={styles.card} data-testid="course-investment">
      <header>
        <span className={styles.pill}>Investimento</span>
        <h2>Condições especiais</h2>
        <p>
          Garanta sua vaga com condições diferenciadas e suporte personalizado durante todo o processo de matrícula.
        </p>
      </header>

      <div className={styles.priceBox}>
        {originalPrice && (
          <div className={styles.original}>
            De <s>{originalPrice}</s>
          </div>
        )}
        {price && (
          <div className={styles.current}>
            <span>{price}</span>
            {monthlyPrice && <small>ou {monthlyPrice}</small>}
          </div>
        )}
      </div>

      <ul className={styles.list}>
        {enrollmentPrice && (
          <li>
            <strong>Matrícula:</strong> {enrollmentPrice}
          </li>
        )}
        {course.maxStudents && (
          <li>
            <strong>Vagas limitadas:</strong> {course.maxStudents}
          </li>
        )}
        {course.benefits?.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <footer className={styles.footer}>
        {course.enrollmentLink && (
          <a className={styles.cta} href={course.enrollmentLink}>
            Fazer matrícula
          </a>
        )}
        {course.contactLink && (
          <a className={styles.secondaryCta} href={course.contactLink}>
            Conversar com especialista
          </a>
        )}
      </footer>
    </aside>
  );
};

export default InvestmentCard;
