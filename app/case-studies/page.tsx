import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/components/case-studies/data";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Representative recruiting, application-modernisation, and cloud-delivery engagement scenarios from Vikvar Technologies.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="bg-[#071a3d] py-20 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Case Studies</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">Practical scenarios across talent and technology delivery</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">These representative scenarios show our delivery approach without publishing invented clients, quotations, or unsupported metrics.</p>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="grid gap-7 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.slug} className="rounded-2xl border border-slate-200 bg-white p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">{study.industry}</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-950">{study.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{study.summary}</p>
                <p className="mt-5 text-sm font-semibold text-slate-500">{study.service}</p>
                <Link href={`/case-studies/${study.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700">
                  Read scenario <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
