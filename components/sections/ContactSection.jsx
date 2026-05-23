"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Mail, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Talk to sales",
      description: "Explore automation, compliance, and connected banking solutions.",
      action: "Contact sales",
    },
    {
      icon: Mail,
      title: "Get support",
      description: "Already using TallyKonnect? Find fast answers and technical help.",
      action: "Visit support",
    },
    {
      icon: Globe2,
      title: "Global offices",
      description: "Connect with a specialist serving your region and market.",
      action: "View locations",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute right-[-110px] top-[-120px] h-[370px] w-[370px] rounded-full bg-[#635bff]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-90px] left-[-120px] h-[320px] w-[320px] rounded-full bg-[#00a866]/10 blur-3xl" />
      <div className="mx-auto max-w-[1420px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-[700px] lg:mb-16"
        >
          <p className="mb-5 text-[16px] font-semibold text-[#635bff]">Contact us</p>
          <h2 className="text-[clamp(2.5rem,4.7vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.07em] text-[#0a2540]">
            Let’s build your next revenue milestone.
          </h2>
          <p className="mt-6 max-w-[610px] text-[18px] leading-8 text-[#536582]">
            Tell us what you are building and our team will help you find the right payments and financial infrastructure solution.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.83fr_1.17fr] lg:gap-8">
          <div className="grid gap-4">
            {contactOptions.map(({ icon: Icon, title, description, action }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: -22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-45px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-[#e6ebf1] bg-[#f6f9fc] p-6 sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#635bff] shadow-sm"><Icon className="h-5 w-5" /></span>
                  <div>
                    <h3 className="text-[19px] font-semibold tracking-[-0.035em] text-[#0a2540]">{title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-[#536582]">{description}</p>
                    <motion.a whileHover={{ x: 4 }} href="#" className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[#635bff]">
                      {action} <ArrowRight className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-55px" }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="rounded-2xl border border-[#e6ebf1] bg-white p-6 shadow-[0_20px_65px_rgba(10,37,64,0.07)] sm:p-9 lg:p-10"
          >
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[535px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e9edff] text-[29px] text-[#635bff]">✓</div>
                <h3 className="text-[30px] font-semibold tracking-[-0.05em] text-[#0a2540]">Thanks for reaching out.</h3>
                <p className="mt-4 max-w-[390px] text-[16px] leading-7 text-[#536582]">Your message has been received. A specialist will connect with you soon.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-9 text-[15px] font-semibold text-[#635bff]">Send another message</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h3 className="text-[27px] font-semibold tracking-[-0.05em] text-[#0a2540]">Contact our team</h3>
                  <p className="mt-2 text-[15px] leading-6 text-[#536582]">Complete the form and we’ll be in touch shortly.</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="contact-field">
                    <span>First name</span>
                    <input required type="text" placeholder="Satyam" />
                  </label>
                  <label className="contact-field">
                    <span>Last name</span>
                    <input required type="text" placeholder="Jha" />
                  </label>
                  <label className="contact-field sm:col-span-2">
                    <span>Work email</span>
                    <input required type="email" placeholder="you@company.com" />
                  </label>
                  <label className="contact-field">
                    <span>Company</span>
                    <input required type="text" placeholder="Company name" />
                  </label>
                  <label className="contact-field">
                    <span>Business size</span>
                    <select defaultValue="">
                      <option value="" disabled>Select size</option>
                      <option>1–10 employees</option>
                      <option>11–100 employees</option>
                      <option>101–1,000 employees</option>
                      <option>1,000+ employees</option>
                    </select>
                  </label>
                  <label className="contact-field sm:col-span-2">
                    <span>How can we help?</span>
                    <textarea rows="4" placeholder="Tell us about your needs..." />
                  </label>
                </div>
                <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[300px] text-[12px] leading-5 text-[#6b7c93]">By submitting, you agree to be contacted about TallyKonnect products and services.</p>
                  <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="submit" className="flex items-center justify-center gap-2 rounded-md bg-[#635bff] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(99,91,255,.22)]">
                    Send message <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
