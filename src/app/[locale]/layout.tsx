import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { AnnouncementPopup } from "@/components/shared/AnnouncementPopup";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const baseUrl = "https://hkcom.fr";

  const title = isEn
    ? "HKCOM - Digital Agency Dunkirk | Web, Ads & Video | Nord-Pas-de-Calais"
    : "HKCOM - Agence Digitale Dunkerque | Web, Pub & Vidéo | Nord-Pas-de-Calais";

  const description = isEn
    ? "Local digital agency in Dunkirk. Website creation, Google Ads, video production. Your partner in Nord-Pas-de-Calais. France Num certified. Free quote."
    : "Agence digitale locale à Dunkerque. Création de sites, Google Ads, production vidéo. Votre partenaire dans le Nord. Activateur France Num. Devis gratuit.";

  return {
    title: {
      default: title,
      template: "%s | HKCOM Dunkerque",
    },
    description,
    keywords: isEn
      ? [
          "digital agency Dunkirk",
          "web agency Nord",
          "website creation Dunkirk",
          "Google Ads Nord-Pas-de-Calais",
          "video production Dunkirk",
          "digital marketing Hauts-de-France",
          "France Num",
          "local digital partner",
          "SEO Dunkirk",
          "web agency Calais",
          "digital Lille",
        ]
      : [
          "agence digitale Dunkerque",
          "agence web Nord",
          "création site internet Dunkerque",
          "Google Ads Nord-Pas-de-Calais",
          "production vidéo Dunkerque",
          "marketing digital Hauts-de-France",
          "France Num",
          "partenaire digital local",
          "référencement Dunkerque",
          "agence web Calais",
          "digital Lille",
          "agence communication Nord",
        ],
    authors: [{ name: "HKCOM - Agence Digitale Dunkerque", url: baseUrl }],
    creator: "HKCOM",
    publisher: "HKCOM",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "fr_FR",
      alternateLocale: isEn ? "fr_FR" : "en_US",
      url: `${baseUrl}/${locale}`,
      siteName: "HKCOM - Agence Digitale Dunkerque",
      title,
      description,
      images: [
        {
          url: `${baseUrl}/images/og/hkcom-home.jpg`,
          width: 1200,
          height: 630,
          alt: isEn ? "HKCOM Digital Agency Dunkirk" : "HKCOM Agence Digitale Dunkerque",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/og/hkcom-home.jpg`],
      creator: "@hkcom_agency",
      site: "@hkcom_agency",
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
    verification: {
      google: "votre-code-google-search-console",
    },
    category: isEn ? "Digital Agency" : "Agence Digitale",
    other: {
      "geo.region": "FR-59",
      "geo.placename": "Dunkerque",
      "geo.position": "51.0343;2.3768",
      ICBM: "51.0343, 2.3768",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="relative flex min-h-screen flex-col">{children}</div>
      <AnnouncementPopup />
    </NextIntlClientProvider>
  );
}
