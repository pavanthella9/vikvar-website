import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { servicePages } from "@/components/services/service-data";
import "@/app/service-pages.css";

export const metadata: Metadata = {
  title: "Offshore Development",
  description:
    "Offshore and distributed engineering teams supported by clear governance, communication, and delivery ownership.",
  alternates: { canonical: "/services/offshore-development" },
};

export default function Page() {
  return <ServicePageTemplate data={servicePages["offshore-development"]} />;
}
