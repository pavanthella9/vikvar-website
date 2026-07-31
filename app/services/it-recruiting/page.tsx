import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { servicePages } from "@/components/services/service-data";
import "@/app/service-pages.css";

export const metadata: Metadata = {
  title: "IT Recruiting",
  description:
    "Technology recruiting services for specialised roles across software engineering, cloud, DevOps, SAP, QA, cybersecurity, data, and mobile.",
  alternates: { canonical: "/services/it-recruiting" },
};

export default function Page() {
  return <ServicePageTemplate data={servicePages["it-recruiting"]} />;
}
