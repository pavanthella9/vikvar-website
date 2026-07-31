import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/components/case-studies/data";
import { Container } from "@/components/ui/Container";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  return study ? { title: study.title, description: study.summary, alternates: { canonical: `/case-studies/${study.slug}` } } : {};
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  return (
    <main>
      <section className="bg-[#071a3d] py-16 text-white">
        <Container>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-200"><ArrowLeft className="h-4 w-4" />All case studies</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">{study.industry} · {study.service}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">{study.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{study.summary}</p>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">Technologies</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.technologies.map((item) => <span key={item} className="rounded-full border bg-white px-3 py-2 text-sm font-semibold text-slate-700">{item}</span>)}
              </div>
            </aside>
            <div className="space-y-12">
              <section><h2 className="text-3xl font-bold text-slate-950">Challenge</h2><p className="mt-5 leading-8 text-slate-600">{study.challenge}</p></section>
              <section>
                <h2 className="text-3xl font-bold text-slate-950">Approach</h2>
                <div className="mt-6 space-y-4">{study.approach.map((item) => <div key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" /><p className="leading-7 text-slate-600">{item}</p></div>)}</div>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-slate-950">Expected outcomes</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">{study.outcomes.map((item) => <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700">{item}</div>)}</div>
              </section>
              <Link href="/contact" className="inline-flex rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white">Discuss a similar requirement</Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
