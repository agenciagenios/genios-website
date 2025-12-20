"use client";

import { motion } from "framer-motion";
import { Palette, Code, PenTool, Video, Camera } from "lucide-react";

const services = [
  {
    icon: <Palette className="w-8 h-8 text-yellow-400" />,
    title: "Identidade Visual",
    description: "Criação de marcas memoráveis que transmitem a essência do seu negócio com elegância."
  },
  {
    icon: <Code className="w-8 h-8 text-purple-400" />,
    title: "Sistemas & Apps",
    description: "Desenvolvimento de soluções digitais robustas, escaláveis e focadas na experiência do usuário."
  },
  {
    icon: <PenTool className="w-8 h-8 text-pink-400" />,
    title: "Design Gráfico",
    description: "Peças publicitárias, social media e materiais impressos com design premium e estratégico."
  },
  {
    icon: <Video className="w-8 h-8 text-indigo-400" />,
    title: "Edição & Motion",
    description: "Vídeos dinâmicos e animações que prendem a atenção e convertem espectadores em clientes."
  },
  {
    icon: <Camera className="w-8 h-8 text-cyan-400" />,
    title: "Gravação Aérea",
    description: "Imagens de drone em alta resolução para trazer uma nova perspectiva ao seu projeto."
  },
  {
    icon: <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    title: "SEO Agressivo",
    description: "Estratégias avançadas para posicionar seu site no topo das buscas e gerar leads qualificados."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="container px-6 mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">Nossos Serviços</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Soluções completas para elevar o nível da sua presença digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-colors group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
