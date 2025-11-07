"use client"
import React from "react";
import { MdSaveAlt } from "react-icons/md";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
      >
        <MdSaveAlt className="text-lg" />
        Save Contact
      </button>
    </div>
  );
}