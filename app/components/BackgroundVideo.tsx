// app/components/BackgroundVideo.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./BackgroundVideo.module.css";

type BackgroundVideoProps = {
  pauseAtSeconds?: number;
};

export function BackgroundVideo({ pauseAtSeconds }: BackgroundVideoProps) {
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (pauseAtSeconds === undefined) {
      if (video.paused) {
        try {
          video.currentTime = 0;
        } catch {
          // ignore seek errors
        }
      }
      video.play().catch(() => {});
      return;
    }

    const setFrame = () => {
      try {
        video.currentTime = pauseAtSeconds;
      } catch {
        // ignore seek errors
      }
      video.pause();
    };

    if (video.readyState >= 1) {
      setFrame();
      return;
    }

    const handleLoaded = () => {
      setFrame();
      video.removeEventListener("loadedmetadata", handleLoaded);
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, [pauseAtSeconds]);

  // Se il video manca → fallback colore
  if (error) {
    return <div className={styles.videoFallback} />;
  }

  return (
    <video
      ref={videoRef}
      className={styles.backgroundVideo}
      autoPlay={pauseAtSeconds === undefined}
      loop={pauseAtSeconds === undefined}
      muted
      playsInline
      preload="auto"
      onError={() => setError(true)}
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
}
