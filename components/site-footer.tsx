import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const services = [
  ["IT Recruiting", "/services/it-recruiting"],
  ["Staff Augmentation", "/services/staff-augmentation"],
  ["Technology Consulting", "/services/technology-consulting"],
  ["Application Development", "/services/application-development"],
  ["Offshore Development", "/services/offshore-development"],
  ["Cloud & DevOps", "/services/cloud-devops"],
] as const;

const companyLinks = [
  ["About", "/about"],
  ["Industries", "/industries"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
] as const;

const legalLinks = [
  ["Privacy Policy", "/privacy"],
  ["Terms of Use", "/terms"],
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#06152d] text-white">
      <div className="site-container grid gap-12 py-16 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
        <div>
          <Link href="/" aria-label="Vikvar Technologies home">
            <p className="text-2xl font-bold tracking-wide">VIKVAR</p>
            <p className="mt-1 text-xs tracking-[0.28em] text-slate-400">
              TECHNOLOGIES
            </p>
          </Link>

          <p className="mt-6 max-w-md leading-7 text-slate-400">
            IT recruiting, staff augmentation, technology consulting, and
            application development solutions for organizations building
            capable technology teams.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <a
              href="mailto:info@vikvartech.com"
              className="flex items-center gap-3 text-slate-400 transition hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              info@vikvartech.com
            </a>
            <a
              href="tel:+16094234288"
              className="flex items-center gap-3 text-slate-400 transition hover:text-white"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              +1 (609) 423-4288
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Services</h2>
          <div className="mt-5 flex flex-col gap-3">
            {services.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Company</h2>
          <div className="mt-5 flex flex-col gap-3">
            {companyLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>

          <h2 className="mt-8 font-semibold">Legal</h2>
          <div className="mt-5 flex flex-col gap-3">
            {legalLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Office Locations</h2>

          <div className="mt-5 space-y-6 text-sm leading-6 text-slate-400">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <address className="not-italic">
                <strong className="block font-semibold text-slate-200">
                  VIKVAR Technologies LLC
                </strong>
                5900 Balcones Drive, Suite 100
                <br />
                Austin, TX 78731
                <br />
                United States
              </address>
            </div>

            <div className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <address className="not-italic">
                <strong className="block font-semibold text-slate-200">
                  VIKVAR Technologies
                </strong>
                3rd Floor, KNR Square
                <br />
                Opp. The Platina
                <br />
                Gachibowli, Kondapur
                <br />
                Hyderabad, Telangana 500032
                <br />
                India
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-3 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vikvar Technologies. All rights reserved.</p>
          <p>Technology talent. Flexible delivery. Lasting partnerships.</p>
        </div>
      </div>
    </footer>
  );
}
