"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "./Container";
import AnimatedTitle from "./AnimatedTitle";
import { Brain, Terminal, Cpu, MapPin, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        role: "Agentic AI Developer",
        company: "VMakers Technology PVT LTD",
        location: "Remote / Bihar, India",
        period: "MAR 2026 - Present",
        icon: Brain,
        description: "Architecting and building autonomous AI agentic workflows. Integrating LLMs with tool-calling capabilities to automate complex processes.",
        achievements: [
            "Designed multi-agent systems using LangGraph for automated content creation and codebase analysis.",
            "Built custom tools and API connectors for agents to interact with third-party services securely.",
            "Optimized LLM prompt design and structured output validation to achieve 95%+ execution accuracy."
        ],
        skills: ["Next.js", "Python", "LangChain", "Gemini API", "Groq", "TypeScript", "Vector Databases"]
    },
    {
        role: "Web Dev Intern",
        company: "VAULT OF CODE",
        location: "Remote",
        period: "AUG 2025 - DEC 2025",
        icon: Terminal,
        description: "Developed modern, responsive front-end and back-end features for client web applications. Translated Figma designs into high-performance React code.",
        achievements: [
            "Implemented dynamic dashboards and custom UI components using Next.js and Tailwind CSS.",
            "Created smooth micro-animations and transitions using GSAP and Framer Motion.",
            "Integrated RESTful APIs and set up database collections in MongoDB and Supabase."
        ],
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "MongoDB", "Git"]
    },
    {
        role: "AI/ML Intern",
        company: "EDUNET FOUNDATION",
        location: "Hybrid / Bihar, India",
        period: "MAY 2025 - JUL 2025",
        icon: Cpu,
        description: "Explored machine learning algorithms, model training, and data analysis pipelines. Built predictive models and integrated them into web apps.",
        achievements: [
            "Preprocessed large datasets, handled outliers, and trained regression/classification models.",
            "Integrated machine learning models into lightweight web apps using Flask and React.",
            "Participated in hackathons and group projects focused on social impact using computer vision."
        ],
        skills: ["Python", "Pandas", "Scikit-Learn", "Flask", "Machine Learning", "TensorFlow"]
    }
];

const Experience = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Animate timeline vertical line drawing down
            gsap.to(lineRef.current, {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 25%",
                    end: "bottom 75%",
                    scrub: true,
                },
            });

            // Animate each timeline element
            const items = gsap.utils.toArray(".experience-item");
            items.forEach((item: any) => {
                const dot = item.querySelector(".timeline-dot");
                const card = item.querySelector(".timeline-card");
                const date = item.querySelector(".timeline-date");

                gsap.from(dot, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    }
                });

                gsap.from(card, {
                    x: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    }
                });

                if (date) {
                    gsap.from(date, {
                        x: -50,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        }
                    });
                }
            });
        },
        { scope: sectionRef }
    );

    return (
        <section id="experience" className="bg-black text-white py-24 mx-auto relative overflow-hidden" ref={sectionRef}>
            {/* Background highlights for premium feel */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
            
            <Container>
                <div className="mb-20">
                    <AnimatedTitle text="My Journey" />
                    <h3 className="text-5xl md:text-6xl font-bold uppercase text-white/10 -mt-2 md:-mt-4">
                        (Experience)
                    </h3>
                </div>

                <div className="relative mt-16 max-w-5xl mx-auto">
                    {/* Vertical Timeline line */}
                    <div className="absolute left-12 md:left-[392px] top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
                        <div
                            ref={lineRef}
                            className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-white via-white/80 to-transparent origin-top scale-y-0"
                        />
                    </div>

                    <div className="space-y-16 experience-list">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="experience-item flex flex-col md:flex-row gap-6 md:gap-12 relative items-start group"
                            >
                                {/* Left Column (Desktop Date/Company) */}
                                <div className="timeline-date hidden md:block w-80 text-right py-2 shrink-0">
                                    <span className="text-xs font-semibold text-white/40 tracking-wider uppercase flex items-center justify-end gap-1.5">
                                        <Calendar size={12} className="text-white/30" />
                                        {exp.period}
                                    </span>
                                    <h3 className="text-white font-bold text-xl mt-1.5">{exp.company}</h3>
                                    <p className="text-white/60 text-sm mt-1 flex items-center justify-end gap-1">
                                        <MapPin size={12} className="text-white/30" />
                                        {exp.location}
                                    </p>
                                </div>

                                {/* Center Column (Timeline Node) */}
                                <div className="timeline-dot absolute left-6 md:relative md:left-0 w-12 flex justify-center py-2 shrink-0 z-10">
                                    <div className="w-12 h-12 rounded-full border border-white/10 bg-[#0E0E0E] flex items-center justify-center transition-all duration-300 group-hover:border-white/30 group-hover:scale-110 shadow-depth shadow-black/50 text-white/50 group-hover:text-white">
                                        <exp.icon size={20} />
                                    </div>
                                </div>

                                {/* Right Column (Experience Card) */}
                                <div className="timeline-card w-full pl-20 md:pl-0">
                                    <div className="p-6 md:p-8 bg-[#0E0E0E] backdrop-blur-sm rounded-3xl border border-white/5 shadow-lg shadow-black/50 transition-all duration-300 hover:border-white/10 hover:bg-[#121212] group-hover:shadow-white/5">
                                        {/* Mobile Header */}
                                        <div className="md:hidden mb-4">
                                            <span className="text-xs font-semibold text-white/40 tracking-wider uppercase flex items-center gap-1.5">
                                                <Calendar size={12} className="text-white/30" />
                                                {exp.period}
                                            </span>
                                            <h3 className="text-white font-bold text-lg mt-1">{exp.company}</h3>
                                            <p className="text-white/60 text-xs mt-1 flex items-center gap-1">
                                                <MapPin size={12} className="text-white/30" />
                                                {exp.location}
                                            </p>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                                        <p className="text-white/70 text-sm md:text-base mt-3 leading-relaxed">{exp.description}</p>
                                        
                                        <ul className="mt-4 space-y-2">
                                            {exp.achievements.map((ach, idx) => (
                                                <li key={idx} className="flex gap-2 text-white/60 text-sm leading-relaxed">
                                                    <span className="text-white/40 font-semibold mt-1 shrink-0">•</span>
                                                    <span>{ach}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <span key={skill} className="bg-white/5 text-white/80 text-xs px-3 py-1 rounded-full border border-white/5">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Experience;
