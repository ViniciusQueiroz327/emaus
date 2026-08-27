import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Members from "../../components/Members/Members";
import BibleVerse from "../../components/BibleVerse/BibleVerse";
// import "./Home.css";

function Kadosh() {
  return (
    <main className="home">
      <Hero
        logo="/imgs/kadosh/arts/Kadosh_no_bg.png"
        secondaryLogo="/imgs/kadosh/arts/K_Kadosh_no_bg.png"
        alt="Kadosh"
      />
      <About />
      <Members />
      <BibleVerse />
    </main>
  );
}

export default Kadosh;