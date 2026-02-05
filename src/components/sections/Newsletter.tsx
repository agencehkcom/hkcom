"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/GlassCard";
import { GlowButton } from "@/components/shared/GlowButton";
import { Mail, Gift, CheckCircle2, Sparkles } from "lucide-react";

export function Newsletter() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    setIsSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute inset-0 bg-mesh opacity-20" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6"
                >
                  <Gift className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">{t("badge")}</span>
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t("title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("description")}
                </p>

                {/* Benefits */}
                <ul className="space-y-3">
                  {["benefit1", "benefit2", "benefit3"].map((key) => (
                    <li key={key} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Form */}
              <div>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{t("successTitle")}</h3>
                    <p className="text-muted-foreground">{t("successMessage")}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("placeholder")}
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <GlowButton type="submit" className="w-full" size="lg">
                      <Sparkles className="w-5 h-5 mr-2" />
                      {t("button")}
                    </GlowButton>
                    <p className="text-xs text-center text-muted-foreground">
                      {t("privacy")}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
