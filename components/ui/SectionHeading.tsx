type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl text-left";

  return (
    <div className={alignment}>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1565ff]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-[#081a3a] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-[#5f6f84]">{description}</p>
      ) : null}
    </div>
  );
}
