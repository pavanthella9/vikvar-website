import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MediaImage } from "./MediaImage";
import { vikvarMedia } from "./media-library";

const items = [
  {
    media: vikvarMedia.teamOffice,
    label: "Talent & Teams",
    href: "/services/staff-augmentation",
  },
  {
    media: vikvarMedia.consultingWhiteboard,
    label: "Technology Consulting",
    href: "/services/technology-consulting",
  },
  {
    media: vikvarMedia.developerWorkspace,
    label: "Application Engineering",
    href: "/services/application-development",
  },
  {
    media: vikvarMedia.deliveryWorkflow,
    label: "Cloud & DevOps",
    href: "/services/cloud-devops",
  },
];

export function HomeMediaShowcase() {
  return (
    <section className="media-showcase">
      <Container>
        <div className="media-showcase-heading">
          <div>
            <p className="media-eyebrow">How We Work</p>
            <h2>People, engineering, and delivery working together</h2>
          </div>
          <p>
            Carefully selected professional photography gives each capability a
            more human and credible visual identity without turning the site
            into a generic stock-photo template.
          </p>
        </div>

        <div className="media-showcase-grid">
          {items.map((item, index) => (
            <Link
              href={item.href}
              className={`media-showcase-card ${
                index === 0 ? "media-showcase-card-featured" : ""
              }`}
              key={item.href}
            >
              <MediaImage media={item.media} />
              <span className="media-showcase-overlay" aria-hidden="true" />
              <span className="media-showcase-content">
                <small>{item.label}</small>
                <strong>{item.media.title}</strong>
                <span>
                  Explore capability
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </Link>
          ))}
        </div>

        <p className="media-license-note">
          Photography is sourced from Unsplash under its free-use licence.
          Individual source details are documented in
          <code> MEDIA-LICENSES.md</code>.
        </p>
      </Container>
    </section>
  );
}
