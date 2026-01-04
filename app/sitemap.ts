import { MetadataRoute } from "next";
import { projects } from "./data/projects";
import cities from "./data/cities.json";
import { SERVICE_CONFIG } from "./data/service-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agenciagenios.com.br";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/planos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/portfolio/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const cityRoutes = cities.flatMap((city) => {
    return Object.values(SERVICE_CONFIG).map((service) => {
      const citySlug = city.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");

      return {
        url: `${baseUrl}/${service.slugPrefix}-em-${citySlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    });
  });

  return [...staticRoutes, ...cityRoutes];
}