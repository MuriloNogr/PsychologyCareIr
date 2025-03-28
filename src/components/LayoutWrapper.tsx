"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={scrolled ? "scrolled" : ""}>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default LayoutWrapper;
