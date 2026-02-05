"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { GlowButton } from "@/components/shared/GlowButton";
import {
  Send,
  User,
  Mail,
  Building2,
  MessageSquare,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  service: string;
}

const services = {
  fr: [
    { value: "web", label: "Site Web / E-commerce" },
    { value: "ads", label: "Google Ads / SEO" },
    { value: "content", label: "Contenu & Réseaux sociaux" },
    { value: "strategy", label: "Stratégie digitale complète" },
    { value: "other", label: "Autre projet" },
  ],
  en: [
    { value: "web", label: "Website / E-commerce" },
    { value: "ads", label: "Google Ads / SEO" },
    { value: "content", label: "Content & Social media" },
    { value: "strategy", label: "Complete digital strategy" },
    { value: "other", label: "Other project" },
  ],
};

const translations = {
  fr: {
    title: "Envoyez-nous un message",
    subtitle: "Décrivez votre projet et nous vous répondrons sous 24h",
    name: "Votre nom",
    email: "Email professionnel",
    company: "Entreprise",
    service: "Type de projet",
    message: "Décrivez votre projet",
    submit: "Envoyer le message",
    sending: "Envoi en cours...",
    success: "Message envoyé !",
    successMessage: "Nous vous répondrons dans les 24h.",
  },
  en: {
    title: "Send us a message",
    subtitle: "Describe your project and we'll get back to you within 24h",
    name: "Your name",
    email: "Professional email",
    company: "Company",
    service: "Project type",
    message: "Describe your project",
    submit: "Send message",
    sending: "Sending...",
    success: "Message sent!",
    successMessage: "We'll get back to you within 24h.",
  },
};

export function ContactForm() {
  const locale = useLocale() as "fr" | "en";
  const t = translations[locale];
  const serviceOptions = services[locale];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", company: "", message: "", service: "" });
    }, 3000);
  };

  const inputClasses = (field: string) => `
    w-full px-4 py-3 rounded-xl
    bg-background/50 backdrop-blur-sm
    border transition-all duration-300
    ${focusedField === field
      ? "border-primary/50 shadow-lg shadow-primary/10"
      : "border-border hover:border-primary/30"
    }
    focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10
    placeholder:text-muted-foreground/50
  `;

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-6 shadow-lg shadow-secondary/30"
            >
              <CheckCircle2 className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">{t.success}</h3>
            <p className="text-muted-foreground">{t.successMessage}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                <h3 className="text-xl font-bold">{t.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{t.subtitle}</p>
            </div>

            {/* Name & Email Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                <input
                  type="text"
                  required
                  placeholder={t.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses("name")} pl-11`}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="relative"
              >
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                <input
                  type="email"
                  required
                  placeholder={t.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses("email")} pl-11`}
                />
              </motion.div>
            </div>

            {/* Company & Service Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                <input
                  type="text"
                  placeholder={t.company}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses("company")} pl-11`}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  onFocus={() => setFocusedField("service")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses("service")} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    {t.service}
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground/50" />
              <textarea
                required
                rows={4}
                placeholder={t.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className={`${inputClasses("message")} pl-11 resize-none`}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <GlowButton
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.submit}
                  </>
                )}
              </GlowButton>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}
