"use client";
import { useTranslations } from "next-intl";
import logo from "@/assets/logo.svg";
import TopNav from "@/components/TopNav";
import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

export default function LoginPage() {
  const t = useTranslations("Login");
  const router = useRouter();
  const pathname = usePathname();

  // Language Options
  const languageOptions = [
    { value: "kr", label: "KR-한국어" },
    { value: "en", label: "EN-English" },
  ];

  // Derive initial locale from URL
  const initialLocale = (() => {
    const segments = pathname.split("/");
    const localeFromPath = segments[1];
    const localeCodes = languageOptions.map((opt) => opt.value);
    return segments[1] && localeCodes.includes(localeFromPath)
      ? localeFromPath
      : "kr";
  })();

  const [selectedValue, setSelectedValue] = useState(initialLocale);
  const [isOpen, setIsOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);

    const segments = pathname.split("/");
    const localeCodes = languageOptions.map((opt) => opt.value);

    // Replace existing locale or prepend new locale
    if (segments[1] && localeCodes.includes(segments[1])) {
      segments[1] = value;
    } else {
      segments.splice(1, 0, value);
    }
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      setError(true);
      return;
    }
    console.log("Form submitted");
  };

  return (
    <div>
      <TopNav />
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className="w-full max-w-xl bg-white p-8">
          <header className="flex justify-start items-center mb-6">
            <Image src={logo} alt="Logo" width={65} height={65} priority />
          </header>
          <main>
            <h1 className="text-4xl sm:text-5xl font-semibold my-4">
              {t("title")}
            </h1>
            <h2 className="text-lg sm:text-xl font-medium mb-2">
              {t("subtitle")}
            </h2>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-6">
              {t("description")}
            </h2>
            <form>
              {/* Language Selector */}
              <div className="space-y-2 mb-6">
                <label className="text-xl sm:text-2xl font-bold">
                  {t("languageLabel")}
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full h-14 px-4 text-left bg-[#F5F5F5] border-[2px] border-[#000000] rounded-md flex items-center justify-between"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>
                      {
                        languageOptions.find(
                          (opt) => opt.value === selectedValue
                        )?.label
                      }
                    </span>
                    <FaChevronDown
                      className={`h-8 w-8 text-[#000000] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="absolute w-full mt-1 bg-white border border-[#DDE2E6] rounded-md shadow-lg z-10">
                      {languageOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          className="w-full px-4 py-2 text-left hover:bg-[#F8F9FA]"
                          onClick={() => handleSelect(option.value)}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Terms Checkbox Section */}
              <div className="flex items-center my-6 space-x-2">
                <Checkbox
                  id="terms"
                  size="lg"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    setError(false);
                  }}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-xl sm:text-2xl font-bold"
                  >
                    <button
                      type="button"
                      className="text-[#FF6B00] hover:underline mr-2"
                    >
                      {t("termsLink")}
                    </button>
                    {t("termsLabel")}
                  </label>
                </div>
              </div>

              {error && (
                <div className="w-full text-base sm:text-lg font-bold bg-[#FCD5D5] text-red-500 border border-red-700 p-3 rounded-md mb-4">
                  {t("termsError")}
                </div>
              )}

              {/* Login Button */}
              <section className="flex w-full mt-10">
                <Link
                  href="/page1"
                  className="w-full"
                  role="button"
                  onClick={() => setShowTerms(true)}
                >
                  <button
                    onClick={handleSubmit}
                    className="w-full px-4 py-3 font-bold text-lg sm:text-2xl bg-black text-white rounded-lg"
                  >
                    {t("loginButton")}
                  </button>
                </Link>
              </section>
            </form>
          </main>
        </div>
      </div>

      <Modal
        isOpen={showTerms}
        size="3xl"
        onClose={() => setShowTerms(false)}
        hideCloseButton={true}
      >
        <ModalContent className="relative mx-auto my-auto px-4 pt-2 sm:px-10 sm:pt-4">
          {(onClose) => (
            <>
              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={onClose}
              >
                <BiX className="text-3xl sm:text-4xl" />
              </div>
              <ModalHeader className="flex flex-col gap-1 text-lg sm:text-2xl font-bold">
                {t("modalTitle")}
              </ModalHeader>
              <ModalBody className="text-sm sm:text-lg">
                {t("modalContent")}
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#EE8000] w-40 text-sm sm:text-xl text-white font-bold h-10 sm:h-12 rounded-md"
                  onPress={onClose}
                >
                  {t("modalClose")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
