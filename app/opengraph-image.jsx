import { ImageResponse } from "next/og";

export const alt = "TallyKonnect intelligent automation for Tally";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "74px", color: "white", background: "linear-gradient(125deg, #0c1638 0%, #182657 50%, #635bff 100%)", fontFamily: "Arial" }}>
      <div style={{ display: "flex", fontSize: 36, fontWeight: 700, marginBottom: 46 }}>TK · TallyKonnect</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 700, letterSpacing: "-3px", lineHeight: 1.05 }}>
        <span>Intelligent automation</span>
        <span>for Tally.</span>
      </div>
      <div style={{ display: "flex", marginTop: 38, fontSize: 25, color: "#c4d1f4" }}>Invoices · Banking · GST · TDS · Smart Reports</div>
    </div>,
    size,
  );
}
