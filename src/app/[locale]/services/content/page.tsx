import { setRequestLocale } from "next-intl/server";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { ContentCreationAnimation } from "@/components/animations/ContentCreationAnimation";
import { ContentRealisations } from "@/components/services/ServiceRealisations";
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
    ? "Video Production Dunkirk | Videographer & Photographer Nord | HKCOM"
    : "Production Vidéo Dunkerque | Vidéaste & Photographe Nord | HKCOM";

  const description = isEn
    ? "Local video and photo production in Dunkirk. Corporate videos, shoots, social media content for Nord businesses. We come to you. 50M+ views generated."
    : "Production vidéo et photo locale à Dunkerque. Vidéos corporate, shootings, contenu réseaux sociaux pour entreprises du Nord. On se déplace chez vous. 50M+ vues générées.";

  return {
    title,
    description,
    keywords: isEn
      ? [
          "video production Dunkirk",
          "videographer Nord",
          "photographer Dunkirk",
          "corporate video Nord-Pas-de-Calais",
          "social media content Hauts-de-France",
          "product photography Nord",
          "reels Instagram Dunkirk",
          "video agency Nord",
          "filming Dunkirk",
          "content creation Calais",
          "video Lille",
        ]
      : [
          "production vidéo Dunkerque",
          "vidéaste Dunkerque",
          "photographe Dunkerque",
          "vidéo corporate Nord-Pas-de-Calais",
          "contenu réseaux sociaux Nord",
          "photo produit Dunkerque",
          "reels Instagram Nord",
          "agence vidéo Nord",
          "tournage Dunkerque",
          "création contenu Calais",
          "vidéo entreprise Hauts-de-France",
          "photographe professionnel Nord",
        ],
    authors: [{ name: "HKCOM - Production Vidéo Dunkerque", url: baseUrl }],
    creator: "HKCOM",
    publisher: "HKCOM",
    alternates: {
      canonical: `${baseUrl}/${locale}/services/content`,
      languages: {
        fr: `${baseUrl}/fr/services/content`,
        en: `${baseUrl}/en/services/content`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/content`,
      siteName: "HKCOM - Production Vidéo Dunkerque",
      locale: isEn ? "en_US" : "fr_FR",
      alternateLocale: isEn ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og/content-service.jpg`,
          width: 1200,
          height: 630,
          alt: isEn ? "HKCOM Video Production Dunkirk" : "HKCOM Production Vidéo Dunkerque",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/og/content-service.jpg`],
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
    category: isEn ? "Video Production" : "Production Vidéo",
    other: {
      "geo.region": "FR-59",
      "geo.placename": "Dunkerque",
      "geo.position": "51.0343;2.3768",
      ICBM: "51.0343, 2.3768",
    },
  };
}

export default async function ContentServicePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEn = locale === "en";

  const service = {
    name: isEn ? "Video Production Dunkirk" : "Production Vidéo Dunkerque",
    tagline: isEn
      ? "Your local videographer in Nord-Pas-de-Calais"
      : "Votre vidéaste de proximité dans le Nord",
    description: isEn
      ? "Local video and photo production"
      : "Production vidéo et photo locale",
    longDescription: isEn
      ? "Based in Dunkirk, we come to your business to capture your story. Corporate videos, product photos, social media content: benefit from a local team that knows the region and can react quickly. We film across Nord-Pas-de-Calais!"
      : "Basés à Dunkerque, nous nous déplaçons dans votre entreprise pour capturer votre histoire. Vidéos corporate, photos produits, contenu réseaux sociaux : bénéficiez d'une équipe locale qui connaît la région et peut réagir rapidement. On tourne dans tout le Nord-Pas-de-Calais !",
    heroIcon: "Video",
    color: "accent" as const,
    features: [
      {
        icon: "Video",
        title: isEn ? "Promotional Videos" : "Vidéos Promotionnelles",
        description: isEn
          ? "Compelling brand videos and ads that convert viewers into customers."
          : "Vidéos de marque et publicités percutantes qui convertissent les spectateurs en clients.",
      },
      {
        icon: "Camera",
        title: isEn ? "Professional Photography" : "Photographie Professionnelle",
        description: isEn
          ? "High-quality product, team, and event photography for all your needs."
          : "Photos produits, équipe et événements de haute qualité pour tous vos besoins.",
      },
      {
        icon: "Play",
        title: isEn ? "Social Media Content" : "Contenu Réseaux Sociaux",
        description: isEn
          ? "Engaging reels, stories, and posts optimized for each platform."
          : "Reels, stories et posts engageants optimisés pour chaque plateforme.",
      },
      {
        icon: "Layers",
        title: isEn ? "Motion Graphics" : "Motion Design",
        description: isEn
          ? "Animated graphics and explainer videos that simplify complex ideas."
          : "Graphiques animés et vidéos explicatives qui simplifient les idées complexes.",
      },
      {
        icon: "Headphones",
        title: isEn ? "Audio Production" : "Production Audio",
        description: isEn
          ? "Professional voiceovers, music selection, and sound design."
          : "Voix-off professionnelles, sélection musicale et design sonore.",
      },
      {
        icon: "PenTool",
        title: isEn ? "Post-Production" : "Post-Production",
        description: isEn
          ? "Expert editing, color grading, and visual effects for polished results."
          : "Montage expert, étalonnage couleur et effets visuels pour des résultats soignés.",
      },
    ],
    benefits: isEn
      ? [
          "Local team - we come to your premises in Nord",
          "Knowledge of local businesses and their stories",
          "Filming across Nord-Pas-de-Calais",
          "Fast turnaround - we're nearby",
          "Unlimited revisions until you're satisfied",
          "Full rights ownership of all content",
          "Drone footage available in the region",
        ]
      : [
          "Équipe locale - on se déplace dans vos locaux du Nord",
          "Connaissance des entreprises locales et leurs histoires",
          "Tournages dans tout le Nord-Pas-de-Calais",
          "Délais rapides - on est à côté",
          "Révisions illimitées jusqu'à satisfaction",
          "Propriété totale des droits sur le contenu",
          "Prises de vue drone disponibles dans la région",
        ],
    process: [
      {
        number: "1",
        title: isEn ? "Brief" : "Brief",
        description: isEn
          ? "We understand your vision, goals, and brand guidelines"
          : "Nous comprenons votre vision, objectifs et charte graphique",
      },
      {
        number: "2",
        title: isEn ? "Pre-Production" : "Pré-Production",
        description: isEn
          ? "Storyboarding, script writing, and shoot planning"
          : "Storyboard, écriture du script et planification du tournage",
      },
      {
        number: "3",
        title: isEn ? "Production" : "Production",
        description: isEn
          ? "Professional filming and photography session"
          : "Session de tournage et photographie professionnelle",
      },
      {
        number: "4",
        title: isEn ? "Delivery" : "Livraison",
        description: isEn
          ? "Editing, revisions, and final delivery in all formats"
          : "Montage, révisions et livraison finale dans tous les formats",
      },
    ],
    faqs: [
      {
        question: isEn
          ? "Do you provide the equipment and crew?"
          : "Fournissez-vous l'équipement et l'équipe ?",
        answer: isEn
          ? "Yes! All our services include professional equipment and experienced crew. For larger productions, we bring additional team members as needed."
          : "Oui ! Toutes nos offres incluent équipement professionnel et équipe expérimentée. Pour les productions plus importantes, nous ajoutons des membres d'équipe selon les besoins.",
      },
      {
        question: isEn
          ? "Can you shoot at our location?"
          : "Pouvez-vous tourner dans nos locaux ?",
        answer: isEn
          ? "Absolutely! We can shoot at your office, store, or any location you choose. We also have access to studios if needed. Travel costs may apply for locations outside Paris."
          : "Absolument ! Nous pouvons tourner dans vos bureaux, magasin ou tout lieu de votre choix. Nous avons aussi accès à des studios si nécessaire. Des frais de déplacement peuvent s'appliquer hors Paris.",
      },
      {
        question: isEn
          ? "How many revisions are included?"
          : "Combien de révisions sont incluses ?",
        answer: isEn
          ? "Revisions are included in all our services. We work with you until you're 100% satisfied with the final result."
          : "Les révisions sont incluses dans toutes nos prestations. Nous travaillons avec vous jusqu'à ce que vous soyez 100% satisfait du résultat final.",
      },
      {
        question: isEn
          ? "What formats do you deliver?"
          : "Quels formats livrez-vous ?",
        answer: isEn
          ? "We deliver in all formats you need: horizontal (YouTube, website), vertical (Instagram Reels, TikTok, Stories), square (feed posts), and custom sizes on request."
          : "Nous livrons dans tous les formats dont vous avez besoin : horizontal (YouTube, site web), vertical (Reels Instagram, TikTok, Stories), carré (posts feed), et tailles personnalisées sur demande.",
      },
    ],
    stats: [
      {
        value: "200+",
        label: isEn ? "Videos in Nord" : "Vidéos dans le Nord",
      },
      {
        value: "50M+",
        label: isEn ? "Views generated" : "Vues générées",
      },
      {
        value: "1h",
        label: isEn ? "From Dunkirk" : "De Dunkerque",
      },
      {
        value: "100%",
        label: isEn ? "Local clients satisfied" : "Clients locaux satisfaits",
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
        serviceType="content"
      />
      <BreadcrumbJsonLd
        locale={locale as "fr" | "en"}
        serviceName={service.name}
        serviceSlug="content"
      />
      <FAQJsonLd faqs={service.faqs} />

      <ServicePageLayout
        locale={locale as "fr" | "en"}
        service={service}
        customHeroVisual={<ContentCreationAnimation />}
        showBrands
        realisationsComponent={<ContentRealisations locale={locale as "fr" | "en"} />}
      />
    </>
  );
}
