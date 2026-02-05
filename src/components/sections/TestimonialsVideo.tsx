"use client";

import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export function TestimonialsVideo() {
  const t = useTranslations("testimonials");
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Éviter l'hydration mismatch et détecter mobile
  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Observer pour détecter quand la section est visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay blocked, c'est ok
            });
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [mounted, resolvedTheme, isMobile]);

  // Choisir la vidéo selon le thème et le format (mobile/desktop)
  const getVideoSrc = () => {
    const theme = resolvedTheme === "light" ? "light" : "dark";
    const format = isMobile ? "-mobile" : "";
    return `/videos/testimonials-${theme}${format}.mp4`;
  };

  const videoSrc = getVideoSrc();

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Video container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Aspect ratio container */}
            <div className={`relative ${isMobile ? "aspect-[9/16] max-h-[70vh]" : "aspect-video"}`}>
              {mounted && (
                <video
                  ref={videoRef}
                  key={videoSrc}
                  className="absolute inset-0 w-full h-full object-cover"
                  playsInline
                  muted
                  preload="auto"
                  loop
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              )}
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
