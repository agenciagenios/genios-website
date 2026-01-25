import { Organization, WebSite, WithContext, BreadcrumbList } from "schema-dts";

export default function JsonLd() {
    const organizationSchema: WithContext<Organization> = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Agência Gênios",
        url: "https://agenciagenios.com.br",
        logo: "https://agenciagenios.com.br/icon1.png",
        description: "Agência de Marketing Digital, Design e Desenvolvimento Web.",
        email: "contato@agenciagenios.com.br",
        sameAs: [
            "https://www.instagram.com/agencia.genios",
            "https://www.facebook.com/agenciagenios"
        ],
    };

    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://agenciagenios.com.br",
            },
        ],
    };

    const websiteSchema: WithContext<WebSite> = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Agência Gênios",
        url: "https://agenciagenios.com.br",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://agenciagenios.com.br/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        } as any, // Cast to any because query-input is valid for Google but not in strict schema-dts
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
