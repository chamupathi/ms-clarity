"use client";

import Image from "next/image";
import Header from "../header";
import SideNavigation from "../SideNavigation";
import { useEffect, useState } from "react";
import Clarity from '@microsoft/clarity';

interface BaseLayoutProps {
    children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // useEffect(() => {
    //     (function(c, l, a, r, i, t, y) {
    //       c[i] = c[i] || function() { (c[i].q = c[i].q || []).push(arguments) };
    //       t = l.createElement(a); t.async = 1; t.src = r;
    //       y = l.getElementsByTagName(a)[0]; y.parentNode.insertBefore(t, y);
    //     })(window, document, "script", "https://www.clarity.ms/tag/qrxizr0930", "clarity");
    //   }, []);

    
      /* eslint-disable */
      useEffect(() => {
        // if (typeof window !== "undefined") {
        //   (function (c: any, l: Document, a: string, r: string, i: string, t?: HTMLScriptElement, y?: Node) {
        //     c[i] =
        //       c[i] ||
        //       function (...args: any) {
        //         (c[i].q = c[i].q || []).push(args);
        //       };
        //     t = l.createElement(a) as HTMLScriptElement;
        //     t.async = true;
        //     t.src = r;
        //     y = l.getElementsByTagName(a)[0];
        //     y?.parentNode?.insertBefore(t, y);
        //   })(window, document, "script", "https://www.clarity.ms/tag/qrxizr0930", "clarity");
        // }

        if (typeof window !== "undefined") {
            Clarity.init('qrxizr0930');
        }
      }, []);
      /* eslint-enable */

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