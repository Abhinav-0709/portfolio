"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import FloatingButton from "./FloatingButton";
import SectionTagline from "./SectionTagline";
import CTAButton from "./CTAButton";

interface HeroImageProps {
  className?: string;
}

export default function HeroImage({ className = "" }: HeroImageProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // SVG path coordinates scaled to 1000x1000 for crisp vector border
  const borderPath = `
    M 0,60 
    A 45,45 0 0,1 45,0 
    L 955,0 
    A 45,45 0 0,1 1000,45 
    L 1000,955 
    A 45,45 0 0,1 955,1000 
    L 300,1000 
    A 45,45 0 0,1 255,955 
    L 255,745 
    A 45,45 0 0,0 210,700 
    L 45,700 
    A 45,45 0 0,1 0,655 
    Z
  `.replace(/\s+/g, " ").trim();

  return (
    <div className={`relative w-full ${className}`}>
      {/* 2. Main Image Container */}
      <div
        id="hero-image-container"
        className={`relative w-full h-[480px] sm:h-[560px] lg:h-[calc(100vh-80px)] xl:h-[calc(100vh-96px)] max-h-[85vh] aspect-[4/5] lg:aspect-[1.22] xl:aspect-[1.28] bg-zinc-950 transition-all duration-300 ${isMobile ? "rounded-[32px] overflow-hidden border border-white" : ""
          }`}
        style={!isMobile ? { clipPath: "url(#hero-clip-path)" } : undefined}
      >
        {/* SVG clipPath Definition for Desktop with Tight Crisp Radiuses */}
        {!isMobile && (
          <svg className="absolute w-0 h-0" width="0" height="0">
            <defs>
              <clipPath id="hero-clip-path" clipPathUnits="objectBoundingBox">
                <path
                  d="
                    M 0,0.06 
                    A 0.045,0.045 0 0,1 0.045,0 
                    L 0.955,0 
                    A 0.045,0.045 0 0,1 1,0.045 
                    L 1,0.955 
                    A 0.045,0.045 0 0,1 0.955,1 
                    L 0.30,1 
                    A 0.045,0.045 0 0,1 0.255,0.955 
                    L 0.255,0.745 
                    A 0.045,0.045 0 0,0 0.21,0.70 
                    L 0.045,0.70 
                    A 0.045,0.045 0 0,1 0,0.655 
                    Z
                  "
                />
              </clipPath>
            </defs>
          </svg>
        )}

        {/* The Portrait Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            id="hero-portrait-image"
            src="/images/new_images/mee.png"
            alt="Abhinav Gupta Portrait"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-[center_20%] sm:object-[center_25%] scale-[1.04] origin-center"
          />
        </div>

        {/* Overlay dark vignette gradient for text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none z-10" />

        {/* 3. Responsive SVG Border Overlay for Desktop */}
        {!isMobile && (
          <svg
            viewBox="0 0 1000 1000"
            fill="none"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          >
            <path
              d={borderPath}
              stroke="white"
              strokeOpacity="0.4"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        )}

        {/* 4. Overlay Elements (Absolute Positioned inside image container) */}

        {/* Top-Left: Large AG Logo */}
        <div
          id="hero-image-logo"
          className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20 select-none pointer-events-none w-28 h-16 sm:w-44 sm:h-24"
        >
          <Image
            src="/images/logo1.png"
            alt="AG Logo"
            fill
            priority
            className="object-contain object-left-top drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Top-Right: Three Dots Menu Floating Button */}
        <FloatingButton
          variant="dark"
          className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 sm:w-12 sm:h-12 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path d="M12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm12 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
          </svg>
        </FloatingButton>

        {/* Bottom-Left Hero Intro Text Overlay inside portrait (Mobile View Only) */}
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 space-y-1.5 max-w-[280px] sm:max-w-[320px] lg:hidden">
          <p className="text-xs text-zinc-300 font-light tracking-wide">Hi, I&apos;m</p>
          <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2 flex-wrap leading-tight">
            Abhinav Gupta
            <span className="inline-flex items-center gap-1.5">
              <svg viewBox="0 0 40 20" fill="currentColor" className="w-5 h-2.5 sm:w-7 sm:h-3.5 text-white">
                <path d="M 0,20 A 20,20 0 0,1 40,20 Z" />
              </svg>
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} fill="none" className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-[spin_20s_linear_infinite]">
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
              </svg>
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            Full Stack Developer &amp; AI Engineer
          </p>
          <div className="pt-1">
            <CTAButton className="w-fit text-xs px-4 py-2 font-medium">
              View My Work
            </CTAButton>
          </div>
        </div>

        {/* Bottom-Right Elements: Tagline & Arrow Button */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 flex items-center gap-3">
          <SectionTagline className="shadow-lg border-white/6" />

          <FloatingButton
            variant="light"
            className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-950 rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </FloatingButton>
        </div>
      </div>
    </div>
  );
}
