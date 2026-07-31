import { BadgeCheck, Globe2, Layers3, MessagesSquare, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  [BadgeCheck, "Technology-focused", "Specialised capability across talent, consulting and delivery."],
  [MessagesSquare, "Transparent", "Clear communication, ownership and progress visibility."],
  [Layers3, "Flexible", "Multiple engagement models aligned to changing priorities."],
  [Globe2, "Global", "Cross-border support for clients, teams and delivery."],
  [ShieldCheck, "Responsible", "No unsupported claims, partnerships or customer metrics."],
] as const;

export function HomeTrustStrip() {
  return (
    <section className="home-trust-strip" aria-label="Vikvar strengths">
      <Container>
        <div className="home-trust-strip-grid">
          {items.map(([Icon, title, description]) => (
            <article key={title}>
              <Icon className="h-5 w-5" aria-hidden="true" />
              <div><strong>{title}</strong><span>{description}</span></div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
