"use client"
import React from "react"
import { IoMailOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";


export function Profile() {
    return (
        <div className="w-full px-3 py-2.5 rounded-lg bg-gray-950/80 border border-gray-700">
            <h1 className="text-center font-semibold uppercase mb-3">Contact Me</h1>
            <div className="flex flex-col">
                <div className="flex items-center gap-3">
                    <IoMailOutline size={18} className="pt-0.5" />
                    <a href="mailto:ceo@shoolin.co.uk" target="_blank">ceo@shoolin.co.uk</a>
                </div>
                <div className="flex items-center gap-3">
                    <IoMdCall size={18} className="pt-0.5" />
                    <a href="tel:+918569856987" target="_blank">+91 85698 56987</a>
                </div>
                <div className="flex items-center gap-3">
                    <IoMdCall size={18} className="pt-0.5" />
                    <a href="tel:+918569856987" target="_blank">+91 85698 56987</a>
                </div>
            </div>
        </div>
    )
}
