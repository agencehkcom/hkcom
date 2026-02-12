"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ExternalLink, Star, CheckCircle } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";

const certifications = [
  {
    name: "France Num",
    description: {
      fr: "Activateur certifié pour la transformation digitale des TPE/PME",
      en: "Certified activator for SME digital transformation",
    },
    logo: "/images/marque-Activateur-France-Num-72dpi.jpeg",
    verified: true,
  },
  {
    name: "Google Ads Certification",
    description: {
      fr: "Expertise certifiée en publicité Google Ads",
      en: "Certified expertise in Google Ads advertising",
    },
    logo: "/images/certifications/google-partner.png",
    verified: true,
  },
  {
    name: "Meta Certified",
    description: {
      fr: "Community Manager certifié Meta",
      en: "Meta Certified Community Manager",
    },
    logo: "/images/certifications/meta-partner.png",
    verified: true,
  },
];

const stats = [
  { value: "98%", label: { fr: "Satisfaction client", en: "Client satisfaction" } },
  { value: "200+", label: { fr: "Clients accompagnés", en: "Clients supported" } },
  { value: "5+", label: { fr: "Années d'expérience", en: "Years of experience" } },
  { value: "70+", label: { fr: "Avis Google", en: "Google reviews" } },
];

export function Certifications() {
  const t = useTranslations("certifications");
  const locale = useLocale() as "fr" | "en";

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">{t("badge")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("title")} <span className="text-gradient">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl glass"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-animated mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label[locale]}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full text-center group" hover>
                {/* Logo */}
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
                  {cert.logo ? (
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <Award className="w-12 h-12 text-primary" />
                  )}
                </div>

                {/* Verified Badge */}
                {cert.verified && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium mb-3">
                    <CheckCircle className="w-3 h-3" />
                    {t("verified")}
                  </div>
                )}

                {/* Name */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {cert.description[locale]}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <GlassCard className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                {/* Google Logo */}
                <div className="w-12 h-12 relative">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold">5.0</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {locale === "fr" ? "Basé sur 70+ avis Google" : "Based on 70+ Google reviews"}
                  </p>
                </div>
              </div>
              <a
                href="https://g.page/r/CQdFH8BdH3NXEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                {locale === "fr" ? "Voir nos avis" : "See our reviews"}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* All Certifications Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/certifications/certifications-all.png"
              alt={locale === "fr" ? "HKCOM - Agence certifiée Meta, Google, France Num" : "HKCOM - Agency certified by Meta, Google, France Num"}
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
