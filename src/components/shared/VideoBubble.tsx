"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoBubbleProps {
  videoAskId: string;
  className?: string;
  delay?: number; // Délai avant apparition (ms)
}

export function VideoBubble({
  videoAskId,
  className,
  delay = 3000,
}: VideoBubbleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  // Apparition avec délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  if (hasBeenDismissed) return null;

  return (
    <>
      {/* Bulle flottante */}
      <AnimatePresence>
        {isVisible && !isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className={cn(
              "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3",
              className
            )}
          >
            {/* Bouton fermer définitivement */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setHasBeenDismissed(true)}
              className="text-muted-foreground/60 hover:text-muted-foreground text-xs transition-colors"
            >
              Masquer
            </motion.button>

            {/* Bulle principale */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Cercle pulse animation */}
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />

              {/* Bulle */}
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25 flex items-center justify-center overflow-hidden border-2 border-white/20">
                {/* Icône vidéo */}
                <MessageCircle className="w-7 h-7 text-white" />
              </div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap"
              >
                <p className="text-sm font-medium">Une question ?</p>
                <p className="text-xs text-muted-foreground">
                  Cliquez pour discuter
                </p>
                {/* Flèche */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="border-8 border-transparent border-l-background/95" />
                </div>
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal VideoAsk */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Container vidéo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-md aspect-[9/16] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Bouton fermer */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* iframe VideoAsk */}
              <iframe
                src={`https://www.videoask.com/f${videoAskId}`}
                allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
                className="w-full h-full border-0"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
