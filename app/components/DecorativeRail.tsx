import React from "react";
import Image from "next/image";
import ProfileBadge from "./ProfileBadge";

interface DecorativeRailProps {
  className?: string;
}

export default function DecorativeRail({ className = "" }: DecorativeRailProps) {
  return (
    <>
      {/* 1. Desktop Vertical Rail (Visible on md and up, hidden on mobile/tablet) */}
      <div
        id="decorative-rail-container"
        className={`hidden lg:flex flex-col items-center justify-between py-6 w-[76px] h-[calc(100vh-32px)] lg:h-[calc(100vh-40px)] xl:h-[calc(100vh-48px)] rounded-full bg-surface/90 border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md select-none sticky top-4 xl:top-6 flex-shrink-0 z-30 ${className}`}
      >
        {/* Top: Circle Logo */}
        <div id="rail-logo" className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden p-1.5 shadow-lg transition-transform hover:rotate-12 duration-500 cursor-default relative">
          <Image
            src="/images/logo1.png"
            alt="AG Logo"
            fill
            className="object-contain p-1 invert"
          />
        </div>

        {/* Middle: Rotated Texts & Divider */}
        <div className="flex flex-col items-center justify-center flex-1 py-8 space-y-20">
          {/* Rotated Name */}
          <div
            id="rail-name"
            className="text-[12px] text-white/60 font-light tracking-[0.35em] uppercase whitespace-nowrap -rotate-90 select-none origin-center"
          >
            Abhinav Gupta
          </div>

          {/* Thin Divider Line */}
          <div id="rail-divider" className="w-[1px] h-16 bg-white/15" />

          {/* Rotated "PORTFOLIO" */}
          <div
            id="rail-text"
            className="text-[12px] text-white/40 font-light tracking-[0.35em] uppercase whitespace-nowrap -rotate-90 select-none origin-center"
          >
            Portfolio
          </div>
        </div>

        {/* Bottom: Profile Image Avatar */}
        <div id="rail-avatar" className="transition-transform hover:scale-105 duration-300">
          <ProfileBadge size={40} />
        </div>
      </div>

      {/* 2. Tablet/Mobile Horizontal Header Decoration (Hidden on desktop) */}
      <div
        id="decorative-rail-horizontal"
        className="flex lg:hidden flex-row items-center justify-between px-6 py-3 w-full rounded-full bg-surface/85 border border-white/8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-md select-none mb-8 ${className}"
      >
        <div className="flex items-center gap-3">
          {/* Left: Circle Logo */}
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden p-1 shadow-md relative">
            <Image
              src="/images/logo1.png"
              alt="AG Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          {/* Middle: Header Text */}
          <div className="text-[10px] text-white/70 font-light tracking-[0.2em] uppercase">
            Abhinav Gupta <span className="text-white/20 mx-1.5">|</span> Portfolio
          </div>
        </div>

        {/* Right: Avatar */}
        <ProfileBadge size={34} />
      </div>
    </>
  );
}
