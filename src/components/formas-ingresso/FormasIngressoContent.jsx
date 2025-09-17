const FormasIngressoContent = () => {
  const formasIngresso = [
    {
      titulo: "Vestibular",
      descricao: "Realize uma redação e uma prova com 15 questões de Matemática e Língua Portuguesa. Uma forma clássica de avaliar suas habilidades e garantir sua vaga. Não tem taxa de inscrição e o resultado é imediato.",
      botaoTexto: "Saiba Mais e Inscreva-se",
      link: "#"
    },
    {
      titulo: "ENEM",
      descricao: "Utilize sua nota do Exame Nacional do Ensino Médio (ENEM) para ingressar em nossos cursos sem fazer vestibular. Uma maneira prática de aproveitar seu desempenho nessa avaliação.",
      botaoTexto: "Consulte as Condições",
      link: "#"
    },
    {
      titulo: "Transferência Externa",
      descricao: "Já está cursando em outra instituição e deseja fazer parte da FAFIH? Solicite a transferência e continue seus estudos conosco, aproveitando as disciplinas já cursadas (sujeito à análise curricular).",
      botaoTexto: "Veja o Edital",
      link: "#"
    },
    {
      titulo: "Portador de Diploma (Segunda Graduação)",
      descricao: "Já possui um diploma de nível superior e quer fazer uma nova graduação? Aqui, você pode ingressar em um novo curso de graduação sem a necessidade de um novo vestibular e ainda elimina as disciplinas que já estudou no curso anterior (sujeito à análise curricular e vagas).",
      botaoTexto: "Inicie sua Solicitação",
      link: "#"
    }
  ];

  return (
    <section className="page-section">
      <div className="container">
        <h1>Formas de Ingresso</h1>

        <div className="conheca-intro">
          <p>Descubra os caminhos para se tornar um aluno da FAFIH e iniciar sua jornada de transformação através do conhecimento.</p>
        </div>

        <div className="ingresso-grid">
          {formasIngresso.map((forma, index) => (
            <div key={index} className="ingresso-card">
              <h2>{forma.titulo}</h2>
              <p>{forma.descricao}</p>
              <a href={forma.link} className="btn-card">{forma.botaoTexto}</a>
            </div>
          ))}
        </div>

        <div className="page-actions">
          <a href="/" className="btn-page-action btn-secondary">Voltar</a>
        </div>
      </div>
    </section>
  );
};

export default FormasIngressoContent;