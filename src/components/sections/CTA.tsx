"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlowButton } from "@/components/shared/GlowButton";
import { Calendar, ArrowRight } from "lucide-react";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/marketing/100-avis.png"
                alt="+100 avis 5 étoiles HKCOM"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-heavy rounded-3xl p-10 glow-cyan">
              {/* Icon */}
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("title")}
              </h2>

              {/* Subtitle */}
              <p className="text-lg text-muted-foreground mb-8">
                {t("subtitle")}
              </p>

              {/* CTA Button */}
              <GlowButton size="lg" asChild>
                <a
                  href="https://calendly.com/hkcom/appel-de-decouverte"
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
      </div>
    </section>
  );
}
