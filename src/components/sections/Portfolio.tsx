"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GlassCard } from "@/components/shared/GlassCard";
import { MapPin, Clock, Globe, Megaphone, Video, Palette } from "lucide-react";

interface Client {
  id: number;
  name: string;
  industry: { fr: string; en: string };
  location: string;
  duration: { fr: string; en: string };
  image?: string;
  initials: string;
  gradient: string;
  description: { fr: string; en: string };
  services: string[];
  tags: string[];
}

const clients: Client[] = [
  {
    id: 1,
    name: "Chef Event",
    industry: { fr: "Chef à domicile", en: "Private Chef Service" },
    location: "Dunkerque",
    duration: { fr: "Client depuis 4 ans", en: "Client for 4 years" },
    image: "/images/portfolio/chef-event.png",
    initials: "CE",
    gradient: "from-orange-500 to-red-500",
    description: {
      fr: "Site e-commerce, clip vidéo promotionnel, visuels publicitaires et logo pour le service de chef cuisinier à domicile du Chef Nacer Aouni. Campagnes Google Ads et Meta Ads avec un ROI multiplié par 3.",
      en: "E-commerce website, promotional video, advertising visuals and logo for Chef Nacer Aouni's private chef service. Google Ads and Meta Ads campaigns with 3x ROI.",
    },
    services: ["web", "ads", "content", "branding"],
    tags: ["E-commerce", "Google Ads", "Vidéo", "Logo"],
  },
  {
    id: 2,
    name: "Restaurant Papylles",
    industry: { fr: "Restaurant gastronomique", en: "Gourmet Restaurant" },
    location: "Dunkerque",
    duration: { fr: "Client depuis 2 ans", en: "Client for 2 years" },
    image: "/images/portfolio/papylles.png",
    initials: "RP",
    gradient: "from-emerald-500 to-teal-500",
    description: {
      fr: "Site web avec réservation en ligne, vidéo publicitaire, logo et campagnes Google Ads pour le restaurant gastronomique du Chef Thomas Briandet. Augmentation de 40% des réservations.",
      en: "Website with online booking, promotional video, logo and Google Ads campaigns for Chef Thomas Briandet's gourmet restaurant. 40% increase in bookings.",
    },
    services: ["web", "ads", "content", "branding"],
    tags: ["Site vitrine", "Réservation", "Google Ads", "Vidéo", "Logo"],
  },
  {
    id: 3,
    name: "Coop Bazar",
    industry: { fr: "Boutique produits orientaux", en: "Oriental Products Store" },
    location: "Grande-Synthe",
    duration: { fr: "Client depuis 2 ans", en: "Client for 2 years" },
    image: "/images/portfolio/coop-bazar.png",
    initials: "CB",
    gradient: "from-amber-500 to-yellow-500",
    description: {
      fr: "Site vitrine, vidéo publicitaire, logo et campagnes Google Ads pour une boutique de produits orientaux à Grande-Synthe. Visibilité locale multipliée par 2.",
      en: "Showcase website, promotional video, logo and Google Ads campaigns for an oriental products store in Grande-Synthe. 2x local visibility.",
    },
    services: ["web", "ads", "content", "branding"],
    tags: ["Site vitrine", "Google Ads", "Vidéo", "Logo"],
  },
  {
    id: 4,
    name: "Mob Destock",
    industry: { fr: "Destockage mobilier", en: "Furniture Outlet" },
    location: "Roubaix",
    duration: { fr: "Client depuis 3 ans", en: "Client for 3 years" },
    image: "/images/portfolio/mob-destock.png",
    initials: "MD",
    gradient: "from-blue-500 to-indigo-500",
    description: {
      fr: "Site e-commerce, vidéo publicitaire, logo et campagnes Google Ads & Meta Ads pour un magasin de destockage de mobilier à Roubaix. Chiffre d'affaires doublé grâce au digital.",
      en: "E-commerce website, promotional video, logo and Google Ads & Meta Ads campaigns for a furniture outlet store in Roubaix. Revenue doubled thanks to digital.",
    },
    services: ["web", "ads", "content", "branding"],
    tags: ["E-commerce", "Google Ads", "Vidéo", "Logo"],
  },
  {
    id: 5,
    name: "Boulangerie Le Synthois",
    industry: { fr: "Boulangerie-pâtisserie", en: "Bakery & Pastry" },
    location: "Grande-Synthe",
    duration: { fr: "Client depuis 4 ans", en: "Client for 4 years" },
    initials: "LS",
    gradient: "from-yellow-600 to-amber-500",
    description: {
      fr: "Site vitrine, vidéo promotionnelle et campagnes Google Ads pour une boulangerie-pâtisserie artisanale à Grande-Synthe. Notoriété locale renforcée avec +150 avis Google.",
      en: "Showcase website, promotional video and Google Ads campaigns for an artisan bakery in Grande-Synthe. Enhanced local awareness with 150+ Google reviews.",
    },
    services: ["web", "ads", "content"],
    tags: ["Site vitrine", "Google Ads", "Vidéo"],
  },
  {
    id: 6,
    name: "Extha",
    industry: { fr: "Protection incendie", en: "Fire Protection" },
    location: "Dunkerque",
    duration: { fr: "Client depuis 4 ans", en: "Client for 4 years" },
    initials: "EX",
    gradient: "from-red-500 to-orange-600",
    description: {
      fr: "Site vitrine, campagnes Google Ads, vidéo promotionnelle, charte graphique et catalogues pour une entreprise spécialisée en protection incendie.",
      en: "Showcase website, Google Ads campaigns, promotional video, brand identity and catalogs for a fire protection company.",
    },
    services: ["web", "ads", "content", "branding"],
    tags: ["Site vitrine", "Google Ads", "Vidéo", "Charte graphique"],
  },
  {
    id: 7,
    name: "Maamri Halles",
    industry: { fr: "Traiteur haut de gamme", en: "Premium Catering" },
    location: "Dunkerque",
    duration: { fr: "Client depuis 1 an", en: "Client for 1 year" },
    image: "/images/portfolio/maamri.jpg",
    initials: "MH",
    gradient: "from-violet-500 to-purple-500",
    description: {
      fr: "Site vitrine élégant pour un service traiteur haut de gamme avec présentation du menu et formulaire de devis.",
      en: "Elegant showcase website for a premium catering service with menu presentation and quote request form.",
    },
    services: ["web"],
    tags: ["Site vitrine"],
  },
  {
    id: 8,
    name: "L'École des Pros",
    industry: { fr: "Formation professionnelle", en: "Professional Training" },
    location: "France",
    duration: { fr: "Projet terminé", en: "Completed project" },
    image: "/images/portfolio/lecole-des-pros.png",
    initials: "EP",
    gradient: "from-cyan-500 to-blue-500",
    description: {
      fr: "Plateforme de formation professionnelle en ligne avec espace membre, système de paiement et suivi de progression des apprenants.",
      en: "Online professional training platform with member area, payment system and learner progress tracking.",
    },
    services: ["web"],
    tags: ["Plateforme LMS", "E-commerce"],
  },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  "Site vitrine":     { bg: "bg-primary/10",      text: "text-primary" },
  "E-commerce":       { bg: "bg-secondary/10",    text: "text-secondary" },
  "Réservation":      { bg: "bg-accent/10",       text: "text-accent" },
  "Plateforme LMS":   { bg: "bg-cyan-500/10",     text: "text-cyan-500" },
  "Google Ads":       { bg: "bg-orange-500/10",    text: "text-orange-500" },
  "Vidéo":            { bg: "bg-violet-500/10",    text: "text-violet-500" },
  "Logo":             { bg: "bg-emerald-500/10",   text: "text-emerald-500" },
  "Charte graphique": { bg: "bg-rose-500/10",      text: "text-rose-500" },
};

const defaultTagColor = { bg: "bg-muted", text: "text-muted-foreground" };

const filterTabs = [
  { key: "all", icon: null },
  { key: "web", icon: Globe },
  { key: "ads", icon: Megaphone },
  { key: "content", icon: Video },
  { key: "branding", icon: Palette },
];

export function Portfolio() {
  const t = useTranslations("portfolio");
  const locale = useLocale() as "fr" | "en";
  const [activeTab, setActiveTab] = useState("all");

  const filteredClients =
    activeTab === "all"
      ? clients
      : clients.filter((c) => c.services.includes(activeTab));

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
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

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "glass hover:bg-primary/10"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {t(`categories.${tab.key}`)}
              </button>
            );
          })}
        </motion.div>

        {/* Count */}
        <motion.p
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          {filteredClients.length} {t("clientCount")}
        </motion.p>

        {/* Clients Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client, index) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <GlassCard className="group overflow-hidden h-full" hover>
                  {/* Image or Gradient Fallback */}
                  <div className="relative h-52 overflow-hidden">
                    {client.image ? (
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${client.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
                      >
                        <span className="text-5xl font-bold text-white/90">
                          {client.initials}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Location badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
                      <MapPin className="w-3 h-3" />
                      {client.location}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {client.tags.map((tag) => {
                        const colors = tagColors[tag] || defaultTagColor;
                        return (
                          <span
                            key={tag}
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors.bg} ${colors.text}`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>

                    {/* Name + Industry */}
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 flex items-center gap-3">
                      <span>{client.industry[locale]}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {client.duration[locale]}
                      </span>
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {client.description[locale]}
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
