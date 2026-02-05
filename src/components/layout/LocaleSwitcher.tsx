"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "fr" ? "en" : "fr";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg",
        "glass hover:bg-white/10 transition-colors",
        "text-sm font-medium",
        className
      )}
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{locale === "fr" ? "EN" : "FR"}</span>
    </button>
  );
}
