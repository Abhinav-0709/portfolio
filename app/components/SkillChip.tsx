import React from "react";

interface SkillChipProps {
  label: string;
  className?: string;
}

export default function SkillChip({ label, className = "" }: SkillChipProps) {
  return (
    <div
      className={`px-4.5 py-2 rounded-full border border-white/10 bg-white/4 text-xs sm:text-sm text-white/90 font-medium tracking-wide transition-all duration-300 ease-out hover:scale-103 hover:bg-white/8 hover:border-white/25 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-default select-none ${className}`}
    >
      {label}
    </div>
  );
}
