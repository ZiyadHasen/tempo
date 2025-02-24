"use client";
import logo from "@/assets/logo.svg";
import { CustomSelect } from "@/components/customSelector";
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

const LoginPage = () => {
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      setError(true);
      return;
    }
    console.log("Form submitted");
  };

  const languageOptions = [
    { value: "ko", label: "KO-한국어" },
    { value: "en", label: "EN-English" },
  ];

  return (
    <div>
      <TopNav />
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className="w-full max-w-xl bg-white p-8">
          {/* Logo Header */}
          <header className="flex justify-start items-center mb-6">
            <Image src={logo} alt="Logo" width={65} height={65} priority />
          </header>

          {/* Main Content */}
          <main>
            <h1 className="text-4xl sm:text-5xl font-semibold my-4">
              관리자 로그인
            </h1>
            <h2 className="text-lg sm:text-xl font-medium mb-2">
              설정을 선택하고 사용 약관에 동의하여 계속하십시오
            </h2>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-6">
              본 웹 사이트는 의료 전문가 전용 사이트입니다.
            </h2>
            <form>
              {/* Language Selector */}
              <div className="space-y-2 mb-6">
                <label className="text-xl sm:text-2xl font-bold">언어</label>
                <CustomSelect
                  options={languageOptions}
                  defaultValue="ko"
                  onChange={(value) =>
                    console.log(`Selected language: ${value}`)
                  }
                />
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
                      onClick={() => setShowTerms(true)}
                      className="text-[#FF6B00] hover:underline mr-2"
                    >
                      이용약관
                    </button>
                    에 동의합니다
                  </label>
                </div>
              </div>

              {error && (
                <div className="w-full text-base sm:text-lg font-bold bg-[#FCD5D5] text-red-500 border border-red-700 p-3 rounded-md mb-4">
                  이용약관을 클릭해주세요
                </div>
              )}

              {/* Login Button */}
              <section className="flex w-full mt-10">
                <Link href="/page1" className="w-full" role="button">
                  <button
                    onClick={handleSubmit}
                    className="w-full px-4 py-3 font-bold text-lg sm:text-2xl bg-black text-white rounded-lg"
                  >
                    로그인
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
        closeButton={false}
      >
        <ModalContent className="relative mx-auto my-auto px-4 pt-2 sm:px-10 sm:pt-4">
          {(onClose) => (
            <>
              {/* X Icon on Top Right */}
              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={onClose}
              >
                <BiX className="text-3xl sm:text-4xl" />
              </div>
              <ModalHeader className="flex flex-col gap-1 text-lg sm:text-2xl font-bold">
                이용약관
              </ModalHeader>
              <ModalBody className="text-sm sm:text-lg">
                ROKIT Healthcare, Inc. elFU 웹 사이트는 ROKIT Healthcare 의료
                기기의 다양 한 제품에 대한 사용법(IFU)과 기타 관련 정보를
                제공합니다. 본 웹 사이트는 의료 전문가 전용 사이트입니다. 경고:
                귀하는 전 세계적으로 ROKIT Healthcare와 공인 대리점(이하 회사
                )에게만 그 이용이 허용된 비공개 웹 사이트에 접속하려고 합니다.
                이 사이트는 의료 전문가를 대상으로 업무용으로만 제공됩니다.
                회사는 웹 사이트와 그 콘텐츠를 실제로 무단으로 접속, 이용 또는
                수정하거나 그러한 시 도를 하는 행위를 엄격하게 금지합니다. 무단
                이용자 및/또는 무단 이용 시는 국내외 관련 법에 따라 형사 및/또는
                민사상의 처벌을 받을 수 있습니다. 본 웹 사이트의 이용은 관리 및
                보안상의 이유로 모니터링 및 기록될 수 있습니다. 이러한 모니터링
                및/또는 기록을 통해 범죄 활동의 발생 가능성을 보여주는 증거가
                드러난 경우, 회사는 해당 활동에 대한 모니터링된 증거를 법 집행
                공무원에게 제공할 수 있습니다. 또한 귀하는 이용 약관 / 법적
                공지&apos;에 있는 추가 약관에 동의하며, 동 약관은 웹 사이트
                페이지의 우측 하단에 있는 &apos;법적 공지&apos; 링크를 동해
                접속할 수 있습니다. ROKIT Healthcare, Inc. 2018(달리 언급하는
                경우는 예외). 판권 소유
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#EE8000] w-40 text-sm sm:text-xl text-white font-bold h-10 sm:h-12 rounded-md"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LoginPage;
