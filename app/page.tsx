import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  CloudCog,
  Code2,
  Globe2,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "IT Recruiting, Staff Augmentation & Technology Consulting",
  description:
    "Vikvar Technologies helps organizations build technology teams, modernize platforms, and deliver business-critical solutions through recruiting, staff augmentation, consulting, engineering, offshore development, cloud, and DevOps services.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vikvar Technologies | Technology Talent & Delivery",
    description:
      "Build stronger technology teams and solutions with IT recruiting, staff augmentation, consulting, engineering, offshore delivery, cloud, and DevOps services.",
    url: "/",
  },
};

const services = [
  {
    title: "IT Recruiting",
    description:
      "Identify and engage qualified technology professionals across modern application, cloud, data, enterprise, and infrastructure skill areas.",
    href: "/services/it-recruiting",
    icon: BriefcaseBusiness,
  },
  {
    title: "Staff Augmentation",
    description:
      "Add capable professionals to existing teams with flexible engagement models aligned to delivery needs and timelines.",
    href: "/services/staff-augmentation",
    icon: Users,
  },
  {
    title: "Technology Consulting",
    description:
      "Turn technology priorities into practical roadmaps, implementation plans, and measurable transformation outcomes.",
    href: "/services/technology-consulting",
    icon: Network,
  },
  {
    title: "Application Development",
    description:
      "Design, build, modernize, and support reliable applications for evolving business and customer requirements.",
    href: "/services/application-development",
    icon: Code2,
  },
  {
    title: "Offshore Development",
    description:
      "Establish scalable distributed engineering and delivery teams with clear governance and efficient collaboration.",
    href: "/services/offshore-development",
    icon: Globe2,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Improve cloud foundations, infrastructure automation, CI/CD, reliability, security, and operational efficiency.",
    href: "/services/cloud-devops",
    icon: CloudCog,
  },
] as const;

const outcomes = [
  "Access specialized technology talent",
  "Scale delivery capacity with control",
  "Improve engineering speed and quality",
  "Modernize cloud and application platforms",
] as const;

const process = [
  {
    step: "01",
    title: "Understand",
    description:
      "We assess the business objective, role or project requirements, technology environment, timeline, and expected outcomes.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We define the engagement approach, delivery model, team structure, governance, and execution plan.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "Our teams support recruitment, onboarding, implementation, engineering, and operational execution.",
  },
  {
    step: "04",
    title: "Improve",
    description:
      "We review progress, resolve delivery risks, improve collaboration, and support evolving priorities.",
  },
] as const;

const technologies = [
  "Java",
  ".NET",
  "Python",
  "AWS",
  "Azure",
  "Cloud",
  "DevOps",
  "Kubernetes",
  "SAP",
  "QA",
  "Cybersecurity",
  "Mobile",
] as const;

const regions = [
  "United States",
  "India",
  "United Arab Emirates",
  "Singapore",
  "Malaysia",
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.30),transparent_35%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.04))]" />

        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                Technology talent. Consulting. Delivery.
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Build the technology teams and solutions your business needs.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Vikvar Technologies supports organizations through IT
                recruiting, staff augmentation, consulting, application
                engineering, offshore delivery, cloud, and DevOps services.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Discuss your requirement
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/services/it-recruiting"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Explore our services
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-blue-300" aria-hidden="true" />
                  Flexible engagement models
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-blue-300" aria-hidden="true" />
                  Delivery-focused approach
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe2 className="h-5 w-5 text-blue-300" aria-hidden="true" />
                  Multi-region support
                </span>
              </div>
            </div>

            <div
              data-surface-card
              className="rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur sm:p-9"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                Business outcomes
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white">
                Practical support from talent acquisition to technology delivery
              </h2>

              <div className="mt-7 space-y-4">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-blue-300"
                      aria-hidden="true"
                    />
                    <p className="leading-7 text-slate-200">{outcome}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/15 pt-7">
                <p className="text-sm text-slate-300">Technology coverage</p>
                <p className="mt-3 leading-7 text-white">
                  Java · .NET · Python · Cloud · DevOps · SAP · QA ·
                  Cybersecurity · Mobile
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Capabilities aligned to your technology priorities"
            description="Engage Vikvar Technologies for talent acquisition, team expansion, strategic consulting, engineering, distributed delivery, and cloud transformation."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <div
                    data-icon-tile
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700"
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 text-xl font-bold text-slate-950">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700 transition group-hover:text-blue-900"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Why Vikvar
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                One partner across talent, consulting, engineering, and delivery
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Technology initiatives often require more than a single service.
                Vikvar brings together recruiting capability, flexible staffing,
                technical consulting, software engineering, cloud expertise, and
                offshore delivery support.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Requirements-led engagement and transparent communication",
                  "Coverage across modern and enterprise technology skills",
                  "Flexible support for projects, programs, and ongoing operations",
                  "Delivery models designed for international collaboration",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      className="mt-1 h-5 w-5 shrink-0 text-blue-700"
                      aria-hidden="true"
                    />
                    <p className="leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-7">
                <BriefcaseBusiness className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  Talent access
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Reach professionals across application, cloud, DevOps,
                  enterprise, security, quality, and infrastructure domains.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-7">
                <Network className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  Delivery flexibility
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Select recruiting, augmentation, consulting, engineering, or
                  offshore delivery based on your immediate objective.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-7">
                <ShieldCheck className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  Structured execution
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Clear requirements, defined ownership, practical governance,
                  and consistent communication support every engagement.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-7">
                <Globe2 className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  Global alignment
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Support across the United States, India, UAE, Singapore, and
                  Malaysia enables distributed collaboration.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How We Engage"
            title="A clear path from requirement to delivery"
            description="Our engagement process is designed to create alignment, reduce execution risk, and support measurable progress."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <p className="text-sm font-bold tracking-[0.16em] text-blue-700">
                  {item.step}
                </p>
                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Technology Coverage
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Skills for modern and enterprise environments
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                Our service portfolio supports organizations working across
                application engineering, cloud platforms, automation,
                enterprise systems, quality, security, and mobile technologies.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Global Presence
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                International support with local business alignment
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                Vikvar Technologies supports clients and professionals across
                key international markets through our United States and India
                operations and broader regional coverage.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {regions.map((region) => (
                  <div
                    key={region}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4"
                  >
                    <Globe2 className="h-5 w-5 text-blue-700" aria-hidden="true" />
                    <span className="font-semibold text-slate-800">{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-[#071a3d] px-7 py-12 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                Start a conversation
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Need talent, delivery capacity, or technology expertise?
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Share your role, project, technology, location, and timeline.
                Our team will help identify the appropriate engagement model.
              </p>
            </div>

            <div className="mt-8 flex shrink-0 flex-col gap-4 sm:flex-row lg:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Contact Vikvar
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Learn about us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
