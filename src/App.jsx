import { useState, useEffect, useRef } from "react";
import Certifications from "./components/Certifications";
import hasnaaPhoto from "./img/hasnaa .jpeg";
import marketingImg from "./img/markiting-1_page-0001.jpg";
import ecommerceImg from "./img/ecomerace.png";
import healthcareImg from "./img/healthcare analytics_page-0001.jpg";
import linkedinImg from "./img/linkedin dashboard_page-0001.jpg";

/* ─── Design system ───
   bg      #F8FAFC / #F1F5F9 / #E2E8F0     card #FFFFFF     border #CBD5E1
   text    #0F172A (primary) / #475569 (secondary)
   primary #2563EB   secondary #3B82F6   accent #F59E0B   success #10B981 */

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
      style={{ background: "radial-gradient(120% 120% at 50% 10%, #1E293B 0%, #0F172A 55%, #0B1120 100%)" }}>
      {/* animated bars */}
      <div className="flex items-end gap-2 h-28 mb-8">
        {[0,1,2,3,4,5,6,7].map((i) => (
          <div key={i} className="w-4 rounded-t-md splash-bar"
            style={{
              animationDelay: `${i * 0.12}s`,
              background: i % 3 === 0 ? "#2563EB" : i % 3 === 1 ? "#3B82F6" : "#F59E0B",
            }} />
        ))}
      </div>

      <div className="font-mono text-sm md:text-base text-left w-72 md:w-96 min-h-[130px]" style={{ color: "#F8FAFC" }}>
        {BOOT_LINES.slice(0, lineIdx).map((l, i) => (
          <div key={i} className="boot-line" style={{ opacity: 0.55 + i * 0.1 }}>{l}</div>
        ))}
        <div className="mt-3" style={{ color: "#F59E0B" }}>
          loading insight… <span className="font-bold">{hex}</span> / x064
        </div>
        <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: "#1E293B" }}>
          <div className="h-full rounded-full transition-all duration-100"
            style={{ width: `${pct}%`, background: "linear-gradient(90deg,#2563EB,#3B82F6)" }} />
        </div>
      </div>

      <p className="mt-8 text-center px-6 text-xl md:text-2xl font-bold tracking-tight"
        style={{ color: "#F8FAFC", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
        ⭐ <span style={{ color: "#F59E0B" }}>Stars</span> are the only KPI I can't build a{" "}
        <span style={{ color: "#3B82F6" }}>dashboard</span> for.
      </p>

    </div>
  );
}

/* ───────────────────────── Small helpers ───────────────────────── */
const Eyebrow = ({ children }) => (
  <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#F59E0B" }}>
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
    <section id={id} className="max-w-7xl mx-auto px-6 py-20">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#F8FAFC" }}>
          {title}
        </h2>
      </Reveal>
      <Reveal delay={120}>{children}</Reveal>
    </section>
  );
}

function Chip({ children }) {
  return (
    <span className="px-3.5 py-2 rounded-full text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{ background: "transparent", border: "1.5px solid #334155", color: "#CBD5E1" }}>
      {children}
    </span>
  );
}

/* ───────────────────────── Confetti burst ───────────────────────── */
function burst(x, y) {
  const colors = ["#2563EB", "#3B82F6", "#F59E0B", "#10B981"];
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
      className="relative text-left rounded-2xl p-5 w-full transition-transform duration-150 lift-card"
      style={{ background: "transparent", border: "1.5px solid #334155" }}>
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-mono text-xs tracking-widest uppercase" style={{ color: "#60A5FA" }}>{label}</div>
      <div className="font-semibold mt-1 break-all" style={{ color: "#F8FAFC" }}>{value}</div>
      <div className="mt-3 text-xs font-mono" style={{ color: "#3B82F6" }}>
        {action === "copy" ? "tap to copy ⧉" : "tap to open ↗"}
      </div>
      {toast && (
        <div className="absolute -top-3 right-3 px-3 py-1 rounded-full text-xs font-bold toast-pop"
          style={{ background: "#10B981", color: "#FFFFFF" }}>
          Copied ✓
        </div>
      )}
    </button>
  );
}

/* ───────────────────────── Project card (horizontal) ───────────────────────── */
function ProjectCard({ p }) {
  return (
    <div
      className="proj-card rounded-2xl overflow-hidden flex flex-col"
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
        <div className="font-mono text-xs uppercase tracking-[0.2em] mb-2"
          style={{ color: "#F59E0B" }}>{p.tag}</div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <a href={p.powerbiLink || p.githubLink} target="_blank" rel="noreferrer"
            className="text-lg font-bold" style={{ color: "#60A5FA", lineHeight: 1.3, textDecoration: "none" }}>
            {p.title} <span className="proj-arrow" style={{ color: "#F59E0B" }}>↗</span>
          </a>
          <div className="flex gap-2 shrink-0">
            {p.githubLink && (
              <a href={p.githubLink} target="_blank" rel="noreferrer"
                style={{ background: "#0B1730", border: "1px solid #475569", color: "#CBD5E1",
                  borderRadius: "6px", padding: "4px 10px", fontSize: "12px",
                  fontFamily: "monospace", textDecoration: "none" }}>
                {"</>"} Code
              </a>
            )}
            {p.powerbiLink && (
              <a href={p.powerbiLink} target="_blank" rel="noreferrer"
                style={{ background: "rgba(37,99,235,0.15)", border: "1px solid #2563EB", color: "#60A5FA",
                  borderRadius: "6px", padding: "4px 10px", fontSize: "12px",
                  fontFamily: "monospace", textDecoration: "none" }}>
                Live ↗
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {p.tools.split("·").map((t) => (
            <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-full"
              style={{ background: "#0B1730", border: "1px solid #334155", color: "#CBD5E1" }}>
              {t.trim()}
            </span>
          ))}
        </div>
        <p className="text-sm mt-auto" style={{ color: "#94A3B8", lineHeight: 1.7 }}>
          {p.desc}
        </p>
      </div>
    </div>
  );
}

/* ───────────────────────── Data ───────────────────────── */
const SKILL_ICONS = {
  "SQL": "🗄️",
  "POWER BI": "📊",
  "PYTHON": "🐍",
  "EXCEL": "📈",
  "Figma": "🎨",
};

const SKILLS = {
  "SQL": ["Advanced Analytics", "Query Optimization"],
  "POWER BI": ["DAX", "Data Modeling"],
  "PYTHON": ["Data Wrangling", "Exploratory Analysis"],
  "EXCEL": ["Power Query", "Pivot Tables"],
  "Figma": ["Dashboard Design", "Prototyping"],
};

const EXPERIENCE = [
  { role: "Data Collection Analyst", org: "SmartCat Company · Remote, Saudi Arabia", date: "Apr 2026 – Jun 2026",
    points: ["Automated end-to-end data collection using Python delivering structured datasets for AI-powered SaaS products.",
             "Cleaned, validated, and transformed raw data into high-quality datasets optimized for AI model training."] },
  { role: "Python & Data Instructor", org: "GDGC Al-Azhar University · Cairo", date: "Oct 2025 – Present",
    points: ["Mentored 15+ trainees in Python, SQL, and data analysis.",
             "Delivered hands-on training in data modeling and Power BI dashboard development with DAX."] },
  { role: "Operations Manager", org: "AG Care Insurance · Cairo", date: "Aug 2025 – Feb 2026",
    points: ["Managed medical insurance pricing using Excel, ensuring accurate calculations and policy quotations.",
             "Prepared operational reports and policy documentation using Microsoft Word to support timely policy issuance."] },
];

const PROJECTS = [
  {
    title: "Healthcare Analytics — End to End",
    tag: "Analytics Engineering · Medallion",
    tools: "Python · SQL Server · Power BI · TMDL",
    link: "https://github.com/evehasnaa/healthcare-analysis-end-to-end-project-",
    githubLink: "https://github.com/evehasnaa/healthcare-analysis-end-to-end-project-",
    powerbiLink: null,
    img: healthcareImg,
    desc: "1M synthetic encounters generated, loaded through Staging → Bronze → Silver → Gold on SQL Server, and served via a Power BI semantic model — a full analytics-engineering pipeline.",
  },
  {
    title: "LinkedIn Job Market Analysis",
    tag: "Labor Market & Recruitment Analytics",
    tools: "Python · Power BI · DAX · Power Query",
    link: "https://github.com/evehasnaa/LINKEDIN-JOP-DATA-ANALYSIS-PROJECT-",
    githubLink: "https://github.com/evehasnaa/LINKEDIN-JOP-DATA-ANALYSIS-PROJECT-",
    powerbiLink: "https://app.powerbi.com/groups/me/reports/3c2f9417-c369-43aa-b8d7-6871086ddb93?ctid=2bb6e5bc-c109-47fb-9433-c1c6f4fa33ff&pbi_source=linkShare",
    img: linkedinImg,
    desc: "327 job postings from 193 companies cleaned with Pandas & Power Query; dashboard with custom DAX measures surfacing a $156K average-salary benchmark, top hiring regions, and 5 job families.",
  },
  {
    title: "Multi-Platform Marketing Analytics",
    tag: "Marketing Performance Analytics",
    tools: "Power BI · DAX · Power Query",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMTAxYzZkZTgtYzEzNS00ZTVlLTlhNTMtYmU2NjhlYmU3MTUwIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    githubLink: null,
    powerbiLink: "https://app.powerbi.com/view?r=eyJrIjoiMTAxYzZkZTgtYzEzNS00ZTVlLTlhNTMtYmU2NjhlYmU3MTUwIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    img: marketingImg,
    desc: "4-page report analyzing 20 campaigns across Facebook, Instagram & TikTok — 10+ DAX measures tracking ROI, CPC, CPA, CTR and conversion, with dynamic metric-switching and synced slicers.",
  },
  {
    title: "E-Commerce Customer Segmentation",
    tag: "Customer & Sales Analytics",
    tools: "Python · SQL Server · Power BI · DAX",
    link: "https://github.com/evehasnaa/bootcamp-data-analysis",
    githubLink: "https://github.com/evehasnaa/bootcamp-data-analysis",
    powerbiLink: null,
    img: ecommerceImg,
    desc: "Segmentation & behavioral analysis on SQL Server transaction data — CLV, AOV, Retention, MoM & YoY growth — served through interactive Power BI dashboards for marketing and sales decisions.",
  },
];

/* ───────────────────────── App ───────────────────────── */
export default function Portfolio() {
  const [entered, setEntered] = useState(false);

  return (
    <div style={{ background: "#0A1628", fontFamily: "'Manrope',sans-serif" }} className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Manrope:wght@400;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap');
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
        .marquee { display: flex; animation: slide 18s linear infinite; }
        @keyframes slide { from { transform: translateX(0);} to { transform: translateX(-25%);} }
        .proj-card { position: relative; transition: transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.3s ease; will-change: transform; }
        .proj-card:hover { transform: translateY(-6px); border-color: #2563EB !important; }
        .proj-card::before { content: ''; position: absolute; left: 0; top: 0; right: 0; height: 3px; background: #F59E0B; opacity: 0; transition: opacity .3s ease; z-index: 2; border-radius: 12px 12px 0 0; }
        .proj-card:hover::before { opacity: 1; }
        .proj-card .proj-img { transition: transform .3s cubic-bezier(.25,.46,.45,.94); }
        .proj-card:hover .proj-img { transform: scale(1.04); }
        .proj-card .proj-arrow { display: inline-block; transition: transform .3s cubic-bezier(.25,.46,.45,.94); }
        .proj-card:hover .proj-arrow { transform: translate(4px,-4px); }
        .lift-card { transition: transform .3s ease, box-shadow .3s ease; box-shadow: 0 4px 14px rgba(15,23,42,.06); }
        .lift-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(15,23,42,.08); }
        .svc-card { transition: transform .35s cubic-bezier(.25,.46,.45,.94), box-shadow .35s ease; box-shadow: 0 4px 14px rgba(15,23,42,.2); }
        .svc-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 18px 45px rgba(15,23,42,.55); }
        .reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.9,.3,1); }
        .reveal-in { opacity: 1; transform: none; }
        .btn-primary { background: #2563EB; }
        .btn-primary:hover { background: #3B82F6; }
        .btn-outline { border: 2px solid #60A5FA; color: #60A5FA; }
        .btn-outline:hover { background: #2563EB; border-color: #2563EB; color: #FFFFFF; }
        .bg-anim { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none;
          background: linear-gradient(120deg,#0A1628 0%,#0D1B33 25%,#0A1628 50%,#102040 75%,#0A1628 100%);
          background-size: 300% 300%; animation: bgShift 26s ease-in-out infinite alternate; }
        @keyframes bgShift { from { background-position: 0% 50%; } to { background-position: 100% 50%; } }
        .blob { position: absolute; border-radius: 9999px; filter: blur(90px); will-change: transform;
          animation: drift 20s ease-in-out infinite alternate; }
        @keyframes drift {
          0%   { transform: translate(0,0) scale(1); }
          50%  { transform: translate(90px,-70px) scale(1.12); }
          100% { transform: translate(-70px,60px) scale(.95); }
        }
        @media (prefers-reduced-motion: reduce) { *,*::before,*::after { animation: none !important; transition: none !important; } .reveal { opacity: 1; transform: none; } }
        .hasnaa-exe { display: inline-block;
          animation: blink-cursor 1.1s step-end infinite; }
        @keyframes blink-cursor {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; } }
      `}</style>

      {!entered && <Splash onDone={() => setEntered(true)} />}

      {/* ── ANIMATED BACKGROUND ── */}
      <div className="bg-anim" aria-hidden="true">
        <div className="blob" style={{ width: "48vw", height: "48vw", top: "-12%", left: "-10%", background: "rgba(37,99,235,.16)", animationDuration: "22s" }} />
        <div className="blob" style={{ width: "42vw", height: "42vw", top: "20%", right: "-12%", background: "rgba(59,130,246,.14)", animationDuration: "26s", animationDelay: "-6s" }} />
        <div className="blob" style={{ width: "40vw", height: "40vw", bottom: "-10%", left: "12%", background: "rgba(245,158,11,.12)", animationDuration: "24s", animationDelay: "-12s" }} />
        <div className="blob" style={{ width: "34vw", height: "34vw", bottom: "18%", right: "18%", background: "rgba(16,185,129,.10)", animationDuration: "28s", animationDelay: "-18s" }} />
      </div>

      <div className="relative z-10">

      {/* ── SIDE CTA BUTTONS ── */}
      <div style={{ position: "fixed", right: "1rem", top: "50%", transform: "translateY(-50%)",
        zIndex: 50, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <a href="#projects" className="font-mono text-xs font-bold tracking-widest"
          style={{ writingMode: "vertical-rl", background: "#F59E0B", color: "#0F172A",
            borderRadius: "9999px", padding: "1rem 0.75rem", textDecoration: "none" }}>
          Check my work
        </a>
        <a href="#contact" className="font-mono text-xs font-bold tracking-widest"
          style={{ writingMode: "vertical-rl", background: "#2563EB", color: "#FFFFFF",
            borderRadius: "9999px", padding: "1rem 0.75rem", textDecoration: "none" }}>
          Hire me
        </a>
      </div>

      {/* ── NAVBAR ── */}
      <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl rounded-2xl px-6 py-3 flex items-center justify-between"
        style={{ background: "transparent", border: "1px solid #64748B" }}>
        <a href="#" className="font-mono font-bold text-lg tracking-tight" style={{ color: "#F8FAFC" }}>
          <span style={{ color: "#F59E0B" }}>{">"}</span> HASNAA_AHMED
        </a>
        <div className="hidden md:flex items-center gap-7 font-mono text-xs tracking-[0.15em] uppercase">
          <a href="#skills" className="transition-colors hover:text-white" style={{ color: "#94A3B8" }}>Skills</a>
          <a href="#services" className="transition-colors hover:text-white" style={{ color: "#94A3B8" }}>Services</a>
          <a href="#experience" className="transition-colors hover:text-white" style={{ color: "#94A3B8" }}>Experience</a>
          <a href="#projects" className="transition-colors hover:text-white" style={{ color: "#94A3B8" }}>Projects</a>
          <a href="#certifications" className="transition-colors hover:text-white" style={{ color: "#94A3B8" }}>Certifications</a>
          <a href="#education" className="transition-colors hover:text-white" style={{ color: "#94A3B8" }}>Education</a>
          <a href="#contact" className="transition-colors hover:text-white" style={{ color: "#94A3B8" }}>Contact</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="relative overflow-hidden">
        <div className={`flex flex-col md:flex-row md:items-stretch ${entered ? "hero-in" : ""}`}
          style={{ minHeight: "100vh", padding: 0, maxWidth: "100%", margin: 0 }}>
          <div className="flex flex-col justify-center w-full md:w-[45%] px-6 pt-24 pb-12 md:py-20 md:pr-12 md:pl-24">
          {/* main headline */}
          <h1 className="font-extrabold leading-tight mb-6"
            style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "clamp(2.4rem,4.5vw,4rem)",
              lineHeight: "1.08"
            }}>
            <span style={{ color: "#F59E0B" }}>Hasnaa Ahmed</span>
            <br />
            <span style={{ color: "#F8FAFC" }}>&gt; Data Analytics</span>
          </h1>

          <p className="mt-5 mb-10 text-lg"
            style={{ color: "#CBD5E1", maxWidth: "40ch", lineHeight: "1.8" }}>
            Transforming raw data into{" "}
            <strong style={{ color: "#F8FAFC" }}>actionable insights</strong>
            . Building bridges between complex datasets and strategic
            business decisions through Power BI, SQL, and Python.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary px-8 py-4 text-lg rounded-full font-bold transition-all hover:scale-105"
              style={{ color: "#FFFFFF" }}>
              Check my work ↓
            </a>
            <a href="#contact" className="btn-outline px-8 py-4 text-lg rounded-full font-bold transition-all hover:scale-105">
              Contact me
            </a>
          </div>
          </div>

          {/* 🖼️ personal photo */}
          <div className="shrink-0 w-full md:w-[55%] flex items-center justify-center px-6 pb-12 md:py-20">
            <img
              src={hasnaaPhoto}
              alt="Hasnaa Ahmed"
              className="rounded-lg"
              style={{
                width: "min(100%, 470px)",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                objectPosition: "center top",
                border: "1px solid #334155",
                boxShadow: "0 20px 60px rgba(0,0,0,0.45)"
              }}
            />
          </div>
        </div>

        {/* marquee strip */}
        <div className="overflow-hidden py-3" style={{ background: "#2563EB" }}>
          <div className="marquee whitespace-nowrap font-mono text-sm font-semibold" style={{ color: "#F8FAFC" }}>
            {Array(4).fill("POWER BI ✦ DAX ✦ SQL ✦ PYTHON ✦ ETL ✦ DASHBOARDS ✦ DATA STORYTELLING ✦ ").map((s, i) => (
              <span key={i} className="mx-2">{s}</span>
            ))}
          </div>
        </div>
      </header>

      {/* ── ABOUT + SKILLS (side by side) ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div id="about" className="flex flex-col">
            <Reveal>
              <Eyebrow>01 · whoami</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#F8FAFC" }}>
                About
              </h2>
            </Reveal>
            <Reveal delay={120} className="flex-1">
              <div className="space-y-7">
                <p className="font-extrabold leading-tight"
                  style={{ 
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: "clamp(1.6rem,3vw,2.2rem)",
                    color: "#F8FAFC" 
                  }}>
                  Hi, I am{" "}
                  <span style={{ color: "#3B82F6" }}>Hasnaa Ahmed</span>
                  {" "}X0, focusing on Leveraging Data into Business Growth.
                </p>

                <p className="font-mono"
                  style={{ color: "#CBD5E1", fontSize: "1.125rem", lineHeight: "1.85" }}>
                  <span style={{ color: "#F59E0B" }}>&gt;_</span>
                  {" "}I design ETL workflows, build multi-fact SQL models,
                  and deliver interactive Power BI dashboards with 
                  time-intelligence measures that support strategic decisions.
                </p>

                <p className="font-mono"
                  style={{ color: "#CBD5E1", fontSize: "1.125rem", lineHeight: "1.85" }}>
                  <span style={{ color: "#60A5FA" }}>/**</span>
                  {" "}Focus: translating raw data into KPI-driven insights
                  using Python, SQL Server, Power Query, and DAX for 
                  non-technical stakeholders.
                  {" "}<span style={{ color: "#60A5FA" }}>*/</span>
                </p>
              </div>
            </Reveal>
          </div>

          <div id="skills" className="flex flex-col">
            <Reveal>
              <Eyebrow>01 · toolbox</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#F8FAFC" }}>
                Skills
              </h2>
            </Reveal>
            <Reveal delay={120} className="flex-1">
              <div className="rounded-3xl p-8 h-full"
                style={{ background: "#111F3D", border: "1.5px solid #64748B",
                         boxShadow: "0 12px 40px rgba(100,116,139,.35), 0 4px 14px rgba(15,23,42,.4)" }}>
                <div className="grid grid-cols-1 gap-7">
                  {Object.entries(SKILLS).map(([cat, items]) => (
                    <div key={cat}>
                      <div className={`font-mono font-bold mb-3 ${["SQL", "POWER BI", "PYTHON"].includes(cat) ? "text-lg" : "text-sm font-semibold"}`}
                        style={{ color: "#60A5FA" }}>
                        {SKILL_ICONS[cat]} {cat}
                      </div>
                      <div className="flex flex-wrap gap-2.5">{items.map((s) => <Chip key={s}>{s}</Chip>)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <Section id="services" eyebrow="02 · hire me" title="Freelance Services">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "📊", accent: "#F59E0B", title: "Power BI Dashboards",
              desc: "Interactive, decision-ready dashboards with advanced DAX, time intelligence, and drill-through storytelling.",
              tags: ["DAX", "Data Modeling", "KPI Design"] },
            { icon: "🗄️", accent: "#3B82F6", title: "SQL Data Modeling",
              desc: "Star schemas, ETL pipelines, and optimized queries — from raw tables to clean, analysis-ready models.",
              tags: ["ETL", "Star Schema", "Optimization"] },
            { icon: "🐍", accent: "#10B981", title: "Python Analysis",
              desc: "Data cleaning, automation, and exploratory analysis with Pandas & NumPy — turning messy data into insights.",
              tags: ["Pandas", "Automation", "EDA"] },
            { icon: "📈", accent: "#8B5CF6", title: "Excel Solutions",
              desc: "Power Query workflows, pivot reporting, and advanced formulas that save hours of manual work.",
              tags: ["Power Query", "Pivots", "Reports"] },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl p-7 svc-card flex flex-col"
              style={{ background: "rgba(15,23,42,0.55)", border: "1.5px solid #334155", borderTop: `3px solid ${s.accent}` }}>
              <div className="flex items-center justify-center rounded-xl text-3xl mb-5"
                style={{ width: "56px", height: "56px", border: `1.5px solid ${s.accent}40`, background: "rgba(10,22,40,0.6)" }}>
                {s.icon}
              </div>
              <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#F8FAFC" }}>
                {s.title}
              </h3>
              <p className="text-base mb-5 flex-1" style={{ color: "#94A3B8", lineHeight: "1.75" }}>
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-md"
                    style={{ background: "#0B1730", border: "1px solid #334155", color: s.accent }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#contact" className="btn-primary inline-block px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
            style={{ color: "#FFFFFF" }}>
            🚀 Let's work together →
          </a>
        </div>
      </Section>

      {/* ── EXPERIENCE ── */}
      <div>
        <Section id="experience" eyebrow="03 · timeline" title="Experience">
          <div className="relative pl-6" style={{ borderLeft: "3px solid #334155" }}>
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="mb-14 relative">
                <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full"
                  style={{ background: "#2563EB", border: "3px solid #0A1628" }} />
                <div className="flex flex-wrap items-baseline gap-x-3 pl-2">
                  <h3 className="text-2xl font-bold" style={{ color: "#F8FAFC" }}>{e.role}</h3>
                  <span className="font-mono text-sm" style={{ color: "#F59E0B" }}>{e.date}</span>
                </div>
                <div className="font-semibold text-lg mb-3 pl-2" style={{ color: "#60A5FA" }}>{e.org}</div>
                <ul className="list-disc ml-5 space-y-2 text-lg" style={{ color: "#CBD5E1", lineHeight: "1.8" }}>
                  {e.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ── PROJECTS ── */}
      <div>
        <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
          <Reveal>
            <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#F59E0B" }}>
              04 · shipped
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#F8FAFC" }}>
              Projects
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem" }}>
            {PROJECTS.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* ── CERTIFICATIONS ── */}
      <Certifications />

      {/* ── EDUCATION ── */}
      <Section id="education" eyebrow="06 · learning" title="Education">
        <div className="flex flex-col gap-8">

          {/* Al-Azhar */}
          <div className="rounded-2xl p-6 md:p-8 lift-card flex flex-col md:flex-row gap-6 md:items-start w-full"
            style={{ background: "rgba(15,23,42,0.55)", border: "1.5px solid #334155" }}>
            <div className="shrink-0 flex items-center justify-center rounded-xl text-3xl"
              style={{ width: "64px", height: "64px", border: "1.5px solid #334155", background: "rgba(10,22,40,0.6)" }}>
              🎓
            </div>
            <div>
              <h3 className="font-mono font-bold text-2xl md:text-3xl mb-4" style={{ color: "#3B82F6" }}>
                B.Sc. Computer Science & Pure Mathematics
              </h3>
              <div className="flex flex-wrap items-center gap-3 mb-5 font-mono text-sm">
                <span className="px-3.5 py-1.5 rounded-md font-bold tracking-wider"
                  style={{ border: "1px solid #334155", background: "#0B1730", color: "#F8FAFC" }}>
                  AL-AZHAR UNIVERSITY
                </span>
                <span className="px-3.5 py-1.5 rounded-md"
                  style={{ background: "#0B1730", color: "#CBD5E1" }}>
                  Grad Year: 2027 | 2022 – Present
                </span>
              </div>
              <p className="text-lg" style={{ color: "#CBD5E1", lineHeight: "1.8" }}>
                Double major combining computer science — algorithms, databases, and programming —
                with rigorous pure mathematics. Built the analytical and logical foundation that
                powers my SQL data modeling, statistics, and Power BI analytics work.
              </p>
            </div>
          </div>

          {/* WorldQuant */}
          <div className="rounded-2xl p-6 md:p-8 lift-card flex flex-col md:flex-row gap-6 md:items-start w-full"
            style={{ background: "rgba(15,23,42,0.55)", border: "1.5px solid #334155" }}>
            <div className="shrink-0 flex items-center justify-center rounded-xl text-3xl"
              style={{ width: "64px", height: "64px", border: "1.5px solid #334155", background: "rgba(10,22,40,0.6)" }}>
              📊
            </div>
            <div>
              <h3 className="font-mono font-bold text-2xl md:text-3xl mb-4" style={{ color: "#3B82F6" }}>
                Applied Data Science Lab
              </h3>
              <div className="flex flex-wrap items-center gap-3 mb-5 font-mono text-sm">
                <span className="px-3.5 py-1.5 rounded-md font-bold tracking-wider"
                  style={{ border: "1px solid #334155", background: "#0B1730", color: "#F8FAFC" }}>
                  WORLDQUANT UNIVERSITY
                </span>
                <span className="px-3.5 py-1.5 rounded-md"
                  style={{ background: "#0B1730", color: "#CBD5E1" }}>
                  2026 – Present
                </span>
              </div>
              <p className="text-lg" style={{ color: "#CBD5E1", lineHeight: "1.8" }}>
                Project-based program covering end-to-end data science workflows in Python —
                data wrangling, visualization, statistical modeling, and machine learning
                applied to real-world datasets.
              </p>
            </div>
          </div>

        </div>
      </Section>


      {/* ── CONTACT ── */}
      <div>
        <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
          <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#F59E0B" }}>
            07 · ping me
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#F8FAFC" }}>
            Let's build something with data.
          </h2>
          <p className="mb-8 font-mono text-sm" style={{ color: "#94A3B8" }}>
            response_time ≈ faster than a Power BI refresh 😉
          </p>
          <div className="rounded-xl overflow-hidden max-w-xl"
            style={{ background: "rgba(10,22,40,0.85)", border: "1px solid #334155" }}>
            {/* terminal title bar */}
            <div className="relative flex items-center px-4 py-2.5"
              style={{ background: "#1E293B", borderBottom: "1px solid #334155" }}>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: "#EF4444" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#F59E0B" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#10B981" }} />
              </div>
              <span className="absolute left-1/2 -translate-x-1/2 font-mono text-xs" style={{ color: "#94A3B8" }}>
                contact.sh
              </span>
            </div>
            {/* terminal body */}
            <div className="px-7 py-7 font-mono text-base space-y-6">
              <div>
                <div><span style={{ color: "#F59E0B" }}>$</span> <span style={{ color: "#94A3B8" }}>echo $LOCATION</span></div>
                <div className="mt-1 font-semibold" style={{ color: "#F8FAFC" }}>📍 Cairo, Egypt</div>
              </div>
              <div>
                <div><span style={{ color: "#F59E0B" }}>$</span> <span style={{ color: "#94A3B8" }}>echo $ROLE</span></div>
                <div className="mt-1 font-semibold" style={{ color: "#F8FAFC" }}>🕐 Data Analyst | BI Analyst</div>
              </div>
              <div>
                <div><span style={{ color: "#F59E0B" }}>$</span> <span style={{ color: "#94A3B8" }}>echo $PHONE / $WHATSAPP</span></div>
                <a href={LINKS.whatsapp} target="_blank" rel="noreferrer"
                  className="mt-1 inline-block font-semibold hover:underline" style={{ color: "#F8FAFC" }}>
                  📞 {LINKS.phone}
                </a>
              </div>
              <div>
                <div><span style={{ color: "#F59E0B" }}>$</span> <span style={{ color: "#94A3B8" }}>echo $EMAIL</span></div>
                <a href={`mailto:${LINKS.email}`}
                  className="mt-1 inline-block font-semibold hover:underline" style={{ color: "#F8FAFC" }}>
                  ✉️ {LINKS.email}
                </a>
              </div>
              <div>
                <div><span style={{ color: "#F59E0B" }}>$</span> <span style={{ color: "#94A3B8" }}>echo $SOCIALS</span></div>
                <div className="mt-1 flex gap-6">
                  <a href={LINKS.linkedin} target="_blank" rel="noreferrer"
                    className="font-semibold hover:underline" style={{ color: "#F8FAFC" }}>
                    💼 LinkedIn
                  </a>
                  <a href={LINKS.github} target="_blank" rel="noreferrer"
                    className="font-semibold hover:underline" style={{ color: "#F8FAFC" }}>
                    🐙 Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── FOOTER ── */}
      <div>
        <footer className="max-w-7xl mx-auto px-6 py-6 text-center font-mono text-xs"
          style={{ borderTop: "1px solid #334155", color: "#94A3B8" }}>
          © 2026 Hasnaa Ahmed — built with ☕ and way too many SELECT statements.
        </footer>
      </div>

      </div>
    </div>
  );
}
