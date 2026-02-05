"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

export function Certifications() {
  const t = useTranslations("certifications");

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">{t("badge")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("title")} <span className="text-gradient">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Main Certification Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden glass p-2">
            <Image
              src="/images/HKCOM-Certifications.webp"
              alt="HKCOM Certifications"
              width={1200}
              height={400}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
