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

export function Profile() {
    return (
        <>
            {/* <Card className="relative w-full px-5 py-4 rounded-lg bg-white border border-gray-800 overflow-hidden gap-2">
                <h1 className="text-center font-semibold uppercase mb-3 text-[#1D1B09] hidden">Contact Me</h1>
                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3 text-[#1D1B09]">
                        <IoMailOutline size={20} className="pt-0.5 opacity-70" />
                        <a href="mailto:ceo@shoolin.co.uk" target="_blank" className="w-full">ceo@shoolin.co.uk</a>
                    </div>
                    <div className="flex items-center gap-3 text-[#1D1B09]">
                        <IoMdCall size={20} className="pt-0.5 opacity-70" />
                        <a href="tel:+918569856987" target="_blank" className="w-full">+91 85698 56987</a>
                    </div>
                    <div className="flex items-center gap-3 text-[#1D1B09]">
                        <FaWhatsapp size={20} className="pt-0.5 opacity-70" />
                        <a href="wa.me/918569856987" target="_blank" className="w-full">+91 85698 56987</a>
                    </div>
                    <hr className="border-gray-800/50 my-2" />
                    <div className="flex items-center gap-3 text-[#1D1B09]">
                        <FaInstagram size={20} className="pt-0.5 opacity-70" />
                        <a href="https://instagram.com/sargampandey_" target="_blank" className="w-full">sargampandey_</a>
                    </div>
                    <div className="flex items-center gap-3 text-[#1D1B09]">
                        <AiOutlineLinkedin size={20} className="pt-0.5 opacity-70" />
                        <a href="https://www.linkedin.com/in/sargam-pandey-74bb9a6b/" target="_blank" className="w-full">sargam-pandey-74bb9a6b</a>
                    </div>
                    <div className="flex items-center gap-3 text-[#1D1B09]">
                        <AiOutlineFacebook size={20} className="pt-0.5 opacity-70" />
                        <a href="https://www.facebook.com/sargam.pandey/" target="_blank" className="w-full">sargam-pandey</a>
                    </div>
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
            <div className="relative w-full px-10 py-5 rounded-lg overflow-hidden gap-2 third_bg">
                <h1 className="text-center font-semibold uppercase mb-3 text-[#1D1B09] hidden">Contact Me</h1>
                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3 text-[#1D1B09]">
                        <IoMailOutline size={20} className="pt-0.5 opacity-70" />
                        <a href="mailto:ceo@shoolin.co.uk" target="_blank" className="w-full">ceo@shoolin.co.uk</a>
                    </div>
                    <div className="flex items-center gap-3 text-[#1D1B09]">
                        <IoMdCall size={20} className="pt-0.5 opacity-70" />
                        <a href="tel:+918569856987" target="_blank" className="w-full">+91 85698 56987</a>
                    </div>
                    <div className="flex items-center gap-3 text-[#1D1B09]">
                        <FaWhatsapp size={20} className="pt-0.5 opacity-70" />
                        <a href="wa.me/918569856987" target="_blank" className="w-full">+91 85698 56987</a>
                    </div>
                    <hr className="border-gray-800/50 my-2" />
                    <div className="flex items-center gap-3 text-[#1D1B09]">
                        <FaInstagram size={20} className="pt-0.5 opacity-70" />
                        <a href="https://instagram.com/sargampandey_" target="_blank" className="w-full">sargampandey_</a>
                    </div>
                    <div className="flex items-center gap-3 text-[#1D1B09]">
                        <AiOutlineLinkedin size={20} className="pt-0.5 opacity-70" />
                        <a href="https://www.linkedin.com/in/sargam-pandey-74bb9a6b/" target="_blank" className="w-full">sargam-pandey-74bb9a6b</a>
                    </div>
                    <div className="flex items-center gap-3 text-[#1D1B09]">
                        <AiOutlineFacebook size={20} className="pt-0.5 opacity-70" />
                        <a href="https://www.facebook.com/sargam.pandey/" target="_blank" className="w-full">sargam-pandey</a>
                    </div>
                </div>
            </div>
        </>
    )
}
