import React from "react";

interface HeroHeadingProps {
  className?: string;
}

export default function HeroHeading({ className = "" }: HeroHeadingProps) {
  return (
    <h1
      className={`text-[2.85rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] leading-[1.02] tracking-tight select-none ${className}`}
    >
      {/* First line: Geometric Sans-Serif + Icons */}
      <span className="font-sans font-medium text-white flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
        Building
        <span className="inline-flex items-center gap-3 mx-1">
          {/* Half-circle Dome Icon */}
          <svg
            viewBox="0 0 40 20"
            fill="currentColor"
            className="w-11 h-5.5 sm:w-16 sm:h-8 md:w-20 md:h-10 text-white"
          >
            <path d="M 0,20 A 20,20 0 0,1 40,20 Z" />
          </svg>
          {/* 8-Spoke Asterisk Icon */}
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            fill="none"
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white animate-[spin_20s_linear_infinite]"
          >
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
          </svg>
        </span>
      </span>

      {/* Second line: Single Straight Line */}
      <span className="block font-bold text-white mt-1 text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] whitespace-nowrap tracking-tight">
        Digital Experiences
      </span>
    </h1>
  );
}
