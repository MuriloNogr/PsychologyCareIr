"use client";

import "@/styles/conditions.css";

const ConditionsAssessed = () => {
    return (
        <section className="conditions-section">
            <h2 className="conditions-title">Conditions Assessed</h2>
            <div className="conditions-grid">
                {/* Card 1 */}
                <div className="conditions-card">
                    <h3 className="conditions-card-title">Neurodevelopmental Disorders</h3>
                    <ul className="conditions-list">
                        <li><strong>ADHD:</strong> Inattention, hyperactivity, impulsivity.</li>
                        <li><strong>Autism Spectrum:</strong> Social interaction, communication, and repetitive behaviors.</li>
                        <li><strong>Learning Disabilities:</strong> Reading, writing, and math challenges.</li>
                    </ul>
                </div>

                {/* Card 2 */}
                <div className="conditions-card">
                    <h3 className="conditions-card-title">Mental Health Conditions</h3>
                    <ul className="conditions-list">
                        <li><strong>Anxiety:</strong> Excessive worry, fear, and avoidance behaviors.</li>
                        <li><strong>Depression:</strong> Mood changes, sleep issues, loss of interest.</li>
                        <li><strong>Behavioral Disorders:</strong> Oppositional defiance, conduct issues.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ConditionsAssessed;
