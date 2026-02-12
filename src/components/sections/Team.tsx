"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlassCard } from "@/components/shared/GlassCard";
import { Users, Headphones, Clock, Shield, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Gaëtan Mottin",
    role: { fr: "Spécialiste Ads", en: "Ads Specialist" },
    image: "/images/team/membre-1.png",
    linkedin: "https://www.linkedin.com/in/agence-de-communication-hk-com",
  },
  {
    name: "Hosseine Khalid",
    role: { fr: "Spécialiste Réseaux Sociaux", en: "Social Media Specialist" },
    image: "/images/team/membre-2.png",
    linkedin: "https://www.linkedin.com/in/activateur-france-num/",
  },
  {
    name: "El Mouhib Khalid",
    role: { fr: "Spécialiste Dev & IA", en: "Dev & AI Specialist" },
    image: "/images/team/membre-3.png",
    linkedin: "https://www.linkedin.com/in/agence-marketing-hk-com/",
  },
];

export function Team() {
  const t = useTranslations("team");

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t("badge")}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("title")} <span className="text-gradient">{t("titleHighlight")}</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6 text-center group" hover>
                {/* Photo */}
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-muted-foreground mb-4">
                  {member.role.fr}
                </p>

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:glow-cyan transition-all text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Headphones, key: "support" },
            { icon: Clock, key: "availability" },
            { icon: Shield, key: "expertise" },
            { icon: Users, key: "dedicated" },
          ].map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-4 h-full" hover>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t(`features.${item.key}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`features.${item.key}.description`)}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
