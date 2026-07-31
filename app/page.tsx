import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Layers3,
  TrendingUp,
  UserPlus,
  UsersRound,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HomeMediaShowcase } from "@/components/media/HomeMediaShowcase";
import { DeliveryModels } from "@/components/production/DeliveryModels";
import { GlobalDeliveryMap } from "@/components/production/GlobalDeliveryMap";
import { TechnologyGrid } from "@/components/production/TechnologyGrid";
import { TrustSignals } from "@/components/production/TrustSignals";
import { CTASection } from "@/components/enterprise/CTASection";
import { HomeTrustStrip } from "@/components/home/HomeTrustStrip";
import { HomeCaseHighlights } from "@/components/home/HomeCaseHighlights";
import { HomeInsights } from "@/components/home/HomeInsights";
import { HomePremiumCTA } from "@/components/home/HomePremiumCTA";
import { Reveal } from "@/components/ui/Reveal";
import "./homepage-reference.css";
import "./media-enhancement.css";
import "./production-ui.css";
import "./homepage-finishing.css";
import "./premium-polish.css";
import "./enterprise-polish.css";

export const metadata: Metadata = {
  title: "IT Recruiting, Staffing & Digital Solutions",
  description:
    "Vikvar Technologies provides IT recruiting, staff augmentation, technology consulting, application development, offshore delivery, cloud and DevOps services.",
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "IT Recruiting & Staffing",
    description:
      "We connect skilled technology professionals with organisations and help build teams aligned to real delivery needs.",
    href: "/services/it-recruiting",
    icon: UsersRound,
  },
  {
    title: "Staff Augmentation",
    description:
      "Scale your team with experienced professionals and flexible engagement models built around your priorities.",
    href: "/services/staff-augmentation",
    icon: UserPlus,
  },
  {
    title: "Technology Consulting",
    description:
      "Practical strategy, architecture and delivery guidance for complex technology and transformation initiatives.",
    href: "/services/technology-consulting",
    icon: TrendingUp,
  },
  {
    title: "Application Development",
    description:
      "Custom applications and modernisation services focused on performance, scalability and maintainability.",
    href: "/services/application-development",
    icon: Code2,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud foundations, automation and modern delivery practices that strengthen reliability and operational visibility.",
    href: "/services/cloud-devops",
    icon: CloudCog,
  },
];

export default function HomePage() {
  return (
    <main id="main-content" className="reference-home">
      <section className="reference-hero">
        <div className="reference-hero-overlay" aria-hidden="true" />

        <Container>
          <div className="reference-hero-grid">
            <div className="reference-hero-copy">
              <p className="reference-eyebrow">Technology Talent & Delivery</p>
              <h1>
                Innovate. Build.
                <br />
                Transform.
              </h1>
              <p>
                We help organisations accelerate growth with IT recruiting,
                staffing, consulting and digital solutions that drive practical
                business outcomes.
              </p>

              <div className="reference-hero-actions">
                <Link href="/services" className="reference-primary-button">
                  Our Services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="reference-outline-button">
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="reference-hero-brand">
              <Image
                src="/brand/vikvar-logo-primary.jpg"
                alt="Vikvar Technologies — Innovate, Build, Transform"
                width={1075}
                height={300}
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <Reveal><HomeTrustStrip /></Reveal>

      <Reveal delay={40}><section className="reference-services">
        <Container>
          <div className="reference-section-heading">
            <div>
              <p className="reference-blue-label">What We Do</p>
              <h2>End-to-End Solutions to Accelerate Your Business</h2>
            </div>
            <p>
              From building high-performing teams to delivering scalable digital
              solutions, we partner with organisations through every stage of
              growth and transformation.
            </p>
          </div>

          <div className="reference-service-grid">
            {services.map(({ title, description, href, icon: Icon }) => (
              <Link href={href} className="reference-service-card" key={title}>
                <Icon className="h-8 w-8" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
                <span>
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>

          <div className="reference-secondary-service">
            <BriefcaseBusiness className="h-6 w-6" aria-hidden="true" />
            <div>
              <strong>Offshore Development</strong>
              <p>
                Dedicated distributed engineering teams with clear governance,
                communication and delivery ownership.
              </p>
            </div>
            <Link href="/services/offshore-development">
              Explore
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section></Reveal>

      <Reveal delay={60}><HomeMediaShowcase /></Reveal>
      <Reveal delay={80}><DeliveryModels /></Reveal>
      <Reveal delay={100}><TrustSignals /></Reveal>
      <Reveal delay={80}><TechnologyGrid /></Reveal>
      <Reveal delay={90}><HomeCaseHighlights /></Reveal>
      <Reveal delay={100}><HomeInsights /></Reveal>
      <Reveal delay={110}><GlobalDeliveryMap /></Reveal>

      <HomePremiumCTA />

      <CTASection
        eyebrow="Start a Conversation"
        title="Tell us what your organisation needs to accomplish"
        description="Share your recruiting, staffing, consulting, application, offshore, cloud or DevOps requirement with Vikvar Technologies."
        primaryLabel="Contact our team"
        primaryHref="/contact"
        secondaryLabel="Explore our services"
        secondaryHref="/services"
      />
    </main>
  );
}
