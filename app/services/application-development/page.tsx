import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { servicePages } from "@/components/services/service-data";
import "@/app/service-pages.css";

export const metadata: Metadata = {
  title: "Application Development",
  description:
    "Application design, development, modernisation, integration, testing, and support across web, mobile, API, and enterprise environments.",
  alternates: { canonical: "/services/application-development" },
};

export default function Page() {
  return <ServicePageTemplate data={servicePages["application-development"]} />;
}
