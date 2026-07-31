import Link from "next/link";
import { ArrowRight, BookOpen, CloudCog, UsersRound } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  [UsersRound, "IT Recruiting", "Preparing a clear technology hiring requirement", "Define responsibilities, skills, location, interview ownership and joining expectations."],
  [BookOpen, "Delivery Models", "Choosing between augmentation and project delivery", "Understand when team extension, consulting or project delivery may be the better fit."],
  [CloudCog, "Cloud & DevOps", "Building a reliable cloud delivery foundation", "Review automation, CI/CD, access, observability, reliability and ownership."],
] as const;

export function HomeInsights() {
  return (
    <section className="home-insights">
      <Container>
        <div className="home-section-heading">
          <div>
            <p className="home-section-eyebrow">Resources & Insights</p>
            <h2>Practical guidance for technology talent and delivery decisions</h2>
          </div>
          <p>Clear, business-focused perspectives without unnecessary jargon or exaggerated claims.</p>
        </div>

        <div className="home-insight-grid">
          {items.map(([Icon, category, title, description]) => (
            <article key={title}>
              <Icon className="h-6 w-6" aria-hidden="true" />
              <p>{category}</p>
              <h3>{title}</h3>
              <span>{description}</span>
            </article>
          ))}
        </div>

        <Link href="/resources" className="home-insights-link">Explore resources <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </Container>
    </section>
  );
}
