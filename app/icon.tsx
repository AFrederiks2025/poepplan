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
          background: "#E7D4B8",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            position: "relative",
            width: 22,
            height: 18,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 1,
              width: 10,
              height: 7,
              borderRadius: 999,
              background: "#C15F3C",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 7,
              bottom: 6,
              width: 8,
              height: 6,
              borderRadius: 999,
              background: "#C15F3C",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 13,
              bottom: 10,
              width: 7,
              height: 5,
              borderRadius: 999,
              background: "#C15F3C",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
