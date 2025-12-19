"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Tag } from "lucide-react";

const apps = [
  {
    title: "GeekNote",
    description: "Aplicativo para organização de orçamentos de forma dinâmica e outras funções úteis.",
    tags: ["Mobile", "APP"],
    imageColor: "bg-blue-600",
    link: "https://geeknote.expo.app",
  },
  {
    title: "Gênios Clientes",
    description: "Aplicativo de celular para você nosso cliente ter seu histórico de contratos, serviços e alertas úteis.",
    tags: ["Mobile", "APP"],
    imageColor: "bg-blue-600",
    link: "#",
    inDevelopment: true
  },
  {
    title: "GêniosChat",
    description: "Sistema de chatbot e multi-atendimento para empresas de qualquer porte. Faça campanhas, automatize com fluxos, tenha agentes de IA e muito mais.",
    tags: ["IA", "Chatbot", "Multi-Atendimento"],
    imageColor: "bg-blue-600",
    link: "#",
    inDevelopment: true
  },
  {
    title: "Desfory",
    description: "Plataforma de venda de arquivos digitais, focado em design gráfico.",
    tags: ["E-commerce", "Arq. Digitais", "Design"],
    imageColor: "bg-green-600",
    link: "#",
    inDevelopment: true
  },
  {
    title: "TicketPRO",
    description: "Sistema completo para gestão de eventos e tickets.",
    tags: ["Eventos", "Tickets", "Gestão"],
    imageColor: "bg-purple-600",
    link: "#",
    inDevelopment: true
  },
  {
    title: "SingleByte",
    description: "E-commerce de produtos de tecnologia.",
    tags: ["E-commerce", "Produtos", "Tecnologia"],
    imageColor: "bg-orange-600",
    link: "#",
    inDevelopment: true
  }
];

export default function SaaSShowcase() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-black/50">
       {/* Background Decor */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-6 mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Nossos <span className="text-yellow-500">Sistemas & Apps</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Soluções proprietárias desenvolvidas para escalar negócios e otimizar processos.
        </p>
      </div>

      <div className="pl-6 md:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]"> {/* Padding left to align with container but overflow right */}
        <motion.div 
            ref={carousel} 
            className="cursor-grab active:cursor-grabbing overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8"
          >
            {apps.map((app, i) => (
              <motion.div
                key={i}
                className="min-w-[350px] md:min-w-[400px] glass-card rounded-3xl overflow-hidden border border-white/10 group hover:border-yellow-500/30 transition-colors"
              >
                {/* Image Placeholder area */}
                <div className={`h-48 ${app.imageColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4">
                         <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10">
                            v2.0 Released
                         </span>
                    </div>
                </div>

                <div className="p-8">
                   <div className="flex flex-wrap gap-2 mb-4">
                      {app.tags.map((tag, t) => (
                          <span key={t} className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-zinc-400 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                              <Tag size={10} /> {tag}
                          </span>
                      ))}
                   </div>
                   
                   <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">{app.title}</h3>
                   <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                     {app.description}
                   </p>

                   <a href={app.link} className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                      Acessar Plataforma <ExternalLink size={16} />
                   </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
