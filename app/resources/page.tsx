import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, BriefcaseBusiness, CloudCog, Code2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description: "Practical Vikvar Technologies insights on recruiting, staffing, applications, cloud, and DevOps.",
  alternates: { canonical: "/resources" },
};

const resources = [
  ["Preparing a clear technology hiring requirement", "IT Recruiting", "Define role priorities, technical expectations, location, timeline, and interview ownership.", BriefcaseBusiness],
  ["Choosing between augmentation and project delivery", "Delivery Models", "Understand when team extension, consulting, or a defined project engagement may be the better fit.", BookOpen],
  ["Planning an application-modernisation roadmap", "Application Development", "Assess architecture, integrations, deployment workflows, risk, and user experience.", Code2],
  ["Building a reliable cloud and DevOps foundation", "Cloud & DevOps", "Consider infrastructure automation, CI/CD, access control, observability, and ownership.", CloudCog]
] as const;

export default function ResourcesPage() {
  return <main>
    <section className="bg-[#071a3d] py-20 text-white"><Container><p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Resources & Insights</p><h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">Practical guidance for technology talent and delivery decisions</h1></Container></section>
    <section className="py-20"><Container><div className="grid gap-7 md:grid-cols-2">{resources.map(([title, category, description, Icon]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></div><p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">{category}</p><h2 className="mt-3 text-2xl font-bold text-slate-950">{title}</h2><p className="mt-4 leading-7 text-slate-600">{description}</p><p className="mt-6 font-semibold text-slate-500">Article publishing structure ready</p></article>)}</div><div className="mt-12 rounded-3xl bg-[#071a3d] p-8 text-white"><h2 className="text-3xl font-bold">Need guidance for a current requirement?</h2><Link href="/contact" className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white">Contact our team</Link></div></Container></section>
  </main>;
}
