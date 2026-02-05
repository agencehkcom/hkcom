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

export const PortfolioIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Logo animation
  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const logoOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Title animation
  const titleProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 200 },
  });

  const titleY = interpolate(titleProgress, [0, 1], [60, 0]);
  const titleOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtitle animation
  const subtitleOpacity = interpolate(frame, [35, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Counter animation
  const counterProgress = spring({
    frame: frame - 50,
    fps,
    config: { damping: 200 },
    durationInFrames: 45,
  });
  const projectCount = Math.round(6 * counterProgress);

  const isSquare = width === height;

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
      {/* 3D Floating Shapes Background */}
      <FloatingShapes variant="intro" />

      {/* Animated background grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translateY(${frame * 0.5}px)`,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
          marginBottom: 30,
        }}
      >
        <Img
          src={staticFile("images/logos/hkcom-logo.png")}
          style={{
            width: isSquare ? 120 : 150,
            height: "auto",
            filter: "drop-shadow(0 0 25px rgba(59, 130, 246, 0.5))",
          }}
        />
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
            fontSize: isSquare ? 64 : 90,
            fontWeight: 800,
            background:
              "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
            textAlign: "center",
          }}
        >
          Nos Réalisations
        </h1>
      </div>

      {/* Subtitle */}
      <div
        style={{
          opacity: subtitleOpacity,
          marginTop: 20,
        }}
      >
        <p
          style={{
            fontSize: isSquare ? 24 : 32,
            color: "#94a3b8",
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Des projets qui font la différence
        </p>
      </div>

      {/* Project counter */}
      <div
        style={{
          marginTop: 50,
          opacity: interpolate(frame, [50, 65], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 15,
            padding: "20px 40px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: 20,
            border: "1px solid rgba(59, 130, 246, 0.3)",
          }}
        >
          <span
            style={{
              fontSize: isSquare ? 56 : 72,
              fontWeight: 800,
              color: "#3b82f6",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {projectCount}
          </span>
          <span
            style={{
              fontSize: isSquare ? 22 : 28,
              color: "#64748b",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            projets clients
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
