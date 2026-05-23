"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const testimonialCards = [
  {
    name: "CA Firm, Mumbai",
    role: "Chartered Accountant Practice",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=680&q=80",
    quote: "The Smart Audit TDL transformed our audit process. Clause 44 reports that used to take days now generate in minutes.",
  },
  {
    name: "Manufacturing Co., Delhi",
    role: "Mid-Size Manufacturer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=680&q=80",
    quote: "WhatsApp integration automated our payment reminders and our collections improved by 35%.",
  },
  {
    name: "Trading Company, Bangalore",
    role: "Wholesale Distribution Business",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=680&q=80",
    quote: "Bank reconciliation once took an entire day. With Smart Bank Recon, we are done in under 30 minutes with zero errors.",
  },
  {
    name: "Growing Distributor",
    role: "Tally Prime User",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=680&q=80",
    quote: "Installation took minutes and the automation now keeps our invoices and ledgers organised every day.",
  },
  {
    name: "Finance Team",
    role: "GST & Compliance Operations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=680&q=80",
    quote: "GST reconciliation is faster and mismatch alerts help us protect ITC without manual spreadsheets.",
  },
];

function FlipCard({ item }) {
  return (
    <motion.article
      className="relative h-[380px] w-[285px] shrink-0 cursor-pointer sm:h-[420px] sm:w-[320px]"
      initial="front"
      whileHover="back"
      whileFocus="back"
      tabIndex={0}
      style={{ perspective: 1200 }}
      aria-label={`${item.name}, ${item.role}. Hover or focus to read testimonial.`}
    >
      <motion.div
        className="relative h-full w-full rounded-xl"
        variants={{ front: { rotateY: 0 }, back: { rotateY: 180 } }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-xl bg-slate-900 shadow-[0_16px_40px_rgba(15,23,42,0.10)]" style={{ backfaceVisibility: "hidden" }}>
          <Image src={item.image} alt="" fill sizes="(max-width: 640px) 285px, 320px" className="object-cover grayscale" draggable={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <h3 className="text-xl font-semibold tracking-tight">{item.name}</h3>
            <p className="mt-1 text-base text-white/80">{item.role}</p>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-between rounded-xl bg-white p-7 shadow-[0_16px_42px_rgba(15,23,42,0.10)]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <div>
            <span className="text-4xl leading-none text-[#2f65f5]">“</span>
            <p className="mt-2 text-[19px] font-semibold leading-[1.5] tracking-[-0.025em] text-slate-800">{item.quote}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-800">{item.name}</p>
            <p className="mt-1 text-base text-slate-500">{item.role}</p>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function TestimonialsSection() {
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(trackRef.current, { xPercent: -50 });
      gsap.to(trackRef.current, { xPercent: 0, duration: 58, repeat: -1, ease: "none" });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);
  return (
    <section aria-labelledby="testimonials-title" className="overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto mb-12 flex max-w-7xl items-start justify-between gap-6 px-6 sm:mb-16 lg:px-10">
        <h2 id="testimonials-title" className="max-w-[850px] text-[clamp(2.6rem,5vw,4.3rem)] font-semibold leading-[1.06] tracking-[-0.065em] text-slate-800">Businesses grow with <span className="text-[#3264f5]">TallyKonnect.</span></h2>
        <p className="hidden pt-4 text-2xl font-semibold tracking-tight text-black md:block">1M+ Businesses &amp; Banks</p>
      </div>
      <div ref={marqueeRef} className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent md:w-40" />
        <div ref={trackRef} className="flex w-max gap-6 py-3 sm:gap-8">{[0, 1].map((duplicate) => <div key={duplicate} className="flex shrink-0 gap-6 pr-6 sm:gap-8 sm:pr-8" aria-hidden={duplicate === 1}>{testimonialCards.map((item) => <FlipCard key={`${duplicate}-${item.name}`} item={item} />)}</div>)}</div>
      </div>
    </section>
  );
}
