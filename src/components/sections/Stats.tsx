"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, FolderCheck, ThumbsUp, Clock } from "lucide-react";

const stats = [
  { key: "clients", icon: Users, value: 200, suffix: "+" },
  { key: "projects", icon: FolderCheck, value: 150, suffix: "+" },
  { key: "satisfaction", icon: ThumbsUp, value: 98, suffix: "%" },
  { key: "experience", icon: Clock, value: 5, suffix: "+" },
];

export function Stats() {
  const t = useTranslations("stats");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

      <div ref={ref} className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl glass flex items-center justify-center group-hover:glow-cyan transition-all">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient-animated">
                {isInView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>

              {/* Label */}
              <div className="text-muted-foreground">
                {t(`${stat.key}.label`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
