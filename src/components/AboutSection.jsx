import React from "react";
import { Reveal, Eyebrow } from "./ui/Reveal";

export default function AboutSection() {
  return (
    <div id="about" className="flex flex-col w-full min-w-0 overflow-hidden">
      <Reveal>
        <Eyebrow>01 · whoami</Eyebrow>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8"
          style={{
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            color: "#F8FAFC",
          }}
        >
          About
        </h2>
      </Reveal>
      <Reveal delay={120} className="flex-1 w-full min-w-0">
        <div className="space-y-4 md:space-y-7 w-full min-w-0">
          <p
            className="font-extrabold leading-tight break-words"
            style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "clamp(1.35rem, 4.5vw, 2.2rem)",
              color: "#F8FAFC",
            }}
          >
            Hi, I am <span style={{ color: "#3B82F6" }}>Hasnaa Ahmed</span>,
            focusing on Leveraging Data into Business Growth.
          </p>

          <p
            className="font-mono text-base md:text-lg break-words"
            style={{
              color: "#CBD5E1",
              lineHeight: "1.8",
            }}
          >
            <span style={{ color: "#F59E0B" }}>&gt;_</span> I design ETL
            workflows, build multi-fact SQL models, and deliver interactive
            Power BI dashboards with time-intelligence measures that support
            strategic decisions.
          </p>

          <p
            className="font-mono text-base md:text-lg break-words"
            style={{
              color: "#CBD5E1",
              lineHeight: "1.8",
            }}
          >
            <span style={{ color: "#60A5FA" }}>/**</span> Focus: translating
            raw data into KPI-driven insights using Python, SQL Server, Power
            Query, and DAX for non-technical stakeholders.{" "}
            <span style={{ color: "#60A5FA" }}>*/</span>
          </p>
        </div>
      </Reveal>
    </div>
  );
}
