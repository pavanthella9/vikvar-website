import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  ["IT Recruiting", "Identify qualified technology professionals for contract and permanent opportunities.", "/services/it-recruiting"],
  ["Staff Augmentation", "Extend your internal teams with experienced professionals aligned to your delivery goals.", "/services/staff-augmentation"],
  ["Technology Consulting", "Gain specialized expertise for planning, transformation, implementation, and improvement initiatives.", "/services/technology-consulting"],
  ["Application Development", "Build and modernize applications through flexible, experienced engineering teams.", "/services/application-development"],
  ["Offshore Development", "Create dedicated offshore teams for scalable, consistent, long-term delivery.", "/services/offshore-development"],
  ["Cloud & DevOps", "Improve infrastructure, automation, delivery pipelines, reliability, and cloud operations.", "/services/cloud-devops"],
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-[#071a35] py-24 text-white">
        <div className="site-container">
          <span className="eyebrow eyebrow-dark">Our services</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
            Talent, consulting, and engineering capabilities for evolving business needs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Start with the individual talent you need, extend an existing team,
            or engage Vikvar for broader technology delivery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {services.map(([title, description, href]) => (
            <Link
              href={href}
              key={title}
              className="group rounded-[24px] border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-[#0a1b3d]">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                View service <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
