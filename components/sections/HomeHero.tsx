import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f9fc] py-20 sm:py-24">
      <div className="hero-glow absolute inset-0 -z-30" />
      <div className="hero-grid absolute inset-0 -z-20 opacity-70" />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-[#cddcf2] bg-white/80 px-4 py-2 text-sm font-semibold text-[#284065]">
            Technology talent · Cloud · DevOps
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-[#081a3a] sm:text-6xl lg:text-7xl">
            Connecting great talent.
            <br />
            <span className="text-gradient">Engineering better technology.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5b6b82] sm:text-xl">
            Vikvar Technologies delivers IT staffing, recruitment, cloud,
            DevOps, and digital engineering solutions that help organizations
            build stronger teams and accelerate growth.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?type=hire-talent"
              className="focus-ring inline-flex min-h-13 items-center justify-center rounded-xl brand-gradient px-6 py-4 text-base font-bold text-white shadow-[0_14px_30px_rgba(21,101,255,0.26)] transition hover:-translate-y-0.5"
            >
              Hire Technology Talent
            </Link>
            <Link
              href="/services/cloud-devops"
              className="focus-ring inline-flex min-h-13 items-center justify-center rounded-xl border border-[#c7d5e8] bg-white px-6 py-4 text-base font-bold text-[#0a1b3d] transition hover:-translate-y-0.5 hover:border-[#1565ff]"
            >
              Explore Cloud & DevOps
            </Link>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/80 bg-white/85 p-6 shadow-[0_30px_80px_rgba(8,26,58,0.14)] backdrop-blur-xl sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1565ff]">
            Two strengths. One partner.
          </p>
          <div className="mt-6 grid gap-4">
            <div className="rounded-3xl bg-[#081a3a] p-6 text-white">
              <p className="text-sm font-bold text-[#55d8ff]">Talent Solutions</p>
              <h2 className="mt-3 text-2xl font-bold">Build the right team</h2>
              <p className="mt-3 leading-7 text-white/65">
                Contract staffing, permanent recruitment, staff augmentation,
                and dedicated offshore teams.
              </p>
            </div>

            <div className="rounded-3xl border border-[#dbe5f1] bg-[#f8fbff] p-6">
              <p className="text-sm font-bold text-[#1565ff]">Cloud & DevOps</p>
              <h2 className="mt-3 text-2xl font-bold text-[#081a3a]">
                Modernize delivery
              </h2>
              <p className="mt-3 leading-7 text-[#64748b]">
                AWS, Kubernetes, CI/CD, Terraform, GitOps, observability, and
                DevSecOps implementation services.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
