"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Chef Event",
    avatar: "/images/reviews/avatar-1.jpg",
    initials: "CE",
    rating: 5,
    date: { fr: "Il y a 3 mois", en: "3 months ago" },
    text: {
      fr: "Grâce à HKCOM, j'ai enfin un site à la hauteur de mes prestations. Les demandes de devis ont triplé depuis le lancement. Merci pour ce travail remarquable !",
      en: "Thanks to HKCOM, I finally have a website that matches my services. Quote requests have tripled since launch. Thank you for this remarkable work!",
    },
  },
  {
    id: 2,
    name: "Mob Destock",
    avatar: "/images/reviews/avatar-2.jpg",
    initials: "MD",
    rating: 5,
    date: { fr: "Il y a 2 mois", en: "2 months ago" },
    text: {
      fr: "Une équipe réactive et professionnelle qui a su comprendre nos besoins. Notre site e-commerce génère maintenant un chiffre d'affaires conséquent.",
      en: "A responsive and professional team that understood our needs. Our e-commerce site now generates significant revenue.",
    },
  },
  {
    id: 3,
    name: "Extha Isolation",
    avatar: "/images/reviews/avatar-3.jpg",
    initials: "EX",
    rating: 5,
    date: { fr: "Il y a 4 mois", en: "4 months ago" },
    text: {
      fr: "HKCOM nous accompagne depuis 4 ans avec un service irréprochable. Les campagnes Google Ads ont considérablement augmenté notre visibilité.",
      en: "HKCOM has been supporting us for 4 years with impeccable service. Google Ads campaigns have significantly increased our visibility.",
    },
  },
  {
    id: 4,
    name: "Le Fourquet's",
    avatar: "/images/reviews/avatar-4.jpg",
    initials: "LF",
    rating: 5,
    date: { fr: "Il y a 1 mois", en: "1 month ago" },
    text: {
      fr: "Le site créé par HKCOM reflète parfaitement l'ambiance de notre restaurant. Les réservations en ligne ont explosé !",
      en: "The website created by HKCOM perfectly reflects our restaurant's atmosphere. Online reservations have skyrocketed!",
    },
  },
  {
    id: 5,
    name: "Coop Bazar",
    avatar: "/images/reviews/avatar-5.jpg",
    initials: "CB",
    rating: 5,
    date: { fr: "Il y a 5 mois", en: "5 months ago" },
    text: {
      fr: "La création de notre marketplace a été un vrai succès. L'équipe a su comprendre nos besoins et proposer des solutions innovantes.",
      en: "The creation of our marketplace was a real success. The team understood our needs and proposed innovative solutions.",
    },
  },
  {
    id: 6,
    name: "Restaurant Papylles",
    avatar: "/images/reviews/avatar-6.jpg",
    initials: "RP",
    rating: 5,
    date: { fr: "Il y a 2 mois", en: "2 months ago" },
    text: {
      fr: "HKCOM a transformé notre présence en ligne. Notre nouveau site attire beaucoup plus de clients et les réservations ont augmenté de 40%.",
      en: "HKCOM transformed our online presence. Our new website attracts many more customers and bookings have increased by 40%.",
    },
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200 dark:fill-gray-600 dark:text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
  locale,
}: {
  review: (typeof reviews)[0];
  index: number;
  locale: "fr" | "en";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
              {review.initials}
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{review.name}</h4>
              <div className="flex items-center gap-2">
                <StarRating rating={review.rating} />
              </div>
            </div>
          </div>
          {/* Google Logo */}
          <div className="w-6 h-6 relative opacity-60 group-hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </div>
        </div>

        {/* Date */}
        <p className="text-xs text-muted-foreground mb-3">{review.date[locale]}</p>

        {/* Review Text */}
        <p className="text-sm text-foreground/80 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
          {review.text[locale]}
        </p>
      </div>
    </motion.div>
  );
}

export function GoogleReviews() {
  const t = useTranslations("testimonials");
  const locale = useLocale() as "fr" | "en";

  // Calculate average rating
  const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("subtitle")}
          </p>

          {/* Google Rating Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl glass"
          >
            {/* Google Logo */}
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{avgRating.toFixed(1)}</span>
                <StarRating rating={Math.round(avgRating)} />
              </div>
              <p className="text-sm text-muted-foreground">
                {locale === "fr"
                  ? `Basé sur ${reviews.length} avis Google`
                  : `Based on ${reviews.length} Google reviews`}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} locale={locale} />
          ))}
        </div>

        {/* CTA to leave a review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://g.page/r/CQdFH8BdH3NXEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:glow-cyan transition-all text-sm font-medium"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            {locale === "fr" ? "Laisser un avis" : "Leave a review"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
