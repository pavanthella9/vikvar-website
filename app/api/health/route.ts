import { NextResponse } from "next/server";

export const dynamic = "force-static";

const cacheHeaders = {
  "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
};

export function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "vikvar-website",
      environment: process.env.NODE_ENV,
    },
    {
      headers: cacheHeaders,
    },
  );
}

export function HEAD() {
  return new Response(null, {
    status: 200,
    headers: cacheHeaders,
  });
}
