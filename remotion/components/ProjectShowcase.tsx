import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
  AbsoluteFill,
} from "remotion";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
};

type ProjectShowcaseProps = {
  project: Project;
  index: number;
};

const categoryColors: Record<string, string> = {
  web: "#3b82f6",
  ecommerce: "#10b981",
};

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  project,
  index,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const isSquare = width === height;
  const isEven = index % 2 === 0;

  // Image animation
  const imageProgress = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const imageScale = interpolate(imageProgress, [0, 1], [1.2, 1]);
  const imageOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Content animation
  const contentProgress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 200 },
  });

  const contentX = interpolate(
    contentProgress,
    [0, 1],
    [isEven ? -80 : 80, 0]
  );
  const contentOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Tags animation
  const tagsOpacity = interpolate(frame, [30, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Number indicator animation
  const numberScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const accentColor = categoryColors[project.category] || "#3b82f6";

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          width: "60%",
          height: "100%",
          background: `linear-gradient(${isEven ? "90deg" : "270deg"}, ${accentColor}10 0%, transparent 100%)`,
          left: isEven ? 0 : "auto",
          right: isEven ? "auto" : 0,
        }}
      />

      {/* Layout container */}
      <div
        style={{
          display: "flex",
          flexDirection: isSquare ? "column" : isEven ? "row" : "row-reverse",
          width: "100%",
          height: "100%",
          padding: isSquare ? 40 : 80,
          gap: isSquare ? 30 : 60,
          alignItems: "center",
        }}
      >
        {/* Image Section */}
        <div
          style={{
            flex: isSquare ? "none" : 1,
            width: isSquare ? "100%" : "auto",
            height: isSquare ? "45%" : "80%",
            position: "relative",
            opacity: imageOpacity,
            overflow: "hidden",
            borderRadius: 24,
            boxShadow: `0 25px 80px ${accentColor}30`,
          }}
        >
          <Img
            src={staticFile(project.image.replace("/images/", "images/"))}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: `scale(${imageScale})`,
            }}
          />
          {/* Image overlay gradient */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "40%",
              background: `linear-gradient(to top, ${accentColor}40, transparent)`,
            }}
          />
        </div>

        {/* Content Section */}
        <div
          style={{
            flex: isSquare ? "none" : 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            opacity: contentOpacity,
            transform: `translateX(${isSquare ? 0 : contentX}px)`,
            padding: isSquare ? 0 : 20,
          }}
        >
          {/* Project number */}
          <div
            style={{
              transform: `scale(${numberScale})`,
              marginBottom: isSquare ? 15 : 25,
            }}
          >
            <span
              style={{
                fontSize: isSquare ? 48 : 80,
                fontWeight: 900,
                color: `${accentColor}20`,
                fontFamily: "system-ui, -apple-system, sans-serif",
                lineHeight: 1,
              }}
            >
              0{index + 1}
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: isSquare ? 36 : 56,
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              marginBottom: isSquare ? 12 : 20,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {project.title}
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: isSquare ? 18 : 24,
              color: "#94a3b8",
              margin: 0,
              marginBottom: isSquare ? 20 : 30,
              fontFamily: "system-ui, -apple-system, sans-serif",
              lineHeight: 1.5,
              maxWidth: 500,
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              opacity: tagsOpacity,
            }}
          >
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                style={{
                  fontSize: isSquare ? 14 : 16,
                  fontWeight: 600,
                  color: accentColor,
                  padding: isSquare ? "8px 16px" : "10px 20px",
                  background: `${accentColor}15`,
                  borderRadius: 30,
                  border: `1px solid ${accentColor}40`,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  transform: `translateY(${interpolate(
                    frame,
                    [30 + tagIndex * 5, 45 + tagIndex * 5],
                    [20, 0],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                  )}px)`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            style={{
              width: num === index + 1 ? 30 : 10,
              height: 10,
              borderRadius: 5,
              background:
                num === index + 1 ? accentColor : "rgba(255, 255, 255, 0.2)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
