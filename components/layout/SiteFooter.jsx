import Link from "next/link";
import Button from "@/components/ui/Button";

const footerGroups = [
  { title: "Products", links: ["Invoice Automation", "Smart TDS", "Bank Recon", "GST Recon", "Smart Reports"] },
  { title: "Solutions", links: ["Tally Prime", "Tally ERP 9", "Banking", "Compliance", "Audit"] },
  { title: "Company", links: ["About", "Customers", "Contact", "Privacy", "Terms"] },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#1f315e] bg-[#0c1638] text-white">
      <div className="mx-auto max-w-[1520px] px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pb-10 lg:pt-20">
        <div className="grid gap-14 border-b border-[#233562] pb-16 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-[340px]">
            <Link href="/" className="text-[34px] font-bold tracking-[-0.09em]">TK</Link>
            <p className="mt-6 text-[15px] leading-7 text-[#9eb0dc]">Automation, banking, GST and TDS workflows built for Tally-powered businesses.</p>
            <div className="mt-8"><Button href="#contact">Schedule a Demo</Button></div>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-5 text-[14px] font-semibold">{group.title}</h2>
              <ul className="space-y-4 text-[14px] text-[#9eb0dc]">
                {group.links.map((label) => <li key={label}><Link href="#contact" className="transition-colors hover:text-white">{label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 pt-8 text-[14px] text-[#91a5d5] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TallyKonnect. All rights reserved.</p>
          <p>Made for businesses across India.</p>
        </div>
      </div>
    </footer>
  );
}
