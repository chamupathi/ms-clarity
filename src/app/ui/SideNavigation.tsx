"use client";

import Link from "next/link";
import { navigationLinks } from './config/navigation';

interface SideNavigationProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SideNavigation({ isOpen, onClose }: SideNavigationProps) {
    return (
        <>
            {/* Overlay */}
            <div 
                className={`
                    fixed top-[100px] inset-x-0 bottom-0 bg-black/50 transition-opacity duration-300
                    ${isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none -z-10'}
                    md:hidden
                `}
                onClick={onClose}
            />

            {/* Mobile Navigation Menu */}
            <div 
                className={`
                    fixed top-[100px] left-0 h-screen w-64 bg-[#3c5a80] 
                    transform transition-transform duration-300 ease-in-out z-50
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:hidden
                `}
            >
                <nav className="flex flex-col p-6 gap-6">
                    {navigationLinks.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href} 
                            className="text-[var(--fme-primary)] hover:text-gray-200 transition-colors"
                            onClick={onClose}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
} 