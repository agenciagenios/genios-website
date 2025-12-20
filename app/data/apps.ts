
export type AppStatus = 'live' | 'development' | 'planning';

interface AppData {
    title: string;
    description: string;
    tags: string[];
    cover: string; // Can be a CSS class (bg-...) OR an Image URL
    icon: string; // Path to PNG/SVG icon
    link: string;
    status: AppStatus;
    version: string;
}

export const apps: AppData[] = [
    {
        title: "Gênios Clientes",
        description: "Aplicativo de celular para você nosso cliente ter seu histórico de contratos, serviços e alertas úteis.",
        tags: ["Mobile", "APP"],
        cover: "bg-indigo-600",
        icon: "/apps/genioscliente/icon.png",
        link: "#",
        status: 'planning',
        version: 'v0.0.1'
    },
    {
        title: "GêniosChat",
        description: "Sistema de chatbot e multi-atendimento para empresas de qualquer porte. Agentes de IA e fluxos automatizados.",
        tags: ["IA", "Chatbot", "Multi-Atendimento"],
        cover: "bg-violet-600",
        icon: "/apps/gchat/icon.svg",
        link: "#",
        status: 'development',
        version: 'v1.0.0'
    },
    {
        title: "Desfory",
        description: "Plataforma de venda de arquivos digitais, focado em design gráfico.",
        tags: ["E-commerce", "Arq. Digitais", "Design"],
        cover: "bg-green-600",
        icon: "/apps/desfory/icon.svg",
        link: "#",
        status: 'development',
        version: 'v0.0.1'
    },
    {
        title: "TicketPRO",
        description: "Sistema completo para gestão de eventos e tickets.",
        tags: ["Eventos", "Tickets", "Gestão"],
        cover: "bg-purple-600",
        icon: "/apps/gchat/icon.svg",
        link: "#",
        status: 'planning',
        version: 'v0.0.1'
    },
    {
        title: "SingleByte",
        description: "E-commerce de produtos de tecnologia.",
        tags: ["E-commerce", "Produtos", "Tecnologia"],
        cover: "bg-orange-600",
        icon: "/apps/gchat/icon.svg",
        link: "#",
        status: 'planning',
        version: 'v0.0.1'
    }
];