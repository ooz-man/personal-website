
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://personal-website-tau-ten-68.vercel.app";

  const routes = [
    "",
    "/about",
    "/cmr-group",
    "/cmr-labs",
    "/ventures",
    "/projects",
    "/research",
    "/insights",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
