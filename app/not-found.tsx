import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="bg-slate-50">
      <Container className="grid min-h-[72vh] place-items-center py-20">
        <div className="max-w-2xl text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-blue-100 text-blue-700">
            <SearchX size={30} />
          </span>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Error 404
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-[-0.045em] text-[#081a3a] sm:text-6xl">
            This page could not be found.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            The address may be incorrect, or the page may have been moved. Return to the homepage
            or explore Vikvar&apos;s services.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              <Home size={18} />
              Go to Homepage
            </Link>

            <Link
              href="/services/it-recruiting"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 font-bold text-[#081a3a] transition hover:border-blue-300 hover:bg-blue-50"
            >
              <ArrowLeft size={18} />
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
