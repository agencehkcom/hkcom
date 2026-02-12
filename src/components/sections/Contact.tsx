"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/GlassCard";
import { ContactForm } from "@/components/shared/ContactForm";
import { ContactShapes } from "@/components/shared/AnimatedShapes";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Linkedin,
  ArrowUpRight,
  Zap,
  Shield,
  HeartHandshake,
} from "lucide-react";

const contactInfo = {
  email: "contact@hkcom.fr",
  phone: "09 72 61 30 92",
  address: "Grande-Synthe",
  hours: {
    fr: "Lun - Ven : 9h - 18h",
    en: "Mon - Fri: 9am - 6pm",
  },
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/agence-marketing-hk-com/", label: "LinkedIn" },
];

const features = {
  fr: [
    { icon: Zap, title: "Réponse rapide", desc: "Sous 24h ouvrées" },
    { icon: Shield, title: "Devis gratuit", desc: "Sans engagement" },
    { icon: HeartHandshake, title: "Accompagnement", desc: "Personnalisé" },
  ],
  en: [
    { icon: Zap, title: "Quick response", desc: "Within 24h" },
    { icon: Shield, title: "Free quote", desc: "No commitment" },
    { icon: HeartHandshake, title: "Support", desc: "Personalized" },
  ],
};

export function Contact() {
  const locale = useLocale() as "fr" | "en";
  const featureList = features[locale];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <ContactShapes />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <MessageCircle className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">
              {locale === "fr" ? "Contactez-nous" : "Contact us"}
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {locale === "fr" ? (
              <>
                Parlons de votre{" "}
                <span className="text-gradient-animated">Projet</span>
              </>
            ) : (
              <>
                Let&apos;s talk about your{" "}
                <span className="text-gradient-animated">Project</span>
              </>
            )}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {locale === "fr"
              ? "Remplissez le formulaire et recevez un devis personnalisé sous 24h"
              : "Fill out the form and receive a personalized quote within 24h"}
          </p>
        </motion.div>

        {/* Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
        >
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 rounded-xl glass"
            >
              <feature.icon className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <div className="font-semibold text-sm">{feature.title}</div>
              <div className="text-xs text-muted-foreground">{feature.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 md:p-8">
              <ContactForm />
            </GlassCard>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Quick Contact Card */}
            <GlassCard className="p-6 border-secondary/20" hover glow="cyan">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/20">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {locale === "fr" ? "Besoin d'une réponse rapide ?" : "Need a quick answer?"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {locale === "fr"
                      ? "Appelez-nous directement ou envoyez un email"
                      : "Call us directly or send an email"}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-background/50 hover:bg-primary/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{contactInfo.email}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-background/50 hover:bg-primary/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{contactInfo.phone}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </GlassCard>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="p-4" hover>
                <MapPin className="w-5 h-5 text-secondary mb-2" />
                <div className="font-medium text-sm mb-1">
                  {locale === "fr" ? "Localisation" : "Location"}
                </div>
                <div className="text-xs text-muted-foreground">{contactInfo.address}</div>
              </GlassCard>

              <GlassCard className="p-4" hover>
                <Clock className="w-5 h-5 text-secondary mb-2" />
                <div className="font-medium text-sm mb-1">
                  {locale === "fr" ? "Horaires" : "Hours"}
                </div>
                <div className="text-xs text-muted-foreground">{contactInfo.hours[locale]}</div>
              </GlassCard>
            </div>

            {/* Social Links */}
            <GlassCard className="p-4">
              <h4 className="font-medium text-sm mb-3">
                {locale === "fr" ? "Suivez-nous" : "Follow us"}
              </h4>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center hover:from-primary hover:to-primary/80 hover:text-white transition-all border border-primary/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </GlassCard>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-sm">
                  {locale === "fr" ? "98% Satisfaction" : "98% Satisfaction"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                {locale === "fr"
                  ? "Plus de 200 clients nous font confiance"
                  : "More than 200 clients trust us"}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
