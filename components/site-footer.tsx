import Link from "next/link";

const services = [
  ["IT Recruiting", "/services/it-recruiting"],
  ["Staff Augmentation", "/services/staff-augmentation"],
  ["Technology Consulting", "/services/technology-consulting"],
  ["Application Development", "/services/application-development"],
  ["Offshore Development", "/services/offshore-development"],
  ["Cloud & DevOps", "/services/cloud-devops"],
];

export function SiteFooter() {
  return (
    <footer className="bg-[#06152d] text-white">
      <div className="site-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-2xl font-bold tracking-wide">VIKVAR</p>
          <p className="mt-1 text-xs tracking-[0.28em] text-slate-400">
            TECHNOLOGIES
          </p>
          <p className="mt-6 max-w-lg leading-7 text-slate-400">
            IT recruiting, staff augmentation, technology consulting, and
            application development solutions for organizations building
            capable technology teams.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Services</h3>
          <div className="mt-5 flex flex-col gap-3">
            {services.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-400 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Company</h3>
          <div className="mt-5 flex flex-col gap-3">
            {[
              ["About", "/about"],
              ["Industries", "/industries"],
              ["Careers", "/careers"],
              ["Contact", "/contact"],
              ["Privacy", "/privacy"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-400 hover:text-white"
              >
                {label}
              </Link>
            ))}
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
