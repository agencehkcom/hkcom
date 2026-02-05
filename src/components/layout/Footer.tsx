"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/hkcom", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/hkcom", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/hkcom", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/hkcom", label: "Twitter" },
];

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-32">
                <Image
                  src="/images/logos/hkcom-logo.png"
                  alt="HKCOM"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("description")}
            </p>
            {/* France Num Logo */}
            <div className="pt-4">
              <div className="relative h-16 w-44">
                <Image
                  src="/images/marque-Activateur-France-Num-72dpi.jpeg"
                  alt="Activateur France Num"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              {["home", "strategies", "services", "portfolio", "blog"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "home" ? "/" : `/#${item}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {tNav(item)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:contact@hkcom.fr"
                  className="hover:text-primary transition-colors"
                >
                  contact@hkcom.fr
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+33600000000"
                  className="hover:text-primary transition-colors"
                >
                  +33 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>France</span>
              </li>
            </ul>
          </motion.div>

          {/* Social & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4">Social</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass hover:glow-cyan transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Certification Badge */}
            <div className="p-3 rounded-xl glass border border-primary/20">
              <div className="relative h-12 w-full">
                <Image
                  src="/images/HKCOM-Prestige.png"
                  alt="HKCOM Prestige"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} HKCOM. {t("rights")}.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/legal"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("legal")}
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
