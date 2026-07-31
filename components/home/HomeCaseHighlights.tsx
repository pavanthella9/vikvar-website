import Link from "next/link";
import { ArrowRight, CloudCog, Code2, UsersRound } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  [UsersRound, "Talent & Teams", "Scaling a technology delivery team", "A representative scenario covering recruiting, screening, coordination and phased onboarding.", "/case-studies/technology-team-expansion"],
  [Code2, "Application Engineering", "Modernising a business application", "A representative scenario focused on maintainability, integration readiness and predictable releases.", "/case-studies/application-modernization"],
  [CloudCog, "Cloud & DevOps", "Establishing a cloud delivery foundation", "A representative scenario covering infrastructure automation, CI/CD and operational consistency.", "/case-studies/cloud-delivery-foundation"],
] as const;

export function HomeCaseHighlights() {
  return (
    <section className="home-case-highlights">
      <Container>
        <div className="home-section-heading">
          <div>
            <p className="home-section-eyebrow">Representative Scenarios</p>
            <h2>See how common technology challenges can be structured</h2>
          </div>
          <p>These examples explain Vikvar&apos;s approach without publishing unapproved client names or performance figures.</p>
        </div>

        <div className="home-case-grid">
          {items.map(([Icon, category, title, description, href]) => (
            <article key={href}>
              <div className="home-case-icon"><Icon className="h-6 w-6" aria-hidden="true" /></div>
              <p>{category}</p>
              <h3>{title}</h3>
              <span>{description}</span>
              <Link href={href}>Read scenario <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
