import { Metadata } from "next";
import PlanosTemplate, { Plan } from "../PlanosTemplate";

export const metadata: Metadata = {
    title: "Gestor de Tráfego Pago | Instagram, Facebook e Google Ads",
    description:
        "Gestão completa de tráfego pago para sua empresa. Anúncios estratégicos no Instagram, Facebook e Google Ads para atrair clientes e aumentar suas vendas.",

    alternates: {
        canonical: "https://agenciagenios.com.br/planos/gestor-de-trafego",
    },

    openGraph: {
        title: "Gestor de Tráfego Pago | Agência Gênios",
        description:
            "Aumente seu faturamento com anúncios que vendem. Gestão profissional de tráfego pago para Facebook e Google Ads.",
        url: "https://agenciagenios.com.br/planos/gestor-de-trafego",
        siteName: "Agência Gênios",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Gestão de Tráfego da Agência Gênios",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
};

const plans: Plan[] = [
    {
        name: "GESTÃO COMPLETA",
        price: "800,00",
        note: "Meta Ads + Google Ads",
        features: [
            { name: "Gestão de Anúncios no Instagram", value: true },
            { name: "Gestão de Anúncios no Facebook", value: true },
            { name: "Gestão de Anúncios no Google Ads", value: true },
            { name: "Criação de Campanhas de Conversão", value: true },
            { name: "Otimização Diária de Orçamento", value: true },
            { name: "Relatório Mensal de Performance", value: true },
            { name: "Suporte via WhatsApp", value: true },
            { name: "Públicos Personalizados & Remarketing", value: true },
        ],
        highlight: true,
    },
];

export default function GestorTrafegoPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Gestão de Tráfego Pago",
        "description": "Gestão estratégica de anúncios no Facebook, Instagram e Google Ads.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Agência Gênios",
            "image": "https://agenciagenios.com.br/icon1.png",
            "telephone": "+556892253537",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressLocality": "Brasil"
            },
            "priceRange": "R$ 800"
        },
        "url": "https://agenciagenios.com.br/planos/gestor-de-trafego"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PlanosTemplate
                title="Gestor de Tráfego"
                subtitle="Potencialize suas vendas com anúncios assertivos que trazem resultados reais."
                plans={plans}
            />
        </>
    );
}
