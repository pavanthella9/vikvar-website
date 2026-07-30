"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Vikvar website page error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-slate-50 px-6 py-20">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
          <AlertTriangle className="h-7 w-7" aria-hidden="true" />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          Temporary issue
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          We couldn&apos;t load this page.
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
          Please try again. If the issue continues, return to the homepage or
          contact our team at{" "}
          <a
            href="mailto:info@vikvartech.com"
            className="font-semibold text-blue-700 hover:text-blue-900"
          >
            info@vikvartech.com
          </a>
          .
        </p>

        {error.digest ? (
          <p className="mt-4 text-xs text-slate-400">
            Reference: {error.digest}
          </p>
        ) : null}

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            <RefreshCw className="h-5 w-5" aria-hidden="true" />
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
