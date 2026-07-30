import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3, BriefcaseBusiness, Check, CircleGauge, Clock3, Code2, Database, Headphones, Layers3, Network, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "IT Staff Augmentation Services | Vikvar Technologies",
  description: "Scale your technology team with pre-screened IT professionals through flexible staff augmentation models from Vikvar Technologies.",
};

const benefits = [
  [Clock3, "Faster access to talent", "Reduce lengthy hiring cycles with qualified professionals aligned to your requirements."],
  [CircleGauge, "Flexible team scaling", "Add skills and capacity when priorities change without creating unnecessary fixed overhead."],
  [BadgeCheck, "Quality-led selection", "Every candidate is evaluated for technical capability, communication, and role suitability."],
  [ShieldCheck, "Lower delivery risk", "Strengthen critical initiatives with specialists who integrate into your existing ways of working."],
];

const models = [
  ["Individual Specialists", "Add focused expertise for a specific role, project, or capability gap."],
  ["Project-Based Teams", "Deploy a coordinated team across development, QA, data, cloud, or support."],
  ["Contract-to-Hire", "Evaluate performance and cultural alignment before making a long-term hiring decision."],
  ["Dedicated Delivery Pod", "Create a stable cross-functional team with defined governance and delivery ownership."],
];

const steps = [
  ["01", "Requirement discovery", "We clarify outcomes, skills, seniority, duration, work model, and team context."],
  ["02", "Talent identification", "Our recruiting team sources and shortlists professionals against the agreed profile."],
  ["03", "Technical validation", "Candidates complete role-specific technical and communication evaluation."],
  ["04", "Client selection", "You review concise profiles and interview only the strongest matches."],
  ["05", "Onboarding", "We coordinate documentation, start dates, access, and team integration."],
  ["06", "Ongoing support", "Regular check-ins help maintain performance, continuity, and rapid issue resolution."],
];

const capabilities = [
  [Code2, "Application Engineering", "Java, .NET, Python, web, mobile, APIs, and modern frameworks"],
  [Database, "Data & Analytics", "Data engineering, BI, databases, analytics, and AI-enabled solutions"],
  [ShieldCheck, "Cybersecurity", "Security engineering, governance, testing, and risk-focused roles"],
  [Layers3, "Enterprise Platforms", "SAP, CRM, ERP, integration, and business application specialists"],
  [Network, "Cloud & DevOps", "Cloud engineering, automation, containers, SRE, and platform operations"],
  [BarChart3, "Quality Engineering", "Manual, automation, performance, and continuous quality practices"],
];

const faqs = [
  ["How quickly can Vikvar provide candidates?", "Timelines depend on role complexity and location, but our process is designed to produce a focused shortlist quickly after requirements are confirmed."],
  ["Can professionals work with our existing team and tools?", "Yes. Staff augmentation professionals join your operating model and work with your processes, tools, managers, and delivery standards."],
  ["Do you support short-term and long-term needs?", "Yes. Engagements can support targeted project needs, temporary capacity, long-term programs, or contract-to-hire requirements."],
  ["How do you assess candidate quality?", "We combine profile validation, technical evaluation, communication screening, quality checks, and client-specific assessment criteria."],
];

export default function StaffAugmentationPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(21,101,255,0.38),transparent_36%)]" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Staff Augmentation</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">Scale your technology team without slowing delivery.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Access pre-screened IT professionals who bring the right expertise, integrate with your team, and help move business-critical initiatives forward.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">Request Talent <ArrowRight size={18} /></Link>
                <Link href="#models" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 px-7 font-bold text-white transition hover:bg-white/10">Explore Engagement Models</Link>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/15 bg-white/8 p-7 backdrop-blur sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">Built for changing priorities</p>
              <div className="mt-7 space-y-5">{["Specialized talent for urgent capability gaps", "Flexible engagement models", "Technical and communication screening", "Structured onboarding and ongoing support"].map((item) => <div key={item} className="flex gap-3"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-400 text-[#071a3d]"><Check size={15} strokeWidth={3} /></span><p className="text-sm leading-6 text-slate-200">{item}</p></div>)}</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Why staff augmentation" title="Add the capacity you need while retaining delivery control." description="Vikvar helps organizations respond to changing workloads, specialist skill requirements, and aggressive timelines without compromising quality." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{benefits.map(([Icon, title, text]) => <article key={title as string} className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"><span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700"><Icon size={23} /></span><h2 className="mt-5 text-lg font-bold text-[#081a3a]">{title as string}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{text as string}</p></article>)}</div>
        </Container>
      </section>

      <section id="models" className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Engagement models" title="Flexible structures for different workforce needs." description="Choose a model that matches the scope, duration, ownership, and pace of your initiative." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">{models.map(([title, text], index) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7"><div className="flex items-start justify-between gap-4"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#081a3a] text-sm font-bold text-white">0{index + 1}</span><BriefcaseBusiness className="text-blue-600" /></div><h2 className="mt-6 text-2xl font-bold text-[#081a3a]">{title}</h2><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Delivery process" title="A structured path from requirement to productive contribution." description="Our process is built to improve fit, shorten decision time, and create a smoother onboarding experience." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{steps.map(([number, title, text]) => <article key={number} className="rounded-2xl border border-slate-200 p-6"><span className="text-sm font-extrabold tracking-[0.18em] text-blue-600">{number}</span><h2 className="mt-4 text-xl font-bold text-[#081a3a]">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}</div>
        </Container>
      </section>

      <section className="bg-[#071a3d] py-20 text-white sm:py-28">
        <Container>
          <SectionHeading eyebrow="Technology expertise" title="Talent across the capabilities modern organizations depend on." description="From core application engineering to enterprise platforms and cloud operations, we help you access professionals across the technology lifecycle." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(([Icon, title, text]) => <article key={title as string} className="rounded-2xl border border-white/12 bg-white/6 p-6"><Icon className="text-cyan-300" size={25} /><h2 className="mt-5 text-lg font-bold">{title as string}</h2><p className="mt-3 text-sm leading-6 text-slate-300">{text as string}</p></article>)}</div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div><SectionHeading eyebrow="Governance & support" title="More than candidate placement." description="We stay involved after onboarding to support continuity, communication, and delivery confidence." /><div className="mt-8 flex items-center gap-4 rounded-2xl bg-blue-50 p-5"><Headphones className="text-blue-700" /><p className="font-semibold text-[#081a3a]">A clear point of contact throughout the engagement.</p></div></div>
            <div className="grid gap-4 sm:grid-cols-2">{["Regular engagement check-ins", "Performance and feedback alignment", "Rapid issue escalation", "Replacement and continuity support", "Transparent communication", "Scalable workforce planning"].map((item) => <div key={item} className="flex gap-3 rounded-xl border border-slate-200 p-5"><Users className="mt-0.5 shrink-0 text-blue-600" size={20} /><p className="text-sm font-semibold leading-6 text-slate-700">{item}</p></div>)}</div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Frequently asked questions" title="Answers for workforce and delivery leaders." align="center" />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">{faqs.map(([q, a]) => <details key={q} className="group rounded-2xl border border-slate-200 bg-white p-6"><summary className="cursor-pointer list-none pr-8 text-lg font-bold text-[#081a3a]">{q}</summary><p className="mt-4 leading-7 text-slate-600">{a}</p></details>)}</div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] bg-[#1565ff] px-7 py-14 text-white sm:px-10 lg:px-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">Build your team</p><h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">Tell us where you need expertise. We&apos;ll help you find the right people.</h2></div><Link href="/contact" className="inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-7 font-bold text-[#0a1b3d] transition hover:-translate-y-0.5">Submit Requirement</Link></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
