"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    key: "discovery",
    icon: Search,
    color: "primary",
    gradient: "from-primary to-primary/70",
    bgGlow: "bg-primary/20",
    borderColor: "border-primary/30",
    number: "01",
  },
  {
    key: "design",
    icon: Palette,
    color: "secondary",
    gradient: "from-secondary to-secondary/70",
    bgGlow: "bg-secondary/20",
    borderColor: "border-secondary/30",
    number: "02",
  },
  {
    key: "development",
    icon: Code,
    color: "accent",
    gradient: "from-accent to-accent/70",
    bgGlow: "bg-accent/20",
    borderColor: "border-accent/30",
    number: "03",
  },
  {
    key: "launch",
    icon: Rocket,
    color: "primary",
    gradient: "from-primary to-secondary",
    bgGlow: "bg-primary/20",
    borderColor: "border-primary/30",
    number: "04",
  },
];

export function Timeline() {
  const t = useTranslations("timeline");

  return (
    <section id="processus" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Timeline Steps - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                  className="relative z-10 mx-auto mb-8"
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 ${step.bgGlow} rounded-full blur-lg scale-125 opacity-50`} />

                  {/* Icon container */}
                  <div className={`relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Number badge */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 ${step.borderColor} flex items-center justify-center text-xs font-bold`}>
                    {step.number}
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl bg-card border ${step.borderColor} hover:shadow-lg transition-all duration-300`}
                >
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {t(`steps.${step.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {t(`steps.${step.key}.description`)}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className={`flex items-start gap-4 p-6 rounded-2xl bg-card border ${step.borderColor}`}>
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-6 h-6 text-white" />
                    {/* Number badge */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 ${step.borderColor} flex items-center justify-center text-xs font-bold`}>
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">
                    {t(`steps.${step.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`steps.${step.key}.description`)}
                  </p>
                </div>
              </div>

              {/* Connector line for mobile */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-full w-0.5 h-8 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
