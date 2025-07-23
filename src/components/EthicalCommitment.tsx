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

// #3a385d – azul escuro (fundo principal)
// #d58d9f – rosa claro (destaques e botões)
// #b2c4fd – azul suave (detalhes e contraste)
// #b2677c – rosa queimado (elementos secundários)

const ethicalTopics = [
    {
        title: "Integrity and Trust",
        description:
            "Ethical, culturally sensitive practices aligned with PSI/APA guidelines.",
        link: "/ethics/integrity",
    },
    {
        title: "Respect for Rights and Dignity",
        description:
            "Standardized, validated assessment tools.",
        link: "/ethics/respect",
    },
    {
        title: "Beneficence and Nonmaleficence",
        description:
            "Clear reporting with practical recommendations. ",
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
