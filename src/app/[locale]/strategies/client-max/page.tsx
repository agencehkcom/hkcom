import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { StrategyPageLayout } from "@/components/strategies/StrategyPageLayout";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "strategies.clientMax" });

  return {
    title: `Client MAX - ${locale === "fr" ? "Stratégie d'acquisition clients" : "Client Acquisition Strategy"} | HKCOM`,
    description: t("description"),
  };
}

export default async function ClientMaxPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEn = locale === "en";

  const strategy = {
    name: "Client MAX",
    tagline: isEn
      ? "Attract and convert your prospects into customers"
      : "Attirez et convertissez vos prospects en clients",
    description: isEn
      ? "A complete solution combining a professional website optimized for conversions and targeted Google Ads campaigns to generate qualified leads."
      : "Une solution complète combinant un site web professionnel optimisé pour les conversions et des campagnes Google Ads ciblées pour générer des leads qualifiés.",
    color: "cyan" as const,
    targetAudience: isEn
      ? "SMEs with clear commercial offerings seeking rapid client acquisition and increased online visibility."
      : "TPE/PME avec une offre commerciale claire cherchant une acquisition client rapide et une visibilité en ligne accrue.",
    duration: isEn ? "3-6 months campaign" : "Campagne 3-6 mois",
    setupTime: isEn ? "15-30 days setup" : "Mise en place 15-30 jours",
    features: [
      {
        icon: "Globe",
        title: isEn ? "Professional Website" : "Site Web Professionnel",
        description: isEn
          ? "Custom website optimized for SEO and conversions with modern design."
          : "Site web sur mesure optimisé pour le SEO et les conversions avec un design moderne.",
      },
      {
        icon: "Search",
        title: isEn ? "Google Ads Campaigns" : "Campagnes Google Ads",
        description: isEn
          ? "Targeted advertising campaigns to reach your ideal customers at the right time."
          : "Campagnes publicitaires ciblées pour atteindre vos clients idéaux au bon moment.",
      },
      {
        icon: "BarChart3",
        title: isEn ? "Conversion Tracking" : "Suivi des Conversions",
        description: isEn
          ? "Detailed analytics and monthly reporting to track your ROI and optimize performance."
          : "Analyses détaillées et rapports mensuels pour suivre votre ROI et optimiser les performances.",
      },
      {
        icon: "Headphones",
        title: isEn ? "Dedicated Support" : "Support Dédié",
        description: isEn
          ? "A single point of contact to guide you throughout your project."
          : "Un interlocuteur unique pour vous accompagner tout au long de votre projet.",
      },
      {
        icon: "Target",
        title: isEn ? "Precise Targeting" : "Ciblage Précis",
        description: isEn
          ? "Advanced targeting strategies to reach qualified prospects in your market."
          : "Stratégies de ciblage avancées pour atteindre des prospects qualifiés sur votre marché.",
      },
      {
        icon: "TrendingUp",
        title: isEn ? "Continuous Optimization" : "Optimisation Continue",
        description: isEn
          ? "Regular adjustments and A/B testing to maximize your campaign performance."
          : "Ajustements réguliers et tests A/B pour maximiser les performances de vos campagnes.",
      },
    ],
    benefits: isEn
      ? [
          "86% increase in reservations or service requests",
          "Professional online presence that converts",
          "Qualified traffic from motivated prospects",
          "Competitive differentiation in your market",
          "Detailed performance tracking and reporting",
          "Eligible for France Num digital subsidies",
        ]
      : [
          "86% d'augmentation des réservations ou demandes de services",
          "Présence en ligne professionnelle qui convertit",
          "Trafic qualifié de prospects motivés",
          "Différenciation concurrentielle sur votre marché",
          "Suivi détaillé des performances et reporting",
          "Éligible aux aides France Num",
        ],
    steps: [
      {
        number: "1",
        title: isEn ? "Discovery" : "Découverte",
        description: isEn
          ? "Analysis of your needs, goals and target market"
          : "Analyse de vos besoins, objectifs et marché cible",
      },
      {
        number: "2",
        title: isEn ? "Strategy" : "Stratégie",
        description: isEn
          ? "Custom proposal with detailed action plan"
          : "Proposition sur mesure avec plan d'action détaillé",
      },
      {
        number: "3",
        title: isEn ? "Implementation" : "Mise en œuvre",
        description: isEn
          ? "Website creation and campaign launch"
          : "Création du site et lancement des campagnes",
      },
      {
        number: "4",
        title: isEn ? "Results" : "Résultats",
        description: isEn
          ? "Monitoring, optimization and goal achievement"
          : "Suivi, optimisation et atteinte des objectifs",
      },
    ],
    results: [
      {
        value: "+86%",
        label: isEn ? "Conversion increase" : "Augmentation des conversions",
      },
      {
        value: "15-30",
        label: isEn ? "Days to launch" : "Jours pour le lancement",
      },
      {
        value: "100%",
        label: isEn ? "Client satisfaction" : "Satisfaction client",
      },
      {
        value: "500€",
        label: isEn ? "France Num subsidy" : "Aide France Num",
      },
    ],
    videoAskId: "",
  };

  return (
    <StrategyPageLayout
      locale={locale as "fr" | "en"}
      strategy={strategy}
    />
  );
}
