"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSelector from "./dropdownLang";

const TopNav = () => {
  const t = useTranslations("TopNav");

  return (
    <section className="bg-black min-h-[80px] sm:min-h-[100px] h-auto py-3 sm:py-4 md:py-0 flex items-center justify-center px-4 sm:px-6 relative">
      {/* Logo Container */}
      <div className="flex-shrink-0 w-full max-w-[140px] xs:max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] relative aspect-[3/1] self-center">
        <Image
          src="/assets/headerlogo.svg"
          alt={t("logoAlt")}
          className="object-contain object-left"
          fill
          sizes="(max-width: 360px) 140px, (max-width: 480px) 160px, (max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
          loading="eager"
          priority
          aria-label={t("logoAlt")}
        />
      </div>

      {/* Language Selector */}
      <div className="absolute right-3 xs:right-4 sm:right-6 top-1/2 -translate-y-1/2 scale-90 xs:scale-100">
        <LanguageSelector />
      </div>
    </section>
  );
};

export default TopNav;
