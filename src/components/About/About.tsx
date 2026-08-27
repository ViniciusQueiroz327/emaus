import "./About.css";
import Carousel from "../Carousel/Carousel";

interface AboutProps {
  title: string;
  text: string;
  images: string[];
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">
            
          </h2>
          <p className="about__text">
            
          </p>
          <p className="about__text">
            
          </p>
          <p className="about__text">
            
          </p>
          <p className="about__text">
            
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