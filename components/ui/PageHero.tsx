import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24">
      <div className="hero-grid absolute inset-0 opacity-50" />
      <Container className="relative">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1565ff]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.045em] text-[#081a3a] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f6f84] sm:text-xl">
          {description}
        </p>
      </Container>
    </section>
  );
}
