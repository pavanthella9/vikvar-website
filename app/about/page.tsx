import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe2,
  Handshake,
  Layers3,
  SearchCheck,
  ShieldCheck,
  Target,
  UsersRound,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Vikvar Technologies",
  description:
    "Learn about Vikvar Technologies, an IT recruiting, staff augmentation, technology consulting, application development, offshore delivery, cloud, and DevOps services company.",
};

const principles = [
  {
    icon: Target,
    title: "Business-first thinking",
    description:
      "We connect every hiring or technology requirement to the business outcome, delivery environment, timeline, and practical constraints.",
  },
  {
    icon: SearchCheck,
    title: "Quality over volume",
    description:
      "We focus on relevant professionals, well-defined delivery capability, and structured evaluation rather than unnecessary profile volume.",
  },
  {
    icon: Handshake,
    title: "Clear partnership",
    description:
      "We value responsive communication, realistic commitments, transparent ownership, and long-term professional relationships.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible delivery",
    description:
      "We respect confidentiality, security, accuracy, compliance expectations, and professional standards throughout every engagement.",
  },
] as const;

const capabilities = [
  "IT Recruiting",
  "Staff Augmentation",
  "Contract Hiring",
  "Permanent Hiring",
  "Technology Consulting",
  "Application Development",
  "Offshore Development",
  "Cloud & DevOps",
] as const;

const technologyAreas = [
  "Java, .NET, Python and web engineering",
  "Cloud, DevOps and platform engineering",
  "Data engineering, analytics and AI",
  "Cybersecurity and infrastructure",
  "QA, automation and performance testing",
  "SAP and enterprise applications",
  "Mobile and integration technologies",
  "Architecture, project and delivery leadership",
] as const;

const process = [
  [
    "01",
    "Understand the requirement",
    "Clarify the business objective, role, skills, operating environment, location, timeline, engagement model, and decision process.",
  ],
  [
    "02",
    "Define the right capability",
    "Identify whether the requirement needs recruiting, staff augmentation, consulting, a dedicated team, or project delivery support.",
  ],
  [
    "03",
    "Evaluate relevance and readiness",
    "Assess technical or functional fit, communication, availability, experience, delivery risk, and stakeholder alignment.",
  ],
  [
    "04",
    "Coordinate execution",
    "Support interviews, onboarding, governance, communication, milestones, and continuous delivery improvement.",
  ],
] as const;

const regions = [
  ["United States", "Client engagement and technology talent support"],
  ["India", "Recruiting, engineering, consulting, and offshore delivery"],
  ["United Arab Emirates", "Regional business and technology services"],
  ["Singapore", "Technology talent and consulting opportunities"],
  ["Malaysia", "Regional delivery and workforce support"],
] as const;

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(21,101,255,0.48),transparent_38%)]" />
        <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full border border-white/10" />

        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                About Vikvar Technologies
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Connecting technology capability with real business requirements.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Vikvar Technologies helps organizations find qualified IT professionals, scale
                delivery teams, and execute technology initiatives through flexible recruiting,
                consulting, engineering, and offshore delivery models.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Start a Conversation <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services/it-recruiting"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 px-7 font-bold text-white transition hover:bg-white/10"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/8 p-7 backdrop-blur sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
                Our focus
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em]">
                Talent first. Technology enabled. Delivery focused.
              </h2>
              <div className="mt-7 space-y-4">
                {[
                  "Relevant IT professionals and delivery teams",
                  "Flexible engagement models",
                  "Structured evaluation and communication",
                  "Technology capability across modern and enterprise platforms",
                  "Responsive support from requirement through delivery",
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
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Who we are"
              title="A technology services partner built around people, capability, and execution."
              description="Our work begins with understanding what the client is trying to achieve. From there, we identify the right people, delivery model, technical capability, and level of ownership required."
            />

            <div className="rounded-[28px] bg-slate-50 p-7 sm:p-9">
              <p className="text-lg leading-8 text-slate-600">
                Vikvar combines IT recruiting, staff augmentation, consulting, application
                engineering, offshore delivery, cloud, and DevOps support. This allows clients to
                use one focused partner for both immediate talent needs and broader technology
                execution.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We support organizations that need to hire faster, expand project capacity, access
                specialized expertise, modernize applications, or establish scalable delivery
                teams.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our principles"
            title="The standards that guide how we work."
            description="Strong delivery depends on relevance, transparency, professional communication, and responsible ownership."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon size={23} />
                </span>
                <h2 className="mt-5 text-xl font-bold text-[#081a3a]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="What we do"
                title="Flexible services for talent, consulting, and technology delivery."
                description="Clients can engage Vikvar for a single hiring requirement, ongoing workforce support, specialist consulting, or complete engineering capacity."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-4"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-700">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-bold text-[#081a3a]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-[#071a3d] p-7 text-white sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-[#071a3d]">
                <Layers3 size={23} />
              </div>
              <p className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">
                Technology coverage
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em]">
                Capability across modern and enterprise environments.
              </h2>
              <div className="mt-7 space-y-3">
                {technologyAreas.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-500 text-white">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#071a3d] py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                How we work
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                A clear process from requirement to delivery.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Our process is designed to reduce ambiguity, improve relevance, and give every
                stakeholder a clear understanding of the next step.
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
          <SectionHeading
            eyebrow="Global presence"
            title="Supporting clients and professionals across key markets."
            description="Our operating model can combine regional client engagement with recruiting, consulting, remote, hybrid, and offshore delivery capability."
            align="center"
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {regions.map(([region, description]) => (
              <article
                key={region}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
              >
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700">
                  <Globe2 size={22} />
                </span>
                <h2 className="mt-5 font-bold text-[#081a3a]">{region}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
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
                  Work with Vikvar
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                  Build stronger teams and move technology initiatives forward.
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-blue-50">
                  Share your hiring requirement, delivery challenge, technology scope, location,
                  and preferred timeline with our team.
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
