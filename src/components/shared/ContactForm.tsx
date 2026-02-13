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
  Globe,
  Megaphone,
  Video,
  Linkedin,
  Lightbulb,
  HelpCircle,
  Zap,
  Play,
  Phone,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Check,
} from "lucide-react";

interface FormData {
  services: string[];
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const serviceOptions = {
  fr: [
    { value: "web", label: "Site Web / E-commerce", desc: "Création ou refonte de site", icon: Globe },
    { value: "ads", label: "Google Ads / SEO", desc: "Publicité et référencement", icon: Megaphone },
    { value: "content", label: "Contenu & Réseaux", desc: "Vidéo, photo et community management", icon: Video },
    { value: "linkedin", label: "Prospection LinkedIn", desc: "Génération de leads B2B", icon: Linkedin },
    { value: "strategy", label: "Stratégie Digitale", desc: "Accompagnement complet", icon: Lightbulb },
    { value: "aide-numerique", label: "Aide Numérique", desc: "Dispositif France Num", icon: Zap },
    { value: "webinaire", label: "Webinaire", desc: "Formations gratuites en ligne", icon: Play },
    { value: "other", label: "Autre Projet", desc: "Parlons-en ensemble", icon: HelpCircle },
  ],
  en: [
    { value: "web", label: "Website / E-commerce", desc: "Website creation or redesign", icon: Globe },
    { value: "ads", label: "Google Ads / SEO", desc: "Advertising & search ranking", icon: Megaphone },
    { value: "content", label: "Content & Social", desc: "Video, photo & community management", icon: Video },
    { value: "linkedin", label: "LinkedIn Prospecting", desc: "B2B lead generation", icon: Linkedin },
    { value: "strategy", label: "Digital Strategy", desc: "Full-service support", icon: Lightbulb },
    { value: "aide-numerique", label: "Digital Aid", desc: "France Num program", icon: Zap },
    { value: "webinaire", label: "Webinar", desc: "Free online training", icon: Play },
    { value: "other", label: "Other Project", desc: "Let's talk about it", icon: HelpCircle },
  ],
};

const translations = {
  fr: {
    step1Title: "Quel service vous intéresse ?",
    step1Subtitle: "Sélectionnez un ou plusieurs services",
    step2Title: "Vos coordonnées",
    step2Subtitle: "Comment pouvons-nous vous contacter ?",
    step3Title: "Détails du projet",
    step3Subtitle: "Parlez-nous de votre projet",
    name: "Votre nom",
    email: "Email professionnel",
    phone: "Téléphone",
    company: "Entreprise (optionnel)",
    message: "Décrivez votre projet",
    submit: "Envoyer le message",
    sending: "Envoi en cours...",
    success: "Message envoyé !",
    successMessage: "Nous vous répondrons dans les 24h.",
    next: "Suivant",
    prev: "Retour",
    stepLabels: ["Service", "Contact", "Projet"],
    calendly: "Ou réservez directement un appel",
    selectService: "Sélectionnez au moins un service",
  },
  en: {
    step1Title: "Which service interests you?",
    step1Subtitle: "Select one or more services",
    step2Title: "Your contact info",
    step2Subtitle: "How can we reach you?",
    step3Title: "Project details",
    step3Subtitle: "Tell us about your project",
    name: "Your name",
    email: "Professional email",
    phone: "Phone number",
    company: "Company (optional)",
    message: "Describe your project",
    submit: "Send message",
    sending: "Sending...",
    success: "Message sent!",
    successMessage: "We'll get back to you within 24h.",
    next: "Next",
    prev: "Back",
    stepLabels: ["Service", "Contact", "Project"],
    calendly: "Or book a call directly",
    selectService: "Select at least one service",
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export function ContactForm() {
  const locale = useLocale() as "fr" | "en";
  const t = translations[locale];
  const services = serviceOptions[locale];

  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    services: [],
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const toggleService = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value],
    }));
  };

  const goNext = () => {
    if (step < 3) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  };

  const goPrev = () => {
    if (step > 1) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  const canGoNext = () => {
    if (step === 1) return formData.services.length > 0;
    if (step === 2) return formData.name.trim() !== "" && formData.email.trim() !== "";
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      goNext();
      return;
    }
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erreur envoi");

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setStep(1);
        setFormData({
          services: [],
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
              });
      }, 3000);
    } catch {
      alert(locale === "fr"
        ? "Une erreur est survenue. Veuillez réessayer ou nous contacter directement."
        : "An error occurred. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (field: string) => `
    w-full px-4 py-3 rounded-xl
    bg-background/50 backdrop-blur-sm
    border transition-all duration-300
    ${
      focusedField === field
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
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                <h3 className="text-xl font-bold">
                  {step === 1 ? t.step1Title : step === 2 ? t.step2Title : t.step3Title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {step === 1 ? t.step1Subtitle : step === 2 ? t.step2Subtitle : t.step3Subtitle}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 flex items-center gap-2">
                  <div className="flex-1 relative">
                    <div className="h-1.5 rounded-full bg-border/50 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        initial={false}
                        animate={{ width: s <= step ? "100%" : "0%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                  <motion.div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors duration-300 ${
                      s < step
                        ? "bg-secondary text-white"
                        : s === step
                          ? "bg-primary text-white"
                          : "bg-border/30 text-muted-foreground"
                    }`}
                    animate={s === step ? { scale: [1, 1.15, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {s < step ? <Check className="w-3.5 h-3.5" /> : s}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Step Labels */}
            <div className="flex justify-between mb-6 px-1">
              {t.stepLabels.map((label, i) => (
                <span
                  key={i}
                  className={`text-xs font-medium transition-colors duration-300 ${
                    i + 1 <= step ? "text-primary" : "text-muted-foreground/50"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Steps Content */}
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait" custom={direction}>
                {/* Step 1 — Service Selection */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                  >
                    {services.map((service) => {
                      const isSelected = formData.services.includes(service.value);
                      const Icon = service.icon;
                      return (
                        <motion.button
                          key={service.value}
                          type="button"
                          onClick={() => toggleService(service.value)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className={`relative p-4 rounded-xl border-2 text-left transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                              : "border-border/50 bg-background/30 hover:border-primary/30 hover:bg-primary/5"
                          }`}
                        >
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                            >
                              <Check className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                          <Icon
                            className={`w-6 h-6 mb-2 transition-colors ${
                              isSelected ? "text-primary" : "text-muted-foreground"
                            }`}
                          />
                          <div className="font-semibold text-sm leading-tight mb-1">
                            {service.label}
                          </div>
                          <div className="text-xs text-muted-foreground leading-tight">
                            {service.desc}
                          </div>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                )}

                {/* Step 2 — Contact Info */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="relative">
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
                      </div>
                      <div className="relative">
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
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                        <input
                          type="tel"
                          placeholder={t.phone}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className={`${inputClasses("phone")} pl-11`}
                        />
                      </div>
                      <div className="relative">
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
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 — Project Details */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-5"
                  >
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground/50" />
                      <textarea
                        rows={4}
                        placeholder={t.message}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClasses("message")} pl-11 resize-none`}
                      />
                    </div>

                    {/* Calendly CTA */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                      <a
                        href="https://calendly.com/hkcom/appel-de-decouverte"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                      >
                        <Calendar className="w-4 h-4" />
                        {t.calendly}
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 gap-4">
                {step > 1 ? (
                  <GlowButton
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={goPrev}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {t.prev}
                  </GlowButton>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <GlowButton
                    type="button"
                    size="md"
                    onClick={goNext}
                    disabled={!canGoNext()}
                  >
                    {t.next}
                    <ChevronRight className="w-4 h-4" />
                  </GlowButton>
                ) : (
                  <GlowButton
                    type="submit"
                    size="lg"
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
                )}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}
