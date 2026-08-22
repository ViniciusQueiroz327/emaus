import styles from "./FirstDay.module.css";

import { MusicPlayer } from "../../components/MusicPlayer/MusicPlayer";

const particles = [
  "✨",
  "⭐",
  "🌟",
  "💫",
];

export default function FirstDay() {
  return (
    <main className={styles.container}>
      <div className={styles.stars}>
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={i}
            className={styles.star}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 120}vh`,
              animationDuration: `${15 + Math.random() * 15}s`,
              fontSize: `${0.8 + Math.random()}rem`,
            }}
          >
            {
              particles[
                Math.floor(
                  Math.random() * particles.length
                )
              ]
            }
          </span>
        ))}
      </div>

      <section className={styles.hero}>
        <img
          src="/imgs/iris-nebula.jpg"
          alt="The Iris Nebula"
        />

        <h1>
          The Iris Nebula
        </h1>

        <p className={styles.date}>
          Foto tirada dia 16 de Janeiro de 2026 pela NASA
        </p>
      </section>

      <section className={styles.card}>
        <p>
          Essas nuvens cósmicas floresceram a
          cerca de 1.300 anos-luz de distância,
          nos férteis campos estelares da
          constelação de Cepheus.
        </p>

        <p>
          Conhecida como Iris Nebulosa,
          NGC 7023 não é a única nebulosa que
          lembra a imagem de flores.
        </p>

        <p>
          Ainda assim, esta profunda imagem
          telescópica revela uma incrível gama
          de cores e simetrias envoltas por
          campos de poeira interestelar.
        </p>

        <p>
          No interior da nebulosa, o material
          cósmico empoeirado envolve uma estrela
          quente e jovem.
        </p>
      </section>

      <section className={styles.message}>
        <h2>
          ❤️ Sob o mesmo céu...
        </h2>

        <p>
          Assim como a jovem estrela fotografada
          naquele dia, nosso amor também estava
          em seus primeiros estágios.
        </p>

        <p>
          Era algo ainda novo, mas já brilhava
          intensamente pelo amor de Cristo que
          habita em nós.
        </p>

        <p>
          E da mesma forma que aquela estrela
          continua iluminando a Iris Nebulosa,
          desejo que o nosso amor continue
          crescendo, amadurecendo e brilhando
          todos os dias.
        </p>

        <p>
          Que nunca percamos de vista Aquele
          que é a verdadeira fonte da nossa luz.
        </p>

        <p className={styles.finalText}>
          Até que um dia possamos voltar para o
          Pai, juntos. ❤️
        </p>
      </section>

      <MusicPlayer
        autoplay
        musicSrc="/music/never_be_alone_shawn_mendes.mp3"
      />
    </main>
  );
}