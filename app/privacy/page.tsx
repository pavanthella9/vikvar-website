import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | Vikvar Technologies",
  description:
    "Read the Vikvar Technologies privacy policy covering website enquiries, recruitment information, business communications, cookies, data security, retention, and privacy rights.",
};

const sections = [
  {
    title: "1. Information we may collect",
    content: (
      <>
        <p>
          We may collect information that you voluntarily provide when you contact Vikvar
          Technologies, submit a business enquiry, apply for an opportunity, send a resume, request
          information about our services, or communicate with our team.
        </p>
        <p>
          This information may include your name, email address, telephone number, company,
          professional title, location, employment history, education, technical skills, resume,
          compensation expectations, notice period, project requirements, and any other information
          you choose to provide.
        </p>
        <p>
          We may also collect limited technical information when you use this website, such as IP
          address, browser type, device information, referring pages, pages visited, and approximate
          location derived from technical data.
        </p>
      </>
    ),
  },
  {
    title: "2. How we use information",
    content: (
      <>
        <p>We may use collected information to:</p>
        <ul>
          <li>Respond to enquiries and communicate about our services.</li>
          <li>Evaluate candidates for current or future employment and client opportunities.</li>
          <li>Support recruiting, staff augmentation, consulting, and delivery activities.</li>
          <li>Maintain business relationships with clients, candidates, partners, and suppliers.</li>
          <li>Improve our website, communications, processes, and service quality.</li>
          <li>Protect against fraud, misuse, security threats, and unlawful activity.</li>
          <li>Comply with legal, regulatory, contractual, and record-keeping obligations.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Recruitment and candidate information",
    content: (
      <>
        <p>
          Candidate information may be reviewed by Vikvar personnel and, where relevant to a
          specific opportunity, shared with clients, delivery partners, background verification
          providers, or other service providers involved in the hiring process.
        </p>
        <p>
          We may retain candidate profiles for consideration against future roles unless you ask us
          to remove or update your information, subject to applicable legal and contractual
          requirements.
        </p>
        <p>
          Please provide accurate information and do not include unnecessary sensitive personal
          information in an initial application.
        </p>
      </>
    ),
  },
  {
    title: "4. Business enquiries and client information",
    content: (
      <>
        <p>
          Information submitted through email or other business communication channels may be used
          to understand requirements, prepare proposals, coordinate meetings, deliver services,
          manage accounts, and maintain commercial records.
        </p>
        <p>
          Where a client or partner provides personal information about another person, that
          organization is responsible for ensuring it has the authority to share that information.
        </p>
      </>
    ),
  },
  {
    title: "5. Cookies and analytics",
    content: (
      <>
        <p>
          This website may use essential cookies and similar technologies required for security,
          performance, and basic functionality. Analytics tools may also be introduced to understand
          website usage and improve content.
        </p>
        <p>
          Where required, visitors will be provided with appropriate notice or choices before
          non-essential cookies are activated.
        </p>
      </>
    ),
  },
  {
    title: "6. How information may be shared",
    content: (
      <>
        <p>We may share information with:</p>
        <ul>
          <li>Vikvar personnel who need the information for legitimate business purposes.</li>
          <li>Clients considering candidates or receiving Vikvar services.</li>
          <li>Technology, hosting, communication, recruitment, and professional service providers.</li>
          <li>Government, regulatory, legal, or law-enforcement authorities where required.</li>
          <li>
            Parties involved in a business restructuring, merger, acquisition, financing, or transfer
            of assets.
          </li>
        </ul>
        <p>
          We do not sell personal information as a standalone commercial product.
        </p>
      </>
    ),
  },
  {
    title: "7. International data handling",
    content: (
      <>
        <p>
          Vikvar supports clients and professionals across multiple regions. Information may
          therefore be processed or accessed in countries other than the country in which it was
          originally provided.
        </p>
        <p>
          Where required, reasonable contractual, technical, and organizational measures will be
          used to support lawful international data handling.
        </p>
      </>
    ),
  },
  {
    title: "8. Data security",
    content: (
      <>
        <p>
          We use reasonable administrative, technical, and organizational safeguards intended to
          protect information against unauthorized access, misuse, alteration, loss, or disclosure.
        </p>
        <p>
          No internet transmission or storage system can be guaranteed to be completely secure. You
          should avoid sending passwords, one-time codes, full banking credentials, or unnecessary
          identity documents through ordinary email.
        </p>
      </>
    ),
  },
  {
    title: "9. Data retention",
    content: (
      <>
        <p>
          We retain information for as long as reasonably necessary for the purposes described in
          this policy, including recruiting, client delivery, business administration, dispute
          resolution, security, and legal compliance.
        </p>
        <p>
          Retention periods may differ depending on the type of information, relationship, location,
          and applicable obligations.
        </p>
      </>
    ),
  },
  {
    title: "10. Your privacy choices",
    content: (
      <>
        <p>
          Depending on your location and applicable law, you may have rights to request access,
          correction, deletion, restriction, objection, portability, or withdrawal of consent.
        </p>
        <p>
          To make a privacy request, contact us using the email address below. We may need to verify
          your identity and may retain limited information where required by law or legitimate
          business obligations.
        </p>
      </>
    ),
  },
  {
    title: "11. Third-party links",
    content: (
      <>
        <p>
          This website may link to external websites or platforms. Vikvar is not responsible for the
          privacy, security, content, or practices of third-party services. Review their policies
          before providing personal information.
        </p>
      </>
    ),
  },
  {
    title: "12. Children’s privacy",
    content: (
      <>
        <p>
          This website and Vikvar’s services are intended for business users and working
          professionals. We do not knowingly collect personal information from children through this
          website.
        </p>
      </>
    ),
  },
  {
    title: "13. Policy updates",
    content: (
      <>
        <p>
          We may update this policy when our website, services, business practices, or legal
          obligations change. The revised version will be published on this page with an updated
          effective date.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(21,101,255,0.48),transparent_38%)]" />
        <Container className="relative">
          <div className="max-w-4xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-[#071a3d]">
              <ShieldCheck size={28} />
            </div>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Legal & privacy
            </p>
            <h1 className="mt-5 text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Privacy Policy
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              This policy explains how Vikvar Technologies may collect, use, share, retain, and
              protect information submitted through our website, recruitment activities, and
              business communications.
            </p>
            <p className="mt-6 text-sm font-semibold text-blue-200">
              Effective date: July 30, 2026
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                  Privacy contact
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Contact Vikvar to ask a privacy question, request an update, or raise a concern
                  about your information.
                </p>
                <a
                  href="mailto:info@vikvartech.com?subject=Privacy%20Request"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-[#081a3a] hover:text-blue-700"
                >
                  <Mail size={18} />
                  info@vikvartech.com
                </a>
              </div>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-sm font-bold text-amber-950">Important note</p>
                <p className="mt-3 text-sm leading-6 text-amber-900/80">
                  This page provides general website privacy information. Final legal review should
                  be completed before production launch, especially if analytics, cookies, online
                  forms, applicant tracking, or additional third-party services are added.
                </p>
              </div>
            </aside>

            <div className="space-y-10">
              <section>
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#081a3a]">
                  About this policy
                </h2>
                <div className="mt-5 space-y-4 leading-7 text-slate-600">
                  <p>
                    This policy applies to information processed by Vikvar Technologies through this
                    website and related business or recruitment communications.
                  </p>
                  <p>
                    Separate contractual terms, client agreements, employee notices, or service
                    provider policies may also apply in specific circumstances.
                  </p>
                </div>
              </section>

              {sections.map((section) => (
                <section key={section.title} className="border-t border-slate-200 pt-10">
                  <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#081a3a]">
                    {section.title}
                  </h2>
                  <div className="privacy-content mt-5 space-y-4 leading-7 text-slate-600">
                    {section.content}
                  </div>
                </section>
              ))}

              <section className="border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#081a3a]">
                  14. Contact us
                </h2>
                <div className="mt-5 space-y-4 leading-7 text-slate-600">
                  <p>
                    For privacy questions or requests, contact Vikvar Technologies at:
                  </p>
                  <a
                    href="mailto:info@vikvartech.com?subject=Privacy%20Request"
                    className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-800"
                  >
                    info@vikvartech.com <ArrowRight size={17} />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#081a3a]">Need to contact Vikvar?</h2>
              <p className="mt-2 text-slate-600">
                Visit the contact page for business, services, careers, or general enquiries.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-6 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>

      <style>{`
        .privacy-content ul {
          list-style: disc;
          padding-left: 1.4rem;
        }

        .privacy-content li + li {
          margin-top: 0.6rem;
        }
      `}</style>
    </main>
  );
}
