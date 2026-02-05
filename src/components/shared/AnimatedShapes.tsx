"use client";

import { motion } from "framer-motion";

interface FloatingShapeProps {
  className?: string;
  delay?: number;
  duration?: number;
  children?: React.ReactNode;
}

function FloatingShape({ className, delay = 0, duration = 20, children }: FloatingShapeProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -30, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <FloatingShape
        delay={0}
        duration={25}
        className="absolute top-[10%] left-[5%] w-72 h-72 md:w-96 md:h-96"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-3xl" />
      </FloatingShape>

      <FloatingShape
        delay={0.5}
        duration={30}
        className="absolute top-[20%] right-[10%] w-64 h-64 md:w-80 md:h-80"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary/25 to-transparent blur-3xl" />
      </FloatingShape>

      <FloatingShape
        delay={1}
        duration={28}
        className="absolute bottom-[15%] left-[15%] w-80 h-80 md:w-[500px] md:h-[500px]"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-3xl" />
      </FloatingShape>

      {/* Geometric Shapes - 3D Effect */}
      <FloatingShape
        delay={0.2}
        duration={15}
        className="absolute top-[15%] right-[20%] hidden lg:block"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/10 rotate-12 shadow-lg shadow-primary/5" />
      </FloatingShape>

      <FloatingShape
        delay={0.8}
        duration={18}
        className="absolute top-[40%] left-[8%] hidden md:block"
      >
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/25 to-secondary/5 backdrop-blur-sm border border-secondary/15 -rotate-6 shadow-lg shadow-secondary/10" />
      </FloatingShape>

      <FloatingShape
        delay={0.4}
        duration={22}
        className="absolute bottom-[25%] right-[8%] hidden lg:block"
      >
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm border border-accent/10 rotate-45 shadow-lg shadow-accent/5" />
      </FloatingShape>

      <FloatingShape
        delay={1.2}
        duration={20}
        className="absolute bottom-[35%] left-[25%] hidden xl:block"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/15 to-secondary/10 backdrop-blur-sm border border-white/10 shadow-lg" />
      </FloatingShape>

      {/* Decorative Lines */}
      <motion.div
        className="absolute top-[30%] right-[15%] w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block"
        animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[40%] left-[10%] w-24 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent hidden lg:block"
        animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [1, 1.3, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </div>
  );
}

export function ContactShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingShape
        delay={0}
        duration={25}
        className="absolute top-[5%] right-[10%] w-64 h-64"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
      </FloatingShape>

      <FloatingShape
        delay={0.5}
        duration={30}
        className="absolute bottom-[10%] left-[5%] w-80 h-80"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-secondary/15 to-transparent blur-3xl" />
      </FloatingShape>

      <FloatingShape
        delay={0.3}
        duration={18}
        className="absolute top-[20%] left-[15%] hidden lg:block"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm border border-secondary/10 rotate-12" />
      </FloatingShape>

      <FloatingShape
        delay={0.7}
        duration={20}
        className="absolute bottom-[30%] right-[20%] hidden lg:block"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm border border-primary/10 -rotate-6" />
      </FloatingShape>
    </div>
  );
}

export function AidesShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingShape
        delay={0}
        duration={28}
        className="absolute top-[10%] left-[5%] w-72 h-72"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary/25 to-transparent blur-3xl" />
      </FloatingShape>

      <FloatingShape
        delay={0.6}
        duration={32}
        className="absolute bottom-[5%] right-[10%] w-96 h-96"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-3xl" />
      </FloatingShape>

      <FloatingShape
        delay={0.3}
        duration={22}
        className="absolute top-[50%] right-[5%] hidden xl:block"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm border border-accent/10 rotate-12" />
      </FloatingShape>

      <FloatingShape
        delay={0.9}
        duration={25}
        className="absolute top-[30%] left-[10%] hidden lg:block"
      >
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm border border-secondary/10 -rotate-6" />
      </FloatingShape>
    </div>
  );
}

// 3D Card Effect Component
interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export function Card3D({ children, className = "" }: Card3DProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        rotateY: 5,
        rotateX: -5,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

// Animated Icon Container
interface AnimatedIconProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
}

export function AnimatedIcon({ children, className = "", variant = "primary" }: AnimatedIconProps) {
  const gradients = {
    primary: "from-primary/20 to-primary/5",
    secondary: "from-secondary/20 to-secondary/5",
    accent: "from-accent/20 to-accent/5",
  };

  const shadows = {
    primary: "shadow-primary/20",
    secondary: "shadow-secondary/20",
    accent: "shadow-accent/20",
  };

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${gradients[variant]} backdrop-blur-sm border border-white/10 shadow-lg ${shadows[variant]} flex items-center justify-center`}>
        {children}
      </div>
    </motion.div>
  );
}

// Morphing Background
export function MorphingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(12, 53, 89, 0.1)" />
            <stop offset="50%" stopColor="rgba(6, 196, 114, 0.08)" />
            <stop offset="100%" stopColor="rgba(205, 158, 1, 0.06)" />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#morphGradient)"
          initial={{ d: "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" }}
          animate={{
            d: [
              "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z",
              "M0,60 Q25,40 50,55 T100,45 L100,100 L0,100 Z",
              "M0,45 Q25,55 50,45 T100,55 L100,100 L0,100 Z",
              "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

// Particle Effect (lightweight)
export function ParticleField({ count = 20 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
