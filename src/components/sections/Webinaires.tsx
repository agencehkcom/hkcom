"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/GlassCard";
import { GlowButton } from "@/components/shared/GlowButton";
import { Link } from "@/i18n/navigation";
import {
  Play,
  Calendar,
  Clock,
  Users,
  Sparkles,
  Linkedin,
  TrendingUp,
  Bot,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const webinaires = [
  {
    id: 1,
    title: {
      fr: "Optimiser & Rendre Rentable son Site Grâce à l'IA",
      en: "Optimize & Make Your Website Profitable with AI",
    },
    description: {
      fr: "Méthode en 4 étapes pour générer plus de conversions sans compétences techniques",
      en: "4-step method to generate more conversions without technical skills",
    },
    date: "13 novembre 2025",
    duration: "45 min",
    icon: Bot,
    color: "from-primary to-cyan-500",
    highlights: {
      fr: [
        "Identification des blocages de conversion",
        "Optimisation via l'IA sans code",
        "Leviers UX, SEO et preuve sociale",
        "Structure de pages jusqu'à 5% de conversion",
      ],
      en: [
        "Identify conversion blockers",
        "AI optimization without code",
        "UX, SEO and social proof levers",
        "Page structure up to 5% conversion",
      ],
    },
    target: {
      fr: "Architectes, décorateurs d'intérieur, entrepreneurs",
      en: "Architects, interior designers, entrepreneurs",
    },
    replayUrl: "https://youtu.be/p0nVpD74bro",
    isNew: true,
  },
  {
    id: 2,
    title: {
      fr: "Comment Obtenir des Clients sur LinkedIn",
      en: "How to Get Clients on LinkedIn",
    },
    description: {
      fr: "Stratégie en 4 étapes pour une prospection LinkedIn efficace et automatisée",
      en: "4-step strategy for effective and automated LinkedIn prospecting",
    },
    date: "26 juin 2025",
    duration: "60 min",
    icon: Linkedin,
    color: "from-[#0077B5] to-blue-600",
    highlights: {
      fr: [
        "Cibler les 2% de décideurs actifs",
        "Automatisation via Waalaxy (40% de réponses)",
        "Messages et visuels performants",
        "Dashboard de suivi des résultats",
      ],
      en: [
        "Target the 2% active decision makers",
        "Automation via Waalaxy (40% response rate)",
        "High-performing messages and visuals",
        "Results tracking dashboard",
      ],
    },
    target: {
      fr: "Freelances, consultants, agences B2B",
      en: "Freelancers, consultants, B2B agencies",
    },
    replayUrl: "https://youtu.be/BFWdNTRwmlk",
    isNew: false,
  },
  {
    id: 3,
    title: {
      fr: "Les Réseaux Sociaux et Google pour Transformer votre Activité",
      en: "Social Media and Google to Transform Your Business",
    },
    description: {
      fr: "Alliance Social Ads (Meta, LinkedIn, TikTok) + Google Ads pour un écosystème d'acquisition complet",
      en: "Social Ads alliance (Meta, LinkedIn, TikTok) + Google Ads for a complete acquisition ecosystem",
    },
    date: "Disponible",
    duration: "50 min",
    icon: TrendingUp,
    color: "from-secondary to-violet-600",
    highlights: {
      fr: [
        "Stratégie multicanale efficace",
        "Synergie Meta + Google Ads",
        "Retargeting et audiences similaires",
        "Mesurer et optimiser le ROI",
      ],
      en: [
        "Effective multi-channel strategy",
        "Meta + Google Ads synergy",
        "Retargeting and lookalike audiences",
        "Measure and optimize ROI",
      ],
    },
    target: {
      fr: "TPE/PME, e-commerçants, prestataires de services",
      en: "SMBs, e-commerce, service providers",
    },
    replayUrl: "https://youtu.be/LuIbw7klJn0",
    isNew: false,
  },
];

export function WebinairesContent() {
  const locale = useLocale() as "fr" | "en";

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-20" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              {locale === "fr" ? "Formations Gratuites" : "Free Training"}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {locale === "fr" ? "Nos " : "Our "}
            <span className="text-gradient-animated">Webinaires</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {locale === "fr"
              ? "Accédez gratuitement à nos formations et replays pour booster votre présence digitale"
              : "Access our free training and replays to boost your digital presence"}
          </p>

          {/* CTA Newsletter */}
          <GlowButton size="lg" asChild>
            <Link href="/#contact" className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              {locale === "fr"
                ? "S'inscrire aux prochains webinaires"
                : "Register for upcoming webinars"}
            </Link>
          </GlowButton>
        </motion.div>

        {/* Webinaires Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {webinaires.map((webinaire, index) => (
            <motion.div
              key={webinaire.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full flex flex-col group" hover>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${webinaire.color} flex items-center justify-center shadow-lg`}
                  >
                    <webinaire.icon className="w-7 h-7 text-white" />
                  </div>
                  {webinaire.isNew && (
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                      {locale === "fr" ? "Nouveau" : "New"}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {webinaire.title[locale]}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {webinaire.description[locale]}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {webinaire.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {webinaire.duration}
                  </span>
                </div>

                {/* Highlights */}
                <div className="flex-1 mb-6">
                  <p className="text-xs font-medium text-muted-foreground mb-2">
                    {locale === "fr" ? "Ce que vous apprendrez :" : "What you'll learn:"}
                  </p>
                  <ul className="space-y-2">
                    {webinaire.highlights[locale].map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 p-3 rounded-lg bg-muted/30">
                  <Users className="w-4 h-4" />
                  <span>{webinaire.target[locale]}</span>
                </div>

                {/* CTA */}
                <a
                  href={webinaire.replayUrl}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Play className="w-4 h-4" />
                  {locale === "fr" ? "Voir le replay" : "Watch replay"}
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {locale === "fr"
                ? "Besoin d'un accompagnement personnalisé ?"
                : "Need personalized support?"}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {locale === "fr"
                ? "Réservez un appel de découverte gratuit avec notre équipe pour discuter de votre projet"
                : "Book a free discovery call with our team to discuss your project"}
            </p>
            <GlowButton size="lg" asChild>
              <a
                href="https://calendly.com/hkcom/appel-de-decouverte"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {locale === "fr" ? "Réserver un appel de découverte" : "Book a discovery call"}
                <ArrowRight className="w-5 h-5" />
              </a>
            </GlowButton>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
