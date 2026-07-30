import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Globe2,
  Mail,
  MapPin,
  MessageSquareText,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Vikvar Technologies",
  description:
    "Contact Vikvar Technologies for IT recruiting, staff augmentation, technology consulting, application development, offshore development, cloud, DevOps, careers, and partnership enquiries.",
};

const enquiryTypes = [
  {
    icon: Users,
    title: "Hire IT Talent",
    description:
      "Share your role, required skills, experience level, location, engagement type, and expected timeline.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Staff Augmentation",
    description:
      "Discuss individual specialists, project teams, contract hiring, contract-to-hire, or scalable workforce support.",
  },
  {
    icon: Building2,
    title: "Technology Services",
    description:
      "Tell us about your consulting, application development, modernization, offshore delivery, cloud, or DevOps initiative.",
  },
  {
    icon: MessageSquareText,
    title: "Careers",
    description:
      "Submit your profile with your primary skills, total experience, location, notice period, and preferred role.",
  },
] as const;

const regions = [
  "United States",
  "India",
  "United Arab Emirates",
  "Singapore",
  "Malaysia",
] as const;

const checklist = [
  "Your name, company, and professional email",
  "The service or opportunity you are enquiring about",
  "Required skills, scope, or business objective",
  "Preferred location or delivery model",
  "Expected start date or project timeline",
  "Best contact method and suitable time to respond",
] as const;

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(21,101,255,0.5),transparent_38%)]" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Contact Vikvar
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Start a conversation about talent, technology, or delivery.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Tell us what you need, where you need it, and when you want to begin. Our team will
                review your enquiry and connect you with the right recruiting, consulting, or
                delivery specialist.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:info@vikvartech.com"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Email Vikvar <ArrowRight size={18} />
                </a>
                <Link
                  href="/services/it-recruiting"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 px-7 font-bold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/8 p-7 backdrop-blur sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
                Direct contact
              </p>
              <div className="mt-7 space-y-6">
                <a
                  href="mailto:info@vikvartech.com"
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400 text-[#071a3d]">
                    <Mail size={21} />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-300">Email</span>
                    <span className="mt-1 block font-bold text-white">info@vikvartech.com</span>
                  </span>
                </a>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400 text-[#071a3d]">
                    <Globe2 size={21} />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-300">Service reach</span>
                    <span className="mt-1 block font-bold text-white">
                      USA, India, UAE, Singapore & Malaysia
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400 text-[#071a3d]">
                    <MapPin size={21} />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-300">Delivery options</span>
                    <span className="mt-1 block font-bold text-white">
                      Onsite, remote, hybrid & offshore
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How can we help?"
            title="Choose the conversation that best matches your requirement."
            description="Clear initial information helps us route your enquiry quickly and respond with relevant next steps."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {enquiryTypes.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
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

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionHeading
                eyebrow="Send an enquiry"
                title="Share the information our team needs to respond effectively."
                description="This first version uses your official email channel so every enquiry reaches the business directly without introducing an unconfigured backend or third-party form service."
              />
              <div className="mt-8 space-y-4">
                {checklist.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-700">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    <p className="text-sm font-semibold leading-6 text-[#081a3a]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Email template
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#081a3a]">
                Contact our business team
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Use the button below to open a prepared email. Add your specific requirement,
                company information, timeline, and preferred contact details before sending.
              </p>

              <div className="mt-7 rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-bold text-[#081a3a]">Suggested subject</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Service enquiry — Company name — Required service
                </p>
                <p className="mt-5 text-sm font-bold text-[#081a3a]">Suggested message</p>
                <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                  {`Hello Vikvar Team,

I am contacting you regarding:
Company:
Required service:
Skills or project scope:
Location / delivery preference:
Expected timeline:
Best contact number:

Please contact me to discuss the next steps.`}
                </p>
              </div>

              <a
                href="mailto:info@vikvartech.com?subject=Service%20Enquiry%20-%20Vikvar%20Technologies&body=Hello%20Vikvar%20Team%2C%0A%0AI%20am%20contacting%20you%20regarding%3A%0ACompany%3A%0ARequired%20service%3A%0ASkills%20or%20project%20scope%3A%0ALocation%20%2F%20delivery%20preference%3A%0AExpected%20timeline%3A%0ABest%20contact%20number%3A%0A%0APlease%20contact%20me%20to%20discuss%20the%20next%20steps."
                className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Compose Email <Mail size={18} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Global delivery"
            title="Supporting clients and professionals across key technology markets."
            description="Our service model can combine local client engagement with remote, hybrid, and offshore delivery capability."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {regions.map((region) => (
              <div
                key={region}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
              >
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-[#081a3a] text-white">
                  <Globe2 size={20} />
                </span>
                <p className="mt-4 font-bold text-[#081a3a]">{region}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#071a3d] py-20 text-white sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">
                Ready to begin?
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                Let&apos;s discuss the people, technology, and delivery model your business needs.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                Send a concise overview of your requirement and our team will identify the most
                relevant next step.
              </p>
            </div>
            <a
              href="mailto:info@vikvartech.com"
              className="inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-7 font-bold text-[#0a1b3d] transition hover:-translate-y-0.5"
            >
              Contact Vikvar
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
