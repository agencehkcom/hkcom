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

export const PortfolioOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const isSquare = width === height;

  // Stats animation
  const statsProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 60,
  });

  // Title animation
  const titleProgress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const titleScale = interpolate(titleProgress, [0, 1], [0.8, 1]);
  const titleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // CTA animation
  const ctaProgress = spring({
    frame: frame - 50,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const ctaScale = interpolate(ctaProgress, [0, 1], [0.9, 1]);
  const ctaOpacity = interpolate(frame, [50, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Pulse effect
  const pulse = 1 + Math.sin(frame / 15) * 0.03;

  // Logo animation
  const logoOpacity = interpolate(frame, [70, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const stats = [
    { value: Math.round(100 * statsProgress), label: "Clients satisfaits", suffix: "+" },
    { value: Math.round(150 * statsProgress), label: "Projets livrés", suffix: "+" },
    { value: Math.round(98 * statsProgress), label: "Satisfaction", suffix: "%" },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: isSquare ? 40 : 80,
      }}
    >
      {/* 3D Animated Rings Background */}
      <AnimatedRings variant="orbital" />

      {/* Stats row */}
      <div
        style={{
          display: "flex",
          gap: isSquare ? 30 : 80,
          marginBottom: isSquare ? 40 : 60,
          opacity: interpolate(frame, [0, 20], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            style={{
              textAlign: "center",
              transform: `translateY(${interpolate(
                frame,
                [index * 5, 20 + index * 5],
                [30, 0],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              )}px)`,
            }}
          >
            <div
              style={{
                fontSize: isSquare ? 40 : 56,
                fontWeight: 800,
                color: "#3b82f6",
                fontFamily: "system-ui, -apple-system, sans-serif",
                textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
            >
              {stat.value}{stat.suffix}
            </div>
            <div
              style={{
                fontSize: isSquare ? 14 : 18,
                color: "#64748b",
                fontFamily: "system-ui, -apple-system, sans-serif",
                marginTop: 5,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Main CTA */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        <h2
          style={{
            fontSize: isSquare ? 42 : 64,
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
            lineHeight: 1.2,
          }}
        >
          Votre projet est le prochain ?
        </h2>
      </div>

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
            padding: isSquare ? "18px 40px" : "22px 50px",
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            borderRadius: 50,
            boxShadow: "0 15px 50px rgba(59, 130, 246, 0.4)",
          }}
        >
          <span
            style={{
              fontSize: isSquare ? 22 : 28,
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Discutons de votre projet
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
            <span style={{ fontSize: isSquare ? 20 : 24 }}>→</span>
          </div>
        </div>
      </div>

      {/* Website URL */}
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
            width: isSquare ? 80 : 100,
            height: "auto",
            filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))",
          }}
        />
        <span
          style={{
            fontSize: isSquare ? 20 : 26,
            fontWeight: 600,
            color: "#94a3b8",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          hkcom.fr
        </span>
      </div>
    </AbsoluteFill>
  );
};
