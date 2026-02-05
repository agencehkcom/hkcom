"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/shared/GlassCard";
import { GlowButton } from "@/components/shared/GlowButton";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Target,
  TrendingUp,
  Users,
  Globe,
  Search,
  BarChart3,
  Headphones,
  Linkedin,
  Mail,
  Calendar,
  Shield,
  Zap,
  Video,
  Camera,
  Share2,
  Megaphone,
  Palette,
  LucideIcon,
  Sparkles,
  Rocket,
} from "lucide-react";

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
  Globe,
  Search,
  BarChart3,
  Headphones,
  Target,
  TrendingUp,
  Users,
  Linkedin,
  Mail,
  Calendar,
  Shield,
  Zap,
  Video,
  Camera,
  Share2,
  Megaphone,
  Palette,
};

interface StrategyFeature {
  icon: string;
  title: string;
  description: string;
}

interface StrategyStep {
  number: string;
  title: string;
  description: string;
}

interface StrategyResult {
  value: string;
  label: string;
}

interface StrategyPageProps {
  locale: "fr" | "en";
  strategy: {
    name: string;
    tagline: string;
    description: string;
    heroImage?: string;
    color: "cyan" | "violet" | "emerald";
    targetAudience: string;
    duration: string;
    setupTime: string;
    features: StrategyFeature[];
    benefits: string[];
    steps: StrategyStep[];
    results: StrategyResult[];
    videoAskId?: string;
  };
}

const colorClasses = {
  cyan: {
    gradient: "from-primary to-secondary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
    glow: "cyan" as const,
    shadow: "shadow-primary/20",
  },
  violet: {
    gradient: "from-secondary to-secondary/70",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    text: "text-secondary",
    glow: "cyan" as const,
    shadow: "shadow-secondary/20",
  },
  emerald: {
    gradient: "from-secondary to-primary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    text: "text-secondary",
    glow: "cyan" as const,
    shadow: "shadow-secondary/20",
  },
};

// Strategy Hero Visual Component
function StrategyHeroVisual({ strategy, colors }: { strategy: StrategyPageProps["strategy"]; colors: typeof colorClasses.cyan }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
      {/* Background Glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20 blur-3xl rounded-full`}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Card - Centered */}
      <GlassCard className="relative p-8 text-center overflow-hidden z-10" glow={colors.glow}>
        {/* Decorative Elements */}
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-full blur-2xl`} />
        <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${colors.gradient} opacity-10 rounded-full blur-2xl`} />

        {/* Rotating Ring */}
        <motion.div
          className={`absolute inset-4 rounded-full border ${colors.border}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className={`relative w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-6 shadow-lg ${colors.shadow}`}
        >
          <Rocket className="w-12 h-12 text-white" />
        </motion.div>

        {/* Strategy Name */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold mb-2"
        >
          {strategy.name}
        </motion.h3>

        {/* Target Audience */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground text-sm mb-6"
        >
          {strategy.targetAudience}
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}>
            <Clock className={`w-5 h-5 mx-auto mb-1 ${colors.text}`} />
            <div className="text-xs text-muted-foreground">{strategy.setupTime}</div>
          </div>
          <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}>
            <Target className={`w-5 h-5 mx-auto mb-1 ${colors.text}`} />
            <div className="text-xs text-muted-foreground">{strategy.duration}</div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-4 left-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={`w-8 h-8 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center`}>
            <Sparkles className={`w-4 h-4 ${colors.text}`} />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <div className={`w-8 h-8 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center`}>
            <TrendingUp className={`w-4 h-4 ${colors.text}`} />
          </div>
        </motion.div>
      </GlassCard>

      {/* Orbiting Elements - Centered correctly */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div
          className={`absolute w-10 h-10 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg ${colors.shadow}`}
          style={{ left: "50%", top: "0%", transform: "translate(-50%, -50%)" }}
        >
          <Globe className="w-5 h-5 text-white" />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div
          className={`absolute w-10 h-10 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg ${colors.shadow}`}
          style={{ right: "0%", bottom: "0%", transform: "translate(50%, 50%)" }}
        >
          <BarChart3 className="w-5 h-5 text-white" />
        </div>
      </motion.div>
    </div>
  );
}

export function StrategyPageLayout({ locale, strategy }: StrategyPageProps) {
  const colors = colorClasses[strategy.color];

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
          {/* Background */}
          <div className="absolute inset-0 bg-background">
            <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${colors.bg} rounded-full blur-3xl animate-pulse`} />
            <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${colors.bg} rounded-full blur-3xl animate-pulse delay-1000`} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} ${colors.border} border mb-6`}>
                  <Sparkles className={`w-4 h-4 ${colors.text}`} />
                  <span className={`text-sm font-semibold ${colors.text}`}>
                    {locale === "fr" ? "Stratégie" : "Strategy"}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {strategy.name.split(" ")[0]}{" "}
                  <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                    {strategy.name.split(" ")[1]}
                  </span>
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                  {strategy.tagline}
                </p>

                {/* Description */}
                <p className="text-lg text-muted-foreground mb-8">
                  {strategy.description}
                </p>

                {/* Quick Info */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                    <Clock className={`w-5 h-5 ${colors.text}`} />
                    <span className="text-sm">{strategy.setupTime}</span>
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                    <Target className={`w-5 h-5 ${colors.text}`} />
                    <span className="text-sm">{strategy.duration}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <GlowButton size="lg" asChild>
                    <Link href="/#contact" className="flex items-center gap-2">
                      {locale === "fr" ? "Démarrer maintenant" : "Get started"}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </GlowButton>
                  <GlowButton variant="outline" size="lg" asChild>
                    <Link href="/#strategies">
                      {locale === "fr" ? "Voir toutes les stratégies" : "View all strategies"}
                    </Link>
                  </GlowButton>
                </div>
              </motion.div>

              {/* Right - Strategy Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <StrategyHeroVisual strategy={strategy} colors={colors} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-mesh opacity-20" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {locale === "fr" ? "Ce qui est inclus" : "What's included"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {locale === "fr"
                  ? "Tout ce dont vous avez besoin pour réussir"
                  : "Everything you need to succeed"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {strategy.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 h-full group" hover>
                    {(() => {
                      const IconComponent = iconMap[feature.icon];
                      return (
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 shadow-lg ${colors.shadow}`}
                        >
                          {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                        </motion.div>
                      );
                    })()}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-50`} />
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  {locale === "fr" ? "Vos avantages" : "Your benefits"}
                </h2>
                <ul className="space-y-4">
                  {strategy.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-background/50 transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {strategy.results.map((result, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GlassCard className="p-6 text-center h-full" glow={colors.glow}>
                      <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-2`}>
                        {result.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{result.label}</div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {locale === "fr" ? "Notre processus" : "Our process"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {locale === "fr"
                  ? "Une méthodologie éprouvée pour votre succès"
                  : "A proven methodology for your success"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {strategy.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {index < strategy.steps.length - 1 && (
                    <div className={`hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r ${colors.gradient} opacity-30`} />
                  )}
                  <GlassCard className="p-6 text-center relative group" hover>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg ${colors.shadow}`}
                    >
                      {step.number}
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-6 shadow-lg ${colors.shadow}`}
              >
                <Users className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {locale === "fr" ? "Pour qui ?" : "Who is it for?"}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {strategy.targetAudience}
              </p>
              <GlowButton size="lg" asChild>
                <Link href="/#contact" className="flex items-center gap-2 mx-auto">
                  {locale === "fr" ? "Vérifier mon éligibilité" : "Check my eligibility"}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </GlowButton>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-10`} />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <GlassCard className="p-8 md:p-12 text-center relative overflow-hidden" glow={colors.glow}>
                {/* Decorative Elements */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-full blur-2xl`} />
                <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${colors.gradient} opacity-10 rounded-full blur-2xl`} />

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-6 shadow-lg ${colors.shadow}`}
                >
                  <Rocket className="w-8 h-8 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                  {locale === "fr"
                    ? `Prêt à lancer votre ${strategy.name} ?`
                    : `Ready to launch your ${strategy.name}?`}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative">
                  {locale === "fr"
                    ? "Réservez un appel découverte gratuit et discutons de votre projet"
                    : "Book a free discovery call and let's discuss your project"}
                </p>
                <div className="flex flex-wrap justify-center gap-4 relative">
                  <GlowButton size="lg" asChild>
                    <Link href="/#contact" className="flex items-center gap-2">
                      {locale === "fr" ? "Réserver un appel" : "Book a call"}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </GlowButton>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
