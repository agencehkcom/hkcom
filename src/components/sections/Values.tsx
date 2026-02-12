"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/GlassCard";
import {
  Shield,
  Heart,
  Lightbulb,
  Award,
  User,
  Lock,
} from "lucide-react";

const values = [
  {
    key: "reliability",
    icon: Shield,
    color: "from-primary to-primary/70",
  },
  {
    key: "satisfaction",
    icon: Heart,
    color: "from-secondary to-secondary/70",
  },
  {
    key: "solutions",
    icon: Lightbulb,
    color: "from-accent to-accent/70",
  },
  {
    key: "certification",
    icon: Award,
    color: "from-primary to-secondary",
  },
  {
    key: "dedicated",
    icon: User,
    color: "from-secondary to-secondary/70",
  },
  {
    key: "confidentiality",
    icon: Lock,
    color: "from-primary to-primary/70",
  },
];

export function Values() {
  const t = useTranslations("values");

  return (
    <section id="values" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-5" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("title")} <span className="text-gradient">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full group" hover>
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {t(`items.${value.key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`items.${value.key}.description`)}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
