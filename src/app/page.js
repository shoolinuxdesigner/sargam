"use client"
import React from "react";
import { MdSaveAlt } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { FlickeringGrid } from "@/components/ui/flickering-grid"

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
    <div className="h-screen flex items-center justify-center bg-gray-950 relative">
      <FlickeringGrid className="absolute inset-0 w-full" />
      <div className="min-w-[320px] max-w-[500px]  h-full">
        <div className="relative z-5 h-full flex flex-col text-white">
          <h1 className="text-2xl font-semibold text-lime-200 text-center">Sargam Pandey</h1>
          <p className="text-center text-gray-300">CEO, Shoolin Innovations Limited</p>
          <section>
          </section>
          <div className="flex w-full absolute bottom-0 rounded-tr-2xl  rounded-tl-2xl overflow-hidden">
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-2 bg-lime-800 hover:bg-lime-700 text-white font-medium p-2 transition-all duration-200"
            >
              <MdSaveAlt className="text-lg" />
              Save Contact
            </button>
            <button
              className="w-full flex items-center justify-center gap-2 bg-lime-950 hover:bg-lime-900 text-white font-medium p-2 transition-all duration-200"
            >
              <IoMdShare className="text-lg" />
              Share Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}