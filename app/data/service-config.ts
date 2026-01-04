import { LucideIcon, TrendingUp, Code, Video, Globe, Smartphone, Palette, MonitorPlay, Target } from "lucide-react";

export type ServiceType =
    | "marketing"
    | "social-media"
    | "traffic-paid"
    | "developer"
    | "programmer"
    | "web-design"
    | "motion"
    | "video-editor";

export interface ServiceConfig {
    slugPrefix: string;
    category: "marketing" | "developer" | "creative";
    // icon removed to avoid serialization error
    titlePromise: string; // The main hook: "Best Social Media in {city}"
    description: string;
    benefits: string[];
    cta: string;
    ctaUrl: string;
}

export const SERVICE_CONFIG: Record<string, ServiceConfig> = {
    "agencia-de-marketing": {
        slugPrefix: "agencia-de-marketing",
        category: "marketing",
        titlePromise: "A Melhor Agência de Marketing em {{city}}",
        description: "Alavanque suas vendas e domine o mercado de {{city}} com estratégias de marketing digital comprovadas. Somos especialistas em crescimento acelerado.",
        benefits: [
            "Aumento de leads qualificados",
            "Posicionamento de marca premium",
            "Estratégias personalizadas para {{city}}",
            "Relatórios de performance detalhados"
        ],
        cta: "Receber Consultoria Gratuita",
        ctaUrl: "/#contato"
    },
    "agencia-digital": {
        slugPrefix: "agencia-digital",
        category: "marketing",
        titlePromise: "Agência Digital Premium em {{city}}",
        description: "Transformação digital completa para empresas em {{city}}. Do branding ao tráfego, cuidamos de toda sua presença online.",
        benefits: [
            "Identidade visual marcante",
            "Sites de alta conversão",
            "Gestão completa de redes sociais",
            "Foco total em ROI"
        ],
        cta: "Quero Digitalizar Meu Negócio",
        ctaUrl: "/#contato"
    },
    "social-media": {
        slugPrefix: "social-media",
        category: "marketing",
        titlePromise: "Gestão de Social Media em {{city}}",
        description: "Não deixe suas redes sociais paradas. Criamos conteúdo que engaja, converte e fideliza clientes em {{city}}.",
        benefits: [
            "Calendário editorial estratégico",
            "Design de posts profissionais",
            "Interação com seguidores",
            "Crescimento real de audiência"
        ],
        cta: "Ver Planos de Social Media",
        ctaUrl: "/planos"
    },
    "gestor-de-trafego": {
        slugPrefix: "gestor-de-trafego",
        category: "marketing",
        titlePromise: "Gestor de Tráfego Pago em {{city}}",
        description: "Chega de queimar dinheiro com anúncios errados. Nossas campanhas de tráfego pago colocam sua empresa na frente do cliente certo em {{city}}.",
        benefits: [
            "Campanhas no Google e Meta Ads",
            "Otimização constante de ROI",
            "Segmentação local precisa para {{city}}",
            "Relatórios transparentes"
        ],
        cta: "Aumentar Minhas Vendas",
        ctaUrl: "/#contato"
    },
    "programador": {
        slugPrefix: "programador",
        category: "developer",
        titlePromise: "Programador Especialista em {{city}}",
        description: "Desenvolvimento de software sob medida, APIs robustas e automações para escalar seu negócio em {{city}} com tecnologia de ponta.",
        benefits: [
            "Código limpo e escalável",
            "Sistemas web complexos",
            "Integrações de API",
            "Manutenção e suporte técnico"
        ],
        cta: "Falar com Desenvolvedor",
        ctaUrl: "/#contato"
    },
    "desenvolvedor": {
        slugPrefix: "desenvolvedor",
        category: "developer",
        titlePromise: "Desenvolvedor Full-Stack em {{city}}",
        description: "Soluções completas de desenvolvimento web e mobile. Transformamos suas ideias em produtos digitais de sucesso em {{city}}.",
        benefits: [
            "Apps iOS e Android",
            "Dashboards administrativos",
            "Sistemas SaaS",
            "Tecnologias modernas (React, Node, etc)"
        ],
        cta: "Cotar Projeto",
        ctaUrl: "/#contato"
    },
    "criar-site": {
        slugPrefix: "criar-site",
        category: "developer",
        titlePromise: "Criação de Sites em {{city}}",
        description: "Tenha um site rápido, bonito e otimizado para o Google. A primeira impressão conta, e nós garantimos que a sua será incrível em {{city}}.",
        benefits: [
            "Sites ultra-rápidos",
            "Design responsivo (Mobile-first)",
            "Otimização SEO inclusa",
            "Painel administrativo fácil"
        ],
        cta: "Quero um Site Novo",
        ctaUrl: "/#contato"
    },
    "motion-designer": {
        slugPrefix: "motion-designer",
        category: "creative",
        titlePromise: "Motion Designer & Animação em {{city}}",
        description: "Dê vida à sua marca com vídeos animados e motion graphics de alto nível. Capture a atenção do público de {{city}} em segundos.",
        benefits: [
            "Animações para redes sociais",
            "Vídeos explicativos",
            "Vinhetas e logos animados",
            "Edição dinâmica"
        ],
        cta: "Ver Portfolio Motion",
        ctaUrl: "/portfolio"
    },
    "editor-de-video": {
        slugPrefix: "editor-de-video",
        category: "creative",
        titlePromise: "Editor de Vídeo Profissional em {{city}}",
        description: "Edição de vídeo cinematográfica para YouTube, Instagram e anúncios. Elevamos a qualidade do seu conteúdo em {{city}}.",
        benefits: [
            "Edição para Reels e TikTok",
            "Color grading profissional",
            "Sound design imersivo",
            "Entregas rápidas"
        ],
        cta: "Contratar Edição",
        ctaUrl: "/#contato"
    }
};
