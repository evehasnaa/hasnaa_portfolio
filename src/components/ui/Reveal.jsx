import React, { useEffect, useRef } from "react";

export const Eyebrow = ({ children }) => (
  <div
    className="font-mono text-xs tracking-[0.3em] uppercase mb-3"
    style={{ color: "#F59E0B" }}
  >
    {children}
  </div>
);

export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-in");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Section({ id, eyebrow, title, children, noRevealWrapper = false }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-6 py-20">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-8"
          style={{
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            color: "#F8FAFC",
          }}
        >
          {title}
        </h2>
      </Reveal>
      {noRevealWrapper ? children : <Reveal delay={120}>{children}</Reveal>}
    </section>
  );
}

export function Chip({ children }) {
  return (
    <span
      className="px-3.5 py-2 rounded-full text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{
        background: "transparent",
        border: "1.5px solid #334155",
        color: "#CBD5E1",
      }}
    >
      {children}
    </span>
  );
}

export function burst(x, y) {
  const colors = ["#2563EB", "#3B82F6", "#F59E0B", "#10B981"];
  for (let i = 0; i < 22; i++) {
    const p = document.createElement("div");
    const s = 6 + Math.random() * 6;
    p.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${Math.random() > 0.5 ? "50%" : "2px"};background:${colors[i % 4]};pointer-events:none;z-index:9999;`;
    document.body.appendChild(p);
    const ang = Math.random() * Math.PI * 2,
      v = 60 + Math.random() * 140;
    p.animate(
      [
        { transform: "translate(0,0) rotate(0)", opacity: 1 },
        {
          transform: `translate(${Math.cos(ang) * v}px, ${Math.sin(ang) * v + 90}px) rotate(${Math.random() * 540}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 850 + Math.random() * 400,
        easing: "cubic-bezier(.2,.8,.3,1)",
      },
    ).onfinish = () => p.remove();
  }
}
