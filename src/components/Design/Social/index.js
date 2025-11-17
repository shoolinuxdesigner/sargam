"use client"
import React from "react"

// Icons
import { IoMailOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function Social() {
    return (
        <ul className="flex flex-row justify-center w-full gap-2 mt-1">
            <li className="w-fit bg-[#ea4335] hover:bg-red-700 rounded-full p-1.5 transition-all duration-300 hover:scale-105">
                <a href="mailto:ceo@shoolin.co.uk" target="_blank"><IoMailOutline size={24} className="text-white" /></a>
            </li>
            <li className="w-fit bg-blue-600 hover:bg-blue-700 rounded-full p-1.5 transition-all duration-300 hover:scale-105">
                <a href="tel:+918569856987" target="_blank"><IoMdCall size={24} className="text-white" /></a>
            </li>
            <li className="w-fit bg-green-500 hover:bg-green-600 rounded-full p-1.5 transition-all duration-300 hover:scale-105">
                <a href="https://wa.me/9100000000" target="_blank"><FaWhatsapp size={24} className="text-white" /></a>
            </li>
            <li className="w-fit bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full p-1.5 transition-all duration-300 hover:scale-105">
                <a href="https://instagram.com/sargampandey_" target="_blank"><FaInstagram size={24} className="text-white" /></a>
            </li>
        </ul>
    )
}
