"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Mail, Check } from "lucide-react";

// Code lines to display
const codeLines = [
  { text: '<div className="hero">', color: "text-pink-400" },
  { text: '  <h1>Bienvenue</h1>', color: "text-blue-400" },
  { text: '  <p>Votre succès digital</p>', color: "text-green-400" },
  { text: '  <form>', color: "text-pink-400" },
  { text: '    <input type="email" />', color: "text-yellow-400" },
  { text: '    <button>Envoyer</button>', color: "text-purple-400" },
  { text: '  </form>', color: "text-pink-400" },
  { text: '</div>', color: "text-pink-400" },
];

export function CodeToDesignAnimation() {
  const [phase, setPhase] = useState<"code" | "transform" | "design">("code");
  const [visibleLines, setVisibleLines] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);

  // Typing effect for code
  useEffect(() => {
    if (phase !== "code") return;

    const currentLine = codeLines[visibleLines];
    if (!currentLine) {
      // All lines shown, wait then transform
      const timeout = setTimeout(() => setPhase("transform"), 800);
      return () => clearTimeout(timeout);
    }

    if (typingIndex < currentLine.text.length) {
      const timeout = setTimeout(() => {
        setTypingIndex((prev) => prev + 1);
      }, 25);
      return () => clearTimeout(timeout);
    } else {
      // Line complete, move to next
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
        setTypingIndex(0);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [phase, visibleLines, typingIndex]);

  // Transform to design phase
  useEffect(() => {
    if (phase === "transform") {
      const timeout = setTimeout(() => setPhase("design"), 600);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  // Loop animation
  useEffect(() => {
    if (phase === "design") {
      const timeout = setTimeout(() => {
        setPhase("code");
        setVisibleLines(0);
        setTypingIndex(0);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl rounded-full"
        animate={{
          scale: phase === "transform" ? [1, 1.3, 1] : 1,
          opacity: phase === "transform" ? [0.3, 0.6, 0.3] : 0.3,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Container */}
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10"
        animate={{
          rotateY: phase === "transform" ? [0, 90] : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {/* Code Editor Phase */}
          {(phase === "code" || phase === "transform") && (
            <motion.div
              key="code"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1e1e2e] p-4 min-h-[320px]"
            >
              {/* Editor Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-white/50 ml-2 font-mono">
                  landing-page.tsx
                </span>
              </div>

              {/* Code Content */}
              <div className="font-mono text-sm space-y-1">
                {codeLines.map((line, index) => {
                  if (index > visibleLines) return null;
                  const isCurrentLine = index === visibleLines;
                  const displayText = isCurrentLine
                    ? line.text.slice(0, typingIndex)
                    : line.text;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex"
                    >
                      <span className="text-white/30 w-6 text-right mr-4 select-none">
                        {index + 1}
                      </span>
                      <span className={line.color}>
                        {displayText}
                        {isCurrentLine && (
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{
                              duration: 0.5,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                            className="inline-block w-2 h-4 bg-white/80 ml-0.5 align-middle"
                          />
                        )}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Terminal output */}
              {visibleLines >= codeLines.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 pt-4 border-t border-white/10"
                >
                  <div className="flex items-center gap-2 text-green-400 text-xs font-mono">
                    <Check className="w-3 h-3" />
                    <span>Compilation réussie</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary text-xs font-mono mt-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Génération du design...</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Design Phase - Landing Page Preview */}
          {phase === "design" && (
            <motion.div
              key="design"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-0 min-h-[320px] overflow-hidden"
            >
              {/* Browser Header */}
              <div className="bg-slate-800/80 px-3 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-2">
                  <div className="bg-slate-700/50 rounded-md px-3 py-1 text-[10px] text-white/50 flex items-center gap-1">
                    <span className="text-green-400">https://</span>
                    votresite.com
                  </div>
                </div>
              </div>

              {/* Landing Page Content */}
              <div className="p-6 relative">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/30 to-transparent rounded-full blur-2xl" />

                {/* Hero content */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-center relative"
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 border border-primary/30 mb-3"
                  >
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-[10px] text-primary font-medium">
                      Nouveau
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl font-bold text-white mb-2"
                  >
                    <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                      Bienvenue
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/60 text-xs mb-4"
                  >
                    Votre succès digital commence ici
                  </motion.p>

                  {/* Form */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-2 max-w-xs mx-auto"
                  >
                    <div className="flex-1 relative">
                      <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                      <div className="w-full pl-8 pr-3 py-2 rounded-lg bg-white/10 border border-white/10 text-left">
                        <span className="text-[11px] text-white/40">
                          votre@email.com
                        </span>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium flex items-center justify-center gap-1 cursor-pointer shadow-lg shadow-primary/30"
                    >
                      Envoyer
                      <ArrowRight className="w-3 h-3" />
                    </motion.div>
                  </motion.div>

                  {/* Trust badges */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center justify-center gap-3 mt-4"
                  >
                    {["100+ clients", "Support 24/7", "Satisfait ou remboursé"].map(
                      (text, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 text-[9px] text-white/40"
                        >
                          <Check className="w-2.5 h-2.5 text-green-400" />
                          {text}
                        </div>
                      )
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Phase indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {["code", "transform", "design"].map((p) => (
          <motion.div
            key={p}
            className={`w-2 h-2 rounded-full ${
              phase === p ? "bg-primary" : "bg-white/20"
            }`}
            animate={{ scale: phase === p ? 1.2 : 1 }}
          />
        ))}
      </div>
    </div>
  );
}
