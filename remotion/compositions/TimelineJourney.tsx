import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
  AbsoluteFill,
  Easing,
} from "remotion";

type Step = {
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
};

const steps: Step[] = [
  {
    number: 1,
    title: "Découverte",
    description: "Analyse de vos besoins, objectifs et cibles pour définir la stratégie optimale",
    icon: "🔍",
    color: "#3b82f6",
  },
  {
    number: 2,
    title: "Conception",
    description: "Création des maquettes et validation du design avant développement",
    icon: "🎨",
    color: "#8b5cf6",
  },
  {
    number: 3,
    title: "Développement",
    description: "Réalisation technique avec suivi régulier et tests de qualité",
    icon: "💻",
    color: "#10b981",
  },
  {
    number: 4,
    title: "Lancement",
    description: "Mise en ligne, formation et accompagnement post-lancement",
    icon: "🚀",
    color: "#f59e0b",
  },
];

// Thèmes de couleurs
const themes = {
  dark: {
    background: "linear-gradient(180deg, #0a1628 0%, #0a1628 100%)",
    introBackground: "linear-gradient(180deg, #0a1628 0%, #0a1628 100%)",
    titleColor: "#ffffff",
    titleGradient: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
    subtitleColor: "#64748b",
    descriptionColor: "#94a3b8",
    gridColor: "rgba(59, 130, 246, 0.03)",
    particleOpacity: 0.3,
    badgeBackground: "rgba(59, 130, 246, 0.15)",
    badgeBorder: "rgba(59, 130, 246, 0.3)",
    progressBarBg: "rgba(255, 255, 255, 0.1)",
    progressDotInactive: "rgba(255,255,255,0.2)",
  },
  light: {
    background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)",
    introBackground: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)",
    titleColor: "#0a1628",
    titleGradient: "linear-gradient(135deg, #0a1628 0%, #334155 100%)",
    subtitleColor: "#64748b",
    descriptionColor: "#475569",
    gridColor: "rgba(12, 53, 89, 0.05)",
    particleOpacity: 0.4,
    badgeBackground: "rgba(12, 53, 89, 0.08)",
    badgeBorder: "rgba(12, 53, 89, 0.2)",
    progressBarBg: "rgba(0, 0, 0, 0.1)",
    progressDotInactive: "rgba(0,0,0,0.15)",
  },
};

type TimelineJourneyProps = {
  theme?: "dark" | "light";
};

export const TimelineJourney: React.FC<TimelineJourneyProps> = ({ theme = "dark" }) => {
  const colors = themes[theme];
  const frame = useCurrentFrame();
  const { fps, width, height, durationInFrames } = useVideoConfig();

  const isSquare = width === height;

  // Timeline phases (in frames) - étapes 2 et 3 plus longues
  const introEnd = 3 * fps; // 3 seconds intro
  const step1Duration = 4 * fps; // 4 seconds
  const step2Duration = 5 * fps; // 5 seconds (plus long)
  const step3Duration = 5 * fps; // 5 seconds (plus long)
  const step4Duration = 4 * fps; // 4 seconds

  // Calcul des timestamps de chaque étape
  const step1Start = introEnd;
  const step2Start = step1Start + step1Duration;
  const step3Start = step2Start + step2Duration;
  const step4Start = step3Start + step3Duration;
  const step4End = step4Start + step4Duration;

  const stepTimings = [
    { start: step1Start, duration: step1Duration },
    { start: step2Start, duration: step2Duration },
    { start: step3Start, duration: step3Duration },
    { start: step4Start, duration: step4Duration },
  ];

  // Camera X position - vitesse variable selon l'étape
  const getCameraX = () => {
    if (frame < introEnd) return 0;
    if (frame >= step4End) return (steps.length - 1) * width;

    // Interpolation par segment pour contrôler la vitesse de chaque étape
    if (frame < step2Start) {
      // Étape 1
      const progress = interpolate(frame, [step1Start, step2Start], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return Easing.inOut(Easing.cubic)(progress) * width * 0;
    } else if (frame < step3Start) {
      // Étape 2 (plus lent)
      const progress = interpolate(frame, [step2Start, step3Start], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return width * 0 + Easing.inOut(Easing.cubic)(progress) * width;
    } else if (frame < step4Start) {
      // Étape 3 (plus lent)
      const progress = interpolate(frame, [step3Start, step4Start], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return width * 1 + Easing.inOut(Easing.cubic)(progress) * width;
    } else {
      // Étape 4
      const progress = interpolate(frame, [step4Start, step4End], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return width * 2 + Easing.inOut(Easing.cubic)(progress) * width;
    }
  };

  const cameraX = getCameraX();

  const totalJourneyWidth = width * steps.length;

  // Intro animations
  const introTitleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const introTitleY = interpolate(frame, [0, 25], [60, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: "clamp",
  });
  const introSubtitleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const introFadeOut = interpolate(frame, [introEnd - 20, introEnd], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Journey progress (pour la barre de progression)
  const journeyProgress = interpolate(
    frame,
    [introEnd, step4End],
    [0, 100],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: colors.background,
        overflow: "hidden",
      }}
    >
      {/* MAIN CONTAINER - moves horizontally */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: height,
          transform: `translateX(${-cameraX}px)`,
        }}
      >
        {/* Animated background grid */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: totalJourneyWidth * 1.5,
            height: height,
            backgroundImage: `
              linear-gradient(${colors.gridColor} 1px, transparent 1px),
              linear-gradient(90deg, ${colors.gridColor} 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => {
          const baseX = (i * 237) % totalJourneyWidth;
          const y = (i * 73) % 80 + 10;
          const size = 3 + (i % 5) * 2;
          const particleColors = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"];

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: baseX,
                top: `${y}%`,
                width: size,
                height: size,
                borderRadius: "50%",
                background: particleColors[i % particleColors.length],
                opacity: colors.particleOpacity,
                transform: `translateY(${Math.sin((frame + i * 20) / 30) * 15}px)`,
              }}
            />
          );
        })}

        {/* STEPS - Journey horizontal */}
        {steps.map((step, index) => {
          const timing = stepTimings[index];
          const stepStart = timing.start;
          const stepEnd = stepStart + timing.duration;
          const stepCenter = stepStart + timing.duration / 2;

          // Step visibility
          const distanceFromCenter = Math.abs(frame - stepCenter);

          const stepScale = interpolate(
            distanceFromCenter,
            [0, timing.duration / 2, timing.duration],
            [1, 0.92, 0.85],
            { extrapolateRight: "clamp" }
          );

          const stepOpacity = interpolate(
            frame,
            [stepStart - 20, stepStart + 10, stepEnd - 10, stepEnd + 20],
            [0, 1, 1, 0.2],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          // Content animations
          const contentDelay = stepStart + 15;
          const iconScale = spring({
            frame: frame - stepStart,
            fps,
            config: { damping: 12, stiffness: 100 },
          });

          const titleY = interpolate(
            frame,
            [contentDelay, contentDelay + 25],
            [50, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
          );

          const titleOpacity = interpolate(
            frame,
            [contentDelay, contentDelay + 20],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          const descOpacity = interpolate(
            frame,
            [contentDelay + 20, contentDelay + 40],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          const descY = interpolate(
            frame,
            [contentDelay + 20, contentDelay + 45],
            [40, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
          );

          return (
            <div
              key={step.number}
              style={{
                position: "absolute",
                left: width * 0.15 + index * width,
                top: 0,
                width: width * 0.7,
                height: height,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                opacity: stepOpacity,
                transform: `scale(${stepScale})`,
              }}
            >
              {/* Step number circle */}
              <div
                style={{
                  width: isSquare ? 100 : 130,
                  height: isSquare ? 100 : 130,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 20px 60px ${step.color}50`,
                  marginBottom: 30,
                  transform: `scale(${iconScale})`,
                }}
              >
                <span style={{ fontSize: isSquare ? 48 : 60 }}>
                  {step.icon}
                </span>
              </div>

              {/* Step badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  background: `${step.color}20`,
                  borderRadius: 20,
                  border: `1px solid ${step.color}40`,
                  marginBottom: 20,
                  opacity: titleOpacity,
                }}
              >
                <span
                  style={{
                    fontSize: isSquare ? 14 : 16,
                    color: step.color,
                    fontWeight: 600,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Étape {step.number} sur {steps.length}
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontSize: isSquare ? 48 : 72,
                  fontWeight: 800,
                  color: colors.titleColor,
                  margin: 0,
                  marginBottom: 20,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  textAlign: "center",
                  opacity: titleOpacity,
                  transform: `translateY(${titleY}px)`,
                }}
              >
                {step.title}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: isSquare ? 20 : 28,
                  color: colors.descriptionColor,
                  margin: 0,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  textAlign: "center",
                  maxWidth: 600,
                  lineHeight: 1.5,
                  opacity: descOpacity,
                  transform: `translateY(${descY}px)`,
                }}
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* INTRO OVERLAY - Fixed on screen */}
      {frame < introEnd && (
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: introFadeOut,
            zIndex: 100,
            background: colors.introBackground,
          }}
        >
          {/* Badge */}
          <div
            style={{
              opacity: introTitleOpacity,
              transform: `translateY(${introTitleY}px)`,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 24px",
                background: colors.badgeBackground,
                borderRadius: 50,
                border: `1px solid ${colors.badgeBorder}`,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#3b82f6",
                  boxShadow: "0 0 15px #3b82f6",
                }}
              />
              <span
                style={{
                  fontSize: isSquare ? 16 : 20,
                  color: "#3b82f6",
                  fontWeight: 600,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                Méthodologie éprouvée
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: isSquare ? 64 : 96,
              fontWeight: 800,
              background: colors.titleGradient,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              opacity: introTitleOpacity,
              transform: `translateY(${introTitleY}px)`,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Notre Processus
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: isSquare ? 24 : 32,
              color: colors.subtitleColor,
              margin: "20px 0 0 0",
              opacity: introSubtitleOpacity,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Une méthodologie en 4 étapes
          </p>

          {/* Scroll indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 60,
              opacity: interpolate(frame, [40, 60], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: colors.subtitleColor,
                fontSize: 16,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              <span style={{ transform: `translateX(${Math.sin(frame / 10) * 5}px)` }}>
                →
              </span>
              <span>Découvrez notre processus</span>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* PROGRESS BAR - Fixed at bottom during journey */}
      {frame >= introEnd && frame < step4End && (
        <div
          style={{
            position: "absolute",
            bottom: isSquare ? 40 : 50,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 15,
          }}
        >
          {/* Progress dots */}
          <div style={{ display: "flex", gap: 12 }}>
            {steps.map((step, i) => {
              const stepTiming = stepTimings[i];
              const isActive = frame >= stepTiming.start && frame < stepTiming.start + stepTiming.duration;
              const isPast = frame >= stepTiming.start + stepTiming.duration;

              return (
                <div
                  key={i}
                  style={{
                    width: isActive ? 35 : 12,
                    height: 12,
                    borderRadius: 6,
                    background: isActive || isPast ? step.color : colors.progressDotInactive,
                    boxShadow: isActive ? `0 0 20px ${step.color}` : "none",
                  }}
                />
              );
            })}
          </div>

          {/* Progress bar */}
          <div
            style={{
              width: isSquare ? 200 : 300,
              height: 4,
              background: colors.progressBarBg,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${journeyProgress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981, #f59e0b)",
                borderRadius: 2,
              }}
            />
          </div>
        </div>
      )}

      {/* Logo watermark during journey */}
      {frame >= introEnd && frame < step4End && (
        <div
          style={{
            position: "absolute",
            top: 30,
            right: 40,
            opacity: 0.6,
            zIndex: 50,
          }}
        >
          <Img
            src={staticFile("images/logos/hkcom-logo.png")}
            style={{
              width: isSquare ? 50 : 70,
              height: "auto",
            }}
          />
        </div>
      )}
    </AbsoluteFill>
  );
};
