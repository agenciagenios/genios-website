import { Metadata } from "next";
import PlanosTemplate, { Plan } from "../PlanosTemplate";

export const metadata: Metadata = {
    title: "Planos de Programação & Desenvolvimento Web",
    description:
        "Desenvolvimento de sites, landing pages e sistemas personalizados. Do básico ao complexo, entregamos tecnologia de alta performance para seu negócio.",

    alternates: {
        canonical: "https://agenciagenios.com.br/planos/programacao",
    },

    openGraph: {
        title: "Planos de Programação | Agência Gênios",
        description:
            "Sites, Landing Pages e Sistemas sob medida. Escolha o plano ideal para o desenvolvimento do seu projeto digital.",
        url: "https://agenciagenios.com.br/planos/programacao",
        siteName: "Agência Gênios",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Planos de Programação da Agência Gênios",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
};

const plans: Plan[] = [
    {
        name: "START DEV",
        price: "1.000,00",
        note: "Entrega rápida de Sites",
        features: [
            { name: "Landing Pages de Alta Conversão", value: true },
            { name: "Sites Institucionais", value: true },
            { name: "Otimização de Velocidade (SEO)", value: true },
            { name: "Design Mobile-First", value: true },
            { name: "Hospedagem inclusa (1º mês)", value: true },
            { name: "Suporte Técnico", value: true },
        ],
        highlight: false,
    },
    {
        name: "PRO SYSTEM",
        price: "1.500,00",
        note: "Sistemas de Média Complexidade",
        features: [
            { name: "Desenvolvimento de Sistemas", value: true },
            { name: "Manutenção Evolutiva", value: true },
            { name: "Dashboards Administrativos", value: true },
            { name: "Integrações de API", value: true },
            { name: "Banco de Dados Escalável", value: true },
            { name: "Segurança de Dados", value: true },
        ],
        highlight: true,
    },
    {
        name: "EXTREME DEV",
        price: "2.000,00",
        note: "Sistemas Complexos & Features",
        features: [
            { name: "Entrega Rápida de Sistemas", value: true },
            { name: "Funcionalidades Complexas", value: true },
            { name: "Arquitetura SaaS", value: true },
            { name: "Apps Web & Mobile (PWA)", value: true },
            { name: "Automações de Processos", value: true },
            { name: "Suporte Prioritário 24/7", value: true },
        ],
        highlight: false,
    },
];

export default function ProgramacaoPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Desenvolvimento de Software e Sites",
        "description": "Desenvolvimento full stack de sites, landing pages e sistemas complexos.",
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
            "priceRange": "R$ 1000+"
        },
        "url": "https://agenciagenios.com.br/planos/programacao"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PlanosTemplate
                title="Programação"
                subtitle="Desenvolvimento full stack livre mensal para acelerar seu projeto digital."
                plans={plans}
                customSection={
                    <div className="glass-card p-12 rounded-[2.5rem] border border-white/10 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Precisa de algo específico?</h2>
                        <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                            Se o seu projeto exige uma arquitetura única ou funcionalidades sob medida, montamos um plano de desenvolvimento dedicado.
                        </p>
                        <a href="/#contato" className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-full font-bold transition-all">
                            Personalizar Plano de Desenvolvimento
                        </a>
                    </div>
                }
            />
        </>
    );
}
