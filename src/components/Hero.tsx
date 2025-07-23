"use client";

import { useEffect, useState } from "react";
import "@/styles/hero.css";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 200);
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="hero-overlay">
                <div className={`hero-text ${isVisible ? "fade-in" : ""}`}>
                    <div className="hero-title-combined">
                        <h1 className="shiny-text text-4xl md:text-6xl font-extrabold text-center">
                            Midwest Psychological Assessments
                        </h1>
                    </div>

                    <p className="shiny-text text-lg md:text-xl font-semibold text-center max-w-4xl">
                        We provide specialized assessment services in clinical psychology, focusing on emotional, behavioral, and psychological well-being; clinical neuropsychology, evaluating cognitive functions such as memory, attention, and executive skills; and educational psychology, addressing core academic skills like reading, writing, comprehension, and mathematical reasoning to identify unique learning needs and challenges.
                    </p>

                    <div className="hero-btn-container">
                        <a href="#assessments" className="hero-btn">
                            See more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
