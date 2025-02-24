"use client";

import { useEffect, useState } from "react";
import "@/styles/hero.css";

// const notoSans = Noto_Sans({
//     subsets: ["latin"],
//     weight: "800",
//     display: "swap",
// });

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 200);
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="aurora-container">
                <div className="aurora"></div>
                <div className="aurora"></div>
                <div className="aurora"></div>
                <div className="aurora"></div>
                <div className="aurora"></div>
                <div className="aurora"></div>
            </div>

            <div className="hero-container">
                <div className={`hero-text ${isVisible ? "fade-in" : ""}`}>
                    <div className="hero-title-container">
                        <img src="/heroTitle.svg" alt="Assessment Services" className="hero-title-svg" />
                    </div>
                    <p>
                        We provide specialized assessment services in clinical psychology, focusing on emotional, behavioral,
                        and psychological well-being; clinical neuropsychology, evaluating cognitive functions such as memory,
                        attention, and executive skills; and educational psychology, addressing core academic skills like reading,
                        writing, comprehension, and mathematical reasoning to identify unique learning needs and challenges.
                    </p>
                    <div className="hero-btn-container">
                        <a href="#assessments" className="hero-btn">See more</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
