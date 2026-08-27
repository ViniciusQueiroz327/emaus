import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Leadership from "../../components/Leadership/Leadership";
import CellsCarousel from "../../components/CellsCarousel/CellsCarousel";
import { emaus } from "../../data/emaus"

import "./Emaus.css";

function Emaus() {
  return (
    <main
      className="emaus"
      style={{
        "--page-primary": emaus.theme.primary,
        "--page-secondary": emaus.theme.secondary,
        "--page-background": `url("${emaus.theme.background}")`,
      } as React.CSSProperties}
    >
      <Hero
        logo={emaus.hero.logo}
        secondaryLogo={emaus.hero.secondaryLogo}
        alt="Emaús"
      />
      <About />
      <Leadership />
      <CellsCarousel />
    </main>
  );
}

export default Emaus;