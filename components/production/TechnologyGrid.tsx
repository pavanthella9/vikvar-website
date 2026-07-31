import { Container } from "@/components/ui/Container";

const technologies = [
  { name: "AWS", group: "Cloud" },
  { name: "Azure", group: "Cloud" },
  { name: "Java", group: "Engineering" },
  { name: ".NET", group: "Engineering" },
  { name: "Python", group: "Engineering" },
  { name: "React", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "Docker", group: "Platform" },
  { name: "Kubernetes", group: "Platform" },
  { name: "Terraform", group: "Automation" },
  { name: "SAP", group: "Enterprise" },
  { name: "GitHub Actions", group: "Delivery" },
];

export function TechnologyGrid() {
  return (
    <section className="production-section production-tech">
      <Container>
        <div className="production-heading">
          <div>
            <p className="production-eyebrow">Technology Ecosystem</p>
            <h2>Experience across modern and enterprise technology environments</h2>
          </div>
          <p>
            Technology choices are aligned to the client environment and business
            requirement. These are capability areas, not partnership or
            certification claims.
          </p>
        </div>

        <div className="production-tech-grid" aria-label="Technology coverage">
          {technologies.map((technology) => (
            <div className="production-tech-card" key={technology.name}>
              <span aria-hidden="true">
                {technology.name
                  .replace(".", "")
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <strong>{technology.name}</strong>
              <small>{technology.group}</small>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
