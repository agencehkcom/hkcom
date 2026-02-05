import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  AbsoluteFill,
} from "remotion";
import { ThreeCanvas } from "@remotion/three";

export type Step = {
  number: number;
  title: string;
  description: string;
  icon: "search" | "palette" | "code" | "rocket";
  color: string;
};

type TimelineStepProps = {
  step: Step;
  totalSteps: number;
};

// 3D Icon component
const Icon3D: React.FC<{ icon: string; frame: number; color: string }> = ({
  icon,
  frame,
  color,
}) => {
  const rotation = frame * 0.02;
  const floatY = Math.sin(frame * 0.05) * 0.2;

  const getGeometry = () => {
    switch (icon) {
      case "search":
        return <torusGeometry args={[0.8, 0.15, 16, 32]} />;
      case "palette":
        return <dodecahedronGeometry args={[1]} />;
      case "code":
        return <boxGeometry args={[1.2, 0.8, 0.3]} />;
      case "rocket":
        return <coneGeometry args={[0.6, 1.5, 32]} />;
      default:
        return <sphereGeometry args={[0.8, 32, 32]} />;
    }
  };

  return (
    <mesh rotation={[rotation * 0.5, rotation, 0]} position={[0, floatY, 0]}>
      {getGeometry()}
      <meshStandardMaterial
        color={color}
        metalness={0.6}
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

export const TimelineStep: React.FC<TimelineStepProps> = ({
  step,
  totalSteps,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const isSquare = width === height;

  // Entry animations
  const numberProgress = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const contentProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 200 },
  });

  const iconProgress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  // Number animation
  const numberScale = interpolate(numberProgress, [0, 1], [0, 1]);
  const numberOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Content animation
  const contentX = interpolate(contentProgress, [0, 1], [100, 0]);
  const contentOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Progress bar animation
  const progressWidth = interpolate(frame, [40, 80], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Icon container scale
  const iconScale = interpolate(iconProgress, [0, 1], [0.5, 1]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, #0f172a 0%, ${step.color}15 50%, #0f172a 100%)`,
      }}
    >
      {/* Background particles */}
      {[...Array(15)].map((_, i) => {
        const x = ((i * 137.5) % 100);
        const y = ((i * 97.3) % 100);
        const size = 3 + (i % 4) * 2;
        const particleOpacity = interpolate(
          frame,
          [i * 2, i * 2 + 20],
          [0, 0.4],
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
              background: step.color,
              opacity: particleOpacity,
              transform: `translateY(${Math.sin((frame + i * 10) / 20) * 15}px)`,
            }}
          />
        );
      })}

      <div
        style={{
          display: "flex",
          flexDirection: isSquare ? "column" : "row",
          width: "100%",
          height: "100%",
          padding: isSquare ? 50 : 80,
          alignItems: "center",
          gap: isSquare ? 30 : 80,
        }}
      >
        {/* Left side - Number and 3D Icon */}
        <div
          style={{
            flex: isSquare ? "none" : "0 0 40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: isSquare ? "40%" : "100%",
          }}
        >
          {/* Step number */}
          <div
            style={{
              opacity: numberOpacity,
              transform: `scale(${numberScale})`,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: isSquare ? 100 : 140,
                height: isSquare ? 100 : 140,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}80 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 20px 60px ${step.color}50`,
              }}
            >
              <span
                style={{
                  fontSize: isSquare ? 48 : 64,
                  fontWeight: 900,
                  color: "#ffffff",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                0{step.number}
              </span>
            </div>
          </div>

          {/* 3D Icon */}
          <div
            style={{
              width: isSquare ? 200 : 280,
              height: isSquare ? 200 : 280,
              transform: `scale(${iconScale})`,
            }}
          >
            <ThreeCanvas
              width={isSquare ? 200 : 280}
              height={isSquare ? 200 : 280}
              camera={{ position: [0, 0, 4], fov: 50 }}
            >
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={0.8} />
              <pointLight position={[0, 0, 3]} intensity={0.6} color={step.color} />
              <Icon3D icon={step.icon} frame={frame} color={step.color} />
            </ThreeCanvas>
          </div>
        </div>

        {/* Right side - Content */}
        <div
          style={{
            flex: 1,
            opacity: contentOpacity,
            transform: `translateX(${isSquare ? 0 : contentX}px)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 20px",
              background: `${step.color}20`,
              borderRadius: 30,
              border: `1px solid ${step.color}40`,
              marginBottom: 25,
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: step.color,
                boxShadow: `0 0 10px ${step.color}`,
              }}
            />
            <span
              style={{
                fontSize: isSquare ? 14 : 18,
                color: step.color,
                fontWeight: 600,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Étape {step.number} sur {totalSteps}
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: isSquare ? 48 : 72,
              fontWeight: 800,
              color: "#ffffff",
              margin: 0,
              marginBottom: 20,
              fontFamily: "system-ui, -apple-system, sans-serif",
              lineHeight: 1.1,
            }}
          >
            {step.title}
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: isSquare ? 20 : 28,
              color: "#94a3b8",
              margin: 0,
              marginBottom: 40,
              fontFamily: "system-ui, -apple-system, sans-serif",
              lineHeight: 1.5,
              maxWidth: 600,
            }}
          >
            {step.description}
          </p>

          {/* Progress bar */}
          <div
            style={{
              width: "100%",
              maxWidth: 400,
              height: 6,
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progressWidth}%`,
                height: "100%",
                background: `linear-gradient(90deg, ${step.color}, ${step.color}80)`,
                borderRadius: 3,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom progress dots */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 15,
        }}
      >
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            style={{
              width: num === step.number ? 40 : 12,
              height: 12,
              borderRadius: 6,
              background:
                num === step.number ? step.color : "rgba(255, 255, 255, 0.2)",
              boxShadow: num === step.number ? `0 0 20px ${step.color}` : "none",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
