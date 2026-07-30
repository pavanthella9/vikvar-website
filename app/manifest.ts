import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vikvar Technologies",
    short_name: "Vikvar",
    description:
      "IT recruiting, staff augmentation, technology consulting, application development, offshore development, cloud, and DevOps services.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071a3d",
  };
}
