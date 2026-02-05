"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GlassCard } from "@/components/shared/GlassCard";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Maamri Halles",
    category: "web",
    image: "/images/portfolio/maamri.jpg",
    description: {
      fr: "Site vitrine pour un service traiteur haut de gamme",
      en: "Showcase website for a premium catering service",
    },
    tags: ["Site vitrine", "E-commerce"],
    url: "#",
  },
  {
    id: 2,
    title: "Restaurant Papylles",
    category: "web",
    image: "/images/portfolio/papylles.png",
    description: {
      fr: "Site web avec réservation en ligne pour restaurant gastronomique",
      en: "Website with online booking for gourmet restaurant",
    },
    tags: ["Site vitrine", "Réservation"],
    url: "#",
  },
  {
    id: 3,
    title: "L'École des Pros",
    category: "web",
    image: "/images/portfolio/lecole-des-pros.png",
    description: {
      fr: "Plateforme de formation professionnelle avec espace membre",
      en: "Professional training platform with member area",
    },
    tags: ["Plateforme", "LMS"],
    url: "#",
  },
  {
    id: 4,
    title: "Chef Event",
    category: "web",
    image: "/images/portfolio/chef-event.png",
    description: {
      fr: "Site événementiel pour chef cuisinier à domicile",
      en: "Event website for private chef services",
    },
    tags: ["Site vitrine", "Booking"],
    url: "#",
  },
  {
    id: 5,
    title: "Coop Bazar",
    category: "ecommerce",
    image: "/images/portfolio/coop-bazar.png",
    description: {
      fr: "Marketplace e-commerce pour produits locaux et artisanaux",
      en: "E-commerce marketplace for local and artisanal products",
    },
    tags: ["E-commerce", "Marketplace"],
    url: "#",
  },
  {
    id: 6,
    title: "Spa Douce Bulles",
    category: "web",
    image: "/images/portfolio/spa-douce-bulles.png",
    description: {
      fr: "Site bien-être avec prise de rendez-vous en ligne",
      en: "Wellness website with online appointment booking",
    },
    tags: ["Site vitrine", "Booking"],
    url: "#",
  },
];

const categories = [
  { key: "all", fr: "Tous", en: "All" },
  { key: "web", fr: "Sites Web", en: "Websites" },
  { key: "ecommerce", fr: "E-commerce", en: "E-commerce" },
];

export function Portfolio() {
  const t = useTranslations("portfolio");
  const locale = useLocale() as "fr" | "en";
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-20" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "glass hover:bg-primary/10"
              }`}
            >
              {t(`categories.${cat.key}`)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <GlassCard className="group overflow-hidden h-full" hover>
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        {t("viewProject")}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {project.description[locale]}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
