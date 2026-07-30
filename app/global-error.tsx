"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Vikvar website global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px",
            background: "#f8fafc",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <section
            style={{
              width: "100%",
              maxWidth: "680px",
              padding: "48px",
              border: "1px solid #e2e8f0",
              borderRadius: "24px",
              background: "#ffffff",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#1d4ed8",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Vikvar Technologies
            </p>

            <h1
              style={{
                margin: "18px 0 0",
                color: "#0f172a",
                fontSize: "36px",
                lineHeight: 1.2,
              }}
            >
              Something went wrong.
            </h1>

            <p
              style={{
                margin: "20px auto 0",
                maxWidth: "540px",
                color: "#475569",
                fontSize: "17px",
                lineHeight: 1.7,
              }}
            >
              The website encountered an unexpected issue. Please try again or
              contact info@vikvartech.com if the problem continues.
            </p>

            {error.digest ? (
              <p
                style={{
                  marginTop: "16px",
                  color: "#94a3b8",
                  fontSize: "12px",
                }}
              >
                Reference: {error.digest}
              </p>
            ) : null}

            <button
              type="button"
              onClick={reset}
              style={{
                marginTop: "30px",
                border: 0,
                borderRadius: "9px",
                padding: "13px 24px",
                background: "#1d4ed8",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
