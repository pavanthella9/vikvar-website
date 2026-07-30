import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicePage() {
  return (
    <main>
      <section className="bg-[#071a35] py-24 text-white">
        <div className="site-container">
          <span className="eyebrow eyebrow-dark">Vikvar Services</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">Application Development</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Build, modernize, and support applications aligned with business requirements.</p>
          <Link href="/contact" className="button button-primary mt-9">
            Discuss Your Requirement <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow">Capabilities</span>
            <h2 className="section-title mt-5">A practical engagement built around your business objective.</h2>
          </div>
          <ul className="grid list-none gap-4 p-0 sm:grid-cols-2">
              <li className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-slate-700">Web and enterprise applications</li>
              <li className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-slate-700">API and systems integration</li>
              <li className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-slate-700">Application modernization</li>
              <li className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-slate-700">Quality engineering and testing</li>
              <li className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-slate-700">Maintenance and production support</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
