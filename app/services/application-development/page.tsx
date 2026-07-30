import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Database,
  Gauge,
  Layers3,
  MonitorSmartphone,
  RefreshCw,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Application Development Services | Vikvar Technologies",
  description:
    "Design, build, modernize, and support secure business applications with Vikvar Technologies' end-to-end application development services.",
};

const outcomes = [
  [Gauge, "Faster time to value", "Move from validated requirements to working releases through focused planning and iterative delivery."],
  [Layers3, "Scalable architecture", "Build applications and integrations that can evolve as users, data, and business requirements grow."],
  [ShieldCheck, "Quality and security", "Embed engineering standards, testing, security controls, and release discipline throughout delivery."],
  [Users, "Better user experience", "Create practical, accessible experiences shaped around real users and business workflows."],
] as const;

const capabilities = [
  [MonitorSmartphone, "Web Application Development", "Responsive customer portals, internal platforms, dashboards, and business applications."],
  [Code2, "API & Integration Development", "Secure APIs and integrations that connect applications, platforms, partners, and business data."],
  [RefreshCw, "Application Modernization", "Modernize legacy applications through re-platforming, refactoring, modularization, and phased replacement."],
  [Database, "Data-Driven Applications", "Applications that combine trusted data, workflow automation, reporting, and operational insights."],
  [Workflow, "Enterprise Workflow Solutions", "Digitize approvals, case management, service operations, and other process-intensive workflows."],
  [ShieldCheck, "Quality Engineering", "Functional, integration, automation, performance, security, and release-readiness testing."],
] as const;

const lifecycle = [
  ["01", "Discover", "Clarify users, business outcomes, workflows, integrations, constraints, and success measures."],
  ["02", "Define", "Shape requirements, scope, architecture, delivery plan, priorities, and measurable acceptance criteria."],
  ["03", "Design", "Create user journeys, interface direction, data models, APIs, and technical solution design."],
  ["04", "Build", "Develop in focused increments with code review, testing, demos, and transparent progress reporting."],
  ["05", "Release", "Prepare environments, validate readiness, migrate data where required, and support controlled deployment."],
  ["06", "Improve", "Monitor performance, resolve issues, enhance features, and evolve the application as needs change."],
] as const;

const technologyAreas = [
  ["Front End", "Modern web interfaces, responsive design, reusable components, and accessible user experiences"],
  ["Back End", "Business services, APIs, integrations, workflow engines, and secure application logic"],
  ["Data", "Relational and NoSQL data stores, reporting, analytics, migration, and data integration"],
  ["Cloud & DevOps", "Automated delivery pipelines, containers, cloud deployment, monitoring, and operational readiness"],
  ["Quality", "Test strategy, automation, performance validation, security testing, and release controls"],
  ["Support", "Application monitoring, maintenance, incident support, optimization, and enhancement delivery"],
] as const;

const deliveryModels = [
  ["Project Delivery", "A defined application initiative delivered against agreed scope, milestones, and outcomes."],
  ["Dedicated Product Team", "A stable cross-functional team aligned to your roadmap, users, and release priorities."],
  ["Modernization Program", "A phased approach to improving legacy systems while managing continuity and operational risk."],
  ["Application Support", "Ongoing maintenance, enhancement, monitoring, troubleshooting, and release support."],
] as const;

const faqs = [
  ["Can Vikvar work with an existing application or codebase?", "Yes. We can assess an existing application, identify technical and operational risks, recommend a modernization path, and support incremental improvements or a full rebuild."],
  ["Do you provide design as well as development?", "Yes. Engagements can include discovery, user experience design, solution architecture, development, testing, deployment, and ongoing support."],
  ["Can you integrate with our current systems?", "Yes. Integration planning is part of solution design. We can connect applications with enterprise platforms, third-party services, databases, and partner systems using secure APIs and integration patterns."],
  ["How do you manage quality during development?", "We use defined acceptance criteria, code review, automated and manual testing, release controls, and regular demonstrations so quality is addressed continuously rather than only at the end."],
] as const;

export default function ApplicationDevelopmentPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(21,101,255,0.44),transparent_38%)]" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Application Development</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Build applications that move your business forward.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Vikvar designs, develops, modernizes, and supports secure applications that improve customer experiences, business operations, and delivery speed.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Discuss Your Application <ArrowRight size={18} />
                </Link>
                <Link href="#capabilities" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 px-7 font-bold text-white transition hover:bg-white/10">
                  Explore Capabilities
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/8 p-7 backdrop-blur sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">End-to-end delivery</p>
              <div className="mt-7 space-y-5">
                {[
                  "Discovery, UX, architecture, and development",
                  "Modern web applications, APIs, and integrations",
                  "Legacy application modernization",
                  "Testing, deployment, support, and continuous improvement",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-400 text-[#071a3d]">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Business outcomes"
            title="Applications designed around measurable business value."
            description="We combine user needs, engineering discipline, and practical delivery planning to create solutions that are usable, maintainable, and ready to scale."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map(([Icon, title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700"><Icon size={23} /></span>
                <h2 className="mt-5 text-lg font-bold text-[#081a3a]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="capabilities" className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Development capabilities"
            title="From new product development to application modernization."
            description="Vikvar supports the complete application lifecycle with flexible teams and practical engineering expertise."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([Icon, title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#081a3a] text-white"><Icon size={23} /></span>
                <h2 className="mt-6 text-2xl font-bold text-[#081a3a]">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Delivery lifecycle"
            title="A transparent path from idea to reliable production release."
            description="Our process keeps business stakeholders and delivery teams aligned through clear decisions, visible progress, and frequent validation."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lifecycle.map(([number, title, text]) => (
              <article key={number} className="rounded-2xl border border-slate-200 p-6">
                <span className="text-sm font-extrabold tracking-[0.18em] text-blue-600">{number}</span>
                <h2 className="mt-4 text-xl font-bold text-[#081a3a]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#071a3d] py-20 text-white sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Engineering coverage"
            title="Connected expertise across the application lifecycle."
            description="Successful applications depend on more than code. We consider experience, architecture, data, quality, delivery automation, security, and support together."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technologyAreas.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-white/12 bg-white/6 p-6">
                <Code2 className="text-cyan-300" size={25} />
                <h2 className="mt-5 text-lg font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Delivery models"
            title="A flexible model for your application roadmap."
            description="Choose a defined project, a dedicated product team, a phased modernization program, or ongoing application support."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {deliveryModels.map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-7 transition hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
                <div className="flex gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">0{index + 1}</span>
                  <div>
                    <h2 className="text-xl font-bold text-[#081a3a]">{title}</h2>
                    <p className="mt-3 leading-7 text-slate-600">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Frequently asked questions" title="Answers about application delivery and modernization." align="center" />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-[#081a3a]">{question}</summary>
                <p className="mt-4 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] bg-[#1565ff] px-7 py-14 text-white sm:px-10 lg:px-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">Build with confidence</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                  Turn your application requirement into a clear delivery plan.
                </h2>
              </div>
              <Link href="/contact" className="inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-7 font-bold text-[#0a1b3d] transition hover:-translate-y-0.5">
                Start a Conversation
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
