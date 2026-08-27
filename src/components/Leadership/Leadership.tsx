import { leadership } from "../../data/Emaus/leadership";

import "./Leadership.css";

function Leadership() {
  return (
    <section className="leadership">
      <div className="leadership__container">
        <header className="leadership__header">
          <span className="leadership__subtitle">
            REDE EMAÚS
          </span>

          <h2 className="leadership__title">
            Nossa Liderança
          </h2>
        </header>

        <div className="leadership__list">
          {leadership.map((person) => (
            <article
              className="leadership__member"
              key={person.name}
            >
              <img
                className="leadership__image"
                src={person.image}
                alt={person.name}
              />

              <div className="leadership__info">
                <h3 className="leadership__name">
                  {person.name}
                </h3>

                <span className="leadership__role">
                  {person.role}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;