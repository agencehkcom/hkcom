"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "cyan" | "violet" | "none";
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = "none",
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "glass",
        glow === "cyan" && "glow-cyan",
        glow === "violet" && "glow-violet",
        hover && "transition-shadow duration-300",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
