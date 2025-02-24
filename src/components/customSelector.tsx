"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  defaultValue: string;
  onChange: (value: string) => void;
}

export function CustomSelect({
  options,
  defaultValue,
  onChange,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="w-full h-14 px-4 text-left bg-[#F5F5F5] border-[2px] border-[#000000] rounded-md flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{options.find((opt) => opt.value === selectedValue)?.label}</span>
        <FaChevronDown
          className={`h-8 w-8 text-[#000000] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-[#DDE2E6] rounded-md shadow-lg z-10">
          {options.map((option) => (
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
  );
}
