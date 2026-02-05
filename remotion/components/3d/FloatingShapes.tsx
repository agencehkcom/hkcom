import { ThreeCanvas } from "@remotion/three";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { useMemo } from "react";

type ShapeConfig = {
  position: [number, number, number];
  type: "box" | "sphere" | "torus" | "octahedron" | "icosahedron";
  color: string;
  scale: number;
  rotationSpeed: number;
  floatSpeed: number;
  floatAmplitude: number;
};

const Shape: React.FC<{
  config: ShapeConfig;
  frame: number;
}> = ({ config, frame }) => {
  const { position, type, color, scale, rotationSpeed, floatSpeed, floatAmplitude } = config;

  // Calculate rotation based on frame
  const rotationX = frame * rotationSpeed * 0.01;
  const rotationY = frame * rotationSpeed * 0.015;
  const rotationZ = frame * rotationSpeed * 0.008;

  // Calculate floating position
  const floatY = Math.sin(frame * floatSpeed * 0.05) * floatAmplitude;
  const floatX = Math.cos(frame * floatSpeed * 0.03) * floatAmplitude * 0.5;

  const finalPosition: [number, number, number] = [
    position[0] + floatX,
    position[1] + floatY,
    position[2],
  ];

  const geometry = useMemo(() => {
    switch (type) {
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "sphere":
        return <sphereGeometry args={[0.6, 32, 32]} />;
      case "torus":
        return <torusGeometry args={[0.5, 0.2, 16, 32]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.7]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[0.6]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  }, [type]);

  return (
    <mesh
      position={finalPosition}
      rotation={[rotationX, rotationY, rotationZ]}
      scale={scale}
    >
      {geometry}
      <meshStandardMaterial
        color={color}
        metalness={0.3}
        roughness={0.4}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
};

type FloatingShapesProps = {
  variant?: "intro" | "outro" | "showcase";
};

export const FloatingShapes: React.FC<FloatingShapesProps> = ({
  variant = "intro",
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Define shapes based on variant
  const shapes: ShapeConfig[] = useMemo(() => {
    const baseShapes: ShapeConfig[] = [
      {
        position: [-4, 2, -3],
        type: "icosahedron",
        color: "#3b82f6",
        scale: 1.2,
        rotationSpeed: 1,
        floatSpeed: 1,
        floatAmplitude: 0.3,
      },
      {
        position: [4, -1.5, -4],
        type: "octahedron",
        color: "#8b5cf6",
        scale: 1,
        rotationSpeed: 0.8,
        floatSpeed: 1.2,
        floatAmplitude: 0.4,
      },
      {
        position: [-3, -2, -5],
        type: "torus",
        color: "#ec4899",
        scale: 1.3,
        rotationSpeed: 1.2,
        floatSpeed: 0.8,
        floatAmplitude: 0.25,
      },
      {
        position: [3.5, 2.5, -6],
        type: "sphere",
        color: "#10b981",
        scale: 0.8,
        rotationSpeed: 0.6,
        floatSpeed: 1.5,
        floatAmplitude: 0.35,
      },
      {
        position: [0, -3, -4],
        type: "box",
        color: "#f59e0b",
        scale: 0.7,
        rotationSpeed: 1.1,
        floatSpeed: 1.1,
        floatAmplitude: 0.3,
      },
    ];

    if (variant === "outro") {
      return [
        ...baseShapes,
        {
          position: [-5, 0, -5],
          type: "icosahedron" as const,
          color: "#06b6d4",
          scale: 0.9,
          rotationSpeed: 0.9,
          floatSpeed: 1.3,
          floatAmplitude: 0.4,
        },
        {
          position: [5, 1, -7],
          type: "torus" as const,
          color: "#a855f7",
          scale: 1.1,
          rotationSpeed: 0.7,
          floatSpeed: 0.9,
          floatAmplitude: 0.3,
        },
      ];
    }

    return baseShapes;
  }, [variant]);

  // Camera animation
  const cameraZ = interpolate(frame, [0, 60], [8, 7], {
    extrapolateRight: "clamp",
  });

  // Entry animation for shapes
  const shapeOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: shapeOpacity,
      }}
    >
      <ThreeCanvas
        width={width}
        height={height}
        camera={{ position: [0, 0, cameraZ], fov: 50 }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-5, -5, 5]} intensity={0.3} color="#3b82f6" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#8b5cf6" />

        {/* Shapes */}
        {shapes.map((shape, index) => (
          <Shape key={index} config={shape} frame={frame} />
        ))}
      </ThreeCanvas>
    </div>
  );
};
