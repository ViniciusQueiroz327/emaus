import styles from "./Home.module.css";

import { memories } from "../../data/memories";

import GalleryItem from "../../components/GalleryItem/GalleryItem";

import { useState } from "react";

import { MusicPlayer } from "../../components/MusicPlayer/MusicPlayer";

import WelcomeModal from "../../components/WelcomeModal/WelcomeModal";

import DateChallenge from "../../components/DateChallenge/DateChallenge";

const particles = [
  "💕",
  "💖",
  "💗",
  "✨",
  "🌽"
];

export default function Home() {
  const [showChallenge, setShowChallenge] =
  useState(false);

  const [showWelcome, setShowWelcome] =
    useState(true);

  const [startMusic, setStartMusic] =
    useState(false);

  function handleStart() {
    setStartMusic(true);
    setShowWelcome(false);
  }

  return (
    <main className={styles.container}>
      <WelcomeModal
        open={showWelcome}
        onStart={handleStart}
      />

      <div className={styles.hearts}>
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className={styles.heart}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 120}vh`,
              animationDuration: `${15 + Math.random() * 15}s`,
              fontSize: `${1 + Math.random() * 2}rem`,
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
        <div className={styles.overlay}>
          <h1>
            Eu Te Amo ❤️
          </h1>
          <p>
            E escolheria você, sempre.
          </p>
        </div>
      </section>

      <section className={styles.gallery}>
        {memories.map((item, index) => (
          <GalleryItem
            key={index}
            src={item.src}
            type={item.type}
            reverse={index % 2 === 0}
          />
        ))}
      </section>

      <section className={styles.final}>
        <div>
          <h2>
            Hoje. Amanhã. Sempre. ❤️
          </h2>
          <button
            className={styles.secretButton}
            onClick={() =>
              setShowChallenge(true)
            }
          >
            Quero ver ein 👀
          </button>
        </div>
      </section>
      
      <MusicPlayer
        autoplay={startMusic}
        musicSrc="/music/perfect_ed_sheeran.mp3"
      />
      
      <DateChallenge
        open={showChallenge}
        onClose={() =>
          setShowChallenge(false)
        }
      />
    </main>
  );
}