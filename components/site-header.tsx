"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Vikvar Technologies home">
      <span className="relative block h-10 w-10">
        <span className="absolute left-1 top-1 h-8 w-3 -skew-x-[24deg] rounded-sm bg-blue-700" />
        <span className="absolute right-1 top-1 h-8 w-3 skew-x-[24deg] rounded-sm bg-gradient-to-b from-cyan-400 to-blue-600" />
      </span>
      <span>
        <span className="block text-xl font-bold tracking-[0.02em] text-[#0a1b3d]">
          VIKVAR
        </span>
        <span className="block text-[9px] font-semibold tracking-[0.28em] text-slate-500">
          TECHNOLOGIES
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="site-container flex h-20 items-center justify-between">
        <Brand />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-700"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="button button-primary py-3">
            Submit Requirement
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="button button-primary mt-2"
            >
              Submit Requirement
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
