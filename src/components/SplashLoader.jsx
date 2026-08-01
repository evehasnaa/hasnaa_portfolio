import React, { useState, useEffect } from "react";
import { BOOT_LINES } from "../data/portfolioData";

export default function Splash({ onDone }) {
  const [pct, setPct] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setPct((p) => {
        if (p >= 100) {
          clearInterval(t);
          setReady(true);
          setTimeout(onDone, 600);
          return 100;
        }
        return p + 2;
      });
    }, 45);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setLineIdx((i) => Math.min(i + 1, BOOT_LINES.length)),
      520,
    );
    return () => clearInterval(t);
  }, []);

  const hex =
    "x0" + Math.round(pct).toString(16).toUpperCase().padStart(2, "0");

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 120% at 50% 10%, #1E293B 0%, #0F172A 55%, #0B1120 100%)",
      }}
    >
      {/* animated bars */}
      <div className="flex items-end gap-2 h-28 mb-8">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className="w-4 rounded-t-md splash-bar"
            style={{
              animationDelay: `${i * 0.12}s`,
              background:
                i % 3 === 0 ? "#2563EB" : i % 3 === 1 ? "#3B82F6" : "#F59E0B",
            }}
          />
        ))}
      </div>

      <div
        className="font-mono text-sm md:text-base text-left w-72 md:w-96 min-h-[130px]"
        style={{ color: "#F8FAFC" }}
      >
        {BOOT_LINES.slice(0, lineIdx).map((l, i) => (
          <div
            key={i}
            className="boot-line"
            style={{ opacity: 0.55 + i * 0.1 }}
          >
            {l}
          </div>
        ))}
        <div className="mt-3" style={{ color: "#F59E0B" }}>
          loading insight… <span className="font-bold">{hex}</span> / x064
        </div>
        <div
          className="mt-2 h-1.5 rounded-full overflow-hidden"
          style={{ background: "#1E293B" }}
        >
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg,#2563EB,#3B82F6)",
            }}
          />
        </div>
      </div>

      <p
        className="mt-8 text-center px-6 text-xl md:text-2xl font-bold tracking-tight"
        style={{
          color: "#F8FAFC",
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}
      >
        ⭐ <span style={{ color: "#F59E0B" }}>Stars</span> are the only KPI I
        can't build a <span style={{ color: "#3B82F6" }}>dashboard</span> for.
      </p>
    </div>
  );
}
