import { ImageResponse } from "next/og";

export const alt = "Poepplan — rust rond poepen. Een plan voor thuis.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBF6EE",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#243028",
            fontSize: 32,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#E7D4B8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C15F3C",
              fontSize: 28,
            }}
          >
            •••
          </div>
          Poepplan
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.1,
              color: "#243028",
              maxWidth: 860,
            }}
          >
            Als poepen thuis een strijd is
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 32,
              color: "#4A564C",
              maxWidth: 780,
            }}
          >
            Wachtlijst open. Een online programma voor ouders. Warm, zonder schaamte.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
