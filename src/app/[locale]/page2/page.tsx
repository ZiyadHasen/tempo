"use client";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Page = () => {
  const t = useTranslations("PrivacyPolicy");

  return (
    <section className="bg-white text-black">
      <TopNav />

      <div className="mx-4 bg-white text-black md:mx-24 p-4 md:p-6 font-sans">
        {/* Header with Back Arrow */}
        <div className="relative flex items-center justify-center">
          <Link href="/page1">
            <button
              // onClick={onOpen}
              className="absolute left-0 sm:left-4 hover:opacity-70 transition-opacity"
            >
              <IoIosArrowBack className="w-8 h-8 md:w-12 md:h-12" />
            </button>
          </Link>

          <h1 className="text-3xl md:text-5xl text-black font-bold text-center my-6 md:my-12">
            {t("pageTitle")}
          </h1>
        </div>

        <div className="h-[1px] md:h-[2px] bg-[#000000] my-6 md:my-8"></div>

        {/* Content */}
        <div className="space-y-6 md:space-y-8 px-4 sm:px-12 text-base md:text-lg">
          <div>
            <p className="leading-relaxed text-black font-bold mb-1 text-sm md:text-base">
              {t("section1.heading")}
            </p>
            <p className="leading-relaxed text-black font-normal text-sm md:text-base">
              {t("section1.content")}
            </p>
          </div>
          <div>
            <p className="leading-relaxed text-black font-bold mb-1 text-sm md:text-base">
              {t("section2.heading")}
            </p>
            <p className="leading-relaxed text-black font-normal text-sm md:text-base">
              {t("section2.content")}
            </p>
          </div>
          <div>
            <p className="leading-relaxed text-black font-normal text-sm md:text-base mb-[6rem] md:mb-[12rem]">
              {t("section3.content")}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Page;
