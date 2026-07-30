import type { MetadataRoute } from "next";

const baseUrl = "https://vikvartech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services/it-recruiting",
    "/services/staff-augmentation",
    "/services/technology-consulting",
    "/services/application-development",
    "/services/offshore-development",
    "/services/cloud-devops",
    "/industries",
    "/careers",
    "/contact",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.9 : 0.8,
  }));
}
