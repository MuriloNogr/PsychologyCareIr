"use client";

import React from "react";
import "@/styles/faqs.css";

const faqs = [
    {
        question: "What is a psychological assessment?",
        answer:
            "A structured evaluation of cognitive, emotional, or academic functioning using interviews, tests, and observations.",
    },
    {
        question: "Who benefits from an assessment?",
        answer:
            "Children/adults with learning, behavioral, or mental health concerns, or those seeking diagnostic clarity.",
    },
    {
        question: "How should I prepare?",
        answer:
            "Bring relevant records (medical, educational) and ensure adequate rest. For children, explain the process as 'understanding how you learn.'",
    },
    {
        question: "Are results confidential?",
        answer:
            "Yes. Shared only with written consent, except in legally mandated cases.",
    },
    {
        question: "How do I book an appointment?",
        answer:
            "Contact us via phone or email for scheduling and fee details.",
    },
];

export default function Faqs() {
    return (
        <section id="faqs" className="faq-section">
            <div className="faq-grid">
                <div className="faq-intro">
                    <h2 className="faq-title">
                        Frequently
                        <br /> asked questions
                    </h2>
                    <p className="faq-subtitle">
                        Answers to the most frequently asked questions.
                    </p>
                </div>

                <div className="faq-accordion">
                    {faqs.map((faq, index) => (
                        <details className="faq-item" key={index}>
                            <summary className="faq-question">{faq.question}</summary>
                            <p className="faq-answer">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}