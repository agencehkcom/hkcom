"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlassCard } from "@/components/shared/GlassCard";
import {
  ExternalLink,
  TrendingUp,
  Eye,
  MousePointer2,
  ShoppingCart,
  Play,
  Heart,
  Share2,
  Users,
} from "lucide-react";

// Types
interface WebProject {
  title: string;
  image: string;
  description: string;
  tags: string[];
  url?: string;
  stats?: { label: string; value: string }[];
}

interface AdsProject {
  title: string;
  platform: "google" | "meta" | "linkedin";
  description: string;
  metrics: {
    impressions: string;
    clicks: string;
    conversions: string;
    roas: string;
  };
  industry: string;
}

interface ContentProject {
  title: string;
  thumbnail: string;
  type: "video" | "photo" | "reel";
  description: string;
  stats: {
    views?: string;
    likes?: string;
    shares?: string;
  };
  duration?: string;
}

// ============================================
// WEB REALISATIONS
// ============================================
const webProjects: WebProject[] = [
  {
    title: "Maamri Halles",
    image: "/images/portfolio/maamri.jpg",
    description: "Site vitrine pour un service traiteur haut de gamme",
    tags: ["Site vitrine", "E-commerce"],
    stats: [
      { label: "Conversion", value: "+45%" },
      { label: "Trafic", value: "+120%" },
    ],
  },
  {
    title: "Restaurant Papylles",
    image: "/images/portfolio/papylles.png",
    description: "Site web avec réservation en ligne pour restaurant gastronomique",
    tags: ["Site vitrine", "Réservation"],
    stats: [
      { label: "Réservations", value: "+80%" },
      { label: "Mobile", value: "65%" },
    ],
  },
  {
    title: "L'École des Pros",
    image: "/images/portfolio/lecole-des-pros.png",
    description: "Plateforme de formation professionnelle avec espace membre",
    tags: ["Plateforme", "LMS"],
    stats: [
      { label: "Étudiants", value: "500+" },
      { label: "Cours", value: "50+" },
    ],
  },
  {
    title: "Coop Bazar",
    image: "/images/portfolio/coop-bazar.png",
    description: "Marketplace e-commerce pour produits locaux et artisanaux",
    tags: ["E-commerce", "Marketplace"],
    stats: [
      { label: "Produits", value: "1000+" },
      { label: "Ventes", value: "+200%" },
    ],
  },
];

export function WebRealisations({ locale }: { locale: "fr" | "en" }) {
  const isEn = locale === "en";

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-mesh opacity-20" />
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? "Our Web Creations" : "Nos Réalisations Web"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isEn
              ? "Websites that convert and impress"
              : "Des sites qui convertissent et impressionnent"}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {webProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="group overflow-hidden h-full" hover>
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Stats overlay */}
                  {project.stats && (
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      {project.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm"
                        >
                          <TrendingUp className="w-3 h-3 text-white" />
                          <span className="text-white text-xs font-bold">
                            {stat.value}
                          </span>
                          <span className="text-white/70 text-xs">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
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
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// ADS REALISATIONS
// ============================================
const adsProjects: AdsProject[] = [
  {
    title: "Restaurant Le Gourmet",
    platform: "meta",
    description: "Campagne de réservations pour restaurant étoilé",
    metrics: {
      impressions: "245K",
      clicks: "8.2K",
      conversions: "312",
      roas: "4.5x",
    },
    industry: "Restauration",
  },
  {
    title: "Boutique Mode Paris",
    platform: "google",
    description: "Campagne Shopping pour e-commerce mode",
    metrics: {
      impressions: "1.2M",
      clicks: "45K",
      conversions: "1,847",
      roas: "6.2x",
    },
    industry: "E-commerce",
  },
  {
    title: "Cabinet Conseil RH",
    platform: "linkedin",
    description: "Génération de leads B2B qualifiés",
    metrics: {
      impressions: "89K",
      clicks: "2.1K",
      conversions: "156",
      roas: "8.1x",
    },
    industry: "B2B Services",
  },
  {
    title: "Agence Immobilière",
    platform: "google",
    description: "Campagne locale pour mandats exclusifs",
    metrics: {
      impressions: "320K",
      clicks: "12K",
      conversions: "234",
      roas: "5.8x",
    },
    industry: "Immobilier",
  },
];

const platformLogos = {
  google: (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
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
  ),
  meta: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

export function AdsRealisations({ locale }: { locale: "fr" | "en" }) {
  const isEn = locale === "en";

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? "Campaign Results" : "Résultats de Campagnes"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isEn
              ? "Real performance from our advertising campaigns"
              : "Des performances réelles de nos campagnes publicitaires"}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {adsProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full" hover>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {platformLogos[project.platform]}
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">
                        {project.platform === "meta" ? "Meta Ads" : project.platform === "google" ? "Google Ads" : "LinkedIn Ads"}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary font-medium">
                    {project.industry}
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-3 mt-4">
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <Eye className="w-4 h-4 mx-auto mb-1 text-blue-400" />
                    <div className="text-lg font-bold">{project.metrics.impressions}</div>
                    <div className="text-[10px] text-muted-foreground">Impressions</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <MousePointer2 className="w-4 h-4 mx-auto mb-1 text-green-400" />
                    <div className="text-lg font-bold">{project.metrics.clicks}</div>
                    <div className="text-[10px] text-muted-foreground">Clics</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <ShoppingCart className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                    <div className="text-lg font-bold">{project.metrics.conversions}</div>
                    <div className="text-[10px] text-muted-foreground">Conversions</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-secondary/20">
                    <TrendingUp className="w-4 h-4 mx-auto mb-1 text-secondary" />
                    <div className="text-lg font-bold text-secondary">{project.metrics.roas}</div>
                    <div className="text-[10px] text-muted-foreground">ROAS</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "2M€+", label: isEn ? "Ad spend managed" : "Budget géré" },
            { value: "50+", label: isEn ? "Active campaigns" : "Campagnes actives" },
            { value: "300%", label: isEn ? "Average ROI" : "ROI moyen" },
            { value: "15K+", label: isEn ? "Leads generated" : "Leads générés" },
          ].map((stat, i) => (
            <GlassCard key={i} className="p-4 text-center" glow="cyan">
              <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// CONTENT REALISATIONS
// ============================================
const contentProjects: ContentProject[] = [
  {
    title: "Lancement Produit Cosmétique",
    thumbnail: "/images/portfolio/maamri.jpg",
    type: "video",
    description: "Vidéo promotionnelle pour lancement de gamme beauté",
    stats: { views: "125K", likes: "8.2K", shares: "1.2K" },
    duration: "0:45",
  },
  {
    title: "Restaurant Gastronomique",
    thumbnail: "/images/portfolio/papylles.png",
    type: "reel",
    description: "Série de reels pour mise en avant des plats signature",
    stats: { views: "89K", likes: "5.4K", shares: "847" },
    duration: "0:30",
  },
  {
    title: "Shooting E-commerce Mode",
    thumbnail: "/images/portfolio/coop-bazar.png",
    type: "photo",
    description: "Production photo complète pour collection printemps",
    stats: { views: "45K", likes: "3.1K" },
  },
  {
    title: "Vidéo Corporate Tech",
    thumbnail: "/images/portfolio/lecole-des-pros.png",
    type: "video",
    description: "Film d'entreprise pour startup tech innovante",
    stats: { views: "67K", likes: "2.8K", shares: "456" },
    duration: "2:30",
  },
];

const typeLabels = {
  video: { label: "Vidéo", color: "bg-red-500" },
  photo: { label: "Photo", color: "bg-blue-500" },
  reel: { label: "Reel", color: "bg-purple-500" },
};

export function ContentRealisations({ locale }: { locale: "fr" | "en" }) {
  const isEn = locale === "en";

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-mesh opacity-20" />
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? "Our Productions" : "Nos Productions"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isEn
              ? "Visual content that captivates and converts"
              : "Du contenu visuel qui captive et convertit"}
          </p>
        </motion.div>

        {/* Projects Grid - Instagram style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-800">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Type badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full text-white font-medium ${typeLabels[project.type].color}`}
                  >
                    {typeLabels[project.type].label}
                  </span>
                </div>

                {/* Duration for videos */}
                {project.duration && (
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 text-white text-xs">
                    <Play className="w-3 h-3 fill-white" />
                    {project.duration}
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                  <h3 className="text-white font-bold text-center text-sm mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-xs text-center mb-3">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4">
                    {project.stats.views && (
                      <div className="flex items-center gap-1 text-white text-xs">
                        <Eye className="w-3 h-3" />
                        {project.stats.views}
                      </div>
                    )}
                    {project.stats.likes && (
                      <div className="flex items-center gap-1 text-white text-xs">
                        <Heart className="w-3 h-3" />
                        {project.stats.likes}
                      </div>
                    )}
                    {project.stats.shares && (
                      <div className="flex items-center gap-1 text-white text-xs">
                        <Share2 className="w-3 h-3" />
                        {project.stats.shares}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "200+", label: isEn ? "Videos produced" : "Vidéos produites", icon: Play },
            { value: "50M+", label: isEn ? "Total views" : "Vues totales", icon: Eye },
            { value: "500+", label: isEn ? "Photos shot" : "Photos réalisées", icon: Users },
            { value: "100%", label: "Satisfaction", icon: Heart },
          ].map((stat, i) => (
            <GlassCard key={i} className="p-4 text-center" glow="cyan">
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-accent" />
              <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
