import { readFileSync } from "fs";
import { join } from "path";

let cachedLogoDataUri: string | null = null;

function logoDataUri() {
  if (!cachedLogoDataUri) {
    const logoData = readFileSync(join(process.cwd(), "public/images/kc-motors-logo-wide.png"));
    cachedLogoDataUri = `data:image/png;base64,${logoData.toString("base64")}`;
  }
  return cachedLogoDataUri;
}

export function OgImageLayout({ title }: { title: string }) {
  return (
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
      <img src={logoDataUri()} width={340} height={139} alt="" />
      <div
        style={{
          marginTop: 36,
          fontSize: 56,
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: "-0.02em",
          maxWidth: 950,
        }}
      >
        {title}
      </div>
      <div style={{ marginTop: 18, fontSize: 28, color: "#A8A8A8" }}>
        Garage, tyres &amp; servicing in Carrick-on-Shannon
      </div>
    </div>
  );
}
