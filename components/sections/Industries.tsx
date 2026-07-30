import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const industries = [
  {
    title: "Financial Services",
    text: "Secure, resilient platforms for banking, payments, insurance, and financial operations.",
  },
  {
    title: "Healthcare",
    text: "Digital systems that improve operational efficiency, accessibility, and service delivery.",
  },
  {
    title: "Retail & Consumer",
    text: "Connected customer experiences, commerce platforms, data, and scalable operations.",
  },
  {
    title: "Technology",
    text: "Product engineering, cloud modernization, and high-performing technical teams.",
  },
  {
    title: "Manufacturing",
    text: "Modern infrastructure, automation, analytics, and digital operational visibility.",
  },
  {
    title: "Public Sector",
    text: "Reliable digital services designed for scale, security, and citizen accessibility.",
  },
];

export function Industries() {
  return (
    <section id="industries" className="bg-[#081a3a] py-24 text-white sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Industry understanding. Technology execution."
          description="Our approach adapts to the operational realities, customer expectations, and regulatory demands of each sector."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              className="min-h-[220px] bg-[#0b2148] p-7 transition hover:bg-[#102a58] sm:p-8"
            >
              <p className="text-sm font-bold text-[#55d8ff]">
                0{index + 1}
              </p>
              <h3 className="mt-10 text-2xl font-bold">{industry.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{industry.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
