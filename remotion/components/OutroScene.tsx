import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
  AbsoluteFill,
} from "remotion";

type OutroSceneProps = {
  agencyName: string;
};

export const OutroScene: React.FC<OutroSceneProps> = ({ agencyName }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Logo animation
  const logoProgress = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // CTA animation
  const ctaProgress = spring({
    frame: frame - 25,
    fps,
    config: { damping: 200 },
  });

  const ctaOpacity = interpolate(frame, [25, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Website animation
  const websiteOpacity = interpolate(frame, [50, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const websiteY = interpolate(frame, [50, 65], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Pulse animation for CTA
  const pulse = Math.sin(frame / 10) * 0.05 + 1;

  const isSquare = width === height;

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
      {/* Animated gradient orbs */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 60%)",
            top: "-20%",
            left: "-10%",
            transform: `scale(${1 + Math.sin(frame / 40) * 0.1})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 60%)",
            bottom: "-15%",
            right: "-5%",
            transform: `scale(${1 + Math.cos(frame / 35) * 0.1})`,
          }}
        />
      </div>

      {/* Logo */}
      <div
        style={{
          transform: `scale(${logoProgress})`,
          opacity: logoOpacity,
          marginBottom: 30,
        }}
      >
        <Img
          src={staticFile("images/logos/hkcom-logo.png")}
          style={{
            width: isSquare ? 180 : 220,
            height: "auto",
            filter: "drop-shadow(0 0 40px rgba(59, 130, 246, 0.6))",
          }}
        />
      </div>

      {/* CTA Text */}
      <div
        style={{
          opacity: ctaOpacity,
          transform: `scale(${pulse})`,
        }}
      >
        <h2
          style={{
            fontSize: isSquare ? 40 : 56,
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
            textAlign: "center",
          }}
        >
          Prêt à transformer
        </h2>
        <h2
          style={{
            fontSize: isSquare ? 40 : 56,
            fontWeight: 700,
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "10px 0 0 0",
            fontFamily: "system-ui, -apple-system, sans-serif",
            textAlign: "center",
          }}
        >
          votre présence digitale ?
        </h2>
      </div>

      {/* Website URL */}
      <div
        style={{
          opacity: websiteOpacity,
          transform: `translateY(${websiteY}px)`,
          marginTop: 50,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 15,
            padding: "15px 35px",
            background: "rgba(59, 130, 246, 0.15)",
            borderRadius: 50,
            border: "2px solid rgba(59, 130, 246, 0.4)",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 15px #22c55e",
            }}
          />
          <span
            style={{
              fontSize: isSquare ? 22 : 28,
              fontWeight: 600,
              color: "#ffffff",
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            hkcom.fr
          </span>
        </div>
      </div>

      {/* Social hint */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          opacity: interpolate(frame, [70, 85], [0, 0.7], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <p
          style={{
            fontSize: isSquare ? 14 : 16,
            color: "#64748b",
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Suivez-nous sur les réseaux sociaux
        </p>
      </div>
    </AbsoluteFill>
  );
};
