import React from "react";
import hasnaaPhoto from "../img/hasnaa .jpeg";
import { LINKS } from "../data/portfolioData";
import DecryptedText from "./ui/decrypted-text";
import {
  LinkedInSVG,
  GitHubSVG,
  EmailSVG,
  WhatsAppSVG,
  DataMetricsSVG,
} from "./ui/icons";

export default function Hero({ entered }) {
  return (
    <header
      className={`relative overflow-hidden pt-24 md:pt-28 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-between ${
        entered ? "hero-in" : ""
      }`}
      style={{ minHeight: "92vh" }}
    >
      {/* Giant Artistic Title with DecryptedText effect triggered after splash */}
      <div className="w-full text-center mt-2 md:mt-4 z-10">
        <h1
          className="font-black uppercase tracking-tight select-none leading-none flex items-center justify-center flex-wrap gap-x-4 gap-y-2"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(3rem, 11vw, 9.2rem)",
          }}
        >
          <DecryptedText
            key={entered ? "entered-hasnaa" : "waiting-hasnaa"}
            enabled={entered}
            text="HASNAA"
            animateOn="inViewHover"
            speed={60}
            maxIterations={12}
            sequential
            revealDirection="start"
            className="text-stroke"
            encryptedClassName="text-stroke opacity-50"
            parentClassName="inline-block cursor-pointer"
          />
          <DecryptedText
            key={entered ? "entered-ahmed" : "waiting-ahmed"}
            enabled={entered}
            text="AHMED"
            animateOn="inViewHover"
            speed={60}
            maxIterations={12}
            sequential
            revealDirection="start"
            className="text-slate-50"
            encryptedClassName="text-sky-400 opacity-60"
            parentClassName="inline-block cursor-pointer"
          />
        </h1>
      </div>

      {/* Center Canvas / Portrait + Content Grid */}
      <div className="relative w-full flex-1 grid grid-cols-1 md:grid-cols-12 items-end gap-8 my-6 z-20">
        {/* Bottom Left Content */}
        <div className="md:col-span-4 flex flex-col justify-end items-start text-left z-20 order-2 md:order-1">
          <div
            className="font-mono text-xs tracking-[0.25em] uppercase mb-2 font-bold cursor-default"
            style={{ color: "#F59E0B" }}
          >
            Data & BI Analyst
          </div>
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-3"
            style={{
              color: "#F8FAFC",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              lineHeight: "1.2",
            }}
          >
            Designing Data Products for Business Growth.
          </h2>
          <p
            className="text-sm md:text-base mb-6"
            style={{
              color: "#CBD5E1",
              lineHeight: "1.7",
              maxWidth: "36ch",
            }}
          >
            Transforming raw datasets into interactive Power BI dashboards, SQL
            star schemas, and automated Python workflows.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn-primary px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 flex items-center gap-2"
              style={{ color: "#FFFFFF" }}
            >
              Let's collaborate ↗
            </a>
          </div>
        </div>

        {/* Center Portrait with Radial Backdrop */}
        <div className="md:col-span-4 flex justify-center items-end relative z-10 order-1 md:order-2 my-2 md:my-0">
          {/* Glow backdrop behind photo */}
          <div
            className="absolute w-72 h-72 rounded-full filter blur-3xl -z-10"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,0.35) 0%, rgba(245,158,11,0.15) 60%, transparent 100%)",
            }}
          />

          <img
            src={hasnaaPhoto}
            alt="Hasnaa Ahmed"
            className="portrait-mask rounded-3xl object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
            style={{
              width: "min(100%, 340px)",
              aspectRatio: "1 / 1.15",
              border: "1.5px solid rgba(100, 116, 139, 0.4)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)",
            }}
          />
        </div>

        {/* Bottom Right Social Links Stack */}
        <div className="md:col-span-4 flex flex-col items-start md:items-end justify-end gap-3 z-20 order-3">
          {/* Data Identity Header */}
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase font-bold text-sky-400/90 mb-1 select-none">
            <DataMetricsSVG />
            <span>DATA NODES</span>
          </div>

          {[
            { name: "LinkedIn", href: LINKS.linkedin, icon: <LinkedInSVG /> },
            { name: "GitHub", href: LINKS.github, icon: <GitHubSVG /> },
            { name: "Email", href: `mailto:${LINKS.email}`, icon: <EmailSVG /> },
            { name: "WhatsApp", href: LINKS.whatsapp, icon: <WhatsAppSVG /> },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 font-mono text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200 py-1"
            >
              <span className="text-slate-400 group-hover:text-amber-400 transition-colors">
                {link.icon}
              </span>
              <span className="tracking-wide">{link.name}</span>
              <span className="text-sky-400 opacity-70 group-hover:opacity-100 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
