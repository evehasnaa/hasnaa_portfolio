import React from "react";
import { Reveal } from "./ui/Reveal";

function ProjectCard({ p }) {
  return (
    <div
      className="proj-card rounded-2xl overflow-hidden flex flex-col h-full"
      style={{ background: "#111F3D", border: "1.5px solid #1E3A5F" }}
    >
      <div
        className="proj-img relative w-full overflow-hidden flex items-center justify-center font-mono text-sm"
        style={{ aspectRatio: "16/9", background: "#0F1E3A", color: "#94A3B8" }}
      >
        {p.img ? (
          <img
            src={p.img}
            alt={p.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <span style={{ color: "#334155", fontSize: "13px" }}>
            ⬆ drop dashboard screenshot here
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div
          className="font-mono text-xs uppercase tracking-[0.2em] mb-2"
          style={{ color: "#F59E0B" }}
        >
          {p.tag}
        </div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <a
            href={p.powerbiLink || p.githubLink}
            target="_blank"
            rel="noreferrer"
            className="text-lg font-bold"
            style={{
              color: "#60A5FA",
              lineHeight: 1.3,
              textDecoration: "none",
            }}
          >
            {p.title}{" "}
            <span className="proj-arrow" style={{ color: "#F59E0B" }}>
              ↗
            </span>
          </a>
          <div className="flex gap-2 shrink-0">
            {p.githubLink && (
              <a
                href={p.githubLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#0B1730",
                  border: "1px solid #475569",
                  color: "#CBD5E1",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  textDecoration: "none",
                }}
              >
                {"</>"} Code
              </a>
            )}
            {p.powerbiLink && (
              <a
                href={p.powerbiLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "rgba(37,99,235,0.15)",
                  border: "1px solid #2563EB",
                  color: "#60A5FA",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  textDecoration: "none",
                }}
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {p.tools.split("·").map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2.5 py-1 rounded-full"
              style={{
                background: "#0B1730",
                border: "1px solid #334155",
                color: "#CBD5E1",
              }}
            >
              {t.trim()}
            </span>
          ))}
        </div>
        <p
          className="text-sm mt-auto"
          style={{ color: "#94A3B8", lineHeight: 1.7 }}
        >
          {p.desc}
        </p>
      </div>
    </div>
  );
}

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
      <Reveal>
        <div
          className="font-mono text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: "#F59E0B" }}
        >
          04 · shipped
        </div>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-8"
          style={{
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            color: "#F8FAFC",
          }}
        >
          Projects
        </h2>
      </Reveal>
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "1.5rem" }}
      >
        {projects.map((p, i) => (
          <Reveal key={i} delay={i * 80} className="h-full">
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
