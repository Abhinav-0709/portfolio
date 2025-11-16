"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionTitleMarquee from "./SectionTitleMarquee";
import { ArrowRight, Check } from "lucide-react"; 
import { FaGithub } from "react-icons/fa"; 


gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const stickyCardsData = [
        {
            index: 1,
            title: "CampusCopilot",
            image:
                "/images/campus-copilot.png",
            description:
                "AI assistant for college students with reminders, campus FAQs, and notes automation.",
            keyPoints: [
                "LLM-powered Q&A",
                "Automated PDF summarization",
                "Event reminder system",
            ],
            techStack: ["Next.js", "Python", "LangChain", "Supabase"],
            githubUrl: "https://github.com/Abhinav-0709/campus-copilot",
        },
        {
            index: 2,
            title: "Portfolio Website",
            image:
                "/images/portfolio.png",
            description:
                "This very portfolio, built with 3D animations, smooth transitions, and GSAP motion effects.",
            keyPoints: [
                "Lenis smooth scroll",
                "GSAP ScrollTrigger animations",
                "React Three Fiber 3D models",
            ],
            techStack: ["Next.js", "TypeScript", "GSAP", "Three.js"],
            githubUrl: "https://github.com/Abhinav-0709/portfolio", 
        },
        {
            index: 3,
            title: "PROJEX",
            image:
                "/images/projex.png",
            description:
                "A full-stack MERN task manager with daily task and project journal.",
            keyPoints: [
                "Task Maanager with true false values",
                "Project journal document my progress for a project.",
                "Dashdoard for managing tasks and projects.",
            ],
            techStack: ["MongoDB", "Express", "React", "Node.js"],
            githubUrl: "https://github.com/Abhinav-0709/projex",
        },
        {
            index: 4,
            title: "BookVerse",
            image:
                "/images/bookverse.png",
            description:
                "A Book review platform for peoples to share their thoughts on different kind of books.",
            keyPoints: [
                "JWT Powered Login Setup",
                "CRUD System directly from the database",
                "Book Management System",
            ],
            techStack: ["MongoDB", "Express", "React", "Node.js"],
            githubUrl: "https://github.com/Abhinav-0709/bookverse", 
        },
    ];

    const container = useRef(null);

    useGSAP(
        () => {
            const stickyCards = document.querySelectorAll(".sticky-card");

            stickyCards.forEach((card, index) => {
                if (index < stickyCards.length - 1) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: "top top",
                        endTrigger: stickyCards[stickyCards.length - 1],
                        end: "top top",
                        pin: true,
                        pinSpacing: false,
                    });
                }

                if (index < stickyCards.length - 1) {
                    ScrollTrigger.create({
                        trigger: stickyCards[index + 1],
                        start: "top bottom",
                        end: "top top",
                        onUpdate: (self) => {
                            const progress = self.progress;
                            const scale = 1 - progress * 0.25;
                            const rotation = (index % 2 === 0 ? 5 : -5) * progress;
                            const opacity = 1 - progress;

                            gsap.set(card, {
                                scale: scale,
                                rotation: rotation,
                                opacity: opacity,
                                "--after-opacity": progress,
                            });
                        },
                    });
                }
            });
        },
        { scope: container }
    );


    return (
        <div className="cont mx-auto" ref={container} id="project">
            <SectionTitleMarquee title="Featured Works" />

            <div className="sticky-cards">
                {stickyCardsData.map((cardData, index) => (
                    <div className="sticky-card" key={index}>
                        <div className="sticky-card-index">
                            <h1>0{cardData.index}</h1>
                        </div>

                        <div className="sticky-card-content">
                            <div className="sticky-card-content-wrapper">

                                <div className="sticky-card-details">
                                    <h1 className="sticky-card-header">{cardData.title}</h1>

                                    <div className="sticky-card-copy-description">
                                        <p>{cardData.description}</p>
                                    </div>

                                    <div className="my-6">
                                        <div className="sticky-card-copy-title mb-3">
                                            <p>(Key Features)</p>
                                        </div>
                                        <ul className="space-y-2">
                                            {cardData.keyPoints.map((point) => (
                                                <li
                                                    key={point}
                                                    className="flex items-center gap-2 text-white/80"
                                                >
                                                    <Check size={16} className="text-green-500 shrink-0" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="my-6">
                                        <div className="sticky-card-copy-title mb-3">
                                            <p>(Tech Stack)</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {cardData.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="bg-white/10 text-white/90 text-sm px-3 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <a
                                        href={cardData.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 text-lg text-white/70 hover:text-white transition-colors mt-4"
                                    >
                                        <FaGithub size={24} />
                                        <span>View Repository</span>
                                    </a>

                                </div>

                                <div className="sticky-card-img">
                                    <img src={cardData.image} alt={cardData.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;