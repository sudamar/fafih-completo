import FAQList from '@/components/perguntas-frequentes/FAQList';

const PerguntasFrequentesPage = () => {
  return (
    <div className="bg-gray-50">
      <main>
        <section className="page-section">
          <div className="container">
            <div className="section-header">
              <h1 className="page-title">Perguntas Frequentes</h1>
            </div>
            <FAQList />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PerguntasFrequentesPage;
