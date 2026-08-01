import React, { useState } from "react";

export default function Navbar({ canvasEnabled, setCanvasEnabled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl rounded-2xl px-5 py-3 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 backdrop-blur-md"
      style={{
        background: mobileMenuOpen
          ? "rgba(15, 23, 42, 0.95)"
          : "rgba(15, 23, 42, 0.65)",
        border: "1px solid rgba(100, 116, 139, 0.6)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      }}
    >
      <div className="flex items-center justify-between w-full md:w-auto">
        <a
          href="#"
          className="font-mono font-bold text-base md:text-lg tracking-tight"
          style={{ color: "#F8FAFC" }}
          onClick={handleLinkClick}
        >
          <span style={{ color: "#F59E0B" }}>{">"}</span> HASNAA_AHMED
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6 text-amber-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-slate-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-7 font-mono text-xs tracking-[0.15em] uppercase">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="transition-colors hover:text-white"
            style={{ color: "#94A3B8" }}
          >
            {link.name}
          </a>
        ))}

        {/* Server Canvas BG Toggle */}
        <button
          onClick={() => setCanvasEnabled(!canvasEnabled)}
          className="font-mono text-xs font-bold px-3.5 py-1.5 rounded-full border border-slate-600 bg-slate-900/90 text-slate-200 hover:border-amber-400 hover:text-amber-400 transition-all flex items-center gap-2 shadow-md cursor-pointer ml-2"
          title="Toggle Animated Server Background"
        >
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              canvasEnabled
                ? "bg-emerald-400 shadow-[0_0_8px_#10B981]"
                : "bg-slate-500"
            }`}
          />
          <span>{canvasEnabled ? "BG FX: ON" : "BG FX: OFF"}</span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-3 pt-4 pb-2 border-t border-slate-700/60 mt-3 font-mono text-sm animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="py-1.5 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-amber-400 text-xs">↗</span>
            </a>
          ))}

          {/* Quick Action CTAs inside mobile menu */}
          <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-800">
            <a
              href="#projects"
              onClick={handleLinkClick}
              className="text-center py-2 px-3 rounded-xl font-bold text-xs tracking-wider uppercase text-slate-900 bg-amber-400 hover:bg-amber-300 transition-all"
            >
              Check work
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="text-center py-2 px-3 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-500 transition-all"
            >
              Hire me
            </a>
          </div>

          {/* BG FX Toggle inside mobile menu */}
          <button
            onClick={() => {
              setCanvasEnabled(!canvasEnabled);
            }}
            className="w-full mt-1 py-2 px-3 rounded-xl font-mono text-xs font-bold border border-slate-700 bg-slate-900 text-slate-200 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  canvasEnabled
                    ? "bg-emerald-400 shadow-[0_0_8px_#10B981]"
                    : "bg-slate-500"
                }`}
              />
              <span>Server Canvas FX</span>
            </span>
            <span className={canvasEnabled ? "text-emerald-400" : "text-slate-400"}>
              {canvasEnabled ? "ON" : "OFF"}
            </span>
          </button>
        </div>
      )}
    </nav>
  );
}
