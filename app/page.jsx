import HeroSection from "@/components/sections/HeroSection";
import ScaleWithConfidenceSection from "@/components/sections/ScaleWithConfidenceSection";
import ProductStackSection from "@/components/sections/ProductStackSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import IntegrationPathsSection from "@/components/sections/IntegrationPathsSection";
import NoCodeProductsSection from "@/components/sections/NoCodeProductsSection";
import ConnectSystemsSection from "@/components/sections/ConnectSystemsSection";
import ContactSection from "@/components/sections/ContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tallykonnect.example";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TallyKonnect",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Tally Prime, Tally ERP 9",
  url: siteUrl,
  description: "Automation suite for invoices, banking, GST reconciliation, TDS and smart reports inside Tally.",
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <main className="page">
        <HeroSection />
        <ScaleWithConfidenceSection />
        <ProductStackSection />
        <TestimonialsSection />
        <IntegrationPathsSection />
        <NoCodeProductsSection />
        <ConnectSystemsSection />
        <ContactSection />
      </main>
    </>
  );
}
