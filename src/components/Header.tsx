"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Lily_Script_One } from "next/font/google";
import "@/styles/header.css";

// Importa a fonte otimizada do Google Fonts
const lilyScript = Lily_Script_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-container">
                {/* Logo - Alinhado à esquerda */}
                <Link href="/" className="logo">
                    <h1 className={`header-title ${lilyScript.className}`}>
                        Psychology Care
                    </h1>
                </Link>

                {/* Navbar - Alinhado à direita */}
                <nav className="nav-container">
                    <ul className="nav-links">
                        <li><Link href="#home">HOME</Link></li>
                        <li><Link href="#services">ASSESSMENTS</Link></li>
                        <li><Link href="#about">OUR TEAM</Link></li>
                        <li><Link href="#contact">CONTACT</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
