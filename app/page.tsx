import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Globe2,
  Handshake,
  Layers3,
  SearchCheck,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const services = [
  {
    icon: SearchCheck,
    number: "01",
    title: "IT Recruiting",
    description:
      "Identify and engage qualified technology professionals through a structured, quality-focused recruitment process.",
    href: "/services/it-recruiting",
    featured: true,
  },
  {
    icon: UsersRound,
    number: "02",
    title: "Staff Augmentation",
    description:
      "Add experienced technology professionals to your teams with flexible engagement models aligned to project needs.",
    href: "/services/staff-augmentation",
    featured: true,
  },
  {
    icon: BriefcaseBusiness,
    number: "03",
    title: "Technology Consulting",
    description:
      "Access experienced consultants who help plan, execute, and strengthen critical technology initiatives.",
    href: "/services/technology-consulting",
    featured: true,
  },
  {
    icon: Code2,
    number: "04",
    title: "Application Development",
    description:
      "Design, build, modernize, and support business applications with scalable engineering teams.",
    href: "/services/application-development",
    featured: true,
  },
  {
    icon: Globe2,
    number: "05",
    title: "Offshore Development",
    description:
      "Build dedicated development teams that provide dependable delivery capacity and long-term continuity.",
    href: "/services/offshore-development",
    featured: false,
  },
  {
    icon: Layers3,
    number: "06",
    title: "Cloud & DevOps",
    description:
      "Support cloud adoption, automation, deployment modernization, and reliable infrastructure operations.",
    href: "/services/cloud-devops",
    featured: false,
  },
];

const engagementModels = [
  "Contract Staffing",
  "Contract-to-Hire",
  "Permanent Hiring",
  "Staff Augmentation",
  "Dedicated Teams",
  "Project Delivery",
];

const industries = [
  "Financial Services",
  "Healthcare",
  "Technology",
  "Retail & E-commerce",
  "Manufacturing",
  "Telecommunications",
];

const process = [
  {
    step: "01",
    title: "Understand",
    text: "We clarify the role, technical requirements, project context, communication expectations, and business priorities.",
  },
  {
    step: "02",
    title: "Source",
    text: "Our recruitment team identifies relevant professionals through targeted networks, referrals, and active outreach.",
  },
  {
    step: "03",
    title: "Evaluate",
    text: "Candidates are reviewed for technical capability, experience, communication, availability, and role alignment.",
  },
  {
    step: "04",
    title: "Deliver",
    text: "We present focused, interview-ready profiles and coordinate the process through selection and onboarding.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a35] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(21,101,255,0.28),transparent_32%)]" />
        <div className="absolute right-[-100px] top-24 h-[460px] w-[460px] rounded-full border border-white/10" />
        <div className="absolute right-[-20px] top-44 h-[300px] w-[300px] rounded-full border border-white/10" />

        <div className="site-container relative grid min-h-[720px] items-center gap-14 py-24 lg:grid-cols-[1.12fr_0.88fr] lg:py-28">
          <div>
            <span className="eyebrow eyebrow-dark">
              IT Recruiting · Staff Augmentation · Consulting
            </span>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Build the technology team your business needs.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Vikvar Technologies connects organizations with qualified IT
              professionals and delivers flexible staffing, consulting, and
              application development solutions built around real business
              requirements.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button button-primary">
                Hire IT Talent
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="button button-secondary-dark">
                Explore Services
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl gap-4 border-t border-white/15 pt-7 sm:grid-cols-3">
              {[
                ["Quality-first", "Candidate screening"],
                ["Flexible", "Engagement models"],
                ["Responsive", "Client delivery"],
              ].map(([strong, label]) => (
                <div key={strong}>
                  <p className="text-lg font-semibold">{strong}</p>
                  <p className="mt-1 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative ml-auto max-w-[470px] rounded-[32px] border border-white/15 bg-white/[0.07] p-7 shadow-2xl backdrop-blur">
              <div className="rounded-[24px] bg-white p-8 text-[#0a1b3d]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                    Talent Delivery
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    Vikvar
                  </span>
                </div>

                <h2 className="mt-8 text-3xl font-semibold tracking-[-0.03em]">
                  The right professionals. A focused hiring process.
                </h2>

                <div className="mt-8 space-y-4">
                  {[
                    "Requirement-driven sourcing",
                    "Technical and communication screening",
                    "Relevant, interview-ready profiles",
                    "Coordinated onboarding support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4"
                    >
                      <CheckCircle2 className="text-blue-600" size={20} />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-8 -left-12 rounded-2xl border border-white/15 bg-[#10284e] p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500">
                    <Handshake size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Partnership-led</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Built for long-term value
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="site-container">
          <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="section-title mt-5">
                Talent and technology services that move work forward.
              </h2>
            </div>
            <p className="section-copy lg:ml-auto lg:max-w-xl">
              Our primary strength is helping organizations find and engage
              technology talent. We also provide consulting and engineering
              capabilities for clients that need complete delivery support.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  href={service.href}
                  key={service.title}
                  className={`group rounded-[24px] border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    service.featured
                      ? "border-slate-200 bg-white"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`grid h-13 w-13 place-items-center rounded-2xl ${
                        service.featured
                          ? "bg-blue-600 text-white"
                          : "bg-white text-blue-700"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="text-sm font-semibold text-slate-400">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em] text-[#0a1b3d]">
                    {service.title}
                  </h3>
                  <p className="mt-4 min-h-24 leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[#f3f6fb]">
        <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Flexible partnerships</span>
            <h2 className="section-title mt-5">
              Choose an engagement model that fits your objective.
            </h2>
            <p className="section-copy mt-6 max-w-xl">
              From a critical individual hire to an extended delivery team,
              Vikvar adapts its approach to your timelines, skills requirements,
              and operating model.
            </p>
            <Link href="/contact" className="button button-dark mt-9">
              Discuss Your Requirement
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {engagementModels.map((model, index) => (
              <div
                key={model}
                className="flex min-h-28 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-semibold text-[#0a1b3d]">{model}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our recruiting process</span>
            <h2 className="section-title mt-5">
              A disciplined process designed around relevance and quality.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="relative rounded-[24px] border border-slate-200 p-7"
              >
                <span className="text-5xl font-semibold tracking-[-0.05em] text-blue-100">
                  {item.step}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-[#0a1b3d]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#071a35] text-white">
        <div className="site-container grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow eyebrow-dark">Why Vikvar</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              More than profiles. A dependable talent and delivery partner.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We combine recruitment discipline, technology understanding, and
              responsive account management to help clients build capable teams
              without unnecessary complexity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [ShieldCheck, "Quality-focused screening"],
              [SearchCheck, "Requirement-led sourcing"],
              [UsersRound, "Flexible workforce models"],
              [Handshake, "Transparent collaboration"],
            ].map(([Icon, title]) => {
              const FeatureIcon = Icon as typeof ShieldCheck;
              return (
                <div
                  key={title as string}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"
                >
                  <FeatureIcon size={26} className="text-blue-400" />
                  <h3 className="mt-5 font-semibold">{title as string}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="eyebrow">Industries</span>
              <h2 className="section-title mt-5">
                Technology talent for complex business environments.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-6 py-5"
                >
                  <span className="font-semibold text-[#0a1b3d]">
                    {industry}
                  </span>
                  <ArrowRight size={17} className="text-blue-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-6 sm:pb-28">
        <div className="site-container">
          <div className="overflow-hidden rounded-[32px] bg-blue-600 px-7 py-14 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                Start a conversation
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Looking for IT talent or a technology delivery partner?
              </h2>
            </div>
            <Link
              href="/contact"
              className="button mt-8 bg-white text-blue-700 hover:bg-blue-50 lg:mt-0"
            >
              Contact Vikvar
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
