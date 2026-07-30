import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Business-first thinking",
    description:
      "Technology decisions are connected to business priorities, user needs, and measurable results.",
  },
  {
    title: "Engineering discipline",
    description:
      "We focus on quality, security, maintainability, automation, and operational reliability.",
  },
  {
    title: "Flexible engagement",
    description:
      "Work with us through consulting, project delivery, managed teams, or specialist staffing.",
  },
  {
    title: "Clear collaboration",
    description:
      "Transparent communication, practical roadmaps, and accountable delivery from start to finish.",
  },
];

export function WhyVikvar() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <Container>
        <div className="rounded-[32px] bg-gradient-to-br from-[#edf5ff] via-white to-[#effcff] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Why Vikvar"
                title="A focused partner for complex technology work."
                description="We bring together strategic thinking, technical capability, and adaptable delivery models to help clients move with confidence."
              />

              <div className="mt-9 rounded-3xl bg-[#081a3a] p-7 text-white shadow-[0_24px_60px_rgba(8,26,58,0.18)]">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#55d8ff]">
                  Our commitment
                </p>
                <p className="mt-4 text-2xl font-bold leading-snug">
                  Deliver useful technology, build trusted relationships, and
                  create long-term value.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <article
                  key={reason.title}
                  className="rounded-3xl border border-white bg-white/90 p-6 shadow-[0_14px_34px_rgba(8,26,58,0.07)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf3ff] text-sm font-black text-[#1565ff]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#081a3a]">
                    {reason.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#657489]">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
