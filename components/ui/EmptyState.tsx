import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({
  title,
  description,
  action,
  className = "",
}: Props) {
  return (
    <section className={`vikvar-empty-state ${className}`.trim()}>
      <h2>{title}</h2>
      <p>{description}</p>
      {action ? <div style={{ marginTop: "1.25rem" }}>{action}</div> : null}
    </section>
  );
}
