import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <div className="mt-4 flex h-[72px] items-center justify-between rounded-2xl border border-white/80 bg-white/88 px-4 shadow-[0_12px_40px_rgba(8,26,58,0.08)] backdrop-blur-xl sm:px-6">
          <Link
            href="/"
            aria-label="Vikvar Technologies home"
            className="focus-ring rounded-lg"
          >
            <Image
              src="/logos/vikvar-logo.svg"
              alt="Vikvar Technologies"
              width={235}
              height={58}
              priority
              className="h-auto w-[180px] sm:w-[205px]"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md text-sm font-semibold text-[#31415f] transition hover:text-[#1565ff]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="focus-ring inline-flex min-w-[118px] items-center justify-center rounded-xl bg-gradient-to-r from-[#1565ff] to-[#00aef0] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(21,101,255,0.24)] transition hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </Container>
    </header>
  );
}
