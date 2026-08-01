import { useState } from "react";
import ServerCanvas from "./components/ui/server-canvas";
import { Terminal } from "./components/ui/terminal";
import Certifications from "./components/Certifications";
import Splash from "./components/SplashLoader";
import Navbar from "./components/Navbar";
import SideCTAs from "./components/SideCTAs";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Reveal, Eyebrow } from "./components/ui/Reveal";
import { EXPERIENCE, PROJECTS } from "./data/portfolioData";

export default function Portfolio() {
  const [entered, setEntered] = useState(false);
  const [canvasEnabled, setCanvasEnabled] = useState(true);

  return (
    <div
      style={{ background: "#0A1628", fontFamily: "'Manrope',sans-serif" }}
      className="min-h-screen relative overflow-x-hidden"
    >
      {canvasEnabled && <ServerCanvas />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Manrope:wght@400;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap');
        html { scroll-behavior: smooth; }
        * { font-family: inherit; }
        .font-mono { font-family: 'IBM Plex Mono', monospace !important; }
        .modern-scrollbar::-webkit-scrollbar { width: 5px; }
        .modern-scrollbar::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.4); border-radius: 8px; }
        .modern-scrollbar::-webkit-scrollbar-thumb { background: rgba(56, 189, 248, 0.35); border-radius: 8px; }
        .modern-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(245, 158, 11, 0.75); }
        .splash-bar { height: 20%; animation: grow 1.1s ease-in-out infinite alternate; }
        @keyframes grow { from { height: 18%; } to { height: 100%; } }
        .boot-line { animation: fadeUp .4s ease both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(6px); } to { transform: none; } }
        .toast-pop { animation: pop .25s cubic-bezier(.2,1.4,.4,1) both; }
        @keyframes pop { from { transform: scale(.4); opacity: 0;} to { transform: scale(1);} }
        .text-stroke { -webkit-text-stroke: 2px #60A5FA; color: transparent; }
        @media (max-width: 640px) { .text-stroke { -webkit-text-stroke: 1.5px #60A5FA; } }
        .portrait-mask {
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);
        }
        .hero-in { animation: heroIn .9s cubic-bezier(.2,.9,.3,1) both; }
        @keyframes heroIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
        .proj-card .proj-img img { transition: transform .5s cubic-bezier(.25,.46,.45,.94); }
        .proj-card:hover .proj-img img { transform: scale(1.05); }
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
          background: linear-gradient(120deg,#0A1628 0%,#0D1F3C 25%,#0A1628 50%,#0E2040 75%,#0A1628 100%);
          background-size: 300% 300%; animation: bgShift 26s ease-in-out infinite alternate; }
        @keyframes bgShift { from { background-position: 0% 50%; } to { background-position: 100% 50%; } }
        .blob { position: absolute; border-radius: 9999px; filter: blur(60px); will-change: transform;
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

      {/* Animated Background Blobs */}
      <div className="bg-anim" aria-hidden="true">
        <div
          className="blob"
          style={{
            width: "48vw",
            height: "48vw",
            top: "-12%",
            left: "-10%",
            background: "rgba(37,99,235,.35)",
            animationDuration: "22s",
          }}
        />
        <div
          className="blob"
          style={{
            width: "42vw",
            height: "42vw",
            top: "20%",
            right: "-12%",
            background: "rgba(59,130,246,.28)",
            animationDuration: "26s",
            animationDelay: "-6s",
          }}
        />
        <div
          className="blob"
          style={{
            width: "40vw",
            height: "40vw",
            bottom: "-10%",
            left: "12%",
            background: "rgba(245,158,11,.22)",
            animationDuration: "24s",
            animationDelay: "-12s",
          }}
        />
        <div
          className="blob"
          style={{
            width: "34vw",
            height: "34vw",
            bottom: "18%",
            right: "18%",
            background: "rgba(16,185,129,.20)",
            animationDuration: "28s",
            animationDelay: "-18s",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Floating Side CTAs */}
        <SideCTAs
          canvasEnabled={canvasEnabled}
          setCanvasEnabled={setCanvasEnabled}
        />

        {/* Top Navbar */}
        <Navbar
          canvasEnabled={canvasEnabled}
          setCanvasEnabled={setCanvasEnabled}
        />

        {/* Hero Section */}
        <Hero entered={entered} />

        {/* About + Skills Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch w-full min-w-0">
            <AboutSection />
            <div
              id="skills"
              className="flex flex-col w-full min-w-0 overflow-hidden"
            >
              <Reveal>
                <Eyebrow>01 · toolbox</Eyebrow>
                <h2
                  className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8"
                  style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    color: "#F8FAFC",
                  }}
                >
                  Skills
                </h2>
              </Reveal>
              <Reveal delay={120} className="flex-1 w-full min-w-0">
                <Terminal />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Experience Section */}
        <ExperienceTimeline experience={EXPERIENCE} />

        {/* Projects Section */}
        <ProjectsSection projects={PROJECTS} />

        {/* Certifications Section */}
        <Certifications />

        {/* Education Section */}
        <EducationSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
