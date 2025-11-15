"use client"
import React from "react";
import { MdSaveAlt } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { Profile } from "@/components/Design/Details";
import { About } from "@/components/Design/About";
import { Social } from "@/components/Design/Social";

export default function Home() {
  const handleDownload = () => {
    try {
      // Create a temporary link element for download
      const link = document.createElement('a');
      link.href = '/sargam-pandey.vcf'; // File should be in public folder
      link.download = 'sargam-pandey.vcf'; // This forces download
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
    <div className="h-screen flex items-center justify-center bg-black relative">
      <FlickeringGrid className="absolute inset-0 w-full" />
      <div className="min-w-[320px] max-w-[400px]  h-full">
        <div className="relative z-5 h-full flex flex-col text-white pt-5">
          <h1 className="text-3xl font-semibold text-lime-500 text-center">Sargam Pandey</h1>
          <p className="text-center text-gray-300">CEO & MD, Shoolin Innovations Limited</p>
          <Social />
          <section className="mt-5">
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
              <button
                className="w-full flex items-center justify-center whitespace-nowrap gap-2 bg-lime-900 border-l-2 border-lime-950 hover:bg-lime-900 text-white font-medium py-2 px-3 transition-all duration-200"
              >
                <IoMdShare className="text-lg" />
                Share Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}