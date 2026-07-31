import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: Props) {
  return (
    <div className={`vikvar-page-shell ${className}`.trim()}>
      {children}
    </div>
  );
}
