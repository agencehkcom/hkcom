import { setRequestLocale } from "next-intl/server";
import { StrategyPageLayout } from "@/components/strategies/StrategyPageLayout";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title: `Visibilité MAX - ${locale === "fr" ? "Contenu Audiovisuel" : "Audiovisual Content"} | HKCOM`,
    description: locale === "fr"
      ? "Production de contenu audiovisuel professionnel et campagnes publicitaires pour booster votre notoriété et générer du trafic."
      : "Professional audiovisual content production and advertising campaigns to boost your brand awareness and generate traffic.",
  };
}

export default async function VisibiliteMaxPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEn = locale === "en";

  const strategy = {
    name: "Visibilité MAX",
    tagline: isEn
      ? "Stand out with professional audiovisual content"
      : "Démarquez-vous avec du contenu audiovisuel professionnel",
    description: isEn
      ? "Professional video and photo production combined with targeted advertising campaigns to boost your brand awareness and drive foot traffic to your business."
      : "Production vidéo et photo professionnelle combinée à des campagnes publicitaires ciblées pour booster votre notoriété et générer du trafic vers votre entreprise.",
    color: "emerald" as const,
    targetAudience: isEn
      ? "Local businesses and proximity commerce seeking foot traffic, visibility, and strong brand positioning."
      : "Commerces de proximité et entreprises locales cherchant du trafic en point de vente, de la visibilité et un positionnement de marque fort.",
    duration: isEn ? "3-6 months campaign" : "Campagne 3-6 mois",
    setupTime: isEn ? "15-30 days setup" : "Mise en place 15-30 jours",
    features: [
      {
        icon: "Video",
        title: isEn ? "Video Production" : "Production Vidéo",
        description: isEn
          ? "Professional advertising videos that capture attention and tell your brand story."
          : "Vidéos publicitaires professionnelles qui captent l'attention et racontent votre histoire de marque.",
      },
      {
        icon: "Camera",
        title: isEn ? "Photo Shoots" : "Séances Photo",
        description: isEn
          ? "High-quality professional photography for your products, services, and team."
          : "Photographies professionnelles de haute qualité pour vos produits, services et équipe.",
      },
      {
        icon: "Share2",
        title: isEn ? "Social Media Strategy" : "Stratégie Réseaux Sociaux",
        description: isEn
          ? "Strategic content distribution across the most relevant platforms for your audience."
          : "Distribution stratégique du contenu sur les plateformes les plus pertinentes pour votre audience.",
      },
      {
        icon: "Megaphone",
        title: isEn ? "Advertising Campaigns" : "Campagnes Publicitaires",
        description: isEn
          ? "Targeted paid campaigns on social media and Google to maximize reach."
          : "Campagnes payantes ciblées sur les réseaux sociaux et Google pour maximiser la portée.",
      },
      {
        icon: "Palette",
        title: isEn ? "Creative Direction" : "Direction Créative",
        description: isEn
          ? "Unique visual concepts aligned with your brand identity and goals."
          : "Concepts visuels uniques alignés avec votre identité de marque et vos objectifs.",
      },
      {
        icon: "TrendingUp",
        title: isEn ? "Performance Tracking" : "Suivi des Performances",
        description: isEn
          ? "Detailed analytics on reach, engagement, and conversions."
          : "Analyses détaillées sur la portée, l'engagement et les conversions.",
      },
    ],
    benefits: isEn
      ? [
          "Up to 300% ROI potential",
          "100% client satisfaction rate",
          "Professional brand image",
          "Increased foot traffic to your location",
          "Strong social media presence",
          "Memorable visual content library",
        ]
      : [
          "Jusqu'à 300% de ROI potentiel",
          "100% de taux de satisfaction client",
          "Image de marque professionnelle",
          "Augmentation du trafic en point de vente",
          "Présence forte sur les réseaux sociaux",
          "Bibliothèque de contenu visuel mémorable",
        ],
    steps: [
      {
        number: "1",
        title: isEn ? "Brief" : "Brief",
        description: isEn
          ? "Understanding your brand, goals, and target audience"
          : "Compréhension de votre marque, objectifs et audience cible",
      },
      {
        number: "2",
        title: isEn ? "Creation" : "Création",
        description: isEn
          ? "Video and photo shoot with professional equipment"
          : "Tournage vidéo et photo avec équipement professionnel",
      },
      {
        number: "3",
        title: isEn ? "Production" : "Production",
        description: isEn
          ? "Editing, color grading, and post-production"
          : "Montage, étalonnage et post-production",
      },
      {
        number: "4",
        title: isEn ? "Distribution" : "Diffusion",
        description: isEn
          ? "Strategic launch and campaign management"
          : "Lancement stratégique et gestion des campagnes",
      },
    ],
    results: [
      {
        value: "300%",
        label: isEn ? "Potential ROI" : "ROI potentiel",
      },
      {
        value: "100%",
        label: isEn ? "Satisfaction rate" : "Taux de satisfaction",
      },
      {
        value: "15-30",
        label: isEn ? "Days to launch" : "Jours pour lancer",
      },
      {
        value: "∞",
        label: isEn ? "Content reusability" : "Réutilisation du contenu",
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
