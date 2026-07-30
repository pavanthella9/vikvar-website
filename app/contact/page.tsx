import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  Building2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Vikvar Technologies for IT recruiting, staff augmentation, technology consulting, application development, offshore development, cloud, and DevOps services.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Vikvar Technologies",
    description:
      "Connect with Vikvar Technologies in the United States and India for technology talent, consulting, engineering, and delivery services.",
    url: "/contact",
  },
};

const offices = [
  {
    country: "United States",
    label: "USA Headquarters",
    company: "VIKVAR Technologies LLC",
    address: [
      "5900 Balcones Drive, Suite 100",
      "Austin, TX 78731",
      "United States",
    ],
    phone: "+1 (609) 423-4288",
    phoneHref: "tel:+16094234288",
    email: "info@vikvartech.com",
    emailHref: "mailto:info@vikvartech.com",
  },
  {
    country: "India",
    label: "India Office",
    company: "VIKVAR Technologies",
    address: [
      "3rd Floor, KNR Square",
      "Opp. The Platina",
      "Gachibowli, Kondapur",
      "Hyderabad, Telangana 500032",
      "India",
    ],
    phone: "+1 (609) 423-4288",
    phoneHref: "tel:+16094234288",
    email: "info@vikvartech.com",
    emailHref: "mailto:info@vikvartech.com",
  },
] as const;

const services = [
  "IT Recruiting",
  "Staff Augmentation",
  "Technology Consulting",
  "Application Development",
  "Offshore Development",
  "Cloud & DevOps",
] as const;

const regions = [
  "United States",
  "India",
  "United Arab Emirates",
  "Singapore",
  "Malaysia",
] as const;

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.24),transparent_38%)]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Contact Vikvar Technologies
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build your next technology team or solution.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Speak with our team about technology recruiting, staff
              augmentation, consulting, application engineering, offshore
              delivery, cloud, or DevOps requirements.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@vikvartech.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Email our team
              </a>
              <a
                href="tel:+16094234288"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                +1 (609) 423-4288
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Offices"
            title="Connect with Vikvar Technologies"
            description="Our teams support clients and technology professionals across multiple international markets."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {offices.map((office) => (
              <article
                key={office.label}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                      {office.label}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold text-slate-950">
                      {office.company}
                    </h2>
                  </div>
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                    <Building2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-7 space-y-6">
                  <div className="flex gap-4">
                    <MapPin
                      className="mt-1 h-5 w-5 shrink-0 text-blue-700"
                      aria-hidden="true"
                    />
                    <address className="not-italic leading-7 text-slate-600">
                      {office.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>

                  <div className="flex gap-4">
                    <Phone
                      className="mt-1 h-5 w-5 shrink-0 text-blue-700"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        Phone
                      </p>
                      <a
                        href={office.phoneHref}
                        className="mt-1 inline-block text-slate-600 transition hover:text-blue-700"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail
                      className="mt-1 h-5 w-5 shrink-0 text-blue-700"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        General enquiries
                      </p>
                      <a
                        href={office.emailHref}
                        className="mt-1 inline-block text-slate-600 transition hover:text-blue-700"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <BriefcaseBusiness
                className="h-7 w-7 text-blue-700"
                aria-hidden="true"
              />
              <h2 className="mt-5 text-xl font-bold text-slate-950">Careers</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Explore opportunities or send your profile to our recruitment
                team.
              </p>
              <a
                href="mailto:hr@vikvartech.com"
                className="mt-5 inline-flex font-semibold text-blue-700 transition hover:text-blue-900"
              >
                hr@vikvartech.com
              </a>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <Clock3 className="h-7 w-7 text-blue-700" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold text-slate-950">
                Business Hours
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Monday to Friday
                <br />
                9:00 AM – 6:00 PM
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-500">
                Enquiries received outside business hours will be reviewed on
                the next working day.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <Globe2 className="h-7 w-7 text-blue-700" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold text-slate-950">
                Global Presence
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Supporting clients and talent across:
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {regions.join(" · ")}
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 rounded-3xl bg-[#071a3d] px-7 py-12 text-white lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                Business Enquiries
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Tell us what your organization needs.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                We support employers and business leaders across recruiting,
                workforce scaling, consulting, engineering, offshore delivery,
                cloud, and DevOps.
              </p>
              <p className="mt-6 text-sm leading-7 text-slate-400">
                Services: {services.join(" · ")}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@vikvartech.com?subject=Business%20Enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Send a business enquiry
              </a>
              <a
                href="tel:+16094234288"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Vikvar Technologies
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
