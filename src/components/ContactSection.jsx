import React, { useState, useRef } from "react";
import { LINKS } from "../data/portfolioData";
import { burst } from "./ui/Reveal";
import {
  LocationPinSVG,
  ClockSVG,
  PhoneSVG,
  EmailSVG,
  LinkedInSVG,
  GitHubSVG,
} from "./ui/icons";

export function ContactCard({ icon, label, value, action, href }) {
  const [toast, setToast] = useState(false);
  const ref = useRef(null);

  const handle = (e) => {
    if (action === "copy") {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      setToast(true);
      setTimeout(() => setToast(false), 1600);
      burst(e.clientX, e.clientY);
    } else if (href) {
      burst(e.clientX, e.clientY);
      setTimeout(() => window.open(href, "_blank"), 250);
    }
  };

  const tilt = (e) => {
    const r = ref.current.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -10;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 10;
    ref.current.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
  };

  return (
    <button
      ref={ref}
      onClick={handle}
      onMouseMove={tilt}
      onMouseLeave={() => (ref.current.style.transform = "")}
      className="relative text-left rounded-2xl p-5 w-full transition-transform duration-150 lift-card cursor-pointer"
      style={{ background: "transparent", border: "1.5px solid #334155" }}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <div
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: "#60A5FA" }}
      >
        {label}
      </div>
      <div
        className="font-semibold mt-1 break-all"
        style={{ color: "#F8FAFC" }}
      >
        {value}
      </div>
      <div className="mt-3 text-xs font-mono" style={{ color: "#3B82F6" }}>
        {action === "copy" ? "tap to copy ⧉" : "tap to open ↗"}
      </div>
      {toast && (
        <div
          className="absolute -top-3 right-3 px-3 py-1 rounded-full text-xs font-bold toast-pop"
          style={{ background: "#10B981", color: "#FFFFFF" }}
        >
          Copied ✓
        </div>
      )}
    </button>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <div
        className="font-mono text-xs tracking-[0.3em] uppercase mb-3"
        style={{ color: "#F59E0B" }}
      >
        07 · ping me
      </div>
      <h2
        className="text-3xl md:text-4xl font-extrabold mb-2"
        style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          color: "#F8FAFC",
        }}
      >
        Let's build something with data.
      </h2>
      <p className="mb-8 font-mono text-sm" style={{ color: "#94A3B8" }}>
        response_time ≈ faster than a Power BI refresh 😉
      </p>
      <div
        className="rounded-xl overflow-hidden max-w-xl"
        style={{
          background: "rgba(10,22,40,0.85)",
          border: "1px solid #334155",
        }}
      >
        {/* terminal title bar */}
        <div
          className="relative flex items-center px-4 py-2.5"
          style={{
            background: "#1E293B",
            borderBottom: "1px solid #334155",
          }}
        >
          <div className="flex gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#EF4444" }}
            />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#F59E0B" }}
            />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#10B981" }}
            />
          </div>
          <span
            className="absolute left-1/2 -translate-x-1/2 font-mono text-xs"
            style={{ color: "#94A3B8" }}
          >
            contact.sh
          </span>
        </div>
        {/* terminal body */}
        <div className="px-7 py-7 font-mono text-base space-y-6">
          <div>
            <div>
              <span style={{ color: "#F59E0B" }}>$</span>{" "}
              <span style={{ color: "#94A3B8" }}>echo $LOCATION</span>
            </div>
            <div
              className="mt-1 font-semibold flex items-center gap-1.5"
              style={{ color: "#F8FAFC" }}
            >
              <LocationPinSVG /> Cairo, Egypt
            </div>
          </div>
          <div>
            <div>
              <span style={{ color: "#F59E0B" }}>$</span>{" "}
              <span style={{ color: "#94A3B8" }}>echo $ROLE</span>
            </div>
            <div
              className="mt-1 font-semibold flex items-center gap-1.5"
              style={{ color: "#F8FAFC" }}
            >
              <ClockSVG /> Data Analyst | BI Analyst
            </div>
          </div>
          <div>
            <div>
              <span style={{ color: "#F59E0B" }}>$</span>{" "}
              <span style={{ color: "#94A3B8" }}>echo $PHONE / $WHATSAPP</span>
            </div>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 font-semibold hover:underline"
              style={{ color: "#F8FAFC" }}
            >
              <PhoneSVG /> {LINKS.phone}
            </a>
          </div>
          <div>
            <div>
              <span style={{ color: "#F59E0B" }}>$</span>{" "}
              <span style={{ color: "#94A3B8" }}>echo $EMAIL</span>
            </div>
            <a
              href={`mailto:${LINKS.email}`}
              className="mt-1 inline-flex items-center gap-1.5 font-semibold hover:underline"
              style={{ color: "#F8FAFC" }}
            >
              <EmailSVG /> {LINKS.email}
            </a>
          </div>
          <div>
            <div>
              <span style={{ color: "#F59E0B" }}>$</span>{" "}
              <span style={{ color: "#94A3B8" }}>echo $SOCIALS</span>
            </div>
            <div className="mt-1 flex gap-6">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-semibold hover:underline inline-flex items-center gap-1.5"
                style={{ color: "#F8FAFC" }}
              >
                <LinkedInSVG /> LinkedIn
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="font-semibold hover:underline inline-flex items-center gap-1.5"
                style={{ color: "#F8FAFC" }}
              >
                <GitHubSVG /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
