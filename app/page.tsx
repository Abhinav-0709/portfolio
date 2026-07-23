"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DecorativeRail from "./components/DecorativeRail";
import FeatureCard from "./components/FeatureCard";
import Timeline from "./components/Timeline";
import SkillChip from "./components/SkillChip";
import HeroHeading from "./components/HeroHeading";
import HeroImage from "./components/HeroImage";

const skills = [
  "Full Stack",
  "AI / LLM",
  "AWS",
  "Web Development",
  "System Design",
  "Python",
  "TypeScript",
  "Next.js",
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create a master timeline
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      // 1. Decorative Rail growth (vertical draw)
      const rail = document.querySelector("#decorative-rail-container");
      if (rail && window.innerWidth >= 1024) {
        // Set initial states for vertical rail parts
        gsap.set(rail, { height: "0%", opacity: 1, transformOrigin: "top center" });
        gsap.set("#rail-logo", { scale: 0, opacity: 0 });
        gsap.set("#rail-name", { opacity: 0 });
        gsap.set("#rail-divider", { scaleY: 0, transformOrigin: "top center" });
        gsap.set("#rail-text", { opacity: 0 });
        gsap.set("#rail-avatar", { y: 20, opacity: 0 });

        const targetHeight = window.innerWidth >= 1280 ? "calc(100vh - 80px)" : "calc(100vh - 64px)";
        tl.to(rail, {
          height: targetHeight,
          duration: 1.1,
          ease: "cubic-bezier(.22, 1, .36, 1)",
        })
          .to("#rail-divider", {
            scaleY: 1,
            duration: 0.6,
          }, "-=0.6")
          .to("#rail-logo", {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          }, "-=0.3")
          .to(["#rail-name", "#rail-text"], {
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
          }, "-=0.2")
          .to("#rail-avatar", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          }, "-=0.2");
      } else {
        // If mobile/tablet horizontal rail, just fade it in
        gsap.set("#decorative-rail-horizontal", { opacity: 0, y: -20 });
        tl.to("#decorative-rail-horizontal", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // 2. Main Content Stagger slide-in
      const contentGroups = gsap.utils.toArray(".content-group");
      tl.fromTo(
        contentGroups,
        {
          x: -50,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.12,
          ease: "cubic-bezier(.22, 1, .36, 1)",
        },
        "-=0.7" // overlap with rail build
      );

      // 3. Image Container Entrance (enters last)
      tl.fromTo(
        "#hero-image-container",
        {
          x: 60,
          opacity: 0,
          scale: 0.96,
          filter: "blur(15px)",
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.9" // overlap with content slide-in
      );

      // Portrait Image Zoom Out independently (very subtle 2s)
      tl.fromTo(
        "#hero-portrait-image",
        {
          scale: 1.08,
        },
        {
          scale: 1.0,
          duration: 2.0,
          ease: "power2.out",
        },
        "-=1.2" // start as container is animating
      );

      // Image Logo fade & scale
      tl.fromTo(
        "#hero-image-logo",
        {
          opacity: 0,
          scale: 0.92,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "-=1.0" // overlap
      );
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#050505] p-4 sm:p-6 lg:p-5 xl:p-7 flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-start lg:items-center justify-between overflow-x-hidden"
    >
      {/* Top-Left Ambient Shine Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-gradient-to-br from-white/[0.07] via-violet-500/[0.03] to-transparent rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Left: Decorative framing vertical rail */}
      <DecorativeRail />

      {/* Right area containing 12-column Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-6 lg:gap-8 xl:gap-10 items-center z-10">

        {/* Main Content Column (Group 1-4) - occupies 4/12 grid spaces (~30% viewport) */}
        <section className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-center space-y-5 lg:space-y-4 xl:space-y-6">

          {/* Group 1: Feature Card */}
          <div className="content-group">
            <FeatureCard />
          </div>

          {/* Group 2: Journey Timeline */}
          <div className="content-group pl-2">
            <Timeline />
          </div>

          {/* Group 3: Skill Chips */}
          <div className="content-group flex flex-wrap gap-2 max-w-[460px]">
            {skills.map((skill) => (
              <SkillChip key={skill} label={skill} />
            ))}
          </div>

          {/* Group 4: Hero Typography & Sub-text */}
          <div className="content-group space-y-3.5 lg:space-y-3 xl:space-y-4">
            <HeroHeading />
            <p className="text-zinc-300 font-light text-sm sm:text-base leading-relaxed max-w-[500px]">
              Full Stack Developer & AI Engineer focused on creating impactful, scalable and beautiful software.
            </p>
          </div>

        </section>

        {/* Centerpiece Image Container - occupies 8/12 grid spaces (~60% viewport, renders FIRST on mobile) */}
        <section className="order-1 lg:order-2 lg:col-span-8 w-full flex items-center justify-center">
          <HeroImage />
        </section>

      </div>
    </main>
  );
}