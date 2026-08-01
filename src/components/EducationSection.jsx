import React from "react";
import { Section } from "./ui/Reveal";
import { GraduationCapSVG, PowerBIServiceSVG } from "./ui/icons";

export default function EducationSection() {
  return (
    <Section id="education" eyebrow="06 · learning" title="Education">
      <div className="flex flex-col gap-8">
        {/* Al-Azhar */}
        <div
          className="rounded-2xl p-6 md:p-8 lift-card flex flex-col md:flex-row gap-6 md:items-start w-full"
          style={{
            background: "rgba(15,23,42,0.55)",
            border: "1.5px solid #334155",
          }}
        >
          <div
            className="shrink-0 flex items-center justify-center rounded-xl text-3xl"
            style={{
              width: "64px",
              height: "64px",
              border: "1.5px solid #334155",
              background: "rgba(10,22,40,0.6)",
            }}
          >
            <GraduationCapSVG />
          </div>
          <div>
            <h3
              className="font-mono font-bold text-2xl md:text-3xl mb-4"
              style={{ color: "#3B82F6" }}
            >
              B.Sc. Computer Science & Pure Mathematics
            </h3>
            <div className="flex flex-wrap items-center gap-3 mb-5 font-mono text-sm">
              <span
                className="px-3.5 py-1.5 rounded-md font-bold tracking-wider"
                style={{
                  border: "1px solid #334155",
                  background: "#0B1730",
                  color: "#F8FAFC",
                }}
              >
                AL-AZHAR UNIVERSITY
              </span>
              <span
                className="px-3.5 py-1.5 rounded-md"
                style={{ background: "#0B1730", color: "#CBD5E1" }}
              >
                Grad Year: 2027 | 2022 – Present
              </span>
            </div>
            <p
              className="text-lg"
              style={{ color: "#CBD5E1", lineHeight: "1.8" }}
            >
              Double major combining computer science — algorithms, databases,
              and programming — with rigorous pure mathematics. Built the
              analytical and logical foundation that powers my SQL data
              modeling, statistics, and Power BI analytics work.
            </p>
          </div>
        </div>

        {/* WorldQuant */}
        <div
          className="rounded-2xl p-6 md:p-8 lift-card flex flex-col md:flex-row gap-6 md:items-start w-full"
          style={{
            background: "rgba(15,23,42,0.55)",
            border: "1.5px solid #334155",
          }}
        >
          <div
            className="shrink-0 flex items-center justify-center rounded-xl text-3xl"
            style={{
              width: "64px",
              height: "64px",
              border: "1.5px solid #334155",
              background: "rgba(10,22,40,0.6)",
            }}
          >
            <PowerBIServiceSVG />
          </div>
          <div>
            <h3
              className="font-mono font-bold text-2xl md:text-3xl mb-4"
              style={{ color: "#3B82F6" }}
            >
              Applied Data Science Lab
            </h3>
            <div className="flex flex-wrap items-center gap-3 mb-5 font-mono text-sm">
              <span
                className="px-3.5 py-1.5 rounded-md font-bold tracking-wider"
                style={{
                  border: "1px solid #334155",
                  background: "#0B1730",
                  color: "#F8FAFC",
                }}
              >
                WORLDQUANT UNIVERSITY
              </span>
              <span
                className="px-3.5 py-1.5 rounded-md"
                style={{ background: "#0B1730", color: "#CBD5E1" }}
              >
                2026 – Present
              </span>
            </div>
            <p
              className="text-lg"
              style={{ color: "#CBD5E1", lineHeight: "1.8" }}
            >
              Project-based program covering end-to-end data science workflows in
              Python — data wrangling, visualization, statistical modeling, and
              machine learning applied to real-world datasets.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
