import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Leadership from "../../components/Leadership/Leadership";
import CellsCarousel from "../../components/CellsCarousel/CellsCarousel";

import "./Emaus.css";

function Emaus() {
  return (
    <main className="emaus">
      <Hero />
      <About />
      <Leadership />
      <CellsCarousel />
    </main>
  );
}

export default Emaus;