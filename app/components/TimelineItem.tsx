import React from "react";

export interface TimelineItemProps {
  number: string;
  title: string;
  subtitle: string;
  isActive?: boolean;
  isLast?: boolean;
}

export default function TimelineItem({
  number,
  title,
  subtitle,
  isActive = false,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="flex gap-6 relative select-none">
      {/* Circle & Line */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Circle indicator */}
        <div
          className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-500 ${
            isActive
              ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
              : "border-2 border-white/30 bg-transparent"
          }`}
        />
        {/* Vertical line connector */}
        {!isLast && (
          <div className="w-[1.5px] h-8 bg-white/10 my-1 transition-colors duration-300" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col pb-4 -mt-0.5">
        <h4
          className={`text-base sm:text-lg font-semibold tracking-wide transition-colors duration-300 ${
            isActive ? "text-white" : "text-white/60"
          }`}
        >
          {number} — {title}
        </h4>
        <p className="text-xs sm:text-sm font-normal text-zinc-400 mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
