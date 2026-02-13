import { setRequestLocale } from "next-intl/server";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { AdsPerformanceAnimation } from "@/components/animations/AdsPerformanceAnimation";
import { AdsRealisations } from "@/components/services/ServiceRealisations";
import { ServiceJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/ServiceJsonLd";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const baseUrl = "https://hkcom.fr";

  const title = isEn
    ? "Google Ads Agency Dunkirk & Nord | Facebook Ads Expert | HKCOM"
    : "Agence Google Ads Dunkerque | Expert Publicité Facebook Nord | HKCOM";

  const description = isEn
    ? "Local Google Ads agency in Dunkirk. Facebook, Instagram, LinkedIn campaigns for Nord businesses. 300% average ROI. Your advertising partner in Hauts-de-France."
    : "Agence Google Ads locale à Dunkerque. Campagnes Facebook, Instagram, LinkedIn pour entreprises du Nord. ROI moyen 300%. Votre partenaire pub dans les Hauts-de-France.";

  return {
    title,
    description,
    keywords: isEn
      ? [
          "Google Ads Dunkirk",
          "Facebook Ads Nord",
          "advertising agency Dunkirk",
          "PPC management Nord-Pas-de-Calais",
          "Instagram Ads Hauts-de-France",
          "LinkedIn Ads Nord",
          "local digital advertising",
          "SEA agency Dunkirk",
          "Meta Ads Nord",
          "digital marketing Dunkirk",
        ]
      : [
          "agence Google Ads Dunkerque",
          "publicité Facebook Nord",
          "agence publicité Dunkerque",
          "gestion Google Ads Nord-Pas-de-Calais",
          "publicité Instagram Hauts-de-France",
          "LinkedIn Ads Nord",
          "publicité digitale locale",
          "agence SEA Dunkerque",
          "Meta Ads Nord",
          "marketing digital Dunkerque",
          "publicité Calais",
          "Google Ads Lille",
        ],
    authors: [{ name: "HKCOM - Agence Ads Dunkerque", url: baseUrl }],
    creator: "HKCOM",
    publisher: "HKCOM",
    alternates: {
      canonical: `${baseUrl}/${locale}/services/ads`,
      languages: {
        fr: `${baseUrl}/fr/services/ads`,
        en: `${baseUrl}/en/services/ads`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/ads`,
      siteName: "HKCOM - Agence Ads Dunkerque",
      locale: isEn ? "en_US" : "fr_FR",
      alternateLocale: isEn ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og/ads-service.jpg`,
          width: 1200,
          height: 630,
          alt: isEn ? "HKCOM Advertising Agency Dunkirk" : "HKCOM Agence Publicité Dunkerque",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/og/ads-service.jpg`],
      creator: "@hkcom_agency",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: isEn ? "Digital Advertising" : "Publicité Digitale",
    other: {
      "geo.region": "FR-59",
      "geo.placename": "Dunkerque",
      "geo.position": "51.0343;2.3768",
      ICBM: "51.0343, 2.3768",
    },
  };
}

export default async function AdsServicePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEn = locale === "en";

  const service = {
    name: isEn ? "Google Ads Dunkirk" : "Google Ads Dunkerque",
    tagline: isEn
      ? "Your local advertising expert in Nord-Pas-de-Calais"
      : "Votre expert pub local dans le Nord-Pas-de-Calais",
    description: isEn
      ? "Local advertising agency in Dunkirk"
      : "Agence publicité locale à Dunkerque",
    longDescription: isEn
      ? "Based in Dunkirk, we help Nord businesses grow with targeted advertising campaigns on Google, Facebook, Instagram, and LinkedIn. Local expertise, personalized support, and proven results for businesses in Hauts-de-France."
      : "Basés à Dunkerque, nous aidons les entreprises du Nord à se développer avec des campagnes publicitaires ciblées sur Google, Facebook, Instagram et LinkedIn. Expertise locale, accompagnement personnalisé et résultats prouvés pour les entreprises des Hauts-de-France.",
    heroIcon: "Megaphone",
    color: "secondary" as const,
    features: [
      {
        icon: "Search",
        title: isEn ? "Google Ads" : "Google Ads",
        description: isEn
          ? "Search, Display, and Shopping campaigns to capture high-intent prospects."
          : "Campagnes Search, Display et Shopping pour capter des prospects à forte intention.",
      },
      {
        icon: "Share2",
        title: isEn ? "Social Media Ads" : "Publicité Réseaux Sociaux",
        description: isEn
          ? "Facebook, Instagram, and LinkedIn campaigns to reach your ideal audience."
          : "Campagnes Facebook, Instagram et LinkedIn pour toucher votre audience idéale.",
      },
      {
        icon: "Target",
        title: isEn ? "Precise Targeting" : "Ciblage Précis",
        description: isEn
          ? "Advanced audience targeting based on demographics, interests, and behaviors."
          : "Ciblage avancé basé sur les données démographiques, intérêts et comportements.",
      },
      {
        icon: "BarChart3",
        title: isEn ? "Performance Tracking" : "Suivi des Performances",
        description: isEn
          ? "Real-time dashboards and detailed monthly reports on campaign performance."
          : "Tableaux de bord en temps réel et rapports mensuels détaillés sur vos campagnes.",
      },
      {
        icon: "TrendingUp",
        title: isEn ? "Continuous Optimization" : "Optimisation Continue",
        description: isEn
          ? "Regular A/B testing and adjustments to maximize your ROI."
          : "Tests A/B réguliers et ajustements pour maximiser votre ROI.",
      },
      {
        icon: "Shield",
        title: isEn ? "Conversion Tracking" : "Suivi des Conversions",
        description: isEn
          ? "Advanced tracking setup to measure every lead and sale generated."
          : "Configuration avancée du tracking pour mesurer chaque lead et vente générés.",
      },
    ],
    benefits: isEn
      ? [
          "Local agency in Dunkirk - personalized support",
          "Expertise in Nord-Pas-de-Calais market",
          "Strategy meetings at your premises",
          "Transparent reporting with clear KPIs",
          "Dedicated account manager based in the region",
          "No long-term commitment - monthly contracts",
          "Average ROI of 300% for local clients",
        ]
      : [
          "Agence locale à Dunkerque - accompagnement personnalisé",
          "Expertise du marché Nord-Pas-de-Calais",
          "Réunions stratégie dans vos locaux",
          "Reporting transparent avec KPIs clairs",
          "Account manager dédié basé dans la région",
          "Sans engagement long terme - contrats mensuels",
          "ROI moyen de 300% pour nos clients locaux",
        ],
    process: [
      {
        number: "1",
        title: isEn ? "Audit" : "Audit",
        description: isEn
          ? "We analyze your market, competitors, and current performance"
          : "Nous analysons votre marché, concurrents et performances actuelles",
      },
      {
        number: "2",
        title: isEn ? "Strategy" : "Stratégie",
        description: isEn
          ? "We define targeting, messaging, and budget allocation"
          : "Nous définissons le ciblage, les messages et la répartition budget",
      },
      {
        number: "3",
        title: isEn ? "Launch" : "Lancement",
        description: isEn
          ? "We create and launch your optimized campaigns"
          : "Nous créons et lançons vos campagnes optimisées",
      },
      {
        number: "4",
        title: isEn ? "Optimize" : "Optimiser",
        description: isEn
          ? "We continuously test and improve performance"
          : "Nous testons et améliorons les performances en continu",
      },
    ],
    faqs: [
      {
        question: isEn
          ? "What advertising budget do I need to get started?"
          : "Quel budget publicitaire faut-il pour commencer ?",
        answer: isEn
          ? "We recommend a minimum ad spend to gather meaningful data. During our discovery call, we'll define the ideal budget based on your goals and market."
          : "Nous recommandons un budget publicitaire minimum pour collecter des données significatives. Lors de notre appel découverte, nous définirons le budget idéal selon vos objectifs et votre marché.",
      },
      {
        question: isEn
          ? "How quickly will I see results?"
          : "En combien de temps vais-je voir des résultats ?",
        answer: isEn
          ? "You can see initial results within the first week. However, optimal performance typically requires 2-3 months of data collection and optimization."
          : "Vous pouvez voir des premiers résultats dès la première semaine. Cependant, les performances optimales nécessitent généralement 2-3 mois de collecte de données et d'optimisation.",
      },
      {
        question: isEn
          ? "Which platforms do you recommend for my business?"
          : "Quelles plateformes recommandez-vous pour mon activité ?",
        answer: isEn
          ? "It depends on your business! Google Ads is great for high-intent searches. Facebook/Instagram works well for B2C. LinkedIn is ideal for B2B. We'll recommend the best mix during our discovery call."
          : "Cela dépend de votre activité ! Google Ads est idéal pour les recherches à forte intention. Facebook/Instagram fonctionne bien en B2C. LinkedIn est parfait pour le B2B. Nous vous recommanderons le meilleur mix lors de notre appel découverte.",
      },
      {
        question: isEn
          ? "Can I pause or stop my campaigns at any time?"
          : "Puis-je mettre en pause ou arrêter mes campagnes à tout moment ?",
        answer: isEn
          ? "Absolutely! Our contracts are monthly with no long-term commitment. You can pause, adjust, or stop your campaigns at any time."
          : "Absolument ! Nos contrats sont mensuels sans engagement long terme. Vous pouvez mettre en pause, ajuster ou arrêter vos campagnes à tout moment.",
      },
    ],
    stats: [
      {
        value: "300%",
        label: isEn ? "ROI for Nord clients" : "ROI clients du Nord",
      },
      {
        value: "50+",
        label: isEn ? "Local campaigns" : "Campagnes locales",
      },
      {
        value: "2M+",
        label: isEn ? "Managed in Nord" : "Gérés dans le Nord",
      },
      {
        value: "1h",
        label: isEn ? "On-site if needed" : "Sur place si besoin",
      },
    ],
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <ServiceJsonLd
        locale={locale as "fr" | "en"}
        serviceName={service.name}
        serviceDescription={service.longDescription}
        serviceType="ads"
      />
      <BreadcrumbJsonLd
        locale={locale as "fr" | "en"}
        serviceName={service.name}
        serviceSlug="ads"
      />
      <FAQJsonLd faqs={service.faqs} />

      <ServicePageLayout
        locale={locale as "fr" | "en"}
        service={service}
        customHeroVisual={<AdsPerformanceAnimation />}
        showBrands
        realisationsComponent={<AdsRealisations locale={locale as "fr" | "en"} />}
      />
    </>
  );
}
