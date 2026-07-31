type Props = {
  value: string;
  label: string;
  className?: string;
};

export function StatisticCard({
  value,
  label,
  className = "",
}: Props) {
  return (
    <article className={`vikvar-stat-card vikvar-lift ${className}`.trim()}>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}
