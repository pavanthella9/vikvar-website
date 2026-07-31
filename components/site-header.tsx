"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { primaryNavigation } from "@/components/navigation/navigation-data";
import styles from "./site-shell.module.css";

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const mobileMenuId = useId();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null,
  );

  useEffect(() => {
    setMobileOpen(false);
    setExpandedMobileItem(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>

      <header className={styles.header}>
        <div className={styles.utilityBar}>
          <Container>
            <div className={styles.utilityInner}>
              <div className={styles.utilityContact}>
                <span>
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  Hyderabad, India
                </span>
                <a href="mailto:info@vikvartech.com">
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  info@vikvartech.com
                </a>
                <a href="tel:+16094234288">
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  +1 (609) 423-4288
                </a>
              </div>

              <div className={styles.utilityGlobal}>
                <span>We serve clients worldwide</span>
                <a
                  href="https://www.linkedin.com/company/vik-tech-solutions/"
                  aria-label="Vikvar Technologies on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.linkedinBadge} aria-hidden="true">in</span>
                </a>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className={styles.headerInner}>
            <Link
              href="/"
              className={styles.brand}
              aria-label="Vikvar Technologies home"
            >
              <Image
                src="/brand/vikvar-logo-primary.png"
                alt="Vikvar Technologies"
                width={430}
                height={120}
                priority
                className={styles.brandLogo}
              />
            </Link>

            <nav className={styles.desktopNav} aria-label="Primary navigation">
              {primaryNavigation.map((item) => {
                const active = isCurrentPath(pathname, item.href);

                return (
                  <div className={styles.navItem} key={item.href}>
                    {item.children ? (
                      <>
                        <Link
                          href={item.href}
                          className={`${styles.navTrigger} ${
                            active ? styles.active : ""
                          }`}
                          aria-current={active ? "page" : undefined}
                        >
                          {item.label}
                          <ChevronDown
                            className={`${styles.chevron} h-4 w-4`}
                            aria-hidden="true"
                          />
                        </Link>

                        <div className={styles.megaMenu}>
                          <div className={styles.megaGrid}>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={styles.megaLink}
                              >
                                <strong>{child.label}</strong>
                                {child.description ? (
                                  <span>{child.description}</span>
                                ) : null}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`${styles.navLink} ${
                          active ? styles.active : ""
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            <Link href="/contact" className={styles.headerCta}>
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <button
              type="button"
              className={styles.mobileButton}
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMobileOpen((current) => !current)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>

        {mobileOpen ? (
          <div id={mobileMenuId} className={styles.mobilePanel}>
            <Container>
              <div className={styles.mobileInner}>
                <nav className={styles.mobileNav} aria-label="Mobile navigation">
                  {primaryNavigation.map((item) => {
                    const active = isCurrentPath(pathname, item.href);
                    const expanded = expandedMobileItem === item.href;

                    return (
                      <div key={item.href}>
                        <div className={styles.mobileRow}>
                          <Link
                            href={item.href}
                            className={`${styles.mobileLink} ${
                              active ? styles.active : ""
                            }`}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.label}
                          </Link>

                          {item.children ? (
                            <button
                              type="button"
                              className={styles.mobileToggle}
                              aria-expanded={expanded}
                              aria-label={`${expanded ? "Collapse" : "Expand"} ${
                                item.label
                              } links`}
                              onClick={() =>
                                setExpandedMobileItem(expanded ? null : item.href)
                              }
                            >
                              <ChevronDown
                                className="h-4 w-4"
                                aria-hidden="true"
                                style={{
                                  transform: expanded
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                }}
                              />
                            </button>
                          ) : null}
                        </div>

                        {item.children && expanded ? (
                          <div className={styles.mobileSubmenu}>
                            {item.children.map((child) => (
                              <Link key={child.href} href={child.href}>
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </nav>

                <Link href="/contact" className={styles.mobileCta}>
                  Discuss your requirement
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Container>
          </div>
        ) : null}
      </header>
    </>
  );
}

export default SiteHeader;
