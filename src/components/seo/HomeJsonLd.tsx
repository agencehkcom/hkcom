// JSON-LD Structured Data for Home Page

interface HomeJsonLdProps {
  locale: "fr" | "en";
}

export function HomeJsonLd({ locale }: HomeJsonLdProps) {
  const isEn = locale === "en";
  const baseUrl = "https://hkcom.fr";

  // Organization Schema
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "HKCOM",
    alternateName: "HKCOM Agence Digitale Dunkerque",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/logos/hkcom-logo.png`,
      width: 512,
      height: 512,
    },
    image: `${baseUrl}/images/og/hkcom-home.jpg`,
    description: isEn
      ? "Local digital agency in Dunkirk. Website creation, Google Ads, video production for businesses in Nord-Pas-de-Calais."
      : "Agence digitale locale à Dunkerque. Création de sites internet, Google Ads, production vidéo pour les entreprises du Nord-Pas-de-Calais.",
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
      { "@type": "City", name: "Dunkerque" },
      { "@type": "City", name: "Calais" },
      { "@type": "City", name: "Lille" },
      { "@type": "City", name: "Boulogne-sur-Mer" },
      { "@type": "AdministrativeArea", name: "Nord" },
      { "@type": "AdministrativeArea", name: "Pas-de-Calais" },
      { "@type": "AdministrativeArea", name: "Hauts-de-France" },
    ],
    sameAs: [
      "https://www.facebook.com/hkcom.agency",
      "https://www.instagram.com/hkcom_agency",
      "https://www.linkedin.com/company/hkcom",
      "https://twitter.com/hkcom_agency",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+33-XXX-XXX-XXX",
        contactType: isEn ? "customer service" : "service client",
        areaServed: "FR",
        availableLanguage: ["French", "English"],
      },
    ],
    founder: {
      "@type": "Person",
      name: "HKCOM Founder",
    },
    foundingDate: "2019",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "5-10",
    },
    slogan: isEn
      ? "Your local digital partner in Nord-Pas-de-Calais"
      : "Votre partenaire digital de proximité dans le Nord",
    knowsAbout: [
      isEn ? "Website Creation" : "Création de sites internet",
      isEn ? "Google Ads Management" : "Gestion Google Ads",
      isEn ? "Video Production" : "Production vidéo",
      isEn ? "SEO Optimization" : "Référencement SEO",
      isEn ? "Digital Marketing" : "Marketing digital",
      "E-commerce",
      "Social Media Ads",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "France Num Activator",
      recognizedBy: {
        "@type": "Organization",
        name: "France Num",
      },
    },
  };

  // Local Business Schema
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: "HKCOM - Agence Digitale Dunkerque",
    image: `${baseUrl}/images/og/hkcom-home.jpg`,
    url: baseUrl,
    telephone: "+33-XXX-XXX-XXX",
    priceRange: "€€",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", name: "Dunkerque" },
      { "@type": "City", name: "Calais" },
      { "@type": "City", name: "Lille" },
      { "@type": "AdministrativeArea", name: "Nord-Pas-de-Calais" },
      { "@type": "AdministrativeArea", name: "Hauts-de-France" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isEn ? "Digital Services" : "Services Digitaux",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: isEn ? "Website Creation" : "Création de Sites",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isEn ? "Showcase Website" : "Site Vitrine",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "E-commerce",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: isEn ? "Digital Advertising" : "Publicité Digitale",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Ads",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Facebook & Instagram Ads",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: isEn ? "Video Production" : "Production Vidéo",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isEn ? "Corporate Videos" : "Vidéos Corporate",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isEn ? "Social Media Content" : "Contenu Réseaux Sociaux",
              },
            },
          ],
        },
      ],
    },
  };

  // Website Schema
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "HKCOM",
    description: isEn
      ? "Digital agency in Dunkirk - Website creation, advertising, video production"
      : "Agence digitale à Dunkerque - Création de sites, publicité, production vidéo",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: [locale === "fr" ? "fr-FR" : "en-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
