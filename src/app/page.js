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

import sargam from "@/assets/images/imageDark.png"
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
    <div className="h-full lg:h-screen flex items-center justify-center bg-black relative">
      <FlickeringGrid className="fixed inset-0 w-full" />
      <div className="min-w-[320px] max-w-[400px] h-full px-4">
        <div className="relative z-5 h-full flex flex-col text-white py-5">
          <div className="flex flex-col w-full justify-center items-center">
            <Image src={sargam} alt="Sargam Pandey Image" className="w-[280px]" />
            <div className="imageBar h-[1px] w-full"></div>
            <div className="h-6 w-full">
              <div className="relative w-full h-20 overflow-hidden">
                <div className="absolute inset-0 z-1 -translate-y-16 scale-80 h-22 w-full rounded-full bg-lime-600 opacity-10 blur-3xl"></div>
                <div className="absolute left-5 z-1 -translate-y-16 scale-80 h-22 w-80 rounded-full bg-lime-600/40 blur-2xl"></div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-semibold text-lime-500 text-center">Sargam Pandey</h1>
          <p className="text-center text-gray-300">CEO & MD, Shoolin Innovations Limited</p>
          <Social />
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
                className="w-full flex items-center justify-center whitespace-nowrap gap-2 bg-lime-800 hover:bg-lime-700 text-white font-medium py-2 px-3 transition-all duration-200"
              >
                <MdSaveAlt className="text-lg" />
                Save Contact
              </button>
              <Drawer>
                <DrawerTrigger className="w-full flex items-center justify-center whitespace-nowrap gap-2 bg-lime-900 border-l-2 border-lime-950 hover:bg-lime-900 text-white font-medium py-2 px-3 transition-all duration-200">
                  <IoMdShare className="text-lg" />
                  Share Contact
                </DrawerTrigger>
                <DrawerContent className="bg-zinc-950/95 min-w-[320px] max-w-[400px] mx-auto">
                  <DrawerHeader>
                    <DrawerTitle>
                      <div className="text-3xl font-semibold text-lime-500 text-center">Sargam Pandey</div>
                    </DrawerTitle>
                    <DrawerDescription className="text-white">CEO & MD, Shoolin Innovations Limited</DrawerDescription>
                  </DrawerHeader>
                  <div className="px-4">
                    <Share/>
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