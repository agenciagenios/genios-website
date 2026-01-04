import { notFound } from "next/navigation";
import { SERVICE_CONFIG, ServiceConfig } from "@/app/data/service-config";
import MarketingTemplate from "@/app/components/templates/MarketingTemplate";
import DeveloperTemplate from "@/app/components/templates/DeveloperTemplate";
import CreativeTemplate from "@/app/components/templates/CreativeTemplate";
import { Metadata } from "next";
import cities from "@/app/data/cities.json";

// Helper to normalize strings for comparison (matches logic used in sitemap)
function toSlug(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");
}

// Helper to format city names as fallback (e.g. sao-paulo -> São Paulo)
function formatCityNameFallback(slug: string): string {
    return slug
        .split("-")
        .map((word) => {
            // Small words that shouldn't be capitalized usually
            if (["de", "da", "do", "das", "dos", "em"].includes(word)) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
}

// Logic to parse the slug into service and city
function parseSlug(slug: string): { service: ServiceConfig; city: string; key: string } | null {
    const keys = Object.keys(SERVICE_CONFIG);

    // Sort keys by length desc to avoid partial matches issues (though -em- separator helps)
    // e.g. "programador" vs "programador-web" (if we had both)
    keys.sort((a, b) => b.length - a.length);

    for (const key of keys) {
        const prefix = `${key}-em-`;
        if (slug.startsWith(prefix)) {
            const citySlug = slug.replace(prefix, "");
            if (!citySlug) continue; // "social-media-em-" is invalid

            // Try to find the city in our database to get the correct accentuation
            // We search by slug to match the URL
            const foundCity = (cities as { name: string, id: number, state: string }[]).find(c => toSlug(c.name) === citySlug);
            const cityName = foundCity ? foundCity.name : formatCityNameFallback(citySlug);

            return {
                service: SERVICE_CONFIG[key],
                city: cityName,
                key: key
            };
        }
    }

    return null;
}

// Params type definition for Next.js 15+
type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = parseSlug(slug);

    if (!data) {
        return {
            title: "Página não encontrada"
        };
    }

    const { service, city } = data;
    const title = service.titlePromise.replace("{{city}}", city);
    const description = service.description.replace("{{city}}", city);

    return {
        title: `${title}`,
        description: description,
        openGraph: {
            title: title,
            description: description,
            // images: ['/og-image.jpg'], // TODO: Generate dynamic OG images later if needed
        }
    };
}

export default async function DynamicServicePage({ params }: Props) {
    const { slug } = await params;
    const data = parseSlug(slug);

    if (!data) {
        notFound();
    }

    const { service, city } = data;

    switch (service.category) {
        case "marketing":
            return <MarketingTemplate service={service} city={city} />;
        case "developer":
            return <DeveloperTemplate service={service} city={city} />;
        case "creative":
            return <CreativeTemplate service={service} city={city} />;
        default:
            return <MarketingTemplate service={service} city={city} />;
    }
}
