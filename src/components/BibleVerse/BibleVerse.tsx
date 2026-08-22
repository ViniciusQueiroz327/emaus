import "./BibleVerse.css";

function BibleVerse() {
  return (
    <section className="bible-verse">
      <div className="bible-verse__container">
        <div className="bible-verse__content">
          <span className="bible-verse__subtitle">
            NOSSA INSPIRAÇÃO
          </span>

          <blockquote className="bible-verse__text">
            "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito,
            para que todo o que nele crê não pereça, mas tenha a vida eterna"
          </blockquote>

          <span className="bible-verse__reference">
            João 3:16
          </span>
        </div>

        <div className="bible-verse__image">
            <img
                className="hero__logo"
                src="/imgs/bible_verse/cruz_1.png"
                alt="KADOSH"
            />
        </div>
      </div>
    </section>
  );
}

export default BibleVerse;