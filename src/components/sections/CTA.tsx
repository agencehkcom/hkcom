"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { GlowButton } from "@/components/shared/GlowButton";
import { Calendar, ArrowRight } from "lucide-react";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Glass card */}
          <div className="glass-heavy rounded-3xl p-12 glow-cyan">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Calendar className="w-10 h-10 text-white" />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("title")}
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground mb-8">{t("subtitle")}</p>

            {/* CTA Button */}
            <GlowButton size="lg" asChild>
              <a
                href="https://calendly.com/hkcom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                {t("button")}
                <ArrowRight className="w-5 h-5" />
              </a>
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
