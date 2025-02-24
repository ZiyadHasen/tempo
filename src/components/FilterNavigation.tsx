"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function FilterNavigation() {
  const t = useTranslations("FilterNavigation");

  const [activeTab, setActiveTab] = useState("All");
  const [sortBy, setSortBy] = useState(t("sortOptions.az"));
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");

  // Tabs from translation
  const tabs = [
    { key: "All", label: t("tabs.all") },
    { key: "Skin", label: t("tabs.skin") },
    { key: "Cartilage", label: t("tabs.cartilage") },
    { key: "Kidney", label: t("tabs.kidney") },
  ];

  // Sort options from translation
  const sortOptions = [
    t("sortOptions.az"),
    t("sortOptions.za"),
    t("sortOptions.newest"),
    t("sortOptions.oldest"),
  ];

  const selectClasses = `
    w-full pl-4 pr-10 py-2
    bg-[#F3F3F3] text-gray-800
    appearance-none outline-none
    rounded-sm border border-[#F3F3F3]
    font-medium text-base
    cursor-pointer
    transition-colors
    hover:border-gray-400
    focus:border-gray-500
  `;

  const selectWrapper = `
    relative w-full md:flex-grow bg-[#F3F3F3]
    rounded-lg border border-gray-300
  `;

  return (
    <div className="w-full px-4 md:px-8">
      {/* Top Navigation */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between border-b border-black">
        {/* Tabs */}
        <div className="flex overflow-x-auto md:overflow-visible">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`min-w-[100px] px-4 md:px-8 h-[70px] font-medium text-base md:text-lg transition-colors relative ${
                activeTab === tab.key
                  ? "bg-[#F68B1F] text-black"
                  : "text-[#C2C2C2] hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="border-t md:border-t-0 border-gray-300 w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-3 w-full">
            <label className="text-lg font-bold whitespace-nowrap text-gray-800">
              {t("sortLabel")}
            </label>
            <div className={selectWrapper}>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={selectClasses}
              >
                {sortOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <HiChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Dropdowns */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-6">
        <p className="text-black font-bold whitespace-nowrap text-lg md:mr-6 mb-4 md:mb-0">
          {t("categoryLabel")}
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* Category */}
          <div className={selectWrapper}>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={selectClasses}
            >
              <option value="">{t("categoryOptions.default")}</option>
              <option value="category1">{t("categoryOptions.cat1")}</option>
              <option value="category2">{t("categoryOptions.cat2")}</option>
            </select>
            <HiChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
          </div>

          {/* Language */}
          <div className={selectWrapper}>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={selectClasses}
            >
              <option value="">{t("languageLabel")}</option>
              <option value="ko">{t("languageOptions.ko")}</option>
              <option value="en">{t("languageOptions.en")}</option>
            </select>
            <HiChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
          </div>

          {/* Country */}
          <div className={selectWrapper}>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={selectClasses}
            >
              <option value="">{t("countryLabel")}</option>
              <option value="kr">{t("countryOptions.kr")}</option>
              <option value="us">{t("countryOptions.us")}</option>
              <option value="jp">{t("countryOptions.jp")}</option>
            </select>
            <HiChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
