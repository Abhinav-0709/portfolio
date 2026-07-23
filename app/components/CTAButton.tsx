import React from "react";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({ children, className = "", ...props }: CTAButtonProps) {
  return (
    <button
      className={`group flex items-center justify-between gap-3 px-5 py-2.5 bg-white text-zinc-950 font-medium text-sm rounded-full transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)] active:translate-y-0 ${className}`}
      {...props}
    >
      <span>{children}</span>
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-950 text-white transition-transform duration-300 ease-out group-hover:translate-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-3.5 h-3.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </button>
  );
}
