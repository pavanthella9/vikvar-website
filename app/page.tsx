import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  CloudCog,
  Code2,
  Globe2,
  Layers3,
  UsersRound,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/enterprise/CTASection";
import { FeatureCard } from "@/components/enterprise/FeatureCard";
import { ProcessTimeline } from "@/components/enterprise/ProcessTimeline";
import { MediaImage } from "@/components/media/MediaImage";
import { HomeMediaShowcase } from "@/components/media/HomeMediaShowcase";
import { vikvarMedia } from "@/components/media/media-library";
import { DeliveryModels } from "@/components/production/DeliveryModels";
import { GlobalDeliveryMap } from "@/components/production/GlobalDeliveryMap";
import { TechnologyGrid } from "@/components/production/TechnologyGrid";
import { TrustSignals } from "@/components/production/TrustSignals";
import "./bundle-30-32.css";
import "./media-enhancement.css";
import "./production-ui.css";

export const metadata: Metadata = {
  title: "IT Recruiting, Staff Augmentation & Technology Consulting",
  description:
    "Vikvar Technologies provides IT recruiting, staff augmentation, technology consulting, application development, offshore delivery, cloud, and DevOps services.",
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "IT Recruiting",
    description:
      "Structured sourcing and screening for specialised technology roles across enterprise and digital skill areas.",
    href: "/services/it-recruiting",
    icon: BriefcaseBusiness,
  },
  {
    title: "Staff Augmentation",
    description:
      "Flexible access to professionals and delivery teams aligned to your priorities, technology environment, and timeline.",
    href: "/services/staff-augmentation",
    icon: UsersRound,
  },
  {
    title: "Technology Consulting",
    description:
      "Practical guidance across technology strategy, architecture, transformation, delivery planning, and operational improvement.",
    href: "/services/technology-consulting",
    icon: Layers3,
  },
  {
    title: "Application Development",
    description:
      "Design, modernise, integrate, test, and support business applications with maintainable engineering practices.",
    href: "/services/application-development",
    icon: Code2,
  },
  {
    title: "Offshore Development",
    description:
      "Distributed engineering capacity supported by clear governance, collaboration, reporting, and delivery ownership.",
    href: "/services/offshore-development",
    icon: Globe2,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud foundations, infrastructure automation, CI/CD, container platforms, reliability, and operational visibility.",
    href: "/services/cloud-devops",
    icon: CloudCog,
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify the business objective, required capabilities, technology landscape, location, and delivery timeline.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the engagement model, responsibilities, milestones, communication rhythm, and success criteria.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Execute through recruiting, augmentation, consulting, engineering, or distributed delivery workflows.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Review progress, manage risks, refine priorities, and support the next phase of the engagement.",
  },
];

export default function HomePage() {
  return (
    <main className="v-home">
      <section className="v-hero">
        <div className="v-hero-grid" aria-hidden="true" />
        <Container>
          <div className="v-hero-layout">
            <div className="v-hero-copy">
              <p className="v-eyebrow">Technology Talent & Delivery</p>
              <h1>
                Build stronger technology teams and move critical initiatives
                forward
              </h1>
              <p className="v-hero-lead">
                Vikvar Technologies helps organisations access specialised
                technology talent, extend delivery capacity, and execute
                consulting and engineering priorities across global markets.
              </p>

              <div className="v-hero-actions">
                <Link href="/contact" className="v-button v-button-primary">
                  Discuss your requirement
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/services/it-recruiting"
                  className="v-button v-button-secondary"
                >
                  Explore our services
                </Link>
              </div>

              <div className="v-trust-row" aria-label="Key service strengths">
                {[
                  "Specialised technology recruiting",
                  "Flexible engagement models",
                  "Global delivery support",
                ].map((item) => (
                  <span key={item}>
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="v-hero-media">
              <MediaImage media={vikvarMedia.teamOffice} eager />
              <div className="v-hero-media-copy">
                <span>Global capability</span>
                <strong>Technology talent and delivery connected</strong>
                <p>
                  Recruiting, consulting, engineering, and distributed delivery
                  aligned to one business objective.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="v-section v-section-light">
        <Container>
          <div className="v-section-heading">
            <div>
              <p className="v-eyebrow v-eyebrow-dark">Core Capabilities</p>
              <h2>Connected services for talent and technology delivery</h2>
            </div>
            <p>
              Engage Vikvar for a focused requirement or combine multiple
              capabilities into a coordinated delivery model.
            </p>
          </div>

          <div className="v-service-grid">
            {services.map((service) => (
              <FeatureCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <HomeMediaShowcase />
      <DeliveryModels />
      <TrustSignals />

      <section className="v-section v-section-ink">
        <Container>
          <div className="v-outcome-layout">
            <div>
              <p className="v-eyebrow">Delivery Principles</p>
              <h2>A practical, transparent approach built around your priorities</h2>
              <p className="v-muted">
                We focus on clear requirements, accountable communication, and
                flexible delivery rather than generic one-size-fits-all
                solutions.
              </p>
            </div>
            <div className="v-outcome-grid">
              {[
                [
                  "Business-first discovery",
                  "We begin with the outcome, constraints, ownership, and timeline—not only a list of technologies.",
                ],
                [
                  "Flexible delivery models",
                  "Choose recruiting, augmentation, consulting, project delivery, or distributed engineering support.",
                ],
                [
                  "Technology breadth",
                  "Access capabilities across applications, enterprise platforms, cloud, DevOps, QA, security, and mobile.",
                ],
                [
                  "Global perspective",
                  "Support across international markets based on each engagement’s structure and requirements.",
                ],
              ].map(([title, description]) => (
                <article key={title}>
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="v-section">
        <Container>
          <div className="v-section-heading">
            <div>
              <p className="v-eyebrow v-eyebrow-dark">Engagement Process</p>
              <h2>Clear from initial discussion through delivery</h2>
            </div>
            <p>
              A simple process keeps priorities, ownership, communication, and
              outcomes visible throughout the engagement.
            </p>
          </div>
          <ProcessTimeline steps={process} />
        </Container>
      </section>

      <TechnologyGrid />
      <GlobalDeliveryMap />

      <CTASection
        eyebrow="Start a Conversation"
        title="Tell us what your organisation needs to accomplish"
        description="Share your hiring, team expansion, consulting, application, offshore, cloud, or DevOps requirement with Vikvar Technologies."
        primaryLabel="Contact our team"
        primaryHref="/contact"
        secondaryLabel="Explore case studies"
        secondaryHref="/case-studies"
      />
    </main>
  );
}
