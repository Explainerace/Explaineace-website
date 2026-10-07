import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const staticPages = [
    "",
    "/work",
    "/services",
    "/services/saas-walkthrough-video",
    "/services/screencast-tutorials",
    "/services/app-demo-video",
    "/services/ai-ugc-ads",
    "/pricing",
    "/blog",
    "/about",
    "/process",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority:
      route === ""
        ? 1.0
        : route.startsWith("/services/")
        ? 0.9
        : route === "/blog" || route === "/services"
        ? 0.85
        : 0.8,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/work/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...projectPages];
}
