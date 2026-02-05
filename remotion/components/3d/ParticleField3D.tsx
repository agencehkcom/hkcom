import { ThreeCanvas } from "@remotion/three";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { useMemo } from "react";

type Particle = {
  position: [number, number, number];
  size: number;
  speed: number;
  color: string;
};

const Particles: React.FC<{ particles: Particle[]; frame: number }> = ({
  particles,
  frame,
}) => {
  return (
    <>
      {particles.map((particle, index) => {
        const { position, size, speed, color } = particle;

        // Animate particle position
        const animatedY =
          position[1] + Math.sin(frame * speed * 0.02 + index) * 0.5;
        const animatedX =
          position[0] + Math.cos(frame * speed * 0.015 + index * 0.5) * 0.3;

        // Pulsing effect
        const pulse = 1 + Math.sin(frame * 0.05 + index) * 0.2;

        return (
          <mesh
            key={index}
            position={[animatedX, animatedY, position[2]]}
            scale={size * pulse}
          >
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        );
      })}
    </>
  );
};

type ParticleField3DProps = {
  particleCount?: number;
  colors?: string[];
  depth?: number;
};

export const ParticleField3D: React.FC<ParticleField3DProps> = ({
  particleCount = 50,
  colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"],
  depth = 10,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Generate particles
  const particles: Particle[] = useMemo(() => {
    const result: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const seed = i * 137.5;
      result.push({
        position: [
          (Math.sin(seed) * 8) - 4,
          (Math.cos(seed * 0.7) * 6) - 3,
          -(Math.abs(Math.sin(seed * 0.3)) * depth) - 2,
        ],
        size: 0.5 + Math.random() * 0.8,
        speed: 0.5 + Math.random() * 1.5,
        color: colors[i % colors.length],
      });
    }
    return result;
  }, [particleCount, colors, depth]);

  // Fade in animation
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Slow camera rotation
  const cameraRotationY = frame * 0.001;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity,
      }}
    >
      <ThreeCanvas
        width={width}
        height={height}
        camera={{
          position: [
            Math.sin(cameraRotationY) * 8,
            0,
            Math.cos(cameraRotationY) * 8,
          ],
          fov: 60,
        }}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 5]} intensity={1} color="#3b82f6" />
        <pointLight position={[5, 5, -5]} intensity={0.5} color="#8b5cf6" />

        {/* Particles */}
        <Particles particles={particles} frame={frame} />
      </ThreeCanvas>
    </div>
  );
};
