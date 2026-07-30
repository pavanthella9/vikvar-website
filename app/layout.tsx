import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipToContent } from "@/components/ui/SkipToContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://vikvartech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vikvar Technologies | IT Recruiting & Staff Augmentation",
    template: "%s | Vikvar Technologies",
  },
  description:
    "Vikvar Technologies provides IT recruiting, staff augmentation, technology consulting, application development, offshore development, cloud, and DevOps services.",
  applicationName: "Vikvar Technologies",
  keywords: [
    "IT recruiting",
    "IT staffing",
    "staff augmentation",
    "technology consulting",
    "application development",
    "offshore development",
    "cloud consulting",
    "DevOps services",
    "technology talent",
  ],
  authors: [{ name: "Vikvar Technologies", url: siteUrl }],
  creator: "Vikvar Technologies",
  publisher: "Vikvar Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vikvar Technologies",
    title: "Vikvar Technologies | IT Recruiting & Staff Augmentation",
    description:
      "Build stronger technology teams through IT recruiting, staff augmentation, consulting, engineering, and offshore delivery services.",
  },
  twitter: {
    card: "summary",
    title: "Vikvar Technologies | IT Recruiting & Staff Augmentation",
    description:
      "IT recruiting, staff augmentation, consulting, engineering, offshore delivery, cloud, and DevOps services.",
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071a3d",
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vikvar Technologies",
  url: siteUrl,
  email: "info@vikvartech.com",
  description:
    "Vikvar Technologies provides IT recruiting, staff augmentation, technology consulting, application development, offshore development, cloud, and DevOps services.",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "Malaysia" },
  ],
  knowsAbout: [
    "IT Recruiting",
    "Staff Augmentation",
    "Technology Consulting",
    "Application Development",
    "Offshore Development",
    "Cloud Computing",
    "DevOps",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vikvar Technologies",
  url: siteUrl,
  description:
    "IT recruiting, staff augmentation, technology consulting, application development, offshore delivery, cloud, and DevOps services.",
  publisher: {
    "@type": "Organization",
    name: "Vikvar Technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <SkipToContent />
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
