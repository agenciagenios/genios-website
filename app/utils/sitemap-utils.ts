
import { SERVICE_CONFIG } from "../data/service-config";
import cities from "../data/cities.json";

export const MAX_URLS_PER_SITEMAP = 30000;

export interface SitemapConfig {
    id: string;
}

export function getSitemapChunks(): SitemapConfig[] {
    const categories = new Set(
        Object.values(SERVICE_CONFIG).map((s) => s.category)
    );

    const sitemaps: SitemapConfig[] = [{ id: "static" }];

    for (const category of categories) {
        const categoryServices = Object.values(SERVICE_CONFIG).filter(
            (service) => service.category === category
        );
        const servicesCount = categoryServices.length;

        // Calculate how many cities we can fit in one sitemap without exceeding MAX_URLS
        // Each city generates 'servicesCount' URLs
        const citiesPerSitemap = Math.floor(MAX_URLS_PER_SITEMAP / servicesCount);

        // Calculate total number of chunks needed
        const totalChunks = Math.ceil(cities.length / citiesPerSitemap);

        for (let i = 0; i < totalChunks; i++) {
            sitemaps.push({ id: `${category}-${i}` });
        }
    }

    return sitemaps;
}
