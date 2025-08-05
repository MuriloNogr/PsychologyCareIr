"use client";

import React from "react";
import "@/styles/note.css";

const Notes = () => {
    return (
        <div className="note-container">
            <p className="note-text">
                <span className="note-highlight">A Note on Diagnosis:</span> Assessments compare symptoms to DSM-V-TR criteria, but not all difficulties indicate a disorder. Accurate diagnosis relies on client-provided evidence (e.g., school reports, medical history). Our goal is to guide support—not labels.
                <br /><br />
                <span className="note-highlight">Licensed Practice:</span> All evaluations are conducted by PSI-registered psychologists using approved tools (tests and protocols).
            </p>
        </div>
    );
};

export default Notes;
