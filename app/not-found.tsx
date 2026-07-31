import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Container>
        <div className="not-found-card">
          <p className="not-found-code">404</p>
          <p className="not-found-eyebrow">Page not found</p>
          <h1>The page you requested is unavailable</h1>
          <p className="not-found-description">
            The address may have changed, the page may have been removed, or the
            link may be incomplete. Continue to the homepage or explore Vikvar’s
            services.
          </p>

          <div className="not-found-actions">
            <Link href="/" className="not-found-primary">
              <Home className="h-4 w-4" aria-hidden="true" />
              Return home
            </Link>
            <Link href="/services" className="not-found-secondary">
              <Search className="h-4 w-4" aria-hidden="true" />
              Explore services
            </Link>
          </div>

          <Link href="/contact" className="not-found-contact">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Contact Vikvar about a requirement
          </Link>
        </div>
      </Container>
    </main>
  );
}
