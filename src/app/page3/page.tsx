"use client";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import React from "react";

// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
// } from "@heroui/react";

import { IoIosArrowBack } from "react-icons/io";

const page = () => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <section className="">
      <TopNav />

      <div className="mx-4 md:mx-24 p-4 md:p-6 font-sans">
        {/* Modal Backdrop */}

        {/* Header with Back Arrow */}
        <div className="relative flex items-center justify-center">
          <button
            // onClick={onOpen}
            className="absolute left-0 sm:left-4 hover:opacity-70 transition-opacity"
          >
            <IoIosArrowBack className="w-8 h-8 md:w-12 md:h-12" />
          </button>
          <h1 className="text-3xl md:text-5xl font-bold text-center my-6 md:my-12">
            사이트 개인정보 보호
          </h1>
        </div>

        <div className="h-[1px] md:h-[2px] bg-[#000000] my-6 md:my-8"></div>

        {/* Content */}
        <div className="space-y-6 md:space-y-8 px-4 sm:px-12 text-base md:text-lg">
          <div>
            <p className="leading-relaxed font-bold mb-1 text-sm md:text-base">
              이용 약관 ROKIT
            </p>
            <p className="leading-relaxed font-normal text-sm md:text-base">
              Healthcare eIFU 웹사이트는 ROKIT Healthcare에서 제공하는 다양한
              의료 기기의 사용법(IFU) 및 기타 관련 정보를 제공합니다.
            </p>
          </div>
          <div>
            <p className="leading-relaxed font-bold mb-1 text-sm md:text-base">
              경고
            </p>
            <p className="leading-relaxed font-normal text-sm md:text-base">
              귀하는 전 세계적으로 ROKIT Healthcare와 공인 파트너(이하
              &quot;회사&quot;)에게만 이용이 허용된 비공개 웹사이트에 접속하려고
              합니다. 본 웹사이트는 의료 전문가를 대상으로 업무용으로만
              제공됩니다.
            </p>
          </div>
          <div>
            <p className="leading-relaxed font-normal text-sm md:text-base mb-[6rem] md:mb-[12rem]">
              회사는 웹사이트와 그 콘텐츠를 무단으로 접속, 이용, 수정하거나
              그러한 시도를 하는 행위를 엄격히 금지합니다. 무단 이용자 및/또는
              무단 이용 시 국내외 관련 법에 따라 형사 및/또는 민사상의 처벌을
              받을 수 있습니다. 본 웹사이트의 이용은 보안 및 운영 관리 목적으로
              모니터링 및 기록될 수 있습니다. 이러한 모니터링 및/또는 기록을
              통해 법적 활동의 발생 가능성이 감지되는 경우, 회사는 해당
              모니터링된 증거를 법 집행 기관에 제공할 수 있습니다. 또한 귀하는
              본 ‘이용 약관’ 및 웹사이트에 게시된 ‘법적 공지’에 있는 추가 약관에
              동의하며, 해당 약관은 웹사이트 페이지의 하단에 있는 ‘법적 공지’
              링크를 통해 확인할 수 있습니다. © ROKIT Healthcare, Inc. 2025 판권
              소유.
            </p>
          </div>
        </div>

        {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat
                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
                    ex incididunt cillum quis. Velit duis sit officia eiusmod
                    Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                    incididunt nisi consectetur esse laborum eiusmod pariatur
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal> */}
      </div>

      <Footer />
    </section>
  );
};

export default page;
