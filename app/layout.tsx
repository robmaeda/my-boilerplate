import cx from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import SessionWrapper from "./components/SessionWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ADD TITLE HERE",
    description: "ADD DESCRIPTION HERE",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionWrapper>
            <html lang="en" className="h-full">
                <body className={cx(inter.className, "h-full")}>
                    <Suspense fallback={<div>Loading...</div>}>
                        {children}
                    </Suspense>
                </body>
            </html>
        </SessionWrapper>
    );
}
