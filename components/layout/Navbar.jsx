"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

const solutionItems = [
  { name: "Connected Banking", hasSubmenu: true },
  { name: "Purchase Invoice Automation", href: "/#solutions" },
  { name: "Smart TDS", href: "/#solutions" },
  { name: "Bank Recon", href: "/#solutions" },
  { name: "GST Recon", href: "/#solutions" },
  { name: "Smart Reports", href: "/#solutions" },
  { name: "AnyWhereTally", href: "/#solutions", badge: "COMING SOON" },
];

const bankingItems = [
  { name: "Yes Bank Plugin", href: "/#solutions" },
  { name: "Purchase Invoice Automation", href: "/#solutions" },
  { name: "Canara Bank Plugin", href: "/#solutions" },
  { name: "Smart TDS", href: "/#solutions" },
  { name: "AU Bank Plugin", href: "/#solutions" },
  { name: "Bank Recon", href: "/#solutions" },
  { name: "RBL Bank Plugin", href: "/#solutions", badge: "IN PROGRESS" },
  { name: "GST Recon", href: "/#solutions" },
  { name: "Smart Reports", href: "/#solutions" },
  { name: "AnyWhereTally", href: "/#solutions", badge: "COMING SOON" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileBankingOpen, setMobileBankingOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3562fa] text-[20px] font-bold tracking-[-0.06em] text-white">
            TK
          </span>

          <span className="hidden text-[22px] font-bold tracking-[-0.06em] text-[#14243b] sm:block">
            TallyKonnect
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          <Link
            href="/"
            className="text-[15px] font-semibold text-[#17263b] transition-colors hover:text-[#3562fa]"
          >
            Home
          </Link>

          {/* Solutions Dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1.5 py-7 text-[15px] font-semibold text-[#17263b] transition-colors group-hover:text-[#3562fa]"
            >
              Solutions
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-full w-[320px] -translate-x-1/2 translate-y-3 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-[0_22px_65px_rgba(15,23,42,0.14)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {solutionItems.map((item) =>
                item.hasSubmenu ? (
                  /* Connected Banking Nested Dropdown */
                  <div key={item.name} className="group/banking relative">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[14px] font-semibold text-[#17263b] transition-colors hover:bg-[#f4f7ff] hover:text-[#3562fa]"
                    >
                      {item.name}
                      <ChevronRight className="h-4 w-4" />
                    </button>

                    <div className="invisible absolute left-full top-0 ml-2 w-[320px] translate-x-3 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-[0_22px_65px_rgba(15,23,42,0.14)] transition-all duration-200 group-hover/banking:visible group-hover/banking:translate-x-0 group-hover/banking:opacity-100">
                      <p className="px-4 pb-2 pt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        Connected Banking
                      </p>

                      {bankingItems.map((bankingItem) => (
                        <Link
                          key={bankingItem.name}
                          href={bankingItem.href}
                          className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-[14px] font-medium text-[#334155] transition-colors hover:bg-[#f4f7ff] hover:text-[#3562fa]"
                        >
                          <span>{bankingItem.name}</span>

                          {bankingItem.badge && (
                            <span
                              className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-bold ${
                                bankingItem.badge === "COMING SOON"
                                  ? "bg-amber-50 text-amber-600"
                                  : "bg-blue-50 text-[#3562fa]"
                              }`}
                            >
                              {bankingItem.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-[14px] font-medium text-[#334155] transition-colors hover:bg-[#f4f7ff] hover:text-[#3562fa]"
                  >
                    <span>{item.name}</span>

                    {item.badge && (
                      <span className="shrink-0 rounded-full bg-amber-50 px-2 py-1 text-[9px] font-bold text-amber-600">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )
              )}
            </div>
          </div>

          <Link
            href="/#demo"
            className="text-[15px] font-semibold text-[#17263b] transition-colors hover:text-[#3562fa]"
          >
            Demo
          </Link>

          <Link
            href="/#contact"
            className="text-[15px] font-semibold text-[#17263b] transition-colors hover:text-[#3562fa]"
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Login Button */}
        <Link
          href="/login"
          className="hidden rounded-lg bg-[#3562fa] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(53,98,250,0.22)] transition hover:-translate-y-0.5 hover:bg-[#2855ee] lg:inline-flex"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-[#17263b] lg:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-[15px] font-semibold text-[#17263b] hover:bg-slate-50"
            >
              Home
            </Link>

            <button
              type="button"
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-[15px] font-semibold text-[#17263b] hover:bg-slate-50"
            >
              Solutions
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mobileSolutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileSolutionsOpen && (
              <div className="ml-3 border-l border-slate-200 pl-3">
                <button
                  type="button"
                  onClick={() => setMobileBankingOpen(!mobileBankingOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-[14px] font-medium text-[#334155] hover:bg-slate-50"
                >
                  Connected Banking
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileBankingOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileBankingOpen && (
                  <div className="ml-3 border-l border-slate-200 pl-3">
                    {bankingItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#3562fa]"
                      >
                        {item.name}

                        {item.badge && (
                          <span className="rounded-full bg-amber-50 px-2 py-1 text-[8px] font-bold text-amber-600">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}

                {solutionItems
                  .filter((item) => !item.hasSubmenu)
                  .map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between gap-2 rounded-lg px-3 py-3 text-[14px] font-medium text-[#334155] hover:bg-slate-50 hover:text-[#3562fa]"
                    >
                      {item.name}

                      {item.badge && (
                        <span className="rounded-full bg-amber-50 px-2 py-1 text-[8px] font-bold text-amber-600">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
              </div>
            )}

            <Link
              href="/#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-[15px] font-semibold text-[#17263b] hover:bg-slate-50"
            >
              Demo
            </Link>

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-[15px] font-semibold text-[#17263b] hover:bg-slate-50"
            >
              Contact Us
            </Link>

            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex justify-center rounded-lg bg-[#3562fa] px-6 py-3.5 text-[15px] font-semibold text-white"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}