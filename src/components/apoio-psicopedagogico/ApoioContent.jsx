import '@/components/domain/iniciacao-cientifica/iniciacao-cientifica.css';

const ApoioContent = () => {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Núcleo de Apoio Psicopedagógico (NAP)</h1>
        </div>

        <div className="conheca-intro">
          <p>A FAFIH conta com o Núcleo de Apoio Psicopedagógico - NAP, um espaço dedicado ao acolhimento, suporte e orientação para os estudantes, professores e colaboradores.</p>
        </div>

        <div className="ic-grid">
          <div className="ic-card">
            <h2>O que é o NAP?</h2>
            <p>O Núcleo de Apoio Psicopedagógico (NAP) da FAFIH tem como objetivo a promoção, por meio de orientação e aconselhamento psicopedagógico, do bem-estar dos relacionamentos interpessoais e institucionais dos membros da comunidade acadêmica. O foco do núcleo é apoiar os estudantes em sua adaptação à vida universitária, promover saúde mental e bem-estar e contribuir para a melhoria do processo de ensino-aprendizagem, visando ao desenvolvimento integral do aluno.</p>

            <h2>Como o NAP pode te ajudar?</h2>
            <p>No NAP, a comunidade acadêmica encontra uma equipe qualificada e preparada para apoiar em diversos aspectos. Destacam-se dentre as diversas funções do NAP:</p>
            <ul>
              <li>Oferecer suporte pedagógico e psicopedagógico às práticas acadêmicas, auxiliando no desenvolvimento cognitivo dos estudantes.</li>
              <li>Auxiliar os estudantes na integração ao contexto educacional e na superação de desafios, como a adaptação ao novo ambiente social acadêmico.</li>
              <li>Elaborar planos de orientação de estudos individualizados para estudantes que precisam de apoio na organização do tempo e no desenvolvimento de estratégias de aprendizagem (gestão do tempo, hábitos de estudo, técnicas de aprendizagem).</li>
              <li>Promover palestras, rodas de conversa e oficinas sobre temas relevantes para o desenvolvimento intelectual e emocional dos estudantes.</li>
              <li>Realizar atendimento psicológico emergencial e intervenções breves, através de aconselhamento, identificando as urgências subjetivas e propiciando reflexão para um posicionamento pessoal mais adequado.</li>
              <li>Atuar como mediador na resolução de eventuais conflitos entre aluno e aluno, aluno e professor, ou aluno e coordenação.</li>
              <li>Assessorar professores e coordenadores, identificando entraves no processo de ensino-aprendizagem e sugerindo estratégias psicopedagógicas para sua superação.</li>
            </ul>
            <h2>Quem pode acessar o NAP?</h2>
            <p>O NAP é um serviço voltado para os estudantes da graduação e pós-graduação, além de oferecer suporte aos coordenadores, professores e corpo técnico-administrativo da comunidade FAFIH.</p>

            <h2>Quando procurar o NAP?</h2>
            <p>Se você está enfrentando dificuldades como:</p>
            <ul>
              <li>Adaptação ao ambiente acadêmico ou sentimento de não pertencimento;</li>
              <li>Ansiedade intensa, desmotivação, estresse ou crises emocionais;</li>
              <li>Problemas relacionados ao aprendizado, concentração e organização;</li>
              <li>Necessidade de acolhimento, escuta qualificada ou orientação em momentos de crise.</li>
            </ul>
            <p><strong>Estamos prontos para te ouvir e ajudar.</strong></p>

            <h2>Como funciona o atendimento?</h2>
            <p>Os atendimentos do NAP são realizados de forma individual ou em grupo, com total sigilo e respeito. O agendamento pode ser feito diretamente pelo estudante, professor ou colaborador através do e-mail de contato do núcleo.</p>
            <p>É importante ressaltar que o NAP não realiza atendimento clínico contínuo (psicoterapia), mas oferece aconselhamento e, se necessário, realiza o encaminhamento para serviços especializados.</p>

            <div className="card-buttons">
              <a href="mailto:nap@fafih.edu.br" className="btn-card">Entrar em Contato</a>
            </div>
          </div>
        </div>

        <div className="page-actions">
          <a href="/" className="btn-page-action btn-secondary">Voltar</a>
        </div>
      </div>

      <style jsx>{`
        .ic-card h2::after {
          display: none !important;
        }

        .conheca-intro::before {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default ApoioContent;
