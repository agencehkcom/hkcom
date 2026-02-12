"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  MessageSquare,
  CalendarCheck,
  TrendingUp,
  Check,
  Send,
  Users,
  Search,
  Sparkles,
} from "lucide-react";

// Prospect names for outreach phase
const prospects = [
  { name: "Marie Dupont", role: "CEO", company: "TechNord" },
  { name: "Thomas Bernard", role: "Directeur", company: "IndustriePro" },
  { name: "Sophie Martin", role: "DRH", company: "ConseilPlus" },
  { name: "Julien Moreau", role: "Fondateur", company: "GreenSolutions" },
  { name: "Laura Petit", role: "COO", company: "DataFlow" },
  { name: "Pierre Lambert", role: "DSI", company: "NordLogistic" },
];

function AnimatedNumber({
  value,
  suffix,
  duration = 2000,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
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
      {value % 1 === 0
        ? Math.floor(current).toLocaleString()
        : current.toFixed(1)}
      {suffix}
    </span>
  );
}

export function LinkedInProspectingAnimation() {
  const [phase, setPhase] = useState<"profile" | "outreach" | "results">(
    "profile"
  );
  const [sentCount, setSentCount] = useState(0);
  const [acceptedCount, setAcceptedCount] = useState(0);

  // Phase transitions
  useEffect(() => {
    if (phase === "profile") {
      const timer = setTimeout(() => setPhase("outreach"), 3000);
      return () => clearTimeout(timer);
    }
    if (phase === "outreach") {
      const timer = setTimeout(() => setPhase("results"), 3500);
      return () => clearTimeout(timer);
    }
    if (phase === "results") {
      const timer = setTimeout(() => {
        setPhase("profile");
        setSentCount(0);
        setAcceptedCount(0);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Simulate outreach during that phase
  useEffect(() => {
    if (phase !== "outreach") return;

    const interval = setInterval(() => {
      setSentCount((prev) => {
        if (prev < prospects.length) return prev + 1;
        return prev;
      });
    }, 400);

    const acceptInterval = setInterval(() => {
      setAcceptedCount((prev) => {
        if (prev < 4) return prev + 1;
        return prev;
      });
    }, 700);

    return () => {
      clearInterval(interval);
      clearInterval(acceptInterval);
    };
  }, [phase]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/30 to-primary/30 blur-3xl rounded-full"
        animate={{
          scale: phase === "results" ? [1, 1.2, 1] : 1,
          opacity: phase === "results" ? [0.3, 0.5, 0.3] : 0.3,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Container */}
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0A66C2]/20 border border-white/10"
        layout
      >
        <AnimatePresence mode="wait">
          {/* Phase 1: LinkedIn Profile Optimization */}
          {phase === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white min-h-[320px]"
            >
              {/* LinkedIn banner */}
              <div className="h-20 bg-gradient-to-r from-[#0A66C2] to-[#004182] relative">
                {/* Optimization sparkles */}
                <motion.div
                  className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-3 h-3 text-white" />
                  <span className="text-[10px] text-white font-medium">
                    Optimisation
                  </span>
                </motion.div>
              </div>

              {/* Profile avatar */}
              <div className="px-4 -mt-10 relative">
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#004182] border-4 border-white flex items-center justify-center shadow-lg"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Profile info */}
              <div className="px-4 pt-2 pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-bold text-gray-900 text-base">
                    Votre Entreprise
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Expert en solutions B2B | Nord-Pas-de-Calais
                  </p>
                </motion.div>

                {/* Profile strength */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-3 p-2.5 rounded-lg bg-blue-50 border border-blue-100"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-gray-600 font-medium">
                      Force du profil
                    </span>
                    <span className="text-[10px] text-[#0A66C2] font-bold">
                      Expert
                    </span>
                  </div>
                  <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#0A66C2] to-[#004182]"
                      initial={{ width: "30%" }}
                      animate={{ width: "95%" }}
                      transition={{ delay: 0.7, duration: 1.5 }}
                    />
                  </div>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="grid grid-cols-3 gap-2 mt-3"
                >
                  {[
                    { label: "Vues profil", value: "+340%", trend: true },
                    { label: "Connexions", value: "2,847", trend: false },
                    { label: "SSI Score", value: "78/100", trend: true },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2 + i * 0.15 }}
                      className="text-center p-2 rounded-lg bg-gray-50"
                    >
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-sm font-bold text-gray-900">
                          {stat.value}
                        </span>
                        {stat.trend && (
                          <TrendingUp className="w-3 h-3 text-green-500" />
                        )}
                      </div>
                      <span className="text-[9px] text-gray-500">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Phase 2: Outreach - Messages being sent */}
          {phase === "outreach" && (
            <motion.div
              key="outreach"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gradient-to-br from-slate-900 to-[#001a33] min-h-[320px] p-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-white font-medium text-sm block">
                      Prospection en cours
                    </span>
                    <span className="text-white/40 text-[10px]">
                      Séquence automatisée
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Search className="w-3 h-3 text-[#0A66C2]" />
                  <span className="text-[#0A66C2] text-xs font-medium">
                    {sentCount}/{prospects.length}
                  </span>
                </div>
              </div>

              {/* Prospect list */}
              <div className="space-y-2">
                {prospects.map((prospect, index) => {
                  const isSent = index < sentCount;
                  const isAccepted = index < acceptedCount;

                  return (
                    <motion.div
                      key={prospect.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: isSent ? 1 : 0.3,
                        x: isSent ? 0 : -20,
                      }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5"
                    >
                      <div className="flex items-center gap-2.5">
                        {/* Avatar */}
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0A66C2]/50 to-[#0A66C2]/20 flex items-center justify-center text-white text-xs font-bold">
                          {prospect.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <span className="text-white text-xs font-medium block">
                            {prospect.name}
                          </span>
                          <span className="text-white/40 text-[10px]">
                            {prospect.role} - {prospect.company}
                          </span>
                        </div>
                      </div>

                      {/* Status */}
                      <div>
                        {isAccepted ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20"
                          >
                            <Check className="w-3 h-3 text-green-400" />
                            <span className="text-[10px] text-green-400">
                              Accepté
                            </span>
                          </motion.div>
                        ) : isSent ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#0A66C2]/20"
                          >
                            <Send className="w-3 h-3 text-[#0A66C2]" />
                            <span className="text-[10px] text-[#0A66C2]">
                              Envoyé
                            </span>
                          </motion.div>
                        ) : (
                          <div className="px-2 py-1 rounded-full bg-white/5">
                            <span className="text-[10px] text-white/30">
                              En attente
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress bar */}
              <div className="mt-3">
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#0A66C2] to-green-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3 }}
                  />
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
              className="bg-gradient-to-br from-slate-900 via-[#001a33] to-slate-900 p-4 min-h-[320px]"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0A66C2] to-green-500 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium text-sm">
                    Résultats du mois
                  </span>
                </div>
                <span className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Actif
                </span>
              </div>

              {/* Main metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  {
                    icon: UserPlus,
                    label: "Connexions",
                    value: 487,
                    suffix: "",
                    color: "text-[#0A66C2]",
                  },
                  {
                    icon: MessageSquare,
                    label: "Réponses",
                    value: 89,
                    suffix: "",
                    color: "text-green-400",
                  },
                  {
                    icon: CalendarCheck,
                    label: "RDV obtenus",
                    value: 24,
                    suffix: "",
                    color: "text-purple-400",
                  },
                  {
                    icon: TrendingUp,
                    label: "Taux acceptation",
                    value: 27,
                    suffix: "%",
                    color: "text-emerald-400",
                  },
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-white/5 rounded-xl p-3 border border-white/5"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <metric.icon className={`w-3.5 h-3.5 ${metric.color}`} />
                      <span className="text-white/50 text-[10px]">
                        {metric.label}
                      </span>
                    </div>
                    <div className={`text-xl font-bold ${metric.color}`}>
                      <AnimatedNumber
                        value={metric.value}
                        suffix={metric.suffix}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Conversion funnel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-white/5 rounded-xl p-3 border border-white/5"
              >
                <p className="text-white/40 text-[10px] mb-2 font-medium">
                  Entonnoir de conversion
                </p>
                <div className="space-y-1.5">
                  {[
                    {
                      label: "Invitations envoyées",
                      value: "487",
                      width: "100%",
                      color: "from-[#0A66C2] to-[#0A66C2]/70",
                    },
                    {
                      label: "Acceptées",
                      value: "132",
                      width: "27%",
                      color: "from-blue-400 to-blue-400/70",
                    },
                    {
                      label: "Réponses",
                      value: "89",
                      width: "18%",
                      color: "from-green-400 to-green-400/70",
                    },
                    {
                      label: "RDV confirmés",
                      value: "24",
                      width: "5%",
                      color: "from-purple-400 to-purple-400/70",
                    },
                  ].map((step, i) => (
                    <div key={step.label}>
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-white/50 text-[9px]">
                          {step.label}
                        </span>
                        <span className="text-white text-[9px] font-bold">
                          {step.value}
                        </span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${step.color}`}
                          initial={{ width: "0%" }}
                          animate={{ width: step.width }}
                          transition={{
                            delay: 1 + i * 0.2,
                            duration: 0.6,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Success message */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, type: "spring" }}
                className="flex items-center justify-center gap-2 mt-3"
              >
                <CalendarCheck className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-xs font-medium">
                  24 rendez-vous ce mois !
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Phase indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {["profile", "outreach", "results"].map((p) => (
          <motion.div
            key={p}
            className={`w-2 h-2 rounded-full ${
              phase === p ? "bg-[#0A66C2]" : "bg-white/20"
            }`}
            animate={{ scale: phase === p ? 1.2 : 1 }}
          />
        ))}
      </div>
    </div>
  );
}
