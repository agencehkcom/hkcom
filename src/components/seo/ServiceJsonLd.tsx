// JSON-LD Structured Data for Service Pages

interface ServiceJsonLdProps {
  locale: "fr" | "en";
  serviceName: string;
  serviceDescription: string;
  serviceType: "web" | "ads" | "content";
  priceRange: string;
}

export function ServiceJsonLd({
  locale,
  serviceName,
  serviceDescription,
  serviceType,
  priceRange,
}: ServiceJsonLdProps) {
  const isEn = locale === "en";
  const baseUrl = "https://hkcom.fr";

  const serviceUrls = {
    web: `${baseUrl}/${locale}/services/web`,
    ads: `${baseUrl}/${locale}/services/ads`,
    content: `${baseUrl}/${locale}/services/content`,
  };

  const serviceCategories = {
    web: isEn ? "Web Development" : "Développement Web",
    ads: isEn ? "Digital Advertising" : "Publicité Digitale",
    content: isEn ? "Video Production" : "Production Vidéo",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceUrls[serviceType],
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "HKCOM",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logos/hkcom-logo.png`,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Dunkerque",
        addressLocality: "Dunkerque",
        postalCode: "59140",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "51.0343",
        longitude: "2.3768",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Dunkerque",
        },
        {
          "@type": "AdministrativeArea",
          name: "Nord-Pas-de-Calais",
        },
        {
          "@type": "AdministrativeArea",
          name: "Hauts-de-France",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: isEn ? "customer service" : "service client",
        availableLanguage: ["French", "English"],
      },
    },
    serviceType: serviceCategories[serviceType],
    areaServed: [
      {
        "@type": "City",
        name: "Dunkerque",
      },
      {
        "@type": "City",
        name: "Calais",
      },
      {
        "@type": "City",
        name: "Lille",
      },
      {
        "@type": "AdministrativeArea",
        name: "Nord",
      },
      {
        "@type": "AdministrativeArea",
        name: "Pas-de-Calais",
      },
      {
        "@type": "AdministrativeArea",
        name: "Hauts-de-France",
      },
    ],
    priceRange: priceRange,
    url: serviceUrls[serviceType],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: serviceName,
      itemListElement: getOffersByType(serviceType, isEn),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function getOffersByType(type: "web" | "ads" | "content", isEn: boolean) {
  const offers = {
    web: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEn ? "Starter Website" : "Site Essentiel",
          description: isEn
            ? "Up to 5 pages, responsive design, basic SEO"
            : "Jusqu'à 5 pages, design responsive, SEO de base",
        },
        price: "1500",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEn ? "Professional Website" : "Site Professionnel",
          description: isEn
            ? "Up to 15 pages, premium design, advanced SEO"
            : "Jusqu'à 15 pages, design premium, SEO avancé",
        },
        price: "3000",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce",
          description: isEn
            ? "Full online store with payment integration"
            : "Boutique en ligne complète avec paiement intégré",
        },
        price: "5000",
        priceCurrency: "EUR",
      },
    ],
    ads: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEn ? "Starter Campaign" : "Campagne Démarrage",
          description: isEn
            ? "1 platform, up to €1,000 budget managed"
            : "1 plateforme, jusqu'à 1 000€ de budget géré",
        },
        price: "500",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "500",
          priceCurrency: "EUR",
          unitText: isEn ? "per month" : "par mois",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEn ? "Growth Campaign" : "Campagne Croissance",
          description: isEn
            ? "2-3 platforms, up to €5,000 budget managed"
            : "2-3 plateformes, jusqu'à 5 000€ de budget géré",
        },
        price: "1200",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "1200",
          priceCurrency: "EUR",
          unitText: isEn ? "per month" : "par mois",
        },
      },
    ],
    content: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEn ? "Essential Video" : "Vidéo Essentielle",
          description: isEn
            ? "1 video up to 60s or 10 product photos"
            : "1 vidéo jusqu'à 60s ou 10 photos produits",
        },
        price: "800",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEn ? "Professional Package" : "Pack Professionnel",
          description: isEn
            ? "3 videos + 20 photos, all formats included"
            : "3 vidéos + 20 photos, tous formats inclus",
        },
        price: "2500",
        priceCurrency: "EUR",
      },
    ],
  };

  return offers[type];
}

// Breadcrumb JSON-LD
export function BreadcrumbJsonLd({
  locale,
  serviceName,
  serviceSlug,
}: {
  locale: "fr" | "en";
  serviceName: string;
  serviceSlug: string;
}) {
  const isEn = locale === "en";
  const baseUrl = "https://hkcom.fr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEn ? "Home" : "Accueil",
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/${locale}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: serviceName,
        item: `${baseUrl}/${locale}/services/${serviceSlug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// FAQ JSON-LD
export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
