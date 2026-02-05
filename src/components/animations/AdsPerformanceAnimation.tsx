"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointer2, TrendingUp, Users, DollarSign, Target, Check } from "lucide-react";

// Simulated metrics that will animate
const metrics = [
  { label: "Impressions", value: 12847, suffix: "", icon: Users, color: "text-blue-400" },
  { label: "Clics", value: 847, suffix: "", icon: MousePointer2, color: "text-green-400" },
  { label: "CTR", value: 6.6, suffix: "%", icon: Target, color: "text-yellow-400" },
  { label: "Conversions", value: 42, suffix: "", icon: Check, color: "text-purple-400" },
  { label: "ROI", value: 340, suffix: "%", icon: TrendingUp, color: "text-emerald-400" },
];

function AnimatedNumber({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(increment * step, value));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      {value % 1 === 0 ? Math.floor(current).toLocaleString() : current.toFixed(1)}
      {suffix}
    </span>
  );
}

export function AdsPerformanceAnimation() {
  const [phase, setPhase] = useState<"ad" | "clicks" | "results">("ad");
  const [clickCount, setClickCount] = useState(0);

  // Phase transitions
  useEffect(() => {
    if (phase === "ad") {
      const timer = setTimeout(() => setPhase("clicks"), 1500);
      return () => clearTimeout(timer);
    }
    if (phase === "clicks") {
      const timer = setTimeout(() => setPhase("results"), 2500);
      return () => clearTimeout(timer);
    }
    if (phase === "results") {
      const timer = setTimeout(() => {
        setPhase("ad");
        setClickCount(0);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Simulate clicks during click phase
  useEffect(() => {
    if (phase !== "clicks") return;

    const interval = setInterval(() => {
      setClickCount((prev) => prev + 1);
    }, 200);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl rounded-full"
        animate={{
          scale: phase === "results" ? [1, 1.2, 1] : 1,
          opacity: phase === "results" ? [0.3, 0.5, 0.3] : 0.3,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Container */}
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl shadow-secondary/20 border border-white/10"
        layout
      >
        <AnimatePresence mode="wait">
          {/* Phase 1: Google Ad Preview */}
          {phase === "ad" && (
            <motion.div
              key="ad"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white p-4 min-h-[320px]"
            >
              {/* Google Search Bar */}
              <div className="bg-gray-100 rounded-full px-4 py-2 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gray-500 text-sm">agence web paris</span>
              </div>

              {/* Ad Label */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-white bg-secondary px-1.5 py-0.5 rounded">Sponsorisé</span>
              </div>

              {/* Ad Content */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <a href="#" className="text-blue-600 hover:underline text-lg font-medium block">
                  HKCOM - Agence Web Paris | Sites sur mesure
                </a>
                <p className="text-green-700 text-xs">https://hkcom.fr/conception-web</p>
                <p className="text-gray-600 text-sm">
                  Création de sites web professionnels. Design moderne, SEO optimisé.
                  <span className="text-secondary font-medium"> Devis gratuit en 24h</span>
                </p>

                {/* Extensions */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 mt-3">
                  {["Sites Vitrines", "E-commerce", "Refonte Site", "Voir nos réalisations"].map((ext) => (
                    <span key={ext} className="text-blue-600 text-xs hover:underline cursor-pointer">
                      {ext}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Pulse indicator */}
              <motion.div
                className="absolute bottom-4 right-4 flex items-center gap-2 text-secondary text-xs"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <MousePointer2 className="w-4 h-4" />
                <span>En attente de clics...</span>
              </motion.div>
            </motion.div>
          )}

          {/* Phase 2: Clicks Animation */}
          {phase === "clicks" && (
            <motion.div
              key="clicks"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 min-h-[320px] relative overflow-hidden"
            >
              {/* Click particles */}
              {Array.from({ length: clickCount }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    x: Math.random() * 300,
                    y: 150,
                    scale: 0,
                    opacity: 1
                  }}
                  animate={{
                    y: -50,
                    scale: [0, 1, 0.5],
                    opacity: [1, 1, 0]
                  }}
                  transition={{ duration: 1.5 }}
                  className="absolute"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center">
                    <MousePointer2 className="w-4 h-4 text-secondary" />
                  </div>
                </motion.div>
              ))}

              {/* Center content */}
              <div className="relative z-10 text-center pt-12">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                  className="text-6xl font-bold text-white mb-2"
                >
                  {clickCount}
                </motion.div>
                <p className="text-secondary text-lg font-medium">Clics en cours...</p>

                {/* Progress bar */}
                <div className="mt-8 mx-auto max-w-xs">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-secondary to-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.5 }}
                    />
                  </div>
                  <p className="text-white/50 text-xs mt-2">Collecte des données...</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 3: Results Dashboard */}
          {phase === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 min-h-[320px]"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium text-sm">Performance Dashboard</span>
                </div>
                <span className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-white/5 rounded-xl p-3 border border-white/5"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <metric.icon className={`w-3 h-3 ${metric.color}`} />
                      <span className="text-white/50 text-[10px]">{metric.label}</span>
                    </div>
                    <div className={`text-xl font-bold ${metric.color}`}>
                      <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-4 bg-white/5 rounded-xl p-3 border border-white/5"
              >
                <div className="flex items-end justify-between h-16 gap-1">
                  {[30, 45, 35, 60, 80, 65, 90, 85, 95].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-secondary/50 to-secondary rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
                <p className="text-white/30 text-[10px] mt-2 text-center">Évolution des conversions</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Phase indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {["ad", "clicks", "results"].map((p) => (
          <motion.div
            key={p}
            className={`w-2 h-2 rounded-full ${
              phase === p ? "bg-secondary" : "bg-white/20"
            }`}
            animate={{ scale: phase === p ? 1.2 : 1 }}
          />
        ))}
      </div>
    </div>
  );
}
