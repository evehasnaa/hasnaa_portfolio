import React from "react";
import { EvervaultCard } from "./ui/evervault-card";
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
          <EvervaultCard
            key={s.title}
            icon={s.icon}
            title={s.title}
            desc={s.desc}
            tags={s.tags}
            accent={s.accent}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href="#contact"
          className="btn-primary inline-block px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
          style={{ color: "#FFFFFF" }}
        >
          <SparkleSVG /> Let's work together ↗
        </a>
      </div>
    </Section>
  );
}
