import { Metadata } from "next";
import PlanosTemplate, { Plan } from "../PlanosTemplate";

export const metadata: Metadata = {
    title: "Planos de Edição de Vídeos | Reels, Shorts e TikTok",
    description:
        "Edição profissional de vídeos curtos e dinâmicos para atrair atenção nas redes sociais. Planos para Reels, Shorts e TikTok com alta qualidade e agilidade.",

    alternates: {
        canonical: "https://agenciagenios.com.br/planos/edicao-de-video",
    },

    openGraph: {
        title: "Planos de Edição de Vídeo | Agência Gênios",
        description:
            "Transforme seus vídeos brutos em conteúdos magnéticos. Planos semanais de edição de vídeo para Reels, Shorts e YouTube.",
        url: "https://agenciagenios.com.br/planos/edicao-de-video",
        siteName: "Agência Gênios",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Edição de Vídeo da Agência Gênios",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
};

const plans: Plan[] = [
    {
        name: "VIDEO START",
        price: "1.200,00",
        note: "2 vídeos por semana",
        features: [
            { name: "8 Vídeos Editados/mês", value: true },
            { name: "Edição Dinâmica (Interativa)", value: true },
            { name: "Legendas Animadas", value: true },
            { name: "Sound Design & Trilha", value: true },
            { name: "Cortes Estratégicos", value: true },
            { name: "Até 15-60 segundos cada", value: true },
        ],
        highlight: false,
    },
    {
        name: "VIDEO PRO",
        price: "2.100,00",
        note: "4 vídeos por semana",
        features: [
            { name: "16 Vídeos Editados/mês", value: true },
            { name: "Edição Dinâmica (Interativa)", value: true },
            { name: "Legendas Animadas", value: true },
            { name: "Sound Design & Trilha", value: true },
            { name: "Cortes Estratégicos", value: true },
            { name: "Color Grading Básico", value: true },
            { name: "Prioridade na Edição", value: true },
        ],
        highlight: true,
    },
    {
        name: "VIDEO SCALE",
        price: "2.800,00",
        note: "5 vídeos por semana",
        features: [
            { name: "20 Vídeos Editados/mês", value: true },
            { name: "Edição Dinâmica (Interativa)", value: true },
            { name: "Legendas Animadas", value: true },
            { name: "Sound Design & Trilha", value: true },
            { name: "Efeitos Visuais Avançados", value: true },
            { name: "Tratamento de Áudio", value: true },
            { name: "Suporte Consultivo", value: true },
        ],
        highlight: false,
    },
];

export default function VideoPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Edição de Vídeo Profissional",
        "description": "Edição semanal de vídeos para redes sociais, Reels e Shorts.",
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
        "url": "https://agenciagenios.com.br/planos/edicao-de-video"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PlanosTemplate
                title="Edição de Vídeo"
                subtitle="Domine o algoritmo com vídeos curtos de alta retenção e qualidade profissional."
                plans={plans}
                faqItems={[
                    {
                        question: "Como envio os vídeos para edição?",
                        answer: "Você pode enviar através do Google Drive, WeTransfer ou diretamente pelo WhatsApp, dependendo do tamanho do arquivo."
                    },
                    {
                        question: "Vocês fazem a legenda dos vídeos?",
                        answer: "Sim! Todos os nossos planos de edição incluem legendas dinâmicas e animadas para maximizar a retenção."
                    },
                    {
                        question: "Qual o prazo de entrega de cada vídeo?",
                        answer: "O prazo médio é de 24 a 48 horas úteis após o recebimento do material bruto e do briefing."
                    }
                ]}
                customSection={
                    <div className="glass-card p-12 rounded-[2.5rem] border border-white/10 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Demanda para YouTube?</h2>
                        <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                            Se você precisa de vídeos longos ou uma frequência diária, temos condições especiais para grandes volumes de edição.
                        </p>
                        <a href="/#contato" className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-full font-bold transition-all">
                            Personalizar Demanda de Vídeos
                        </a>
                    </div>
                }
            />
        </>
    );
}
