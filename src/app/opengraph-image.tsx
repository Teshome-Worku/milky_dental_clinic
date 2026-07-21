import { ImageResponse } from "next/og";

export const alt = "Dr. Milky Derara Specialty Dental Clinic";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #f8fafc 0%, #e8f4fd 100%)",
          color: "#0f172a",
          display: "flex",
          height: "100%",
          padding: "76px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ background: "#1da1f2", borderRadius: "999px", height: "18px", left: "76px", position: "absolute", top: "76px", width: "18px" }} />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "850px" }}>
          <div style={{ color: "#1da1f2", display: "flex", fontSize: "26px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Specialty Dental Clinic · Addis Ababa
          </div>
          <div style={{ display: "flex", fontSize: "74px", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.05, marginTop: "28px" }}>
            Dr. Milky Derara
          </div>
          <div style={{ color: "#475569", display: "flex", fontSize: "34px", lineHeight: 1.35, marginTop: "24px" }}>
            Modern, compassionate dental care for every smile.
          </div>
        </div>
        <div style={{ background: "#d4af37", borderRadius: "50%", bottom: "-110px", height: "380px", opacity: 0.18, position: "absolute", right: "-70px", width: "380px" }} />
      </div>
    ),
    size
  );
}
