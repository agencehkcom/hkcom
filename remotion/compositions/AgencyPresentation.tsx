import { useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";

import { IntroScene } from "../components/IntroScene";
import { ServicesScene } from "../components/ServicesScene";
import { StatsScene } from "../components/StatsScene";
import { OutroScene } from "../components/OutroScene";

export type AgencyPresentationProps = {
  agencyName: string;
  tagline: string;
  services: string[];
  stats: {
    clients: number;
    projects: number;
    satisfaction: number;
    years: number;
  };
};

export const AgencyPresentation: React.FC<AgencyPresentationProps> = ({
  agencyName,
  tagline,
  services,
  stats,
}) => {
  const { fps } = useVideoConfig();

  // Scene durations in seconds, converted to frames
  const introDuration = 6 * fps; // 6 seconds
  const servicesDuration = 6 * fps; // 6 seconds
  const statsDuration = 6 * fps; // 6 seconds
  const outroDuration = 7 * fps; // 7 seconds

  // Transition duration
  const transitionDuration = 0.5 * fps; // 0.5 seconds

  return (
    <TransitionSeries>
      {/* Intro Scene */}
      <TransitionSeries.Sequence durationInFrames={introDuration}>
        <IntroScene agencyName={agencyName} tagline={tagline} />
      </TransitionSeries.Sequence>

      {/* Transition: Fade */}
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: transitionDuration })}
      />

      {/* Services Scene */}
      <TransitionSeries.Sequence durationInFrames={servicesDuration}>
        <ServicesScene services={services} />
      </TransitionSeries.Sequence>

      {/* Transition: Slide from right */}
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: transitionDuration })}
      />

      {/* Stats Scene */}
      <TransitionSeries.Sequence durationInFrames={statsDuration}>
        <StatsScene stats={stats} />
      </TransitionSeries.Sequence>

      {/* Transition: Fade */}
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: transitionDuration })}
      />

      {/* Outro Scene */}
      <TransitionSeries.Sequence durationInFrames={outroDuration}>
        <OutroScene agencyName={agencyName} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
