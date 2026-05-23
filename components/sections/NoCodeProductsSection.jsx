"use client";

import { motion } from "framer-motion";
import { Building2, CreditCard, Link2 } from "lucide-react";

const noCodeProducts = [
  { title: "Yes Bank Plugin", description: <>Make <span className="text-[#305cff]">RTGS, NEFT and IMPS payments</span> directly inside Tally.</>, icon: <Building2 className="h-8 w-8" /> },
  { title: "Canara Bank Plugin", description: <>View balances and <span className="text-[#305cff]">access statements seamlessly</span> from Tally.</>, icon: <CreditCard className="h-8 w-8" /> },
  { title: "AU Bank Plugin", description: <>Enable real-time balance checks and <span className="text-[#305cff]">auto-reconciliation</span>.</>, icon: <Link2 className="h-8 w-8" /> },
];

export default function NoCodeProductsSection() {
  return (
    <section id="banking" className="overflow-hidden bg-[#f1f5fb] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1480px]">
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65 }}>
          <p className="text-[18px] font-medium tracking-[-0.03em] text-[#7290bd]">Connected Banking</p>
          <h2 className="mt-5 text-[clamp(2.4rem,4.5vw,3.55rem)] font-semibold leading-[1.06] tracking-[-0.065em] text-[#17263b]"><span className="block text-[#00a866]">Seamless bank integrations.</span>Run banking directly from Tally</h2>
        </motion.div>
        <div className="mt-16 grid gap-7 lg:mt-20 lg:grid-cols-3">
          {noCodeProducts.map((product, index) => (
            <motion.article key={product.title} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6, boxShadow: "0 18px 44px rgba(31, 52, 91, 0.10)" }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.55, delay: index * 0.09 }} className="group flex min-h-[348px] flex-col rounded-xl bg-white px-8 py-8 shadow-[0_9px_28px_rgba(26,49,82,0.045)] sm:px-9">
              <div className="flex items-start justify-between gap-5"><h3 className="text-[23px] font-medium tracking-[-0.035em] text-[#102039]">{product.title}</h3><span className="shrink-0 text-[#305cff]">{product.icon}</span></div>
              <p className="mt-7 max-w-[390px] text-[27px] font-semibold leading-[1.46] tracking-[-0.055em] text-[#102039]">{product.description}</p>
              <div className="mt-auto flex items-center gap-9 pt-10 text-[19px] font-semibold text-[#315af5]"><motion.a href="#" whileHover={{ x: 3 }}>Learn More →</motion.a><motion.a href="#" whileHover={{ x: 3, y: -2 }}>Know More ↗</motion.a></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
