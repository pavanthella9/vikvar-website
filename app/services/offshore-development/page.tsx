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
  title: "Offshore Development Center Services | Vikvar Technologies",
  description:
    "Build and scale a dedicated offshore development center with Vikvar Technologies for reliable technology delivery, governance, and long-term team continuity.",
};

const outcomes = [
  [Users, "Dedicated delivery capacity", "Build a stable team aligned to your product roadmap, engineering standards, and business priorities."],
  [Gauge, "Faster team scaling", "Expand delivery capacity without waiting for lengthy internal hiring cycles or infrastructure setup."],
  [ShieldCheck, "Controlled governance", "Maintain visibility through defined ownership, reporting, quality controls, and operational discipline."],
  [Layers3, "Long-term continuity", "Retain knowledge, improve collaboration, and create a dependable extension of your internal technology organization."],
] as const;

const capabilities = [
  [Users, "Dedicated Engineering Teams", "Cross-functional teams for product development, platform engineering, quality, data, and support."],
  [Code2, "Application Delivery", "End-to-end design, development, integration, modernization, testing, and release support."],
  [Workflow, "Managed Delivery Operations", "Structured planning, delivery governance, reporting, risk management, and continuous improvement."],
  [ShieldCheck, "Quality & Security Practices", "Engineering standards, code review, testing, access controls, documentation, and release readiness."],
  [Layers3, "Flexible Team Composition", "Scale roles and skills as roadmap priorities, technology needs, and delivery stages change."],
  [Gauge, "Performance Management", "Track delivery health through measurable goals, service levels, productivity indicators, and stakeholder reviews."],
] as const;

const setupSteps = [
  ["01", "Define the ODC charter", "Confirm business goals, scope, delivery responsibilities, target capabilities, governance, and success measures."],
  ["02", "Design the team model", "Define roles, seniority, leadership structure, working hours, communication rhythm, and scaling plan."],
  ["03", "Recruit and validate talent", "Source, assess, and onboard professionals against technical, communication, and delivery expectations."],
  ["04", "Establish delivery operations", "Set up tools, access, engineering practices, reporting, security controls, and collaboration routines."],
  ["05", "Launch and stabilize", "Start delivery in controlled phases, monitor performance, resolve gaps, and strengthen team integration."],
  ["06", "Scale and optimize", "Expand capabilities, improve productivity, retain critical knowledge, and evolve the center with your roadmap."],
] as const;

const engagementModels = [
  ["Client-Managed ODC", "Vikvar builds and supports the team while your leaders retain direct delivery and product management responsibility."],
  ["Vikvar-Managed ODC", "Vikvar provides team leadership, delivery governance, operational reporting, and ongoing performance management."],
  ["Hybrid ODC", "Shared ownership combining your product leadership with Vikvar delivery management and local operational support."],
  ["Build-Operate-Transfer", "Vikvar establishes and operates the center before transitioning the agreed team and operations to your organization."],
] as const;

const governanceItems = [
  "Named delivery and account leadership",
  "Defined roles, responsibilities, and escalation paths",
  "Weekly operational and delivery reviews",
  "Monthly performance and capacity reviews",
  "Quality, security, and documentation standards",
  "Workforce continuity and knowledge-retention planning",
] as const;

const faqs = [
  ["What is an Offshore Development Center?", "An Offshore Development Center is a dedicated technology team located in another country that operates as an extension of your internal organization. It provides long-term delivery capacity, specialized skills, and a structured operating model."],
  ["How is an ODC different from staff augmentation?", "Staff augmentation usually adds individual professionals to an existing team. An ODC is a broader, long-term operating model with dedicated teams, governance, leadership, processes, performance management, and continuity planning."],
  ["Can we start with a small team?", "Yes. Many ODC engagements begin with a focused team and expand after the delivery model, communication rhythm, and performance expectations are validated."],
  ["Who manages the offshore team?", "The management model is flexible. Your organization can manage the team directly, Vikvar can provide delivery leadership, or responsibilities can be shared through a hybrid model."],
  ["How do you protect quality and knowledge continuity?", "We establish engineering standards, documentation practices, code review, testing, role backup, structured onboarding, performance reviews, and knowledge-retention plans as part of the operating model."],
] as const;

export default function OffshoreDevelopmentPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(21,101,255,0.46),transparent_38%)]" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Offshore Development Center</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Build a dedicated offshore team that works like your own.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Vikvar helps organizations establish, operate, and scale high-performing offshore development centers with the right talent, governance, engineering practices, and delivery discipline.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Plan Your ODC <ArrowRight size={18} />
                </Link>
                <Link href="#models" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 px-7 font-bold text-white transition hover:bg-white/10">
                  Explore Engagement Models
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/8 p-7 backdrop-blur sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">A complete operating model</p>
              <div className="mt-7 space-y-5">
                {[
                  "Dedicated teams aligned to your roadmap",
                  "Flexible client-managed, managed, or hybrid models",
                  "Recruitment, onboarding, governance, and performance management",
                  "Scalable delivery capacity with long-term knowledge continuity",
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
            title="A scalable extension of your technology organization."
            description="An effective ODC combines talent, operating structure, and delivery governance so your organization can increase capacity without losing control or quality."
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

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="ODC capabilities"
            title="Everything required to build, operate, and scale the center."
            description="Vikvar brings together talent acquisition, engineering delivery, governance, and workforce continuity in one coordinated model."
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
            eyebrow="Setup approach"
            title="A structured path from business need to stable delivery operations."
            description="We establish the center in controlled stages so roles, expectations, systems, and governance are clear before scaling."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {setupSteps.map(([number, title, text]) => (
              <article key={number} className="rounded-2xl border border-slate-200 p-6">
                <span className="text-sm font-extrabold tracking-[0.18em] text-blue-600">{number}</span>
                <h2 className="mt-4 text-xl font-bold text-[#081a3a]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="models" className="bg-[#071a3d] py-20 text-white sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Engagement models"
            title="Choose the level of control and operational support you need."
            description="The ODC structure can be tailored around your internal leadership, governance maturity, delivery goals, and long-term operating strategy."
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
              eyebrow="Governance and control"
              title="Clear ownership, transparent reporting, and measurable performance."
              description="Offshore delivery works best when communication, accountability, quality, and escalation are designed into the model from day one."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {governanceItems.map((item) => (
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
          <SectionHeading eyebrow="Frequently asked questions" title="Answers about establishing an offshore development center." align="center" />
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
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">Build your offshore capability</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                  Start with the right team, governance model, and scaling plan.
                </h2>
              </div>
              <Link href="/contact" className="inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-7 font-bold text-[#0a1b3d] transition hover:-translate-y-0.5">
                Discuss Your ODC
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
