import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-white pb-24 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-[#1565ff] px-7 py-14 text-white sm:px-10 lg:px-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#00c6ff]/35 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">
                Start your next initiative
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                Let&apos;s turn your technology priorities into progress.
              </h2>
            </div>
            <Link
              href="mailto:info@vikvartech.com"
              className="focus-ring inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-7 py-4 font-bold text-[#0a1b3d] transition hover:-translate-y-0.5"
            >
              Contact Vikvar
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
