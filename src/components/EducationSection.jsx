import React from "react";
import { Section } from "./ui/Reveal";

const EDUCATION_ITEMS = [
  {
    degree: "B.Sc. Computer Science & Pure Mathematics",
    institution: "Al-Azhar University",
    period: "2022 – 2027",
    description:
      "Double major combining algorithms, software engineering, and database systems with pure mathematics — establishing deep analytical foundations for complex SQL data modeling and business intelligence.",
  },
  {
    degree: "Applied Data Science Lab",
    institution: "WorldQuant University",
    period: "2026 – Present",
    description:
      "Intensive, project-driven specialization covering end-to-end Python data science workflows — exploratory data analysis, statistical modeling, machine learning, and predictive visualization.",
  },
];

export default function EducationSection() {
  return (
    <Section id="education" eyebrow="06 · learning" title="Education">
      <div className="max-w-4xl mx-auto divide-y divide-slate-800/60 border-t border-b border-slate-800/60 py-2">
        {EDUCATION_ITEMS.map((edu, idx) => (
          <div
            key={idx}
            className="group py-8 first:pt-4 last:pb-4 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start"
          >
            {/* Left Column: Period & Institution */}
            <div className="md:col-span-4 flex flex-col">
              <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase mb-1">
                {edu.period}
              </span>
              <h4 className="text-base md:text-lg font-bold text-slate-300 group-hover:text-sky-400 transition-colors">
                {edu.institution}
              </h4>
            </div>

            {/* Right Column: Degree Title & Description */}
            <div className="md:col-span-8 flex flex-col">
              <h3
                className="text-xl md:text-2xl font-extrabold text-slate-100 mb-2 transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {edu.degree}
              </h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
