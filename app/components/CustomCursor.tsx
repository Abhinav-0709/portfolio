"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useGSAP(() => {
        const moveCursor = (e: MouseEvent) => {
           
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "power2.out",
            });
        };
        window.addEventListener("mousemove", moveCursor);

        const hoverEls = gsap.utils.toArray("a, button");

        const onMouseEnter = () => {
            gsap.to(cursorRef.current, {
                scale: 3, 
                duration: 0.3,
                ease: "power2.out",
            });
        };
        const onMouseLeave = () => {
            gsap.to(cursorRef.current, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        hoverEls.forEach((el: any) => {
            el.addEventListener("mouseenter", onMouseEnter);
            el.addEventListener("mouseleave", onMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            hoverEls.forEach((el: any) => {
                el.removeEventListener("mouseenter", onMouseEnter);
                el.removeEventListener("mouseleave", onMouseLeave);
            });
        };
    }, []); 

    return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;