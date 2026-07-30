"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  CloudCog,
  Code2,
  Globe2,
  Menu,
  Network,
  Search,
  Users,
  X,
} from "lucide-react";

const serviceLinks = [
  {
    href: "/services/it-recruiting",
    label: "IT Recruiting",
    description: "Find qualified technology professionals across key skill areas.",
    icon: BriefcaseBusiness,
  },
  {
    href: "/services/staff-augmentation",
    label: "Staff Augmentation",
    description: "Extend delivery capacity with flexible technology talent.",
    icon: Users,
  },
  {
    href: "/services/technology-consulting",
    label: "Technology Consulting",
    description: "Plan and execute technology initiatives with expert guidance.",
    icon: Network,
  },
  {
    href: "/services/application-development",
    label: "Application Development",
    description: "Build modern, reliable, and scalable software applications.",
    icon: Code2,
  },
  {
    href: "/services/offshore-development",
    label: "Offshore Development",
    description: "Create efficient distributed engineering and delivery teams.",
    icon: Globe2,
  },
  {
    href: "/services/cloud-devops",
    label: "Cloud & DevOps",
    description: "Modernize cloud platforms, automation, and delivery workflows.",
    icon: CloudCog,
  },
] as const;

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const servicesActive = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-100"
          aria-label="Vikvar Technologies home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071a3d] text-sm font-black tracking-tight text-white">
            VT
          </div>
          <div>
            <p className="text-base font-bold tracking-tight text-slate-950">
              VIKVAR
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Technologies
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          <Link
            href="/"
            className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
              pathname === "/"
                ? "bg-blue-50 text-blue-800"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            Home
          </Link>

          <div ref={servicesRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((current) => !current)}
              aria-expanded={servicesOpen}
              aria-controls="desktop-services-menu"
              className={`inline-flex items-center gap-1 rounded-lg px-4 py-3 text-sm font-semibold transition ${
                servicesActive
                  ? "bg-blue-50 text-blue-800"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen ? (
              <div
                id="desktop-services-menu"
                className="absolute left-1/2 top-full mt-3 w-[760px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl"
              >
                <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      Technology Services
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Talent, consulting, engineering, and delivery capabilities.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    Discuss a requirement
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {serviceLinks.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`group flex gap-4 rounded-xl p-4 transition ${
                          active ? "bg-blue-50" : "hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition group-hover:bg-blue-100">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-950">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          {companyLinks.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-50 text-blue-800"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/search"
            aria-label="Search website"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition ${
              pathname === "/search"
                ? "bg-blue-50 text-blue-800"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Talk to our team
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-slate-800 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-6 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-7xl space-y-2">
            <Link
              href="/"
              className={`block rounded-lg px-4 py-3 font-semibold ${
                pathname === "/"
                  ? "bg-blue-50 text-blue-800"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              Home
            </Link>

            <div className="rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setServicesOpen((current) => !current)}
                aria-expanded={servicesOpen}
                className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left font-semibold text-slate-950"
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {servicesOpen ? (
                <div className="space-y-1 border-t border-slate-200 p-3">
                  {serviceLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                      >
                        <Icon className="h-4 w-4 text-blue-700" aria-hidden="true" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {companyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-4 py-3 font-semibold ${
                  pathname === item.href
                    ? "bg-blue-50 text-blue-800"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/search"
              className={`flex items-center gap-3 rounded-lg px-4 py-3 font-semibold ${
                pathname === "/search"
                  ? "bg-blue-50 text-blue-800"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              <Search className="h-5 w-5 text-blue-700" aria-hidden="true" />
              Search website
            </Link>

            <div className="pt-3">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
              >
                <Building2 className="h-5 w-5" aria-hidden="true" />
                Talk to our team
              </Link>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
