"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "@/styles/hero.css";

const clamp = (num: number, min: number, max: number) =>
    Math.max(min, Math.min(num, max));

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    // Reduz dinamicamente o tamanho do título até caber em uma única linha
    useLayoutEffect(() => {
        const fitTitle = () => {
            const titleEl = titleRef.current;
            const containerEl = containerRef.current;
            if (!titleEl || !containerEl) return;

            // Largura disponível é a largura do container (já posicionado à direita da zona segura)
            const available = containerEl.clientWidth;

            // Começa pelo tamanho atual (em px)
            const computed = window.getComputedStyle(titleEl);
            const lineHeight = parseFloat(computed.lineHeight || "0");
            let fontSize = parseFloat(computed.fontSize || "32");

            // Limites para não ficar grande demais nem pequeno demais
            const MIN = 18;   // px mínimo aceitável
            const MAX = 64;   // px máximo razoável em telas grandes
            fontSize = clamp(fontSize, MIN, MAX);

            // Aplica uma redução progressiva enquanto:
            // - o conteúdo estiver maior que a área disponível OU
            // - a altura do título exceder uma linha (quebra)
            const fits = () =>
                titleEl.scrollWidth <= available && titleEl.clientHeight <= lineHeight * 1.25;

            // Primeiro, tenta aumentar um pouquinho (caso tenha margem) até o teto
            let grew = false;
            while (fontSize < MAX) {
                titleEl.style.fontSize = `${fontSize + 1}px`;
                if (!fits()) {
                    // passou do limite; volta um passo e para
                    titleEl.style.fontSize = `${fontSize}px`;
                    break;
                }
                fontSize += 1;
                grew = true;
            }

            // Se não coube (ou não cresceu), reduz até caber
            while (!fits() && fontSize > MIN) {
                fontSize -= 1;
                titleEl.style.fontSize = `${fontSize}px`;
            }
        };

        fitTitle();
        window.addEventListener("resize", fitTitle);
        return () => window.removeEventListener("resize", fitTitle);
    }, [isVisible]);

    return (
        <section id="hero" className="hero">
            <div className="hero-overlay">
                <div
                    ref={containerRef}
                    className={`hero-text ${isVisible ? "fade-in" : ""}`}
                >
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
                        <a href="#assessments" className="hero-btn">
                            See more
                        </a>
                    </div>

                    <p className="hero-goal">
                        Our goal is to provide precise, actionable insights that empower
                        clients to thrive.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
