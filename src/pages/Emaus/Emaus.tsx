import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Leadership from "../../components/Leadership/Leadership";
import CellsCarousel from "../../components/CellsCarousel/CellsCarousel";

import "./Emaus.css";

function Emaus() {
  return (
    <main className="emaus">
      <Hero
        logo="/imgs/emaus/arts/Emaus_no_bg.png"
        secondaryLogo="/imgs/emaus/arts/E_Emaus_no_bg.png"
        alt="Emaús"
      />
      <About />
      <Leadership />
      <CellsCarousel />
    </main>
  );
}

export default Emaus;