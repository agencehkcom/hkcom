"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp } from "lucide-react";

const stories = [
  { src: "/images/success-stories/maxime-garage.png", alt: "Maxime - CA doublé - Dunkerque" },
  { src: "/images/success-stories/susie-traiteur.png", alt: "Susie - Carnet de commande rempli - Béthune" },
  { src: "/images/success-stories/yanis-tech.png", alt: "Yanis - Nouveau service lancé - Roubaix" },
  { src: "/images/success-stories/alexia-immobilier.png", alt: "Alexia - Prospects doublés - Tourcoing" },
  { src: "/images/success-stories/daniel-patisserie.png", alt: "Daniel - N°1 sur Google - Douai" },
  { src: "/images/success-stories/anna-restaurant.png", alt: "Anna - +79% de réservation - Lille" },
  { src: "/images/success-stories/sophie-hotel.png", alt: "Sophie - Complet 6 mois - Calais" },
  { src: "/images/success-stories/mohamed-btp.png", alt: "Mohamed - 1 chantier par semaine - Arras" },
  { src: "/images/success-stories/yann-ecommerce.png", alt: "Yann - +97% de ventes - Dunkerque" },
];

// Duplicate for seamless infinite scroll
const row1 = [...stories, ...stories];
const row2 = [...stories.slice().reverse(), ...stories.slice().reverse()];

export function SuccessStories() {
  const locale = useLocale() as "fr" | "en";

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">
              {locale === "fr" ? "Résultats Clients" : "Client Results"}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {locale === "fr" ? (
              <>
                Ils ont <span className="text-gradient">boosté</span> leur activité
              </>
            ) : (
              <>
                They <span className="text-gradient">boosted</span> their business
              </>
            )}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {locale === "fr"
              ? "Des résultats concrets pour des entreprises du Nord-Pas-de-Calais"
              : "Concrete results for businesses in Nord-Pas-de-Calais"}
          </p>
        </motion.div>

        {/* Row 1 - Scrolls left */}
        <div className="mb-6 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
            }}
          >
            {row1.map((story, i) => (
              <div
                key={`r1-${i}`}
                className="flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={story.src}
                    alt={story.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="320px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Scrolls right */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" },
            }}
          >
            {row2.map((story, i) => (
              <div
                key={`r2-${i}`}
                className="flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={story.src}
                    alt={story.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="320px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
