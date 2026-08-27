import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Members from "../../components/Members/Members";
import BibleVerse from "../../components/BibleVerse/BibleVerse";
// import "./Home.css";

function Kadosh() {
  return (
    <main className="home">
      <Hero />
      <About />
      <Members />
      <BibleVerse />
    </main>
  );
}

export default Kadosh;