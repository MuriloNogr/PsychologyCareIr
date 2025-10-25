"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Target, Brain, Eye, Users, HelpCircle, Mail, Clock, HandHeart} from "lucide-react";
import "@/styles/header.css";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero");
            if (heroSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                setIsVisible(heroBottom <= 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${isVisible ? "visible" : ""}`}>
            <div className="header-container">
                <Link href="/" className="logo">
                    <Image
                        src="/MidwestLogo.png"
                        alt="Psychology Care Logo"
                        width={200}
                        height={60}
                        priority
                        className="object-contain h-12 w-auto"
                    />
                </Link>

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
        </header>
    );
};

export default Header;
