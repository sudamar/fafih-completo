import Hero from '../components/index/Hero';
import About from '../components/index/About';
import Atendimentos from '../components/index/Atendimentos';
import Cursos from '../components/index/Cursos';
import Depoimentos from '../components/index/Depoimentos';
import Noticias from '../components/index/Noticias';

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Atendimentos />
      <Cursos />
      <Depoimentos />
      <Noticias />
    </main>
  );
};

export default IndexPage;