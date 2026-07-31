import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion, type FAQItem } from "@/components/faq/faq-accordion";
import { Container } from "@/components/ui/Container";

const faqs: FAQItem[] = [
  { question: "What services does Vikvar Technologies provide?", answer: "IT recruiting, staff augmentation, technology consulting, application development, offshore development, cloud, and DevOps services." },
  { question: "Can Vikvar support individual roles and complete teams?", answer: "Yes. Engagements can cover individual hiring, team augmentation, consulting, project delivery, or distributed offshore teams." },
  { question: "Which technology skills are covered?", answer: "Coverage includes Java, .NET, Python, cloud, DevOps, SAP, QA, cybersecurity, mobile, infrastructure, and related enterprise skills." },
  { question: "Which regions does Vikvar support?", answer: "The United States, India, UAE, Singapore, Malaysia, and other international markets depending on the engagement." },
  { question: "How does a new engagement begin?", answer: "With a requirements discussion covering objectives, scope, technology, location, timeline, ownership, and expected outcomes." },
  { question: "How can candidates contact the recruitment team?", answer: "Use the Careers page or email hr@vikvartech.com with your profile and relevant role information." },
  { question: "How can businesses submit an enquiry?", answer: "Use the Contact page or email info@vikvartech.com with the service, location, technology, timeline, and contact details." }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))
};

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about Vikvar Technologies services, engagement models, regions, careers, and enquiries.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return <main>
    <section className="bg-[#071a3d] py-20 text-white"><Container><p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Frequently Asked Questions</p><h1 className="mt-4 text-4xl font-bold sm:text-5xl">Clear answers about working with Vikvar Technologies</h1></Container></section>
    <section className="py-20"><Container><div className="mx-auto max-w-4xl"><FAQAccordion items={faqs} /><div className="mt-10 rounded-2xl bg-slate-50 p-7 text-center"><h2 className="text-2xl font-bold text-slate-950">Still have a question?</h2><Link href="/contact" className="mt-5 inline-flex rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white">Contact Vikvar</Link></div></div></Container></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </main>;
}
