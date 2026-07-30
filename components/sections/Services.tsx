import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "Cloud & DevOps",
    description:
      "Modernize infrastructure, automate delivery pipelines, and improve platform reliability across cloud environments.",
    points: ["Cloud migration", "CI/CD automation", "Platform engineering"],
  },
  {
    number: "02",
    title: "Digital Engineering",
    description:
      "Build secure, scalable applications and digital products that support evolving business and customer needs.",
    points: ["Web platforms", "Application modernization", "API engineering"],
  },
  {
    number: "03",
    title: "Data & AI",
    description:
      "Turn fragmented information into trusted insights, intelligent workflows, and better operational decisions.",
    points: ["Data platforms", "Analytics", "AI-enabled automation"],
  },
  {
    number: "04",
    title: "Technology Workforce",
    description:
      "Extend your teams with skilled technology professionals who can contribute quickly and deliver with confidence.",
    points: ["Contract staffing", "Project teams", "Specialist hiring"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Technology services designed for measurable progress."
          description="We combine strategy, engineering, cloud, data, and talent capabilities to help organizations move from complex challenges to practical outcomes."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-[28px] border border-[#e1e8f1] bg-[#fbfdff] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#bfd4f3] hover:shadow-[0_24px_60px_rgba(8,26,58,0.10)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-bold tracking-[0.15em] text-[#1565ff]">
                  {service.number}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf3ff] text-xl text-[#1565ff] transition group-hover:bg-[#1565ff] group-hover:text-white">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold tracking-[-0.025em] text-[#081a3a]">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-[#617086]">
                {service.description}
              </p>

              <ul className="mt-7 space-y-3">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm font-semibold text-[#31415f]"
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#1565ff] to-[#00c6ff]" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
