import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HomePremiumCTA() {
  return (
    <section className="home-premium-cta">
      <Container>
        <div className="home-premium-cta-card">
          <div>
            <p>Ready to move forward?</p>
            <h2>Build the right team and delivery model for your next priority</h2>
            <span>
              Share your hiring, consulting, application, offshore, cloud or
              DevOps requirement with Vikvar Technologies.
            </span>
          </div>

          <div className="home-premium-cta-actions">
            <Link href="/contact" className="home-premium-cta-primary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact our team
            </Link>
            <Link href="/services" className="home-premium-cta-secondary">
              Explore services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
