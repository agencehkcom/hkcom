// JSON-LD Structured Data for Service Pages

interface ServiceJsonLdProps {
  locale: "fr" | "en";
  serviceName: string;
  serviceDescription: string;
  serviceType: "web" | "ads" | "content" | "linkedin";
}

export function ServiceJsonLd({
  locale,
  serviceName,
  serviceDescription,
  serviceType,
}: ServiceJsonLdProps) {
  const isEn = locale === "en";
  const baseUrl = "https://hkcom.fr";

  const serviceUrls = {
    web: `${baseUrl}/${locale}/services/web`,
    ads: `${baseUrl}/${locale}/services/ads`,
    content: `${baseUrl}/${locale}/services/content`,
    linkedin: `${baseUrl}/${locale}/services/linkedin`,
  };

  const serviceCategories = {
    web: isEn ? "Web Development" : "Développement Web",
    ads: isEn ? "Digital Advertising" : "Publicité Digitale",
    content: isEn ? "Video Production" : "Production Vidéo",
    linkedin: isEn ? "LinkedIn Prospecting" : "Prospection LinkedIn",
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
    url: serviceUrls[serviceType],
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
