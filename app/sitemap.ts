import type { MetadataRoute } from "next";
import { caseStudies } from "@/components/case-studies/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vikvartech.com";
  const routes = ["", "/about", "/industries", "/careers", "/contact", "/privacy", "/terms", "/faq", "/resources", "/testimonials", "/case-studies", "/services/it-recruiting", "/services/staff-augmentation", "/services/technology-consulting", "/services/application-development", "/services/offshore-development", "/services/cloud-devops"];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...caseStudies.map((study) => ({ url: `${base}/case-studies/${study.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 }))
  ];
}
