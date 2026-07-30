import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use | Vikvar Technologies",
  description:
    "Read the Vikvar Technologies website terms of use covering permitted use, business enquiries, recruitment information, intellectual property, third-party links, disclaimers, and liability.",
};

const sections = [
  {
    title: "1. Acceptance of these terms",
    content: (
      <>
        <p>
          By accessing or using this website, you agree to these Terms of Use and to any applicable
          laws and regulations. If you do not agree, you should not use the website.
        </p>
        <p>
          These terms apply to general website use. Separate contracts, statements of work,
          employment documents, candidate agreements, privacy notices, or client terms may apply to
          specific relationships and services.
        </p>
      </>
    ),
  },
  {
    title: "2. About Vikvar Technologies",
    content: (
      <>
        <p>
          Vikvar Technologies provides services that may include IT recruiting, staff augmentation,
          contract and permanent hiring, technology consulting, application development, offshore
          development, cloud, DevOps, and related technology services.
        </p>
        <p>
          Information on this website is provided for general business and informational purposes.
          It does not create a binding service, employment, partnership, or agency relationship by
          itself.
        </p>
      </>
    ),
  },
  {
    title: "3. Permitted website use",
    content: (
      <>
        <p>You may use this website for lawful purposes, including:</p>
        <ul>
          <li>Learning about Vikvar’s services and capabilities.</li>
          <li>Submitting legitimate business, partnership, or career enquiries.</li>
          <li>Reviewing public information about Vikvar and its areas of expertise.</li>
        </ul>
        <p>
          You may not misuse the website, interfere with its operation, attempt unauthorized access,
          introduce malicious software, scrape content at scale, impersonate another person, or use
          the website for fraudulent, unlawful, or abusive activity.
        </p>
      </>
    ),
  },
  {
    title: "4. Business enquiries and proposals",
    content: (
      <>
        <p>
          Information submitted through email, contact channels, or business discussions may be used
          to evaluate and respond to your enquiry.
        </p>
        <p>
          No proposal, estimate, timeline, staffing plan, candidate submission, or commercial
          discussion becomes binding unless it is confirmed in an authorized written agreement.
        </p>
        <p>
          You are responsible for ensuring that information you submit is accurate and that you are
          authorized to share it.
        </p>
      </>
    ),
  },
  {
    title: "5. Careers and recruitment information",
    content: (
      <>
        <p>
          Job descriptions, candidate discussions, compensation ranges, project details, and
          availability information may change without notice.
        </p>
        <p>
          Submitting a resume or profile does not guarantee an interview, client submission, offer,
          employment, assignment, sponsorship, or future consideration.
        </p>
        <p>
          Candidates must provide accurate information about identity, experience, education,
          certifications, availability, employment status, and authorization to work.
        </p>
      </>
    ),
  },
  {
    title: "6. Recruitment safety",
    content: (
      <>
        <p>
          Candidates should verify that communications are connected to Vikvar Technologies and use
          official business channels whenever possible.
        </p>
        <p>
          Do not provide passwords, one-time codes, full banking credentials, or unnecessary
          identity documents during an initial recruitment conversation. Vikvar does not require a
          candidate to pay a fee merely to be considered for a legitimate opportunity.
        </p>
      </>
    ),
  },
  {
    title: "7. Intellectual property",
    content: (
      <>
        <p>
          Unless otherwise stated, the website design, text, graphics, branding, service
          descriptions, and other original content are owned by or licensed to Vikvar Technologies
          and are protected by applicable intellectual property laws.
        </p>
        <p>
          You may view and print reasonable portions for personal or internal business reference.
          You may not reproduce, republish, modify, sell, distribute, or create derivative works
          from website content without prior written permission.
        </p>
        <p>
          Third-party names, logos, products, and trademarks belong to their respective owners.
        </p>
      </>
    ),
  },
  {
    title: "8. Accuracy and availability",
    content: (
      <>
        <p>
          We aim to keep website information accurate and useful, but we do not guarantee that all
          content is complete, current, error-free, or suitable for every purpose.
        </p>
        <p>
          We may update, remove, suspend, or change website content, functionality, service
          descriptions, or availability without notice.
        </p>
      </>
    ),
  },
  {
    title: "9. Third-party websites and services",
    content: (
      <>
        <p>
          The website may contain links to third-party websites, platforms, or services. These links
          are provided for convenience and do not necessarily represent endorsement.
        </p>
        <p>
          Vikvar is not responsible for third-party content, security, availability, privacy
          practices, products, or services. Your use of third-party services is governed by their
          own terms and policies.
        </p>
      </>
    ),
  },
  {
    title: "10. Disclaimer of warranties",
    content: (
      <>
        <p>
          To the extent permitted by law, this website and its content are provided on an “as is”
          and “as available” basis without warranties of any kind, whether express, implied, or
          statutory.
        </p>
        <p>
          We do not warrant uninterrupted access, error-free operation, freedom from harmful code,
          successful hiring outcomes, candidate availability, project results, or suitability for a
          particular purpose.
        </p>
      </>
    ),
  },
  {
    title: "11. Limitation of liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by law, Vikvar Technologies and its personnel will not be
          liable for indirect, incidental, special, consequential, exemplary, or punitive damages
          arising from website use, inability to use the website, reliance on website content, or
          third-party links.
        </p>
        <p>
          Nothing in these terms excludes liability that cannot lawfully be excluded.
        </p>
      </>
    ),
  },
  {
    title: "12. Indemnity",
    content: (
      <>
        <p>
          To the extent permitted by law, you agree to be responsible for losses, claims, or
          expenses arising from your unlawful misuse of the website, infringement of another
          person’s rights, or material breach of these terms.
        </p>
      </>
    ),
  },
  {
    title: "13. Privacy",
    content: (
      <>
        <p>
          Personal information submitted through this website or related communications is handled
          according to our Privacy Policy and any additional notices that may apply.
        </p>
        <p>
          Review the{" "}
          <Link href="/privacy" className="font-bold text-blue-700 hover:text-blue-800">
            Privacy Policy
          </Link>{" "}
          for more information.
        </p>
      </>
    ),
  },
  {
    title: "14. Governing terms and disputes",
    content: (
      <>
        <p>
          Applicable law and dispute arrangements may depend on the Vikvar entity, service,
          agreement, and location involved.
        </p>
        <p>
          Where a separate written agreement exists, its governing-law and dispute provisions will
          take priority over these general website terms.
        </p>
      </>
    ),
  },
  {
    title: "15. Changes to these terms",
    content: (
      <>
        <p>
          We may revise these Terms of Use when the website, services, business practices, or legal
          requirements change. Updated terms will be published on this page with a revised effective
          date.
        </p>
        <p>
          Continued use of the website after an update means the revised terms will apply from the
          stated effective date.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a3d] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(21,101,255,0.48),transparent_38%)]" />
        <Container className="relative">
          <div className="max-w-4xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-[#071a3d]">
              <FileText size={28} />
            </div>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Legal information
            </p>
            <h1 className="mt-5 text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Terms of Use
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              These terms govern access to and use of the Vikvar Technologies website and its public
              information, enquiry channels, and recruitment content.
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
                  Legal contact
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Contact Vikvar if you have a question about these terms or the permitted use of
                  website content.
                </p>
                <a
                  href="mailto:info@vikvartech.com?subject=Terms%20of%20Use%20Enquiry"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-[#081a3a] hover:text-blue-700"
                >
                  <Mail size={18} />
                  info@vikvartech.com
                </a>
              </div>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-sm font-bold text-amber-950">Important note</p>
                <p className="mt-3 text-sm leading-6 text-amber-900/80">
                  This page is a strong general website draft. Final legal review should be
                  completed before production launch and after the operating entity, governing law,
                  registered addresses, and service contracts are confirmed.
                </p>
              </div>
            </aside>

            <div className="space-y-10">
              {sections.map((section) => (
                <section key={section.title} className="border-b border-slate-200 pb-10 last:border-0">
                  <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#081a3a]">
                    {section.title}
                  </h2>
                  <div className="terms-content mt-5 space-y-4 leading-7 text-slate-600">
                    {section.content}
                  </div>
                </section>
              ))}

              <section>
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#081a3a]">
                  16. Contact us
                </h2>
                <div className="mt-5 space-y-4 leading-7 text-slate-600">
                  <p>
                    Questions about these Terms of Use may be sent to Vikvar Technologies at:
                  </p>
                  <a
                    href="mailto:info@vikvartech.com?subject=Terms%20of%20Use%20Enquiry"
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
              <h2 className="text-2xl font-bold text-[#081a3a]">Looking for privacy information?</h2>
              <p className="mt-2 text-slate-600">
                Review how Vikvar may collect, use, retain, and protect information.
              </p>
            </div>
            <Link
              href="/privacy"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#1565ff] px-6 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              View Privacy Policy <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>

      <style>{`
        .terms-content ul {
          list-style: disc;
          padding-left: 1.4rem;
        }

        .terms-content li + li {
          margin-top: 0.6rem;
        }
      `}</style>
    </main>
  );
}
