import React from "react";

interface FloatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export default function FloatingButton({
  children,
  variant = "dark",
  className = "",
  ...props
}: FloatingButtonProps) {
  const baseClasses =
    "flex items-center justify-center rounded-full transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0";
  
  const variantClasses =
    variant === "light"
      ? "bg-white text-zinc-950 hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]"
      : "bg-black/40 text-white border border-white/10 backdrop-blur-md hover:bg-black/60 hover:border-white/20 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
