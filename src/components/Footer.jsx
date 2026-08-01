import React from "react";

export default function Footer() {
  return (
    <footer
      className="max-w-7xl mx-auto px-6 py-6 text-center font-mono text-xs"
      style={{ borderTop: "1px solid #334155", color: "#94A3B8" }}
    >
      <p>© {new Date().getFullYear()} Hasnaa Ahmed · Designed with Data & Passion</p>
    </footer>
  );
}
