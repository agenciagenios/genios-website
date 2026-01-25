"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import HirePlanModal from "./HirePlanModal";

const unitValues = {
  post: 70,
  motion15s: 150,
  unitLanding: 300,
  unitSite: 1800,
  unitGestor: 500
}

const contentPlans = [
  {
    name: "START",
    price: "840,00",
    note: "Instagram e Facebook",
    features: [
      { name: "Análise e upgrade de perfil", value: true },
      { name: "Geração de conteúdo e postagens", value: true },
      { name: "Posts semanais", value: "3 posts" },
      { name: "Réplica dos posts para stories", value: true },
      { name: "Investimento Tráfego Pago", value: "+ valor a combinar"},
      { name: "Padronização visual das postagens", value: true },
      { name: "Flyer Motion (até 15s) / Vídeo", value: false },
      { name: "Site com links", value: true },
      { name: "Gestor de Tráfego", value: "+ R$ 300,00" },
      { name: "Contrato mínimo", value: "1 mês" },
    ],
    highlight: false,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    name: "PRO",
    price: "1.420,00",
    note: "Instagram e Facebook",
    features: [
      { name: "Análise e upgrade de perfil", value: true },
      { name: "Geração de conteúdo e postagens", value: true },
      { name: "Posts semanais", value: "4 posts" },
      { name: "Réplica dos posts para stories", value: true },
      { name: "Investimento Tráfego Pago", value:  "+ valor a combinar" },
      { name: "Padronização visual das postagens", value: true },
      { name: "Flyer Motion (até 15s) / Vídeo", value: 2 },
      { name: "Site com links", value: true },
      { name: "Gestor de Tráfego", value: "+ R$ 500,00" },
      { name: "Contrato mínimo", value: "1 mês" },
    ],
    highlight: true,
    color: "from-purple-400 to-orange-600"
  },
  {
    name: "PLUS",
    price: "2.000,00",
    note: "Instagram e Facebook",
    features: [
      { name: "Análise e upgrade de perfil", value: true },
      { name: "Geração de conteúdo e postagens", value: true },
      { name: "Posts semanais", value: "5 posts" },
      { name: "Réplica dos posts para stories", value: true },
      { name: "Investimento Tráfego Pago", value: "+ valor a combinar" },
      { name: "Padronização visual das postagens", value: true },
      { name: "Flyer Motion (até 15s) / Vídeo", value: 4 },
      { name: "Site com links", value: true },
      { name: "Gestor de Tráfego", value: "+ R$ 700,00" },
      { name: "Contrato mínimo", value: "1 mês" },
    ],
    highlight: false,
    color: "from-indigo-400 to-indigo-600"
  },
];

const resultPlans = [
  {
    name: "PERFORMANCE",
    price: "2.870,00",//1120+300+800+300+300+50,
    note: "Conteúdo + Tráfego Pago + Posicionamento no Google",
    features: [
      { name: "Análise e upgrade de perfil", value: true },
      { name: "Estratégia de Posicionamento no Google", value: true },
      { name: "Site Institucional Completo", value: true },
      { name: "Copywriting de Alta Conversão", value: true },
      { name: "Geração de conteúdo", value: true },
      { name: "Posts semanais", value: "4 posts" },
      { name: "Landing Page de Conversão", value: true },
      { name: "Gestão de Tráfego (Meta + Google)", value: true },
      { name: "Relatório Mensal de ROI", value: true },
      { name: "Investimento Tráfego Pago", value: "R$ 300,00" },
      { name: "Flyer Motion (até 15s) / Vídeo", value: "2" },
      { name: "Sistema de atendimento", value: true },
      { name: "Contrato mínimo", value: "3 meses" },
    ],
    highlight: false,
    color: "from-emerald-400 to-emerald-600"
  },
  {
    name: "SCALE",
    price: "3.500,00",
    note: "Conteúdo + Tráfego + Site + SEO",
    features: [
      { name: "Análise e upgrade de perfil", value: true },
      { name: "Estratégia de Posicionamento no Google", value: true },
      { name: "Site Institucional Completo", value: true },
      { name: "Copywriting de Alta Conversão", value: true },
      { name: "Geração de conteúdo", value: true },
      { name: "Posts semanais", value: "5 posts" },
      { name: "Landing Page de Conversão", value: true },
      { name: "Gestão de Tráfego (Meta + Google)", value: true },
      { name: "Relatório Mensal de ROI", value: true },
      { name: "Investimento Tráfego Pago", value: "R$ 500,00" },
      { name: "Flyer Motion (até 15s) / Vídeo", value: "4" },
      { name: "Sistema de atendimento", value: true },
      { name: "Contrato mínimo", value: "6 meses" },
    ],
    highlight: true,
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "DOMINATION",
    price: "4.300,00",
    note: "Ecossistema Digital Completo",
    features: [
      { name: "Análise e upgrade de perfil", value: true },
      { name: "Estratégia de Posicionamento no Google", value: true },
      { name: "Site Institucional Completo", value: true },
      { name: "Copywriting de Alta Conversão", value: true },
      { name: "Geração de conteúdo", value: true },
      { name: "Posts semanais", value: "5 posts" },
      { name: "Landing Page de Conversão", value: true },
      { name: "Gestão de Tráfego (Meta + Google)", value: true },
      { name: "Relatório Mensal de ROI", value: true },
      { name: "Investimento Tráfego Pago", value: "R$ 1.000,00" },
      { name: "Flyer Motion (até 15s) / Vídeo", value: "6" },
      { name: "Sistema de atendimento", value: true },
      { name: "Contrato mínimo", value: "6 meses" },
    ],
    highlight: false,
    color: "from-rose-400 to-rose-600"
  },
];

export default function PlanosContent() {
  const [selectedPlan, setSelectedPlan] = useState<{ name: string, price: string } | null>(null);
  const [category, setCategory] = useState<"conteudo" | "resultado" | "personalizado">("conteudo");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (opt: string) => {
    setSelectedOptions(prev =>
      prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]
    );
  };

  const customOptionsList = [
    { id: "sm", label: "Gestão de Redes Sociais", desc: "Posts, stories e engajamento" },
    { id: "tp", label: "Tráfego Pago (Meta/Google)", desc: "Anúncios para atrair clientes" },
    { id: "lp", label: "Landing Page de Conversão", desc: "Página focada em vendas" },
    { id: "site", label: "Site Institucional", desc: "Presença oficial da sua marca" },
    { id: "ecom", label: "E-commerce Completo", desc: "Loja virtual profissional" },
    { id: "seo", label: "SEO e Posicionamento", desc: "Apareça no topo do Google" },
    { id: "motion", label: "Motion Design", desc: "Vídeos animados e dinâmicos" },
    { id: "video", label: "Edição de Vídeos (Reels)", desc: "Vídeos profissionais curtos" },
  ];

  const currentPlans = category === "conteudo" ? contentPlans : resultPlans;

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">Planos</span>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent mb-6">
          Social Media
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-12">
          Escolha o caminho ideal para o crescimento da sua empresa nas redes sociais.
        </p>

        {/* Category Switcher */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { id: "conteudo", label: "QUERO CONTEÚDO", desc: "Apenas postagens e engajamento orgânico" },
            { id: "resultado", label: "QUERO RESULTADO", desc: "Postagens, tráfego, site e conversão" },
            { id: "personalizado", label: "PERSONALIZAR", desc: "Monte seu próprio plano" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id as any)}
              className={`relative px-8 py-4 rounded-2xl transition-all duration-300 flex flex-col items-center gap-1 min-w-[240px]
                ${category === cat.id
                  ? 'bg-white/10 border-white/20 shadow-xl shadow-black/20'
                  : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                } border group`}
            >
              {category === cat.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-2xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`font-bold tracking-wider ${category === cat.id ? 'text-yellow-400' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                {cat.label}
              </span>
              <span className="text-xs text-zinc-500 italic">
                {cat.desc}
              </span>
            </button>
          ))}
        </div>
      </div>

      {category !== "personalizado" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, i) => (
            <motion.div
              key={`${category}-${i}`}
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
                {plan.features.map((feature: any, idx) => (
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

              <button
                onClick={() => setSelectedPlan({ name: plan.name, price: plan.price })}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] ${plan.highlight ? 'bg-gradient-to-r from-yellow-500 to-amber-600 shadow-lg shadow-yellow-500/20' : 'bg-white/10 hover:bg-white/20'}`}
              >
                Contratar {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto glass-card p-8 md:p-16 rounded-[2.5rem] border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 blur-[100px] -z-10" />

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Monte seu Plano Sob Medida</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Selecione os módulos que fazem sentido para o seu momento atual e receba uma proposta personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left">
            {customOptionsList.map((opt) => (
              <div
                key={opt.id}
                onClick={() => toggleOption(opt.label)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer group flex items-start gap-4
                  ${selectedOptions.includes(opt.label)
                    ? 'bg-yellow-500/10 border-yellow-500/30'
                    : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'
                  }`}
              >
                <div className={`mt-1 min-w-[24px] h-6 rounded-lg border flex items-center justify-center transition-colors
                   ${selectedOptions.includes(opt.label)
                    ? 'bg-yellow-500 border-yellow-500 text-black'
                    : 'border-white/20 group-hover:border-white/40'
                  }`}
                >
                  {selectedOptions.includes(opt.label) && <Check className="w-4 h-4" />}
                </div>
                <div>
                  <h4 className={`font-bold transition-colors ${selectedOptions.includes(opt.label) ? 'text-yellow-400' : 'text-white'}`}>
                    {opt.label}
                  </h4>
                  <p className="text-sm text-zinc-500 mt-1">{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <button
              onClick={() => setSelectedPlan({
                name: `PERSONALIZADO (${selectedOptions.length} itens)`,
                price: "Sob Consulta"
              })}
              disabled={selectedOptions.length === 0}
              className={`px-12 py-5 rounded-2xl text-black font-bold text-lg transition-all shadow-xl
                ${selectedOptions.length > 0
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-600 hover:scale-105 active:scale-95 shadow-yellow-500/20'
                  : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                }`}
            >
              {selectedOptions.length === 0
                ? "Selecione ao menos uma opção"
                : "Solicitar Orçamento Personalizado"
              }
            </button>
            <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
              Resposta em até 24 horas úteis
            </p>
          </div>
        </motion.div>
      )}

      {/* Common Footer */}
      <div className="mt-16 bg-white/5 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Ainda tem dúvidas?</h3>
          <p className="text-zinc-400 max-w-xl">
            Nossos consultores estão prontos para ajudar você a decidir qual o melhor caminho para seu negócio.
          </p>
        </div>
        <a href="/#contato" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors whitespace-nowrap">
          Falar com Especialista
        </a>
      </div>

      <HirePlanModal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        planName={selectedPlan?.name || ""}
        planPrice={selectedPlan?.price || ""}
      />
    </div>
  );
}
