import React from "react";
import { Section } from "./ui/Reveal";
import {
  PowerBIServiceSVG,
  DatabaseServiceSVG,
  PythonServiceSVG,
  ExcelServiceSVG,
  SparkleSVG,
} from "./ui/icons";

export default function ServicesSection() {
  const services = [
    {
      icon: <PowerBIServiceSVG />,
      accent: "#F59E0B",
      title: "Power BI Dashboards",
      desc: "Interactive, decision-ready dashboards with advanced DAX, time intelligence, and drill-through storytelling.",
      tags: ["DAX", "Data Modeling", "KPI Design"],
    },
    {
      icon: <DatabaseServiceSVG />,
      accent: "#3B82F6",
      title: "SQL Data Modeling",
      desc: "Star schemas, ETL pipelines, and optimized queries — from raw tables to clean, analysis-ready models.",
      tags: ["ETL", "Star Schema", "Optimization"],
    },
    {
      icon: <PythonServiceSVG />,
      accent: "#10B981",
      title: "Python Analysis",
      desc: "Data cleaning, automation, and exploratory analysis with Pandas & NumPy — turning messy data into insights.",
      tags: ["Pandas", "Automation", "EDA"],
    },
    {
      icon: <ExcelServiceSVG />,
      accent: "#8B5CF6",
      title: "Excel Solutions",
      desc: "Power Query workflows, pivot reporting, and advanced formulas that save hours of manual work.",
      tags: ["Power Query", "Pivots", "Reports"],
    },
  ];

  return (
    <Section id="services" eyebrow="02 · hire me" title="Freelance Services">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-3xl p-7 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            style={{
              background: "#111F3D",
              border: "1.5px solid #334155",
              boxShadow: "0 4px 14px rgba(15,23,42,.35)",
            }}
          >
            {/* Top Accent Bar on Hover */}
            <div
              className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: s.accent }}
            />

            {/* Icon Container */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 border transition-transform duration-300 group-hover:scale-110"
              style={{
                background: "#0A1628",
                borderColor: "#334155",
              }}
            >
              {s.icon}
            </div>

            {/* Title */}
            <h3
              className="text-xl font-bold mb-3 text-slate-100"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-300 mb-6 flex-1 leading-relaxed">
              {s.desc}
            </p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2.5 py-1 rounded-full border bg-slate-950/70"
                  style={{
                    color: s.accent,
                    borderColor: "rgba(51, 65, 85, 0.8)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#contact"
          className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
          style={{ color: "#FFFFFF" }}
        >
          <SparkleSVG /> Let's work together ↗
        </a>
      </div>
    </Section>
  );
}
