import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { servicePages } from "@/components/services/service-data";
import "@/app/service-pages.css";

export const metadata: Metadata = {
  title: "Cloud & DevOps",
  description:
    "Cloud foundations, infrastructure automation, CI/CD, Kubernetes, observability, reliability, and DevSecOps support.",
  alternates: { canonical: "/services/cloud-devops" },
};

export default function Page() {
  return <ServicePageTemplate data={servicePages["cloud-devops"]} />;
}
