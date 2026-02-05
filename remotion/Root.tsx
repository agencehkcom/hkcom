import { Composition, Folder } from "remotion";
import { AgencyPresentation } from "./compositions/AgencyPresentation";
import { PortfolioVideo } from "./compositions/PortfolioVideo";
import { TimelineJourney } from "./compositions/TimelineJourney";
import { TestimonialsVideo } from "./compositions/TestimonialsVideo";

export const RemotionRoot = () => {
  // Portfolio video duration calculation:
  // Intro: 4s + 6 projects x 3.5s + Outro: 5s = 30s
  // Minus transitions overlap: ~2.8s
  // Total: ~27 seconds = 810 frames at 30fps
  const portfolioDuration = 810;

  // Timeline Journey duration calculation:
  // Intro: 3s + Step1: 4s + Step2: 5s + Step3: 5s + Step4: 4s = 21s
  // Total: 21 seconds = 630 frames at 30fps
  const timelineDuration = 630;

  // Testimonials duration calculation:
  // Continuous vertical scroll of 8 testimonials
  // Total: 15 seconds = 450 frames at 30fps
  const testimonialsDuration = 450;

  return (
    <>
      <Folder name="Agency">
        <Composition
          id="AgencyPresentation"
          component={AgencyPresentation}
          durationInFrames={750}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            agencyName: "HKCOM",
            tagline: "Votre partenaire digital",
            services: ["Développement Web", "Publicités Digitales", "Création de Contenu"],
            stats: {
              clients: 100,
              projects: 150,
              satisfaction: 98,
              years: 5,
            },
          }}
        />
        <Composition
          id="AgencyPresentationSquare"
          component={AgencyPresentation}
          durationInFrames={750}
          fps={30}
          width={1080}
          height={1080}
          defaultProps={{
            agencyName: "HKCOM",
            tagline: "Votre partenaire digital",
            services: ["Développement Web", "Publicités Digitales", "Création de Contenu"],
            stats: {
              clients: 100,
              projects: 150,
              satisfaction: 98,
              years: 5,
            },
          }}
        />
      </Folder>

      <Folder name="Portfolio">
        <Composition
          id="PortfolioShowcase"
          component={PortfolioVideo}
          durationInFrames={portfolioDuration}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="PortfolioShowcaseSquare"
          component={PortfolioVideo}
          durationInFrames={portfolioDuration}
          fps={30}
          width={1080}
          height={1080}
        />
      </Folder>

      <Folder name="Timeline">
        {/* Dark theme versions */}
        <Composition
          id="TimelineJourneyDark"
          component={TimelineJourney}
          durationInFrames={timelineDuration}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            theme: "dark" as const,
          }}
        />
        <Composition
          id="TimelineJourneyDarkSquare"
          component={TimelineJourney}
          durationInFrames={timelineDuration}
          fps={30}
          width={1080}
          height={1080}
          defaultProps={{
            theme: "dark" as const,
          }}
        />
        {/* Light theme versions */}
        <Composition
          id="TimelineJourneyLight"
          component={TimelineJourney}
          durationInFrames={timelineDuration}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            theme: "light" as const,
          }}
        />
        <Composition
          id="TimelineJourneyLightSquare"
          component={TimelineJourney}
          durationInFrames={timelineDuration}
          fps={30}
          width={1080}
          height={1080}
          defaultProps={{
            theme: "light" as const,
          }}
        />
        {/* Mobile (portrait) versions - 9:16 */}
        <Composition
          id="TimelineJourneyDarkMobile"
          component={TimelineJourney}
          durationInFrames={timelineDuration}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            theme: "dark" as const,
          }}
        />
        <Composition
          id="TimelineJourneyLightMobile"
          component={TimelineJourney}
          durationInFrames={timelineDuration}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            theme: "light" as const,
          }}
        />
      </Folder>

      <Folder name="Testimonials">
        {/* Dark theme versions */}
        <Composition
          id="TestimonialsDark"
          component={TestimonialsVideo}
          durationInFrames={testimonialsDuration}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            theme: "dark" as const,
          }}
        />
        <Composition
          id="TestimonialsLight"
          component={TestimonialsVideo}
          durationInFrames={testimonialsDuration}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            theme: "light" as const,
          }}
        />
        {/* Mobile (portrait) versions - 9:16 */}
        <Composition
          id="TestimonialsDarkMobile"
          component={TestimonialsVideo}
          durationInFrames={testimonialsDuration}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            theme: "dark" as const,
          }}
        />
        <Composition
          id="TestimonialsLightMobile"
          component={TestimonialsVideo}
          durationInFrames={testimonialsDuration}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            theme: "light" as const,
          }}
        />
      </Folder>
    </>
  );
};
