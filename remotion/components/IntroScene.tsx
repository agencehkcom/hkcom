import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
  AbsoluteFill,
} from "remotion";

type IntroSceneProps = {
  agencyName: string;
  tagline: string;
};

export const IntroScene: React.FC<IntroSceneProps> = ({
  agencyName,
  tagline,
}) => {
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

  // Agency name animation
  const nameProgress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 200 },
  });

  const nameY = interpolate(nameProgress, [0, 1], [50, 0]);
  const nameOpacity = interpolate(frame, [20, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Tagline animation
  const taglineOpacity = interpolate(frame, [45, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const taglineY = interpolate(frame, [45, 60], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Background gradient animation
  const gradientRotation = interpolate(frame, [0, 300], [0, 360]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${gradientRotation}deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Animated background shapes */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          top: "10%",
          left: "10%",
          transform: `scale(${1 + Math.sin(frame / 30) * 0.1})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
          bottom: "10%",
          right: "10%",
          transform: `scale(${1 + Math.cos(frame / 25) * 0.1})`,
        }}
      />

      {/* Logo */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
          marginBottom: 40,
        }}
      >
        <Img
          src={staticFile("images/logos/hkcom-logo.png")}
          style={{
            width: Math.min(width * 0.25, 300),
            height: "auto",
            filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))",
          }}
        />
      </div>

      {/* Agency Name */}
      <div
        style={{
          opacity: nameOpacity,
          transform: `translateY(${nameY}px)`,
        }}
      >
        <h1
          style={{
            fontSize: Math.min(width * 0.08, 120),
            fontWeight: 800,
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
            letterSpacing: "-0.02em",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {agencyName}
        </h1>
      </div>

      {/* Tagline */}
      <div
        style={{
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
          marginTop: 20,
        }}
      >
        <p
          style={{
            fontSize: Math.min(width * 0.025, 36),
            color: "#94a3b8",
            margin: 0,
            fontWeight: 500,
            fontFamily: "system-ui, -apple-system, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          {tagline}
        </p>
      </div>

      {/* Decorative line */}
      <div
        style={{
          width: interpolate(frame, [60, 90], [0, Math.min(width * 0.3, 300)], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          height: 3,
          background: "linear-gradient(90deg, transparent, #3b82f6, transparent)",
          marginTop: 30,
          borderRadius: 2,
        }}
      />
    </AbsoluteFill>
  );
};
