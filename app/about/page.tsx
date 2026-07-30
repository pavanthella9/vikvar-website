import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title:
    "About Vikvar Technologies | IT Recruiting, Staff Augmentation & Consulting",
  description:
    "Learn how Vikvar Technologies helps organizations build capable technology teams through IT recruiting, staff augmentation, technology consulting, application development, and offshore delivery.",
};

const values = [
  {
    title: "Quality First",
    description:
      "We apply clear standards to candidate evaluation, project delivery, communication, and every client interaction.",
    icon: ShieldCheck,
  },
  {
    title: "Accountability",
    description:
      "We take ownership of commitments, communicate openly, and remain focused on outcomes that matter to the client.",
    icon: Target,
  },
  {
    title: "Partnership",
    description:
      "We work as an extension of our clients' teams and build relationships around shared goals and long-term value.",
    icon: Handshake,
  },
  {
    title: "Continuous Improvement",
    description:
      "We refine our methods, strengthen our capabilities, and adapt to changing talent and technology needs.",
    icon: Lightbulb,
  },
];

const differentiators = [
  "Technology-focused recruiting and consulting expertise",
  "Structured candidate screening and quality validation",
  "Flexible engagement models aligned to business needs",
  "Support across talent acquisition and technology delivery",
  "Responsive communication and transparent coordination",
  "Scalable delivery across global and offshore teams",
];

const process = [
  {
    step: "01",
    title: "Understand the objective",
    description:
      "We begin with the business outcome, role requirement, delivery challenge, timeline, and success criteria.",
  },
  {
    step: "02",
    title: "Design the right engagement",
    description:
      "We recommend a practical model across recruiting, staff augmentation, consulting, project delivery, or offshore teams.",
  },
  {
    step: "03",
    title: "Execute with discipline",
    description:
      "Our teams follow defined screening, delivery, governance, communication, and quality processes.",
  },
  {
    step: "04",
    title: "Improve and scale",
    description:
      "We review progress, resolve gaps, and adapt the engagement as business priorities evolve.",
  },
];

const regions = ["United States", "India", "UAE", "Singapore", "Malaysia"];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Vikvar Technologies"
        title="Building capable technology teams and delivering practical solutions."
        description="Vikvar Technologies is a technology talent and consulting company helping organizations recruit skilled professionals, extend delivery capacity, and execute important digital initiatives with confidence."
      />

      <section className="section bg-white">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading
              eyebrow="Who we are"
              title="A business-focused partner for talent and technology delivery."
              description="We combine recruiting expertise with technology delivery capabilities so clients can address both workforce and execution needs through one dependable partner."
            />

            <div className="space-y-6 text-lg leading-8 text-[#5f6f84]">
              <p>
                Vikvar Technologies supports organizations through IT recruiting,
                staff augmentation, technology consulting, application development,
                offshore development, and cloud and DevOps services.
              </p>
              <p>
                Our approach is built around understanding the client's actual
                requirement before recommending a solution. That may mean finding a
                specialist for a critical role, scaling a delivery team, establishing
                an offshore capability, or supporting an application initiative from
                planning through execution.
              </p>
              <p>
                We focus on clear communication, structured evaluation, practical
                delivery, and long-term partnerships rather than one-time transactions.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-bold text-[#1565ff] transition hover:gap-3"
                >
                  Explore our services <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-[#f7f9fc]">
        <Container>
          <SectionHeading
            eyebrow="Purpose and direction"
            title="What guides our work"
            description="Our mission and vision keep the company focused on meaningful client outcomes, responsible growth, and lasting value."
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[28px] border border-slate-200 bg-white p-8 sm:p-10">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#1565ff]">
                <Target size={24} />
              </div>
              <p className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-[#1565ff]">
                Our mission
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#081a3a]">
                Help organizations access the right talent and deliver technology
                initiatives successfully.
              </h2>
              <p className="mt-5 leading-7 text-[#5f6f84]">
                We aim to make hiring, team scaling, consulting, and delivery more
                effective through structured processes, capable professionals, and
                accountable execution.
              </p>
            </article>

            <article className="rounded-[28px] bg-[#081a3a] p-8 text-white sm:p-10">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-cyan-300">
                <Globe2 size={24} />
              </div>
              <p className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">
                Our vision
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">
                Become a trusted global partner for technology talent, consulting,
                and digital delivery.
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                We are building a company known for quality, responsiveness,
                transparency, and the ability to support clients as their priorities
                and teams evolve.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          <SectionHeading
            eyebrow="Our values"
            title="Principles that shape every engagement"
            description="These values influence how we recruit, communicate, deliver, and build relationships with clients and professionals."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[24px] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-[#1565ff]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#081a3a]">{title}</h3>
                <p className="mt-3 leading-7 text-[#5f6f84]">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-[#081a3a] text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Why organizations choose Vikvar
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                One partner across talent, teams, and technology delivery.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Our clients need more than resumes or generic technology advice. They
                need a partner that understands requirements, validates quality, stays
                responsive, and supports execution from beginning to outcome.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={20} />
                  <p className="font-semibold leading-7 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-[#f7f9fc]">
        <Container>
          <SectionHeading
            eyebrow="Our delivery philosophy"
            title="A structured approach from requirement to outcome"
            description="Every engagement begins with context and follows a clear process designed to reduce ambiguity and improve execution."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article
                key={item.step}
                className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-7"
              >
                <span className="text-5xl font-bold tracking-[-0.05em] text-blue-100">
                  {item.step}
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#081a3a]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#5f6f84]">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          <div className="grid items-center gap-12 rounded-[30px] border border-slate-200 bg-white p-8 sm:p-10 lg:grid-cols-[1fr_0.85fr] lg:p-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1565ff]">
                Global delivery mindset
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-[#081a3a] sm:text-5xl">
                Supporting clients and professionals across key markets.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6f84]">
                Vikvar's delivery outlook connects client requirements with talent and
                technology capabilities across multiple regions while maintaining
                consistent communication, governance, and quality standards.
              </p>
            </div>

            <div className="rounded-[24px] bg-[#f7f9fc] p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-100 text-[#1565ff]">
                  <Users size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#081a3a]">Focus regions</h3>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {regions.map((region) => (
                  <div
                    key={region}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 font-semibold text-[#314158]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#1565ff]" />
                    {region}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </main>
  );
}
