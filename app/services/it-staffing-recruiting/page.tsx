import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export default function ServicePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Vikvar Services"
        title="IT Staffing & Recruiting"
        description="Build high-performing technology teams with flexible, targeted hiring support."
      />

      <section className="bg-[#f7f9fc] py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-4xl font-bold tracking-[-0.035em] text-[#081a3a]">
                What we deliver
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              <li className="rounded-2xl border border-[#dce5ef] bg-white p-5 font-semibold text-[#31415f]">Contract staffing</li>
              <li className="rounded-2xl border border-[#dce5ef] bg-white p-5 font-semibold text-[#31415f]">Permanent recruitment</li>
              <li className="rounded-2xl border border-[#dce5ef] bg-white p-5 font-semibold text-[#31415f]">Contract-to-hire</li>
              <li className="rounded-2xl border border-[#dce5ef] bg-white p-5 font-semibold text-[#31415f]">Executive search</li>
              <li className="rounded-2xl border border-[#dce5ef] bg-white p-5 font-semibold text-[#31415f]">Recruitment process outsourcing</li>
              </ul>
            </div>

            <aside className="rounded-[28px] bg-[#081a3a] p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#55d8ff]">
                Start a conversation
              </p>
              <h2 className="mt-4 text-3xl font-bold">
                Discuss your hiring or technology requirements.
              </h2>
              <p className="mt-4 leading-7 text-white/65">
                Tell us what you need, your timeline, and the outcomes you want to achieve.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-xl bg-white px-6 py-4 font-bold text-[#081a3a]"
              >
                Contact Vikvar
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
