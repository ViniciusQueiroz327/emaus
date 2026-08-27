import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Members from "../../components/Members/Members";
import BibleVerse from "../../components/BibleVerse/BibleVerse";
import { cells } from "../../data/cells"

function Kadosh() {
  return (
    <main className="home">
      <Hero
        logo={cells.hero.logo}
        secondaryLogo={cells.hero.secondaryLogo}
        alt={cells.name}
      />
      <About />
      <Members />
      <BibleVerse />
    </main>
  );
}

export default Kadosh;