"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { GlowButton } from "@/components/shared/GlowButton";
import { HeroShapes, ParticleField } from "@/components/shared/AnimatedShapes";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Zap,
  Code2,
  Palette,
  Rocket,
} from "lucide-react";

const brands = [
  { name: "Mediaphone", logo: "/images/brands/mediaphone.png" },
  { name: "Do Yours", logo: "/images/brands/do-yours.png" },
  { name: "Echap & Vous", logo: "/images/brands/echap-et-vous.png" },
  { name: "Tatas Cook", logo: "/images/brands/tatas-cook.png" },
  { name: "CKM", logo: "/images/brands/ckm.png" },
  { name: "Kujua", logo: "/images/brands/kujua.png" },
  { name: "Mob Destock", logo: "/images/brands/mob-destock.png" },
  { name: "Coop Bazar", logo: "/images/brands/coop-bazar.png" },
  { name: "Extha", logo: "/images/brands/extha.png" },
  { name: "LCR", logo: "/images/brands/lcr.png" },
];

// Floating Service Card Component
function FloatingCard({
  icon: Icon,
  label,
  delay,
  angle,
  distance,
}: {
  icon: React.ElementType;
  label: string;
  delay: number;
  angle: number;
  distance: number;
}) {
  // Calculate position based on angle and distance from center
  const x = Math.cos((angle * Math.PI) / 180) * distance;
  const y = Math.sin((angle * Math.PI) / 180) * distance;

  return (
    <motion.div
      className="absolute hidden lg:flex"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        className="flex items-center gap-2 px-4 py-2 rounded-xl glass-heavy shadow-lg"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm font-medium whitespace-nowrap">{label}</span>
      </motion.div>
    </motion.div>
  );
}

// Animated Stats Ring
function StatsRing() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Central Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 opacity-30 blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Rotating Rings - Static circles that elements orbit on */}
      {/* Blue ring (outer) - inset-8 = 32px from edge */}
      <div className="absolute inset-8 md:inset-12 rounded-full border border-primary/20" />
      {/* Green ring (middle) - inset-16 = 64px from edge */}
      <div className="absolute inset-16 md:inset-20 rounded-full border border-secondary/15" />
      {/* Yellow ring (inner) - inset-24 = 96px from edge */}
      <div className="absolute inset-24 md:inset-28 rounded-full border border-accent/10" />

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-28 h-28 md:w-36 md:h-36 rounded-2xl glass-heavy flex items-center justify-center p-4 shadow-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Image
              src="/images/logos/hkcom-logo.png"
              alt="HKCOM"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Blue orbiting element - on outer ring (inset-8) */}
      <motion.div
        className="absolute inset-8 md:inset-12"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg shadow-primary/30"
          style={{ left: "50%", top: "0%", transform: "translate(-50%, -50%)" }}
        >
          <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </motion.div>

      {/* Green orbiting element - on middle ring (inset-16) */}
      <motion.div
        className="absolute inset-16 md:inset-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center shadow-lg shadow-secondary/30"
          style={{ left: "0%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
          <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </motion.div>

      {/* Yellow orbiting element - on inner ring (inset-24) */}
      <motion.div
        className="absolute inset-24 md:inset-28"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center shadow-lg shadow-accent/30"
          style={{ right: "0%", top: "50%", transform: "translate(50%, -50%)" }}
        >
          <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const t = useTranslations("hero");

  const floatingCards = [
    { icon: Code2, label: "Web Dev", delay: 0.6, angle: -30, distance: 220 },
    { icon: Palette, label: "Design UI/UX", delay: 0.8, angle: 15, distance: 240 },
    { icon: TrendingUp, label: "SEO & Ads", delay: 1, angle: 60, distance: 220 },
    { icon: Rocket, label: "Performance", delay: 1.2, angle: 210, distance: 230 },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated Background */}
      <HeroShapes />
      <ParticleField count={15} />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              {t("title")}{" "}
              <span className="text-gradient-animated">{t("titleHighlight")}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0"
            >
              {t("subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <GlowButton size="lg" asChild>
                <Link href="/#contact" className="flex items-center gap-2">
                  {t("cta.primary")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </GlowButton>
              <GlowButton variant="outline" size="lg" asChild>
                <Link href="/#strategies">{t("cta.secondary")}</Link>
              </GlowButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
            >
              <div className="text-center lg:text-left">
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  {t("stats.clients")}
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  {t("stats.clientsLabel")}
                </div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center lg:text-left">
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-secondary"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  {t("stats.satisfaction")}
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  {t("stats.satisfactionLabel")}
                </div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center lg:text-left">
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-accent"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  5+
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  {t("stats.experienceLabel") || "Ans d'expérience"}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Animated Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-lg mx-auto aspect-square"
          >
            <StatsRing />

            {/* Floating Service Cards */}
            {floatingCards.map((card, index) => (
              <FloatingCard key={index} {...card} />
            ))}
          </motion.div>
        </div>

        {/* Brands Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <p className="text-center text-xs text-muted-foreground mb-3">
            {t("trustedBy")}
          </p>
          <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track */}
            <motion.div
              className="flex gap-8 md:gap-10"
              animate={{
                x: [0, -1600],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {/* Triple the brands for seamless loop */}
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 w-16 h-8 md:w-20 md:h-10 relative grayscale dark:grayscale-0 opacity-50 dark:opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 64px, 80px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
