import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Members from "../../components/Members/Members";
import BibleVerse from "../../components/BibleVerse/BibleVerse";

import { cells } from "../../data/cells";

import "./Kadosh.css";

function Kadosh() {
  const kadosh = cells.find((cell) => cell.id === "kadosh");

  if (!kadosh) {
    return null;
  }

  return (
    <main
      className="kadosh"
      style={{
        "--page-primary": kadosh.colors.primary,
        "--page-secondary": kadosh.colors.secondary,
        "--page-background": `url("${kadosh.colors.background}")`,
      } as React.CSSProperties}
    >
      <Hero
        logo={kadosh.hero.logo}
        secondaryLogo={kadosh.hero.secondaryLogo}
        alt={kadosh.name}
      />
      <About
        title={kadosh.about.title}
        text={kadosh.about.text}
        images={kadosh.about.images}
      />
      <Members />
      <BibleVerse />
    </main>
  );
}

export default Kadosh;