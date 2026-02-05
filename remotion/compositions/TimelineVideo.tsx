import { useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";

import { TimelineIntro } from "../components/TimelineIntro";
import { TimelineStep, Step } from "../components/TimelineStep";
import { TimelineOutro } from "../components/TimelineOutro";

// Timeline steps data
const steps: Step[] = [
  {
    number: 1,
    title: "Découverte",
    description: "Analyse de vos besoins, objectifs et cibles pour définir la stratégie optimale",
    icon: "search",
    color: "#3b82f6",
  },
  {
    number: 2,
    title: "Conception",
    description: "Création des maquettes et validation du design avant développement",
    icon: "palette",
    color: "#8b5cf6",
  },
  {
    number: 3,
    title: "Développement",
    description: "Réalisation technique avec suivi régulier et tests de qualité",
    icon: "code",
    color: "#10b981",
  },
  {
    number: 4,
    title: "Lancement",
    description: "Mise en ligne, formation et accompagnement post-lancement",
    icon: "rocket",
    color: "#f59e0b",
  },
];

export const TimelineVideo: React.FC = () => {
  const { fps } = useVideoConfig();

  // Scene durations
  const introDuration = 4 * fps; // 4 seconds
  const stepDuration = 4 * fps; // 4 seconds per step
  const outroDuration = 5 * fps; // 5 seconds

  // Transition duration
  const transitionDuration = Math.round(0.5 * fps); // 0.5 seconds

  return (
    <TransitionSeries>
      {/* Intro */}
      <TransitionSeries.Sequence durationInFrames={introDuration}>
        <TimelineIntro />
      </TransitionSeries.Sequence>

      {/* Steps */}
      {steps.map((step, index) => {
        // Alternate slide directions
        const directions: Array<"from-left" | "from-right" | "from-bottom" | "from-top"> = [
          "from-right",
          "from-left",
          "from-bottom",
          "from-top",
        ];

        return (
          <>
            <TransitionSeries.Transition
              key={`transition-${step.number}`}
              presentation={slide({ direction: directions[index] })}
              timing={linearTiming({ durationInFrames: transitionDuration })}
            />
            <TransitionSeries.Sequence
              key={`step-${step.number}`}
              durationInFrames={stepDuration}
            >
              <TimelineStep step={step} totalSteps={steps.length} />
            </TransitionSeries.Sequence>
          </>
        );
      })}

      {/* Transition to Outro */}
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: transitionDuration })}
      />

      {/* Outro */}
      <TransitionSeries.Sequence durationInFrames={outroDuration}>
        <TimelineOutro />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
