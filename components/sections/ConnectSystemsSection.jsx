"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const connectorLogos = [
  { name: "salesforce", mark: "salesforce", style: "bg-[#20a6d9] text-white text-[9px] font-bold" },
  { name: "netsuite", mark: "N", style: "bg-white text-[#22446c] text-2xl font-black" },
  { name: "sap", mark: "SAP", style: "bg-white text-[#0b78b7] text-sm font-black" },
  { name: "adobe", mark: "A", style: "bg-[#ff2d22] text-white text-3xl font-black" },
];

function FlowLabel({ children, className = "", delay = 0 }) {
  return <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay, duration: 0.4 }} className={`absolute z-20 rounded-md bg-[#5a42ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_9px_26px_rgba(66,44,220,.3)] ${className}`}>{children}</motion.div>;
}

function SystemsFlowDiagram() {
  const diagramRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".flow-orb", { scale: 1.12, opacity: 0.95, repeat: -1, yoyo: true, stagger: 0.18, duration: 1.35, ease: "sine.inOut" });
      gsap.to(".systems-logo", { y: -4, repeat: -1, yoyo: true, stagger: 0.15, duration: 1.5, ease: "sine.inOut" });
    }, diagramRef);
    return () => ctx.revert();
  }, []);
  const animatedPaths = ["M554 56 V136 H760", "M1060 56 V136 H760", "M221 197 H530 H760", "M760 196 H1060 H1300", "M760 250 V323", "M760 372 V420"];
  return (
    <div ref={diagramRef} className="relative mt-14 min-h-[440px] overflow-hidden rounded-md px-3 pb-6 pt-2 sm:mt-20 lg:min-h-[480px]" style={{ backgroundImage: "radial-gradient(circle, rgba(83,111,205,.23) 1.3px, transparent 1.3px)", backgroundSize: "12px 12px", maskImage: "radial-gradient(ellipse at center, black 47%, transparent 86%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 47%, transparent 86%)" }}>
      <div className="relative mx-auto hidden h-[455px] w-[1420px] max-w-full lg:block">
        <svg viewBox="0 0 1420 455" className="absolute inset-0 h-full w-full" fill="none">
          <path d="M400 28 H1084" stroke="#223472" strokeWidth="54" /><path d="M410 28 H1074" stroke="#6d50ff" strokeOpacity=".6" strokeDasharray="2 5" />
          <path d="M536 56 V136 H1060 V56 M220 198 H1307 M760 136 V420 M760 330 H690 V387 H615 M760 330 H830 V387 H905" stroke="#3e55bc" strokeWidth="2" strokeDasharray="3 5" />
          {animatedPaths.map((path, index) => <motion.path key={path} d={path} stroke="#687cff" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="10 220" initial={{ strokeDashoffset: 240 }} animate={{ strokeDashoffset: -240 }} transition={{ duration: 2.4 + index * 0.18, repeat: Infinity, ease: "linear", delay: index * 0.18 }} />)}
          {[{ x: 536, y: 136 }, { x: 1060, y: 136 }, { x: 530, y: 198 }, { x: 1060, y: 198 }, { x: 760, y: 323 }].map(({ x, y }) => <circle key={`${x}-${y}`} className="flow-orb" cx={x} cy={y} r="5" fill="#7261ff" />)}
        </svg>
        <div className="absolute left-[442px] top-[11px] rounded-md bg-[#392b94] px-5 py-3 text-sm font-semibold text-white">Invoices</div>
        <div className="absolute right-[286px] top-[11px] rounded-md bg-[#392b94] px-6 py-3 text-sm font-semibold text-white">Bank APIs</div>
        <FlowLabel className="left-[465px] top-[102px]" delay={0.15}>TDS</FlowLabel><FlowLabel className="right-[339px] top-[102px]" delay={0.2}>GST Recon</FlowLabel>
        <motion.div initial={{ opacity: 0, scale: 0.86 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="absolute left-[710px] top-[153px] flex h-[98px] w-[100px] items-center justify-center rounded-lg bg-[#31288f] text-xl font-bold text-white">TK</motion.div>
        <div className="absolute left-[196px] top-[162px] grid grid-cols-2 gap-3 rounded-lg bg-[#142353] p-3">{connectorLogos.map((logo) => <div key={logo.name} className={`systems-logo flex h-[48px] w-[50px] items-center justify-center rounded ${logo.style}`}>{logo.mark}</div>)}</div>
        <FlowLabel className="left-[427px] top-[190px]" delay={0.26}>Tally Prime ↗</FlowLabel><FlowLabel className="right-[319px] top-[190px]" delay={0.31}>Smart Reports</FlowLabel><FlowLabel className="left-[686px] top-[298px]" delay={0.36}>Automation Hub</FlowLabel>
      </div>
      <div className="mx-auto flex max-w-md flex-col items-center gap-5 py-8 lg:hidden">
        <div className="flex w-full justify-between rounded-lg border border-dashed border-[#384aa4] p-4 text-sm font-semibold text-white"><span className="rounded bg-[#382d91] px-4 py-2">CRM</span><span className="rounded bg-[#382d91] px-4 py-2">Booking system</span></div>
        <div className="flex w-full justify-around"><span className="rounded bg-[#5942ff] px-4 py-2">TDS</span><span className="rounded bg-[#5942ff] px-4 py-2">Events</span></div>
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="rounded-lg bg-[#30268e] px-8 py-7 text-lg font-bold">TK</motion.div>
        <div className="flex w-full justify-around text-sm font-semibold"><span className="rounded bg-[#5942ff] px-4 py-2">Tally</span><span className="rounded bg-[#5942ff] px-4 py-2">Reports</span></div><span className="rounded bg-[#5942ff] px-4 py-2 text-sm font-semibold">Orchestration</span>
      </div>
    </div>
  );
}

export default function ConnectSystemsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c1638] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-[#22315f]" />
      <div className="mx-auto max-w-[1510px]">
        <motion.h2 initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65 }} className="max-w-[980px] text-[clamp(1.7rem,2.5vw,2.08rem)] font-medium leading-[1.18] tracking-[-0.045em] text-[#88a2dd]"><span className="text-white">Connect every Tally workflow.</span> Automate invoice capture, bank reconciliation, GST compliance, TDS reporting and WhatsApp sharing without switching your ERP.</motion.h2>
        <SystemsFlowDiagram />
      </div>
    </section>
  );
}
