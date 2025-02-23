"use client";

import { Button } from "@heroui/react";
import { useState } from "react";

import {
  HiDownload,
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleRight,
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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(manuals.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleManuals = manuals.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleDownload = (url: string) => {
    console.log(`Downloading from: ${url}`);
  };

  return (
    <div className="w-full">
      <div className="space-y-6">
        {visibleManuals.map((manual) => (
          <div
            key={manual.id}
            className="flex items-center justify-between py-5 border-b-[0.5px] border-[#00000080]"
          >
            <h2 className="text-2xl font-semibold text-black flex-1 ">
              {manual.title}
            </h2>
            <Button
              className="flex items-center gap-2 min-w-[120px] border-[2px] border-black rounded-md px-6 py-2 hover:bg-red-400"
              onPress={() => handleDownload(manual.downloadUrl)}
              variant="bordered"
            >
              <HiDownload className="w-7 h-7" />
              <span className="font-bold text-2xl">다운로드</span>
            </Button>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-1.5 mt-12">
        <Button
          variant="ghost"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="p-2 hover:bg-gray-100"
        >
          <HiChevronDoubleLeft className="w-5 h-5" />
          <span className="sr-only">First page</span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 hover:bg-gray-100"
        >
          <HiChevronLeft className="w-5 h-5" />
          <span className="sr-only">Previous page</span>
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <Button
            key={pageNum}
            className={`px-3 py-1 rounded-sm text-sm text-center font-medium ${
              currentPage === pageNum
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setCurrentPage(pageNum)}
          >
            {pageNum}
          </Button>
        ))}

        <Button
          variant="ghost"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="p-2 hover:bg-gray-100"
        >
          <HiChevronRight className="w-5 h-5" />
          <span className="sr-only">Next page</span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          className="p-2 hover:bg-gray-100"
        >
          <HiChevronDoubleRight className="w-5 h-5" />
          <span className="sr-only">Last page</span>
        </Button>
      </div>
    </div>
  );
}
