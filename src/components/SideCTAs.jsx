import React from "react";

export default function SideCTAs({ canvasEnabled, setCanvasEnabled }) {
  return (
    <div className="hidden md:flex flex-col gap-3 fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <a
        href="#projects"
        className="font-mono text-xs font-bold tracking-widest"
        style={{
          writingMode: "vertical-rl",
          background: "#F59E0B",
          color: "#0F172A",
          borderRadius: "9999px",
          padding: "1rem 0.75rem",
          textDecoration: "none",
        }}
      >
        Check my work
      </a>
      <a
        href="#contact"
        className="font-mono text-xs font-bold tracking-widest"
        style={{
          writingMode: "vertical-rl",
          background: "#2563EB",
          color: "#FFFFFF",
          borderRadius: "9999px",
          padding: "1rem 0.75rem",
          textDecoration: "none",
        }}
      >
        Hire me
      </a>
      <button
        onClick={() => setCanvasEnabled(!canvasEnabled)}
        className="font-mono text-[10px] font-bold tracking-widest cursor-pointer transition-all flex items-center justify-center border-none shadow-lg"
        style={{
          writingMode: "vertical-rl",
          background: canvasEnabled ? "#0284C7" : "#334155",
          color: "#FFFFFF",
          borderRadius: "9999px",
          padding: "0.85rem 0.6rem",
        }}
        title="Toggle Animated Background Canvas"
      >
        {canvasEnabled ? "FX ON" : "FX OFF"}
      </button>
    </div>
  );
}
