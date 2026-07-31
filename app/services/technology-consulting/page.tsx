import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { servicePages } from "@/components/services/service-data";
import "@/app/service-pages.css";

export const metadata: Metadata = {
  title: "Technology Consulting",
  description:
    "Practical technology consulting for architecture, modernisation, transformation planning, operating models, and delivery improvement.",
  alternates: { canonical: "/services/technology-consulting" },
};

export default function Page() {
  return <ServicePageTemplate data={servicePages["technology-consulting"]} />;
}
