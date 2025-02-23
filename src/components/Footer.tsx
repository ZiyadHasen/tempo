import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 md:py-12 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
        {/* Logo */}
        <div className="w-full md:w-1/4 flex items-center justify-center mb-4 md:mb-0">
          <Image
            src="/assets/headerlogo.svg"
            alt="Company logo"
            height={20}
            width={220}
            className="w-40 md:w-52"
            loading="eager"
            priority
            aria-label="Company logo"
          />
        </div>

        {/* Address */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-2 md:space-y-0">
          <p className="text-xs md:text-sm font-thin leading-5">
            서울특별시 | 강남구 | 테헤란로 10길 | 12층 | (06234)
            <span className="font-semibold block md:inline md:ml-2">
              TEL: 1234-5678
            </span>
          </p>
          <p className="text-xs md:text-sm font-thin leading-5">
            12F, 10 Teheran-ro, Gangnam-gu, Seoul, South Korea | 06234
            <span className="font-semibold block md:inline md:ml-2">
              TEL: 1234-5678
            </span>
          </p>
        </div>

        {/* Copyright */}
        <div className="w-full md:w-1/4 text-center md:text-left mt-4 md:mt-0">
          <p className="text-xs md:text-sm font-semibold mb-2">
            이용약관 | 개인정보 보호정책
          </p>
          <p className="text-xs md:text-sm font-thin">
            COPYRIGHT © ROKIT HEALTHCARE, INC.
            <br className="md:hidden" /> ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
