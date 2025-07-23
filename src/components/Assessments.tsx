"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import "@/styles/assessments.css";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: "800",
    display: "swap",
});

const assessments = [
    {
        title: "Clinical Psychology",
        description:
            "Comprehensive evaluations of emotional, behavioral, and mental health concerns to guide therapeutic interventions",
        type: "lottie",
        link: "/assessments/Psychology",
    },
    {
        title: "Clinical Neuropsychology",
        description:
            "Assessment of cognitive functions (e.g., memory, attention, executive skills) affected by neurological conditions, injuries, or developmental disorders.",
        type: "lottie",
        link: "/assessments/Neuropsychology",
    },
    {
        title: "Educational Psychology",
        description:
            "Identification of learning challenges (e.g., dyslexia, dyscalculia) to inform academic accommodations and support strategies.",
        type: "lottie",
        link: "/assessments/Educational",
    },
];

const Assessments = () => {
    const [animatedIndexes, setAnimatedIndexes] = useState<number[]>([]);
    const [clinicalAnimation, setClinicalAnimation] = useState<any>(null);
    const [neuralAnimation, setNeuralAnimation] = useState<any>(null);
    const [educationalAnimation, setEducationalAnimation] = useState<any>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Carrega as animações Lottie
    useEffect(() => {
        fetch("/clinical.json")
            .then((res) => res.json())
            .then(setClinicalAnimation)
            .catch((err) => console.error("Erro ao carregar clinical.json:", err));

        fetch("/neural.json")
            .then((res) => res.json())
            .then(setNeuralAnimation)
            .catch((err) => console.error("Erro ao carregar neural.json:", err));

        fetch("/educational.json")
            .then((res) => res.json())
            .then(setEducationalAnimation)
            .catch((err) => console.error("Erro ao carregar educational.json:", err));
    }, []);

    // Animação dos cards ao entrar na viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        assessments.forEach((_, index) => {
                            setTimeout(() => {
                                setAnimatedIndexes((prev) => [...prev, index]);
                                setTimeout(() => {
                                    setAnimatedIndexes((prev) =>
                                        prev.filter((i) => i !== index)
                                    );
                                }, 1000);
                            }, index * 500);
                        });

                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="assessments" className="assessments-section">
            <h2 className={`assessments-title ${notoSans.className}`}>
                Our Services
            </h2>
            <div className="assessments-grid">
                {assessments.map((item, index) => {
                    const isLottie = item.type === "lottie";
                    let animationToRender = null;

                    switch (item.title) {
                        case "Clinical Psychology":
                            animationToRender = clinicalAnimation;
                            break;
                        case "Clinical Neuropsychology":
                            animationToRender = neuralAnimation;
                            break;
                        case "Educational Psychology":
                            animationToRender = educationalAnimation;
                            break;
                        default:
                            animationToRender = null;
                    }

                    return (
                        <Link
                            key={index}
                            href={item.link}
                            className={`assessment-card ${
                                animatedIndexes.includes(index) ? "flash-hover" : ""
                            } ${notoSans.className}`} // 👈 Fonte aplicada no card
                        >
                            <div className="assessment-gradient"></div>
                            <div className="assessment-image">
                                {isLottie && animationToRender ? (
                                    <Lottie
                                        animationData={animationToRender}
                                        loop
                                        style={{ width: 250, height: 250 }}
                                    />
                                ) : item.image ? (
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={250}
                                        className="assessment-img"
                                    />
                                ) : null}
                            </div>
                            <h3 className="assessment-title">{item.title}</h3>
                            <p className="assessment-description">{item.description}</p>
                            <div className="see-more">
                                See more <span className="arrow">→</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Assessments;
