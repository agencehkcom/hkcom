"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlassCard } from "@/components/shared/GlassCard";
import { Users, Headphones, Clock, Shield } from "lucide-react";

export function Team() {
  const t = useTranslations("team");

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/HKCOM-agence-digitale.webp"
                alt="Équipe HKCOM"
                width={600}
                height={500}
                className="w-full h-auto object-cover rounded-3xl"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8"
            >
              <GlassCard className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-xs text-muted-foreground">{t("yearsExperience")}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{t("badge")}</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("title")} <span className="text-gradient">{t("titleHighlight")}</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              {t("description")}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Headphones, key: "support" },
                { icon: Clock, key: "availability" },
                { icon: Shield, key: "expertise" },
                { icon: Users, key: "dedicated" },
              ].map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-4 h-full" hover>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t(`features.${item.key}.title`)}</h3>
                        <p className="text-sm text-muted-foreground">{t(`features.${item.key}.description`)}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
