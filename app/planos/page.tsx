"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "START",
    price: "600,00",
    note: "Instagram e Facebook",
    features: [
      { name: "Análise e upgrade de perfil", value: true },
      { name: "Geração de conteúdo e postagens", value: true },
      { name: "Posts semanais", value: "3 posts" },
      { name: "Réplica dos posts para stories", value: true },
      { name: "Investimento Tráfego Pago", value: "+ R$50,00" },
      { name: "Padronização visual das postagens", value: true },
      { name: "Flyer Motion (até 15s)", value: false },
      { name: "Site com links", value: true },
      { name: "Gestor de Tráfego", value: true },
      { name: "Contrato mínimo", value: "3 meses" },
    ],
    highlight: false,
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "PRO",
    price: "750,00",
    note: "Instagram e Facebook",
    features: [
      { name: "Análise e upgrade de perfil", value: true },
      { name: "Geração de conteúdo e postagens", value: true },
      { name: "Posts semanais", value: "4 posts" },
      { name: "Réplica dos posts para stories", value: true },
      { name: "Investimento Tráfego Pago", value: "+ R$100,00" },
      { name: "Padronização visual das postagens", value: true },
      { name: "Flyer Motion (até 15s)", value: true },
      { name: "Site com links", value: true },
      { name: "Gestor de Tráfego", value: true },
      { name: "Contrato mínimo", value: "3 meses" },
    ],
    highlight: true,
    color: "from-purple-400 to-purple-600"
  },
  {
    name: "PLUS",
    price: "950,00",
    note: "Instagram e Facebook",
    features: [
      { name: "Análise e upgrade de perfil", value: true },
      { name: "Geração de conteúdo e postagens", value: true },
      { name: "Posts semanais", value: "6 posts" },
      { name: "Réplica dos posts para stories", value: true },
      { name: "Investimento Tráfego Pago", value: "+ R$150,00" },
      { name: "Padronização visual das postagens", value: true },
      { name: "Flyer Motion (até 15s)", value: true },
      { name: "Site com links", value: true },
      { name: "Gestor de Tráfego", value: true },
      { name: "Contrato mínimo", value: "6 meses" },
    ],
    highlight: false,
    color: "from-indigo-400 to-indigo-600"
  },
];

export default function Planos() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
       <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">Planos</span>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent mb-6">
            Social Media
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Escolha o plano ideal para alavancar suas redes sociais com estratégia profissional e design de alto nível.
          </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl glass-card flex flex-col ${plan.highlight ? 'border-yellow-500/30 bg-gradient-to-b from-yellow-500/5 to-transparent' : ''}`}
            >
               {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full text-black font-bold text-sm shadow-lg shadow-yellow-500/20 text-center">
                    MAIS POPULAR
                  </div>
               )}

               <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1 mb-1">
                     <span className="text-zinc-400 text-sm mb-2">R$</span>
                     <span className="text-5xl font-bold text-white">{plan.price}</span>
                     <span className="text-zinc-400 text-sm mb-1">/mês</span>
                  </div>
                   <p className="text-xs text-zinc-500">{plan.note}</p>
               </div>

               <div className="space-y-4 flex-grow mb-8 text-sm">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start justify-between py-2 border-b border-white/5 last:border-0">
                       <span className="text-zinc-300 mr-2">{feature.name}</span>
                       <span className="font-semibold text-right">
                         {feature.value === true ? (
                           <Check className="w-5 h-5 text-green-400" />
                         ) : feature.value === false ? (
                           <X className="w-5 h-5 text-red-400" />
                         ) : (
                           <span className={String(feature.value).includes("+") ? "text-yellow-400" : "text-white"}>
                             {feature.value}
                           </span>
                         )}
                       </span>
                    </div>
                  ))}
               </div>

               <button className={`w-full py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] ${plan.highlight ? 'bg-gradient-to-r from-yellow-500 to-amber-600 shadow-lg shadow-yellow-500/20' : 'bg-white/10 hover:bg-white/20'}`}>
                 Contratar {plan.name}
               </button>
            </motion.div>
          ))}
       </div>
       
       <div className="mt-16 bg-white/5 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Precisa de um pacote personalizado?</h3>
            <p className="text-zinc-400 max-w-xl">
              Podemos criar um plano exclusivo para atender as necessidades específicas da sua empresa.
            </p>
          </div>
          <a href="/#contato" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors">
            Falar com Consultor
          </a>
       </div>
    </div>
  );
}
