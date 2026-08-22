import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import styles from "./GalleryItem.module.css";

interface Props {
  src: string;
  type: "image" | "video";
  reverse?: boolean;
}

export default function GalleryItem({
  src,
  type,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (type !== "video") return;

    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [type]);

  const rotations = ["-3deg", "2deg", "-2deg", "4deg"];
  const rotation =
    rotations[
      Math.floor(Math.random() * rotations.length)
    ];

  return (
    <motion.div
      className={styles.container}
      style={{
        rotate: rotation,
      }}
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <div
        className={
          type === "image"
            ? styles.polaroid
            : styles.film
        }
      >
        {type === "image" ? (
          <img src={src} alt="" />
        ) : (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={src} />
          </video>
        )}
      </div>

    </motion.div>
  );
}