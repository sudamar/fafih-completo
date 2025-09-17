const Depoimentos = () => {
  const depoimentos = [
    {
      nome: "Maria Clara Souza",
      info: "Aluna de Psicologia Junguiana",
      texto: "A FAFIH abriu minha mente para novas formas de pensar e criar. A abordagem transdisciplinar é um diferencial incrível."
    },
    {
      nome: "Dr. João Santos",
      info: "Professor de Psicossomática",
      texto: "Lecionar na FAFIH é participar de uma revolução educacional. Aqui, teoria e prática se encontram com a alma."
    },
    {
      nome: "Ana Beatriz Lima",
      info: "Egressa de Arteterapia",
      texto: "O curso de Arteterapia foi transformador, não apenas para minha carreira, mas para minha vida pessoal. Recomendo a todos."
    },
    {
      nome: "Ana Costa",
      info: "Aluna de Arteterapia",
      texto: "A abordagem transdisciplinar me permitiu conectar arte, psicologia e espiritualidade de forma única."
    }
  ];

  return (
    <section id="depoimentos">
      <div className="container">
        <h2>Depoimentos</h2>
        <div className="depoimentos-grid">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="depoimento-card">
              <div className="depoimento-placeholder">Foto do {depoimento.info.includes('Professor') ? 'Professor' : depoimento.info.includes('Egress') ? 'Egressa' : 'Aluno'}</div>
              <p>"{depoimento.texto}"</p>
              <h4>{depoimento.nome}</h4>
              <span className="aluno-info">{depoimento.info}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;