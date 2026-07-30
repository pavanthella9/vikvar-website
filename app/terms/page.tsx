import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export default function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Vikvar Technologies"
        title="Terms of Use"
        description="Our website terms are being prepared."
      />
      <section className="bg-white py-24">
        <Container>
          <div className="rounded-[28px] border border-[#e1e8f1] bg-[#fbfdff] p-8">
            <p className="text-lg leading-8 text-[#617086]">
              Detailed content and functionality will be added in the next sprint.
            </p>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
