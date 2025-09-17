import { useState, useEffect } from 'react';

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slides = [
    {
      backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2728&auto=format&fit=crop')",
      title: "Faculdade de Artes, Filosofia e do Imaginário Humano",
      subtitle: "Conhecimento para a alma, sabedoria para o mundo"
    },
    {
      backgroundImage: "url('https://i.imgur.com/72SS1Xx.jpeg')",
      title: "A Medida de Todas as Coisas",
      subtitle: "Explorando a intersecção entre arte, ciência e a condição humana, do clássico ao contemporâneo."
    },
    {
      backgroundImage: "url('https://i.imgur.com/MwiLTFz.png')",
      title: "CURSOS DE PÓS-GRADUAÇÃO QUE FORMAM ESPECIALISTAS",
      subtitle: "Matrículas abertas em Brasília - São Paulo - Rio de Janeiro",
      className: "align-bottom"
    },
    {
      backgroundImage: "url('https://i.imgur.com/8hHb16K.png')",
      title: "FORMAÇÃO DE MEMBROS ANALISTAS DO IJEP",
      subtitle: "Exclusivo para nossos Ex-Alunos do curso de Psicologia Junguiana",
      className: "align-bottom"
    }
  ];

  const plusSlides = (n) => {
    const newIndex = slideIndex + n;
    if (newIndex > slides.length) {
      setSlideIndex(1);
    } else if (newIndex < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(newIndex);
    }
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 7000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <section id="hero">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index + 1 === slideIndex ? 'active' : ''} ${slide.className || ''}`}
            style={{ backgroundImage: slide.backgroundImage }}
          >
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p className="subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-nav">
        <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
        <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
      </div>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index + 1 === slideIndex ? 'active' : ''}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;