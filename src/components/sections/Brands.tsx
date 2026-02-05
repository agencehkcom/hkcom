"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

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

export function Brands() {
  const t = useTranslations("brands");

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{t("title")}</h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex overflow-x-hidden overflow-y-visible py-4">
            <motion.div
              className="flex gap-10 md:gap-14"
              animate={{
                x: [0, -2480],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Triple the brands for seamless loop */}
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 group overflow-visible"
                >
                  <div className="w-40 h-28 md:w-48 md:h-32 rounded-xl glass flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                    <div className="relative w-full h-full">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain transition-all duration-300"
                        sizes="(max-width: 768px) 160px, 192px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Static Grid for mobile alternative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:hidden"
        >
          <div className="grid grid-cols-2 gap-4">
            {brands.slice(0, 6).map((brand) => (
              <div
                key={brand.name}
                className="p-6 rounded-xl glass flex items-center justify-center h-24"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="150px"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
