"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import HirePlanModal from "./HirePlanModal";

export interface PlanFeature {
    name: string;
    value: string | boolean;
}

export interface Plan {
    name: string;
    price: string;
    note?: string;
    features: PlanFeature[];
    highlight?: boolean;
    color?: string;
}

interface PlanosTemplateProps {
    title: string;
    subtitle: string;
    plans: Plan[];
    customSection?: React.ReactNode;
}

export default function PlanosTemplate({ title, subtitle, plans, customSection }: PlanosTemplateProps) {
    const [selectedPlan, setSelectedPlan] = useState<{ name: string, price: string } | null>(null);

    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">Planos</span>
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent mb-6">
                    {title}
                </h1>
                <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-12">
                    {subtitle}
                </p>
            </div>

            <div className={`grid grid-cols-1 ${plans.length === 1 ? 'max-w-md mx-auto' : plans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8`}>
                {plans.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative p-8 rounded-3xl glass-card flex flex-col ${plan.highlight ? 'border-yellow-500/30 bg-gradient-to-b from-yellow-500/5 to-transparent shadow-2xl shadow-yellow-500/5' : 'border-white/5'}`}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full text-black font-bold text-sm shadow-lg shadow-yellow-500/20 text-center z-10">
                                MAIS POPULAR
                            </div>
                        )}

                        <div className="mb-8 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="flex items-end justify-center gap-1 mb-1">
                                <span className="text-zinc-400 text-sm mb-2">R$</span>
                                <span className="text-5xl font-bold text-white">{plan.price}</span>
                                <span className="text-zinc-400 text-sm mb-1">{plan.price.toLowerCase().includes("consulta") ? "" : "/mês"}</span>
                            </div>
                            {plan.note && <p className="text-xs text-zinc-500">{plan.note}</p>}
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

                        <button
                            onClick={() => setSelectedPlan({ name: plan.name, price: plan.price })}
                            className={`w-full py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] ${plan.highlight ? 'bg-gradient-to-r from-yellow-500 to-amber-600 shadow-lg shadow-yellow-500/20' : 'bg-white/10 hover:bg-white/20'}`}
                        >
                            Contratar {plan.name}
                        </button>
                    </motion.div>
                ))}
            </div>

            {customSection && (
                <div className="mt-20">
                    {customSection}
                </div>
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
