import "./About.css";
import Carousel from "../Carousel/Carousel";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">
            Uma família reunida em Cristo
          </h2>
          <p className="about__text">
            A Kadosh é cercada por pessoas incríveis, que são alegres, divertidas, e acima de tudo, cheias da vida de Deus.
            Somos diferentes em histórias, personalidades e sonhos, mas fomos unidos por algo muito maior: Cristo.
          </p>
          <p className="about__text">
            Na célula, encontramos mais do que um lugar para estar.
            Encontramos uma família.
            É onde compartilhamos nossas alegrias, enfrentamos nossas lutas, aprendemos uns com os outros e crescemos juntos na fé.
          </p>
          <p className="about__text">
            Somos forjados por Cristo a cada encontro.
            Deus usa cada pessoa, cada conversa, cada oração e cada momento para nos transformar e nos aproximar ainda mais dEle.
            Aqui, ninguém caminha sozinho.
          </p>
          <p className="about__text">
            Somos uma geração que escolheu viver por algo maior.
            Uma família que deseja conhecer Jesus, torná-Lo conhecido e viver tudo aquilo que Ele sonhou para nós.
          </p>
        </div>
        <div className="about__gallery">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default About;