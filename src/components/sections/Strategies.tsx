"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/GlassCard";
import { GlowButton } from "@/components/shared/GlowButton";
import { Link } from "@/i18n/navigation";
import { Users, Zap, Eye, Check, ArrowRight } from "lucide-react";

const strategies = [
  {
    key: "clientMax",
    icon: Users,
    glow: "cyan" as const,
    gradient: "from-cyan-500/20 to-blue-500/20",
    href: "/strategies/client-max",
  },
  {
    key: "impactMax",
    icon: Zap,
    glow: "violet" as const,
    gradient: "from-violet-500/20 to-purple-500/20",
    href: "/strategies/impact-max",
  },
  {
    key: "visibilityMax",
    icon: Eye,
    glow: "cyan" as const,
    gradient: "from-cyan-500/20 to-emerald-500/20",
    href: "/strategies/visibilite-max",
  },
];

export function Strategies() {
  const t = useTranslations("strategies");

  return (
    <section id="strategies" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-30" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("title")}{" "}
            <span className="text-gradient-animated">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard
                glow={strategy.glow}
                className="h-full p-8 group"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${strategy.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <strategy.icon className="w-8 h-8 text-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  {t(`${strategy.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {t(`${strategy.key}.description`)}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {(
                    t.raw(`${strategy.key}.features`) as string[]
                  ).map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <GlowButton
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full"
                >
                  <Link
                    href={strategy.href}
                    className="flex items-center justify-center gap-2"
                  >
                    {t("cta")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </GlowButton>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
