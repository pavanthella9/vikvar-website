import { ImageResponse } from "next/og";

export const alt =
  "Vikvar Technologies — IT recruiting, staff augmentation and technology consulting";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #041024 0%, #0b2a62 62%, #1d4ed8 100%)",
          color: "white",
          padding: "72px 78px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            right: -120,
            top: -160,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 380,
            height: 380,
            right: -20,
            bottom: -220,
            borderRadius: "50%",
            border: "1px solid rgba(147,197,253,.22)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 66,
                height: 66,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                background: "white",
                color: "#0b2a62",
                fontSize: 38,
                fontWeight: 900,
              }}
            >
              V
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              Vikvar Technologies
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 890 }}>
            <div
              style={{
                display: "flex",
                color: "#93c5fd",
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Technology Talent & Delivery
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 20,
                fontSize: 56,
                fontWeight: 850,
                lineHeight: 1.08,
                letterSpacing: "-0.045em",
              }}
            >
              Build stronger technology teams and move critical initiatives
              forward
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                color: "#dbeafe",
                fontSize: 24,
              }}
            >
              IT Recruiting · Staff Augmentation · Consulting · Engineering
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
