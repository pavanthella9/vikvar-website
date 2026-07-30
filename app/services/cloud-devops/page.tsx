import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Layers3,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Cloud & DevOps Services | Vikvar Technologies",
  description:
    "Improve cloud delivery, deployment automation, platform reliability, security, and operational visibility with Vikvar Technologies Cloud and DevOps services.",
};

const outcomes = [
  [Gauge, "Faster software delivery", "Reduce manual handoffs and release delays through repeatable build, test, deployment, and approval workflows."],
  [ShieldCheck, "Stronger operational control", "Introduce security checks, access controls, traceability, and consistent engineering standards across delivery pipelines."],
  [Layers3, "Scalable cloud foundations", "Create reliable environments and reusable infrastructure patterns that support application and business growth."],
  [Workflow, "Improved reliability", "Strengthen monitoring, incident readiness, recovery practices, and platform visibility to reduce operational risk."],
] as const;

const capabilities = [
  [Layers3, "Cloud Foundation & Architecture", "Design secure, scalable cloud environments, landing zones, account structures, networking, identity controls, and governance standards."],
  [Workflow, "CI/CD Automation", "Build reliable pipelines for source control, testing, quality validation, approvals, deployment, and release traceability."],
  [Code2, "Infrastructure as Code", "Provision and manage repeatable environments using version-controlled infrastructure definitions and automated validation."],
  [Users, "Container & Platform Enablement", "Support containerized workloads, orchestration, environment consistency, platform standards, and developer self-service."],
  [ShieldCheck, "DevSecOps Integration", "Embed security scanning, dependency checks, policy validation, secrets handling, and compliance controls into delivery workflows."],
  [Gauge, "Observability & Reliability", "Improve logs, metrics, alerts, dashboards, service health, incident response, resilience, and performance visibility."],
] as const;

const approach = [
  ["01", "Assess the current environment", "Review cloud architecture, deployment processes, tooling, security controls, operational pain points, and delivery constraints."],
  ["02", "Define the target state", "Prioritize business outcomes, platform standards, automation opportunities, governance requirements, and a practical roadmap."],
  ["03", "Build the foundation", "Establish environments, reusable infrastructure patterns, access controls, pipelines, and engineering conventions."],
  ["04", "Automate delivery", "Implement repeatable build, test, release, deployment, and configuration workflows with measurable controls."],
  ["05", "Improve reliability", "Add monitoring, alerts, recovery procedures, incident readiness, capacity visibility, and performance improvements."],
  ["06", "Operate and optimize", "Track outcomes, refine automation, control cloud usage, strengthen security, and evolve the platform with business needs."],
] as const;

const engagementModels = [
  ["Cloud & DevOps Assessment", "A focused review of architecture, delivery workflows, tools, risks, maturity, and priority improvement opportunities."],
  ["Implementation Project", "A defined engagement to deliver cloud foundations, automation pipelines, infrastructure code, security controls, or observability capabilities."],
  ["Embedded DevOps Specialists", "Experienced professionals integrated with your engineering teams to accelerate execution and transfer knowledge."],
  ["Managed Platform Support", "Ongoing platform operations, reliability improvements, release support, monitoring, optimization, and governance assistance."],
] as const;

const principles = [
  "Business outcomes before tool selection",
  "Automation with clear governance and ownership",
  "Security integrated into engineering workflows",
  "Reusable standards instead of one-off solutions",
  "Measurable delivery, reliability, and cost indicators",
  "Documentation and knowledge transfer for long-term ownership",
] as const;

const faqs = [
  ["Do we need to replace our existing tools?", "Not necessarily. We begin by assessing your current environment and retain useful tools where they support the target operating model. Recommendations are based on business needs, integration, maintainability, and risk rather than change for its own sake."],
  ["Can Vikvar support an existing cloud environment?", "Yes. We can assess and improve existing cloud environments, delivery pipelines, infrastructure code, monitoring, security practices, and operating processes without requiring a complete rebuild."],
  ["What cloud platforms do you support?", "Our approach is designed around widely adopted public-cloud and cloud-native practices. The exact platform and toolset are aligned to your existing estate, business requirements, team capability, and governance model."],
  ["How do you integrate security into DevOps?", "Security controls are introduced throughout the delivery lifecycle, including access management, code and dependency checks, infrastructure validation, secrets handling, approval controls, logging, and traceability."],
  ["Can you provide DevOps engineers as part of a team?", "Yes. Vikvar can provide individual DevOps professionals, a blended engineering team, or a managed delivery engagement depending on the required scope and ownership model."],
] as const;

export default function CloudDevOpsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(21,101,255,0.46),transparent_38%)]" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Cloud &amp; DevOps</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Build reliable cloud platforms and deliver software with greater speed and control.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Vikvar helps technology teams modernize cloud foundations, automate delivery, strengthen security, and improve platform reliability through practical Cloud and DevOps engineering.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Discuss Your Platform <ArrowRight size={18} />
                </Link>
                <Link href="#capabilities" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 px-7 font-bold text-white transition hover:bg-white/10">
                  Explore Capabilities
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/8 p-7 backdrop-blur sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">Engineering with operational discipline</p>
              <div className="mt-7 space-y-5">
                {[
                  "Secure and scalable cloud foundations",
                  "Automated build, test, and deployment workflows",
                  "Infrastructure managed through version-controlled code",
                  "Monitoring, reliability, and continuous improvement practices",
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
            title="Cloud and DevOps improvements that support delivery, reliability, and growth."
            description="The goal is not to add more tools. It is to create a dependable engineering system that helps teams release safely, operate confidently, and scale responsibly."
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
            eyebrow="Cloud & DevOps capabilities"
            title="Practical engineering across cloud, automation, security, and operations."
            description="Vikvar can support a focused improvement initiative or work across the complete platform and delivery lifecycle."
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
            eyebrow="Delivery approach"
            title="Move from isolated fixes to a sustainable platform operating model."
            description="We work in controlled stages so architecture, automation, security, reliability, and team ownership improve together."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {approach.map(([number, title, text]) => (
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
            eyebrow="Engagement models"
            title="Choose focused advisory, implementation support, embedded expertise, or ongoing operations."
            description="The engagement can be shaped around your delivery priorities, internal capability, timeline, and desired level of ownership."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {engagementModels.map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-white/12 bg-white/6 p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400 text-sm font-extrabold text-[#071a3d]">0{index + 1}</span>
                <h2 className="mt-6 text-2xl font-bold">{title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Engineering principles"
              title="Modern practices without unnecessary complexity."
              description="Our recommendations are designed to improve business and engineering outcomes while remaining maintainable by the teams who will own the platform."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 p-5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-700">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <p className="text-sm font-semibold leading-6 text-[#081a3a]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Frequently asked questions" title="Answers about Vikvar Cloud and DevOps services." align="center" />
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
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">Strengthen your delivery platform</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                  Create a practical roadmap for cloud modernization, automation, and reliability.
                </h2>
              </div>
              <Link href="/contact" className="inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-7 font-bold text-[#0a1b3d] transition hover:-translate-y-0.5">
                Request a Consultation
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
