"use client";

import { motion } from "framer-motion";

export default function SobreContent() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
       <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
             <span className="text-yellow-500 font-semibold tracking-wider uppercase mb-2 block">Quem Somos</span>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
               Nós somos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Gênios</span>.
             </h1>
             <p className="text-xl text-zinc-400 leading-relaxed mb-6">
               Não somos apenas uma agência digital. Somos arquitetos de experiências memoráveis. Nascemos da necessidade de unir o design de alta performance com estratégias de negócios reais.
             </p>
             <p className="text-lg text-zinc-500 leading-relaxed">
               Nossa missão é transformar marcas comuns em referências de mercado através de uma identidade visual impactante, tecnologia de ponta e uma comunicação que conecta de verdade.
             </p>
          </motion.div>
          
         {/**
          *  <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2 }}
             className="lg:w-1/2 relative"
          >
             <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
                <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                   <span className="text-zinc-600 font-bold text-xl">Alguma arte aqui</span>
                </div>
             </div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/30 rounded-full blur-3xl -z-10" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl -z-10" />
          </motion.div>
          */}
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="glass-card p-8 rounded-3xl text-center">
             <h3 className="text-5xl font-bold text-white mb-2">5+</h3>
             <p className="text-zinc-400">Anos de Experiência</p>
          </div>
          <div className="glass-card p-8 rounded-3xl text-center">
             <h3 className="text-5xl font-bold text-white mb-2">2000+</h3>
             <p className="text-zinc-400">Projetos Entregues</p>
          </div>
          <div className="glass-card p-8 rounded-3xl text-center">
             <h3 className="text-5xl font-bold text-white mb-2">100%</h3>
             <p className="text-zinc-400">Clientes Satisfeitos</p>
          </div>
       </div>

       <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
                { title: "Inovação", desc: "Buscamos sempre o novo, o diferente, o genial." },
                { title: "Excelência", desc: "Não aceitamos o 'bom'. Entregamos o extraordinário." },
                { title: "Transparência", desc: "Relacionamentos claros e honestos com nossos parceiros." }
             ].map((val, i) => (
               <div key={i} className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-zinc-500">{val.desc}</p>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
}
