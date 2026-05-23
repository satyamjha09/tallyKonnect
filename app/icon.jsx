import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#635bff", borderRadius: 14, color: "white", fontSize: 28, fontWeight: 700 }}>TK</div>,
    size,
  );
}
