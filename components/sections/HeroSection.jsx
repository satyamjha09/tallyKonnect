"use client";

import { useLayoutEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const logos = ["Tally Prime", "Tally ERP 9", "YES BANK", "CANARA BANK", "AU BANK", "GST Recon", "Smart TDS"];

function GradientArtwork() {
  return (
    <div className="artwork" aria-hidden="true">
      <motion.div className="orb orb-a" animate={{ rotate: [0, 10, -3, 0], scale: [1, 1.035, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="orb orb-b" animate={{ rotate: [0, -8, 4, 0], y: [0, -10, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="orb orb-c" animate={{ rotate: [0, 6, 0], x: [0, 7, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
    </div>
  );
}

export default function HeroSection() {
  const rootRef = useRef(null);
  const counterRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const artY = useTransform(scrollYProgress, [0, 0.2], [0, 90]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".hero-kicker", { y: 20, opacity: 0, delay: 0.12, duration: 0.62, ease: "power3.out" });
      gsap.from(".hero-title .line", { y: 52, opacity: 0, stagger: 0.1, delay: 0.18, duration: 0.85, ease: "power4.out" });
      gsap.from(".hero-actions", { y: 26, opacity: 0, delay: 0.56, duration: 0.65, ease: "power3.out" });
      gsap.from(".trusted-logo", { y: 22, opacity: 0, delay: 0.7, duration: 0.65, stagger: 0.07, ease: "power3.out" });
      const number = { value: 92 };
      gsap.to(number, { value: 99, delay: 0.32, duration: 1.7, ease: "power2.out", onUpdate: () => {
        if (counterRef.current) counterRef.current.textContent = `${number.value.toFixed(0)}%`;
      }});
    }, rootRef);
    return () => context.revert();
  }, []);

  return (
    <section className="hero" ref={rootRef} aria-labelledby="home-title">
      <motion.div className="art-wrap" style={{ y: artY }}><GradientArtwork /></motion.div>
      <div className="hero-content">
        <p className="hero-kicker"><strong>Trusted by 1M+ Businesses &amp; Banks Across India</strong> <span ref={counterRef}>92%</span> accuracy</p>
        <h1 id="home-title" className="hero-title">
          <span className="line dark">Supercharge your Tally with <em>intelligent automation.</em></span>
          <span className="line muted">From bank integrations and TDS automation</span>
          <span className="line muted">to GST reconciliation and smart reports —</span>
          <span className="line muted">all in one Tally enhancement suite.</span>
        </h1>
        <div className="hero-actions">
          <Button href="#contact">Schedule a Demo</Button>
          <Link href="#solutions" className="text-link">Explore Solutions <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="logos-bar" aria-label="Supported Tally and banking integrations">
        <div className="logos-track">{[...logos, ...logos].map((logo, index) => <span className="trusted-logo" key={`${logo}-${index}`}>{logo}</span>)}</div>
      </div>
    </section>
  );
}
