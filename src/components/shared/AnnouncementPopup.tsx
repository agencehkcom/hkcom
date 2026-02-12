"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { GlowButton } from "./GlowButton";

export function AnnouncementPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale() as "fr" | "en";

  useEffect(() => {
    // Vérifier si le popup a déjà été fermé dans cette session
    const hasSeenPopup = sessionStorage.getItem("hasSeenWebinarPopup");

    if (!hasSeenPopup) {
      // Afficher le popup après 3 secondes
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenWebinarPopup", "true");
  };

  const content = {
    fr: {
      badge: "Formations Gratuites",
      title: "Accédez à nos Webinaires",
      description: "Découvrez nos replays gratuits sur le marketing digital, LinkedIn et l'IA pour booster votre activité.",
      cta: "Voir les webinaires",
      dismiss: "Plus tard",
    },
    en: {
      badge: "Free Training",
      title: "Access our Webinars",
      description: "Discover our free replays on digital marketing, LinkedIn and AI to boost your business.",
      cta: "View webinars",
      dismiss: "Maybe later",
    },
  };

  const t = content[locale];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md"
          >
            <div className="relative bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Content */}
              <div className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>

                {/* Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {t.badge}
                </span>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-3">
                  {t.title}
                </h2>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {t.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <GlowButton asChild className="w-full">
                    <Link
                      href="/webinaires"
                      onClick={handleClose}
                      className="flex items-center justify-center gap-2"
                    >
                      {t.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </GlowButton>

                  <button
                    onClick={handleClose}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.dismiss}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
