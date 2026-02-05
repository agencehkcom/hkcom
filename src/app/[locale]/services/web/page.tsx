import { setRequestLocale } from "next-intl/server";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { CodeToDesignAnimation } from "@/components/animations/CodeToDesignAnimation";
import { WebRealisations } from "@/components/services/ServiceRealisations";
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
    ? "Website Creation Dunkirk & Nord | Local Web Agency | HKCOM"
    : "Création Site Internet Dunkerque | Agence Web Nord-Pas-de-Calais | HKCOM";

  const description = isEn
    ? "Local web agency in Dunkirk. Professional websites, e-commerce, SEO. Your digital partner in Nord-Pas-de-Calais. France Num certified. Free quote."
    : "Agence web locale à Dunkerque. Création de sites vitrines, e-commerce, référencement SEO. Votre partenaire digital dans le Nord. Activateur France Num. Devis gratuit.";

  return {
    title,
    description,
    keywords: isEn
      ? [
          "website creation Dunkirk",
          "web agency Nord",
          "web design Dunkirk",
          "e-commerce Nord-Pas-de-Calais",
          "SEO Dunkirk",
          "local web agency",
          "website Hauts-de-France",
          "webmaster Dunkirk",
          "digital partner Nord",
          "France Num",
        ]
      : [
          "création site internet Dunkerque",
          "agence web Dunkerque",
          "agence web Nord",
          "site e-commerce Nord-Pas-de-Calais",
          "création site vitrine Dunkerque",
          "référencement SEO Dunkerque",
          "webmaster Dunkerque",
          "site internet Hauts-de-France",
          "agence digitale Nord",
          "partenaire digital Dunkerque",
          "France Num Nord",
          "site web Calais",
          "création site Lille",
        ],
    authors: [{ name: "HKCOM - Agence Web Dunkerque", url: baseUrl }],
    creator: "HKCOM",
    publisher: "HKCOM",
    alternates: {
      canonical: `${baseUrl}/${locale}/services/web`,
      languages: {
        fr: `${baseUrl}/fr/services/web`,
        en: `${baseUrl}/en/services/web`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/web`,
      siteName: "HKCOM - Agence Web Dunkerque",
      locale: isEn ? "en_US" : "fr_FR",
      alternateLocale: isEn ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og/web-service.jpg`,
          width: 1200,
          height: 630,
          alt: isEn ? "HKCOM Web Agency Dunkirk" : "HKCOM Agence Web Dunkerque",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/og/web-service.jpg`],
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
    category: isEn ? "Web Development" : "Développement Web",
    other: {
      "geo.region": "FR-59",
      "geo.placename": "Dunkerque",
      "geo.position": "51.0343;2.3768",
      ICBM: "51.0343, 2.3768",
    },
  };
}

export default async function WebServicePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEn = locale === "en";

  const service = {
    name: isEn ? "Web Design Dunkirk" : "Création Site Internet Dunkerque",
    tagline: isEn
      ? "Your local digital partner in Nord-Pas-de-Calais"
      : "Votre partenaire digital de proximité dans le Nord",
    description: isEn
      ? "Local web agency in Dunkirk"
      : "Agence web locale à Dunkerque",
    longDescription: isEn
      ? "Based in Dunkirk, we support local businesses in Nord-Pas-de-Calais in their digital transformation. Showcase sites, e-commerce, web apps: benefit from personalized support and a partner who knows the local economic fabric. Meet us in person to discuss your project!"
      : "Basés à Dunkerque, nous accompagnons les entreprises locales du Nord-Pas-de-Calais dans leur transformation digitale. Sites vitrines, e-commerce, applications web : bénéficiez d'un accompagnement personnalisé et d'un partenaire qui connaît le tissu économique local. Rencontrons-nous pour discuter de votre projet !",
    heroIcon: "Monitor",
    color: "primary" as const,
    features: [
      {
        icon: "Palette",
        title: isEn ? "Custom Design" : "Design Sur Mesure",
        description: isEn
          ? "Unique designs that reflect your brand identity and stand out from the competition."
          : "Designs uniques qui reflètent votre identité de marque et vous démarquent de la concurrence.",
      },
      {
        icon: "Smartphone",
        title: isEn ? "Responsive Design" : "Design Responsive",
        description: isEn
          ? "Perfect display on all devices: desktop, tablet, and mobile."
          : "Affichage parfait sur tous les appareils : ordinateur, tablette et mobile.",
      },
      {
        icon: "Search",
        title: isEn ? "SEO Optimization" : "Optimisation SEO",
        description: isEn
          ? "Built-in SEO best practices to improve your visibility on Google."
          : "Meilleures pratiques SEO intégrées pour améliorer votre visibilité sur Google.",
      },
      {
        icon: "Zap",
        title: isEn ? "High Performance" : "Haute Performance",
        description: isEn
          ? "Lightning-fast loading times for better user experience and SEO rankings."
          : "Temps de chargement ultra-rapides pour une meilleure expérience utilisateur et un meilleur SEO.",
      },
      {
        icon: "ShoppingCart",
        title: isEn ? "E-commerce Ready" : "E-commerce",
        description: isEn
          ? "Complete online store solutions with secure payment and inventory management."
          : "Solutions boutique en ligne complètes avec paiement sécurisé et gestion des stocks.",
      },
      {
        icon: "Settings",
        title: isEn ? "Easy Management" : "Gestion Facile",
        description: isEn
          ? "Intuitive admin interface for easy content updates without technical skills."
          : "Interface d'administration intuitive pour mettre à jour votre contenu sans compétences techniques.",
      },
    ],
    benefits: isEn
      ? [
          "Local agency based in Dunkirk - meet us in person",
          "Expert knowledge of the Nord-Pas-de-Calais business landscape",
          "100% custom design tailored to your brand",
          "Responsive support - we're just a call away",
          "SEO optimized for local visibility",
          "Training at your premises or remotely",
          "France Num certified - up to €500 subsidy",
        ]
      : [
          "Agence locale basée à Dunkerque - rencontrons-nous",
          "Expertise du tissu économique Nord-Pas-de-Calais",
          "Design 100% personnalisé à votre image",
          "Support réactif - on se déplace chez vous",
          "SEO optimisé pour la visibilité locale",
          "Formation dans vos locaux ou à distance",
          "Activateur France Num - jusqu'à 500€ d'aide",
        ],
    packages: [
      {
        name: isEn ? "Starter" : "Essentiel",
        price: isEn ? "From €1,500" : "À partir de 1 500€",
        description: isEn
          ? "Perfect for small businesses and freelancers"
          : "Idéal pour les petites entreprises et indépendants",
        features: isEn
          ? [
              "Up to 5 pages",
              "Responsive design",
              "Contact form",
              "Basic SEO setup",
              "1 month support",
              "Delivery in 2-3 weeks",
            ]
          : [
              "Jusqu'à 5 pages",
              "Design responsive",
              "Formulaire de contact",
              "Configuration SEO de base",
              "1 mois de support",
              "Livraison en 2-3 semaines",
            ],
      },
      {
        name: isEn ? "Professional" : "Professionnel",
        price: isEn ? "From €3,000" : "À partir de 3 000€",
        description: isEn
          ? "Complete solution for growing businesses"
          : "Solution complète pour les entreprises en croissance",
        features: isEn
          ? [
              "Up to 15 pages",
              "Premium custom design",
              "Blog integration",
              "Advanced SEO optimization",
              "Google Analytics setup",
              "3 months support",
              "Delivery in 3-4 weeks",
            ]
          : [
              "Jusqu'à 15 pages",
              "Design premium sur mesure",
              "Intégration blog",
              "Optimisation SEO avancée",
              "Configuration Google Analytics",
              "3 mois de support",
              "Livraison en 3-4 semaines",
            ],
        highlighted: true,
        tag: isEn ? "Most Popular" : "Plus populaire",
      },
      {
        name: isEn ? "E-commerce" : "E-commerce",
        price: isEn ? "From €5,000" : "À partir de 5 000€",
        description: isEn
          ? "Full-featured online store solution"
          : "Boutique en ligne complète et fonctionnelle",
        features: isEn
          ? [
              "Unlimited products",
              "Secure payment integration",
              "Inventory management",
              "Shipping configuration",
              "Customer accounts",
              "Marketing tools",
              "6 months support",
            ]
          : [
              "Produits illimités",
              "Intégration paiement sécurisé",
              "Gestion des stocks",
              "Configuration livraison",
              "Comptes clients",
              "Outils marketing",
              "6 mois de support",
            ],
      },
    ],
    process: [
      {
        number: "1",
        title: isEn ? "Discovery" : "Découverte",
        description: isEn
          ? "We analyze your needs, goals, and target audience"
          : "Nous analysons vos besoins, objectifs et cible",
      },
      {
        number: "2",
        title: isEn ? "Design" : "Maquettage",
        description: isEn
          ? "We create mockups and validate the design with you"
          : "Nous créons les maquettes et validons le design avec vous",
      },
      {
        number: "3",
        title: isEn ? "Development" : "Développement",
        description: isEn
          ? "We build your site with the latest technologies"
          : "Nous développons votre site avec les dernières technologies",
      },
      {
        number: "4",
        title: isEn ? "Launch" : "Lancement",
        description: isEn
          ? "We deploy, train you, and provide ongoing support"
          : "Nous déployons, vous formons et assurons le suivi",
      },
    ],
    faqs: [
      {
        question: isEn
          ? "How long does it take to create a website?"
          : "Combien de temps faut-il pour créer un site web ?",
        answer: isEn
          ? "A standard showcase website takes 2-4 weeks. E-commerce sites typically take 4-8 weeks depending on complexity. We'll provide a precise timeline during our discovery call."
          : "Un site vitrine standard prend 2 à 4 semaines. Les sites e-commerce prennent généralement 4 à 8 semaines selon la complexité. Nous vous donnerons un calendrier précis lors de notre appel découverte.",
      },
      {
        question: isEn
          ? "Do I need technical skills to manage my website?"
          : "Ai-je besoin de compétences techniques pour gérer mon site ?",
        answer: isEn
          ? "No! Our sites come with an intuitive admin interface. We also provide comprehensive training and documentation so you can easily update your content."
          : "Non ! Nos sites disposent d'une interface d'administration intuitive. Nous fournissons également une formation complète et une documentation pour que vous puissiez facilement mettre à jour votre contenu.",
      },
      {
        question: isEn
          ? "Is hosting included in the price?"
          : "L'hébergement est-il inclus dans le prix ?",
        answer: isEn
          ? "The first year of hosting is included in all our packages. After that, hosting costs around €150-300/year depending on your needs."
          : "La première année d'hébergement est incluse dans toutes nos offres. Ensuite, l'hébergement coûte environ 150-300€/an selon vos besoins.",
      },
      {
        question: isEn
          ? "Can I get the France Num subsidy for my website?"
          : "Puis-je bénéficier de l'aide France Num pour mon site ?",
        answer: isEn
          ? "Yes! As a certified France Num Activator, we can help you obtain up to €500 in subsidies for your digital project. We handle all the paperwork."
          : "Oui ! En tant qu'Activateur France Num certifié, nous pouvons vous aider à obtenir jusqu'à 500€ d'aide pour votre projet digital. Nous gérons toutes les démarches administratives.",
      },
    ],
    stats: [
      {
        value: "150+",
        label: isEn ? "Websites in Nord" : "Sites dans le Nord",
      },
      {
        value: "98%",
        label: isEn ? "Local client satisfaction" : "Satisfaction clients locaux",
      },
      {
        value: "24h",
        label: isEn ? "On-site response" : "Intervention sur place",
      },
      {
        value: "5+",
        label: isEn ? "Years in Dunkirk" : "Ans à Dunkerque",
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
        serviceType="web"
        priceRange="€€"
      />
      <BreadcrumbJsonLd
        locale={locale as "fr" | "en"}
        serviceName={service.name}
        serviceSlug="web"
      />
      <FAQJsonLd faqs={service.faqs} />

      <ServicePageLayout
        locale={locale as "fr" | "en"}
        service={service}
        customHeroVisual={<CodeToDesignAnimation />}
        showBrands
        realisationsComponent={<WebRealisations locale={locale as "fr" | "en"} />}
      />
    </>
  );
}
