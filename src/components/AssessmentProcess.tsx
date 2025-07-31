"use client";

import React from "react";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";

const AssessmentProcess = () => {
    return (
        <section className="w-full px-4 py-16 text-white">
            <h2 className="text-3xl font-bold text-center text-[#d58d9f] mb-10">
                The Assessment Process
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                {/* Card 1 */}
                <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px] bg-[#b2677c] relative overflow-hidden">
                    <div className="max-w-lg z-10 relative">
                        <h3 className="text-2xl font-semibold">
                            1. Initial Consultation (1 hour)
                        </h3>
                        <p className="mt-4 text-white/90">
                            Discussion of concerns, history, and goals.
                        </p>
                    </div>
                    <div className="absolute -right-10 bottom-0 w-[400px] h-[240px]">
                        <Image
                            src="/process1.png"
                            alt="Step 1"
                            fill
                            className="object-contain rounded-2xl"
                        />
                    </div>
                </WobbleCard>

                {/* Card 2 */}
                <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#b2c4fd]">
                    <div className="max-w-lg text-[#3a385d]">
                        <h3 className="text-2xl font-semibold">
                            2. Testing & Analysis (6+ hours)
                        </h3>
                        <p className="mt-4">
                            Standardized assessments, interviews, and clinical interpretation.
                        </p>
                    </div>
                </WobbleCard>

                {/* Card 3 */}
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[300px] bg-[#d58d9f] relative overflow-hidden">
                    <div className="max-w-lg z-10 relative">
                        <h3 className="text-2xl font-semibold">
                            3. Feedback & Report (1-hour session + 5–10h drafting)
                        </h3>
                        <p className="mt-4 text-white/90">
                            Includes detailed findings, diagnoses (if applicable), and
                            tailored recommendations.
                        </p>
                    </div>
                    <div className="absolute -right-10 bottom-0 w-[400px] h-[240px]">
                        <Image
                            src="/process1.png"
                            alt="Step 3"
                            fill
                            className="object-contain rounded-2xl"
                        />
                    </div>
                </WobbleCard>
            </div>

            <p className="text-center mt-10 text-[#d58d9f]">
                Timeline: 60–90 days for completion.
            </p>
        </section>
    );
};

export default AssessmentProcess;
