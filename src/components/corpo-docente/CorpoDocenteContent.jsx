import CorpoDocente from '@/components/ui/CorpoDocente';

const CorpoDocenteContent = () => {


  return (
    <section className="page-section">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Corpo Docente</h1>
        </div>

        <CorpoDocente showIntro={true} />

        <div className="content-section">
          <h2>Critérios de Seleção</h2>
          <p>Nosso corpo docente é selecionado através de rigorosos critérios acadêmicos e profissionais:</p>
          <ul>
            <li><strong>Formação Acadêmica:</strong> Titulação mínima de mestrado em suas áreas de especialização</li>
            <li><strong>Experiência Profissional:</strong> Ampla experiência prática e teórica em suas respectivas áreas</li>
            <li><strong>Produção Científica:</strong> Participação ativa em pesquisas e publicações acadêmicas</li>
            <li><strong>Compromisso Pedagógico:</strong> Dedicação ao ensino e à formação integral dos estudantes</li>
            <li><strong>Visão Interdisciplinar:</strong> Capacidade de integrar diferentes áreas do conhecimento</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>Áreas de Especialização</h2>
          <p>Nossos professores cobrem um amplo espectro de áreas do conhecimento, garantindo uma formação abrangente e interdisciplinar:</p>

          <div className="areas-grid">
            <div className="area-item">
              <h3>Filosofia</h3>
              <p>Filosofia Contemporânea, Epistemologia, Ética, Estética, História da Filosofia</p>
            </div>

            <div className="area-item">
              <h3>Artes</h3>
              <p>Artes Visuais, História da Arte, Curadoria, Arte Contemporânea, Arte-Educação</p>
            </div>

            <div className="area-item">
              <h3>Psicologia</h3>
              <p>Psicologia Analítica, Psicologia Junguiana, Estudos do Imaginário, Psicoterapia</p>
            </div>

            <div className="area-item">
              <h3>Literatura</h3>
              <p>Literatura Comparada, Mitocrítica, Literatura e Imaginário, Teoria Literária</p>
            </div>

            <div className="area-item">
              <h3>Educação</h3>
              <p>Pedagogia Waldorf, Arte-Educação, Metodologias Ativas, Educação Integral</p>
            </div>

            <div className="area-item">
              <h3>Antropologia</h3>
              <p>Antropologia Cultural, Simbolismo, Rituais, Estudos Culturais</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Desenvolvimento Docente</h2>
          <p>A FAFIH investe continuamente no desenvolvimento profissional de seu corpo docente através de:</p>
          <ul>
            <li>Programas de capacitação pedagógica</li>
            <li>Apoio à participação em congressos e eventos acadêmicos</li>
            <li>Incentivo à produção científica e artística</li>
            <li>Parcerias para intercâmbios acadêmicos</li>
            <li>Grupos de pesquisa interdisciplinares</li>
            <li>Sabbaticals para aprofundamento de estudos</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>Pesquisa e Extensão</h2>
          <p>Nossos professores estão ativamente envolvidos em projetos de pesquisa e extensão que enriquecem o ambiente acadêmico e conectam a universidade com a comunidade:</p>

          <h3>Linhas de Pesquisa Principais</h3>
          <ul>
            <li>Imaginário e Representações Simbólicas</li>
            <li>Arte e Contemporaneidade</li>
            <li>Filosofia e Práticas Educativas</li>
            <li>Psicologia Analítica e Cultura</li>
            <li>Literatura e Estudos Culturais</li>
            <li>Educação Integral e Desenvolvimento Humano</li>
          </ul>

          <h3>Projetos de Extensão</h3>
          <ul>
            <li>Oficinas de arte para a comunidade</li>
            <li>Ciclos de palestras e conferências</li>
            <li>Atendimento psicológico comunitário</li>
            <li>Projetos de arte-educação em escolas públicas</li>
            <li>Grupos de estudo abertos ao público</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>Contato com o Corpo Docente</h2>
          <p>Os estudantes podem entrar em contato com nossos professores através dos seguintes canais:</p>
          <ul>
            <li><strong>E-mail institucional:</strong> Cada professor possui e-mail institucional para contato acadêmico</li>
            <li><strong>Horários de atendimento:</strong> Horários específicos para orientação de estudantes</li>
            <li><strong>Plataforma acadêmica:</strong> Comunicação através do ambiente virtual de aprendizagem</li>
            <li><strong>Secretaria acadêmica:</strong> Intermediação de contatos quando necessário</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .content-section h2::after {
          display: none;
        }

        .content-section h2 {
          margin-bottom: 2rem;
        }
      `}</style>
    </section>
  );
};

export default CorpoDocenteContent;
