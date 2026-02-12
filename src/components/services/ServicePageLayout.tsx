"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/shared/GlassCard";
import { GlowButton } from "@/components/shared/GlowButton";
import { TrustBanner } from "@/components/shared/TrustBanner";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Star,
  Users,
  Globe,
  Search,
  BarChart3,
  Headphones,
  Target,
  TrendingUp,
  Zap,
  Shield,
  Palette,
  Code2,
  Smartphone,
  ShoppingCart,
  Megaphone,
  Video,
  Camera,
  Play,
  Layers,
  Settings,
  Award,
  Heart,
  Rocket,
  Sparkles,
  Monitor,
  PenTool,
  Share2,
  LucideIcon,
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
  Zap,
  Shield,
  Palette,
  Code2,
  Smartphone,
  ShoppingCart,
  Megaphone,
  Video,
  Camera,
  Play,
  Layers,
  Settings,
  Award,
  Heart,
  Rocket,
  Sparkles,
  Monitor,
  PenTool,
  Share2,
  Star,
  Clock,
};

interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

interface ServicePackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  tag?: string;
}

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  locale: "fr" | "en";
  service: {
    name: string;
    tagline: string;
    description: string;
    longDescription: string;
    heroIcon: string;
    color: "primary" | "secondary" | "accent";
    features: ServiceFeature[];
    benefits: string[];
    packages: ServicePackage[];
    process: {
      number: string;
      title: string;
      description: string;
    }[];
    faqs: ServiceFAQ[];
    stats: {
      value: string;
      label: string;
    }[];
    portfolio?: {
      title: string;
      image: string;
      category: string;
    }[];
  };
  customHeroVisual?: React.ReactNode;
  showBrands?: boolean;
  realisationsComponent?: React.ReactNode;
}

const colorClasses = {
  primary: {
    gradient: "from-primary to-primary/70",
    gradientFull: "from-primary via-secondary to-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
    shadow: "shadow-primary/20",
  },
  secondary: {
    gradient: "from-secondary to-secondary/70",
    gradientFull: "from-secondary via-primary to-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    text: "text-secondary",
    shadow: "shadow-secondary/20",
  },
  accent: {
    gradient: "from-accent to-accent/70",
    gradientFull: "from-accent via-secondary to-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    text: "text-accent",
    shadow: "shadow-accent/20",
  },
};

// Hero Visual Component
function ServiceHeroVisual({ service, colors }: { service: ServicePageProps["service"]; colors: typeof colorClasses.primary }) {
  const IconComponent = iconMap[service.heroIcon] || Globe;

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
      {/* Background Glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20 blur-3xl rounded-full`}
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Static Rings - Centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer ring (primary color) - 90% */}
        <div className={`absolute w-[90%] h-[90%] rounded-full border ${colors.border} opacity-30`} />
        {/* Middle ring (secondary) - 70% */}
        <div className="absolute w-[70%] h-[70%] rounded-full border border-secondary/20 opacity-30" />
        {/* Inner ring (accent) - 50% */}
        <div className="absolute w-[50%] h-[50%] rounded-full border border-accent/15 opacity-30" />
      </div>

      {/* Central Card - Centered */}
      <div className="relative z-10">
        <GlassCard className="p-8 text-center relative overflow-hidden" glow="cyan">
          {/* Decorative */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-full blur-2xl`} />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-2xl" />

          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className={`relative w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 shadow-2xl ${colors.shadow}`}
          >
            <IconComponent className="w-12 h-12 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-bold mb-2"
          >
            {service.name}
          </motion.h3>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-sm max-w-[200px]"
          >
            {service.tagline}
          </motion.p>
        </GlassCard>
      </div>

      {/* Floating Stats Cards */}
      <motion.div
        className="absolute z-20"
        style={{ left: "calc(50% + 140px)", top: "calc(50% - 60px)", transform: "translate(-50%, -50%)" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <GlassCard className="p-3">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
              <Star className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold">100%</div>
              <div className="text-[10px] text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        className="absolute z-20"
        style={{ left: "calc(50% - 140px)", top: "calc(50% + 50px)", transform: "translate(-50%, -50%)" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <GlassCard className="p-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold">+150</div>
              <div className="text-[10px] text-muted-foreground">Projets</div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Primary color orbiting element - on outer ring (90%) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-[90%] h-[90%]">
          <div
            className={`absolute w-10 h-10 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg ${colors.shadow}`}
            style={{ left: "0%", top: "50%", transform: "translate(-50%, -50%)" }}
          >
            <Zap className="w-5 h-5 text-white" />
          </div>
        </div>
      </motion.div>

      {/* Secondary color orbiting element - on middle ring (70%) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-[70%] h-[70%]">
          <div
            className="absolute w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg shadow-secondary/20"
            style={{ right: "0%", top: "50%", transform: "translate(50%, -50%)" }}
          >
            <Shield className="w-5 h-5 text-white" />
          </div>
        </div>
      </motion.div>

      {/* Accent color orbiting element - on inner ring (50%) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-[50%] h-[50%]">
          <div
            className="absolute w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg shadow-accent/20"
            style={{ left: "50%", top: "0%", transform: "translate(-50%, -50%)" }}
          >
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ServicePageLayout({ locale, service, customHeroVisual, showBrands = false, realisationsComponent }: ServicePageProps) {
  const colors = colorClasses[service.color];
  const isEn = locale === "en";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
          {/* Background */}
          <div className="absolute inset-0 bg-background">
            <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] ${colors.bg} rounded-full blur-3xl animate-pulse`} />
            <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000`} />
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
                    {isEn ? "Service" : "Service"}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {service.name.split(" ").map((word, i) => (
                    <span key={i}>
                      {i === 0 ? (
                        <span className={`bg-gradient-to-r ${colors.gradientFull} bg-clip-text text-transparent`}>{word} </span>
                      ) : (
                        <span>{word} </span>
                      )}
                    </span>
                  ))}
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {service.longDescription}
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {service.stats.slice(0, 3).map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`text-2xl md:text-3xl font-bold ${colors.text}`}>{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <GlowButton size="lg" asChild>
                    <Link href="/#contact" className="flex items-center gap-2">
                      {isEn ? "Get a Quote" : "Demander un devis"}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </GlowButton>
                  <GlowButton variant="outline" size="lg" asChild>
                    <Link href="#resultats">
                      {isEn ? "See Our Results" : "Voir nos résultats"}
                    </Link>
                  </GlowButton>
                </div>
              </motion.div>

              {/* Right - Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {customHeroVisual || <ServiceHeroVisual service={service} colors={colors} />}
              </motion.div>
            </div>
            {/* Trust Banner */}
            {showBrands && <TrustBanner className="mt-12" />}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-mesh opacity-30" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isEn ? "What We Offer" : "Ce que nous proposons"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {isEn
                  ? "Comprehensive solutions tailored to your needs"
                  : "Des solutions complètes adaptées à vos besoins"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon] || Globe;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="p-6 h-full group hover-glow-card" hover>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 shadow-lg ${colors.shadow}`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
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
                  {isEn ? "Why Choose Us" : "Pourquoi nous choisir"}
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-background/50 transition-colors"
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
                className="grid grid-cols-2 gap-4"
              >
                {service.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GlassCard className="p-6 text-center h-full" glow="cyan">
                      <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${colors.gradientFull} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Realisations Section */}
        {realisationsComponent}

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
                {isEn ? "Our Process" : "Notre Processus"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {isEn
                  ? "A proven methodology for guaranteed success"
                  : "Une méthodologie éprouvée pour un succès garanti"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {index < service.process.length - 1 && (
                    <div className={`hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r ${colors.gradient} opacity-30`} />
                  )}
                  <GlassCard className="p-6 text-center h-full group" hover>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg ${colors.shadow}`}
                    >
                      {step.number}
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-24 relative scroll-mt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isEn ? "Our Packages" : "Nos Offres"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {isEn
                  ? "Choose the solution that fits your needs"
                  : "Choisissez la solution adaptée à vos besoins"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {service.packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={pkg.highlighted ? "lg:-mt-4 lg:mb-4" : ""}
                >
                  <GlassCard
                    className={`p-6 h-full relative overflow-hidden ${
                      pkg.highlighted ? "border-secondary/50" : ""
                    }`}
                    glow={pkg.highlighted ? "cyan" : undefined}
                  >
                    {pkg.tag && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-secondary to-secondary/80 text-white text-xs font-bold">
                          {pkg.tag}
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

                    <div className="mb-6">
                      <span className={`text-4xl font-bold ${pkg.highlighted ? colors.text : ""}`}>
                        {pkg.price}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${pkg.highlighted ? "text-secondary" : "text-muted-foreground"}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <GlowButton
                      className="w-full"
                      variant={pkg.highlighted ? "primary" : "outline"}
                      asChild
                    >
                      <Link href="/#contact">
                        {isEn ? "Get Started" : "Commencer"}
                      </Link>
                    </GlowButton>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isEn ? "Frequently Asked Questions" : "Questions Fréquentes"}
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-6" hover>
                    <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradientFull} opacity-10`} />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <GlassCard className="p-8 md:p-12 text-center relative overflow-hidden" glow="cyan">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-full blur-3xl`} />
                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-2xl`} />

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-6 shadow-xl ${colors.shadow}`}
                >
                  <Rocket className="w-10 h-10 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                  {isEn
                    ? "Ready to Get Started?"
                    : "Prêt à démarrer votre projet ?"}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative">
                  {isEn
                    ? "Let's discuss your project and find the best solution for your needs"
                    : "Discutons de votre projet et trouvons la solution idéale pour vos besoins"}
                </p>
                <div className="flex flex-wrap justify-center gap-4 relative">
                  <GlowButton size="lg" asChild>
                    <Link href="/#contact" className="flex items-center gap-2">
                      {isEn ? "Contact Us" : "Nous contacter"}
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
