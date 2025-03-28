import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";
import "@/styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Psychology Care",
    description: "Specialized assessment services in clinical psychology.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <meta name="color-scheme" content="light only"/>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
        </body>
        </html>
    );
}
