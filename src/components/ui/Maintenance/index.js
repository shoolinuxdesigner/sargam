"use client"
import React from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid"

export default function MaintenancePage() {
    return (
        <div className="h-full lg:h-screen flex items-center justify-center bg-black relative">
            <FlickeringGrid className="fixed inset-0 w-full opacity-30" />

            <div className="text-center">
                <h1 className="text-3xl font-bold text-lime-600 mb-4">
                    🛠️ We'll be back soon!
                </h1>
                <p className="text-gray-300 mb-8 text-lg">
                    Our site is currently down for maintenance.
                </p>
                <div className="animate-bounce">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl">⏳</span>
                    </div>
                </div>
            </div>
        </div>
    );
}