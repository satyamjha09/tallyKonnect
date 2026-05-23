"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Wrench, ArrowRight, Info, Landmark } from "lucide-react";

const partnerCards = [
  {
    category: "Banking Partner",
    name: "Axis Bank",
    image: "/partners/axis-bank.png",
    detail: "Launched a Tally plugin.",
    status: "PARTNER",
  },
  {
    category: "Banking Partner",
    name: "AU Small Finance Bank",
    image: "/partners/au-bank.png",
    detail: "Confirmed as a partner.",
    status: "PARTNER",
  },
  {
    category: "Banking Partner",
    name: "Canara Bank",
    image: "/partners/canara-bank.png",
    detail: "Confirmed as a partner.",
    status: "PARTNER",
  },
  {
    category: "Banking Partner",
    name: "HDFC Bank",
    image: "/partners/hdfc-bank.png",
    detail: "Listed as a partner on TallyKonnect's official site.",
    status: "PARTNER",
  },
  {
    category: "Banking Partner",
    name: "ICICI Bank",
    image: "/partners/icici-bank.png",
    detail: 'Announced as the "first BANK PLUGIN" created in 2021.',
    status: "FIRST PLUGIN",
  },
  {
    category: "Banking Partner",
    name: "Kotak Mahindra Bank",
    image: "/partners/kotak-bank.png",
    detail: "Listed as a partner on TallyKonnect's official site.",
    status: "PARTNER",
  },
  {
    category: "Banking Partner",
    name: "RBL Bank",
    image: "/partners/rbl-bank.png",
    detail: 'The plugin is noted as "IN PROGRESS".',
    status: "IN PROGRESS",
  },
  {
    category: "Banking Partner",
    name: "State Bank of India",
    image: "/partners/sbi.png",
    detail: "Listed as a partner on TallyKonnect's official site.",
    status: "PARTNER",
  },
  {
    category: "Banking Partner",
    name: "Yes Bank",
    image: "/partners/yes-bank.png",
    detail: "Launched a Tally plugin in May 2024.",
    status: "PLUGIN LIVE",
  },
  {
    category: "Technology Collaborator",
    name: "Tak.inc",
    image: "/partners/tak-inc.png",
    detail: "Collaborated to create the first ICICI Bank plugin.",
    status: "COLLABORATOR",
  },
  {
    category: "Enterprise Client",
    name: "Beyobo",
    image: "/partners/beyobo.png",
    detail: "Listed by TallyKonnect as an enterprise client.",
    status: "SELF-REPORTED",
  },
  {
    category: "Enterprise Client",
    name: "Haldiram's",
    image: "/partners/haldirams.png",
    detail: "Listed by TallyKonnect as an enterprise client.",
    status: "SELF-REPORTED",
  },
  {
    category: "Enterprise Client",
    name: "Vadilal",
    image: "/partners/vadilal.png",
    detail: "Listed by TallyKonnect as an enterprise client.",
    status: "SELF-REPORTED",
  },
  {
    category: "Enterprise Client",
    name: "Vedant Fashions Limited",
    image: "/partners/manyavar.png",
    detail: "Listed by TallyKonnect as an enterprise client.",
    status: "SELF-REPORTED",
  },
];

function StatusBadge({ status }) {
  const statusColor =
    status === "IN PROGRESS"
      ? "bg-amber-100 text-amber-700"
      : status === "SELF-REPORTED"
        ? "bg-slate-100 text-slate-600"
        : status === "FIRST PLUGIN"
          ? "bg-purple-100 text-purple-700"
          : status === "COLLABORATOR"
            ? "bg-blue-100 text-blue-700"
            : "bg-emerald-100 text-emerald-700";

  return (
    <span
      className={`rounded-full px-3 py-1.5 text-[9px] font-bold tracking-[0.08em] ${statusColor}`}
    >
      {status}
    </span>
  );
}

function CompanyCard({ item }) {
  return (
    <motion.article
      className="relative h-[380px] w-[285px] shrink-0 cursor-pointer sm:h-[420px] sm:w-[320px]"
      initial="front"
      whileHover="back"
      whileFocus="back"
      tabIndex={0}
      style={{ perspective: 1200 }}
      aria-label={`${item.name}. Hover or focus to view partnership details.`}
    >
      <motion.div
        className="relative h-full w-full rounded-xl"
        variants={{
          front: { rotateY: 0 },
          back: { rotateY: 180 },
        }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Card */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl border border-[#e3e9f3] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative flex h-full flex-col justify-between p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="rounded-full bg-[#f2f6ff] px-3 py-2 text-[11px] font-semibold text-[#3562fa]">
                {item.category}
              </div>

              <StatusBadge status={item.status} />
            </div>

            {/* Company Logo Image */}
            <div className="flex flex-1 items-center justify-center px-5">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative flex h-[145px] w-full items-center justify-center rounded-2xl border border-[#e8edf5] bg-white p-7 shadow-[0_16px_35px_rgba(15,23,42,0.07)]"
              >
                <Image
                  src={item.image}
                  alt={`${item.name} logo`}
                  fill
                  sizes="240px"
                  className="object-contain p-7"
                />
              </motion.div>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold tracking-[-0.045em] text-[#17263b]">
                {item.name}
              </h3>

              <p className="mt-2 flex items-center gap-2 text-[13px] font-medium text-[#72839c]">
                <Wrench className="h-4 w-4 text-[#3562fa]" />
                View collaboration details
              </p>
            </div>
          </div>
        </div>

        {/* Back Card */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-xl bg-[#0e1636] p-7 text-white shadow-[0_16px_42px_rgba(15,23,42,0.16)]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="relative h-12 w-28 overflow-hidden rounded-md bg-white p-2">
                <Image
                  src={item.image}
                  alt={`${item.name} logo`}
                  fill
                  sizes="112px"
                  className="object-contain p-2"
                />
              </div>

              <StatusBadge status={item.status} />
            </div>

            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8fa8e4]">
              {item.category}
            </p>

            <h3 className="mt-3 text-[26px] font-semibold tracking-[-0.05em] text-white">
              {item.name}
            </h3>

            <p className="mt-6 text-[17px] font-medium leading-[1.65] text-[#c0ceef]">
              {item.detail}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[14px] font-semibold text-[#85a0ff]">
            Explore solution
            <ArrowRight className="h-4 w-4" />
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
    const context = gsap.context(() => {
      gsap.set(trackRef.current, { xPercent: -50 });

      gsap.to(trackRef.current, {
        xPercent: 0,
        duration: 74,
        repeat: -1,
        ease: "none",
      });
    }, marqueeRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="partners"
      className="overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-[1480px] px-5 sm:px-8 lg:mb-16 lg:px-12">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 text-[16px] font-semibold text-[#3562fa]">
              Partners & Clients
            </p>

            <h2 className="max-w-[920px] text-[clamp(2.45rem,4.7vw,4.25rem)] font-semibold leading-[1.06] tracking-[-0.07em] text-[#17263b]">
              Businesses grow with{" "}
              <span className="text-[#3562fa]">TallyKonnect.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="flex shrink-0 items-center gap-3 rounded-full border border-[#dfe7f4] bg-[#f7f9fd] px-5 py-3"
          >
            <Landmark className="h-5 w-5 text-[#3562fa]" />

            <p className="text-[14px] font-semibold text-[#17263b]">
              Banking, technology & enterprise ecosystem
            </p>
          </motion.div>
        </div>
      </div>

      {/* Moving Cards */}
      <div ref={marqueeRef} className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28 lg:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28 lg:w-40" />

        <div ref={trackRef} className="flex w-max gap-6 py-3 sm:gap-8">
          {[0, 1].map((duplicate) => (
            <div
              key={duplicate}
              className="flex shrink-0 gap-6 pr-6 sm:gap-8 sm:pr-8"
              aria-hidden={duplicate === 1}
            >
              {partnerCards.map((item) => (
                <CompanyCard
                  key={`${duplicate}-${item.name}`}
                  item={item}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Information Note */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-12 max-w-[1100px] px-5 sm:px-8"
      >
        <div className="flex items-start gap-4 rounded-xl border border-[#dfe7f4] bg-[#f7f9fd] p-5 sm:p-6">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#3562fa]" />

          <p className="text-[13px] leading-6 text-[#61738d] sm:text-[14px]">
            Enterprise client names are presented as self-reported by
            TallyKonnect and have not been independently verified. For the most
            current partnership or plugin information, please contact
            TallyKonnect directly.
          </p>
        </div>
      </motion.div>
    </section>
  );
}