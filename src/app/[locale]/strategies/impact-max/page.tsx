import { setRequestLocale } from "next-intl/server";
import { StrategyPageLayout } from "@/components/strategies/StrategyPageLayout";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title: `Impact MAX - ${locale === "fr" ? "Prospection LinkedIn B2B" : "B2B LinkedIn Prospecting"} | HKCOM`,
    description: locale === "fr"
      ? "Campagnes de prospection automatisée sur LinkedIn pour générer des leads B2B qualifiés et des rendez-vous commerciaux."
      : "Automated LinkedIn prospecting campaigns to generate qualified B2B leads and business meetings.",
  };
}

export default async function ImpactMaxPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEn = locale === "en";

  const strategy = {
    name: "Impact MAX",
    tagline: isEn
      ? "Develop your B2B network and generate qualified leads"
      : "Développez votre réseau B2B et générez des leads qualifiés",
    description: isEn
      ? "Automated LinkedIn prospecting campaigns to reach decision-makers in your target industry and schedule qualified meetings every week."
      : "Campagnes de prospection automatisées sur LinkedIn pour atteindre les décideurs de votre secteur cible et planifier des rendez-vous qualifiés chaque semaine.",
    color: "violet" as const,
    targetAudience: isEn
      ? "B2B companies with defined target markets and sales teams looking to expand their professional network."
      : "Entreprises B2B avec des marchés cibles définis et des équipes commerciales cherchant à développer leur réseau professionnel.",
    duration: isEn ? "3 months engagement" : "Engagement 3 mois",
    setupTime: isEn ? "3 weeks setup" : "Mise en place 3 semaines",
    features: [
      {
        icon: "Linkedin",
        title: isEn ? "LinkedIn Automation" : "Automatisation LinkedIn",
        description: isEn
          ? "Smart automation of connection requests, messages, and follow-ups on LinkedIn."
          : "Automatisation intelligente des demandes de connexion, messages et relances sur LinkedIn.",
      },
      {
        icon: "Users",
        title: isEn ? "Precise Targeting" : "Ciblage Précis",
        description: isEn
          ? "Advanced targeting by industry, position, company size, and geography."
          : "Ciblage avancé par secteur, poste, taille d'entreprise et zone géographique.",
      },
      {
        icon: "Mail",
        title: isEn ? "Personalized Messages" : "Messages Personnalisés",
        description: isEn
          ? "Custom outreach sequences tailored to your value proposition and target audience."
          : "Séquences de prospection personnalisées adaptées à votre proposition de valeur et audience cible.",
      },
      {
        icon: "Calendar",
        title: isEn ? "Meeting Scheduling" : "Planification de RDV",
        description: isEn
          ? "Direct meeting booking with qualified prospects interested in your services."
          : "Prise de rendez-vous directe avec les prospects qualifiés intéressés par vos services.",
      },
      {
        icon: "Shield",
        title: isEn ? "GDPR Compliant" : "Conforme RGPD",
        description: isEn
          ? "Fully compliant data collection with proper consent and privacy practices."
          : "Collecte de données entièrement conforme avec consentement et pratiques de confidentialité.",
      },
      {
        icon: "Zap",
        title: isEn ? "Monthly Reporting" : "Reporting Mensuel",
        description: isEn
          ? "Detailed analytics on campaign performance, connections, and conversions."
          : "Analyses détaillées des performances de campagne, connexions et conversions.",
      },
    ],
    benefits: isEn
      ? [
          "Up to 10 new qualified prospects weekly",
          "2-7 scheduled meetings per week",
          "Direct access to decision-makers",
          "GDPR-compliant contact database",
          "Expanded professional network",
          "Predictable lead generation pipeline",
        ]
      : [
          "Jusqu'à 10 nouveaux prospects qualifiés par semaine",
          "2-7 rendez-vous planifiés par semaine",
          "Accès direct aux décideurs",
          "Base de contacts conforme RGPD",
          "Réseau professionnel élargi",
          "Pipeline de génération de leads prévisible",
        ],
    steps: [
      {
        number: "1",
        title: isEn ? "Analysis" : "Analyse",
        description: isEn
          ? "Define your ideal customer profile and target market"
          : "Définition de votre profil client idéal et marché cible",
      },
      {
        number: "2",
        title: isEn ? "Setup" : "Configuration",
        description: isEn
          ? "Campaign setup and message sequence creation"
          : "Configuration de la campagne et création des séquences de messages",
      },
      {
        number: "3",
        title: isEn ? "Launch" : "Lancement",
        description: isEn
          ? "Activation of automated prospecting campaigns"
          : "Activation des campagnes de prospection automatisées",
      },
      {
        number: "4",
        title: isEn ? "Optimize" : "Optimisation",
        description: isEn
          ? "Continuous optimization based on results"
          : "Optimisation continue basée sur les résultats",
      },
    ],
    results: [
      {
        value: "10+",
        label: isEn ? "Weekly prospects" : "Prospects par semaine",
      },
      {
        value: "2-7",
        label: isEn ? "Weekly meetings" : "RDV par semaine",
      },
      {
        value: "20+",
        label: isEn ? "Active clients" : "Clients actifs",
      },
      {
        value: "3",
        label: isEn ? "Weeks to launch" : "Semaines pour lancer",
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
