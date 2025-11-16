"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "./Container";
import InfiniteSkillsScroller from "./InfiniteSkillsScroller";
import {
    Figma,
    PenTool,
    Package,
    Github,
    Linkedin,
    Twitter,
    CheckCircle,
    MapPin,
} from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutSectionRef = useRef(null);

    
    useGSAP(
        () => {
        
            gsap.from(".about-title", {
                scrollTrigger: {
                    trigger: aboutSectionRef.current,
                    start: "top 80%", 
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 50,
                duration: 0.6,
                stagger: 0.2, 
                ease: "power2.out",
            });

            gsap.from(".about-left-card", {
                scrollTrigger: {
                    trigger: ".about-left-card",
                    start: "top 85%", 
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 100,
                duration: 0.8,
                ease: "power2.out",
            });

            gsap.from(".about-right-card", {
                scrollTrigger: {
                    trigger: ".about-right-card",
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 100,
                duration: 0.8,
                delay: 0.2, 
                ease: "power2.out",
            });

            gsap.from(".skills-scroller-languages", {
                scrollTrigger: {
                    trigger: ".skills-scroller-languages",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                x: -100, 
                duration: 0.8,
                ease: "power2.out",
            });

            gsap.from(".skills-scroller-frameworks", {
                scrollTrigger: {
                    trigger: ".skills-scroller-frameworks",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                x: 100, 
                duration: 0.8,
                ease: "power2.out",
            });
        },
        { scope: aboutSectionRef } 
    );

    return (
        <section id="about" className="py-24 bg-black mx-auto" ref={aboutSectionRef}>
            <Container>
                {/* Top Titles - Added 'about-title' class */}
                <div className="flex flex-col items-center text-center">
                    <span
                        className="about-title px-4 py-2 text-sm font-medium
                       bg-[#0E0E0E] text-white/50
                       rounded-full border border-white/10 border-s-4 cursor-pointer gap-0.5"
                    >
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white/50"></span>{" "}
                        Full Stack Developer
                    </span>
                    <h2 className="about-title text-4xl md:text-6xl font-bold mt-4 text-white/50">
                        <span className="text-white/80">Abhinav,</span> designer by
                        passion.
                    </h2>
                    <p className="about-title text-lg md:text-xl text-white/70 mt-4 max-w-3xl">
                        I design, build, and deploy modern web experiences.
                    </p>
                </div>

                {/* Main Grid: Profile Card & Info Card */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-20">
                    {/*  Left Card (Profile)  */}
                    <div
                        className="about-left-card md:col-span-2 p-6
                       bg-[#0E0E0E] backdrop-blur-sm
                       rounded-3xl border border-white/10 
                       
                        shadow-depth 
                        shadow-black/40 
                       transition-all duration-300 hover:shadow-white/10"
                    >
                        
                        <div
                            className="relative w-full h-64 bg-black rounded-2xl
                         flex items-center justify-center border border-white/10
                         overflow-hidden" 
                        >
                            <Image
                                src="/images/me.png" 
                                alt="A photo of Abhinav Gupta"
                                fill
                                className="object-contain"
                            />
                            <span
                                className="absolute flex items-center gap-2 px-4 py-2 
                           bg-green-900/50 text-green-300 
                           rounded-full border border-green-300/30"
                            >
                                <CheckCircle className="w-4 h-4" />
                                Available To Work
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-center mt-6 text-white/80">
                            Hello I am Abhinav Gupta
                        </h3>
                        <p className="text-center text-white/60 mt-2">
                            Full Stack Developer | Designer | AI Specialist
                        </p>
                        <div className="flex justify-center gap-4 mt-6">
                            <a
                                href="#"
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                        <button
                            className="w-full mt-8 py-3 
                         bg-white text-black 
                         rounded-lg font-medium 
                         hover:bg-gray-200 transition-colors"
                        >
                            Contact Me!
                        </button>
                    </div>

                    {/*  Right Card (Info)  */}
                    <div
                        className="about-right-card md:col-span-3 p-8
                       bg-[#0E0E0E] backdrop-blur-sm
                       rounded-3xl border border-white/10
                        shadow-lg 
                        shadow-black/50
                       transition-all duration-300 "
                    >
                        <div className="flex gap-4">
                            <MapPin className="w-10 h-10 text-white/30 shrink-0 mt-1" />
                            <p className="text-lg text-white/80">
                                I'm Abhinav Gupta, a dedicated Web Designer & Developer based in
                                the vibrant city of Bihar, India. I specialize in creative
                                design with seamless technical execution to craft exceptional
                                digital experiences.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8">
                            <div className="flex items-center gap-2 px-4 py-2 bg-black rounded-lg border border-white/10 text-white/70">
                                <Figma className="w-5 h-5" /> Figma
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-black rounded-lg border border-white/10 text-white/70">
                                <PenTool className="w-5 h-5" /> UI/UX Design
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-black rounded-lg border border-white/10 text-white/70">
                                <Package className="w-5 h-5" /> Product Designer
                            </div>
                        </div>
                        <hr className="border-white/10 my-8" />
                        <div className="flex flex-col justify-center gap-2">

                            <div
                                className="flex justify-between items-center py-4 bg-black px-2
                           rounded-md shadow-lg shadow-black 
                           transition-all duration-300 "
                            >
                                <span className="text-sm uppercase text-white/50">
                                    WEB DEV INTERN
                                </span>
                                <span className="font-medium text-white/90">VAULT OF CODE</span>
                                <span className="text-sm text-white/50">AUG-2025</span>
                            </div>

                            <hr className="border-white/5" />

                            
                            <div
                                className="flex justify-between items-center py-4 bg-black px-2 
                           rounded-md  shadow-black
                           transition-all duration-300 shadow-lg "
                            >
                                <span className="text-sm uppercase text-white/50">
                                    AI/ML INTERN
                                </span>
                                <span className="font-medium text-white/90">
                                    EDUNET FOUNDATION
                                </span>
                                <span className="text-sm text-white/50">MAY-2025</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 mt-20">
                   
                    <div className="skills-scroller-languages flex items-center gap-4">
                        <InfiniteSkillsScroller type="languages" direction="right" />
                    </div>

                   
                    <div className="skills-scroller-frameworks flex items-center gap-4">
                        <InfiniteSkillsScroller type="frameworks" direction="left" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;