import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  AbsoluteFill,
} from "remotion";

type ServicesSceneProps = {
  services: string[];
};

const serviceIcons: Record<string, string> = {
  "Développement Web": "🌐",
  "Publicités Digitales": "📢",
  "Création de Contenu": "🎬",
};

const serviceColors: Record<string, string> = {
  "Développement Web": "#3b82f6",
  "Publicités Digitales": "#10b981",
  "Création de Contenu": "#f59e0b",
};

export const ServicesScene: React.FC<ServicesSceneProps> = ({ services }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 20], [-30, 0], {
    extrapolateRight: "clamp",
  });

  // Card size calculation
  const isSquare = width === height;
  const cardWidth = isSquare ? width * 0.7 : width * 0.25;
  const cardHeight = isSquare ? height * 0.18 : height * 0.45;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: isSquare ? 40 : 80,
      }}
    >
      {/* Background effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: isSquare ? 30 : 60,
        }}
      >
        <h2
          style={{
            fontSize: isSquare ? 48 : 64,
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
            textAlign: "center",
          }}
        >
          Nos Services
        </h2>
        <div
          style={{
            width: interpolate(frame, [15, 35], [0, 200], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            height: 4,
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
            margin: "15px auto 0",
            borderRadius: 2,
          }}
        />
      </div>

      {/* Services Grid */}
      <div
        style={{
          display: "flex",
          flexDirection: isSquare ? "column" : "row",
          gap: isSquare ? 20 : 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {services.map((service, index) => {
          const delay = 30 + index * 15;
          const cardProgress = spring({
            frame: frame - delay,
            fps,
            config: { damping: 15, stiffness: 100 },
          });

          const cardOpacity = interpolate(frame, [delay, delay + 15], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          const cardY = interpolate(cardProgress, [0, 1], [60, 0]);
          const cardScale = interpolate(cardProgress, [0, 1], [0.8, 1]);

          const color = serviceColors[service] || "#3b82f6";
          const icon = serviceIcons[service] || "✨";

          return (
            <div
              key={service}
              style={{
                width: cardWidth,
                height: cardHeight,
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: 24,
                border: `2px solid ${color}40`,
                display: "flex",
                flexDirection: isSquare ? "row" : "column",
                justifyContent: "center",
                alignItems: "center",
                gap: isSquare ? 20 : 15,
                padding: isSquare ? 20 : 30,
                opacity: cardOpacity,
                transform: `translateY(${cardY}px) scale(${cardScale})`,
                boxShadow: `0 0 40px ${color}20`,
              }}
            >
              <div
                style={{
                  fontSize: isSquare ? 48 : 64,
                  filter: `drop-shadow(0 0 20px ${color})`,
                }}
              >
                {icon}
              </div>
              <p
                style={{
                  fontSize: isSquare ? 22 : 24,
                  fontWeight: 600,
                  color: "#ffffff",
                  margin: 0,
                  textAlign: "center",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                {service}
              </p>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
