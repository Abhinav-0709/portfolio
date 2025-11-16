"use client"; 

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import AnimatedTitle from "./AnimatedTitle";


const ThreeDModel = dynamic(() => import("./Hero3DScene"), {
    ssr: false,
    loading: () => (
        <div className="flex h-full items-center justify-center">
            <span className="text-white/50 text-sm">[Loading 3D...]</span>
        </div>
    ),
});

const Hero = () => {
    useGSAP(() => {
        gsap.from(".hero-name-letter", {
            y: 100,
            opacity: 0,
            stagger: 0.1, 
            duration: 0.75,
            ease: "power3.out",
        });
    }, []);



    return (
        <section className="relative w-full min-h-screen pt-20 overflow-x-hidden bg-black mx-auto">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">

                    <div className="flex flex-col justify-center mx-auto">
                        <p className="text-white/60 text-2xl md:text-3xl leading-relaxed">
                            Hey guys,  I'm Abhinav,  <br />
                            {" "}
                            <TypeAnimation
                                sequence={[
                                    "Full-Stack Developer",
                                    2000,
                                    "Designer",
                                    2000,
                                    "AI Specialist",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                className="text-white font-bold text-5xl " 
                                repeat={Infinity}
                            />

                        </p>
                    </div>

                    <div className="h-100 w-full rounded-2xl bg-black  overflow-hidden">
                        <ThreeDModel />
                    </div>
                </div>

                <div className="border-t border-b border-white bg-white py-4 overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap flex space-x-12">
                        <span className="text-black text-lg uppercase font-semibold">Developer</span>
                        <span className="text-black text-lg uppercase font-semibold">Designer</span>
                        <span className="text-black text-lg uppercase font-semibold">Specialist</span>

                        <span className="text-black text-lg uppercase font-semibold">Developer</span>
                        <span className="text-black text-lg uppercase font-semibold">Designer</span>
                        <span className="text-black text-lg uppercase font-semibold">Specialist</span>

                        <span className="text-black text-lg uppercase font-semibold">Developer</span>
                        <span className="text-black text-lg uppercase font-semibold">Designer</span>
                        <span className="text-black text-lg uppercase font-semibold">Specialist</span>

                        <span className="text-black text-lg uppercase font-semibold">Developer</span>
                        <span className="text-black text-lg uppercase font-semibold">Designer</span>
                        <span className="text-black text-lg uppercase font-semibold">Specialist</span>
                    </div>
                </div>

                <div className="border-b border-white/20 py-10 md:py-16 item center flex justify-center">
                    <AnimatedTitle text="Welcome!!" />
                </div>

            </div>
        </section>
    );
};

export default Hero;