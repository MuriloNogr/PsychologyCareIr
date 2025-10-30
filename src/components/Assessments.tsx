"use client";

import { JSX, useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/assessments.css";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: "800",
    display: "swap",
});

type LottieAnimation = Record<string, unknown>;

type Item = {
    title: string;
    subtitle: string;
    description: string;
    details: JSX.Element;
};

export default function Assessments() {
    const [clinicalAnimation, setClinicalAnimation] = useState<LottieAnimation | null>(null);
    const [neuralAnimation, setNeuralAnimation] = useState<LottieAnimation | null>(null);
    const [educationalAnimation, setEducationalAnimation] = useState<LottieAnimation | null>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        fetch("/clinical.json").then(r => r.json()).then(setClinicalAnimation).catch(console.error);
        fetch("/neural.json").then(r => r.json()).then(setNeuralAnimation).catch(console.error);
        fetch("/educational.json").then(r => r.json()).then(setEducationalAnimation).catch(console.error);
    }, []);

    const items: Item[] = [
        {
            title: "Clinical Psychology",
            subtitle: "Understanding Mental Health Challenges",
            description:
                "Comprehensive evaluations of emotional, behavioral, and mental health concerns to guide therapeutic interventions",
            details: (
                <div className="space-y-3 text-neutral-200/90">
                    <p className="font-semibold text-[#d58d9f]">
                        The conditions assessed include, but are not limited to:
                    </p>
                    <ul className="list-disc ml-5 space-y-2">
                        <li><strong>Autism Spectrum Disorders (ASD):</strong> Understanding social communication, behavior, and sensory needs.</li>
                        <li><strong>Anxiety Disorders:</strong> Generalized anxiety, social anxiety, phobias, panic disorders, and separation anxiety.</li>
                        <li><strong>Depressive & Mood Disorders:</strong> Persistent sadness and mood fluctuations (e.g., DMDD).</li>
                        <li><strong>Disruptive Behavior & Regulation Disorders:</strong> Emotional/behavioral control challenges (ODD, Conduct Disorder).</li>
                        <li><strong>Other Childhood & Adolescent Challenges:</strong> School refusal and behavioral issues affecting learning and social functioning.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Clinical Neuropsychology",
            subtitle: "Core cognitive processes that underlie learning and behavior",
            description:
                "Assessment of cognitive functions (e.g., memory, attention, executive skills) affected by neurological conditions, injuries, or developmental disorders.",
            details: (
                <div className="space-y-3 text-neutral-200/90">
                    <ul className="list-disc ml-5 space-y-2">
                        <li><strong>Attention:</strong> Focused, sustained, alternating, divided.</li>
                        <li><strong>Executive Functions:</strong> Planning, reasoning, organization, inhibitory control.</li>
                        <li><strong>Memory systems:</strong> Working memory, semantic and episodic long-term memory.</li>
                        <li><strong>Processing Speed.</strong></li>
                    </ul>
                    <p><strong>ADHD</strong> involves challenges with attention and impulse control.</p>
                    <p><strong>Intellectual Disability</strong> affects conceptual understanding, practical and social skills.</p>
                </div>
            ),
        },
        {
            title: "Educational Psychology",
            subtitle: "Assessment of core academic skills",
            description:
                "Identification of learning challenges (e.g., dyslexia, dyscalculia) to inform academic accommodations and support strategies.",
            details: (
                <div className="space-y-3 text-neutral-200/90">
                    <p>Struggling in school can stem from undiagnosed learning challenges:</p>
                    <ul className="list-disc ml-5 space-y-2">
                        <li><strong>Literacy:</strong> Reading fluency, comprehension, and writing.</li>
                        <li><strong>Mathematics:</strong> Computation, conceptual understanding, application.</li>
                    </ul>
                    <p className="font-semibold text-[#d58d9f]">
                        Our goal is to pinpoint disorders like Dyslexia and Dyscalculia and secure accommodations.
                    </p>
                </div>
            ),
        },
    ];

    const pickAnimation = (title: string) => {
        if (title === "Clinical Psychology") return clinicalAnimation;
        if (title === "Clinical Neuropsychology") return neuralAnimation;
        if (title === "Educational Psychology") return educationalAnimation;
        return null;
    };

    const ease = [0.22, 1, 0.36, 1] as const;

    return (
        <section id="assessments" className="assessments-section">
            <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                <div className="max-w-5xl mx-auto">
                    <h2 className={`assessments-title ${notoSans.className}`}>Our Services</h2>

                    <div className="space-y-8 lg:space-y-10">
                        {items.map((item, idx) => {
                            const isOpen = openIndex === idx;
                            const animationData = pickAnimation(item.title);

                            return (
                                <div key={item.title} className="group">
                                    {/* Card é um único botão — NADA de botão dentro */}
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                        aria-expanded={isOpen}
                                        className="w-full text-left"
                                    >
                                        <motion.div
                                            layout
                                            transition={{ duration: 0.35, ease }}
                                            className={`assessments-item ${isOpen ? "is-open" : ""}`}
                                        >
                                            {/* Ícone */}
                                            <div className="assessments-icon flex items-center justify-center">
                                                {animationData ? (
                                                    <Lottie animationData={animationData} loop style={{ width: "100%", height: "100%" }} />
                                                ) : (
                                                    <div className="w-full h-full" />
                                                )}
                                            </div>

                                            {/* Conteúdo */}
                                            <div className="grow pr-2">
                                                <div className="assessments-head">
                                                    <h3 className={`assessments-h3 ${notoSans.className}`}>{item.title}</h3>

                                                    {/* Seta agora é SPAN para evitar nested button */}
                                                    <motion.span
                                                        aria-hidden
                                                        initial={false}
                                                        animate={{ rotate: isOpen ? 90 : 0 }}
                                                        transition={{ duration: 0.3, ease }}
                                                        className="assessments-arrowbtn"
                                                    >
                                                        →
                                                    </motion.span>
                                                </div>

                                                <p className="assessments-desc">{item.description}</p>

                                                <AnimatePresence initial={false}>
                                                    {isOpen && (
                                                        <motion.div
                                                            key="content"
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.4, ease }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-4 md:pt-5">
                                                                <p className="mt-1 text-[#b2c4fd] text-sm sm:text-base md:text-lg">
                                                                    {item.subtitle}
                                                                </p>
                                                                {item.details}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </motion.div>
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    <div className="note-container1">
                        <p className="note-text1">
              <span className="note-highlight1">
                Our goal is to provide precise, actionable insights that empower clients to thrive.
              </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
