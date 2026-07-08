import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "KC Motors — Garage, Tyres & Car Servicing in Carrick-on-Shannon";

export default function OpengraphImage() {
  const logoData = readFileSync(join(process.cwd(), "public/images/kc-motors-logo.jpg"));
  const logoSrc = `data:image/jpeg;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#151824",
          backgroundImage:
            "radial-gradient(circle at 82% 25%, rgba(163,230,53,0.16), transparent 55%)",
        }}
      >
        {/* next/image cannot be used inside ImageResponse — plain <img> is required here. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={116} height={116} style={{ borderRadius: 20 }} alt="" />
        <div
          style={{
            marginTop: 44,
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
          }}
        >
          KC Motors
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 32,
            color: "#A3E635",
            fontWeight: 600,
          }}
        >
          Driving Trust
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#C4C8D3",
            maxWidth: 820,
          }}
        >
          Tyres, servicing &amp; vehicle repairs in Carrick-on-Shannon
        </div>
      </div>
    ),
    { ...size }
  );
}
