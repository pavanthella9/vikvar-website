import Link from "next/link";
import {
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  footerCompany,
  footerResources,
  footerServices,
} from "@/components/navigation/navigation-data";
import styles from "./site-shell.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Container>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <Link href="/" className={styles.brand} aria-label="Vikvar Technologies home">
                <span className={styles.brandMark} aria-hidden="true">
                  V
                </span>
                <span className={styles.brandText}>
                  <strong>VIKVAR</strong>
                  <span>Technologies</span>
                </span>
              </Link>

              <p className={styles.footerIntro}>
                Technology recruiting, staff augmentation, consulting,
                application development, offshore delivery, cloud, and DevOps
                services for organisations across global markets.
              </p>

              <div className={styles.footerContact}>
                <a href="mailto:info@vikvartech.com">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>info@vikvartech.com</span>
                </a>
                <a href="tel:+16094234288">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>+1 (609) 423-4288</span>
                </a>
                <span>
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                  <span>VIKVAR Technologies LLC</span>
                </span>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h2>Services</h2>
              <div className={styles.footerLinks}>
                {footerServices.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h2>Company</h2>
              <div className={styles.footerLinks}>
                {footerCompany.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>

              <h2 style={{ marginTop: "2rem" }}>Resources</h2>
              <div className={styles.footerLinks}>
                {footerResources.slice(0, 3).map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h2>Global Offices</h2>
              <div className={styles.officeGrid}>
                <div className={styles.officeCard}>
                  <strong>United States</strong>
                  <p>
                    5900 Balcones Drive, Suite 100
                    <br />
                    Austin, TX 78731
                  </p>
                </div>
                <div className={styles.officeCard}>
                  <strong>India</strong>
                  <p>
                    3rd Floor, KNR Square
                    <br />
                    Gachibowli, Kondapur
                    <br />
                    Hyderabad, Telangana 500032
                  </p>
                </div>
              </div>

              <div className={styles.footerContact}>
                <span>
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>Serving clients across global markets</span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.footerBottom}>
        <Container>
          <div className={styles.footerBottomInner}>
            <p>© {year} Vikvar Technologies. All rights reserved.</p>
            <div className={styles.footerLegal}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
              <Link href="/sitemap.xml">Sitemap</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default SiteFooter;
