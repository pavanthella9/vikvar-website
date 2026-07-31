import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="v-cta">
      <Container>
        <div className="v-cta-inner">
          <div>
            <p className="v-eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="v-cta-actions">
            <Link href={primaryHref} className="v-button v-button-primary">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="v-button v-button-secondary"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
