"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ text }: { text: string }) => {
    const container = useRef(null);
    const textSpans = text
        .split("")
        .map((char, index) => (
            <span
                key={index}
                className="translate-y-full inline-block" 
                data-char={char}
            >
                {char === " " ? "\u00A0" : char} 
            </span>
        ));

    useGSAP(
        () => {
            gsap.to(
                "[data-char]",
                {
                    y: 0,
                    stagger: 0.03,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 90%", 
                        end: "bottom 10%", 
                        toggleActions: "play reset play reset",
                    },
                }
            );
        },
        { scope: container }
    );

    return (
        <h2
            ref={container}
            className="text-6xl md:text-9xl font-bold uppercase overflow-hidden"
            aria-label={text}
        >
            {textSpans}
        </h2>
    );
};

export default AnimatedTitle;