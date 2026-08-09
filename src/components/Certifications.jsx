import { CERTIFICATES } from "../data/certificates";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
      {/* Section Header */}
      <div className="mb-4">
        <div
          className="font-mono tracking-[0.35em] uppercase text-sm mb-3 font-semibold"
          style={{ color: "#F59E0B" }}
        >
          05 · certified
        </div>

        <h2
          className="text-3xl md:text-4xl font-extrabold mb-3"
          style={{
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            color: "#F8FAFC",
          }}
        >
          Professional Certifications
        </h2>

        <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
          Verified industry credentials across Data Analytics, SQL, Python, AI, and Executive Virtual Assistance.
        </p>
      </div>

      {/* Animated Testimonials / Certificates Component */}
      <AnimatedTestimonials testimonials={CERTIFICATES} autoplay={true} />
    </section>
  );
}
