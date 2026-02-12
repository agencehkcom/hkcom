import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WebinairesContent } from "@/components/sections/Webinaires";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title: locale === "fr"
      ? "Webinaires Gratuits - Formations Marketing Digital | HKCOM"
      : "Free Webinars - Digital Marketing Training | HKCOM",
    description: locale === "fr"
      ? "Accédez gratuitement à nos webinaires et formations sur le marketing digital, LinkedIn, l'IA et la prospection. Replays disponibles."
      : "Access our free webinars and training on digital marketing, LinkedIn, AI and prospecting. Replays available.",
  };
}

export default async function WebinairesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <WebinairesContent />
      </main>
      <Footer />
    </>
  );
}
