"use client";

import FilterNavigation from "@/components/FilterNavigation";
import UserManualList from "@/components/userManual";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function InstructionsPage() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <div className="mx-4 md:mx-24 p-4 md:p-6 font-sans">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-6 md:my-12">
        Instructions for Use
      </h1>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row mb-4 border-b-2 border-[#000000]">
        <button
          onClick={() => setActiveTab("tab1")}
          className={`w-full md:w-[200px] h-[60px] md:h-[75px] text-xl md:text-2xl font-semibold ${
            activeTab === "tab1"
              ? "bg-[#F47B20] text-white"
              : "bg-[#D3D3D3] text-black"
          }`}
        >
          최신 IFU
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          className={`w-full md:w-[200px] h-[60px] md:h-[75px] text-xl md:text-2xl font-semibold ${
            activeTab === "tab2"
              ? "bg-[#F47B20] text-white"
              : "bg-[#D3D3D3] text-black"
          }`}
        >
          (구) IFU
        </button>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="my-3 md:pr-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:space-x-8">
          <p className="font-bold text-lg md:text-2xl whitespace-nowrap">
            모델명 검색
          </p>
          <div className="relative w-full md:flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="모델명을 검색하세요"
              className="w-full p-2 text-sm md:text-base border-2 border-gray-300 rounded placeholder:text-[#333333]"
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
      {hasSearched && (
        <div className="mb-6 md:mb-8">
          <div className="bg-[#F8D7DA] w-full md:w-[70%] p-3 text-xs md:text-sm text-[#CB0B34]">
            제품 사용설명서를 찾으실 수 없거나 원하지 않는 경우,
            info@rokit.co.kr으로 문의해 주세요.
          </div>
        </div>
      )}

      <div className="h-[1px] md:h-[2px] bg-[#000000] my-6 md:my-8"></div>

      {/* Content */}
      <div className="space-y-6 md:space-y-8 text-base md:text-lg">
        <div>
          <p className="leading-relaxed font-bold mb-1 text-sm md:text-base">
            Our website provides user manuals for products manufactured and
            supplied by ROKIT Healthcare.
          </p>
          <p className="leading-relaxed font-normal text-sm md:text-base">
            After searching for the desired user manual, you can download it in
            PDF format. 본 웹사이트는 ROKIT Healthcare에서 제조 및 공급하는
            제품의 사용자 설명서를 제공합니다. 원하시는 사용자 설명서를 검색한
            후, PDF 형식으로 다운로드할 수 있습니다. PDF파일이 설치되지 않았을
            경우, 해당 링크를 클릭하시면 PDF리더를 다운 받으실 수 있습니다.
          </p>
        </div>

        <div className="h-[1px] md:h-[2px] bg-[#000000] my-6 md:my-12"></div>

        <div>
          <p className="leading-relaxed text-sm md:text-base">
            If you would like to request a printed user manual, please contact
            us at info@rokit.co.kr. Please note that user manuals may be updated
            at any time. To ensure you have the latest version, please search on
            the website.
          </p>
          <p className="leading-relaxed my-2 text-sm md:text-base">
            인쇄된 사용자 설명서를 요청하시려면 info@rokit.co.kr으로
            문의하십시오. 사용자 설명서는 언제든지 업데이트될 수 있으므로 최신
            버전을 보장하려면 웹사이트에서 검색하는 것이 좋습니다.
          </p>
        </div>

        <div className="h-[1px] md:h-[2px] bg-[#000000] my-6 md:my-18"></div>
        <div className="px-0 md:px-4">
          <FilterNavigation />
        </div>
        <div className="h-[1px] md:h-[2px] bg-[#000000] my-6 md:my-12"></div>
        <UserManualList />
      </div>
    </div>
  );
}
