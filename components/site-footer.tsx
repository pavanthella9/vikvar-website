import Link from "next/link";
import { LinkIcon, Mail, MapPin } from "lucide-react";

const services = [
  ["IT Recruiting", "/services/it-recruiting"],
  ["Staff Augmentation", "/services/staff-augmentation"],
  ["Technology Consulting", "/services/technology-consulting"],
  ["Application Development", "/services/application-development"],
  ["Offshore Development", "/services/offshore-development"],
  ["Cloud & DevOps", "/services/cloud-devops"],
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#06142f] text-white">
      <div className="site-container py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1.2fr_1.1fr]">
          <div>
            <p className="text-2xl font-bold tracking-wide">VIKVAR</p>
            <p className="mt-1 text-xs font-semibold tracking-[0.24em] text-blue-300">TECHNOLOGIES</p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">Vikvar Technologies helps organizations recruit exceptional IT talent, scale delivery teams, and execute technology initiatives with confidence.</p>
            <a href="mailto:info@vikvartech.com" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300"><Mail size={17} /> info@vikvartech.com</a>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Company</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
              <Link href="/about">About Us</Link><Link href="/industries">Industries</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Services</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">{services.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Global Delivery</h2>
            <p className="mt-5 flex gap-2 text-sm leading-6 text-slate-300"><MapPin size={18} className="mt-0.5 shrink-0" /> Supporting clients across the USA, India, UAE, Singapore, and Malaysia.</p>
            <a href="#" aria-label="LinkedIn" className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 hover:bg-white/10"><LinkIcon size={18} /></a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vikvar Technologies LLC. All rights reserved.</p>
          <div className="flex gap-5"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link></div>
        </div>
      </div>
    </footer>
  );
}
