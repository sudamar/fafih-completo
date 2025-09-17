import styles from './NoticiasCursosContent.module.css';

const NoticiasCursosContent = () => {
  return (
    <section className="page-section">
      <div className="container">
        <h1>Cursos de Psicologia Junguiana; Arteterapia e Psicossomática</h1>

        <div className={styles.articleContent}>
          <p>
            <strong>No primeiro semestre de 2024, no mês de março, estará acontecendo presencialmente e na modalidade EAD, nas cidades de Brasília, Rio de Janeiro e São Paulo, a primeira aula dos cursos de pós-graduação lato-sensu que titulam e formam especialistas em:</strong>
          </p>

          <div className={styles.coursesList}>
            <div className={styles.courseItem}>
              <h3>Psicologia Junguiana</h3>
              <p>(A psicologia analítica de Carl Gustav Jung).</p>
            </div>

            <div className={styles.courseItem}>
              <h3>Psicossomática Junguiana</h3>
              <p>(Os sintomas como expressões simbólicas do Self).</p>
            </div>

            <div className={styles.courseItem}>
              <h3>Arteterapia e Expressões Criativas</h3>
              <p>(O fazer simbólico da alma).</p>
            </div>
          </div>

          <p>
            Na primeira aula o prof. Waldemar Magaldi faz a explanação dos cursos, abrangendo os principais fundamentos da PSICOLOGIA ANALÍTICA de CARL GUSTAV JUNG, esclarecendo dúvidas a respeito da formação, aprofundando e diferenciando os conceitos básicos de instinto e arquétipos; consciente e inconsciente; angústia vital, como pulsão criativa e curativa do si mesmo, rumo ao processo de individuação e a simbologia do adoecer do homem contemporâneo. Estes temas são fundantes para todos os cursos.
          </p>

          <p>
            Contamos com sua presença como aluno, assim com sua ajuda em divulgar para seus conhecidos, que possam interessar-se por este universo teórico que estimula a autoconsciência e o autoconhecimento.
          </p>

          <div className={styles.highlight}>
            <p>
              O material das aulas é colocado no site da FAFIH um mês antes do início do curso. Para isso, os alunos que já formalizaram suas matrículas precisam fazer o cadastro na área de aluno, para poder baixar o material das aulas no site da FAFIH: www.fafih.edu.br
            </p>
          </div>

          <div className={styles.scheduleInfo}>
            <h3>Informações Importantes:</h3>
            <ul>
              <li>As aulas acontecem em um sábado por mês</li>
              <li>Modalidades: Presencial e EAD</li>
              <li>Cidades: Brasília, Rio de Janeiro e São Paulo</li>
            </ul>
          </div>

          <div className={styles.enrollmentBanner}>
            <h2>INSCRIÇÕES ABERTAS</h2>
            <p>Não perca a oportunidade de se especializar em Psicologia Analítica!</p>
          </div>
        </div>

        <div className="page-actions">
          <a href="/" className="btn-page-action btn-secondary">Voltar para Notícias</a>
        </div>
      </div>
    </section>
  );
};

export default NoticiasCursosContent;