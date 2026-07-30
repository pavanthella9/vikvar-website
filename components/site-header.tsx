"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const services = [
  ["IT Recruiting", "/services/it-recruiting"],
  ["Staff Augmentation", "/services/staff-augmentation"],
  ["Technology Consulting", "/services/technology-consulting"],
  ["Application Development", "/services/application-development"],
  ["Offshore Development", "/services/offshore-development"],
  ["Cloud & DevOps", "/services/cloud-devops"],
] as const;

const links = [
  ["About", "/about"],
  ["Industries", "/industries"],
  ["Careers", "/careers"],
] as const;

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Vikvar Technologies home">
      <span className="relative block h-10 w-10" aria-hidden="true">
        <span className="absolute left-1 top-1 h-8 w-3 -skew-x-[24deg] rounded-sm bg-blue-700" />
        <span className="absolute right-1 top-1 h-8 w-3 skew-x-[24deg] rounded-sm bg-gradient-to-b from-cyan-400 to-blue-600" />
      </span>
      <span>
        <span className="block text-xl font-bold tracking-[0.02em] text-[#0a1b3d]">VIKVAR</span>
        <span className="block text-[9px] font-semibold tracking-[0.28em] text-slate-500">TECHNOLOGIES</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          <Link href="/about" className={`text-sm font-semibold transition ${active("/about") ? "text-blue-700" : "text-slate-700 hover:text-blue-700"}`}>About</Link>
          <div className="group relative">
            <Link href="/services" className={`flex items-center gap-1 text-sm font-semibold transition ${active("/services") ? "text-blue-700" : "text-slate-700 hover:text-blue-700"}`}>
              Services <ChevronDown size={15} className="transition group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[620px] -translate-x-1/2 translate-y-3 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10">
                {services.map(([label, href], index) => (
                  <Link key={href} href={href} className="rounded-xl p-4 transition hover:bg-blue-50">
                    <span className="block text-sm font-bold text-[#081a3a]">{label}</span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500">{index < 2 ? "Build and scale high-performing technology teams." : "Turn business priorities into practical technology outcomes."}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {links.slice(1).map(([label, href]) => (
            <Link key={href} href={href} className={`text-sm font-semibold transition ${active(href) ? "text-blue-700" : "text-slate-700 hover:text-blue-700"}`}>{label}</Link>
          ))}
          <Link href="/contact" className="button button-primary py-3">Hire Talent</Link>
        </nav>
        <button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 lg:hidden" aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <Link href="/about" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold text-slate-800">About</Link>
            <button type="button" onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between rounded-lg px-3 py-3 text-left font-semibold text-slate-800">
              Services <ChevronDown size={18} className={servicesOpen ? "rotate-180" : ""} />
            </button>
            {servicesOpen && <div className="ml-3 border-l border-slate-200 pl-3">{services.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600">{label}</Link>)}</div>}
            {links.slice(1).map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold text-slate-800">{label}</Link>)}
            <Link href="/contact" onClick={() => setOpen(false)} className="button button-primary mt-3">Hire Talent</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
