import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  Clock3,
  Code2,
  Database,
  Layers3,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Technology Consulting Services | Vikvar Technologies",
  description:
    "Turn business priorities into practical technology outcomes with strategy, architecture, modernization, and delivery consulting from Vikvar Technologies.",
};

const outcomes = [
  [BarChart3, "Clearer investment decisions", "Prioritize initiatives using business value, risk, urgency, and delivery feasibility."],
  [Layers3, "Stronger technology foundations", "Create scalable architecture and operating models that support long-term growth."],
  [Clock3, "Faster execution", "Convert strategy into sequenced roadmaps, accountable workstreams, and measurable milestones."],
  [ShieldCheck, "Reduced transformation risk", "Identify dependencies, security concerns, delivery constraints, and governance gaps early."],
] as const;

const capabilities = [
  ["Technology Strategy", "Align technology priorities with business objectives, customer needs, and operational realities."],
  ["Architecture Advisory", "Define practical application, integration, data, platform, and security architecture."],
  ["Application Modernization", "Assess legacy systems and create phased modernization paths that reduce disruption."],
  ["Cloud & Platform Advisory", "Evaluate workload readiness, platform choices, operating models, and migration priorities."],
  ["Data & Analytics Strategy", "Build a roadmap for trusted data, reporting, analytics, and AI-enabled decision support."],
  ["Delivery Transformation", "Improve governance, engineering practices, quality, automation, and delivery predictability."],
] as const;

const approach = [
  ["01", "Discover", "Understand business goals, current platforms, delivery constraints, stakeholders, and success measures."],
  ["02", "Assess", "Evaluate capabilities, architecture, risks, costs, dependencies, and gaps across the current environment."],
  ["03", "Design", "Create target-state recommendations, operating principles, architecture direction, and decision criteria."],
  ["04", "Prioritize", "Sequence initiatives into a realistic roadmap based on value, urgency, complexity, and organizational readiness."],
  ["05", "Mobilize", "Define delivery workstreams, governance, ownership, skills, milestones, and measurable outcomes."],
  ["06", "Guide", "Provide ongoing advisory support as teams execute, adapt, and scale the transformation."],
] as const;

const expertise = [
  [Code2, "Applications", "Modern applications, APIs, integration, web, mobile, and enterprise systems"],
  [Database, "Data", "Data platforms, analytics, governance, reporting, and AI readiness"],
  [Network, "Platforms", "Cloud, infrastructure, DevOps, automation, containers, and operations"],
  [ShieldCheck, "Security", "Architecture risk, secure delivery, governance, resilience, and compliance alignment"],
  [Users, "Operating Model", "Teams, roles, sourcing, governance, delivery practices, and capability building"],
  [BadgeCheck, "Quality", "Testing strategy, engineering quality, release controls, and continuous improvement"],
] as const;

const engagementModels = [
  ["Advisory Assessment", "A focused review of a specific technology, platform, architecture, or delivery challenge."],
  ["Strategy & Roadmap", "A structured engagement that defines priorities, target state, sequencing, and investment direction."],
  ["Transformation Advisory", "Ongoing senior guidance across a complex modernization or technology change program."],
  ["Embedded Consulting", "Specialists work alongside your teams to guide decisions and strengthen execution capability."],
] as const;

const faqs = [
  ["Can Vikvar work with our internal technology leaders?", "Yes. Our consulting model is collaborative. We work with business leaders, technology executives, architects, engineering teams, and delivery partners to strengthen decisions and execution."],
  ["Do you provide recommendations only, or can you support implementation?", "We can support both. Engagements may conclude with an actionable roadmap or continue into implementation support, specialist staffing, application delivery, or an offshore delivery model."],
  ["Can you assess an existing application or technology landscape?", "Yes. We can review architecture, technology debt, operational risk, delivery practices, integration, data, security, and modernization options."],
  ["How do you keep recommendations practical?", "We evaluate recommendations against budget, capability, dependencies, risk, timeline, and organizational readiness so the proposed path can be executed rather than remaining theoretical."],
] as const;

export default function TechnologyConsultingPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(21,101,255,0.42),transparent_37%)]" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Technology Consulting</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Make technology decisions with greater clarity and confidence.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Vikvar helps organizations connect business strategy with practical technology choices, executable roadmaps, and measurable outcomes.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Request Consultation <ArrowRight size={18} />
                </Link>
                <Link href="#capabilities" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 px-7 font-bold text-white transition hover:bg-white/10">
                  Explore Capabilities
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/8 p-7 backdrop-blur sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">From direction to execution</p>
              <div className="mt-7 space-y-5">
                {[
                  "Business-aligned technology strategy",
                  "Practical architecture and modernization guidance",
                  "Prioritized roadmaps with clear ownership",
                  "Advisory support through implementation",
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
            title="Consulting that turns complexity into an actionable path forward."
            description="Our role is to help leaders understand the choices in front of them, make informed trade-offs, and mobilize teams around a realistic plan."
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
            eyebrow="Consulting capabilities"
            title="Focused expertise across strategy, architecture, modernization, and delivery."
            description="Engagements are shaped around the decisions you need to make and the outcomes your organization needs to achieve."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#081a3a] text-sm font-bold text-white">0{index + 1}</span>
                  <Layers3 className="text-blue-600" />
                </div>
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
            eyebrow="Our approach"
            title="A structured consulting process built around decisions and delivery."
            description="We combine discovery, assessment, design, prioritization, and ongoing guidance so recommendations can move into action."
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
            eyebrow="Technology perspective"
            title="Advice informed by the full technology lifecycle."
            description="Our recommendations consider applications, data, platforms, security, people, governance, and quality as connected parts of the same operating environment."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map(([Icon, title, text]) => (
              <article key={title} className="rounded-2xl border border-white/12 bg-white/6 p-6">
                <Icon className="text-cyan-300" size={25} />
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
            eyebrow="Engagement models"
            title="Choose the level of support your decision or program requires."
            description="Vikvar can provide a focused assessment, a complete roadmap, ongoing advisory support, or embedded consulting expertise."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {engagementModels.map(([title, text], index) => (
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
          <SectionHeading eyebrow="Frequently asked questions" title="Answers for business and technology leaders." align="center" />
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
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">Plan your next move</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                  Bring us the challenge. We&apos;ll help you define a practical path forward.
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
