import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Globe2,
  Handshake,
  Layers3,
  SearchCheck,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Vikvar Technologies | IT Recruiting, Staffing & Technology Services",
  description:
    "Vikvar Technologies helps organizations hire IT talent, scale delivery teams, and execute technology initiatives through recruiting, staff augmentation, consulting, application development, offshore delivery, cloud, and DevOps services.",
};

const services = [
  {
    icon: SearchCheck,
    number: "01",
    title: "IT Recruiting",
    description:
      "Find qualified technology professionals through focused sourcing, structured screening, and coordinated hiring support.",
    href: "/services/it-recruiting",
    emphasis: "Primary service",
  },
  {
    icon: UsersRound,
    number: "02",
    title: "Staff Augmentation",
    description:
      "Add individual specialists or complete delivery teams with flexible engagement models aligned to changing priorities.",
    href: "/services/staff-augmentation",
    emphasis: "Flexible capacity",
  },
  {
    icon: BriefcaseBusiness,
    number: "03",
    title: "Technology Consulting",
    description:
      "Strengthen strategy, architecture, modernization, delivery governance, and technology decision-making.",
    href: "/services/technology-consulting",
    emphasis: "Business alignment",
  },
  {
    icon: Code2,
    number: "04",
    title: "Application Development",
    description:
      "Design, build, modernize, integrate, and support business applications with scalable engineering capability.",
    href: "/services/application-development",
    emphasis: "Engineering delivery",
  },
  {
    icon: Globe2,
    number: "05",
    title: "Offshore Development",
    description:
      "Establish dedicated offshore teams that provide delivery capacity, continuity, governance, and long-term value.",
    href: "/services/offshore-development",
    emphasis: "Dedicated teams",
  },
  {
    icon: Layers3,
    number: "06",
    title: "Cloud & DevOps",
    description:
      "Improve cloud foundations, deployment automation, platform operations, observability, and engineering reliability.",
    href: "/services/cloud-devops",
    emphasis: "Supporting capability",
  },
] as const;

const advantages = [
  {
    icon: SearchCheck,
    title: "Requirement-led delivery",
    description:
      "We begin with the role, business outcome, delivery environment, and practical constraints—not a generic profile search.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-focused evaluation",
    description:
      "Candidates and delivery approaches are reviewed for capability, communication, availability, and real role alignment.",
  },
  {
    icon: Workflow,
    title: "Flexible engagement models",
    description:
      "Use contract, permanent, contract-to-hire, staff augmentation, dedicated team, or project delivery models.",
  },
  {
    icon: Handshake,
    title: "Responsive partnership",
    description:
      "Clear communication, coordinated follow-up, and transparent ownership support faster and more reliable decisions.",
  },
] as const;

const process = [
  [
    "01",
    "Understand",
    "Clarify the role, technical scope, business context, location, timeline, communication expectations, and delivery priorities.",
  ],
  [
    "02",
    "Identify",
    "Source relevant professionals or define the right consulting and delivery capability for the requirement.",
  ],
  [
    "03",
    "Evaluate",
    "Review technical or functional fit, experience, communication, availability, risk, and engagement alignment.",
  ],
  [
    "04",
    "Deliver",
    "Coordinate interviews, selection, onboarding, governance, and ongoing delivery support.",
  ],
] as const;

const engagementModels = [
  "Contract Staffing",
  "Contract-to-Hire",
  "Permanent Hiring",
  "Staff Augmentation",
  "Dedicated Teams",
  "Project Delivery",
] as const;

const industries = [
  "Banking & Financial Services",
  "Healthcare & Life Sciences",
  "Retail & E-commerce",
  "Manufacturing",
  "Technology & SaaS",
  "Logistics & Transportation",
] as const;

const capabilities = [
  "Java, .NET, Python & modern web",
  "Cloud, DevOps & platform engineering",
  "QA, automation & performance testing",
  "Cybersecurity & infrastructure",
  "SAP & enterprise applications",
  "Data engineering, analytics & AI",
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_83%_18%,rgba(21,101,255,0.48),transparent_36%)]" />
        <div className="absolute -right-32 top-16 h-[520px] w-[520px] rounded-full border border-white/10" />
        <div className="absolute right-0 top-40 h-[320px] w-[320px] rounded-full border border-white/10" />

        <Container className="relative grid min-h-[760px] items-center gap-14 py-24 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              IT Recruiting · Staff Augmentation · Technology Services
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.03] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Build the technology team your business needs.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Vikvar Technologies helps organizations hire qualified IT professionals, scale
              delivery capacity, and execute technology initiatives through flexible, business-led
              engagement models.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Hire IT Talent <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 px-7 font-bold text-white transition hover:bg-white/10"
              >
                Request Consultation
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">
              {[
                ["Quality-first", "Candidate evaluation"],
                ["Flexible", "Engagement models"],
                ["Responsive", "Delivery support"],
              ].map(([title, label]) => (
                <div key={title}>
                  <p className="text-lg font-bold">{title}</p>
                  <p className="mt-1 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="ml-auto max-w-[480px] rounded-[30px] border border-white/15 bg-white/8 p-7 shadow-2xl backdrop-blur">
              <div className="rounded-[24px] bg-white p-8 text-[#081a3a]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Talent delivery
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    Vikvar
                  </span>
                </div>
                <h2 className="mt-7 text-3xl font-bold tracking-[-0.035em]">
                  Relevant professionals. A focused hiring process.
                </h2>
                <div className="mt-7 space-y-4">
                  {[
                    "Requirement-driven sourcing",
                    "Technical and communication screening",
                    "Focused, interview-ready profiles",
                    "Coordinated onboarding support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-700">
                        <Check size={16} strokeWidth={3} />
                      </span>
                      <span className="text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-8 -left-10 rounded-2xl border border-white/15 bg-[#10284e] p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500">
                    <Handshake size={23} />
                  </span>
                  <div>
                    <p className="text-sm font-bold">Partnership-led</p>
                    <p className="mt-1 text-xs text-slate-400">Built for long-term value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Core services"
            title="Talent and technology services designed to move critical work forward."
            description="Our strongest focus is IT recruiting and team augmentation. Consulting, engineering, offshore delivery, cloud, and DevOps capabilities provide complete support when clients need broader execution capacity."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, number, title, description, href, emphasis }) => (
              <Link
                key={title}
                href={href}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={23} />
                  </span>
                  <span className="text-sm font-bold tracking-[0.14em] text-slate-400">
                    {number}
                  </span>
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                  {emphasis}
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-[#081a3a]">
                  {title}
                </h2>
                <p className="mt-4 min-h-24 leading-7 text-slate-600">{description}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                  Explore service
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <SectionHeading
              eyebrow="Why Vikvar"
              title="A dependable partner for technology talent and delivery."
              description="We combine recruitment discipline, technology understanding, and responsive account management to reduce noise and improve execution."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {advantages.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#081a3a] text-white">
                    <Icon size={21} />
                  </span>
                  <h2 className="mt-5 text-xl font-bold text-[#081a3a]">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Engagement models"
            title="Scale from one critical hire to a complete delivery team."
            description="Select a model based on urgency, duration, ownership, budget, location, and the level of delivery responsibility your organization wants to retain."
            align="center"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engagementModels.map((model, index) => (
              <div
                key={model}
                className="flex min-h-28 items-center gap-4 rounded-2xl border border-slate-200 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-50 text-sm font-extrabold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-bold text-[#081a3a]">{model}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#081a3a] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Discuss Your Requirement <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#071a3d] py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Recruitment process
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                A disciplined process built around relevance and quality.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Every engagement begins with understanding the real requirement and ends with
                coordinated delivery—not simply forwarding profiles.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {process.map(([number, title, description]) => (
                <article key={number} className="rounded-2xl border border-white/12 bg-white/6 p-7">
                  <span className="text-sm font-extrabold tracking-[0.18em] text-cyan-300">
                    {number}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Industries"
                title="Technology talent for complex business environments."
                description="Our approach adapts to industry-specific operating models, security expectations, compliance needs, customer experiences, and delivery pressures."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {industries.map((industry) => (
                  <Link
                    key={industry}
                    href="/industries"
                    className="flex items-center justify-between rounded-xl border border-slate-200 px-5 py-4 font-semibold text-[#081a3a] transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    {industry}
                    <ArrowRight size={16} className="text-blue-700" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-slate-50 p-7 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Technology expertise
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#081a3a]">
                Capability across modern and enterprise technology.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Vikvar supports recruiting and delivery requirements across software engineering,
                infrastructure, enterprise platforms, security, quality, and data.
              </p>
              <div className="mt-7 space-y-3">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-700">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-semibold text-[#081a3a]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] bg-[#1565ff] px-7 py-14 text-white sm:px-10 lg:px-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">
                  Start a conversation
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                  Looking for IT talent or a technology delivery partner?
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-blue-50">
                  Share your requirement, timeline, preferred engagement model, and the outcome your
                  organization needs to achieve.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-7 font-bold text-[#0a1b3d] transition hover:-translate-y-0.5"
              >
                Contact Vikvar
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
