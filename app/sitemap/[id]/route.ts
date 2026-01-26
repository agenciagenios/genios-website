
import { projects } from "../../data/projects";
import cities from "../../data/cities.json";
import { SERVICE_CONFIG } from "../../data/service-config";
import { MAX_URLS_PER_SITEMAP } from "../../utils/sitemap-utils";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const baseUrl = "https://agenciagenios.com.br";

    // Remove .xml extension if present to handle /sitemap/marketing-0.xml
    const sitemapId = id.replace(".xml", "");

    let urls: string[] = [];

    if (sitemapId === "static") {
        urls.push(`${baseUrl}`);
        urls.push(`${baseUrl}/servicos`);
        urls.push(`${baseUrl}/portfolio`);
        urls.push(`${baseUrl}/sobre`);
        urls.push(`${baseUrl}/planos`);
        urls.push(`${baseUrl}/planos/social-media`);
        urls.push(`${baseUrl}/planos/mercado`);
        urls.push(`${baseUrl}/planos/artes`);
        urls.push(`${baseUrl}/planos/edicao-de-video`);
        urls.push(`${baseUrl}/planos/programacao`);
        urls.push(`${baseUrl}/planos/gestor-de-trafego`);
        projects.forEach((project) => {
            urls.push(`${baseUrl}/portfolio/${project.id}`);
        });
    } else {
        // Parse category and index from ID (e.g., "marketing-0")
        const lastDashIndex = sitemapId.lastIndexOf("-");
        const category = sitemapId.substring(0, lastDashIndex);
        const chunkIndex = parseInt(sitemapId.substring(lastDashIndex + 1));

        if (category && !isNaN(chunkIndex)) {
            const categoryServices = Object.values(SERVICE_CONFIG).filter(
                (service) => service.category === category
            );

            if (categoryServices.length > 0) {
                const servicesCount = categoryServices.length;
                const citiesPerSitemap = Math.floor(
                    MAX_URLS_PER_SITEMAP / servicesCount
                );
                const start = chunkIndex * citiesPerSitemap;
                const end = start + citiesPerSitemap;

                const citiesChunk = cities.slice(start, end);

                citiesChunk.forEach((city) => {
                    categoryServices.forEach((service) => {
                        const citySlug = city.name
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .replace(/\s+/g, "-");
                        urls.push(`${baseUrl}/${service.slugPrefix}-em-${citySlug}`);
                    });
                });
            }
        }
    }

    // Generate XML
    // Use simple string concatenation for performance and simplicity
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map((url) => {
                return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
            })
            .join("\n")}
</urlset>`;

    return new Response(sitemapXml, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
