import React, { useState, useEffect } from "react";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const EvervaultCard = ({
  icon,
  title,
  desc,
  tags,
  accent,
  className
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(2500);
    setRandomString(str);
  }, []);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(2500);
    setRandomString(str);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className={cn(
        "group/card border border-slate-700/60 rounded-3xl flex flex-col items-start p-7 relative overflow-hidden bg-slate-900/60 transition-all duration-300 hover:border-blue-500/50 h-full w-full",
        className
      )}
    >
      {/* Corner Icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-slate-400 z-20" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-slate-400 z-20" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-slate-400 z-20" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-slate-400 z-20" />

      {/* Evervault Background Pattern spanning entire card */}
      <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />

      {/* Card Content Layer */}
      <div className="relative z-10 flex flex-col h-full w-full">
        {/* Icon Circle */}
        <div className="flex items-center justify-center rounded-2xl text-3xl mb-5 w-14 h-14 bg-slate-950/80 border border-slate-700/60 backdrop-blur-md shrink-0">
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-3 text-slate-100" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
          {title}
        </h3>

        <p className="text-sm text-slate-300 mb-6 flex-1 leading-relaxed">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2.5 py-1 rounded-full border border-slate-700/80 bg-slate-950/80"
              style={{ color: accent }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export function CardPattern({
  mouseX,
  mouseY,
  randomString
}) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-0 rounded-3xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-0 text-xs break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500 overflow-hidden p-4">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
