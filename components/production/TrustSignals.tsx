import {
  CheckCircle2,
  Globe2,
  Layers3,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const signals = [
  {
    icon: MessagesSquare,
    title: "Transparent communication",
    description:
      "Clear requirements, ownership, progress updates, feedback, and next actions.",
  },
  {
    icon: Layers3,
    title: "Flexible engagement",
    description:
      "Recruiting, augmentation, consulting, project delivery, or offshore teams.",
  },
  {
    icon: Globe2,
    title: "Global perspective",
    description:
      "Support shaped around location, availability, collaboration, and delivery context.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible positioning",
    description:
      "No invented customer names, performance figures, partnerships, or certifications.",
  },
];

export function TrustSignals() {
  return (
    <section className="production-section production-trust">
      <Container>
        <div className="production-trust-layout">
          <div>
            <p className="production-eyebrow">Why Organisations Engage Vikvar</p>
            <h2>Credibility built through execution, not exaggerated claims</h2>
            <p>
              The website presents Vikvar’s real capability areas and engagement
              approach while leaving customer names, metrics, certifications,
              and testimonials to be added only after verification and approval.
            </p>

            <ul>
              <li>
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                Business-first requirement discovery
              </li>
              <li>
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                Technology-focused talent and delivery capability
              </li>
              <li>
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                Flexible support across multiple engagement models
              </li>
            </ul>
          </div>

          <div className="production-trust-grid">
            {signals.map(({ icon: Icon, title, description }) => (
              <article key={title}>
                <Icon className="h-6 w-6" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
