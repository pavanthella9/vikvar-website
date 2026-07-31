import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { servicePages } from "@/components/services/service-data";
import "@/app/service-pages.css";

export const metadata: Metadata = {
  title: "Staff Augmentation",
  description:
    "Flexible technology staff augmentation for individual specialists and coordinated delivery teams.",
  alternates: { canonical: "/services/staff-augmentation" },
};

export default function Page() {
  return <ServicePageTemplate data={servicePages["staff-augmentation"]} />;
}
