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
  title: "Industries We Serve | Vikvar Technologies",
  description:
    "Vikvar Technologies supports organizations across banking, healthcare, retail, manufacturing, technology, logistics, education, and professional services with IT talent and technology delivery solutions.",
};

const industries = [
  [ShieldCheck, "Banking & Financial Services", "Build secure, compliant, and scalable teams for digital banking, payments, risk, data, cybersecurity, and enterprise transformation programs."],
  [Users, "Healthcare & Life Sciences", "Support healthcare platforms, data initiatives, application modernization, quality engineering, security, and specialist technology hiring."],
  [Gauge, "Retail & E-commerce", "Scale digital commerce, customer experience, data, mobile, cloud, and platform teams for fast-moving retail environments."],
  [Layers3, "Manufacturing", "Enable enterprise applications, automation, analytics, supply-chain systems, cloud adoption, and technology workforce expansion."],
  [Code2, "Technology & SaaS", "Accelerate product development, engineering capacity, quality, platform operations, customer delivery, and specialist recruitment."],
  [Workflow, "Logistics & Transportation", "Modernize operational platforms, integrations, data visibility, customer applications, and technology delivery teams."],
  [Users, "Education & Learning", "Support learning platforms, student systems, digital services, analytics, cloud delivery, and flexible technology staffing."],
  [Layers3, "Professional Services", "Add specialist capability for client programs, managed delivery, consulting initiatives, internal platforms, and business growth."],
] as const;

const challenges = [
  ["Specialist talent shortages", "Critical roles often require a combination of technical depth, industry understanding, communication skills, and delivery experience."],
  ["Rapidly changing priorities", "Organizations must scale teams, launch initiatives, and adapt delivery capacity without creating long-term structural overhead."],
  ["Complex technology estates", "Modern programs frequently span legacy systems, cloud platforms, applications, data, security, and third-party integrations."],
  ["Quality and governance expectations", "Industry environments require consistent screening, documentation, security awareness, delivery controls, and measurable accountability."],
] as const;

const capabilities = [
  ["IT Recruiting", "Source and evaluate professionals across software engineering, cloud, data, cybersecurity, enterprise applications, quality engineering, and digital roles."],
  ["Staff Augmentation", "Add individual specialists or complete delivery teams that integrate with your organization, processes, tools, and governance model."],
  ["Technology Consulting", "Assess priorities, define target-state approaches, and guide transformation, architecture, modernization, platform, and operating-model decisions."],
  ["Application Development", "Design, build, modernize, integrate, test, and support business applications aligned to real operational requirements."],
  ["Offshore Development", "Establish scalable offshore capability with structured hiring, onboarding, delivery governance, performance visibility, and knowledge continuity."],
  ["Cloud & DevOps", "Improve cloud foundations, deployment automation, infrastructure management, security integration, observability, and platform reliability."],
] as const;

const approach = [
  ["01", "Understand the business context", "Clarify the industry environment, business objectives, stakeholders, constraints, critical systems, and required outcomes."],
  ["02", "Define the capability requirement", "Translate business priorities into clear role profiles, delivery scope, technical expectations, ownership, and success measures."],
  ["03", "Select the right engagement model", "Choose recruiting, augmentation, consulting, project delivery, offshore development, or a blended approach."],
  ["04", "Mobilize qualified specialists", "Source, evaluate, onboard, and align professionals with your tools, standards, communication model, and delivery priorities."],
  ["05", "Govern delivery and performance", "Maintain structured communication, progress visibility, issue escalation, quality reviews, and measurable accountability."],
  ["06", "Scale and improve", "Adjust capability as priorities evolve, strengthen processes, transfer knowledge, and identify opportunities for greater delivery efficiency."],
] as const;

const differentiators = [
  "Recruitment and technology delivery under one partner",
  "Flexible engagement models aligned to business priorities",
  "Structured technical and communication evaluation",
  "Capability across applications, cloud, data, security, QA, and enterprise technology",
  "Global delivery perspective across the USA, India, UAE, Singapore, and Malaysia",
  "Clear governance, communication, and continuous improvement",
] as const;

const faqs = [
  ["Do you only support the industries shown on this page?", "No. These are representative sectors where our recruiting and technology capabilities are commonly relevant. We can assess requirements in other industries and shape an engagement around the required skills, compliance expectations, and delivery environment."],
  ["Can Vikvar provide professionals with industry-specific experience?", "Yes. Industry experience can be included as part of the role and screening criteria. We evaluate the importance of domain knowledge alongside technical capability, communication, availability, and delivery experience."],
  ["Can you support both hiring and project delivery?", "Yes. Vikvar can support permanent and contract hiring, staff augmentation, consulting, application delivery, offshore development, and Cloud and DevOps initiatives. These services can also be combined when a program needs multiple capabilities."],
  ["How do you maintain quality across different industry engagements?", "We use structured requirement analysis, sourcing, technical evaluation, communication screening, quality validation, onboarding alignment, and delivery governance. The exact controls are adjusted to the engagement model and business environment."],
  ["Can engagement size change over time?", "Yes. Teams and services can be scaled according to approved demand, delivery performance, budget, project stages, and changing business priorities."],
] as const;

export default function IndustriesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(21,101,255,0.45),transparent_38%)]" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Industries</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Technology talent and delivery solutions shaped around your industry.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Vikvar helps organizations build capable technology teams, strengthen delivery, and execute business-critical initiatives across complex and fast-changing industry environments.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Discuss Your Requirements <ArrowRight size={18} />
                </Link>
                <Link href="#industry-sectors" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 px-7 font-bold text-white transition hover:bg-white/10">
                  Explore Industries
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/8 p-7 backdrop-blur sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">Industry-focused execution</p>
              <div className="mt-7 space-y-5">
                {[
                  "Specialist IT talent aligned to your environment",
                  "Flexible team and delivery models",
                  "Structured evaluation and quality controls",
                  "Technology capability that scales with business priorities",
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

      <section id="industry-sectors" className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Industry sectors"
            title="Supporting technology priorities across diverse business environments."
            description="Our delivery approach combines technology capability, structured talent evaluation, flexible engagement models, and clear governance."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {industries.map(([Icon, title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700"><Icon size={23} /></span>
                <h2 className="mt-5 text-xl font-bold text-[#081a3a]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Common challenges"
            title="Industry transformation requires more than technical skills alone."
            description="Organizations need people and delivery partners who can work within real business constraints, collaborate effectively, and maintain quality as priorities change."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {challenges.map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="text-sm font-extrabold tracking-[0.18em] text-blue-600">0{index + 1}</span>
                <h2 className="mt-4 text-2xl font-bold text-[#081a3a]">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Integrated capabilities"
            title="One partner for talent acquisition, team scaling, consulting, and technology delivery."
            description="Select a focused service or combine capabilities around a broader transformation, delivery, or workforce objective."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#081a3a] text-sm font-extrabold text-white">0{index + 1}</span>
                <h2 className="mt-6 text-2xl font-bold text-[#081a3a]">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#071a3d] py-20 text-white sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="A structured path from business requirement to measurable capability."
            description="We align people, delivery scope, operating expectations, and governance before execution begins."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {approach.map(([number, title, text]) => (
              <article key={number} className="rounded-2xl border border-white/12 bg-white/6 p-7">
                <span className="text-sm font-extrabold tracking-[0.18em] text-cyan-300">{number}</span>
                <h2 className="mt-4 text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Why Vikvar"
              title="Industry support built around flexibility, quality, and accountability."
              description="Our model is designed to help clients access the right skills, maintain delivery visibility, and adapt capability as business needs evolve."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => (
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
          <SectionHeading eyebrow="Frequently asked questions" title="Answers about Vikvar industry solutions." align="center" />
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
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">Build the right capability</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                  Tell us about your industry, technology priorities, and talent requirements.
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
