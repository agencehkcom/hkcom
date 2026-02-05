"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Camera,
  Clapperboard,
  Wand2,
  Play,
  Sparkles,
  Film,
  Music,
  Type,
} from "lucide-react";

// Timeline clips
const timelineClips = [
  { id: 1, color: "bg-blue-500", width: "w-16" },
  { id: 2, color: "bg-purple-500", width: "w-24" },
  { id: 3, color: "bg-green-500", width: "w-20" },
  { id: 4, color: "bg-yellow-500", width: "w-12" },
  { id: 5, color: "bg-pink-500", width: "w-28" },
];

export function ContentCreationAnimation() {
  const [phase, setPhase] = useState<"filming" | "editing" | "final">("filming");
  const [recordingTime, setRecordingTime] = useState(0);

  // Phase transitions
  useEffect(() => {
    if (phase === "filming") {
      const timer = setTimeout(() => setPhase("editing"), 3000);
      return () => clearTimeout(timer);
    }
    if (phase === "editing") {
      const timer = setTimeout(() => setPhase("final"), 3500);
      return () => clearTimeout(timer);
    }
    if (phase === "final") {
      const timer = setTimeout(() => {
        setPhase("filming");
        setRecordingTime(0);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Recording timer
  useEffect(() => {
    if (phase !== "filming") return;

    const interval = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/30 to-purple-500/30 blur-3xl rounded-full"
        animate={{
          scale: phase === "final" ? [1, 1.2, 1] : 1,
          opacity: phase === "final" ? [0.3, 0.5, 0.3] : 0.3,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Container */}
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent/20 border border-white/10"
        layout
      >
        <AnimatePresence mode="wait">
          {/* Phase 1: Filming/Recording */}
          {phase === "filming" && (
            <motion.div
              key="filming"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black min-h-[320px] relative"
            >
              {/* Camera viewfinder overlay */}
              <div className="absolute inset-0 border-[3px] border-white/20 m-3 rounded-lg pointer-events-none">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/60" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/60" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/60" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/60" />

                {/* Center crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-px bg-white/40" />
                  <div className="w-px h-8 bg-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Recording indicator */}
              <motion.div
                className="absolute top-4 left-4 flex items-center gap-2"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-white text-xs font-mono">REC</span>
              </motion.div>

              {/* Time code */}
              <div className="absolute top-4 right-4 text-white/80 font-mono text-xs">
                {formatTime(recordingTime)}
              </div>

              {/* Scene content - Animated product */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotateY: [0, 15, 0, -15, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative"
                >
                  {/* Product box */}
                  <div className="w-32 h-40 bg-gradient-to-br from-accent/80 to-purple-600/80 rounded-xl shadow-2xl flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  {/* Light reflection */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-white/40 rounded-full blur-md"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Camera className="w-4 h-4 text-white/60" />
                  <span className="text-white/60 text-xs">4K 60fps</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Clapperboard className="w-4 h-4" />
                  <span>Scène 1 - Prise 3</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 2: Editing */}
          {phase === "editing" && (
            <motion.div
              key="editing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-[#1a1a2e] min-h-[320px] p-3"
            >
              {/* Editor header */}
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-white/50 text-xs ml-2 font-medium">Montage en cours...</span>
              </div>

              {/* Preview window */}
              <div className="bg-black rounded-lg aspect-video mb-3 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-24 bg-gradient-to-br from-accent/80 to-purple-600/80 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Playhead */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                {/* Video track */}
                <div className="flex items-center gap-2">
                  <Video className="w-3 h-3 text-blue-400" />
                  <div className="flex-1 h-8 bg-white/5 rounded flex items-center gap-1 px-1 overflow-hidden">
                    {timelineClips.map((clip, index) => (
                      <motion.div
                        key={clip.id}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                        className={`h-6 ${clip.color} ${clip.width} rounded origin-left`}
                      />
                    ))}
                  </div>
                </div>

                {/* Audio track */}
                <div className="flex items-center gap-2">
                  <Music className="w-3 h-3 text-green-400" />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex-1 h-6 bg-green-500/30 rounded origin-left"
                  >
                    {/* Waveform */}
                    <div className="h-full flex items-center gap-px px-1">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-0.5 bg-green-400"
                          initial={{ height: 0 }}
                          animate={{ height: `${20 + Math.random() * 60}%` }}
                          transition={{ delay: 1 + i * 0.02 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Text track */}
                <div className="flex items-center gap-2">
                  <Type className="w-3 h-3 text-yellow-400" />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 0.3 }}
                    className="h-6 w-24 bg-yellow-500/30 rounded ml-16 origin-left flex items-center justify-center"
                  >
                    <span className="text-[8px] text-yellow-300">Titre</span>
                  </motion.div>
                </div>
              </div>

              {/* Export progress */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-3 flex items-center gap-2"
              >
                <Wand2 className="w-4 h-4 text-accent" />
                <span className="text-white/60 text-xs">Finalisation...</span>
              </motion.div>
            </motion.div>
          )}

          {/* Phase 3: Final Result */}
          {phase === "final" && (
            <motion.div
              key="final"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 min-h-[320px] p-4"
            >
              {/* Social Media Preview */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-black rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Video preview */}
                <div className="aspect-[9/12] relative bg-gradient-to-br from-accent/20 to-purple-600/20">
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="w-16 h-20 bg-gradient-to-br from-accent to-purple-600 rounded-xl shadow-xl flex items-center justify-center mb-3"
                    >
                      <Sparkles className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-white font-bold text-center text-sm"
                    >
                      Nouveau Produit
                    </motion.p>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-white/60 text-xs text-center"
                    >
                      Découvrez l&apos;innovation
                    </motion.p>
                  </div>

                  {/* Play button overlay */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.8 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </motion.div>

                  {/* Instagram-like UI */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-purple-600" />
                      <span className="text-white text-xs font-medium">votrebrand</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex justify-center gap-6 mt-4"
              >
                {[
                  { label: "Vues", value: "12.5K" },
                  { label: "Likes", value: "2.8K" },
                  { label: "Partages", value: "847" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-white font-bold text-sm">{stat.value}</div>
                    <div className="text-white/40 text-[10px]">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Success badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                className="flex items-center justify-center gap-2 mt-3"
              >
                <Film className="w-4 h-4 text-accent" />
                <span className="text-accent text-xs font-medium">Contenu prêt à publier !</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Phase indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {["filming", "editing", "final"].map((p) => (
          <motion.div
            key={p}
            className={`w-2 h-2 rounded-full ${
              phase === p ? "bg-accent" : "bg-white/20"
            }`}
            animate={{ scale: phase === p ? 1.2 : 1 }}
          />
        ))}
      </div>
    </div>
  );
}
