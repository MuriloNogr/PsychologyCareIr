"use client";

import React from "react";
import "@/styles/note.css";

const Notes = () => {
    return (
        <section className="note-section">
            <div className="note-container">
                <h2 className="note-title">A Note on Diagnosis</h2>

                <p className="note-text">
                    Assessments compare symptoms to <span className="highlight">DSM-V-TR criteria</span>,
                    but not all difficulties indicate a disorder.
                </p>

                <p className="note-text">
                    Accurate diagnosis relies on <span className="highlight">client-provided evidence</span>
                    (e.g., school reports, medical history). Our goal is to guide support—not labels.
                </p>

                <div className="note-card">
                    <h3 className="note-subtitle">Licensed Practice</h3>
                    <p>
                        All evaluations are conducted by <span className="highlight">PSI-registered psychologists</span>
                        using approved tools (tests and protocols).
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Notes;

