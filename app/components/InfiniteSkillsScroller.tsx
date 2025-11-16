"use client";

import {
    SiJavascript,
    SiPython,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiThreedotjs,
    SiFramer,
    SiGit,
    SiHtml5,
} from "react-icons/si";

const languages = [
    { icon: <SiPython />, name: "Python" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiHtml5 />, name: "HTML" },
];

const frameworks = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiThreedotjs />, name: "Three.js" },
    { icon: <SiFramer />, name: "Framer" },
];

type ScrollerProps = {
    type: "languages" | "frameworks";
    direction: "right" | "left";
};

const InfiniteSkillsScroller = ({ type, direction }: ScrollerProps) => {
    const items = type === "languages" ? languages : frameworks;

    return (
        <div
            className="w-full overflow-hidden"
            style={{
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
        >
            <div
                className="flex w-max animate-scroll"
                style={
                    {
                        "--animation-direction": direction === "left" ? "normal" : "reverse",
                    } as React.CSSProperties
                }
            >
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center w-48 h-20 mx-4
                       bg-[#0E0E0E] backdrop-blur-sm 
                       rounded-lg border border-white/10"
                    >
                        <div className="flex items-center gap-3 text-lg text-white/80">
                            <span className="text-3xl">{item.icon}</span>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteSkillsScroller;