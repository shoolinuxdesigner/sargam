"use client"
import React from "react"
import { BorderBeam } from "@/components/ui/border-beam"
import {Card} from "@/components/ui/card"

// Icons
import { IoMailOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

export function About() {
    return (
        <Card className="relative w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-gray-800 overflow-hidden gap-2">
            <h1 className="text-center font-semibold uppercase mb-2 text-white">About Me</h1>
            <div className="flex flex-col gap-1.5 mb-2">
                <p className="text-white/70 text-center text-[15px]">CEO & Managing Director of Shoolin Innovations Ltd. and Scottish Café Pvt. Ltd., creating meaningful experiences across branding, F&B, fashion, and maritime education. I build bold brands at Shoolin, shape café culture with The Captain&apos;s Café, and mentor future seafarers with purpose and clarity.</p>
            </div>
            <BorderBeam
                duration={8}
                size={100}
                borderWidth={2}
                className="from-transparent via-lime-600 to-transparent"
            />
            <BorderBeam
                duration={8}
                delay={4}
                size={100}
                borderWidth={2}
                className="from-transparent via-lime-600 to-transparent"
            />
        </Card>
    )
}
