import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/enterprise/CTASection";

export type ServiceSection = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type RelatedService = {
  title: string;
  href: string;
};

export type ServicePageData = {
  eyebrow: string;
  title: string;
  description: string;
  heroPoints: string[];
  icon: LucideIcon;
  overviewTitle: string;
  overviewDescription: string;
  capabilities: ServiceSection[];
  benefits: ServiceSection[];
  process: ServiceProcessStep[];
  technologies?: string[];
  relatedServices: RelatedService[];
  ctaTitle: string;
  ctaDescription: string;
};

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const Icon = data.icon;

  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero-grid" aria-hidden="true" />
        <Container>
          <div className="service-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <Link href="/services">Services</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span>{data.title}</span>
          </div>

          <div className="service-hero-layout">
            <div>
              <p className="service-eyebrow">{data.eyebrow}</p>
              <h1>{data.title}</h1>
              <p className="service-hero-description">{data.description}</p>

              <div className="service-hero-actions">
                <Link href="/contact" className="service-button service-button-primary">
                  Discuss your requirement
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#capabilities"
                  className="service-button service-button-secondary"
                >
                  Explore capabilities
                </Link>
              </div>
            </div>

            <aside className="service-hero-card">
              <div className="service-hero-icon">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2>Engagement focus</h2>
              <ul>
                {data.heroPoints.map((point) => (
                  <li key={point}>
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="service-section">
        <Container>
          <div className="service-overview">
            <div>
              <p className="service-eyebrow service-eyebrow-dark">Overview</p>
              <h2>{data.overviewTitle}</h2>
            </div>
            <p>{data.overviewDescription}</p>
          </div>
        </Container>
      </section>

      <section id="capabilities" className="service-section service-section-muted">
        <Container>
          <div className="service-section-heading">
            <div>
              <p className="service-eyebrow service-eyebrow-dark">Capabilities</p>
              <h2>Support aligned to your priorities</h2>
            </div>
            <p>
              Scope and delivery can be adapted to the requirement, internal
              operating model, location, and timeline.
            </p>
          </div>

          <div className="service-card-grid">
            {data.capabilities.map((item) => (
              <article key={item.title} className="service-card">
                <span className="service-card-marker" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="service-section service-section-dark">
        <Container>
          <div className="service-dark-layout">
            <div>
              <p className="service-eyebrow">Why Vikvar</p>
              <h2>A delivery model designed for clarity and flexibility</h2>
              <p>
                We focus on practical execution, transparent communication, and
                a structure that fits the organisation rather than forcing a
                standard model.
              </p>
            </div>

            <div className="service-benefit-grid">
              {data.benefits.map((item) => (
                <article key={item.title}>
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="service-section">
        <Container>
          <div className="service-section-heading">
            <div>
              <p className="service-eyebrow service-eyebrow-dark">Our Process</p>
              <h2>From requirement to measurable progress</h2>
            </div>
            <p>
              Each engagement follows a clear sequence while remaining flexible
              enough to adapt to new information and priorities.
            </p>
          </div>

          <div className="service-process-grid">
            {data.process.map((step) => (
              <article key={step.number} className="service-process-card">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {data.technologies?.length ? (
        <section className="service-section service-section-muted">
          <Container>
            <div className="service-technology-layout">
              <div>
                <p className="service-eyebrow service-eyebrow-dark">
                  Technology Coverage
                </p>
                <h2>Capabilities across modern and enterprise environments</h2>
              </div>
              <div className="service-technology-list">
                {data.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="service-section">
        <Container>
          <div className="service-related">
            <div>
              <p className="service-eyebrow service-eyebrow-dark">
                Related Services
              </p>
              <h2>Build a connected engagement</h2>
            </div>

            <div className="service-related-links">
              {data.relatedServices.map((service) => (
                <Link key={service.href} href={service.href}>
                  <span>{service.title}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Start a Conversation"
        title={data.ctaTitle}
        description={data.ctaDescription}
        primaryLabel="Contact our team"
        primaryHref="/contact"
        secondaryLabel="View case studies"
        secondaryHref="/case-studies"
      />
    </main>
  );
}
