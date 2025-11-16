"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "./Container";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    {
        stepNumber: "01",
        title: "Discovery & Strategy",
        description:
            "We begin by diving deep into your project goals, target audience, and unique scope. This is where we build the blueprint for success and define what victory looks like.",
    },
    {
        stepNumber: "02",
        title: "Design & Prototyping",
        description:
            "I create wireframes and high-fidelity mockups using Figma, focusing on a clean, intuitive, and theme-consistent user experience. We iterate until the design is perfect.",
    },
    {
        stepNumber: "03",
        title: "Development & Animation",
        description:
            "This is where the magic happens. I bring the designs to life with clean, efficient code, modern tech stacks, and purposeful, premium animations that enhance the user experience.",
    },
    {
        stepNumber: "04",
        title: "Deploy & Optimize",
        description:
            "The project is deployed to a high-speed, scalable platform. I monitor performance, ensure fast load times, and optimize everything for a flawless launch.",
    },
];

export default function Process() {
    const sectionRef = useRef(null);
    const progressBarRef = useRef(null);
    const progressNumbersRef = useRef<(HTMLSpanElement | null)[]>([]);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                gsap.to(progressBarRef.current, {
                    scaleY: 1,
                    opacity: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1,
                    },
                });

                const steps = gsap.utils.toArray(".process-step-content");
                progressNumbersRef.current.forEach((numberEl, index) => {
                    gsap.to(numberEl, {

                        className:
                            "+=step-number is-active", 
                        scrollTrigger: {
                            trigger: steps[index] as HTMLElement,
                            start: "top center",
                            end: "bottom center",
                            toggleActions: "play reverse play reverse", 
                        },
                    });
                });
            });
        },
        { scope: sectionRef }
    );

    return (
        <section id="process" className="bg-black text-white" ref={sectionRef}>
            <Container className="py-24">
                <AnimatedTitle text="How I Work" />
                <h3 className="text-7xl md:text-6xl font-bold uppercase text-white/20 -mt-6">
                    (Process)
                </h3>
            </Container>

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 md:gap-16">

                    <div className="hidden md:block md:col-span-1">
                        <div className="sticky top-32 flex flex-col items-center">
                            <div className="relative h-96 w-1 bg-white/10 ">
                                <div
                                    ref={progressBarRef}
                                    className="absolute top-0 left-0 w-full h-full bg-white origin-top opacity-0 will-change-transform"
                                    style={{ transform: "scaleY(0)" }} 
                                />
                            </div>
                            <div className="relative flex flex-col items-center gap-16 -mt-96">
                                {processSteps.map((step, index) => (
                                    <span
                                        key={index}
                                        ref={(el) => {
                                            progressNumbersRef.current[index] = el;
                                        }}
                                        className="step-number text-sm font-medium tracking-wide" 
                                    >
                                        {step.stepNumber}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block md:col-span-3">
                        <div className="flex flex-col gap-32">
                            {processSteps.map((step) => (
                                <div
                                    key={step.stepNumber}
                                    className="process-step-content" 
                                >
                                    <h3 className="text-4xl md:text-6xl font-semibold">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg md:text-2xl text-white/60 mt-6 max-w-3xl">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden flex flex-col gap-8">
                        {processSteps.map((step) => (
                            <div
                                key={step.stepNumber}
                                className="py-6 border-b border-white/20"
                            >
                                <span className="text-4xl font-bold md:col-span-1 text-white/50">
                                    {step.stepNumber}
                                </span>
                                <h3 className="text-3xl font-semibold mt-4">
                                    {step.title}
                                </h3>
                                <p className="text-lg text-white/60 mt-4">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}