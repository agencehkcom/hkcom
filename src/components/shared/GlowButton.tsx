"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  glow?: boolean;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      glow = true,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const baseStyles =
      "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary: cn(
        "bg-primary text-primary-foreground",
        glow && "hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]"
      ),
      secondary: cn(
        "bg-secondary text-secondary-foreground",
        glow && "hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
      ),
      outline: cn(
        "border-2 border-primary bg-transparent text-primary",
        "hover:bg-primary/10",
        glow && "hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
      ),
      ghost: "bg-transparent text-foreground hover:bg-muted",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Comp
          ref={ref}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          {...props}
        >
          {children}
        </Comp>
      </motion.div>
    );
  }
);

GlowButton.displayName = "GlowButton";

export { GlowButton };
