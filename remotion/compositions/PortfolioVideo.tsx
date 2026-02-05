import { useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";

import { PortfolioIntro } from "../components/PortfolioIntro";
import { ProjectShowcase, Project } from "../components/ProjectShowcase";
import { PortfolioOutro } from "../components/PortfolioOutro";

// Projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Maamri Halles",
    category: "web",
    image: "/images/portfolio/maamri.jpg",
    description: "Site vitrine pour un service traiteur haut de gamme",
    tags: ["WordPress", "E-commerce"],
  },
  {
    id: 2,
    title: "Restaurant Papylles",
    category: "web",
    image: "/images/portfolio/papylles.png",
    description: "Site web avec réservation en ligne pour restaurant gastronomique",
    tags: ["WordPress", "Réservation"],
  },
  {
    id: 3,
    title: "L'École des Pros",
    category: "web",
    image: "/images/portfolio/lecole-des-pros.png",
    description: "Plateforme de formation professionnelle avec espace membre",
    tags: ["WordPress", "LMS"],
  },
  {
    id: 4,
    title: "Chef Event",
    category: "web",
    image: "/images/portfolio/chef-event.png",
    description: "Site événementiel pour chef cuisinier à domicile",
    tags: ["WordPress", "Booking"],
  },
  {
    id: 5,
    title: "Coop Bazar",
    category: "ecommerce",
    image: "/images/portfolio/coop-bazar.png",
    description: "Marketplace e-commerce pour produits locaux et artisanaux",
    tags: ["WooCommerce", "Marketplace"],
  },
  {
    id: 6,
    title: "Spa Douce Bulles",
    category: "web",
    image: "/images/portfolio/spa-douce-bulles.png",
    description: "Site bien-être avec prise de rendez-vous en ligne",
    tags: ["WordPress", "Booking"],
  },
];

export const PortfolioVideo: React.FC = () => {
  const { fps } = useVideoConfig();

  // Scene durations
  const introDuration = 4 * fps; // 4 seconds
  const projectDuration = 3.5 * fps; // 3.5 seconds per project
  const outroDuration = 5 * fps; // 5 seconds

  // Transition duration
  const transitionDuration = Math.round(0.4 * fps); // 0.4 seconds

  // Slide directions for variety
  const slideDirections: Array<"from-left" | "from-right" | "from-top" | "from-bottom"> = [
    "from-right",
    "from-left",
    "from-right",
    "from-left",
    "from-right",
    "from-left",
  ];

  return (
    <TransitionSeries>
      {/* Intro */}
      <TransitionSeries.Sequence durationInFrames={introDuration}>
        <PortfolioIntro />
      </TransitionSeries.Sequence>

      {/* Projects */}
      {projects.map((project, index) => (
        <>
          <TransitionSeries.Transition
            key={`transition-${project.id}`}
            presentation={slide({ direction: slideDirections[index] })}
            timing={linearTiming({ durationInFrames: transitionDuration })}
          />
          <TransitionSeries.Sequence
            key={`project-${project.id}`}
            durationInFrames={projectDuration}
          >
            <ProjectShowcase project={project} index={index} />
          </TransitionSeries.Sequence>
        </>
      ))}

      {/* Transition to Outro */}
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: transitionDuration })}
      />

      {/* Outro */}
      <TransitionSeries.Sequence durationInFrames={outroDuration}>
        <PortfolioOutro />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
