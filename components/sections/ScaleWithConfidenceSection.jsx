"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleStats = [
  { value: "1M+", label: "Businesses & Banks" },
  { value: "99%", label: "Accuracy Rate" },
  { value: "24/7", label: "Support Available" },
  { value: "5 Min", label: "Average Setup Time" },
];

function WaveLines() {
  const svgRef = useRef(null);

  const ribbons = useMemo(() => {
    const crossing = Array.from({ length: 34 }, (_, i) => {
      const startY = 207 + i * 4.35;
      const control1Y = 147 + i * 2.15;
      const control2Y = 163 + i * 1.65;
      const endY = 360 - i * 3.85;
      return `M -10 ${startY} C 160 ${control1Y}, 332 ${control2Y}, 502 240 C 694 292, 860 ${endY}, 1075 ${endY}`;
    });
    const upperFan = Array.from({ length: 30 }, (_, i) => {
      const startY = 244 + i * 2.2;
      const endY = 135 + i * 4.5;
      return `M 492 ${startY} C 600 ${210 - i * 1.7}, 733 ${172 - i * 3.2}, 860 ${142 - i * 2.4} C 940 ${122 + i * 0.55}, 1010 ${endY}, 1082 ${endY}`;
    });
    const lowerFan = Array.from({ length: 27 }, (_, i) => {
      const startY = 247 + i * 2.1;
      const endY = 332 - i * 4.4;
      return `M 492 ${startY} C 624 ${262 + i * 2.15}, 754 ${302 + i * 2.6}, 867 ${322 + i * 1.15} C 949 ${345 - i}, 1014 ${endY}, 1080 ${endY}`;
    });
    const underSweep = Array.from({ length: 20 }, (_, i) => {
      const startY = 334 - i * 4.3;
      const endY = 245 + i * 1.55;
      return `M 245 ${startY} C 359 ${345 - i * 4}, 424 ${298 - i * 2.8}, 492 ${253 - i * 0.35} C 540 ${229 + i * 0.5}, 585 ${endY}, 632 ${endY}`;
    });
    return { crossing, upperFan, lowerFan, underSweep };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paths = svgRef.current?.querySelectorAll(".ribbon-line") || [];
      gsap.set(paths, { strokeDasharray: 1400, strokeDashoffset: 1400, opacity: 0 });
      gsap.to(paths, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1.45,
        ease: "power3.out",
        stagger: { each: 0.008, from: "center" },
      });
      gsap.to(".ribbon-float-a", { y: -5, duration: 4.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".ribbon-float-b", { y: 6, duration: 4.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".ribbon-glow", { opacity: 0.55, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, svgRef);
    return () => ctx.revert();
  }, []);

  const drawLines = (lines, stroke, className = "") =>
    lines.map((d, index) => (
      <path
        key={`${className}-${index}`}
        className={`ribbon-line ${className}`}
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth="1.9"
        strokeLinecap="round"
        opacity={0.87 - index * 0.008}
      />
    ));

  return (
    <svg ref={svgRef} viewBox="0 0 1080 430" aria-hidden="true" className="absolute inset-x-0 bottom-[106px] h-[clamp(275px,40vw,430px)] w-full overflow-visible" preserveAspectRatio="none">
      <defs>
        <linearGradient id="peachMagenta" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffbab0" stopOpacity="0.22" /><stop offset="28%" stopColor="#ff8db4" /><stop offset="51%" stopColor="#fc4ff3" /><stop offset="100%" stopColor="#7f5cff" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="brightPurple" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#fc46ec" stopOpacity="0.5" /><stop offset="42%" stopColor="#da38ff" /><stop offset="73%" stopColor="#b734ff" /><stop offset="100%" stopColor="#5337cb" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id="purpleFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d535ff" stopOpacity="0.5" /><stop offset="48%" stopColor="#b246ff" /><stop offset="100%" stopColor="#653ae8" stopOpacity="0" />
        </linearGradient>
        <filter id="blurGlow" x="-15%" y="-35%" width="130%" height="170%"><feGaussianBlur stdDeviation="13" /></filter>
      </defs>
      <g className="ribbon-glow" filter="url(#blurGlow)" opacity="0.35">
        <path d="M 44 248 C 250 162, 412 213, 505 245 C 702 305, 864 353, 1034 339" fill="none" stroke="#fc48f2" strokeWidth="16" />
        <path d="M 485 248 C 668 193, 793 121, 1040 145" fill="none" stroke="#b93bff" strokeWidth="14" />
      </g>
      <g className="ribbon-float-b">{drawLines(ribbons.underSweep, "url(#purpleFade)", "under-lines")}</g>
      <g className="ribbon-float-a">{drawLines(ribbons.upperFan, "url(#brightPurple)", "upper-lines")}</g>
      <g className="ribbon-float-b">{drawLines(ribbons.lowerFan, "url(#purpleFade)", "lower-lines")}</g>
      <g>{drawLines(ribbons.crossing, "url(#peachMagenta)", "crossing-lines")}</g>
    </svg>
  );
}

function ScaleStat({ value, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: 0.42 + index * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10"
    >
      <div className="bg-gradient-to-r from-[#ffc0bb] via-[#e572ed] to-[#885cff] bg-clip-text text-[clamp(2.65rem,4.2vw,3.75rem)] font-medium leading-none tracking-[-0.055em] text-transparent">{value}</div>
      <p className="mt-4 text-[clamp(0.85rem,1.25vw,1.05rem)] font-semibold tracking-[-0.025em] text-[#f3f4ff]">{label}</p>
    </motion.div>
  );
}

export default function ScaleWithConfidenceSection() {
  return (
    <section className="relative mx-auto flex min-h-[min(100vh,780px)] w-full max-w-[1520px] flex-col overflow-hidden border-x border-b border-[#1f2d60] bg-[#0e1636] px-[clamp(1.25rem,3.3vw,3rem)] pt-[clamp(3rem,5vw,4.75rem)] text-white">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-[900px] text-[clamp(1.28rem,2.05vw,1.9rem)] font-medium leading-[1.15] tracking-[-0.042em] text-[#8398cd]"
      >
        <span className="font-semibold text-[#f7f8ff]">Automate with confidence.</span>{" "}
        Built for Tally Prime and ERP, our intelligent tools reduce manual work,<br className="hidden md:block" /> improve accuracy, and keep your business compliant from day one.
      </motion.p>
      <div className="relative mt-auto h-[clamp(455px,61vw,595px)]">
        <WaveLines />
        <div className="absolute inset-x-0 bottom-[74px] grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-[clamp(1.5rem,7vw,7rem)]">
          {scaleStats.map((stat, index) => <ScaleStat key={stat.label} {...stat} index={index} />)}
        </div>
      </div>
    </section>
  );
}
