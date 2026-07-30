import Link from "next/link";
import { Container } from "@/components/ui/Container";

const services = [
  ["IT Staffing & Recruiting", "/services/it-staffing-recruiting"],
  ["Staff Augmentation", "/services/staff-augmentation"],
  ["Cloud & DevOps", "/services/cloud-devops"],
  ["Application Development", "/services/application-development"],
  ["Offshore Development", "/services/offshore-development"],
];

export function SiteFooter() {
  return (
    <footer className="bg-[#071632] text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-2xl font-bold">Vikvar Technologies</p>
            <p className="mt-4 max-w-xl leading-7 text-white/65">
              A technology talent, cloud, and DevOps solutions partner helping
              organizations build high-performing teams and modern platforms.
            </p>
          </div>

          <div>
            <p className="font-bold">Company</p>
            <div className="mt-4 space-y-3 text-sm text-white/65">
              <Link className="block hover:text-white" href="/about">About</Link>
              <Link className="block hover:text-white" href="/industries">Industries</Link>
              <Link className="block hover:text-white" href="/careers">Careers</Link>
              <Link className="block hover:text-white" href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <p className="font-bold">Services</p>
            <div className="mt-4 space-y-3 text-sm text-white/65">
              {services.map(([label, href]) => (
                <Link key={href} className="block hover:text-white" href={href}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vikvar Technologies. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
