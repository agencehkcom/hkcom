"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const brands = [
  { name: "Mediaphone", logo: "/images/brands/mediaphone.png" },
  { name: "Do Yours", logo: "/images/brands/do-yours.png" },
  { name: "Echap & Vous", logo: "/images/brands/echap-et-vous.png" },
  { name: "Tatas Cook", logo: "/images/brands/tatas-cook.png" },
  { name: "CKM", logo: "/images/brands/ckm.png" },
  { name: "Kujua", logo: "/images/brands/kujua.png" },
  { name: "Mob Destock", logo: "/images/brands/mob-destock.png" },
  { name: "Coop Bazar", logo: "/images/brands/coop-bazar.png" },
  { name: "Extha", logo: "/images/brands/extha.png" },
  { name: "LCR", logo: "/images/brands/lcr.png" },
];

interface TrustBannerProps {
  className?: string;
}

export function TrustBanner({ className }: TrustBannerProps) {
  const t = useTranslations("hero");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className={className}
    >
      <p className="text-center text-xs text-muted-foreground mb-3">
        {t("trustedBy")}
      </p>
      <div className="relative overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <motion.div
          className="flex gap-8 md:gap-10"
          animate={{
            x: [0, -1600],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {/* Triple the brands for seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 w-16 h-8 md:w-20 md:h-10 relative grayscale dark:grayscale-0 opacity-50 dark:opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 64px, 80px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
