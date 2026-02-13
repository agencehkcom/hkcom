import { setRequestLocale } from "next-intl/server";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { LinkedInProspectingAnimation } from "@/components/animations/LinkedInProspectingAnimation";
import { LinkedInRealisations } from "@/components/services/ServiceRealisations";
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
    ? "LinkedIn Prospecting Agency Dunkirk | B2B Lead Generation | HKCOM"
    : "Agence Prospection LinkedIn Dunkerque | Génération Leads B2B | HKCOM";

  const description = isEn
    ? "Automated LinkedIn prospecting agency in Dunkirk. B2B lead generation, profile optimization, and automated outreach for businesses in Nord-Pas-de-Calais."
    : "Agence de prospection LinkedIn à Dunkerque. Génération de leads B2B, optimisation de profil et prospection automatisée pour les entreprises du Nord-Pas-de-Calais.";

  return {
    title,
    description,
    keywords: isEn
      ? [
          "LinkedIn prospecting Dunkirk",
          "B2B lead generation Nord",
          "LinkedIn automation agency",
          "LinkedIn outreach Nord-Pas-de-Calais",
          "B2B prospecting Hauts-de-France",
          "LinkedIn strategy agency",
          "lead generation Dunkirk",
          "LinkedIn marketing Nord",
        ]
      : [
          "prospection LinkedIn Dunkerque",
          "génération leads B2B Nord",
          "agence automatisation LinkedIn",
          "prospection LinkedIn Nord-Pas-de-Calais",
          "prospection B2B Hauts-de-France",
          "stratégie LinkedIn agence",
          "génération leads Dunkerque",
          "marketing LinkedIn Nord",
        ],
    authors: [{ name: "HKCOM - Prospection LinkedIn Dunkerque", url: baseUrl }],
    creator: "HKCOM",
    publisher: "HKCOM",
    alternates: {
      canonical: `${baseUrl}/${locale}/services/linkedin`,
      languages: {
        fr: `${baseUrl}/fr/services/linkedin`,
        en: `${baseUrl}/en/services/linkedin`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/linkedin`,
      siteName: "HKCOM - Prospection LinkedIn Dunkerque",
      locale: isEn ? "en_US" : "fr_FR",
      alternateLocale: isEn ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og/linkedin-service.jpg`,
          width: 1200,
          height: 630,
          alt: isEn
            ? "HKCOM LinkedIn Prospecting Agency Dunkirk"
            : "HKCOM Agence Prospection LinkedIn Dunkerque",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/og/linkedin-service.jpg`],
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
    category: isEn ? "LinkedIn Prospecting" : "Prospection LinkedIn",
    other: {
      "geo.region": "FR-59",
      "geo.placename": "Dunkerque",
      "geo.position": "51.0343;2.3768",
      ICBM: "51.0343, 2.3768",
    },
  };
}

export default async function LinkedInServicePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEn = locale === "en";

  const service = {
    name: isEn ? "LinkedIn Prospecting" : "Prospection LinkedIn",
    tagline: isEn
      ? "Generate qualified B2B leads on autopilot"
      : "Générez des leads B2B qualifiés en automatique",
    description: isEn
      ? "LinkedIn prospecting agency in Dunkirk"
      : "Agence prospection LinkedIn à Dunkerque",
    longDescription: isEn
      ? "We help businesses in Nord-Pas-de-Calais develop their B2B network on LinkedIn with automated prospecting strategies. Profile optimization, targeted outreach, personalized messaging sequences, and performance tracking to generate qualified leads consistently."
      : "Nous aidons les entreprises du Nord-Pas-de-Calais à développer leur réseau B2B sur LinkedIn avec des stratégies de prospection automatisées. Optimisation de profil, ciblage précis, séquences de messages personnalisés et suivi des performances pour générer des leads qualifiés de manière régulière.",
    heroIcon: "Users",
    color: "primary" as const,
    features: [
      {
        icon: "Users",
        title: isEn ? "Profile Optimization" : "Optimisation de Profil",
        description: isEn
          ? "We transform your LinkedIn profile into a conversion machine that attracts prospects."
          : "Nous transformons votre profil LinkedIn en machine à conversion qui attire les prospects.",
      },
      {
        icon: "Target",
        title: isEn ? "Precise Targeting" : "Ciblage Précis",
        description: isEn
          ? "Identification of your ideal prospects by sector, position, company size, and location."
          : "Identification de vos prospects idéaux par secteur, poste, taille d'entreprise et localisation.",
      },
      {
        icon: "Zap",
        title: isEn ? "Automated Outreach" : "Prospection Automatisée",
        description: isEn
          ? "Automated connection requests and personalized follow-up message sequences."
          : "Demandes de connexion automatisées et séquences de messages de suivi personnalisés.",
      },
      {
        icon: "PenTool",
        title: isEn ? "Copywriting" : "Copywriting",
        description: isEn
          ? "Compelling message scripts crafted to maximize response rates and conversations."
          : "Scripts de messages percutants conçus pour maximiser les taux de réponse et conversations.",
      },
      {
        icon: "BarChart3",
        title: isEn ? "Performance Tracking" : "Suivi des Performances",
        description: isEn
          ? "Detailed dashboards tracking connections, responses, meetings booked, and conversion rates."
          : "Tableaux de bord détaillés : connexions, réponses, rendez-vous pris et taux de conversion.",
      },
      {
        icon: "Share2",
        title: isEn ? "Content Strategy" : "Stratégie de Contenu",
        description: isEn
          ? "LinkedIn content plan to boost your visibility and credibility with your target audience."
          : "Plan de contenu LinkedIn pour booster votre visibilité et crédibilité auprès de vos cibles.",
      },
    ],
    benefits: isEn
      ? [
          "Local agency in Dunkirk - face-to-face meetings",
          "Average of 15-30 qualified meetings per month",
          "100% personalized messages - no spam",
          "GDPR compliant approach",
          "Detailed weekly reporting",
          "No long-term commitment",
          "Dedicated account manager",
        ]
      : [
          "Agence locale à Dunkerque - rendez-vous en personne",
          "Moyenne de 15-30 rendez-vous qualifiés par mois",
          "Messages 100% personnalisés - zéro spam",
          "Approche conforme au RGPD",
          "Reporting détaillé chaque semaine",
          "Sans engagement long terme",
          "Account manager dédié",
        ],
    process: [
      {
        number: "1",
        title: isEn ? "Audit" : "Audit",
        description: isEn
          ? "We analyze your profile, network, and define your ideal customer profile"
          : "Nous analysons votre profil, votre réseau et définissons votre client idéal",
      },
      {
        number: "2",
        title: isEn ? "Setup" : "Configuration",
        description: isEn
          ? "We optimize your profile and set up the automation tools"
          : "Nous optimisons votre profil et configurons les outils d'automatisation",
      },
      {
        number: "3",
        title: isEn ? "Launch" : "Lancement",
        description: isEn
          ? "We launch targeted campaigns with personalized messages"
          : "Nous lançons les campagnes ciblées avec des messages personnalisés",
      },
      {
        number: "4",
        title: isEn ? "Optimize" : "Optimiser",
        description: isEn
          ? "We analyze results and continuously refine targeting and messaging"
          : "Nous analysons les résultats et affinons ciblage et messages en continu",
      },
    ],
    faqs: [
      {
        question: isEn
          ? "Is automated LinkedIn prospecting safe for my account?"
          : "La prospection LinkedIn automatisée est-elle sûre pour mon compte ?",
        answer: isEn
          ? "Yes, we use safe tools that respect LinkedIn's daily limits. We never exceed recommended thresholds and use human-like behavior patterns to protect your account."
          : "Oui, nous utilisons des outils sûrs qui respectent les limites quotidiennes de LinkedIn. Nous ne dépassons jamais les seuils recommandés et simulons un comportement humain pour protéger votre compte.",
      },
      {
        question: isEn
          ? "How many leads can I expect per month?"
          : "Combien de leads puis-je espérer par mois ?",
        answer: isEn
          ? "On average, our clients get 15-30 qualified meetings per month. Results vary by industry and targeting, but we typically see a 20-35% connection acceptance rate and 5-15% response rate."
          : "En moyenne, nos clients obtiennent 15-30 rendez-vous qualifiés par mois. Les résultats varient selon le secteur et le ciblage, mais nous observons généralement un taux d'acceptation de 20-35% et un taux de réponse de 5-15%.",
      },
      {
        question: isEn
          ? "Do I need a LinkedIn Premium or Sales Navigator account?"
          : "Ai-je besoin d'un compte LinkedIn Premium ou Sales Navigator ?",
        answer: isEn
          ? "Sales Navigator is recommended for optimal targeting capabilities but not mandatory. We can start with a basic account and upgrade as results grow."
          : "Sales Navigator est recommandé pour un ciblage optimal mais pas obligatoire. Nous pouvons commencer avec un compte basique et évoluer avec les résultats.",
      },
      {
        question: isEn
          ? "Will the messages seem authentic?"
          : "Les messages sembleront-ils authentiques ?",
        answer: isEn
          ? "Absolutely! Each message is personalized with the prospect's name, company, and specific context. We write conversational scripts that feel genuine, not like mass outreach."
          : "Absolument ! Chaque message est personnalisé avec le nom du prospect, son entreprise et un contexte spécifique. Nous rédigeons des scripts conversationnels qui semblent authentiques, pas de la prospection de masse.",
      },
    ],
    stats: [
      {
        value: "25%",
        label: isEn ? "Avg. acceptance rate" : "Taux d'acceptation moyen",
      },
      {
        value: "15-30",
        label: isEn ? "Meetings/month" : "RDV/mois",
      },
      {
        value: "500+",
        label: isEn ? "Prospects reached/month" : "Prospects contactés/mois",
      },
      {
        value: "1h",
        label: isEn ? "On-site if needed" : "Sur place si besoin",
      },
    ],
  };

  return (
    <>
      <ServiceJsonLd
        locale={locale as "fr" | "en"}
        serviceName={service.name}
        serviceDescription={service.longDescription}
        serviceType="linkedin"
      />
      <BreadcrumbJsonLd
        locale={locale as "fr" | "en"}
        serviceName={service.name}
        serviceSlug="linkedin"
      />
      <FAQJsonLd faqs={service.faqs} />

      <ServicePageLayout
        locale={locale as "fr" | "en"}
        service={service}
        customHeroVisual={<LinkedInProspectingAnimation />}
        showBrands
        realisationsComponent={<LinkedInRealisations locale={locale as "fr" | "en"} />}
      />
    </>
  );
}
