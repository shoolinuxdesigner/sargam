"use client"
import React from "react"

import { QRCode } from "@/components/kibo-ui/qr-code";
import PathCopy from "@/components/ui/path copy";
import ShareCard from "@/components/ui/shareCard";

export function Share() {
    return (
        <div className="flex flex-col justify-center items-center">
            <QRCode
                className="size-50 mb-3"
                data="https://mrchamp.netlify.app"
            />
            <ShareCard/>
        </div>
    )
}
