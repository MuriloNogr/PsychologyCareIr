"use client";

import Image from "next/image";
import { ShieldCheck, EyeOff, Scale, GraduationCap } from "lucide-react";
import "@/styles/ethical.css";

const EthicalFramework = () => {
    return (
        <section id="ethic" className="ethical-section">
            <div className="ethical-wrapper">
                <div className="ethical-grid">
                    <div className="ethical-tabs">
                        <h2 className="ethical-title">Ethical Framework</h2>
                        <nav className="ethical-tab-list" role="tablist" aria-orientation="vertical">
                            <button className="ethical-tab active" role="tab">
                <span className="flex gap-x-6">
                  <ShieldCheck className="ethical-icon" />
                  <span className="grow">
                    <span className="ethical-tab-title">Informed Consent:</span>
                    <span className="ethical-tab-desc"> Clear explanation of procedures and purpose.</span>
                  </span>
                </span>
                            </button>
                            <button className="ethical-tab" role="tab">
                <span className="flex gap-x-6">
                  <EyeOff className="ethical-icon" />
                  <span className="grow">
                    <span className="ethical-tab-title">Confidentiality:</span>
                    <span className="ethical-tab-desc"> Strict adherence to GDPR; no disclosure without written consent.</span>
                  </span>
                </span>
                            </button>
                            <button className="ethical-tab" role="tab">
                <span className="flex gap-x-6">
                  <Scale className="ethical-icon" />
                  <span className="grow">
                    <span className="ethical-tab-title">Fairness:</span>
                    <span className="ethical-tab-desc"> Unbiased, culturally adapted evaluations.</span>
                  </span>
                </span>
                            </button>
                            <button className="ethical-tab" role="tab">
                <span className="flex gap-x-6">
                  <GraduationCap className="ethical-icon" />
                  <span className="grow">
                    <span className="ethical-tab-title">Competence:</span>
                    <span className="ethical-tab-desc"> Licensed psychologists using evidence-based methods.</span>
                  </span>
                </span>
                            </button>
                        </nav>
                    </div>

                    <div className="ethical-image-wrapper">
                        <div>
                            <Image
                                src="/psychology.svg"
                                width={560}
                                height={720}
                                alt="Ethical Psychology"
                                className="ethical-image"
                            />
                        </div>
                        <div className="ethical-svg">
                            <svg
                                className="ethical-svg-icon"
                                width="121"
                                height="135"
                                viewBox="0 0 121 135"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="ethical-bg"></div>
            </div>
        </section>
    );
};

export default EthicalFramework;
