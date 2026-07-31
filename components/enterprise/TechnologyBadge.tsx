import type { ReactNode } from "react";

export function TechnologyBadge({ children }: { children: ReactNode }) {
  return <span className="v-tech-badge">{children}</span>;
}
