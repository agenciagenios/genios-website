
import { getSitemapChunks } from "../utils/sitemap-utils";

export async function GET() {
    const chunks = getSitemapChunks();
    const baseUrl = "https://agenciagenios.com.br";

    const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${chunks
            .map(
                (chunk) => `
  <sitemap>
    <loc>${baseUrl}/sitemap/${chunk.id}.xml</loc>
  </sitemap>`
            )
            .join("")}
</sitemapindex>`;

    return new Response(sitemapIndexXml, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
