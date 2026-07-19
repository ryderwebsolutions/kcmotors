"use client";

import { business } from "@/data/business";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-IE">
      <body style={{ backgroundColor: "#0D0D0D", margin: 0 }}>
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          <p style={{ fontSize: "3.5rem", fontWeight: 700, color: "#E2222D", margin: 0 }}>
            Oops
          </p>
          <h1
            style={{
              marginTop: "1rem",
              fontSize: "1.5rem",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            Something went wrong
          </h1>
          <p style={{ marginTop: "0.75rem", maxWidth: "28rem", color: "#A8A8A8" }}>
            That&apos;s on us, not you. Please call us directly if you need something sorted
            quickly.
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                borderRadius: "9999px",
                padding: "0.875rem 1.5rem",
                fontWeight: 600,
                fontSize: "0.9375rem",
                backgroundColor: "#E2222D",
                color: "#FFFFFF",
                border: "none",
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
            <a
              href={business.phoneHref}
              style={{
                borderRadius: "9999px",
                padding: "0.875rem 1.5rem",
                fontWeight: 600,
                fontSize: "0.9375rem",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.4)",
                textDecoration: "none",
              }}
            >
              {business.phoneDisplay}
            </a>
          </div>
        </section>
      </body>
    </html>
  );
}
