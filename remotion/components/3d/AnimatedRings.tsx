import { ThreeCanvas } from "@remotion/three";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

type RingConfig = {
  radius: number;
  tube: number;
  color: string;
  rotationAxis: "x" | "y" | "z";
  rotationSpeed: number;
  initialRotation: number;
};

const Ring: React.FC<{
  config: RingConfig;
  frame: number;
  fps: number;
  entryDelay: number;
}> = ({ config, frame, fps, entryDelay }) => {
  const { radius, tube, color, rotationAxis, rotationSpeed, initialRotation } = config;

  // Entry animation
  const entryProgress = spring({
    frame: frame - entryDelay,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const scale = interpolate(entryProgress, [0, 1], [0, 1]);
  const opacity = interpolate(entryProgress, [0, 0.5, 1], [0, 0.5, 0.9]);

  // Rotation animation
  const rotation = initialRotation + frame * rotationSpeed * 0.02;

  const rotationArray: [number, number, number] = [0, 0, 0];
  if (rotationAxis === "x") rotationArray[0] = rotation;
  if (rotationAxis === "y") rotationArray[1] = rotation;
  if (rotationAxis === "z") rotationArray[2] = rotation;

  return (
    <mesh rotation={rotationArray} scale={scale}>
      <torusGeometry args={[radius, tube, 32, 100]} />
      <meshStandardMaterial
        color={color}
        metalness={0.7}
        roughness={0.2}
        transparent
        opacity={opacity}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

type AnimatedRingsProps = {
  variant?: "single" | "triple" | "orbital";
};

export const AnimatedRings: React.FC<AnimatedRingsProps> = ({
  variant = "triple",
}) => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();

  const rings: (RingConfig & { entryDelay: number })[] = (() => {
    switch (variant) {
      case "single":
        return [
          {
            radius: 2,
            tube: 0.08,
            color: "#3b82f6",
            rotationAxis: "y" as const,
            rotationSpeed: 1,
            initialRotation: 0,
            entryDelay: 0,
          },
        ];
      case "triple":
        return [
          {
            radius: 2.2,
            tube: 0.06,
            color: "#3b82f6",
            rotationAxis: "x" as const,
            rotationSpeed: 0.8,
            initialRotation: 0,
            entryDelay: 0,
          },
          {
            radius: 2.5,
            tube: 0.05,
            color: "#8b5cf6",
            rotationAxis: "y" as const,
            rotationSpeed: 1,
            initialRotation: Math.PI / 4,
            entryDelay: 10,
          },
          {
            radius: 2.8,
            tube: 0.04,
            color: "#ec4899",
            rotationAxis: "z" as const,
            rotationSpeed: 0.6,
            initialRotation: Math.PI / 2,
            entryDelay: 20,
          },
        ];
      case "orbital":
        return [
          {
            radius: 2,
            tube: 0.08,
            color: "#3b82f6",
            rotationAxis: "y" as const,
            rotationSpeed: 1.2,
            initialRotation: 0,
            entryDelay: 0,
          },
          {
            radius: 2,
            tube: 0.08,
            color: "#8b5cf6",
            rotationAxis: "x" as const,
            rotationSpeed: 1,
            initialRotation: Math.PI / 2,
            entryDelay: 5,
          },
          {
            radius: 2,
            tube: 0.08,
            color: "#10b981",
            rotationAxis: "z" as const,
            rotationSpeed: 0.8,
            initialRotation: Math.PI / 4,
            entryDelay: 10,
          },
          {
            radius: 3,
            tube: 0.04,
            color: "#f59e0b",
            rotationAxis: "y" as const,
            rotationSpeed: 0.5,
            initialRotation: 0,
            entryDelay: 15,
          },
        ];
      default:
        return [];
    }
  })();

  // Camera subtle movement
  const cameraY = Math.sin(frame * 0.01) * 0.3;
  const cameraX = Math.cos(frame * 0.008) * 0.2;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <ThreeCanvas
        width={width}
        height={height}
        camera={{ position: [cameraX, cameraY, 6], fov: 50 }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <directionalLight position={[-5, -5, 5]} intensity={0.3} color="#3b82f6" />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#8b5cf6" />

        {/* Center glow sphere */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#1e293b"
            emissive="#3b82f6"
            emissiveIntensity={0.3}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Rings */}
        {rings.map((ring, index) => (
          <Ring
            key={index}
            config={ring}
            frame={frame}
            fps={fps}
            entryDelay={ring.entryDelay}
          />
        ))}
      </ThreeCanvas>
    </div>
  );
};
