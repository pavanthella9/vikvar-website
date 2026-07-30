import type { Metadata } from "next";
import { Search } from "lucide-react";
import { SiteSearch } from "@/components/search/site-search";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search Vikvar Technologies services, company information, careers, industries, and contact pages.",
  alternates: {
    canonical: "/search",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_38%)]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-blue-200">
              <Search className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.20em] text-blue-300">
              Website Search
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Find services and information
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Search across Vikvar Technologies services, company information,
              careers, industries, and contact resources.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SiteSearch />
        </Container>
      </section>
    </main>
  );
}
