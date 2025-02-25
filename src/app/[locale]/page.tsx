"use client";
import logo from "@/assets/logo.svg";
import TopNav from "@/components/TopNav";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react"; // Added useEffect here
import { BiX } from "react-icons/bi";
import { FaCheck, FaChevronDown } from "react-icons/fa";

export default function LoginPage() {
  const t = useTranslations("Login");
  const router = useRouter();
  const pathname = usePathname();

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

  const [isOpen, setIsOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Prevent background scroll when the modal is open
  useEffect(() => {
    if (showTerms) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showTerms]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      setError(true);
      return;
    }
    console.log("Form submitted");
  };

  return (
    <div className="b text-black">
      <TopNav />
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className="w-full max-w-xl bg-white p-8">
          <header className="flex justify-start items-center mb-6">
            <Image src={logo} alt="Logo" width={65} height={65} priority />
          </header>
          <main>
            <h1 className="text-4xl whitespace-nowrap sm:text-5xl font-semibold my-4">
              {t("title")}
            </h1>
            <h2 className="text-lg whitespace-nowrap sm:text-xl font-medium mb-2">
              {t("subtitle")}
            </h2>
            <h2 className="text-xl whitespace-nowrap sm:text-2xl font-semibold mt-8 mb-6">
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
                    <span>({currentLanguage?.region})</span>
                    <FaChevronDown
                      className={`h-8 w-8 text-[#000000] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="absolute w-full mt-1 bg-white border border-[#DDE2E6] rounded-md shadow-lg z-10">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          type="button"
                          className="w-full px-4 py-2 text-left hover:bg-[#F8F9FA]"
                          onClick={() => handleLanguageChange(language.code)}
                        >
                          {language.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Terms Checkbox Section */}
              <div className="flex items-center my-6 space-x-2">
                <label
                  htmlFor="terms"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <div className="relative">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => {
                        setAgreed(e.target.checked);
                        setError(false);
                      }}
                      className="absolute w-0 h-0 opacity-0"
                    />
                    <div
                      className={`w-6 h-6 border-2 border-blue-500 rounded-sm flex items-center justify-center ${
                        agreed ? "bg-blue-500" : "bg-white"
                      }`}
                    >
                      {agreed && <FaCheck className="text-white" size={12} />}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="text-[#FF6B00] sm:text-2xl font-bold hover:underline mr-2"
                  >
                    {t("termsLink")}
                  </button>
                  <span className="text-xl sm:text-2xl font-bold">
                    {t("termsLabel")}
                  </span>
                </label>
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

      {/* Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
            onClick={() => setShowTerms(false)}
          ></div>
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg px-4 sm:px-8 shadow-lg w-full max-w-md sm:max-w-3xl">
            {/* Close Button */}
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <BiX className="text-2xl sm:text-3xl" />
            </button>
            {/* Content */}
            <div className="p-4 sm:p-6 lg:p-10 overflow-y-auto h-full">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">
                {t("modalTitle")}
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6">
                {t("modalContent")}
              </p>
              <div className="flex items-center justify-end mt-4 sm:mt-6 lg:mt-8">
                <button
                  onClick={() => setShowTerms(false)}
                  className="bg-[#EE8000] w-full sm:w-40 text-xs sm:text-sm md:text-base lg:text-xl text-white font-bold py-2 sm:py-3 rounded-lg"
                >
                  {t("modalClose")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
