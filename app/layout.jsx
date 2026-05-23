import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SiteFooter from "@/components/layout/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tallykonnect.example";

/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TallyKonnect | Tally Automation, GST, TDS & Connected Banking",
    template: "%s | TallyKonnect",
  },
  description: "Automate invoices, bank reconciliation, GST reconciliation, TDS and smart reporting inside Tally Prime and Tally ERP 9.",
  applicationName: "TallyKonnect",
  keywords: ["Tally automation", "Tally Prime", "GST reconciliation", "TDS automation", "bank reconciliation", "connected banking"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "TallyKonnect",
    title: "TallyKonnect | Intelligent Automation for Tally",
    description: "Automate banking, invoices, GST, TDS and reports inside Tally.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "TallyKonnect intelligent automation for Tally" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TallyKonnect | Intelligent Automation for Tally",
    description: "Automate banking, invoices, GST, TDS and reports inside Tally.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
