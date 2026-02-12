import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Values } from "@/components/sections/Values";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Timeline } from "@/components/sections/Timeline";
import { Team } from "@/components/sections/Team";
import { Certifications } from "@/components/sections/Certifications";
import { AidesNumeriques } from "@/components/sections/AidesNumeriques";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Structured Data for SEO */}
      <HomeJsonLd locale={locale as "fr" | "en"} />

      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Timeline />
        <GoogleReviews />
        <SuccessStories />
        <Team />
        <Certifications />
        <Values />
        <AidesNumeriques />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
