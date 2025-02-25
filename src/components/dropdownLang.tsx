"use client";

import { BiGlobe, BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English", region: "United States" },
    { code: "kr", label: "한국어", region: "대한민국" },
  ];

  // Derive initial locale from the URL path
  const initialLocale = (() => {
    const segments = pathname.split("/");
    const localeFromPath = segments[1];
    return languages.some((lang) => lang.code === localeFromPath)
      ? localeFromPath
      : "en";
  })();

  const [selected, setSelected] = useState(initialLocale);
  const currentLanguage = languages.find((lang) => lang.code === selected);

  const handleLanguageChange = (code: string) => {
    setSelected(code);
    setIsOpen(false);

    const segments = pathname.split("/");
    const localeCodes = languages.map((lang) => lang.code);

    // Check if the first segment is a valid locale
    if (segments[1] && localeCodes.includes(segments[1])) {
      // Replace existing locale
      segments[1] = code;
    } else {
      // Prepend new locale
      segments.splice(1, 0, code);
    }

    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md bg-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all hover:bg-gray-100 active:scale-95"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <BiGlobe className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
          <span className="text-sm sm:text-base text-gray-600">
            {currentLanguage?.label}
            <span className="text-gray-400 hidden sm:inline">
              {" "}
              ({currentLanguage?.region})
            </span>
          </span>
        </div>
        <BiChevronDown
          className={`h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-1 sm:mt-2 w-full rounded-md bg-white py-1 shadow-lg z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="flex w-full items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base text-gray-600 transition-colors hover:bg-gray-100"
            >
              <BiGlobe className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              {language.label}
              <span className="text-gray-400 whitespace-nowrap hidden sm:inline">
                ({language.region})
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
