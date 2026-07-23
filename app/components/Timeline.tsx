import React from "react";
import TimelineItem, { TimelineItemProps } from "./TimelineItem";

interface TimelineProps {
  items?: Omit<TimelineItemProps, "isLast">[];
  className?: string;
}

const defaultTimelineItems = [
  {
    number: "01",
    title: "Explore",
    subtitle: "About me, skills & journey",
    isActive: false,
  },
  {
    number: "02",
    title: "Projects",
    subtitle: "Things I've built",
    isActive: true, // Group 2 timeline highlights Projects as active in wireframe
  },
  {
    number: "03",
    title: "Connect",
    subtitle: "Let's build something together",
    isActive: false,
  },
];

export default function Timeline({ items = defaultTimelineItems, className = "" }: TimelineProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {items.map((item, index) => (
        <TimelineItem
          key={item.number}
          number={item.number}
          title={item.title}
          subtitle={item.subtitle}
          isActive={item.isActive}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}
