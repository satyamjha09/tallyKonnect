"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, Building2, CreditCard, Link2, Sparkles, WalletCards, Workflow } from "lucide-react";

const PANELS = [
  {
    id: "solutions",
    label: "Our Solutions",
    badge: "POPULAR",
    cards: [
      { title: "Purchase Invoice Automation", description: "Capture and post invoices into Tally with intelligent OCR-driven processing.", visual: "chat" },
      { title: "Smart TDS", description: "Auto-create vouchers, calculate TDS, and download statutory forms in a click.", visual: "agents" },
      { title: "Smart Bank Recon", description: "Upload any bank PDF and achieve zero-difference reconciliation with Tally.", visual: "builders" },
      { title: "GST Recon", description: "Reconcile GSTR-2A/2B with your purchase register and identify ITC mismatches.", visual: "banking" },
    ],
  },
  {
    id: "banking",
    label: "Connected Banking",
    categories: ["Bank Plugins", "Statements", "Payments", "Reconciliation", "Real-time Sync"],
    cards: [
      { title: "Yes Bank Plugin", description: "View balances and make RTGS, NEFT and IMPS payments directly from Tally.", visual: "gateway" },
      { title: "Canara Bank Plugin", description: "Access account features, bank statements, and transfers inside Tally.", visual: "button" },
      { title: "AU Bank Plugin", description: "Connect AU Small Finance Bank with balance checks and auto-reconciliation.", visual: "links" },
      { title: "RBL Bank Plugin", description: "Full banking integration currently in progress. Coming soon.", visual: "pos" },
    ],
  },
  {
    id: "reports",
    label: "Reports & Compliance",
    categories: ["Smart Reports", "GST", "TDS", "Audit", "WhatsApp"],
    cards: [
      { title: "Smart Reports", description: "Generate sales analytics, audit and MSME reports from Tally.", visual: "payout" },
      { title: "Clause 44 Audit", description: "Create audit-ready Clause 44 reports in minutes, not days.", visual: "links" },
      { title: "WhatsApp Reports", description: "Share reports and payment reminders instantly through WhatsApp.", visual: "builders" },
      { title: "ITC Tracking", description: "Track GST mismatches and reduce input tax credit loss.", visual: "banking" },
    ],
  },
  {
    id: "setup",
    label: "Easy Setup",
    categories: ["Choose Plan", "Download TDL", "Install", "Automate", "Support"],
    cards: [
      { title: "Choose Your Plan", description: "Select the solution that fits your needs or start a 30-day free trial.", visual: "account" },
      { title: "Download the TDL", description: "Get a lightweight plugin compatible with Tally Prime and ERP 9.", visual: "cards" },
      { title: "Install in Tally", description: "Load the TDL in under two minutes with our guided setup.", visual: "banking" },
      { title: "You’re All Set", description: "Start automating with 24/7 support available whenever needed.", visual: "gateway" },
    ],
  },
];

function Dots() {
  return <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(#cfd5de_0.8px,transparent_0.8px)] [background-size:6px_6px]" />;
}

function CardVisual({ type }) {
  if (type === "chat") {
    return (
      <div className="relative flex h-full justify-center overflow-hidden bg-[#f2f4f7] pt-5">
        <Dots />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#285bff] via-[#3563ff]/75 to-transparent" />
        <div className="relative w-[59%] min-w-[154px] overflow-hidden rounded-t-[15px] bg-white shadow-xl">
          <div className="bg-[#3562fa] px-4 py-3 text-[10px] font-semibold text-white">▣ TallyKonnect OCR</div>
          <div className="space-y-2 px-3 py-3 text-[8px] text-[#606b7b]">
            <p className="text-center font-semibold text-slate-700">INVOICE CAPTURE</p>
            <p className="rounded-full bg-slate-50 p-2">Upload purchase invoice.pdf</p>
            <p className="ml-5 rounded-full bg-slate-50 p-2">Extract and post to Tally.</p>
            <p className="leading-relaxed">Vendor identified: ABC Traders<br />• GSTIN Matched ✓<br />• Ledger Selected ✓</p>
            <p className="font-semibold text-slate-700">Voucher Posted Successfully</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "agents") {
    const labels = ["TDS VOUCHER CREATED", "SECTION-WISE TAX", "24Q FORM READY", "26Q FORM READY", "STATUTORY REPORTS"]; 
    return (
      <div className="relative flex h-full flex-col justify-center gap-3 overflow-hidden bg-[#f3f4f6] px-4">
        <Dots />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#285bff] via-[#285bff]/70 to-transparent" />
        {labels.map((label) => (
          <div key={label} className="relative rounded-full bg-white px-3 py-3 text-center text-[10px] font-medium text-slate-700 shadow-sm">
            <Bot className="mr-1 inline h-3.5 w-3.5" /> AUTO/<span className="text-[#285bff]">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "builders") {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#eeeff1]">
        <Dots />
        <div className="relative z-10 grid grid-cols-2 items-center gap-7">
          <div className="flex h-[70px] w-[70px] items-center justify-center bg-gradient-to-br from-[#8baaff] to-[#1250ff] text-4xl italic text-white shadow-lg">↗</div>
          <div className="flex h-[86px] w-[86px] flex-col items-center justify-center bg-white text-sm font-semibold shadow-sm"><Workflow className="mb-1 h-7 w-7 text-pink-500" />Tally</div>
          <div />
          <div className="flex h-[86px] w-[86px] items-center justify-center bg-white text-sm font-semibold shadow-sm">▮ Bank PDF</div>
        </div>
      </div>
    );
  }

  if (type === "banking") {
    const labels = ["GSTR-2A IMPORT", "GSTR-2B IMPORT", "ITC MISMATCH FOUND", "GST REPORT READY", "COMPLIANT ✓"]; 
    return (
      <div className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden bg-[#f3f4f6] px-8">
        <Dots />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#285bff] via-[#285bff]/65 to-transparent" />
        {labels.map((label, i) => (
          <div key={label} className={`relative w-full rounded-lg px-3 py-3 text-center text-[11px] ${i === 2 ? "bg-white font-semibold text-slate-800" : "bg-white/55 text-slate-500"}`}>{label}</div>
        ))}
      </div>
    );
  }

  if (type === "gateway") {
    return (
      <div className="flex h-full items-center justify-center bg-[#c9e5ea] px-7 pt-7">
        <div className="w-full overflow-hidden rounded-t-xl bg-white/80">
          {["Bank balance", "Statement sync", "NEFT / RTGS", "IMPS payments", "Auto-reconciliation"].map((item) => (
            <p key={item} className="flex gap-3 border-b border-[#d9e5e7] px-5 py-3 text-[13px] font-medium text-[#15566c]"><CreditCard className="h-4 w-4 text-emerald-600" />{item}</p>
          ))}
        </div>
      </div>
    );
  }

  if (type === "button" || type === "links" || type === "pos") {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#badde7]">
        <span className="absolute right-4 top-4 rounded bg-[#86c6d1] px-3 py-2 text-[10px] font-semibold text-white">NO SETUP</span>
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-lg">
          {type === "links" ? <Link2 className="h-10 w-10 text-[#3562fa]" /> : type === "pos" ? <CreditCard className="h-10 w-10 text-[#3562fa]" /> : <Sparkles className="h-10 w-10 text-[#3562fa]" />}
        </div>
      </div>
    );
  }

  const Icon = type === "account" ? Building2 : type === "cards" ? CreditCard : WalletCards;
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#edf3fd]">
      <Dots />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#285bff]/75 to-transparent" />
      <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-lg"><Icon className="h-12 w-12 text-[#3562fa]" /></div>
    </div>
  );
}

function ProductCard({ card, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.42, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-[390px] shrink-0 overflow-hidden rounded-[4px] border border-[#dce3ed] bg-white shadow-[0_8px_20px_rgba(20,35,57,0.055)] sm:h-[445px] xl:h-[min(500px,calc(100svh-245px))]"
    >
      <div className="h-[225px] transition duration-500 group-hover:scale-[1.025] sm:h-[285px] xl:h-[min(350px,calc(100svh-395px))]"><CardVisual type={card.visual} /></div>
      <motion.div className="absolute inset-x-0 bottom-0 min-h-[164px] border-t border-[#e6ebf2] bg-white px-5 py-5 transition-transform duration-300 ease-out group-hover:-translate-y-[58px] sm:px-6">
        <h3 className="text-[18px] font-semibold tracking-[-0.035em] text-[#17263a]">{card.title}</h3>
        <p className="mt-2 min-h-[42px] text-[13px] leading-[1.48] text-[#737b87] sm:text-[14px]">{card.description}</p>
        <div className="mt-5 flex translate-y-3 items-center gap-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="flex items-center gap-2 rounded-[4px] bg-[#3562fa] px-4 py-3 text-[13px] font-semibold text-white">Get Started <ArrowRight className="h-4 w-4" /></button>
          <button className="text-[13px] font-semibold text-[#3562fa]">Learn More</button>
        </div>
      </motion.div>
    </motion.article>
  );
}

function Panel({ panel }) {
  return (
    <div className="h-full overflow-hidden rounded-[5px] border border-[#edf1f5] bg-white shadow-[0_15px_38px_rgba(20,31,50,0.09)]">
      <div className="px-5 pb-5 pt-6 sm:px-7 sm:pt-8 xl:px-10 xl:pt-9">
        <header className="mb-5 flex items-center gap-4 xl:mb-7">
          <h2 className="text-[24px] font-semibold tracking-[-0.055em] text-[#15263c] xl:text-[31px]">{panel.label}</h2>
          {panel.badge && <span className="rounded-full bg-[#1b1d20] px-5 py-2 text-[11px] font-semibold text-white">{panel.badge}</span>}
        </header>
        {panel.categories && (
          <div className="mb-5 flex gap-6 overflow-x-auto border-b border-[#e5eaf1] pb-4 text-[14px] font-semibold text-[#7790ac] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:mb-7">
            {panel.categories.map((category, i) => (
              <span key={category} className={`relative shrink-0 ${i === 0 ? "text-[#1b304b]" : ""}`}>
                {category}{i === 0 && <span className="absolute -bottom-[17px] left-0 h-[3px] w-full bg-[#37c98b]" />}
              </span>
            ))}
          </div>
        )}
        <div className="flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:grid xl:grid-cols-4 xl:overflow-visible">
          {panel.cards.map((card, index) => (
            <div key={card.title} className="w-[82vw] max-w-[330px] shrink-0 snap-start xl:w-auto xl:max-w-none"><ProductCard card={card} index={index} /></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EnteringPanel({ panel, index, total, progress }) {
  const start = index === 0 ? 0 : (index - 1) / total;
  const end = index === 0 ? 1 : index / total;
  const y = useTransform(progress, index === 0 ? [0, 1] : [start, end], index === 0 ? ["0%", "0%"] : ["103%", "0%"], { clamp: true });
  return <motion.div style={{ y, zIndex: index + 1 }} className="absolute inset-0 will-change-transform"><Panel panel={panel} /></motion.div>;
}

function StackingStage({ topOffset, activeIndex, setActiveIndex }) {
  const trackRef = useRef(null);
  const [stageHeight, setStageHeight] = useState(0);
  const totalSteps = PANELS.length;
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  useLayoutEffect(() => {
    const measure = () => setStageHeight(Math.max(window.innerHeight - topOffset - 12, 1));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [topOffset]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(PANELS.length - 1, Math.max(0, Math.ceil(value * totalSteps - 0.02)));
    if (next !== activeIndex) setActiveIndex(next);
  });

  if (!stageHeight) return null;
  return (
    <div id="stack-track" ref={trackRef} className="relative" style={{ height: stageHeight * (totalSteps + 1) }}>
      <div className="sticky overflow-hidden" style={{ top: topOffset, height: stageHeight }}>
        {PANELS.map((panel, index) => <EnteringPanel key={panel.id} panel={panel} index={index} total={totalSteps} progress={scrollYProgress} />)}
      </div>
    </div>
  );
}
export default function ProductStackSection() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(72);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    if (!navRef.current) return undefined;
    const measure = () => setNavHeight(navRef.current?.getBoundingClientRect().height ?? 72);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(navRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToPanel = (index) => {
    const track = document.getElementById("stack-track");
    if (!track) return;
    const stageHeight = Math.max(window.innerHeight - navHeight - 12, 1);
    const targetY = track.getBoundingClientRect().top + window.scrollY + index * stageHeight;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section id="solutions" className="min-h-screen bg-[#f5f8fc] font-sans text-[#15263c]">
      <header ref={navRef} className="sticky top-0 z-50 border-b border-[#edf1f6] bg-[#f5f8fc]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] items-center gap-6 px-4 py-3 sm:px-7">
          <nav className="flex flex-1 gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PANELS.map((panel, index) => (
              <button key={panel.id} type="button" onClick={() => scrollToPanel(index)} className={`relative shrink-0 py-3 text-[14px] font-semibold transition-colors lg:text-[16px] ${activeIndex === index ? "text-[#17283f]" : "text-[#7890aa]"}`}>
                {panel.label}
                {activeIndex === index && <motion.span layoutId="active-tab" className="absolute inset-x-0 -bottom-[13px] h-[3px] bg-[#37c98b]" />}
              </button>
            ))}
          </nav>
          <button className="hidden rounded-[4px] bg-[#3562fa] px-7 py-4 text-[15px] font-semibold text-white md:block">Schedule a Demo</button>
        </div>
      </header>
      <div className="mx-auto max-w-[1500px] px-3 pt-4 sm:px-6">
        <StackingStage topOffset={navHeight} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
    </section>
  );
}
