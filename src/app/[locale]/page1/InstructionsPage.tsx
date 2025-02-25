"use client";

import FilterNavigation from "@/components/FilterNavigation";
import UserManualList from "@/components/userManual";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useTranslations } from "next-intl";

export default function InstructionsPage1() {
  const t = useTranslations("InstructionsPage1");
  const [activeTab, setActiveTab] = useState("tab1");
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setShowError(true);
      setHasSearched(false);
    } else {
      setShowError(false);
      setHasSearched(true);
    }
  };

  return (
    <div className="mx-4 md:mx-24 p-4 md:p-6 bg-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-6 md:mb-[8rem] md:mt-[6rem]">
        {t("pageTitle")}
      </h1>

      {/* Tabs */}
      <div className="flex flex-col md:mb-12 md:flex-row mb-4 border-b-2 border-[#000000]">
        <button
          onClick={() => setActiveTab("tab1")}
          className={`w-full md:w-[200px]  h-[60px] md:h-[75px] text-xl md:text-2xl font-bold ${
            activeTab === "tab1"
              ? "bg-[#F47B20] text-black"
              : "bg-[#D3D3D3] text-black"
          }`}
        >
          {t("tabs.latest")}
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          className={`w-full md:w-[200px] h-[60px] md:h-[75px] text-xl md:text-2xl font-semibold ${
            activeTab === "tab2"
              ? "bg-[#F47B20] text-white"
              : "bg-[#D3D3D3] text-black"
          }`}
        >
          {t("tabs.old")}
        </button>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="my-3 md:pr-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:space-x-8">
          <p className="font-bold text-lg md:text-2xl whitespace-nowrap">
            {t("search.label")}
          </p>
          <div className="relative w-full md:flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("search.placeholder")}
              className="w-full p-2 text- md:text-lg border-2 border-gray-300 rounded placeholder:text-[#333333]"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#333333]"
            >
              <IoSearch size={20} className="md:w-25" />
            </button>
          </div>
        </div>
      </form>

      {/* Error Message */}
      {showError && (
        <div className="mb-6 md:mb-8">
          <div className="bg-[#F8D7DA] w-full md:w-[70%] p-3 text-xs md:text- text-[#CB0B34]">
            {t("errorMessage")}
          </div>
        </div>
      )}
      <div className="h-[1px] md:h-[2px] bg-[#000000] my-6 md:mb-12"></div>

      {/* Static Content */}
      <div className="space-y-6 md:space-y-8 ">
        <div>
          <p className="leading-relaxed font-bold mb-1 md:mb-4 text-sm md:text-lg">
            {t("content.section1.paragraph1")}
          </p>
          <p className="leading-relaxed font-normal text-sm md:text-lg">
            {t("content.section1.paragraph2")}
          </p>
        </div>

        <div className="h-[1px] md:h-[2px] bg-[#000000] my-6 md:my-12"></div>

        <div>
          <p className="leading-relaxed text-sm md:text-lg">
            {t("content.section2.paragraph1")}
          </p>
        </div>
      </div>

      <div className="h-[1px] md:h-[2px] bg-[#000000] my-6 md:my-12"></div>

      {/* Conditionally Rendered Components */}
      {hasSearched && !showError && (
        <>
          <div className="px-0 md:px-4">
            <FilterNavigation />
          </div>
          <div className="h-[1px] md:h-[2px] bg-[#000000] my-6 md:my-12"></div>
          <UserManualList />
        </>
      )}
    </div>
  );
}
