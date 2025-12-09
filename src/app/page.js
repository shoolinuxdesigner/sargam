"use client"
import React from "react";
import Image from "next/image";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { MdSaveAlt } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { Profile } from "@/components/Design/Details";
import { About } from "@/components/Design/About";
import { Social } from "@/components/Design/Social";

// import sargam from "@/assets/images/imageDark.png"
import sargam from "@/assets/images/image_2.png"
import overlay_logo from "@/assets/images/logo_over.png"
import { Share } from "@/components/Design/Share";

export default function Home() {
  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = '/sargam-pandey.vcf';
      link.download = 'sargam-pandey.vcf';
      link.setAttribute('type', 'text/vcard');

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  return (
    <div className="h-full lg:h-screen flex items-center justify-center bg-[#e6e9de]  relative">
      <FlickeringGrid className="fixed inset-0 w-full" />
      <div className="min-w-[320px] max-w-[400px] h-full px-4 relative">
        <Image src={overlay_logo} alt="Overlay Logo" className="absolute top-0 left-0 z-10" />
        <div className="absolute inset-0 w-full h-full flex opacity-80">
          <div className="h-full w-1/3 bg-[#494528]"></div>
          <div className="h-full w-1/3 bg-[#DED9C5]"></div>
          <div className="h-full w-1/3 bg-[#C5BD98]"></div>
        </div>
        <div className="relative z-25 h-full flex flex-col text-white py-5">
          <div className="flex flex-col w-full justify-center items-center pt-10">
            <Image src={sargam} alt="Sargam Pandey Image" className="w-[280px]" />
            <div className="imageBar h-[1px] w-full hidden"></div>
            <div className="h-6 w-full hidden">
              <div className="relative w-full h-20 overflow-hidden">
                <div className="absolute inset-0 z-1 -translate-y-16 scale-80 h-22 w-full rounded-full bg-lime-600 opacity-10 blur-3xl"></div>
                <div className="absolute left-5 z-1 -translate-y-16 scale-80 h-22 w-80 rounded-full bg-lime-600/40 blur-2xl"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center  px-5 pt-3 pb-6 rounded-lg bg-white border border-gray-800 relative z-20 mb-3">
            <h1 className="text-3xl font-semibold text-[#1D1B09] text-center">Sargam Pandey</h1>
            <p className="text-center text-[#1D1B09]">CEO & MD, Shoolin Innovations Limited</p>
            <Social />
          </div>
          <section className="mt-5 pb-18">
            <div className="flex flex-col gap-2">
              <About />
              <Profile />
            </div>
          </section>
          <div className="flex w-full justify-center items-center fixed bottom-3 left-0 px-3">
            <div className="flex max-fit justify-center items-center overflow-hidden rounded-full">
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center whitespace-nowrap gap-2 bg-[#332f11] hover:bg-[#1d1a07] text-white font-medium py-2 px-3 transition-all duration-200"
              >
                <MdSaveAlt className="text-lg" />
                Save Contact
              </button>
              <Drawer>
                <DrawerTrigger className="w-full flex items-center justify-center whitespace-nowrap gap-2 bg-[#443f18] border-l-2 border-white hover:bg-[#332f11] text-white font-medium py-2 px-3 transition-all duration-200">
                  <IoMdShare className="text-lg" />
                  Share Contact
                </DrawerTrigger>
                <DrawerContent className="bg-orange-50 min-w-[320px] max-w-[400px] mx-auto">
                  <DrawerHeader>
                    <DrawerTitle>
                      <div className="text-3xl font-semibold text-[#494528] text-center">Sargam Pandey</div>
                    </DrawerTitle>
                    <DrawerDescription className="text-[#494528] text-md">CEO & MD, Shoolin Innovations Limited</DrawerDescription>
                  </DrawerHeader>
                  <div className="px-4">
                    <Share />
                  </div>
                  <DrawerFooter>
                    <DrawerClose className="w-full flex items-center justify-center whitespace-nowrap gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-3 rounded-full transition-all duration-200">
                      CLOSE
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}