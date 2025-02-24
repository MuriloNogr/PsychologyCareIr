"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Lily_Script_One } from "next/font/google";
import "@/styles/header.css";

const lilyScript = Lily_Script_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(true); // Estado para ocultar no início

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero");
            if (heroSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                setHidden(heroBottom > 0); // Header invisível se ainda dentro do Hero
                setScrolled(window.scrollY > heroSection.clientHeight * 0.2);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""} ${hidden ? "hidden-header" : ""}`}>
            <div className="header-container">
                <Link href="/" className="logo">
                    <h1 className={`header-title ${lilyScript.className}`}>Psychology Care</h1>
                </Link>

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
