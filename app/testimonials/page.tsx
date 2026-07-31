import type { Metadata } from "next";
import { MessageSquareQuote, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Client Feedback",
  description: "Vikvar Technologies policy for verified, approved, and privacy-conscious testimonials.",
  alternates: { canonical: "/testimonials" },
};

const items = [
  ["Verified and approved", "Testimonials are published only after the client approves the wording and public use."],
  ["Specific and relevant", "Useful feedback explains the engagement context, service, and business value without exaggerated claims."],
  ["Privacy respected", "Client names, brands, people, and project details are never published without permission."]
];

export default function TestimonialsPage() {
  return <main>
    <section className="bg-[#071a3d] py-20 text-white"><Container><p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Client Feedback</p><h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">Trust is built through delivery and approved references</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">This page is ready for future verified testimonials. We do not publish invented names, logos, quotations, or performance claims.</p></Container></section>
    <section className="py-20"><Container><div className="grid gap-7 md:grid-cols-3">{items.map(([title, description]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7"><ShieldCheck className="h-7 w-7 text-blue-700" /><h2 className="mt-5 text-xl font-bold text-slate-950">{title}</h2><p className="mt-3 leading-7 text-slate-600">{description}</p></article>)}</div><div className="mt-12 rounded-3xl bg-slate-50 p-8"><MessageSquareQuote className="h-10 w-10 text-blue-700" /><h2 className="mt-5 text-3xl font-bold text-slate-950">Testimonial-ready structure</h2><p className="mt-4 max-w-3xl leading-8 text-slate-600">Approved feedback can later include the client role, organisation or industry, service used, quotation, and optional logo permission.</p></div></Container></section>
  </main>;
}
