"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Menu, X, Target, Brain, Eye, Users, HelpCircle, Mail, Clock, HandHeart
} from "lucide-react";
import "@/styles/header.css";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero");
            if (heroSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                setIsVisible(heroBottom <= 0);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // trava/destrava o scroll do body somente quando o drawer está aberto
    useEffect(() => {
        if (menuOpen) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => { document.body.style.overflow = prev; };
        }
    }, [menuOpen]);

    const closeAndGo = () => setMenuOpen(false);

    return (
        <header className={`header ${isVisible ? "visible" : ""}`}>
            <div className="header-container">
                <Link href="/" className="logo" aria-label="Home">
                    <Image
                        src="/logo.png"
                        alt="Psychology Care Logo"
                        width={200}
                        height={60}
                        priority
                        className="object-contain h-12 w-auto"
                    />
                </Link>

                {/* NOVO: botão burger (só aparece <= 1135px via CSS) */}
                <button
                    className="burger-btn"
                    aria-label="Open menu"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-drawer"
                    onClick={() => setMenuOpen(true)}
                >
                    <Menu className="icon" />
                </button>

                {/* Navegação existente (mantida) — visível somente acima de 1135px */}
                <nav className="nav-container">
                    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                        <Link
                            href="#assessments"
                            className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-white bg-[#b2677c] hover:bg-[#9e5a6c] rounded-lg"
                        >
                            <Menu className="size-4" />
                            Services
                        </Link>
                        <Link
                            href="#conditions"
                            className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-white bg-[#b2677c] hover:bg-[#9e5a6c] rounded-lg"
                        >
                            <Brain className="size-4" />
                            Conditions
                        </Link>

                        <Link
                            href="#principles"
                            className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-white bg-[#b2677c] hover:bg-[#9e5a6c] rounded-lg"
                        >
                            <Target className="size-4" />
                            Principles
                        </Link>

                        <Link
                            href="#process"
                            className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-white bg-[#b2677c] hover:bg-[#9e5a6c] rounded-lg"
                        >
                            <Clock className="size-4"/>
                            Process
                        </Link>

                        <Link
                            href="#approach"
                            className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-white bg-[#b2677c] hover:bg-[#9e5a6c] rounded-lg"
                        >
                            <HandHeart className="size-4" />
                            Our approach
                        </Link>

                        <Link
                            href="#ethic"
                            className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-white bg-[#b2677c] hover:bg-[#9e5a6c] rounded-lg"
                        >
                            <Eye className="size-4" />
                            Ethic
                        </Link>
                        <Link
                            href="#team"
                            className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-white bg-[#b2677c] hover:bg-[#9e5a6c] rounded-lg"
                        >
                            <Users className="size-4" />
                            Team
                        </Link>
                        <Link
                            href="#faqs"
                            className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-white bg-[#b2677c] hover:bg-[#9e5a6c] rounded-lg"
                        >
                            <HelpCircle className="size-4" />
                            FAQs
                        </Link>
                        <Link
                            href="#contact"
                            className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-white bg-[#b2677c] hover:bg-[#9e5a6c] rounded-lg"
                        >
                            <Mail className="size-4" />
                            Contact
                        </Link>
                    </div>
                </nav>
            </div>

            {/* NOVO: overlay + drawer (ativados só quando menuOpen = true) */}
            <div
                className={`header-overlay ${menuOpen ? "show" : ""}`}
                onClick={() => setMenuOpen(false)}
            />

            <aside
                id="mobile-drawer"
                className={`header-drawer ${menuOpen ? "open" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label="Main navigation"
            >
                <div className="header-drawer-header">
                    <Image
                        src="/logo.png"
                        alt="Psychology Care Logo"
                        width={160}
                        height={48}
                        className="object-contain h-10 w-auto"
                    />
                    <button
                        className="header-drawer-close"
                        aria-label="Close menu"
                        onClick={() => setMenuOpen(false)}
                    >
                        <X className="icon" />
                    </button>
                </div>

                <nav className="header-drawer-nav">
                    <Link href="#assessments" onClick={closeAndGo}><Menu className="icon-left" /> Services</Link>
                    <Link href="#conditions" onClick={closeAndGo}><Brain className="icon-left" /> Conditions</Link>
                    <Link href="#principles" onClick={closeAndGo}><Target className="icon-left" /> Principles</Link>
                    <Link href="#process" onClick={closeAndGo}><Clock className="icon-left" /> Process</Link>
                    <Link href="#approach" onClick={closeAndGo}><HandHeart className="icon-left" /> Our approach</Link>
                    <Link href="#ethic" onClick={closeAndGo}><Eye className="icon-left" /> Ethic</Link>
                    <Link href="#team" onClick={closeAndGo}><Users className="icon-left" /> Team</Link>
                    <Link href="#faqs" onClick={closeAndGo}><HelpCircle className="icon-left" /> FAQs</Link>
                    <Link href="#contact" onClick={closeAndGo}><Mail className="icon-left" /> Contact</Link>
                </nav>
            </aside>
        </header>
    );
};

export default Header;
