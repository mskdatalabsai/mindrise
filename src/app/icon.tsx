import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          borderRadius: 7,
          background: "linear-gradient(135deg, #4F6EF7 0%, #1FD1B0 100%)",
          fontFamily: "sans-serif",
          fontSize: 18,
          fontWeight: 800,
          color: "#ffffff",
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
