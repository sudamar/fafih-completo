import { MembrosAnalistasDirectory } from '@/components/domain/membros-analistas';

const MembrosAnalistasPage = () => {
  return (
    <div className="bg-gray-50">
      <main>
        <section className="page-section">
          <div className="container">
            <h1 className="page-title">Nossos Membros Analistas</h1>
            <MembrosAnalistasDirectory showIntro={true} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MembrosAnalistasPage;
