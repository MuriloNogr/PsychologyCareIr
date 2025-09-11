"use client";

import React from "react";
import "@/styles/approach.css";
import { ShieldCheck, Lock, CheckCircle } from "lucide-react";

const Approach = () => {
    return (
        <section className="approach-section">
            <div className="approach-wrapper">
                <h2 className="approach-title">Clarity Through Expert Assessment</h2>
                <p className="approach-intro">
                    We utilize validated, gold-standard assessment tools to provide clear
                    reports with practical, actionable recommendations for therapy,
                    education, or workplace planning.
                </p>

                <h3 className="approach-subtitle">Our Approach:</h3>

                <div className="approach-grid">
                    <div className="approach-card">
                        <div className="approach-icon">
                            <ShieldCheck size={28} />
                        </div>
                        <div>
                            <h4 className="approach-card-title">Ethical Practice</h4>
                            <p className="approach-card-text">
                                Our methods are unbiased, culturally sensitive, and strictly
                                aligned with PSI and APA guidelines.
                            </p>
                        </div>
                    </div>

                    <div className="approach-card">
                        <div className="approach-icon">
                            <Lock size={28} />
                        </div>
                        <div>
                            <h4 className="approach-card-title">Strict Confidentiality</h4>
                            <p className="approach-card-text">
                                All services are conducted in full compliance with GDPR.
                                Information is never disclosed without written consent.
                            </p>
                        </div>
                    </div>

                    <div className="approach-card">
                        <div className="approach-icon">
                            <CheckCircle size={28} />
                        </div>
                        <div>
                            <h4 className="approach-card-title">Clear & Practical</h4>
                            <p className="approach-card-text">
                                We ensure you understand the process and leave with insights
                                that lead to tangible next steps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach;
