import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseDetails } from './courseDetailsData';

const CursoDetalhes = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));

      const courseData = getCourseDetails(id);
      setCourse(courseData);
      setLoading(false);
    };

    fetchCourseDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando detalhes do curso...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Curso não encontrado</h2>
          <p className="text-gray-600">O curso solicitado não existe ou foi removido.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="curso-detalhes-page">
      {/* Hero Section */}
      <section className="curso-hero">
        <div className="curso-container">
          <div className="curso-imagem">
            <img src={course.image} alt={course.title} />
          </div>
          <div className="curso-info">
            <span className="curso-tipo">{course.categoryLabel}</span>
            <h1>{course.title}</h1>
            <p className="subtitulo-curso">{course.subtitle}</p>

            <div className="info-block">
              <h3>Informações do Curso</h3>
              <ul>
                <li><strong>Duração:</strong> {course.duration}</li>
                <li><strong>Modalidade:</strong> {course.modalidade}</li>
                <li><strong>Carga Horária:</strong> {course.workload}</li>
                <li><strong>Início:</strong> {course.startDate}</li>
                <li><strong>Certificação:</strong> {course.certificate}</li>
              </ul>
            </div>

            <div className="info-block">
              <h3>Investimento</h3>
              <div className="curso-preco">
                <div className="valor-desconto" style={{color: 'var(--primary-color)', fontSize: '2rem', fontWeight: '700'}}>
                  R$ {course.price.toLocaleString('pt-BR')}
                </div>
                <p className="preco-parcelado">{course.monthlyPrice}</p>
              </div>
            </div>

            <div className="curso-actions">
              <a href="#" className="btn btn-matricule-agora">Inscrever-se Agora</a>
              <a href="/escolha-cursos" className="btn btn-voltar">Voltar aos Cursos</a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="curso-detalhes">
        <div className="detalhes-container">
          {/* About Section */}
          <div className="detalhes-section">
            <h2>Sobre o Curso</h2>
            {course.fullDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Highlights */}
            <div className="info-cards">
              {course.highlights.map((highlight, index) => (
                <div key={index} className="info-card">
                  <h3>
                    <i className={`${highlight.icon} mr-3`} style={{color: 'var(--secondary-color)'}}></i>
                    {highlight.title}
                  </h3>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="detalhes-section">
            <h2>Grade Curricular</h2>
            <div className="areas-grid">
              {course.curriculum.map((module, index) => (
                <div key={index} className="area-item">
                  <h3>{module.number}. {module.title}</h3>
                  <p>{module.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professors */}
          <div className="detalhes-section">
            <h2>Corpo Docente</h2>
            <div className="professores-grid">
              {course.professors.map((professor, index) => (
                <div key={index} className="professor-card">
                  <div className="professor-foto">
                    <img src={professor.image} alt={professor.name} />
                  </div>
                  <div className="professor-info">
                    <h3>{professor.name}</h3>
                    <div className="professor-area">{professor.title}</div>
                    <div className="professor-especialidade">{professor.experience}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="detalhes-section">
            <h2>Depoimentos</h2>
            <div className="depoimentos-grid">
              {course.testimonials.map((testimonial, index) => (
                <div key={index} className="depoimento-card">
                  <div className="depoimento-placeholder">
                    <img src={testimonial.image} alt={testimonial.author} style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
                  </div>
                  <p>"{testimonial.text}"</p>
                  <h4>{testimonial.author}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="detalhes-section">
            <h2>Informações de Contato</h2>
            <div className="info-cards">
              <div className="info-card">
                <h3>
                  <i className="fas fa-phone mr-3" style={{color: 'var(--secondary-color)'}}></i>
                  Telefone
                </h3>
                <p className="contact-item-info">{course.contact.phone}</p>
              </div>
              <div className="info-card">
                <h3>
                  <i className="fab fa-whatsapp mr-3" style={{color: '#25D366'}}></i>
                  WhatsApp
                </h3>
                <p className="contact-item-info">{course.contact.whatsapp}</p>
              </div>
              <div className="info-card">
                <h3>
                  <i className="fas fa-envelope mr-3" style={{color: 'var(--secondary-color)'}}></i>
                  E-mail
                </h3>
                <p className="contact-item-info">{course.contact.email}</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="page-actions">
            <a href="#" className="btn-page-action btn-inscreva-se">Inscreva-se Agora</a>
            <a href="/escolha-cursos" className="btn-page-action btn-secondary">Ver Outros Cursos</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CursoDetalhes;
