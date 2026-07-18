import { useState, useEffect, useRef } from "react";
import Certifications from "./components/Certifications";

/* ─── Palette (from Hasnaa's photo: blush vest, cream hijab, brick wall, glow) ───
   ink   #221419   brick #B94A3B   blush #F2B8C0   cream #F3E9DC   amber #F0A24B */

const LINKS = {
  linkedin: "https://www.linkedin.com/in/hasnaa-ahmed-data-analysis/",
  github: "https://github.com/evehasnaa",
  email: "hasnaaahmed745@gmail.com",
  phone: "+20 102 396 7460",
  whatsapp: "https://wa.me/201023967460",
};

const BOOT_LINES = [
  "> connecting to hasnaa.db ...",
  "> SELECT insights FROM raw_chaos;",
  "> 1,000,000 rows scanned in 0.2s",
  "> joining talent ⨝ caffeine ... OK",
  "> rendering portfolio ...",
];

/* ───────────────────────── Splash / Loader ───────────────────────── */
function Splash({ onDone }) {
  const [pct, setPct] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setPct((p) => {
        if (p >= 100) { clearInterval(t); setReady(true); setTimeout(onDone, 600); return 100; }
        return p + 2;
      });
    }, 45);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setLineIdx((i) => Math.min(i + 1, BOOT_LINES.length)), 520);
    return () => clearInterval(t);
  }, []);

  const hex = "x0" + Math.round(pct).toString(16).toUpperCase().padStart(2, "0");

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(120% 120% at 50% 10%, #35202a 0%, #221419 55%, #170d11 100%)" }}>
      {/* animated bars */}
      <div className="flex items-end gap-2 h-28 mb-8">
        {[0,1,2,3,4,5,6,7].map((i) => (
          <div key={i} className="w-4 rounded-t-md splash-bar"
            style={{
              animationDelay: `${i * 0.12}s`,
              background: i % 3 === 0 ? "#B94A3B" : i % 3 === 1 ? "#F2B8C0" : "#F0A24B",
            }} />
        ))}
      </div>

      <div className="font-mono text-sm md:text-base text-left w-72 md:w-96 min-h-[130px]" style={{ color: "#F3E9DC" }}>
        {BOOT_LINES.slice(0, lineIdx).map((l, i) => (
          <div key={i} className="boot-line" style={{ opacity: 0.55 + i * 0.1 }}>{l}</div>
        ))}
        <div className="mt-3" style={{ color: "#F0A24B" }}>
          loading insight… <span className="font-bold">{hex}</span> / x064
        </div>
        <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: "#3a2530" }}>
          <div className="h-full rounded-full transition-all duration-100"
            style={{ width: `${pct}%`, background: "linear-gradient(90deg,#B94A3B,#F0A24B,#F2B8C0)" }} />
        </div>
      </div>

      <p className="mt-8 text-center px-6 text-xl md:text-2xl font-bold tracking-tight"
        style={{ color: "#F3E9DC", fontFamily: "'Syne',sans-serif" }}>
        ⭐ <span style={{ color: "#F0A24B" }}>Stars</span> are the only KPI I can't build a{" "}
        <span style={{ color: "#F2B8C0" }}>dashboard</span> for.
      </p>

    </div>
  );
}

/* ───────────────────────── Small helpers ───────────────────────── */
const Eyebrow = ({ children }) => (
  <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#B94A3B" }}>
    {children}
  </div>
);

/* Scroll-triggered entrance reveal — animates once, calmly */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("reveal-in"); io.disconnect(); }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-6 py-16">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8" style={{ fontFamily: "'Syne',sans-serif", color: "#221419" }}>
          {title}
        </h2>
      </Reveal>
      <Reveal delay={120}>{children}</Reveal>
    </section>
  );
}

function Chip({ children }) {
  return (
    <span className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{ background: "#FFFDFB", border: "1.5px solid #E7D8CC", color: "#6B5A56" }}>
      {children}
    </span>
  );
}

/* ───────────────────────── Confetti burst ───────────────────────── */
function burst(x, y) {
  const colors = ["#B94A3B", "#F2B8C0", "#F0A24B", "#F3E9DC"];
  for (let i = 0; i < 22; i++) {
    const p = document.createElement("div");
    const s = 6 + Math.random() * 6;
    p.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:${s}px;height:${s}px;border-radius:${Math.random() > 0.5 ? "50%" : "2px"};background:${colors[i % 4]};pointer-events:none;z-index:9999;`;
    document.body.appendChild(p);
    const ang = Math.random() * Math.PI * 2, v = 60 + Math.random() * 140;
    p.animate(
      [{ transform: "translate(0,0) rotate(0)", opacity: 1 },
       { transform: `translate(${Math.cos(ang) * v}px, ${Math.sin(ang) * v + 90}px) rotate(${Math.random() * 540}deg)`, opacity: 0 }],
      { duration: 850 + Math.random() * 400, easing: "cubic-bezier(.2,.8,.3,1)" }
    ).onfinish = () => p.remove();
  }
}

/* ───────────────────────── Contact card ───────────────────────── */
function ContactCard({ icon, label, value, action, href }) {
  const [toast, setToast] = useState(false);
  const ref = useRef(null);

  const handle = (e) => {
    if (action === "copy") {
      const ta = document.createElement("textarea");
      ta.value = value; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); ta.remove();
      setToast(true); setTimeout(() => setToast(false), 1600);
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
    <button ref={ref}
      onClick={handle}
      onMouseMove={tilt}
      onMouseLeave={() => (ref.current.style.transform = "")}
      className="relative text-left rounded-2xl p-5 w-full transition-transform duration-150"
      style={{ background: "#2b1a21", border: "1.5px solid #4a2f3a" }}>
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-mono text-xs tracking-widest uppercase" style={{ color: "#F0A24B" }}>{label}</div>
      <div className="font-semibold mt-1 break-all" style={{ color: "#F3E9DC" }}>{value}</div>
      <div className="mt-3 text-xs font-mono" style={{ color: "#F2B8C0" }}>
        {action === "copy" ? "tap to copy ⧉" : "tap to open ↗"}
      </div>
      {toast && (
        <div className="absolute -top-3 right-3 px-3 py-1 rounded-full text-xs font-bold toast-pop"
          style={{ background: "#F0A24B", color: "#221419" }}>
          Copied ✓
        </div>
      )}
    </button>
  );
}

/* ───────────────────────── Project card (subtle mouse parallax) ───────────────────────── */
function ProjectCard({ p }) {
  const ref = useRef(null);

  const tilt = (e) => {
    const r = ref.current.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -4;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 4;
    ref.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  };

  return (
    <a ref={ref} href={p.link} target="_blank" rel="noreferrer"
      onMouseMove={tilt}
      onMouseLeave={() => (ref.current.style.transform = "")}
      className="proj-card block rounded-2xl overflow-hidden"
      style={{ background: "#2b1a21", border: "1.5px solid #4a2f3a" }}>
      {/* 🖼️ image slot — replace src with your screenshot */}
      <div className="h-44 flex items-center justify-center font-mono text-sm"
        style={{ background: "repeating-linear-gradient(45deg,#33202a,#33202a 12px,#2b1a21 12px,#2b1a21 24px)",
                 color: "#8a6a75", borderBottom: "1.5px solid #4a2f3a" }}>
        {/* <img src="YOUR_SCREENSHOT.png" alt={p.title} className="w-full h-full object-cover" /> */}
        ⬆ drop dashboard screenshot here
      </div>
      <div className="p-5">
        <div className="font-mono text-xs mb-1" style={{ color: "#F0A24B" }}>{p.tag}</div>
        <h3 className="text-lg font-bold" style={{ color: "#F2B8C0" }}>{p.title} ↗</h3>
        <div className="font-mono text-xs mt-1 mb-2" style={{ color: "#a98790" }}>{p.tools}</div>
        <p className="text-sm leading-relaxed" style={{ color: "#d9c3bd" }}>{p.desc}</p>
      </div>
    </a>
  );
}

/* ───────────────────────── Data ───────────────────────── */
const SKILLS = {
  "BI & Visualization": ["Power BI", "DAX", "Power Query", "Data Modeling", "Dashboard Development", "KPI Reporting"],
  "SQL & Databases": ["Advanced SQL (CTEs, Window Functions)", "SQL Server", "MySQL", "PostgreSQL"],
  "Python & Analytics": ["Pandas", "NumPy", "Matplotlib", "Web Scraping (Selenium, Playwright)", "EDA", "Customer Segmentation", "Jupyter"],
  "Tools": ["Excel (Power Pivot, Pivot Tables)", "Google Sheets", "Git & GitHub"],
};

const EXPERIENCE = [
  { role: "Data Collection Analyst", org: "SmartCat Company · Remote, KSA", date: "Apr 2026 – Jun 2026",
    points: ["Engineered Python scripts & automated web scraping to source datasets for AI-powered SaaS platforms.",
             "Managed the end-to-end data collection lifecycle, delivering structured data for training AI agents."] },
  { role: "Python & Data Instructor", org: "GDGC Al-Azhar University · Cairo", date: "Oct 2025 – Present",
    points: ["Mentored 15+ trainees on Python (OOP), Pandas & NumPy analysis workflows.",
             "Guided students in SQL, data modeling, and interactive Power BI dashboards with advanced DAX."] },
  { role: "Operations Manager", org: "AG Care Insurance · Cairo", date: "Aug 2025 – Feb 2026",
    points: ["Streamlined medical-insurance pricing workflows with Excel & Google Sheets (advanced formulas, pivots).",
             "Maintained compliant policy documentation, collaborating cross-functionally for accurate issuance."] },
];

const PROJECTS = [
  { title: "E-Commerce Customer Segmentation", tag: "Customer & Sales Analytics",
    tools: "Python · SQL Server · Power BI · DAX", link: "https://github.com/evehasnaa/bootcamp-data-analysis",
    desc: "Segmentation & behavioral analysis on SQL Server transaction data — CLV, AOV, Retention, MoM & YoY growth — served through interactive Power BI dashboards for marketing and sales decisions." },
  { title: "LinkedIn Job Market Analysis", tag: "Labor Market & Recruitment Analytics",
    tools: "Python · Power BI · DAX · Power Query", link: "https://www.datascienceportfol.io/hasnaaahmed",
    desc: "327 job postings from 193 companies cleaned with Pandas & Power Query; dashboard with custom DAX measures surfacing a $156K average-salary benchmark, top hiring regions, and 5 job families." },
  { title: "Multi-Platform Marketing Analytics", tag: "Marketing Performance Analytics",
    tools: "Power BI · DAX · Power Query", link: "https://github.com/evehasnaa",
    desc: "4-page report analyzing 20 campaigns across Facebook, Instagram & TikTok — 10+ DAX measures tracking ROI, CPC, CPA, CTR and conversion, with dynamic metric-switching and synced slicers." },
  { title: "Healthcare Analytics — End to End", tag: "Analytics Engineering · Medallion",
    tools: "Python · SQL Server · Power BI · TMDL", link: "https://github.com/evehasnaa/healthcare-analysis-end-to-end-project-",
    desc: "1M synthetic encounters generated, loaded through Staging → Bronze → Silver → Gold on SQL Server, and served via a Power BI semantic model — a full analytics-engineering pipeline." },
];

/* ───────────────────────── App ───────────────────────── */
export default function Portfolio() {
  const [entered, setEntered] = useState(false);

  return (
    <div style={{ background: "#FAF6F1", fontFamily: "'Manrope',sans-serif" }} className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Manrope:wght@400;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap');
        html { scroll-behavior: smooth; }
        * { font-family: inherit; }
        .font-mono { font-family: 'IBM Plex Mono', monospace !important; }
        .splash-bar { height: 20%; animation: grow 1.1s ease-in-out infinite alternate; }
        @keyframes grow { from { height: 18%; } to { height: 100%; } }
        .boot-line { animation: fadeUp .4s ease both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(6px); } to { transform: none; } }
        .toast-pop { animation: pop .25s cubic-bezier(.2,1.4,.4,1) both; }
        @keyframes pop { from { transform: scale(.4); opacity: 0;} to { transform: scale(1);} }
        .hero-in { animation: heroIn .9s cubic-bezier(.2,.9,.3,1) both; }
        @keyframes heroIn { from { opacity: 0; transform: translateY(26px);} to { opacity: 1;} }
        .marquee { animation: slide 18s linear infinite; }
        @keyframes slide { from { transform: translateX(0);} to { transform: translateX(-50%);} }
        .proj-card { transition: transform .25s cubic-bezier(.2,.9,.3,1), box-shadow .25s ease; will-change: transform; box-shadow: 0 4px 14px -10px rgba(0,0,0,.35); }
        .proj-card:hover { box-shadow: 0 18px 40px -18px rgba(185,74,59,.45); }
        .lift-card { transition: transform .3s ease, box-shadow .3s ease; box-shadow: 0 2px 12px -8px rgba(34,20,25,.10); }
        .lift-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px -18px rgba(34,20,25,.22); }
        .reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.9,.3,1); }
        .reveal-in { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) { *,*::before,*::after { animation: none !important; transition: none !important; } .reveal { opacity: 1; transform: none; } }
      `}</style>

      {!entered && <Splash onDone={() => setEntered(true)} />}

      {/* ── HERO ── */}
      <header className="relative overflow-hidden"
        style={{ background: "radial-gradient(110% 130% at 80% -10%, #3a222c 0%, #221419 60%)" }}>
        <div className={`max-w-5xl mx-auto px-6 pt-24 pb-16 flex flex-col md:flex-row items-center gap-10 ${entered ? "hero-in" : ""}`}>
          <div className="flex-1">
          <div className="font-mono text-sm mb-4" style={{ color: "#F0A24B" }}>
            {"</>"} hello_world — I'm
          </div>
          <h1 className="font-extrabold leading-[0.95] tracking-tight"
            style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(3rem,9vw,6.5rem)" }}>
            <span style={{ color: "#F2B8C0" }}>HASNAA</span>{" "}
            <span style={{
              background: "linear-gradient(90deg,#B94A3B 0%,#F0A24B 60%,#F2B8C0 100%)",
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              AHMED
            </span>
          </h1>
          <p className="mt-5 text-lg md:text-2xl font-semibold" style={{ color: "#F3E9DC" }}>
            Data Analyst · Business Intelligence
          </p>
          <p className="mt-3 max-w-xl" style={{ color: "#cbb3ad" }}>
            Turning raw data into business decisions — e-commerce, sales & marketing analytics
            with Power BI, SQL, and Python.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#projects" className="px-6 py-3 rounded-full font-bold transition-transform hover:scale-105"
              style={{ background: "linear-gradient(90deg,#B94A3B,#F0A24B)", color: "#221419" }}>
              See my work ↓
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full font-bold transition-transform hover:scale-105"
              style={{ border: "2px solid #F2B8C0", color: "#F2B8C0" }}>
              Contact me
            </a>
            <a href="https://drive.google.com/file/d/1mzRL_Ayhu5aZETCfj3oIpQpNrkqe2JyC/view" target="_blank" rel="noreferrer"
              className="px-6 py-3 rounded-full font-bold transition-transform hover:scale-105"
              style={{ background: "#F2B8C0", color: "#221419" }}>
              ⬇ Download CV
            </a>
          </div>
          </div>

          {/* 🖼️ personal photo slot — replace src with your photo */}
          <div className="w-56 h-56 md:w-64 md:h-64 shrink-0 rounded-3xl overflow-hidden flex items-center justify-center font-mono text-xs text-center p-4"
            style={{ border: "3px solid #F0A24B", background: "repeating-linear-gradient(45deg,#33202a,#33202a 12px,#2b1a21 12px,#2b1a21 24px)",
                     color: "#8a6a75", boxShadow: "0 20px 50px -20px rgba(240,162,75,.5)" }}>
            {/* <img src="YOUR_PHOTO.jpg" alt="Hasnaa Ahmed" className="w-full h-full object-cover" /> */}
            ⬆ your photo here
          </div>
        </div>

        {/* marquee strip */}
        <div className="overflow-hidden py-3" style={{ background: "#B94A3B" }}>
          <div className="marquee whitespace-nowrap font-mono text-sm font-semibold" style={{ color: "#FAF6F1" }}>
            {Array(2).fill("POWER BI ✦ DAX ✦ SQL ✦ PYTHON ✦ ETL ✦ DASHBOARDS ✦ DATA STORYTELLING ✦ ").map((s, i) => (
              <span key={i} className="mx-2">{s}</span>
            ))}
          </div>
        </div>
      </header>

      {/* ── ABOUT ── */}
      <Section id="about" eyebrow="01 · whoami" title="About">
        <p className="text-lg leading-relaxed max-w-3xl" style={{ color: "#6B5A56" }}>
          Data Analyst focused on <b>e-commerce, sales, and marketing</b> domains — experienced in
          end-to-end analytics from <b>data modeling and ETL</b> to <b>dashboards and stakeholder
          reporting</b>. B.Sc. student in Computer Science & Pure Mathematics at Al-Azhar University,
          DEPI Data Analytics graduate, and currently in WorldQuant University's Applied Data Science Lab.
        </p>
      </Section>

      {/* ── SKILLS ── */}
      <div style={{ background: "#F6EEE6" }}>
        <Section id="skills" eyebrow="02 · toolbox" title="Skills">
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat}>
                <div className="font-mono text-sm font-semibold mb-3" style={{ color: "#B94A3B" }}>▸ {cat}</div>
                <div className="flex flex-wrap gap-2">{items.map((s) => <Chip key={s}>{s}</Chip>)}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ── EXPERIENCE ── */}
      <Section id="experience" eyebrow="03 · timeline" title="Experience">
        <div className="relative pl-6" style={{ borderLeft: "3px solid #E7D8CC" }}>
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="mb-10 relative">
              <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full"
                style={{ background: "#B94A3B", border: "3px solid #FAF6F1" }} />
              <div className="flex flex-wrap items-baseline gap-x-3 pl-2">
                <h3 className="text-xl font-bold" style={{ color: "#221419" }}>{e.role}</h3>
                <span className="font-mono text-xs" style={{ color: "#F0A24B" }}>{e.date}</span>
              </div>
              <div className="font-semibold mb-2 pl-2" style={{ color: "#B94A3B" }}>{e.org}</div>
              <ul className="list-disc ml-5 space-y-1" style={{ color: "#6B5A56" }}>
                {e.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PROJECTS ── */}
      <div style={{ background: "#221419" }}>
        <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
          <Reveal>
            <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#F0A24B" }}>
              04 · shipped
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8"
              style={{ fontFamily: "'Syne',sans-serif", color: "#F3E9DC" }}>
              Projects
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <Reveal key={i} delay={i * 110}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* ── EDUCATION ── */}
      <Section id="education" eyebrow="05 · learning" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-5 lift-card" style={{ background: "#FFFDFB", border: "1.5px solid #E7D8CC" }}>
            <div className="font-mono text-xs mb-2" style={{ color: "#B94A3B" }}>DEGREE</div>
            <p className="font-bold" style={{ color: "#221419" }}>B.Sc. Computer Science & Pure Mathematics</p>
            <p style={{ color: "#6B5A56" }}>Al-Azhar University · 2022 – 2027</p>
          </div>
          <div className="rounded-2xl p-5 lift-card" style={{ background: "#FFFDFB", border: "1.5px solid #E7D8CC" }}>
            <div className="font-mono text-xs mb-2" style={{ color: "#B94A3B" }}>PROGRAM</div>
            <p className="font-bold" style={{ color: "#221419" }}>Applied Data Science Lab</p>
            <p style={{ color: "#5a4a44" }}>WorldQuant University · 2026 – Present</p>
          </div>
        </div>
      </Section>

      {/* ── CERTIFICATIONS ── */}
      <div style={{ background: "#F6EEE6" }}>
        <Certifications />
      </div>

      {/* ── CONTACT ── */}
      <div style={{ background: "radial-gradient(110% 120% at 50% 110%, #3a222c 0%, #221419 60%)" }}>
        <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
          <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#F0A24B" }}>
            06 · ping me
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2"
            style={{ fontFamily: "'Syne',sans-serif", color: "#F3E9DC" }}>
            Let's build something with data.
          </h2>
          <p className="mb-8 font-mono text-sm" style={{ color: "#a98790" }}>
            response_time ≈ faster than a Power BI refresh 😉
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ContactCard icon="📧" label="Email" value={LINKS.email} action="copy" />
            <ContactCard icon="📱" label="Phone / WhatsApp" value={LINKS.phone} action="open" href={LINKS.whatsapp} />
            <ContactCard icon="💼" label="LinkedIn" value="hasnaa-ahmed-data-analysis" action="open" href={LINKS.linkedin} />
            <ContactCard icon="💻" label="GitHub" value="evehasnaa" action="open" href={LINKS.github} />
          </div>
          <footer className="mt-14 pt-6 text-center font-mono text-xs"
            style={{ borderTop: "1px solid #4a2f3a", color: "#8a6a75" }}>
            © 2026 Hasnaa Ahmed — built with ☕ and way too many SELECT statements.
          </footer>
        </section>
      </div>
    </div>
  );
}
