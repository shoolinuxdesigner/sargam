"use client"
import React from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-full lg:h-screen flex items-center justify-center bg-black relative">
            <FlickeringGrid className="fixed inset-0 w-full opacity-30" />

            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                    The page you're looking for doesn't exist.
                </p>
                
                <Link 
                    href="/"
                    className="bg-lime-600 text-white px-6 py-3 rounded-lg hover:bg-lime-700 transition-colors font-medium"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}