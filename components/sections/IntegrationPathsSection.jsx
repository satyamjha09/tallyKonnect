"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function ChatCheckoutVisual() {
  return (
    <div className="relative h-[330px] overflow-hidden rounded-lg bg-[#182657] p-7">
      <div className="rounded-lg bg-[#31498e] p-4 pb-24">
        <div className="ml-2 max-w-[205px] rounded-md bg-white p-3 text-[11px] font-medium leading-4 text-[#14234f]">Bank statement uploaded<br />247 transactions found</div>
        <div className="ml-auto mt-5 max-w-[215px] rounded-md bg-[#14275e] p-3 text-[11px] font-medium leading-4 text-white">Smart Bank Recon is matching entries automatically.</div>
        <div className="ml-auto mt-3 max-w-[246px] rounded-md bg-[#14275e] px-3 py-2 text-[11px] font-semibold text-white">Zero-difference check running...</div>
      </div>
      <motion.div initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.45 }} className="absolute bottom-5 right-4 w-[155px] rounded-md bg-[#273f83] p-4 text-white shadow-2xl">
        <p className="text-center text-[11px] font-semibold">Bank Sync Active</p>
        <p className="mt-2 text-center text-2xl font-bold">98%</p>
        <p className="mt-1 text-center text-[10px] text-white/70">247 Txns Matched</p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20"><motion.div initial={{ width: 0 }} whileInView={{ width: "98%" }} className="h-full rounded-full bg-emerald-300" /></div>
      </motion.div>
    </div>
  );
}

const platformTiles = [
  { label: "S", className: "bg-[#635bff] text-white" }, { label: "◉", className: "bg-white text-black" },
  { label: "woo", className: "bg-[#8739f9] text-white text-sm font-black" }, { label: "♟", className: "bg-white text-[#73ae42]" },
  { label: "◇", className: "bg-[#ed2928] text-white" }, { label: "WIX", className: "bg-white text-[#111827] text-sm font-black" },
  { label: "⚙", className: "bg-[#ff6847] text-white" }, { label: "W", className: "bg-[#1671ef] text-white font-black" },
  { label: "K", className: "bg-white text-[#1975f2] font-black" }, { label: "➤", className: "bg-[#6679b7] text-white" },
  { label: "F", className: "bg-[#248176] text-white font-bold" }, { label: "m", className: "bg-[#a7b5da] text-[#174d9b] font-bold" },
  { label: "△", className: "bg-[#403292] text-[#b6c1ff]" }, { label: "XC", className: "bg-[#bec7dd] text-[#143c89] font-black" },
];

function PlatformGridVisual({ tilesRef }) {
  return (
    <div className="h-[330px] overflow-hidden rounded-lg bg-[#182657] p-9">
      <div ref={tilesRef} className="grid grid-cols-5 gap-8">
        {platformTiles.map((tile, index) => (
          <motion.div key={`${tile.label}-${index}`} whileHover={{ scale: 1.1, y: -3 }} className={`flex h-[66px] w-[66px] items-center justify-center rounded-md text-3xl shadow-sm ${tile.className}`}>{tile.label}</motion.div>
        ))}
      </div>
    </div>
  );
}

function CodeVisual() {
  return (
    <div className="flex h-[330px] flex-col overflow-hidden rounded-lg border border-[#28236e] bg-[#182657] font-mono text-[13px] font-semibold text-white">
      <div className="flex-1 space-y-4 px-6 pt-6">
        <p><span className="mr-7 text-[#a3b6ea]">1</span>const tally = require(<span className="text-[#ffb44b]">&apos;tallykonnect-sdk&apos;</span>)(</p>
        <p><span className="mr-7 text-[#a3b6ea]">2</span><span className="ml-5 text-[#ffb44b]">&apos;tk_test_abc123&apos;</span></p>
        <p><span className="mr-7 text-[#a3b6ea]">3</span>);</p>
        <div className="relative flex">
          <span className="mr-7 text-[#a3b6ea]">4</span><span className="text-[#b7caee]">await tally.</span>
          <motion.div initial={{ opacity: 0, y: -6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute left-[122px] top-[-4px] w-[156px] overflow-hidden rounded bg-[#20336b] shadow-xl">
            {['accountLinks', 'accounts', 'applePayDomains', 'applicationFees', 'balances'].map((line, index) => <div key={line} className={`px-4 py-2 ${index === 2 ? "bg-[#334c94]" : ""}`}>{line}</div>)}
          </motion.div>
        </div>
      </div>
      <div className="border-t border-[#302b83] bg-[#171158] px-6 py-4 text-white"><p>$ node server.js &amp;&amp; tallykonnect sync</p><p className="mt-3">&gt; Ready! Waiting for requests<span className="inline-block animate-pulse">...</span></p></div>
    </div>
  );
}

const integrationOptions = [
  { title: "Choose your plan.", body: "Select Purchase Invoice Automation, Smart TDS, Bank Recon, GST Recon or Smart Reports — or begin with a free 30-day trial.", action: "View solutions" },
  { title: "Download the TDL.", body: "Get a lightweight plugin from your dashboard, compatible with both Tally Prime and Tally ERP 9.", action: "See setup" },
  { title: "Install and automate.", body: "Load the TDL in Tally in under two minutes and start working with expert support available 24/7.", action: "Schedule demo" },
];

export default function IntegrationPathsSection() {
  const tilesRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(tilesRef.current?.children || [], { y: 0 }, { y: -8, stagger: { each: 0.09, yoyo: true, repeat: -1 }, duration: 1.55, ease: "sine.inOut", repeat: -1, yoyo: true });
    }, tilesRef);
    return () => ctx.revert();
  }, []);
  return (
    <section id="integrations" className="relative overflow-hidden bg-[#0c1638] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[#1e3164]" />
      <div className="mx-auto max-w-[1535px]">
        <motion.h2 initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.65 }} className="max-w-[870px] text-[clamp(1.7rem,2.3vw,2.08rem)] font-medium leading-[1.18] tracking-[-0.04em] text-[#8ca4dd]">
          <span className="text-white">Up and running in minutes.</span> No technical expertise required. Supercharge Tally with automated invoices, connected banking, tax compliance, and smart reports.
        </motion.h2>
        <div className="mt-20 grid gap-9 lg:grid-cols-3 lg:gap-5">
          {integrationOptions.map((option, index) => (
            <motion.article key={option.title} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.58, delay: index * 0.1 }} className="group">
              {index === 0 && <ChatCheckoutVisual />}{index === 1 && <PlatformGridVisual tilesRef={tilesRef} />}{index === 2 && <CodeVisual />}
              <p className="mt-6 text-[17px] leading-[1.6] text-[#aabbe4]"><span className="font-semibold text-white">{option.title}</span>{" "}{option.body}</p>
              <motion.a href="#" whileHover={{ x: 4 }} className="mt-5 inline-flex items-center gap-1 text-[17px] font-semibold text-[#7896ff] hover:text-[#9ab0ff]">{option.action} <span aria-hidden="true">›</span></motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
