import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title:
      locale === "fr"
        ? "Politique de Confidentialité"
        : "Privacy Policy",
    description:
      locale === "fr"
        ? "Politique de confidentialité de HKCOM. Découvrez comment nous protégeons vos données personnelles."
        : "HKCOM Privacy Policy. Learn how we protect your personal data.",
  };
}

const contentFr = {
  title: "Politique de Confidentialité",
  lastUpdate: "Dernière mise à jour : Février 2026",
  sections: [
    {
      heading: "1. Introduction",
      content: `HKCOM, agence digitale située au 19 bis Rue de l'Orangerie, 59760 Grande-Synthe, s'engage à protéger la vie privée des utilisateurs de son site web hkcom.fr.

Cette politique de confidentialité décrit les informations que nous collectons, comment nous les utilisons et les droits dont vous disposez.`,
    },
    {
      heading: "2. Données collectées",
      content: `Nous pouvons collecter les données suivantes :

• **Données de contact** : nom, prénom, adresse email, numéro de téléphone, nom de l'entreprise — lorsque vous remplissez un formulaire de contact ou demandez un devis.
• **Données de navigation** : adresse IP, type de navigateur, pages visitées, durée de visite — collectées automatiquement à des fins d'analyse.
• **Données de cookies** : préférences de langue, thème d'affichage — pour améliorer votre expérience.`,
    },
    {
      heading: "3. Utilisation des données",
      content: `Vos données personnelles sont utilisées pour :

• Répondre à vos demandes de contact et de devis
• Vous envoyer des informations relatives à nos services (uniquement avec votre consentement)
• Améliorer notre site web et nos services
• Établir des statistiques de fréquentation anonymes`,
    },
    {
      heading: "4. Base légale du traitement",
      content: `Le traitement de vos données repose sur :

• **Votre consentement** : pour l'envoi de communications marketing
• **L'exécution d'un contrat** : pour le traitement de vos demandes de devis
• **L'intérêt légitime** : pour l'amélioration de nos services et la sécurité du site`,
    },
    {
      heading: "5. Durée de conservation",
      content: `Vos données personnelles sont conservées pour une durée maximale de 3 ans à compter de votre dernier contact avec HKCOM, sauf obligation légale imposant une durée de conservation plus longue.`,
    },
    {
      heading: "6. Partage des données",
      content: `Vos données personnelles ne sont jamais vendues à des tiers.

Elles peuvent être partagées avec :
• Nos prestataires techniques (hébergement, outils d'analyse) dans le strict cadre de leurs missions
• Les autorités compétentes en cas d'obligation légale`,
    },
    {
      heading: "7. Cookies",
      content: `Notre site utilise des cookies essentiels au fonctionnement du site et des cookies d'analyse pour comprendre comment les visiteurs utilisent le site.

Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur.`,
    },
    {
      heading: "8. Vos droits",
      content: `Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :

• **Droit d'accès** : obtenir une copie de vos données personnelles
• **Droit de rectification** : corriger des données inexactes
• **Droit à l'effacement** : demander la suppression de vos données
• **Droit à la portabilité** : recevoir vos données dans un format structuré
• **Droit d'opposition** : vous opposer au traitement de vos données
• **Droit de limitation** : demander la limitation du traitement

Pour exercer ces droits, contactez-nous à : contact@hkcom.fr`,
    },
    {
      heading: "9. Sécurité",
      content: `HKCOM met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction.`,
    },
    {
      heading: "10. Contact",
      content: `Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter :

**HKCOM**
Email : contact@hkcom.fr
Téléphone : 09 72 61 30 92
Adresse : 19 bis Rue de l'Orangerie, 59760 Grande-Synthe

Vous pouvez également adresser une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : https://www.cnil.fr`,
    },
  ],
};

const contentEn = {
  title: "Privacy Policy",
  lastUpdate: "Last updated: February 2026",
  sections: [
    {
      heading: "1. Introduction",
      content: `HKCOM, a digital agency located at 19 bis Rue de l'Orangerie, 59760 Grande-Synthe, France, is committed to protecting the privacy of users of its website hkcom.fr.

This privacy policy describes the information we collect, how we use it, and your rights.`,
    },
    {
      heading: "2. Data Collected",
      content: `We may collect the following data:

• **Contact data**: name, email address, phone number, company name — when you fill out a contact form or request a quote.
• **Browsing data**: IP address, browser type, pages visited, visit duration — collected automatically for analysis purposes.
• **Cookie data**: language preferences, display theme — to improve your experience.`,
    },
    {
      heading: "3. Use of Data",
      content: `Your personal data is used to:

• Respond to your contact and quote requests
• Send you information about our services (only with your consent)
• Improve our website and services
• Compile anonymous traffic statistics`,
    },
    {
      heading: "4. Legal Basis for Processing",
      content: `The processing of your data is based on:

• **Your consent**: for sending marketing communications
• **Contract performance**: for processing your quote requests
• **Legitimate interest**: for improving our services and website security`,
    },
    {
      heading: "5. Data Retention",
      content: `Your personal data is retained for a maximum of 3 years from your last contact with HKCOM, unless a legal obligation requires a longer retention period.`,
    },
    {
      heading: "6. Data Sharing",
      content: `Your personal data is never sold to third parties.

It may be shared with:
• Our technical service providers (hosting, analytics tools) strictly within the scope of their missions
• Competent authorities when required by law`,
    },
    {
      heading: "7. Cookies",
      content: `Our website uses essential cookies for site functionality and analytics cookies to understand how visitors use the site.

You can manage your cookie preferences at any time through your browser settings.`,
    },
    {
      heading: "8. Your Rights",
      content: `In accordance with the General Data Protection Regulation (GDPR), you have the following rights:

• **Right of access**: obtain a copy of your personal data
• **Right of rectification**: correct inaccurate data
• **Right to erasure**: request deletion of your data
• **Right to portability**: receive your data in a structured format
• **Right to object**: object to the processing of your data
• **Right to restriction**: request limitation of processing

To exercise these rights, contact us at: contact@hkcom.fr`,
    },
    {
      heading: "9. Security",
      content: `HKCOM implements appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.`,
    },
    {
      heading: "10. Contact",
      content: `For any questions regarding this privacy policy, you can contact us:

**HKCOM**
Email: contact@hkcom.fr
Phone: 09 72 61 30 92
Address: 19 bis Rue de l'Orangerie, 59760 Grande-Synthe, France

You may also file a complaint with the CNIL (French Data Protection Authority): https://www.cnil.fr`,
    },
  ],
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === "fr" ? contentFr : contentEn;

  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {content.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            {content.lastUpdate}
          </p>

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
