"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/ethical.css";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: "800",
    display: "swap",
});

const ethicalTopics = [
    {
        title: "Integrity and Trust",
        description:
            "Psychologists uphold honesty, transparency, and professional boundaries in every interaction, ensuring trust and confidence in the therapeutic process.",
        link: "/ethics/integrity",
    },
    {
        title: "Respect for Rights and Dignity",
        description:
            "We prioritize respect for individual autonomy, privacy, and diversity, creating an inclusive, judgment-free environment for everyone we serve.",
        link: "/ethics/respect",
    },
    {
        title: "Beneficence and Nonmaleficence",
        description:
            "Our work is guided by a commitment to promote well-being while minimizing harm. Each assessment, intervention, and recommendation is carried out with the highest care and responsibility.",
        link: "/ethics/beneficence",
    },
];

const EthicalCommitment = () => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(".ethical-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8 && !animated) {
                    setAnimated(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [animated]);

    return (
        <section className="ethical-section">
            <div className="ethical-container">
                {/* Texto */}
                <div className="ethical-text">
                    <h2 className={`ethical-title ${notoSans.className}`}>ETHICAL COMMITMENT</h2>

                    {ethicalTopics.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={`ethical-item ${animated ? "flash-hover" : ""}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <h3 className="ethical-subtitle">{item.title}</h3>
                            <p>{item.description}</p>
                            {/* See More aparece no hover */}
                            <div className="see-more">
                                See more <span className="arrow">→</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Imagem */}
                <div className="ethical-image">
                    <Image
                        src="/ImagePlaceholder.png"
                        alt="Psychologist nurturing a brain with plants"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
};

export default EthicalCommitment;
