"use client";
import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@heroui/react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  HiDownload,
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleRight,
} from "react-icons/hi";
import { BiX } from "react-icons/bi";
import Link from "next/link";

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
              className="flex items-center bg-white text-black justify-between py-5 border-b-[0.5px] border-[#00000080]"
            >
              <h2 className="text-2xl font-semibold text-black flex-1">
                {manual.title}
              </h2>
              <Button
                className="flex items-center gap-2 min-w-[120px] h-[52px] border-[2px] border-black rounded-md px-6 py-4"
                onPress={() => {
                  setShowTerms(true);
                  const link = document.createElement("a");
                  link.href = "/file.docx";
                  link.setAttribute("download", "file.docx");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                variant="bordered"
              >
                <HiDownload className="w-7 h-7" />
                <span className="font-bold text-2xl">{t("download")}</span>
              </Button>
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

      <Modal
        isOpen={showTerms}
        size="3xl"
        onClose={() => setShowTerms(false)}
        hideCloseButton={true}
      >
        <ModalContent className="relative mx-auto my-auto px-4 pt-2 sm:px-10 sm:pt-4">
          {(onClose) => (
            <form
              onSubmit={(e) => {
                handleSubmit(e);
                if (agreed) {
                  onClose();
                }
              }}
            >
              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={onClose}
              >
                <BiX className="text-3xl sm:text-4xl" />
              </div>

              <ModalBody className="text-sm sm:text-lg mt-12">
                {t("termsModalText")}
                <Link
                  href="/page2"
                  className="text-blue-600 underline cursor-pointer"
                >
                  {t("termsModallink")}
                </Link>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <p className="text-2xl font-bold my-4">
                      {t("emailLabel")}
                      <span className="text-red-500 ml-0.5">*</span>
                    </p>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                      variant="bordered"
                    />
                  </div>

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

                    <label
                      htmlFor="terms"
                      className="text-xl sm:text-xl font-bold"
                    >
                      {t("terms")}
                    </label>
                  </div>

                  {error && (
                    <div className="w-full whitespace-nowrap text-sm sm:text-base font-bold bg-[#FCD5D5] text-red-500 border border-red-700 p-3 rounded-md mb-4">
                      {t("invalidEmail", { email: email || "ddd" })}
                    </div>
                  )}
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center my-8">
                <Button
                  // onPress={}
                  type="submit"
                  className="bg-[#EE8000] w-40 text-sm sm:text-xl text-white font-bold h-10 sm:h-12 rounded-md"
                >
                  {t("submitButton")}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
