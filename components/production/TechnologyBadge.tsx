type TechnologyBadgeProps = {
  name: string;
  abbreviation: string;
  category: string;
};

export function TechnologyBadge({
  name,
  abbreviation,
  category,
}: TechnologyBadgeProps) {
  return (
    <article className="enterprise-tech-badge">
      <span aria-hidden="true">{abbreviation}</span>
      <strong>{name}</strong>
      <small>{category}</small>
    </article>
  );
}
