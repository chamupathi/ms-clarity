"use client";

import Image from "next/image";
import Header from "../header";
import SideNavigation from "../SideNavigation";
import { useState } from "react";


interface BaseLayoutProps {
    children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <>
            <Header
                isMenuOpen={isMenuOpen}
                onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            />
            <SideNavigation
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
            <main className="relative min-h-screen">
                <div className="fixed inset-0 -z-10">
                    <Image
                        src="/background.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority={false}
                    />
                </div>
                {children}
            </main>
        </>
    );
} 