import { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { SERVICE_CONFIG } from "./data/service-config";
import cities from "./data/cities.json";

export async function generateSitemaps() {
  // Static sitemap (id: "static")
  const sitemaps = [{ id: "static" }];

  // Dynamic sitemaps per service
  for (const key of Object.keys(SERVICE_CONFIG)) {
    sitemaps.push({ id: key });
  }

  return sitemaps;
}

export default function sitemap({ id }: { id: string }): MetadataRoute.Sitemap {
  const baseUrl = "https://agenciagenios.com.br";

  // 1. Static Routes Sitemap
  if (id === "static") {
    return [
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
  }

  // 2. Service Sitemaps (split by service to handle 5k+ cities)
  const service = SERVICE_CONFIG[id];
  if (!service) return [];

  return (cities as { name: string; id: number; state: string }[]).map((city) => {
    // Normalize city name for slug: "São Paulo" -> "sao-paulo"
    const citySlug = city.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");

    return {
      url: `${baseUrl}/${service.slugPrefix}-em-${citySlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });
}
