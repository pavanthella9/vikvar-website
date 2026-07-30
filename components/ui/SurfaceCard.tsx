import type { ElementType, ReactNode } from "react";

type SurfaceCardProps = {
  as?: ElementType;
  icon?: ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function SurfaceCard({
  as: Component = "article",
  icon,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SurfaceCardProps) {
  return (
    <Component
      data-surface-card
      className={`rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 ${className}`}
    >
      {icon ? (
        <div
          data-icon-tile
          className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700"
        >
          {icon}
        </div>
      ) : null}

      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
          {eyebrow}
        </p>
      ) : null}

      <h3 className={`${eyebrow ? "mt-3" : ""} text-xl font-bold text-slate-950`}>
        {title}
      </h3>

      {description ? (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      ) : null}

      {children ? <div className="mt-6">{children}</div> : null}
    </Component>
  );
}
