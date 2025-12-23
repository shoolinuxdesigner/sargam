"use client"
import React from "react"
import { BorderBeam } from "@/components/ui/border-beam"
import { Card } from "@/components/ui/card"

// Icons
import { IoMailOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

export function About() {
    return (
        <>
            {/* <Card className="relative w-full px-5 py-4 rounded-lg bg-white border border-gray-800 overflow-hidden gap-2">
                <h1 className="text-center font-semibold uppercase mb-2 text-[#1D1B09] hidden">About Me</h1>
                <div className="flex flex-col gap-1.5">
                    <p className="text-[#1D1B09]/70 text-center text-[15px]">CEO & Managing Director of Shoolin Innovations Ltd. and Scottish Café Pvt. Ltd., creating meaningful experiences across branding, F&B, fashion, and maritime education. I build bold brands at Shoolin, shape café culture with The Captain&apos;s Café, and mentor future seafarers with purpose and clarity.</p>
                </div>
                <BorderBeam
                    duration={8}
                    size={100}
                    borderWidth={2}
                    className="from-transparent via-[#332f11] to-transparent"
                />
                <BorderBeam
                    duration={8}
                    delay={4}
                    size={100}
                    borderWidth={2}
                    className="from-transparent via-[#332f11] to-transparent"
                />
            </Card> */}
            <div className="relative w-full px-8 py-6 rounded-lg overflow-hidden gap-2 second_bg">
                <h1 className="text-center font-semibold uppercase mb-2 text-[#1D1B09] hidden">About Me</h1>
                <div className="flex flex-col gap-1.5">
                    <p className="text-white text-center text-[15px]">I lead Shoolin Innovations Ltd., where ideas evolve into brands with character, clarity, and purpose. My world blends marketing, fashion, F&B, and maritime education into stories that move people. I build identities and campaigns that don&apos;t just look good - they create momentum and real-world impact. If bold vision and meaningful collaboration excite you, you&apos;re in the right place.</p>
                </div>
            </div>
        </>
    )
}
