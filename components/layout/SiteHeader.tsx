import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5ebf3] bg-white/92 backdrop-blur-xl">
      <Container>
        <div className="flex h-[78px] items-center justify-between">
          <Link href="/" aria-label="Vikvar Technologies home" className="focus-ring rounded-lg">
            <Image
              src="/logos/vikvar-logo.svg"
              alt="Vikvar Technologies"
              width={235}
              height={58}
              priority
              className="h-auto w-[185px] sm:w-[205px]"
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

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="focus-ring hidden rounded-xl border border-[#c9d7e9] px-4 py-3 text-sm font-bold text-[#0a1b3d] transition hover:border-[#1565ff] sm:inline-flex"
            >
              Contact
            </Link>
            <Link
              href="/contact?type=hire-talent"
              className="focus-ring inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#1565ff] to-[#00aef0] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(21,101,255,0.24)] transition hover:-translate-y-0.5"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
