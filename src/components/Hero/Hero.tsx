import "./Hero.css";

function Hero() {
  const scrollToAbout = () => {
    const start = window.scrollY;
    const target = window.innerHeight;
    const distance = target - start;

    const duration = 100;
    let startTime: number | null = null;

    const easeInOutQuart = (t: number) => {
      return t < 0.5
        ? 8 * t * t * t * t
        : 1 - Math.pow(-2 * t + 2, 4) / 2;
    };

    const animateScroll = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeInOutQuart(progress);

      window.scrollTo(0, start + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <img
          className="hero__logo"
          src="/imgs/logo/Kadosh_no_bg.png"
          alt="KADOSH"
        />

        <img
          className="k_kadosh__logo"
          src="/imgs/logo/K_Kadosh_no_bg.png"
          alt="KADOSH"
        />
      </div>

      <button
        className="hero__scroll-indicator"
        onClick={scrollToAbout}
        aria-label="Ir para a seção Sobre Nós"
      >
        <span className="hero__scroll-arrow"></span>
      </button>
    </section>
  );
}

export default Hero;