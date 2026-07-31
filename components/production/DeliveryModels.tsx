import {
  BriefcaseBusiness,
  Boxes,
  Compass,
  FolderKanban,
  UsersRound,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const models = [
  {
    icon: BriefcaseBusiness,
    title: "IT Recruiting",
    description:
      "Focused hiring support for specialised technology roles and team expansion.",
  },
  {
    icon: UsersRound,
    title: "Staff Augmentation",
    description:
      "Individual specialists and extended teams integrated with client delivery.",
  },
  {
    icon: Compass,
    title: "Technology Consulting",
    description:
      "Assessment, architecture, modernisation planning, and delivery improvement.",
  },
  {
    icon: FolderKanban,
    title: "Project Delivery",
    description:
      "Defined outcomes, responsibilities, milestones, governance, and execution.",
  },
  {
    icon: Boxes,
    title: "Dedicated Teams",
    description:
      "Stable cross-functional delivery capacity aligned to products or programmes.",
  },
  {
    icon: Workflow,
    title: "Offshore Development",
    description:
      "Distributed engineering supported by clear communication and governance.",
  },
];

export function DeliveryModels() {
  return (
    <section className="production-section production-models">
      <Container>
        <div className="production-heading">
          <div>
            <p className="production-eyebrow">Engagement Models</p>
            <h2>Choose a delivery structure that fits the requirement</h2>
          </div>
          <p>
            Start with one focused capability or combine multiple models as the
            programme, team, or technology environment evolves.
          </p>
        </div>

        <div className="production-model-grid">
          {models.map(({ icon: Icon, title, description }) => (
            <article key={title} className="production-model-card">
              <div>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
