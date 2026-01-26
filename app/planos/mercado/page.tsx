import { Metadata } from "next";
import PlanosTemplate, { Plan } from "../PlanosTemplate";

export const metadata: Metadata = {
    title: "Planos para Mercados & Varejo | Tabloides e Ofertas Diárias",
    description:
        "Soluções de design para supermercados, farmácias e varejo. Criação de tabloides de ofertas diárias para WhatsApp, Redes Sociais e Impressos.",

    alternates: {
        canonical: "https://agenciagenios.com.br/planos/mercado",
    },

    openGraph: {
        title: "Planos para Mercado | Agência Gênios",
        description:
            "Aumente as vendas do seu mercado com ofertas diárias profissionais. Criação rápida de tabloides e encartes digitais.",
        url: "https://agenciagenios.com.br/planos/mercado",
        siteName: "Agência Gênios",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Design para Mercados e Varejo",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
};

const plans: Plan[] = [
    {
        name: "MERCADO START",
        price: "360,00",
        note: "Potencialize vendas com ofertas semanais",
        features: [
            { name: "12 Tabloides Mensais", value: true },
            { name: "Ideal para Ofertas Semanais", value: true },
            { name: "Formato para Stories", value: true },
            { name: "Design Premium", value: true },
            { name: "Organização e destaque dos produtos", value: true },
            { name: "Designer dedicado", value: false },
        ],
        highlight: false,
    },
    {
        name: "MERCADO PRO",
        price: "1.200,00",
        note: "Potencialize vendas com ofertas diárias",
        features: [
            { name: "30 Tabloides Mensais", value: true },
          { name: "Ideal para Ofertas Semanais", value: true },
            { name: "Formato para Stories", value: true },
            { name: "Design Premium", value: true },
            { name: "Organização e destaque dos produtos", value: true },
            { name: "Designer dedicado", value: true },
        ],
        highlight: true,
    },
    {
        name: "MERCADO MASTER",
        price: "2.480,00",
        note: "Até 2 tabloides por dia",
        features: [
            { name: "62 Tabloides Mensais", value: true },
           { name: "Ideal para Ofertas Semanais", value: true },
            { name: "Formato para Stories", value: true },
            { name: "Design Premium", value: true },
            { name: "Organização e destaque dos produtos", value: true },
            { name: "Designer dedicado", value: true },
        ],
        highlight: false,
    },
];

export default function MercadoPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Design para Mercados e Varejo",
        "description": "Criação diária de tabloides e encartes de ofertas para supermercados e varejo.",
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
            "priceRange": "R$ 1200+"
        },
        "url": "https://agenciagenios.com.br/planos/mercado"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PlanosTemplate
                title="Mercado"
                subtitle="Agilidade e profissionalismo na criação de ofertas diárias para o seu mercado ou varejo."
                plans={plans}
                customSection={
                    <div className="glass-card p-12 rounded-[2.5rem] border border-white/10 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Múltiplas Filiais?</h2>
                        <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                            Se você possui uma rede de mercados ou varejo com alta demanda de encartes, temos planos escalonados para sua operação.
                        </p>
                        <a href="/#contato" className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-full font-bold transition-all">
                            Consultar Plano Corporativo
                        </a>
                    </div>
                }
            />
        </>
    );
}
