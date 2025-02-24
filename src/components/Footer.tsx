"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full bg-black text-white py-8 md:py-12 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
        {/* Logo */}
        <div className="w-full md:w-1/4 flex items-center justify-center mb-4 md:mb-0">
          <Image
            src="/assets/headerlogo.svg"
            alt={t("logoAlt")}
            height={20}
            width={220}
            className="w-40 md:w-52"
            loading="eager"
            priority
            aria-label={t("logoAlt")}
          />
        </div>

        {/* Address */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-2 md:space-y-0">
          <p className="text-xs md:text-sm font-thin leading-5">
            {t("addressKR")}
            <span className="font-semibold block md:inline md:ml-2">
              {t("tel")}
            </span>
          </p>
          <p className="text-xs md:text-sm font-thin leading-5">
            {t("addressEN")}
            <span className="font-semibold block md:inline md:ml-2">
              {t("tel")}
            </span>
          </p>
        </div>

        {/* Copyright */}
        <div className="w-full md:w-1/4 text-center md:text-left mt-4 md:mt-0">
          <p className="text-xs md:text-sm font-semibold mb-2">
            {t("termsAndPrivacy")}
          </p>
          <p className="text-xs md:text-sm font-thin">
            {t("copyright")}
            <br className="md:hidden" /> {t("rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
