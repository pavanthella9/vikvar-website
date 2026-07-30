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
  title: "Careers | Vikvar Technologies",
  description:
    "Explore career opportunities with Vikvar Technologies across IT recruiting, technology consulting, software engineering, cloud, DevOps, quality engineering, data, and enterprise technology.",
};

const reasons = [
  [
    Users,
    "Meaningful collaboration",
    "Work with experienced recruiters, consultants, engineers, and delivery professionals who value clear communication and shared ownership.",
  ],
  [
    Code2,
    "Technology-focused opportunities",
    "Contribute to assignments across application development, cloud, DevOps, data, quality engineering, cybersecurity, and enterprise platforms.",
  ],
  [
    Layers3,
    "Flexible career paths",
    "Explore opportunities across recruiting, consulting, project delivery, client engagements, offshore teams, and internal business functions.",
  ],
  [
    Gauge,
    "Growth through responsibility",
    "Build practical experience by solving real business problems, working with stakeholders, and taking ownership of measurable outcomes.",
  ],
] as const;

const opportunityAreas = [
  [
    "IT Recruiting & Talent Acquisition",
    "Sourcing specialists, technical recruiters, account-focused recruiters, recruitment coordinators, and talent acquisition professionals.",
  ],
  [
    "Software Engineering",
    "Frontend, backend, full-stack, mobile, API, integration, enterprise application, and modernization professionals.",
  ],
  [
    "Cloud & DevOps",
    "Cloud engineers, DevOps engineers, platform engineers, SRE professionals, infrastructure specialists, and automation engineers.",
  ],
  [
    "Quality Engineering",
    "Manual testers, automation engineers, performance testers, test leads, and quality assurance specialists.",
  ],
  [
    "Data, Security & Enterprise Technology",
    "Data engineers, analytics professionals, cybersecurity specialists, SAP consultants, and enterprise platform experts.",
  ],
  [
    "Technology Consulting & Delivery",
    "Business analysts, project managers, solution architects, delivery leads, scrum masters, and transformation consultants.",
  ],
] as const;

const process = [
  [
    "01",
    "Application review",
    "We review your experience, skills, location, availability, career interests, and alignment with current or upcoming opportunities.",
  ],
  [
    "02",
    "Initial conversation",
    "A recruiter discusses your background, communication, expectations, work preferences, and the type of opportunity being considered.",
  ],
  [
    "03",
    "Technical or functional evaluation",
    "Relevant roles may include structured technical discussions, assessments, portfolio reviews, or functional interviews.",
  ],
  [
    "04",
    "Opportunity alignment",
    "We confirm role expectations, engagement model, client environment, responsibilities, work location, and selection process.",
  ],
  [
    "05",
    "Client or leadership interaction",
    "Shortlisted candidates may meet client stakeholders or Vikvar delivery leaders for final evaluation and mutual alignment.",
  ],
  [
    "06",
    "Offer and onboarding",
    "Selected professionals receive clear joining guidance, documentation support, onboarding coordination, and engagement expectations.",
  ],
] as const;

const values = [
  "Professional communication and mutual respect",
  "Honest representation of skills and experience",
  "Accountability for commitments and outcomes",
  "Continuous learning and practical improvement",
  "Collaboration across teams, clients, and locations",
  "Quality, security, and responsible delivery",
] as const;

const faqs = [
  [
    "How can I apply for opportunities at Vikvar?",
    "Use the contact page and select the careers or job opportunity option in your message. Include your current role, primary skills, total experience, preferred location, availability, and a link to your resume or professional profile.",
  ],
  [
    "Does Vikvar hire for internal roles and client assignments?",
    "Yes. Opportunities may include internal recruiting and business roles, Vikvar-managed delivery positions, offshore development teams, staff augmentation assignments, and direct client requirements.",
  ],
  [
    "Can fresh graduates apply?",
    "Entry-level opportunities depend on active business requirements. Candidates should still submit a clear profile highlighting education, internships, projects, technical skills, communication ability, and location flexibility.",
  ],
  [
    "Do you support remote or hybrid opportunities?",
    "Work arrangements depend on the role, client policy, location, security requirements, and delivery model. Some opportunities may be remote or hybrid, while others require office or client-site presence.",
  ],
  [
    "Will Vikvar charge candidates a recruitment fee?",
    "Candidates should not pay a fee merely to be considered for a legitimate Vikvar opportunity. Be cautious of unofficial messages requesting payments, gift cards, banking credentials, or confidential information.",
  ],
  [
    "What information should I include with my application?",
    "Provide an updated resume, accurate experience details, current location, preferred work location, notice period, employment status, compensation expectations where relevant, and the best way to contact you.",
  ],
] as const;

export default function CareersPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(21,101,255,0.48),transparent_38%)]" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Careers at Vikvar
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Build your career while helping organizations build stronger technology teams.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Join Vikvar Technologies to work across IT recruiting, technology consulting,
                software delivery, cloud, DevOps, quality engineering, data, and enterprise
                transformation opportunities.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Submit Your Profile <ArrowRight size={18} />
                </Link>
                <Link
                  href="#career-areas"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 px-7 font-bold text-white transition hover:bg-white/10"
                >
                  Explore Career Areas
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/8 p-7 backdrop-blur sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
                What we look for
              </p>
              <div className="mt-7 space-y-5">
                {[
                  "Strong technical or functional capability",
                  "Clear and professional communication",
                  "Reliable ownership of commitments",
                  "Willingness to learn and adapt",
                  "Respect for quality, security, and teamwork",
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
            eyebrow="Why join Vikvar"
            title="A professional environment focused on capability, responsibility, and growth."
            description="We connect people with meaningful work while maintaining clear expectations, structured communication, and a strong focus on delivery quality."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([Icon, title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon size={23} />
                </span>
                <h2 className="mt-5 text-xl font-bold text-[#081a3a]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="career-areas" className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Career areas"
            title="Opportunities across recruiting, consulting, engineering, and technology delivery."
            description="Available roles change according to client demand and internal growth. These categories represent the capabilities we regularly support."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {opportunityAreas.map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#081a3a] text-sm font-extrabold text-white">
                  0{index + 1}
                </span>
                <h2 className="mt-6 text-2xl font-bold text-[#081a3a]">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Our culture"
              title="Professional standards that support trust and long-term growth."
              description="We value people who communicate honestly, take responsibility, collaborate respectfully, and continue improving their capability."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((item) => (
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

      <section className="bg-[#071a3d] py-20 text-white sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Candidate journey"
            title="A clear and structured selection process."
            description="The exact steps depend on the role and engagement, but candidates should understand the process, expectations, and next action at each stage."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map(([number, title, text]) => (
              <article key={number} className="rounded-2xl border border-white/12 bg-white/6 p-7">
                <span className="text-sm font-extrabold tracking-[0.18em] text-cyan-300">
                  {number}
                </span>
                <h2 className="mt-4 text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 rounded-[30px] border border-slate-200 bg-slate-50 p-7 sm:p-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Recruitment safety
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#081a3a] sm:text-4xl">
                Protect your information during the hiring process.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                Verify that messages are connected to Vikvar Technologies and use official company
                communication channels whenever possible. Do not share passwords, one-time codes,
                full banking credentials, or unnecessary identity documents during an initial
                recruitment conversation.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700">
                  <ShieldCheck size={24} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#081a3a]">Stay alert</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Be cautious of unofficial payment requests, guaranteed job claims, urgent
                    requests for sensitive data, or communication that cannot be independently
                    verified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Answers for candidates considering Vikvar opportunities."
            align="center"
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-[#081a3a]">
                  {question}
                </summary>
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
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">
                  Take the next step
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                  Share your profile for current and upcoming opportunities.
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-blue-50">
                  Include your core skills, total experience, location, notice period, and preferred
                  type of role so our team can understand your profile clearly.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-7 font-bold text-[#0a1b3d] transition hover:-translate-y-0.5"
              >
                Submit Your Profile
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
