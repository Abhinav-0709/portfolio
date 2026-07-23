import React from "react";

interface SectionTaglineProps {
  text?: string;
  className?: string;
}

export default function SectionTagline({
  text = "Turning ideas into products",
  className = "",
}: SectionTaglineProps) {
  return (
    <div className={`flex items-center gap-3.5 bg-black/45 backdrop-blur-md border border-white/8 px-4 py-2.5 rounded-full select-none ${className}`}>
      {/* Equalizer/Barcode Lines Graphic */}
      <div className="flex items-end gap-[2px] h-3.5 w-6">
        <span className="w-[1.5px] bg-white animate-[pulse_1s_infinite_alternate] h-[40%]" />
        <span className="w-[1.5px] bg-white animate-[pulse_1.2s_infinite_alternate_100ms] h-[80%]" />
        <span className="w-[1.5px] bg-white animate-[pulse_0.8s_infinite_alternate_200ms] h-[60%]" />
        <span className="w-[1.5px] bg-white animate-[pulse_1.4s_infinite_alternate_300ms] h-[100%]" />
        <span className="w-[1.5px] bg-white animate-[pulse_1.1s_infinite_alternate_150ms] h-[50%]" />
        <span className="w-[1.5px] bg-white animate-[pulse_0.9s_infinite_alternate_250ms] h-[75%]" />
      </div>

      {/* Text content */}
      <span className="text-[10px] sm:text-xs font-light text-white/90 tracking-wider uppercase">
        {text}
      </span>
    </div>
  );
}
