// app/components/BackgroundVideo.tsx
"use client";

import { useState } from "react";
import styles from "./BackgroundVideo.module.css";

export function BackgroundVideo() {
  const [error, setError] = useState(false);

  // Se il video manca → fallback colore
  if (error) {
    return <div className={styles.videoFallback} />;
  }

  return (
    <video
      className={styles.backgroundVideo}
      autoPlay
      loop
      muted
      playsInline
      onError={() => setError(true)}
    >
      <source src="/video/bg.mp4" type="video/mp4" />
    </video>
  );
}
