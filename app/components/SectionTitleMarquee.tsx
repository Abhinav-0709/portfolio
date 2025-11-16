import React from "react";
import { Copyright } from "lucide-react"; 

const SectionTitleMarquee = ({ title }: { title: string }) => {
    const marqueeText = `${title.toUpperCase()} @`;

    return (
        <div
            className="w-full overflow-hidden bg-black text-white py-8 md:py-12 border-b border-t border-white/50"
        >
            <div
                className="flex w-max animate-scroll-project"
                style={
                    {
                        "--animation-direction": "reverse",
                        "--animation-duration": "060s",
                    } as React.CSSProperties
                }
            >
                {[...Array(10)].map((_, i) => (
                    <span
                        key={i}
                        className="flex items-center text-7xl md:text-9xl font-bold whitespace-nowrap mx-8"
                    >
                        {marqueeText}
                        <span className="text-white mx-8">•</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SectionTitleMarquee;