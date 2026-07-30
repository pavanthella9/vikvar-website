import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const technologies = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Jenkins",
  "GitHub Actions",
  "Argo CD",
  "Python",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Data Platforms",
  "AI & Automation",
];

export function Expertise() {
  return (
    <section id="expertise" className="bg-[#f7f9fc] py-24 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="Technology expertise"
            title="Modern platforms. Practical engineering."
            description="We work across cloud, software, automation, data, and delivery technologies to build solutions that are maintainable, secure, and ready to grow."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {technologies.map((technology) => (
              <div
                key={technology}
                className="flex min-h-[84px] items-center justify-center rounded-2xl border border-[#dce5ef] bg-white px-4 text-center text-sm font-bold text-[#263a59] shadow-[0_8px_24px_rgba(8,26,58,0.04)] transition hover:-translate-y-0.5 hover:border-[#abc8ee]"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
