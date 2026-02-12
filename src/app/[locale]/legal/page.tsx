import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title: locale === "fr" ? "Mentions Légales" : "Legal Notice",
    description:
      locale === "fr"
        ? "Mentions légales du site HKCOM, agence digitale à Dunkerque."
        : "Legal notice for HKCOM website, digital agency in Dunkirk.",
  };
}

const contentFr = {
  title: "Mentions Légales",
  sections: [
    {
      heading: "1. Éditeur du site",
      content: `**HKCOM**
Agence digitale
19 bis Rue de l'Orangerie, 59760 Grande-Synthe, France
Téléphone : 09 72 61 30 92
Email : contact@hkcom.fr
Site web : https://hkcom.fr`,
    },
    {
      heading: "2. Directeur de la publication",
      content: `Le directeur de la publication est le représentant légal de HKCOM.`,
    },
    {
      heading: "3. Hébergement",
      content: `Le site hkcom.fr est hébergé par :
**Vercel Inc.**
440 N Barranca Ave #4133
Covina, CA 91723, États-Unis
https://vercel.com`,
    },
    {
      heading: "4. Propriété intellectuelle",
      content: `L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de HKCOM ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.

Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de HKCOM.`,
    },
    {
      heading: "5. Limitation de responsabilité",
      content: `HKCOM s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, HKCOM ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.

Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d'évoluer.`,
    },
    {
      heading: "6. Cookies",
      content: `Le site hkcom.fr peut être amené à utiliser des cookies pour améliorer l'expérience utilisateur. L'utilisateur peut configurer son navigateur pour refuser les cookies. Pour plus d'informations, consultez notre Politique de Confidentialité.`,
    },
    {
      heading: "7. Droit applicable",
      content: `Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.`,
    },
  ],
};

const contentEn = {
  title: "Legal Notice",
  sections: [
    {
      heading: "1. Website Publisher",
      content: `**HKCOM**
Digital Agency
19 bis Rue de l'Orangerie, 59760 Grande-Synthe, France
Phone: 09 72 61 30 92
Email: contact@hkcom.fr
Website: https://hkcom.fr`,
    },
    {
      heading: "2. Publication Director",
      content: `The publication director is the legal representative of HKCOM.`,
    },
    {
      heading: "3. Hosting",
      content: `The website hkcom.fr is hosted by:
**Vercel Inc.**
440 N Barranca Ave #4133
Covina, CA 91723, United States
https://vercel.com`,
    },
    {
      heading: "4. Intellectual Property",
      content: `All content on this website (texts, images, videos, logos, icons, sounds, software, etc.) is the exclusive property of HKCOM or its partners and is protected by French and international intellectual property laws.

Any reproduction, representation, modification, publication, or adaptation of all or part of the elements of the site, by any means or process, is prohibited without prior written authorization from HKCOM.`,
    },
    {
      heading: "5. Limitation of Liability",
      content: `HKCOM strives to provide information on the website that is as accurate as possible. However, HKCOM cannot be held responsible for omissions, inaccuracies, or deficiencies in updates, whether caused by HKCOM or by third-party partners providing this information.

All information on the site is provided for informational purposes and is subject to change.`,
    },
    {
      heading: "6. Cookies",
      content: `The website hkcom.fr may use cookies to improve the user experience. Users can configure their browser to refuse cookies. For more information, please see our Privacy Policy.`,
    },
    {
      heading: "7. Applicable Law",
      content: `These legal notices are governed by French law. In the event of a dispute, French courts shall have sole jurisdiction.`,
    },
  ],
};

export default async function LegalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === "fr" ? contentFr : contentEn;

  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-12">
            {content.title}
          </h1>

          <div className="space-y-10">
            {content.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold mb-4">
                  {section.heading}
                </h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line prose prose-strong:text-foreground">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
