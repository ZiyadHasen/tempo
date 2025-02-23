"use client";

import { BiGlobe, BiChevronDown } from "react-icons/bi";
import { useState } from "react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("en");

  const languages = [
    { code: "en", label: "English", region: "United States" },
    { code: "ko", label: "한국어", region: "대한민국" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === selected);

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
              onClick={() => {
                setSelected(language.code);
                setIsOpen(false);
              }}
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
