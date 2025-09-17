const FAQList = () => {
  const faqData = [
    {
      question: "Quais são os pré-requisitos para os cursos de Pós-Graduação?",
      answer: "Para ingressar em nossos cursos de Pós-Graduação Lato Sensu (Especialização), é necessário possuir diploma de conclusão de um curso de graduação reconhecido pelo MEC. Para alguns cursos específicos, como Arteterapia, recomendamos ter cursado nossa introdução à Psicologia Junguiana caso não tenha essa base."
    },
    {
      question: "Os cursos EAD são totalmente online?",
      answer: "Sim, nossos cursos na modalidade EAD são 100% online, com aulas síncronas (ao vivo), permitindo a interação em tempo real com professores e colegas. As aulas também são gravadas e disponibilizadas para que os alunos possam assistir posteriormente."
    },
    {
      question: "Como funciona o processo de matrícula?",
      answer: "O processo de matrícula pode ser iniciado através do nosso site, clicando no botão \"Inscreva-se\". Você será direcionado para o portal de inscrição, onde preencherá seus dados, enviará os documentos necessários e efetuará o pagamento da taxa de matrícula para garantir sua vaga."
    },
    {
      question: "A FAFIH oferece bolsas de estudo?",
      answer: "A FAFIH possui uma política de descontos e convênios. Recomendamos entrar em contato com nossa secretaria acadêmica através do e-mail contato@fafih.edu.br para verificar as condições e os programas de desconto disponíveis no momento."
    },
    {
      question: "Qual a diferença entre os cursos de Pós-Graduação e os de Curta Duração?",
      answer: "Os cursos de Pós-Graduação (Especialização) possuem uma carga horária maior (mínimo de 360 horas), são voltados para a formação de especialistas em uma determinada área e conferem o título de especialista. Já os cursos de Curta Duração (Extensão) são mais focados em temas específicos, possuem carga horária menor e conferem um certificado de participação ou atualização profissional."
    }
  ];

  return (
    <div>
      {faqData.map((faq, index) => (
        <details key={index} className="faq-item">
          <summary>{faq.question}</summary>
          <div className="faq-content">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
};

export default FAQList;