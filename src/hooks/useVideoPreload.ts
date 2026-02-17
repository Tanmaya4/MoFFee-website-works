import { useCallback, useEffect, useRef, useState } from "react";

export function useVideoPreload(src: string, playbackRate = 1) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(
    null
  );
  const [isReady, setIsReady] = useState(false);

  // Callback ref so we know the moment the <video> element mounts / unmounts.
  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    videoRef.current = node;
    setVideoElement(node);
  }, []);

  // Ask the browser to fetch the video early so it is ready when we render.
  useEffect(() => {
    if (typeof document === "undefined" || !src) return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.href = src;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [src]);

  // Mark the video as ready once it can play, then bump playback speed.
  useEffect(() => {
    const video = videoElement;
    if (!video) return;

    const handleReady = () => {
      video.playbackRate = playbackRate;
      setIsReady(true);
      // Best effort autoplay after preloading.
      void video.play();
    };

    // If the video was already loaded (e.g. from the preload link), fire now.
    if (video.readyState >= 3) {
      handleReady();
      return;
    }

    video.addEventListener("canplaythrough", handleReady);
    video.addEventListener("loadeddata", handleReady);
    video.load();

    return () => {
      video.removeEventListener("canplaythrough", handleReady);
      video.removeEventListener("loadeddata", handleReady);
    };
  }, [videoElement, playbackRate, src]);

  return { videoRef: setVideoRef, isReady };
}
