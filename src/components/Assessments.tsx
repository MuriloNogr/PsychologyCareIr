"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/assessments.css"; // Arquivo de estilos atualizado
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: "800",
    display: "swap",
});

const assessments = [
    {
        title: "Neurodevelopmental Disorders",
        description:
            "Assessments for conditions such as Intellectual Developmental Disorders (Intellectual Disability), Autism Spectrum Disorder, Attention-Deficit/Hyperactivity Disorder (ADHD), and Specific Learning Disorders, including Dyslexia and Dyscalculia.",
        image: "/ImagePlaceholder.png",
        link: "/assessments/neurodevelopmental",
    },
    {
        title: "Anxiety and Mood Disorders",
        description:
            "Evaluations addressing Depressive Disorders and a range of Anxiety Disorders, including Separation Anxiety, Specific Phobia, Social Anxiety, Panic Disorder, Agoraphobia, and Generalized Anxiety Disorder.",
        image: "/ImagePlaceholder.png",
        link: "/assessments/anxiety",
    },
    {
        title: "Behavioral and Impulse-Control Disorders",
        description:
            "Focused assessments for Disruptive and Impulse-Control conditions like Oppositional Defiant Disorder (ODD) and Intermittent Explosive Disorder (IED).",
        image: "/ImagePlaceholder.png",
        link: "/assessments/behavioral",
    },
];

const Assessments = () => {
    const [animatedIndexes, setAnimatedIndexes] = useState<number[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        assessments.forEach((_, index) => {
                            setTimeout(() => {
                                setAnimatedIndexes((prev) => [...prev, index]);

                                // Remove o efeito após 1 segundo para resetar
                                setTimeout(() => {
                                    setAnimatedIndexes((prev) =>
                                        prev.filter((i) => i !== index)
                                    );
                                }, 1000);
                            }, index * 500); // Delay ajustado para garantir que o último receba a animação
                        });

                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 } // Aciona quando 30% da seção estiver visível
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="assessments" className="assessments-section">
            <h2 className={`assessments-title ${notoSans.className}`}>
                ASSESSMENTS PROVIDED
            </h2>
            <div className="assessments-grid">
                {assessments.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className={`assessment-card ${
                            animatedIndexes.includes(index) ? "flash-hover" : ""
                        }`}
                    >
                        <div className="assessment-gradient"></div>
                        <div className="assessment-image">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={250}
                                className="assessment-img"
                            />
                        </div>
                        <h3 className="assessment-title">{item.title}</h3>
                        <p className="assessment-description">{item.description}</p>
                        {/* See More aparece no hover */}
                        <div className="see-more">
                            See more <span className="arrow">→</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Assessments;
