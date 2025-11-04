// app/components/Hero.tsx
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import "@/styles/hero.css";

const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(n, b));

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [edgeClass, setEdgeClass] = useState<string>(""); // evita hydration mismatch
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Detecta Edge só no cliente e aplica a classe após o mount
        if (typeof navigator !== "undefined" && /Edg\//.test(navigator.userAgent)) {
            setEdgeClass("edge-fix");
        }
        const t = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(t);
    }, []);

    // Ajuste dinâmico do título no desktop
    useLayoutEffect(() => {
        const fit = () => {
            const t = titleRef.current, c = containerRef.current;
            if (!t || !c) return;

            // Em mobile/tablet deixamos quebrar naturalmente
            if (window.matchMedia("(max-width: 1050px)").matches) {
                t.style.fontSize = "";
                return;
            }

            const csT = window.getComputedStyle(t);
            const csC = window.getComputedStyle(c);

            // largura útil = clientWidth - paddings horizontais
            const padX =
                parseFloat(csC.paddingLeft || "0") + parseFloat(csC.paddingRight || "0");
            const avail = c.clientWidth - padX;

            // line-height seguro (trata "normal")
            let lh = parseFloat(csT.lineHeight || "");
            if (Number.isNaN(lh)) {
                const fsPx = parseFloat(csT.fontSize || "16");
                lh = fsPx * 1.2;
            }

            let fs = parseFloat(csT.fontSize || "32");
            const MIN = 18, MAX = 64;
            fs = clamp(fs, MIN, MAX);

            // margem extra só para o Edge (código roda apenas no cliente)
            const isEdge = /Edg\//.test(navigator.userAgent);
            const EPS = isEdge ? 3 : 1;

            const fits = () => {
                const rect = t.getBoundingClientRect();
                return rect.width <= (avail - EPS) && t.clientHeight <= lh * 1.25;
            };

            // cresce até onde couber
            while (fs < MAX) {
                t.style.fontSize = `${fs + 1}px`;
                if (!fits()) { t.style.fontSize = `${fs}px`; break; }
                fs += 1;
            }
            // ou reduz se ainda não couber
            while (!fits() && fs > MIN) {
                fs -= 1; t.style.fontSize = `${fs}px`;
            }
        };

        fit();
        window.addEventListener("resize", fit);
        return () => window.removeEventListener("resize", fit);
    }, [isVisible]);

    return (
        <section id="hero" className={`hero ${edgeClass}`}>
            {/* ONDAS no topo — ativas no mobile via CSS */}
            <div className="hero-waves" aria-hidden="true">
                {/* SHAPE ROSA (sem stroke) */}
                <svg className="wave wave-pink-fill" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        d="M-160,170 C60,110 360,30 560,60 C760,90 980,220 1180,230 C1320,238 1440,200 1560,176 L1560,-40 L-160,-40 Z"
                        fill="#d58d9f"
                    />
                </svg>
                {/* CONTORNO BRANCO (apenas stroke) */}
                <svg className="wave wave-white-edge" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        d="M-160,170 C60,110 360,30 560,60 C760,90 980,220 1180,230 C1320,238 1440,200 1560,176"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Logo no topo em mobile/tablet */}
            <div className="hero-mobile-brand">
                <Image
                    src="/logo.png"
                    alt="Midwest Psychological Assessments logo"
                    className="hero-mobile-logo"
                    width={160}
                    height={42}
                    priority
                />
            </div>

            <div className="hero-overlay">
                <div ref={containerRef} className={`hero-text ${isVisible ? "fade-in" : ""}`}>
                    <h1 ref={titleRef} className="hero-title">
                        Midwest Psychological Assessments
                    </h1>

                    <p className="hero-subtitle">
                        Comprehensive Psychological Assessment Services
                    </p>

                    <div className="hero-services">
                        <p>We offer specialized evaluations across three key areas:</p>
                        <ul className="hero-service-list">
                            <li>Clinical Psychology</li>
                            <li>Clinical Neuropsychology</li>
                            <li>Educational Psychology</li>
                        </ul>
                    </div>

                    <div className="hero-btn-container">
                        <a href="#assessments" className="hero-btn">See more</a>
                    </div>

                    <p className="hero-goal">
                        Our goal is to provide precise, actionable insights that empower clients to thrive.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
