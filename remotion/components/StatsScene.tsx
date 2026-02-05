import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  AbsoluteFill,
} from "remotion";

type StatsSceneProps = {
  stats: {
    clients: number;
    projects: number;
    satisfaction: number;
    years: number;
  };
};

const statConfig = [
  { key: "clients", label: "Clients", suffix: "+", color: "#3b82f6" },
  { key: "projects", label: "Projets", suffix: "+", color: "#10b981" },
  { key: "satisfaction", label: "Satisfaction", suffix: "%", color: "#f59e0b" },
  { key: "years", label: "Années", suffix: "+", color: "#ec4899" },
];

export const StatsScene: React.FC<StatsSceneProps> = ({ stats }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  const isSquare = width === height;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: isSquare ? 40 : 60,
      }}
    >
      {/* Background particles effect */}
      {[...Array(20)].map((_, i) => {
        const x = (i * 137.5) % 100;
        const y = (i * 97.3) % 100;
        const size = 4 + (i % 3) * 2;
        const delay = i * 5;
        const particleOpacity = interpolate(
          frame,
          [delay, delay + 30],
          [0, 0.5],
          { extrapolateRight: "clamp" }
        );

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background: `rgba(59, 130, 246, ${particleOpacity})`,
              transform: `translateY(${Math.sin((frame + delay) / 20) * 10}px)`,
            }}
          />
        );
      })}

      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          marginBottom: isSquare ? 40 : 80,
        }}
      >
        <h2
          style={{
            fontSize: isSquare ? 42 : 56,
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
            textAlign: "center",
          }}
        >
          Nos Chiffres Clés
        </h2>
      </div>

      {/* Stats Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSquare ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: isSquare ? 30 : 60,
          width: "100%",
          maxWidth: isSquare ? 600 : 1400,
        }}
      >
        {statConfig.map((stat, index) => {
          const delay = 20 + index * 12;
          const countProgress = spring({
            frame: frame - delay,
            fps,
            config: { damping: 200 },
            durationInFrames: 60,
          });

          const value = stats[stat.key as keyof typeof stats];
          const displayValue = Math.round(value * countProgress);

          const cardOpacity = interpolate(frame, [delay, delay + 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          const cardScale = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12, stiffness: 100 },
          });

          return (
            <div
              key={stat.key}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: isSquare ? 25 : 40,
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: 20,
                border: `1px solid ${stat.color}30`,
                opacity: cardOpacity,
                transform: `scale(${cardScale})`,
              }}
            >
              <div
                style={{
                  fontSize: isSquare ? 56 : 72,
                  fontWeight: 800,
                  color: stat.color,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  lineHeight: 1,
                  textShadow: `0 0 30px ${stat.color}50`,
                }}
              >
                {displayValue}
                {stat.suffix}
              </div>
              <div
                style={{
                  fontSize: isSquare ? 18 : 22,
                  fontWeight: 500,
                  color: "#94a3b8",
                  marginTop: 10,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
