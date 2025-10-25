"use client";

import { MessageSquare, FlaskConical, FileText, Timer } from "lucide-react";
import "@/styles/process.css";

export default function AssessmentProcess() {
    return (
        <section id="process" className="w-full py-20 px-4 text-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-[#d58d9f] mb-16">
                    The Assessment Process
                </h2>

                <div>
                    {/* Step 1 — Initial Consultation */}
                    <div className="group relative flex gap-x-6">
                        <div className="relative group-last:after:hidden after:absolute after:top-10 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-px after:bg-[#d58d9f]/60">
                            <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#d58d9f] shadow ring-2 ring-white/10">
                                <MessageSquare className="size-5 text-white" />
                            </div>
                        </div>
                        <div className="grow pb-16 group-last:pb-0">
                            <h3 className="mb-1 text-sm font-medium text-[#d58d9f]">Step 1</h3>
                            <p className="font-semibold text-base">Initial Consultation (1 hour)</p>
                            <p className="mt-2 text-sm text-white/80">
                                Discussion of concerns, history, and goals.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 — Testing & Analysis */}
                    <div className="group relative flex gap-x-6">
                        <div className="relative group-last:after:hidden after:absolute after:top-10 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-px after:bg-[#d58d9f]/60">
                            <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#d58d9f] shadow ring-2 ring-white/10">
                                <FlaskConical className="size-5 text-white" />
                            </div>
                        </div>
                        <div className="grow pb-16 group-last:pb-0">
                            <h3 className="mb-1 text-sm font-medium text-[#d58d9f]">Step 2</h3>
                            <p className="font-semibold text-base">Testing & Analysis (6+ hours)</p>
                            <p className="mt-2 text-sm text-white/80">
                                Standardized assessments, interviews, and clinical interpretation.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 — Feedback & Report */}
                    <div className="group relative flex gap-x-6">
                        <div className="relative group-last:after:hidden after:absolute after:top-10 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-px after:bg-[#d58d9f]/60">
                            <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#d58d9f] shadow ring-2 ring-white/10">
                                <FileText className="size-5 text-white" />
                            </div>
                        </div>
                        <div className="grow pb-16 group-last:pb-0">
                            <h3 className="mb-1 text-sm font-medium text-[#d58d9f]">Step 3</h3>
                            <p className="font-semibold text-base">
                                Feedback & Report (1-hour session + 5–10h drafting)
                            </p>
                            <p className="mt-2 text-sm text-white/80">
                                Includes detailed findings, diagnoses (if applicable), and tailored recommendations.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 — Timeline */}
                    <div className="group relative flex gap-x-6">
                        <div className="relative">
                            <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#d58d9f] shadow ring-2 ring-white/10">
                                <Timer className="size-5 text-white" />
                            </div>
                        </div>
                        <div className="grow">
                            <h3 className="mb-1 text-sm font-medium text-[#d58d9f]">Timeline</h3>
                            <p className="font-semibold text-base">60–90 days for completion</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
