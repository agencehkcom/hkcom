"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

interface AnnouncementBarProps {
  className?: string;
}

const announcements = {
  fr: {
    text: "Accédez gratuitement à tous nos webinaires et formations",
    cta: "Voir les replays",
    link: "/webinaires",
  },
  en: {
    text: "Access all our webinars and training sessions for free",
    cta: "Watch replays",
    link: "/webinaires",
  },
};

export function AnnouncementBar({ className }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const locale = useLocale() as "fr" | "en";
  const t = announcements[locale];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className={`bg-gradient-to-r from-primary via-primary/90 to-secondary text-white ${className}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 py-2 text-sm">
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 fill-current" />
              <span>{t.text}</span>
            </div>
            <Link
              href={t.link}
              className="font-semibold underline underline-offset-2 hover:no-underline transition-all"
            >
              {t.cta}
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
