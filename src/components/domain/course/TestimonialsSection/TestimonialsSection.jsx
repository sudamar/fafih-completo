import styles from './TestimonialsSection.module.css';

const TestimonialsSection = ({ testimonials = [] }) => {
  if (!testimonials.length) {
    return null;
  }

  return (
    <section className={styles.section} data-testid="course-testimonials">
      <header>
        <h2>Depoimentos de quem já viveu essa jornada</h2>
        <p>Experiências reais de alunos e alunas que concluíram a formação.</p>
      </header>

      <div className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <article key={testimonial.id || index} className={styles.card}>
            <div className={styles.quoteMark} aria-hidden>“</div>
            <p className={styles.content}>{testimonial.content || testimonial.text}</p>

            <footer className={styles.footer}>
              <div>
                <strong>{testimonial.author || 'Aluno(a) FAFIH'}</strong>
                {testimonial.role && <span>{testimonial.role}</span>}
              </div>
              {testimonial.rating && (
                <span className={styles.rating}>{'★'.repeat(testimonial.rating)}</span>
              )}
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
