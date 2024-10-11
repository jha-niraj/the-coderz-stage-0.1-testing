"use client"

import Footer from "@/components/footer";
import Navbar from "@/components/homepage/navbar";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <div className="bg-dot-black/[0.2]">
            <Navbar />
            {
                children
            }
            <Footer />
            <Particles
                className="absolute inset-0"
                quantity={300}
                ease={80}
                color={color}
                refresh
            />
        </div>
    )
}