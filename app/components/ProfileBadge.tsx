import React from "react";
import Image from "next/image";

interface ProfileBadgeProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

export default function ProfileBadge({
  src = "/images/new_images/me.jpg",
  alt = "Abhinav Gupta",
  size = 48,
  className = "",
}: ProfileBadgeProps) {
  return (
    <div
      className={`relative rounded-full overflow-hidden border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.5)] bg-zinc-900 flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority
      />
    </div>
  );
}
