"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const IconArrowLeft = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

export const IconArrowRight = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

export const IconExternalLink = ({ className = "h-4 w-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// Pre-computed deterministic rotation values for card stack to prevent layout jitter
const ROTATIONS = [0, -5, 4, -3, 6, -3, 4, -4];

export const AnimatedTestimonials = ({
  testimonials = [],
  autoplay = false,
}) => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && !isHovered) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isHovered, testimonials.length]);

  if (!testimonials || testimonials.length === 0) return null;

  const currentItem = testimonials[active];

  return (
    <div
      className="mx-auto max-w-sm px-2 py-6 font-sans antialiased md:max-w-6xl md:px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 items-stretch">
        {/* Left Side: Wider Animated Stacked Certificate Images Container */}
        <div
          className="w-full md:col-span-7"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-72 sm:h-84 md:h-[380px] lg:h-[410px] w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                const rotation = ROTATIONS[index % ROTATIONS.length];
                return (
                  <motion.div
                    key={testimonial.id || testimonial.src || testimonial.title}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rotation,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.65,
                      scale: isActive(index) ? 1 : 0.94,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rotation,
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -30, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rotation,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom cursor-pointer group"
                    onClick={() => setActive(index)}
                  >
                    <div className="h-full w-full rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950/95 p-2 sm:p-3 shadow-2xl backdrop-blur-md relative flex items-center justify-center">
                      {testimonial.src || testimonial.image ? (
                        <img
                          src={testimonial.src || testimonial.image}
                          alt={testimonial.name || testimonial.title}
                          draggable={false}
                          className="h-full w-full rounded-2xl object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      ) : (
                        /* Stylish Fallback for Certificates without an image (e.g. DEPI) */
                        <div
                          className="h-full w-full rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(135deg, #0B1730 0%, #1E3A8A 50%, #0F172A 100%)",
                          }}
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
                          <div
                            className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-xl border border-amber-500/30"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(37,99,235,0.3) 100%)",
                            }}
                          >
                            <span className="text-4xl font-extrabold text-amber-400 font-mono">
                              {(testimonial.issuer || testimonial.designation || "C").charAt(0)}
                            </span>
                          </div>
                          <h4 className="text-xl font-extrabold text-slate-100 mb-2 font-sans">
                            {testimonial.name || testimonial.title}
                          </h4>
                          <span className="text-xs font-mono text-sky-400 tracking-widest uppercase">
                            {testimonial.issuer || testimonial.designation}
                          </span>
                        </div>
                      )}

                      {/* Hover Glass Overlay */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none rounded-3xl">
                        <span className="px-4 py-2 rounded-full text-xs font-bold text-white bg-blue-600/90 backdrop-blur-md shadow-lg border border-blue-400/30 flex items-center gap-2">
                          <span>View Full Certificate</span>
                          <span>↗</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Certificate Details Column */}
        <div className="w-full md:col-span-5 flex flex-col justify-between h-full min-h-[380px] sm:min-h-[400px] md:h-[410px] py-1">
          {/* Animated Certificate Info (Title, Metadata, Description) */}
          <div className="flex-1 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  y: 12,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -12,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className="flex flex-col"
              >
                {/* Category Pill */}
                {currentItem.category && (
                  <div>
                    <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3 bg-sky-500/10 text-sky-400 border border-sky-500/20 shadow-sm">
                      {currentItem.category}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 leading-tight mb-1.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {currentItem.name || currentItem.title}
                </h3>

                {/* Issuer & Date */}
                <p className="text-sm font-medium text-slate-400 mb-4 flex flex-wrap items-center gap-2">
                  <span className="text-amber-400 font-semibold">
                    {currentItem.issuer || currentItem.designation}
                  </span>
                  {currentItem.date && (
                    <>
                      <span className="text-slate-600">•</span>
                      <span className="font-mono text-xs text-slate-400 bg-slate-800/60 px-2.5 py-0.5 rounded-md border border-slate-700/50">
                        {currentItem.date}
                      </span>
                    </>
                  )}
                </p>

                {/* Word-by-Word Blur Animated Quote / Description */}
                <div className="min-h-[4.5rem]">
                  <p className="text-base text-slate-300 leading-relaxed">
                    {(currentItem.quote || currentItem.description || "").split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          filter: "blur(10px)",
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          filter: "blur(0px)",
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.18,
                          ease: "easeInOut",
                          delay: 0.015 * index,
                        }}
                        className="inline-block"
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Fixed Position Bottom Controls (CTA + Navigation Arrows) */}
          <div className="mt-auto pt-2">
            {/* Primary CTA Button - Fixed Vertical Container */}
            <div className="mb-5 h-12 flex items-center">
              {(currentItem.credential || currentItem.link) && (
                <a
                  href={currentItem.credential || currentItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/20 active:scale-95"
                  style={{
                    background: "linear-gradient(90deg, #2563EB 0%, #3B82F6 100%)",
                    border: "1px solid rgba(147, 197, 253, 0.25)",
                  }}
                >
                  <span>View Credential</span>
                  <IconExternalLink className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                </a>
              )}
            </div>

            {/* Navigation Controls: Left/Right Arrows + Index Dots - Fixed Position */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
              {/* Quick Indicator Tabs / Dots */}
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {testimonials.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActive(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      active === idx
                        ? "w-8 bg-amber-400 shadow-md shadow-amber-400/30"
                        : "w-2.5 bg-slate-700 hover:bg-slate-500"
                    }`}
                    aria-label={`Go to certificate ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Certificate"
                  className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 shadow-md active:scale-90"
                >
                  <IconArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:-translate-x-0.5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Certificate"
                  className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 shadow-md active:scale-90"
                >
                  <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
