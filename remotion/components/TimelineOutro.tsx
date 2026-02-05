import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
  AbsoluteFill,
} from "remotion";
import { FloatingShapes } from "./3d/FloatingShapes";

export const TimelineOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const isSquare = width === height;

  // Checkmark animation
  const checkProgress = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Title animation
  const titleProgress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 200 },
  });

  const titleScale = interpolate(titleProgress, [0, 1], [0.9, 1]);
  const titleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // CTA animation
  const ctaProgress = spring({
    frame: frame - 45,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const ctaScale = interpolate(ctaProgress, [0, 1], [0.8, 1]);
  const ctaOpacity = interpolate(frame, [45, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Pulse effect for CTA
  const pulse = 1 + Math.sin(frame / 12) * 0.02;

  // Logo animation
  const logoOpacity = interpolate(frame, [60, 75], [0, 1], {
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
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 3D Background */}
      <div style={{ opacity: 0.5 }}>
        <FloatingShapes variant="outro" />
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
        {/* Completed steps recap */}
        <div
          style={{
            display: "flex",
            gap: isSquare ? 10 : 20,
            marginBottom: 40,
            opacity: interpolate(frame, [0, 20], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          {steps.map((step, index) => {
            const stepDelay = index * 5;
            const stepCheckOpacity = interpolate(
              frame,
              [stepDelay, stepDelay + 15],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );

            return (
              <div
                key={step.num}
                style={{
                  width: isSquare ? 50 : 65,
                  height: isSquare ? 50 : 65,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 10px 30px ${step.color}40`,
                  opacity: stepCheckOpacity,
                  transform: `scale(${interpolate(
                    frame,
                    [stepDelay, stepDelay + 15],
                    [0.5, 1],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                  )})`,
                }}
              >
                <span
                  style={{
                    fontSize: isSquare ? 20 : 26,
                    color: "#ffffff",
                  }}
                >
                  ✓
                </span>
              </div>
            );
          })}
        </div>

        {/* Title */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
            marginBottom: 20,
          }}
        >
          <h2
            style={{
              fontSize: isSquare ? 48 : 72,
              fontWeight: 800,
              color: "#ffffff",
              margin: 0,
              fontFamily: "system-ui, -apple-system, sans-serif",
              lineHeight: 1.2,
            }}
          >
            Prêt à démarrer
          </h2>
          <h2
            style={{
              fontSize: isSquare ? 48 : 72,
              fontWeight: 800,
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #f59e0b 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            votre projet ?
          </h2>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: isSquare ? 18 : 24,
            color: "#64748b",
            margin: 0,
            marginBottom: 40,
            fontFamily: "system-ui, -apple-system, sans-serif",
            opacity: titleOpacity,
          }}
        >
          Transformons votre vision en réalité
        </p>

        {/* CTA Button */}
        <div
          style={{
            opacity: ctaOpacity,
            transform: `scale(${ctaScale * pulse})`,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 15,
              padding: isSquare ? "18px 35px" : "22px 45px",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              borderRadius: 50,
              boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)",
            }}
          >
            <span
              style={{
                fontSize: isSquare ? 20 : 26,
                fontWeight: 700,
                color: "#ffffff",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Discuter de votre projet
            </span>
            <div
              style={{
                width: isSquare ? 35 : 45,
                height: isSquare ? 35 : 45,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: isSquare ? 18 : 22 }}>→</span>
            </div>
          </div>
        </div>

        {/* Website */}
        <div
          style={{
            marginTop: 50,
            opacity: logoOpacity,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 15,
          }}
        >
          <Img
            src={staticFile("images/logos/hkcom-logo.png")}
            style={{
              width: isSquare ? 70 : 90,
              height: "auto",
              filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))",
            }}
          />
          <span
            style={{
              fontSize: isSquare ? 18 : 24,
              fontWeight: 600,
              color: "#94a3b8",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            hkcom.fr
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
