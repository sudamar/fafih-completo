import { useState, useEffect, useCallback } from 'react';
import styles from './testimonials.module.css';

export function Testimonials({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 200);
    }
  }, [currentIndex, isAnimating]);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, testimonials.length, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, testimonials.length, goToSlide]);

  // Auto-rotation with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [goToNext, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className={styles.testimonialsContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.testimonialsHeader}>
        <h2 className={styles.testimonialsTitle}>Depoimentos</h2>
        {/* <p className={styles.testimonialsSubtitle}>
          Veja o que nossos alunos têm a dizer sobre seus cursos
        </p> */}
        <br/>
      </div>

      <div className={styles.testimonialsCarousel}>
        <button
          className={styles.carouselButton}
          onClick={goToPrevious}
          aria-label="Depoimento anterior"
          title="Anterior (←)"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.testimonialCard}>
          <div className={`${styles.testimonialContent} ${isAnimating ? styles.animating : ''}`}>
            <div className={styles.quoteIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
              </svg>
            </div>

            <blockquote className={styles.testimonialText}>
              "{currentTestimonial.text}"
            </blockquote>

            <div className={styles.testimonialAuthor}>
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className={styles.authorImage}
                loading="lazy"
              />
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>{currentTestimonial.name}</h4>
                <p className={styles.authorRole}>Ex-aluno FAFIH</p>
              </div>
            </div>
          </div>
        </div>

        <button
          className={styles.carouselButton}
          onClick={goToNext}
          aria-label="Próximo depoimento"
          title="Próximo (→)"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className={styles.carouselIndicators}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para depoimento ${index + 1} de ${testimonials.length}`}
            title={`Depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}