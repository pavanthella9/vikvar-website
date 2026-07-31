import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(145deg, #06132f 0%, #0b2a62 58%, #2563eb 100%)",
          color: "white",
          fontSize: 260,
          fontWeight: 800,
          letterSpacing: "-0.09em",
        }}
      >
        V
      </div>
    ),
    size,
  );
}
