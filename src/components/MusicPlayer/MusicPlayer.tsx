import { useEffect, useRef, useState } from "react";

import styles from "./MusicPlayer.module.css";

interface Props {
  autoplay?: boolean;
  musicSrc: string;
}

export function MusicPlayer({
  autoplay = false,
  musicSrc,
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] =
    useState(false);

  const [volume, setVolume] =
    useState(0.25);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  useEffect(() => {
    if (
      autoplay &&
      audioRef.current
    ) {
      audioRef.current.play();

      setPlaying(true);
    }
  }, [autoplay]);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const handleVolumeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(
      e.target.value
    );

    setVolume(value);

    if (audioRef.current) {
      audioRef.current.volume =
        value;
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={musicSrc}
        loop
      />

      <div className={styles.player}>
        <button
          onClick={togglePlay}
          aria-label={
            playing
              ? "Pausar música"
              : "Tocar música"
          }
        >
          {playing ? "⏸️" : "▶️"}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </>
  );
}