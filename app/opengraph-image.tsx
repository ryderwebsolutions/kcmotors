import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "KC Motors — Garage, Tyres & Car Servicing in Carrick-on-Shannon";

export default function OpengraphImage() {
  const logoData = readFileSync(join(process.cwd(), "public/images/kc-motors-logo-wide.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 82% 25%, rgba(226,34,45,0.22), transparent 55%)",
        }}
      >
        {/* next/image cannot be used inside ImageResponse — plain <img> is required here. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={560} height={228} alt="" />
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#A8A8A8",
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
