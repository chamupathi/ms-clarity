"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import BurgerIcon from './icons/BurgerIcon';
import CloseIcon from './icons/CloseIcon';
import { navigationLinks } from './config/navigation';

interface HeaderProps {
    isMenuOpen: boolean;
    onMenuToggle: () => void;
}

export default function Header({ isMenuOpen, onMenuToggle }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 flex items-center pl-6 transition-all duration-300 ${isScrolled ? 'h-[100px] md:h-[100px] bg-[#3c5a80]' : 'bg-[#3c5a80] md:bg-transparent h-[100px] md:h-[150px]'
                }`}
        >
            <nav className="hidden md:flex items-center gap-4">
                {navigationLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-[var(--fme-primary)]">
                        {link.label}
                    </Link>
                ))}
            </nav>
            <div className="flex items-center gap-4 md:hidden">
                <button
                    aria-label="Menu"
                    className="p-2"
                    onClick={onMenuToggle}
                >
                    {!isMenuOpen ? <BurgerIcon /> : <CloseIcon />}
                </button>
                <Link href="/">
                    <h1 className="text-white">My awesome title</h1>
                </Link>

            </div>
        </header>
    )
}

