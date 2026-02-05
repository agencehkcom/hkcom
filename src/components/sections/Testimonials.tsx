"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/shared/GlassCard";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Chef Event",
    role: { fr: "Restauration/Événementiel", en: "Catering/Events" },
    duration: { fr: "Client depuis 4 ans", en: "Client for 4 years" },
    avatar: "CE",
    rating: 5,
    text: {
      fr: "Grâce à HKCOM, j'ai enfin un site à la hauteur de mes prestations. Les demandes de devis ont triplé depuis le lancement. Merci pour ce travail remarquable !",
      en: "Thanks to HKCOM, I finally have a website that matches my services. Quote requests have tripled since launch. Thank you for this remarkable work!",
    },
  },
  {
    id: 2,
    name: "Mob Destock",
    role: { fr: "Mobilier", en: "Furniture" },
    duration: { fr: "Client depuis 3 ans", en: "Client for 3 years" },
    avatar: "MD",
    rating: 5,
    text: {
      fr: "Une équipe réactive et professionnelle qui a su comprendre nos besoins. Notre site e-commerce génère maintenant un chiffre d'affaires conséquent.",
      en: "A responsive and professional team that understood our needs. Our e-commerce site now generates significant revenue.",
    },
  },
  {
    id: 3,
    name: "Extha",
    role: { fr: "Isolation", en: "Insulation" },
    duration: { fr: "Client depuis 4 ans", en: "Client for 4 years" },
    avatar: "EX",
    rating: 5,
    text: {
      fr: "HKCOM nous accompagne depuis 4 ans avec un service irréprochable. Les campagnes Google Ads ont considérablement augmenté notre visibilité.",
      en: "HKCOM has been supporting us for 4 years with impeccable service. Google Ads campaigns have significantly increased our visibility.",
    },
  },
  {
    id: 4,
    name: "Le Fourquet's",
    role: { fr: "Restauration", en: "Restaurant" },
    duration: { fr: "Client depuis 3 ans", en: "Client for 3 years" },
    avatar: "LF",
    rating: 5,
    text: {
      fr: "Le site créé par HKCOM reflète parfaitement l'ambiance de notre restaurant. Les réservations en ligne ont explosé !",
      en: "The website created by HKCOM perfectly reflects our restaurant's atmosphere. Online reservations have skyrocketed!",
    },
  },
  {
    id: 5,
    name: "Coop Bazar",
    role: { fr: "Commerce", en: "Retail" },
    duration: { fr: "Client depuis 2 ans", en: "Client for 2 years" },
    avatar: "CB",
    rating: 5,
    text: {
      fr: "La création de notre marketplace a été un vrai succès. L'équipe a su comprendre nos besoins et proposer des solutions innovantes.",
      en: "The creation of our marketplace was a real success. The team understood our needs and proposed innovative solutions.",
    },
  },
  {
    id: 6,
    name: "Restaurant Papylles",
    role: { fr: "Restauration", en: "Restaurant" },
    duration: { fr: "Client depuis 2 ans", en: "Client for 2 years" },
    avatar: "RP",
    rating: 5,
    text: {
      fr: "HKCOM a transformé notre présence en ligne. Notre nouveau site attire beaucoup plus de clients et les réservations ont augmenté de 40%.",
      en: "HKCOM transformed our online presence. Our new website attracts many more customers and bookings have increased by 40%.",
    },
  },
  {
    id: 7,
    name: "Le Synthois",
    role: { fr: "Boulangerie", en: "Bakery" },
    duration: { fr: "Client depuis 4 ans", en: "Client for 4 years" },
    avatar: "LS",
    rating: 5,
    text: {
      fr: "Partenaires de confiance depuis 4 ans. Notre site vitrine met parfaitement en valeur nos produits artisanaux.",
      en: "Trusted partners for 4 years. Our showcase website perfectly highlights our artisanal products.",
    },
  },
  {
    id: 8,
    name: "FM Auto",
    role: { fr: "Automobile", en: "Automotive" },
    duration: { fr: "Client depuis 1 an", en: "Client for 1 year" },
    avatar: "FA",
    rating: 5,
    text: {
      fr: "Service impeccable et résultats au rendez-vous. Notre site reflète parfaitement notre image de marque professionnelle.",
      en: "Impeccable service and results delivered. Our website perfectly reflects our professional brand image.",
    },
  },
  {
    id: 9,
    name: "La Brocante de Camille",
    role: { fr: "Antiquariat", en: "Antiques" },
    duration: { fr: "Client depuis 1 an", en: "Client for 1 year" },
    avatar: "BC",
    rating: 5,
    text: {
      fr: "Un site élégant qui met en valeur mes trouvailles. L'équipe a su capturer l'essence de ma boutique.",
      en: "An elegant website that showcases my finds. The team captured the essence of my shop.",
    },
  },
];

export function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = useLocale() as "fr" | "en";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

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

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 p-3 rounded-full glass hover:glow-cyan transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 p-3 rounded-full glass hover:glow-cyan transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonial Card */}
            <div className="overflow-hidden px-4">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <GlassCard className="p-8 md:p-12 text-center" hover={false}>
                    {/* Quote Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Quote className="w-8 h-8 text-primary" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <blockquote className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
                      &ldquo;{currentTestimonial.text[locale]}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                        {currentTestimonial.avatar}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">
                          {currentTestimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {currentTestimonial.role[locale]}
                        </div>
                        <div className="text-xs text-primary font-medium">
                          {currentTestimonial.duration[locale]}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`p-4 rounded-xl transition-all ${
                index === currentIndex
                  ? "glass glow-cyan"
                  : "bg-muted/30 hover:bg-muted/50"
              }`}
            >
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-bold ${
                  index === currentIndex
                    ? "bg-gradient-to-br from-primary to-secondary text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {testimonial.avatar}
              </div>
              <div className="mt-2 text-xs font-medium truncate">
                {testimonial.name.split(" ")[0]}
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
