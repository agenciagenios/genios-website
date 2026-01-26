import { Metadata } from "next";
import PlanosTemplate, { Plan } from "../PlanosTemplate";

export const metadata: Metadata = {
    title: "Planos de Design Gráfico & Artes Profissionais",
    description:
        "Criação de artes profissionais para redes sociais, banners e materiais digitais. Planos flexíveis para manter seu feed sempre atualizado e profissional.",

    alternates: {
        canonical: "https://agenciagenios.com.br/planos/artes",
    },

    openGraph: {
        title: "Planos de Artes | Agência Gênios",
        description:
            "Design gráfico profissional para sua marca. Escolha o plano de artes semanais que melhor atende sua demanda.",
        url: "https://agenciagenios.com.br/planos/artes",
        siteName: "Agência Gênios",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Planos de Artes da Agência Gênios",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
};

const plans: Plan[] = [
    {
        name: "ART START",
        price: "320,00",
        note: "2 artes por semana",
        features: [
            { name: "8 Artes Mensais", value: true },
            { name: "Design Premium & Exclusivo", value: true },
            { name: "Até 1 alteração gratuita", value: true },
            { name: "Formato Feed ou Story", value: true },
            { name: "Artes digitais e industriais (gráficas/malharias)", value: true },
        ],
        highlight: false,
    },
    {
        name: "ART PRO",
        price: "600,00",
        note: "4 artes por semana",
        features: [
            { name: "16 Artes Mensais", value: true },
            { name: "Design Premium & Exclusivo", value: true },
            { name: "Até 1 alteração gratuita", value: true },
            { name: "Formato Feed ou Story", value: true },
            { name: "Artes digitais e industriais (gráficas/malharias)", value: true },
        ],
        highlight: true,
    },
    {
        name: "ART PRIME",
        price: "760,00",
        note: "5 artes por semana",
        features: [
            { name: "20 Artes Mensais", value: true },
            { name: "Design Premium & Exclusivo", value: true },
            { name: "Até 1 alteração gratuita", value: true },
            { name: "Formato Feed ou Story", value: true },
            { name: "Artes digitais e industriais (gráficas/malharias)", value: true },
        ],
        highlight: false,
    },
];

export default function ArtesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Design Gráfico e Criação de Artes",
        "description": "Criação de artes profissionais e design gráfico estratégico para empresas.",
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
            "priceRange": "R$ 560+"
        },
        "url": "https://agenciagenios.com.br/planos/artes"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PlanosTemplate
                title="Artes"
                subtitle="Mantenha seu posicionamento visual impecável com artes profissionais recorrentes."
                plans={plans}
                customSection={
                    <div className="glass-card p-12 rounded-[2.5rem] border border-white/10 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Volume Personalizado?</h2>
                        <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                            Precisa de um volume maior ou menor de artes? Montamos um pacote específico para a sua frequência de postagens.
                        </p>
                        <a href="/#contato" className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-full font-bold transition-all">
                            Personalizar Quantidade de Artes
                        </a>
                    </div>
                }
            />
        </>
    );
}
