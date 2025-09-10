"use client";

import React, { JSX, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import "@/styles/team.css";

type Member = {
    name: string;
    role: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    content: () => JSX.Element;
};

const members: Member[] = [
    {
        name: "Vanessa Clyne",
        role: "Psychologist & Assessment Specialist",
        src: "/VanessaClyne.jpeg",
        ctaText: "Saiba mais",
        ctaLink: "#",
        content: () => (
            <div>
                <p>
                    <strong>Qualifications:</strong>
                    <br />
                    - BSc in Psychology (UniFMU)
                    <br />
                    - BA in Primary Education (UNIFAI)
                    <br />
                    - Postgraduate in Psychopedagogy (Learning Disabilities)
                    <br />
                    - MSc in Clinical Neuropsychology (Universidad Europea Miguel de Cervantes)
                </p>
                <br />
                <p>
                    <strong>Expertise:</strong> Cognitive-behavioral therapy, psychodiagnostics, and
                    neurodevelopmental assessments.
                </p>
            </div>
        ),
    },
    {
        name: "Mervyn Clyne",
        role: "Administration & Quality Control",
        src: "/MervynClyne.jpeg",
        ctaText: "Saiba mais",
        ctaLink: "#",
        content: () => (
            <div>
                <p>Ensures compliance, data security, and client-centered service.</p>
                <p>Manages appointments, records, and ethical standards.</p>
            </div>
        ),
    },
];

export default function Team() {
    const [active, setActive] = useState<Member | null>(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        document.body.style.overflow = active ? "hidden" : "auto";

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    // @ts-expect-error - Gambiarra
    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {active && (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.name}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="absolute top-2 right-2 z-20 bg-white rounded-full h-8 w-8 flex items-center justify-center"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.name}-${id}`}
                            ref={ref}
                            className="w-full max-w-[800px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
                        >
                            {/* Modal imagem */}
                            <motion.div
                                layoutId={`image-${active.name}-${id}`}
                                className="team-modal-img-wrapper"
                            >
                                <Image
                                    src={active.src}
                                    alt={active.name}
                                    width={1200}
                                    height={1600}
                                    className="team-modal-img"
                                />
                            </motion.div>
                            <div className="p-6">
                                <motion.h3
                                    layoutId={`title-${active.name}-${id}`}
                                    className="text-xl font-bold text-neutral-800 dark:text-white"
                                >
                                    {active.name}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${active.role}-${id}`}
                                    className="text-sm text-neutral-600 dark:text-neutral-400 mb-4"
                                >
                                    {active.role}
                                </motion.p>
                                <motion.div className="text-neutral-700 dark:text-neutral-300 text-sm space-y-2">
                                    {active.content()}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold md:text-5xl text-white">Our team</h2>
                </div>

                <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {members.map((member) => (
                        <motion.li
                            key={member.name}
                            layoutId={`card-${member.name}-${id}`}
                            onClick={() => setActive(member)}
                            className="team-card text-center cursor-pointer w-[280px] md:w-[340px]"
                        >
                            {/* Thumbnail */}
                            <motion.div
                                layoutId={`image-${member.name}-${id}`}
                                className="team-thumb"
                            >
                                <Image
                                    src={member.src}
                                    alt={member.name}
                                    fill
                                    className="team-thumb-img"
                                />
                            </motion.div>
                            <div className="mt-4">
                                <motion.h3
                                    layoutId={`title-${member.name}-${id}`}
                                    className="text-base font-semibold md:text-lg text-gray-100"
                                >
                                    {member.name}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${member.role}-${id}`}
                                    className="text-xs md:text-sm text-gray-400"
                                >
                                    {member.role}
                                </motion.p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export const CloseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-black"
    >
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);
