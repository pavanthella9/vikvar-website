import Link from "next/link";
import { Container } from "@/components/ui/Container";

const capabilities = [
  "Cloud & DevOps",
  "Digital Engineering",
  "Data & AI",
  "Technology Workforce",
];

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#f7f9fc] pt-36 sm:pt-40">
      <div className="hero-glow absolute inset-0 -z-30" />
      <div className="hero-grid absolute inset-0 -z-20 opacity-80" />
      <div className="absolute left-1/2 top-36 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/50 blur-3xl" />

      <Container className="grid items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cddcf2] bg-white/80 px-4 py-2 text-sm font-semibold text-[#284065] shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full brand-gradient" />
            Engineering progress through technology
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-[#081a3a] sm:text-6xl lg:text-7xl">
            Build smarter.
            <br />
            Scale faster.
            <br />
            <span className="text-gradient">Move forward.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5b6b82] sm:text-xl">
            Vikvar Technologies helps organizations modernize platforms,
            strengthen engineering teams, and deliver reliable digital
            solutions with speed and clarity.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="focus-ring inline-flex min-h-13 items-center justify-center rounded-xl brand-gradient px-6 py-4 text-base font-bold text-white shadow-[0_14px_30px_rgba(21,101,255,0.26)] transition hover:-translate-y-0.5"
            >
              Start a Conversation
            </Link>
            <Link
              href="#services"
              className="focus-ring inline-flex min-h-13 items-center justify-center rounded-xl border border-[#c7d5e8] bg-white px-6 py-4 text-base font-bold text-[#0a1b3d] transition hover:-translate-y-0.5 hover:border-[#1565ff]"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {capabilities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#dbe4f0] bg-white/70 px-4 py-2 text-sm font-semibold text-[#50617a]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -inset-8 -z-10 rounded-[48px] bg-gradient-to-br from-[#1565ff]/18 to-[#00c6ff]/12 blur-3xl" />

          <div className="rounded-[32px] border border-white/80 bg-white/82 p-5 shadow-[0_30px_80px_rgba(8,26,58,0.14)] backdrop-blur-xl sm:p-7">
            <div className="rounded-[24px] bg-[#081a3a] p-6 text-white sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white/60">
                    VIKVAR DELIVERY MODEL
                  </p>
                  <p className="mt-1 text-xl font-bold">From idea to impact</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl brand-gradient text-xl font-black">
                  V
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ["01", "Discover", "Clarify goals, users and business outcomes."],
                  ["02", "Engineer", "Design secure, scalable technology solutions."],
                  ["03", "Deliver", "Launch, optimize and support measurable growth."],
                ].map(([number, title, body]) => (
                  <div
                    key={number}
                    className="grid grid-cols-[44px_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-[#54d7ff]">
                      {number}
                    </div>
                    <div>
                      <h2 className="font-bold">{title}</h2>
                      <p className="mt-1 text-sm leading-6 text-white/60">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="rounded-2xl border border-[#e2e9f2] bg-[#f8fbff] p-4">
                <p className="text-xs font-bold tracking-[0.12em] text-[#6a7b92]">
                  APPROACH
                </p>
                <p className="mt-2 font-bold text-[#0a1b3d]">
                  Outcome-focused
                </p>
              </div>
              <div className="rounded-2xl border border-[#e2e9f2] bg-[#f8fbff] p-4">
                <p className="text-xs font-bold tracking-[0.12em] text-[#6a7b92]">
                  DELIVERY
                </p>
                <p className="mt-2 font-bold text-[#0a1b3d]">
                  Built to scale
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-y border-[#e4eaf2] bg-white/75 py-5 backdrop-blur">
        <Container>
          <p className="text-center text-sm font-semibold tracking-[0.12em] text-[#6d7d92]">
            TECHNOLOGY CONSULTING · ENGINEERING · CLOUD · DATA · TALENT
          </p>
        </Container>
      </div>
    </section>
  );
}
