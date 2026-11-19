import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function sitemap() {
  const baseUrl = "https://ayesha-ahmad-khan.vercel.app";

  // 1. Homepage
  const routes = [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];

  // 2. Service Pages (5 Core Services)
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // 3. Project Case Study Pages (10 Case Studies)
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes, ...projectRoutes];
}
