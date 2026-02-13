"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

import { GlassCard } from "@/components/shared/GlassCard";
import { GlowButton } from "@/components/shared/GlowButton";
import { AidesShapes } from "@/components/shared/AnimatedShapes";
import {
  BadgeCheck,
  Euro,
  FileCheck,
  Handshake,
  Rocket,
  Shield,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: Euro,
    title: { fr: "Aide financière", en: "Financial aid" },
    description: {
      fr: "Bénéficiez d'une aide financière pour votre projet de digitalisation",
      en: "Benefit from financial aid for your digitalization project",
    },
    color: "from-secondary to-secondary/50",
    shadowColor: "shadow-secondary/20",
  },
  {
    icon: FileCheck,
    title: { fr: "Démarches simplifiées", en: "Simplified procedures" },
    description: {
      fr: "Nous gérons toutes les démarches administratives pour vous",
      en: "We handle all administrative procedures for you",
    },
    color: "from-primary to-primary/50",
    shadowColor: "shadow-primary/20",
  },
  {
    icon: Handshake,
    title: { fr: "Accompagnement personnalisé", en: "Personalized support" },
    description: {
      fr: "Un interlocuteur unique pour votre projet de A à Z",
      en: "A single point of contact for your project from A to Z",
    },
    color: "from-accent to-accent/50",
    shadowColor: "shadow-accent/20",
  },
];

const eligibilityCriteria = [
  { fr: "TPE/PME de moins de 250 salariés", en: "SMEs with less than 250 employees" },
  { fr: "Siège social en France", en: "Headquarters in France" },
  { fr: "Projet de transformation digitale", en: "Digital transformation project" },
  { fr: "Première demande d'aide numérique", en: "First digital aid application" },
];

const stats = [
  { value: "100%", labelFr: "taux de réussite", labelEn: "success rate", icon: TrendingUp },
  { value: "48h", labelFr: "délai moyen", labelEn: "average time", icon: Clock },
  { value: "50+", labelFr: "dossiers accompagnés", labelEn: "applications supported", icon: Award },
];

export function AidesNumeriques() {
  const locale = useLocale() as "fr" | "en";

  return (
    <section id="aides-numeriques" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <AidesShapes />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 relative">
        {/* Badge France Num avec logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 shadow-lg shadow-secondary/10"
          >
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-secondary">
              {locale === "fr" ? "Activateur France Num Certifié" : "Certified France Num Activator"}
            </span>
            <BadgeCheck className="w-5 h-5 text-secondary" />
          </motion.div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {locale === "fr" ? (
              <>
                Êtes-vous éligible aux{" "}
                <span className="text-gradient-animated">Aides Numériques</span> ?
              </>
            ) : (
              <>
                Are you eligible for{" "}
                <span className="text-gradient-animated">Digital Subsidies</span>?
              </>
            )}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {locale === "fr"
              ? "En tant qu'Activateur France Num, nous accompagnons les TPE/PME dans leur transformation digitale et les aidons à bénéficier des aides disponibles."
              : "As a France Num Activator, we support SMEs in their digital transformation and help them benefit from available subsidies."}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-5 group" hover>
                  <div className="flex gap-4 items-start">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg ${benefit.shadowColor}`}
                    >
                      <benefit.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                        {benefit.title[locale]}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description[locale]}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <GlowButton size="lg" asChild>
                <Link href="/#contact" className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {locale === "fr" ? "Vérifier mon éligibilité" : "Check my eligibility"}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </GlowButton>
            </motion.div>
          </motion.div>

          {/* Right - Eligibility Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 border-secondary/20 relative overflow-hidden" glow="cyan">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-2xl" />

              {/* Header */}
              <div className="flex items-center gap-4 mb-8 relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg shadow-secondary/30"
                >
                  <Rocket className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold">
                    {locale === "fr" ? "Critères d'éligibilité" : "Eligibility Criteria"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === "fr" ? "Vérifiez si vous êtes éligible" : "Check if you qualify"}
                  </p>
                </div>
              </div>

              {/* Criteria List */}
              <ul className="space-y-4 mb-8 relative">
                {eligibilityCriteria.map((criteria, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-background/50 hover:bg-secondary/5 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-sm font-medium">{criteria[locale]}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Info Box */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 relative"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span className="font-semibold">
                    {locale === "fr" ? "100% gratuit et sans engagement" : "100% free, no commitment"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {locale === "fr"
                    ? "Réponse sous 24h avec une estimation personnalisée de votre aide"
                    : "Response within 24h with a personalized estimate of your subsidy"}
                </p>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>

        {/* France Num Offers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-center mb-8">
            {locale === "fr" ? "Nos accompagnements pris en charge" : "Our covered support programs"}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src="/images/marketing/aide-seo.png"
                alt={locale === "fr" ? "Accompagnement SEO et Google - 100% pris en charge" : "SEO and Google Support - 100% covered"}
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src="/images/marketing/aide-reseaux.png"
                alt={locale === "fr" ? "Accompagnement réseaux sociaux - 100% pris en charge" : "Social Media Support - 100% covered"}
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <GlassCard className="p-5 text-center h-full" hover>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {locale === "fr" ? stat.labelFr : stat.labelEn}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
