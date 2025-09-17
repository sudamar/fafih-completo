const Atendimentos = () => {
  const focos = [
    {
      title: "Arte e Criatividade",
      description: "Estudo da criatividade como força motriz da cultura e da evolução humana."
    },
    {
      title: "Filosofia e Pensamento Crítico",
      description: "Investigação de questões éticas, metafísicas e epistemológicas, promovendo diálogos entre a filosofia clássica, contemporânea e perspectivas não-ocidentais."
    },
    {
      title: "Imaginário Humano",
      description: "Exploração do papel da imaginação na construção de mitos, símbolos, narrativas e identidades. Interseção entre psicologia, antropologia, literatura e estudos culturais."
    },
    {
      title: "Transdisciplinaridade",
      description: "Projetos que conectam arte, filosofia, ciências sociais, ciências da religião, psicologia e tecnologia, incluindo realidade virtual, arte generativa e IA."
    },
    {
      title: "Impacto Social",
      description: "Discussão sobre como a arte, a filosofia e as religiões podem responder a desafios globais, destacando as humanidades como ferramentas de transformação individual e coletiva. Promoção da integração do Homo Sapiens com o Homo Philosophicus (ética das consequências), Homo Religiosus (relegere e não religare) e Homo Ludens (aquele que se diverte na diversidade)."
    }
  ];

  return (
    <div id="focos" style={{ padding: '5rem 8%' }}>
      <div className="container">
        <h2>Nossos Focos Acadêmicos</h2>
        <div className="focos-grid">
          {focos.map((foco, index) => (
            <div key={index} className="foco-card">
              <div className="foco-card-inner">
                <div className="foco-card-front">
                  <h3>{foco.title}</h3>
                </div>
                <div className="foco-card-verso">
                  <ul>
                    <li>{foco.description}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Atendimentos;