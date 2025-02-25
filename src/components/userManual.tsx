"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
  HiDownload,
} from "react-icons/hi";

const manuals = [
  { id: 1, title: "ARK KIT User Manual v1.0", downloadUrl: "#" },
  { id: 2, title: "ARK KIT User Manual v1.1", downloadUrl: "#" },
  { id: 3, title: "ARK KIT User Manual v1.2", downloadUrl: "#" },
  { id: 4, title: "Dr.INVIVO User Manual v2.0", downloadUrl: "#" },
  { id: 5, title: "Dr.INVIVO User Manual v2.1", downloadUrl: "#" },
  { id: 6, title: "Dr.INVIVO User Manual v2.2", downloadUrl: "#" },
  { id: 7, title: "ARK KIT User Manual v1.3", downloadUrl: "#" },
  { id: 8, title: "ARK KIT User Manual v1.4", downloadUrl: "#" },
  { id: 9, title: "Dr.INVIVO User Manual v2.3", downloadUrl: "#" },
  { id: 10, title: "Dr.INVIVO User Manual v2.4", downloadUrl: "#" },
  { id: 11, title: "ARK KIT User Manual v1.5", downloadUrl: "#" },
  { id: 12, title: "Dr.INVIVO User Manual v2.5", downloadUrl: "#" },
];

const ITEMS_PER_PAGE = 4;

export default function UserManualList() {
  const t = useTranslations("UserManualList");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(manuals.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleManuals = manuals.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const [showTerms, setShowTerms] = useState(false);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(false);

  // Prevent background scrolling when the modal is open
  useEffect(() => {
    if (showTerms) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showTerms]);

  // Corrected handleSubmit using 'agreed' and 'setError'
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      setError(true);
    } else {
      setError(false);
      // Handle form submission logic here (e.g. send email)
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="space-y-6">
          {visibleManuals.map((manual) => (
            <div
              key={manual.id}
              className="flex items-center text-black bg-white  justify-between py-5 border-b-[0.5px] border-[#00000080]"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black flex-1">
                {manual.title}
              </h2>

              <button
                className="flex items-center justify-center gap-2 w-full max-w-[200px] sm:min-w-[120px] h-[52px] sm:h-[44px] border-2 border-black rounded-md px-4 py-2 text-black"
                onClick={() => {
                  setShowTerms(true);
                  const link = document.createElement("a");
                  link.href = "/file.docx";
                  link.setAttribute("download", "file.docx");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <HiDownload className="w-6 h-6 sm:w-5 sm:h-5" />
                <span className="font-bold text-xl sm:text-lg">
                  {t("download")}
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-1.5 mt-12">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <HiChevronDoubleLeft className="w-5 h-5" />
            <span className="sr-only">{t("firstPage")}</span>
          </button>

          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <HiChevronLeft className="w-5 h-5" />
            <span className="sr-only">{t("previousPage")}</span>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                className={`px-4 py-2 rounded-md text-sm text-center font-medium ${
                  currentPage === pageNum
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <HiChevronRight className="w-5 h-5" />
            <span className="sr-only">{t("nextPage")}</span>
          </button>

          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <HiChevronDoubleRight className="w-5 h-5" />
            <span className="sr-only">{t("lastPage")}</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {showTerms && (
        <div className="fixed text-black bg-white inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
            onClick={() => setShowTerms(false)}
          ></div>
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg px-4 sm:px-8 shadow-lg w-full max-w-md sm:max-w-3xl">
            {/* Content */}
            <div className="p-4 sm:p-6 lg:p-10 overflow-y-auto h-full">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                  if (agreed) {
                    setShowTerms(false);
                  }
                }}
              >
                <div
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={() => setShowTerms(false)}
                >
                  <BiX className="text-3xl sm:text-4xl" />
                </div>
                <p className="text-xl mt-8 text-black">{t("termsModalText")}</p>

                <Link
                  href="/page2"
                  className="text-blue-600 text-xl font-medium underline cursor-pointer"
                >
                  {t("termsModallink")}
                </Link>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <p className="text-2xl font-bold my-4">
                      {t("emailLabel")}
                      <span className="text-red-500 ml-0.5">*</span>
                    </p>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-black text-sm px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

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
                          {agreed && (
                            <FaCheck className="text-white" size={12} />
                          )}
                        </div>
                      </div>

                      <span className="text-xl sm:text-2xl font-bold">
                        {t("terms")}
                      </span>
                    </label>
                  </div>

                  {error && (
                    <div className="max-w-2xl whitespace-nowrap text-sm sm:text-base font-bold bg-[#FCD5D5] text-red-500 border border-red-700 p-3 rounded-md mb-4">
                      {t("invalidEmail", { email: email || "ddd" })}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center mt-4 sm:mt-6 lg:mt-8">
                  <button
                    onClick={() => {
                      if (agreed !== true) {
                        setError(true);
                      }
                    }}
                    className="bg-[#EE8000] w-full sm:w-40 text-xs sm:text-sm md:text-base lg:text-xl text-white font-bold py-2 sm:py-3 rounded-lg"
                  >
                    {t("modalClose")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
