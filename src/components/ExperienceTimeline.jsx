import React, { useState, useEffect, useRef } from "react";
import { Reveal, Section } from "./ui/Reveal";

function TimelineItem({ exp, index }) {
  return (
    <Reveal delay={index * 150} className="mb-14 relative">
      <div
        className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full"
        style={{ background: "#2563EB", border: "3px solid #0A1628" }}
      />
      <div className="flex flex-wrap items-baseline gap-x-3 pl-2">
        <h3 className="text-2xl font-bold" style={{ color: "#F8FAFC" }}>
          {exp.role}
        </h3>
        <span className="font-mono text-sm" style={{ color: "#F59E0B" }}>
          {exp.date}
        </span>
      </div>
      <div
        className="font-semibold text-lg mb-3 pl-2"
        style={{ color: "#60A5FA" }}
      >
        {exp.org}
      </div>
      <ul
        className="list-disc ml-5 space-y-2 text-lg"
        style={{ color: "#CBD5E1", lineHeight: "1.8" }}
      >
        {exp.points.map((p, j) => (
          <li key={j}>{p}</li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function ExperienceTimeline({ experience }) {
  const containerRef = useRef(null);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of line drawing as section scrolls into view
      const startPoint = windowHeight * 0.75;
      const totalDistance = rect.height;
      const currentScroll = startPoint - rect.top;

      let progress = currentScroll / totalDistance;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      setLineProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section
      id="experience"
      eyebrow="03 · timeline"
      title="Experience"
      noRevealWrapper
    >
      <div ref={containerRef} className="relative pl-6">
        {/* Single timeline line that physically extends/grows downwards as you scroll */}
        <div
          className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full origin-top transition-transform duration-75 ease-out"
          style={{
            background: "#334155",
            transform: `scaleY(${lineProgress})`,
          }}
        />

        {experience.map((e, i) => (
          <TimelineItem key={i} exp={e} index={i} />
        ))}
      </div>
    </Section>
  );
}
