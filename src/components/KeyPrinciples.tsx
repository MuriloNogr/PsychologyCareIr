"use client";

import { ShieldCheck, BookOpenCheck, FileText } from "lucide-react";
import "@/styles/principles.css";

const KeyPrinciples = () => {
    return (
        <section className="keyprinciples-section">
            <h2 className="keyprinciples-heading">Key Principles</h2>

            <div className="keyprinciples-grid">
                {/* Card 1 */}
                <div className="keyprinciples-card">
                    <div className="keyprinciples-icon">
                        <ShieldCheck />
                    </div>
                    <h3 className="keyprinciples-title">
                        Ethical, culturally sensitive practices
                    </h3>
                    <p className="keyprinciples-text">
                        Aligned with PSI and APA guidelines for responsible psychological care.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="keyprinciples-card">
                    <div className="keyprinciples-icon">
                        <BookOpenCheck />
                    </div>
                    <h3 className="keyprinciples-title">Validated Tools</h3>
                    <p className="keyprinciples-text">
                        Use of standardized, scientifically validated assessment instruments.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="keyprinciples-card">
                    <div className="keyprinciples-icon">
                        <FileText />
                    </div>
                    <h3 className="keyprinciples-title">Clear Reporting</h3>
                    <p className="keyprinciples-text">
                        Reports with actionable, practical recommendations tailored to client needs.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default KeyPrinciples;
