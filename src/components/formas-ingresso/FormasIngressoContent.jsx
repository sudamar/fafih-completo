const formasIngresso = [
  {
    titulo: 'Vestibular',
    descricao:
      'Realize uma redação e uma prova com 15 questões de Matemática e Língua Portuguesa. Não cobramos taxa de inscrição e o resultado sai na hora.',
    botaoTexto: 'Saiba Mais e Inscreva-se',
    link: '#',
  },
  {
    titulo: 'ENEM',
    descricao:
      'Utilize sua nota do ENEM e ingresse sem novo vestibular. Uma forma prática de aproveitar seu desempenho e garantir sua vaga.',
    botaoTexto: 'Consulte as Condições',
    link: '#',
  },
  {
    titulo: 'Transferência Externa',
    descricao:
      'Continue sua graduação conosco. Solicite a transferência e aproveite disciplinas já cursadas, mediante análise curricular.',
    botaoTexto: 'Veja o Edital',
    link: '#',
  },
  {
    titulo: 'Portador de Diploma',
    descricao:
      'Já possui uma graduação? Inicie uma nova jornada eliminando matérias equivalentes (sujeito à análise acadêmica e disponibilidade de vagas).',
    botaoTexto: 'Inicie sua Solicitação',
    link: '#',
  },
];

const pageActions = [
  {
    texto: 'Voltar',
    href: '/',
    variant: 'secondary',
  },
  {
    texto: 'Edital do Processo Seletivo',
    href: '#',
    variant: 'secondary',
  },
  {
    texto: 'Inscreva-se Agora',
    href: '#',
    variant: 'primary',
  },
];

const FormasIngressoContent = () => {

  return (
    <section className="page-section">
      <div className="container">
        <h1>Formas de Ingresso</h1>
        <p className="page-intro">
          Descubra os caminhos para se tornar um aluno da FAFIH e iniciar sua jornada de transformação
          através do conhecimento.
        </p>

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
          {pageActions.map((acao) => (
            <a key={acao.texto} href={acao.href} className={`btn-page-action btn-${acao.variant}`}>
              {acao.texto}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormasIngressoContent;
