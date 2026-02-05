import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
  AbsoluteFill,
} from "remotion";
import { AnimatedRings } from "./3d/AnimatedRings";

export const TimelineIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const isSquare = width === height;

  // Badge animation
  const badgeProgress = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const badgeOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Title animation
  const titleProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 200 },
  });

  const titleY = interpolate(titleProgress, [0, 1], [50, 0]);
  const titleOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtitle animation
  const subtitleOpacity = interpolate(frame, [35, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Steps preview animation
  const stepsOpacity = interpolate(frame, [50, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const steps = [
    { num: "01", label: "Découverte", color: "#3b82f6" },
    { num: "02", label: "Conception", color: "#8b5cf6" },
    { num: "03", label: "Développement", color: "#10b981" },
    { num: "04", label: "Lancement", color: "#f59e0b" },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 3D Background */}
      <div style={{ opacity: 0.6 }}>
        <AnimatedRings variant="triple" />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: isSquare ? 40 : 80,
        }}
      >
        {/* Badge */}
        <div
          style={{
            opacity: badgeOpacity,
            transform: `scale(${badgeProgress})`,
            marginBottom: 25,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 24px",
              background: "rgba(59, 130, 246, 0.15)",
              borderRadius: 50,
              border: "1px solid rgba(59, 130, 246, 0.3)",
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
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          <h1
            style={{
              fontSize: isSquare ? 64 : 96,
              fontWeight: 800,
              background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              marginBottom: 15,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Notre Processus
          </h1>
        </div>

        {/* Subtitle */}
        <div
          style={{
            opacity: subtitleOpacity,
            marginBottom: 50,
          }}
        >
          <p
            style={{
              fontSize: isSquare ? 24 : 32,
              color: "#64748b",
              margin: 0,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Une méthodologie en 4 étapes
          </p>
        </div>

        {/* Steps preview */}
        <div
          style={{
            display: "flex",
            flexDirection: isSquare ? "column" : "row",
            gap: isSquare ? 15 : 30,
            opacity: stepsOpacity,
          }}
        >
          {steps.map((step, index) => {
            const stepDelay = 50 + index * 8;
            const stepProgress = spring({
              frame: frame - stepDelay,
              fps,
              config: { damping: 15, stiffness: 100 },
            });

            return (
              <div
                key={step.num}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: isSquare ? "12px 20px" : "15px 25px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: 15,
                  border: `1px solid ${step.color}30`,
                  transform: `scale(${stepProgress})`,
                }}
              >
                <div
                  style={{
                    width: isSquare ? 36 : 44,
                    height: isSquare ? 36 : 44,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: isSquare ? 14 : 16,
                      fontWeight: 700,
                      color: "#ffffff",
                      fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                  >
                    {step.num}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: isSquare ? 16 : 18,
                    fontWeight: 600,
                    color: "#ffffff",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          opacity: interpolate(frame, [60, 75], [0, 0.7], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <Img
          src={staticFile("images/logos/hkcom-logo.png")}
          style={{
            width: isSquare ? 60 : 80,
            height: "auto",
            filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
