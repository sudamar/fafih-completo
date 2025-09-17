const IniciacaoCientificaContent = () => {
  const programas = [
    {
      titulo: "Iniciação Científica",
      descricao: "O Programa Institucional de Bolsas de Iniciação Científica - PIBIC tem como objetivo criar mecanismos adicionais para estímulo à pesquisa discente, promover o fortalecimento das linhas de pesquisa da Faculdade, a integração entre graduação e pós-graduação e conceder de bolsas de estudos de Iniciação Científica, em face do orçamento estabelecido pela instituição ou da captação de recursos provenientes de parcerias com outras instituições, de acordo com os termos estabelecidos em Resolução própria.",
      botoes: [
        { texto: "Edital", link: "#" },
        { texto: "Manual de Iniciação Científica", link: "#" }
      ]
    },
    {
      titulo: "Iniciação à Docência",
      descricao: "O Programa de Bolsas de Iniciação à Docência - PIBID tem como objetivo fomentar a formação docente, promover o desenvolvimento de atividades de pesquisa e de práticas de ensino inovadoras que contribuam para a melhoria do ensino, propiciando uma reflexão sobre a relação teoria-prática no processo de aprendizagem docente e conceder de bolsas de estudos de Iniciação Científica, em face do orçamento estabelecido pela instituição ou da captação de recursos provenientes de parcerias com outras instituições, de acordo com os termos estabelecidos em Resolução própria.",
      botoes: [
        { texto: "Edital", link: "#" },
        { texto: "Manual de Iniciação à Docência", link: "#" }
      ]
    },
    {
      titulo: "Grupos de Iniciação Científica e à Docência",
      descricao: "Os grupos de iniciação científica e à docência têm a finalidade de assegurar a geração de conhecimento, oferecer um ambiente propício para desenvolver raciocínio científico e, sobretudo, combinar esforços para aprimorar a produção gerada por ele. Sob a liderança de um professor pesquisador com experiência na área, cada grupo tem o objetivo de conduzir a pesquisa e expandir o saber em seu determinado campo de trabalho.",
      botoes: [
        { texto: "Conheça nossos grupos", link: "#" }
      ]
    }
  ];

  return (
    <section className="page-section">
      <div className="container">
        <h1>Iniciação Científica</h1>

        <div className="conheca-intro">
          <p>Nossos programas de iniciação científica oferecem aos alunos a oportunidade de participar de projetos de pesquisa inovadores, desenvolvendo habilidades científicas e de avanço do conhecimento, sob a orientação de nossos renomados professores e com a possibilidade de bolsas de estudos.</p>
        </div>

        <div className="ic-grid">
          {programas.map((programa, index) => (
            <div key={index} className="ic-card">
              <h2>{programa.titulo}</h2>
              <p>{programa.descricao}</p>
              <div className="card-buttons">
                {programa.botoes.map((botao, btnIndex) => (
                  <a key={btnIndex} href={botao.link} className="btn-card">
                    {botao.texto}
                  </a>
                ))}
              </div>
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

export default IniciacaoCientificaContent;