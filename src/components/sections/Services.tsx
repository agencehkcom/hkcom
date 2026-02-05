"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { GlassCard } from "@/components/shared/GlassCard";
import { GlowButton } from "@/components/shared/GlowButton";
import { Globe, Megaphone, Video, ArrowRight } from "lucide-react";

const services = [
  {
    key: "web",
    href: "/services/web",
    icon: Globe,
    gradient: "from-primary to-primary/70",
    shadow: "shadow-primary/20",
    hoverColor: "group-hover:text-primary",
    hoverGlow: "hover-glow-primary",
  },
  {
    key: "ads",
    href: "/services/ads",
    icon: Megaphone,
    gradient: "from-secondary to-secondary/70",
    shadow: "shadow-secondary/20",
    hoverColor: "group-hover:text-secondary",
    hoverGlow: "hover-glow-secondary",
  },
  {
    key: "content",
    href: "/services/content",
    icon: Video,
    gradient: "from-accent to-accent/70",
    shadow: "shadow-accent/20",
    hoverColor: "group-hover:text-accent",
    hoverGlow: "hover-glow-accent",
  },
];

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-20" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full">
                <GlassCard className={`p-8 h-full text-center group ${service.hoverGlow}`} hover>
                  {/* Icon with gradient background */}
                  <div className="relative mx-auto mb-6 w-20 h-20">
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-40 transition-opacity blur-xl`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg ${service.shadow}`}
                    >
                      <service.icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 ${service.hoverColor} transition-colors`}>
                    {t(`${service.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {t(`${service.key}.description`)}
                  </p>

                  {/* CTA */}
                  <div className={`flex items-center justify-center gap-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity ${service.hoverColor}`}>
                    <span>{t("cta") || "En savoir plus"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <GlowButton size="lg" asChild>
            <Link href="/#contact" className="flex items-center gap-2">
              {t("contactCta") || "Discuter de votre projet"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
