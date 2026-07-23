import React from "react";
import GlassCard from "./GlassCard";
import CTAButton from "./CTAButton";
import Image from "next/image";

interface FeatureCardProps {
  onCtaClick?: () => void;
  className?: string;
}

export default function FeatureCard({ onCtaClick, className = "" }: FeatureCardProps) {
  return (
    <GlassCard className={`w-fit max-w-full flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 p-4 sm:p-4.5 border border-white/10 bg-zinc-950/40 backdrop-blur-xl ${className}`}>
      {/* Left: Landscape Image with Abstract High-Tech Vibe */}
      <div className="relative w-full sm:w-[150px] md:w-[170px] aspect-[16/10] sm:aspect-auto rounded-lg overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-white/20 transition-colors flex-shrink-0">
        {/* Abstract design elements inside the image container */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/40 via-zinc-900 to-emerald-950/20 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent)] z-0" />
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] z-1" />
        {/* Textured image/overlay */}
        <Image
          src="/images/texture_bg.png"
          alt="Abstract mesh"
          fill
          sizes="(max-width: 640px) 100vw, 170px"
          className="object-cover opacity-40 mix-blend-screen scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Glowing orb */}
        <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-violet-600/20 blur-xl animate-pulse" />
      </div>

      {/* Right: Text and CTA Button */}
      <div className="flex-1 flex flex-col justify-between py-0.5 space-y-3">
        <p className="text-sm sm:text-base font-semibold text-white leading-relaxed max-w-[290px]">
          Code. Design. Build.
          <br />
          <span className="text-zinc-300 font-normal text-xs sm:text-sm">Turning ideas into real digital products with modern technology.</span>
        </p>
        <div>
          <CTAButton onClick={onCtaClick} className="w-fit text-xs sm:text-sm px-4.5 py-2 font-medium">
            View My Work
          </CTAButton>
        </div>
      </div>
    </GlassCard>
  );
}
