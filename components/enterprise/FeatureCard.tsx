import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function FeatureCard({
  title,
  description,
  href,
  icon: Icon,
}: Props) {
  return (
    <article className="v-feature-card">
      <div className="v-feature-icon">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={href}>
        Learn more
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
