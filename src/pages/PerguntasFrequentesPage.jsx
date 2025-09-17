import FAQList from '../components/perguntas-frequentes/FAQList';

const PerguntasFrequentesPage = () => {
  return (
    <main>
      <section className="page-section">
        <div className="container">
          <h1>Perguntas Frequentes</h1>
          <FAQList />
        </div>
      </section>
    </main>
  );
};

export default PerguntasFrequentesPage;