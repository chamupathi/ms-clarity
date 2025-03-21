import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseLayout from "./ui/layouts/BaseLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Your App Title",
    description: "Your app description",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <BaseLayout>
                    {children}
                </BaseLayout>
            </body>
        </html>
    );
}
