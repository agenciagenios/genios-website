"use client";

import { motion } from "framer-motion";
import { Palette, Code, PenTool, Video, Camera } from "lucide-react";

const services = [
  {
    icon: <Palette className="w-12 h-12 text-yellow-400" />,
    title: "Identidade Visual",
    description: "Criação de marcas memoráveis que transmitem a essência do seu negócio com elegância. Inclui logotipo, paleta de cores, tipografia e manuais de marca completos.",
    features: ["Logotipo Exclusivo", "Manual da Marca", "Papelaria", "Brandbook"]
  },
  {
    icon: <Code className="w-12 h-12 text-purple-400" />,
    title: "Sistemas & Apps",
    description: "Desenvolvimento de soluções digitais robustas, escaláveis e focadas na experiência do usuário. Web Apps, Sites Institucionais e Aplicativos Mobile.",
    features: ["iOS & Android", "Dashboards", "Sistemas SaaS", "Integrações API"]
  },
  {
    icon: <PenTool className="w-12 h-12 text-pink-400" />,
    title: "Design Gráfico",
    description: "Peças publicitárias, social media e materiais impressos com design premium e estratégico para comunicar sua mensagem com clareza.",
    features: ["Social Media", "Banners", "Outdoor", "Diagramação"]
  },
  {
    icon: <Video className="w-12 h-12 text-indigo-400" />,
    title: "Edição & Motion",
    description: "Vídeos dinâmicos e animações que prendem a atenção e convertem espectadores em clientes. Edição profissional para YouTube, Reels e Institucionais.",
    features: ["Reels & TikTok", "Vídeos Corporativos", "Motion Graphics", "Vinhetas"]
  },
  {
    icon: <Camera className="w-12 h-12 text-cyan-400" />,
    title: "Gravação Aérea",
    description: "Imagens de drone em alta resolução para trazer uma nova perspectiva ao seu projeto. Ideal para eventos, mercado imobiliário e institucional.",
    features: ["4K Resolution", "Fotos Aéreas", "Tour Virtual", "Inspeção"]
  },
  {
    icon: <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    title: "SEO",
    description: "Estratégias avançadas para posicionar seu site no topo das buscas e gerar leads qualificados sem depender apenas de anúncios pagos.",
    features: ["Auditoria SEO", "Otimização On-page", "Link Building", "Copywriting"]
  }
];

export default function ServicosContent() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent mb-6">
                Nossos Serviços
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Na Agência Gênios, unimos criatividade e tecnologia para entregar soluções que transformam o seu negócio.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-10 rounded-3xl hover:bg-white/5 transition-all group border border-white/10 hover:border-yellow-500/30"
                >
                    <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        {service.description}
                    </p>
                    
                    <ul className="grid grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-zinc-300">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
        
        <div className="mt-20 text-center">
            <p className="text-2xl text-white font-semibold mb-8">Pronto para transformar seu projeto?</p>
            <a href="/#contato" className="px-10 py-5 bg-yellow-600 hover:bg-yellow-500 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-yellow-500/25">
                Solicitar Orçamento
            </a>
        </div>
    </div>
  );
}
