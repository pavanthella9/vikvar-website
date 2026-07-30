import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Code2,
  Database,
  Factory,
  HeartPulse,
  Laptop2,
  Network,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "IT Recruiting Services | Vikvar Technologies",
  description:
    "Vikvar Technologies helps organizations source, evaluate, and hire skilled technology professionals through structured IT recruiting and talent acquisition services.",
};

const challenges = [
  {
    title: "Lengthy hiring cycles",
    description:
      "Critical technology roles remain open while internal teams spend valuable time reviewing unsuitable profiles.",
  },
  {
    title: "Specialized skill shortages",
    description:
      "Cloud, data, cybersecurity, enterprise platform, and product engineering skills can be difficult to source consistently.",
  },
  {
    title: "Inconsistent technical screening",
    description:
      "Resume keywords alone do not establish whether a candidate can perform effectively in the required role.",
  },
  {
    title: "Candidate engagement risk",
    description:
      "Slow communication and unclear hiring processes can lead to candidate drop-offs before an offer is completed.",
  },
];

const recruitmentProcess = [
  {
    step: "01",
    title: "Requirement analysis",
    description:
      "We clarify the role, technical environment, delivery expectations, location, timeline, and candidate profile.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Talent sourcing",
    description:
      "Recruiters use targeted search strategies, professional networks, referrals, and talent databases to identify suitable professionals.",
    icon: Search,
  },
  {
    step: "03",
    title: "Technical evaluation",
    description:
      "Candidates are assessed against the practical skills, experience, and technology requirements defined for the role.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Communication screening",
    description:
      "We review communication, availability, career motivation, work preferences, and overall alignment before submission.",
    icon: Users,
  },
  {
    step: "05",
    title: "Quality validation",
    description:
      "Profiles are checked for relevance, consistency, compensation alignment, notice period, and submission readiness.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Client coordination",
    description:
      "We support interview scheduling, feedback communication, offer discussions, and onboarding coordination.",
    icon: BadgeCheck,
  },
];

const expertise = [
  {
    title: "Software Engineering",
    description: "Java, .NET, Python, JavaScript, frontend, backend, full-stack, mobile, and API engineering.",
    icon: Code2,
  },
  {
    title: "Cloud & Infrastructure",
    description: "AWS, Azure, Google Cloud, Linux, networking, containers, infrastructure automation, and platform operations.",
    icon: Cloud,
  },
  {
    title: "Data & Analytics",
    description: "Data engineering, business intelligence, analytics, databases, ETL, data platforms, and AI-related roles.",
    icon: Database,
  },
  {
    title: "DevOps & Reliability",
    description: "CI/CD, Kubernetes, Docker, Terraform, observability, SRE, release engineering, and DevSecOps.",
    icon: Network,
  },
  {
    title: "Cybersecurity",
    description: "Cloud security, IAM, SOC, application security, governance, risk, compliance, and security operations.",
    icon: ShieldCheck,
  },
  {
    title: "Enterprise Platforms",
    description: "SAP, Salesforce, ServiceNow, ERP, CRM, integration, business analysis, and enterprise application roles.",
    icon: Building2,
  },
];

const hiringModels = [
  {
    title: "Permanent Hiring",
    description:
      "For organizations hiring long-term employees who will contribute to core teams, capabilities, and business continuity.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Contract Hiring",
    description:
      "For time-bound projects, urgent capacity requirements, specialist needs, and flexible workforce planning.",
    icon: Users,
  },
  {
    title: "Contract-to-Hire",
    description:
      "For businesses that want to evaluate performance and team alignment before considering permanent employment.",
    icon: CheckCircle2,
  },
  {
    title: "Targeted Search",
    description:
      "For niche, senior, or difficult-to-fill technology roles that require focused market mapping and direct outreach.",
    icon: Target,
  },
];

const differentiators = [
  "Technology-focused recruiting across software, cloud, data, cybersecurity, QA, and enterprise platforms.",
  "Structured screening before profiles are presented to the client.",
  "Clear communication across sourcing, interviews, feedback, offers, and onboarding.",
  "Flexible support for permanent, contract, contract-to-hire, and targeted hiring needs.",
  "Recruiting aligned to the role, project environment, business priorities, and delivery expectations.",
  "A quality-first approach designed to reduce irrelevant submissions and improve hiring efficiency.",
];

const industries = [
  {
    title: "Banking & Financial Services",
    description: "Technology, data, security, risk, compliance, platform, and digital banking talent.",
    icon: Banknote,
  },
  {
    title: "Healthcare",
    description: "Application, data, cloud, QA, interoperability, infrastructure, and security professionals.",
    icon: HeartPulse,
  },
  {
    title: "Retail & E-commerce",
    description: "Digital commerce, product engineering, data, mobile, cloud, and customer experience teams.",
    icon: ShoppingCart,
  },
  {
    title: "Manufacturing",
    description: "ERP, automation, applications, data, infrastructure, cybersecurity, and transformation roles.",
    icon: Factory,
  },
  {
    title: "Technology Companies",
    description: "Product, platform, software engineering, QA, DevOps, data, and technical leadership talent.",
    icon: Laptop2,
  },
  {
    title: "Telecommunications",
    description: "Network, cloud, application, infrastructure, data, operations, and security professionals.",
    icon: Network,
  },
];

const faqs = [
  {
    question: "What types of technology roles can Vikvar recruit for?",
    answer:
      "Vikvar supports hiring across software engineering, cloud, infrastructure, DevOps, data, analytics, cybersecurity, QA, enterprise platforms, project delivery, business analysis, and technology leadership. The exact search strategy is tailored to each requirement.",
  },
  {
    question: "How are candidates evaluated before submission?",
    answer:
      "Candidates are reviewed against the role requirements, relevant project experience, technical capabilities, communication, availability, compensation expectations, notice period, and overall alignment. Only suitable profiles should move forward to client review.",
  },
  {
    question: "Can Vikvar support both contract and permanent hiring?",
    answer:
      "Yes. Vikvar supports permanent hiring, contract hiring, contract-to-hire requirements, and targeted searches for niche or senior technology positions.",
  },
  {
    question: "How quickly can candidate profiles be shared?",
    answer:
      "Timelines depend on the role, location, skill scarcity, compensation range, and required experience. After requirement analysis, Vikvar establishes a realistic sourcing and submission plan rather than promising an artificial fixed turnaround for every position.",
  },
  {
    question: "Can Vikvar help with multiple roles or project-based team hiring?",
    answer:
      "Yes. Support can be structured for an individual position, multiple concurrent roles, a project team, or an ongoing talent acquisition requirement. Staff augmentation may also be considered when the business needs flexible team capacity.",
  },
  {
    question: "Does Vikvar support remote and global hiring requirements?",
    answer:
      "Vikvar can support remote, hybrid, and location-specific requirements based on the role and client need. Any cross-border engagement is planned according to the applicable employment, contracting, and onboarding requirements.",
  },
];

export default function ITRecruitingPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a35] py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(21,101,255,0.42),transparent_34%)]" />
        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[#00c6ff]/10 blur-3xl" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#77d9ff]">
                IT Recruiting & Talent Acquisition
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Build stronger technology teams with the right talent.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Vikvar helps organizations source, evaluate, and engage skilled technology professionals through a structured recruiting process focused on relevance, quality, and clear communication.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0f57df]"
                >
                  Hire IT Talent <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.07] p-6 backdrop-blur sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#77d9ff]">
                Recruiting priorities
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "Role-specific sourcing",
                  "Technical and communication screening",
                  "Quality validation before submission",
                  "Interview and onboarding coordination",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0b2448]/70 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#77d9ff]" size={20} />
                    <span className="font-medium text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The hiring challenge"
            title="Technology hiring requires more than matching keywords to a job description."
            description="Organizations need professionals whose experience, technical capability, communication, availability, and career objectives align with the actual role. A structured recruiting process helps reduce wasted interviews and keeps hiring decisions focused."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className="rounded-[24px] border border-slate-200 bg-[#f8fafc] p-6 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e9f1ff] text-sm font-bold text-[#1565ff]">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-[#081a3a]">{challenge.title}</h2>
                    <p className="mt-3 leading-7 text-[#5f6f84]">{challenge.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f9fc] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our recruitment process"
            title="A defined path from requirement analysis to onboarding."
            description="Our process is designed to improve profile relevance, create visibility throughout the engagement, and support faster decision-making without compromising candidate quality."
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recruitmentProcess.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.step}
                  className="group rounded-[26px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(8,26,58,0.08)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.16em] text-[#1565ff]">{item.step}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f1ff] text-[#1565ff] transition group-hover:bg-[#1565ff] group-hover:text-white">
                      <Icon size={21} />
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-[#081a3a]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#5f6f84]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeading
              eyebrow="Technology expertise"
              title="Recruiting support across modern technology functions."
              description="Vikvar supports organizations seeking technical professionals across engineering, infrastructure, data, security, enterprise platforms, quality, and delivery disciplines."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {expertise.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-[22px] border border-slate-200 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f1ff] text-[#1565ff]">
                      <Icon size={21} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-[#081a3a]">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[#5f6f84]">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#071a35] py-20 text-white sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Hiring models"
            title="Flexible recruiting support aligned to your workforce plan."
            description="Select an engagement model based on role urgency, employment type, project duration, hiring volume, and long-term workforce objectives."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {hiringModels.map((model) => {
              const Icon = model.icon;
              return (
                <article key={model.title} className="rounded-[24px] border border-white/10 bg-white/[0.06] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1565ff] text-white">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{model.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{model.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1565ff]">Why Vikvar</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-[#081a3a] sm:text-5xl">
                Recruiting designed around quality, clarity, and business relevance.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5f6f84]">
                We approach each requirement as a business need, not simply a vacancy. That means understanding what the person must deliver, how the team operates, and what will make the engagement successful.
              </p>
            </div>
            <div className="grid gap-4">
              {differentiators.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                  <Sparkles className="mt-0.5 shrink-0 text-[#1565ff]" size={20} />
                  <p className="font-medium leading-7 text-[#314158]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f9fc] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Technology talent for changing industry requirements."
            description="Our recruiting approach adapts to each client's industry, operating model, technology environment, regulatory context, and delivery priorities."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <article key={industry.title} className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f1ff] text-[#1565ff]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-[#081a3a]">{industry.title}</h3>
                  <p className="mt-3 leading-7 text-[#5f6f84]">{industry.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="What organizations often ask before starting a search."
            description="Every hiring requirement is different. These answers explain the structure of our service and how an engagement can begin."
          />
          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:bg-[#f8fafc] sm:p-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-[#081a3a] marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-2xl font-light text-[#1565ff] transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl leading-7 text-[#5f6f84]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </main>
  );
}
