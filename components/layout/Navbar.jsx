import Link from "next/link";
import Button from "@/components/ui/Button";

const links = [
  { href: "#solutions", label: "Solutions" },
  { href: "#integrations", label: "Integrations" },
  { href: "#banking", label: "Connected Banking" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[70] border-b border-[#e6ebf1] bg-white/90 backdrop-blur-xl">
      <nav aria-label="Primary" className="mx-auto flex h-[74px] max-w-[1520px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="TallyKonnect home" className="text-[28px] font-bold tracking-[-0.09em] text-[#0a2540]">TK</Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => <Link key={link.href} className="site-nav-link" href={link.href}>{link.label}</Link>)}
        </div>
        <Button href="#contact" className="hidden sm:inline-flex">Schedule a Demo</Button>
      </nav>
    </header>
  );
}
