"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function ContactCTA() {
    const magnetRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const btn = magnetRef.current;
        if (!btn) return;

        const element = btn!;
        const strength = 30;

        function moveButton(e: MouseEvent) {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);

            gsap.to(element, {
                x: x / 3,
                y: y / 3,
                duration: 0.3,
                ease: "power3.out",
            });
        }

        function resetButton() {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power3.out",
            });
        }

        element.addEventListener("mousemove", moveButton);
        element.addEventListener("mouseleave", resetButton);

        return () => {
            element.removeEventListener("mousemove", moveButton);
            element.removeEventListener("mouseleave", resetButton);
        };
    }, []);

    return (
        <section className="mx-auto relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black" id="contact">

            <video
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/20"></div>

            <div className="relative z-10 w-full max-w-6xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">

                <div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
                        LET’S WORK<br />TOGETHER
                    </h1>
                </div>

                <div className="flex flex-col gap-6 text-white">

                    <h2 className="text-2xl font-semibold">Are you ready?</h2>
                    <p className="text-sm tracking-wider text-white/70">
                        DROP YOUR MAIL
                    </p>

                    <div className="w-full">
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="w-full bg-transparent border-b border-white/40 focus:border-white text-lg py-2 outline-none transition-all"
                        />
                    </div>

                    <button
                        ref={magnetRef}
                        className="relative mt-6 inline-block px-10 py-3 text-black font-semibold bg-white rounded-full shadow-lg cursor-pointer tracking-wide hover:bg-white/90 transition-all"
                    >
                        SUBMIT
                    </button>

                </div>
            </div>
        </section>
    );
}
