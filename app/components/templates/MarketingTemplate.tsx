"use client";

import { motion } from "framer-motion";
import { ServiceConfig } from "@/app/data/service-config";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface MarketingTemplateProps {
    service: ServiceConfig;
    city: string;
}

export default function MarketingTemplate({ service, city }: MarketingTemplateProps) {
    const title = service.titlePromise.replace("{{city}}", city);
    const description = service.description.replace("{{city}}", city);
    const benefits = service.benefits.map(b => b.replace("{{city}}", city));

    return (
        <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px] -z-10" />

                <div className="container px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-yellow-400 bg-yellow-500/10 rounded-full border border-yellow-500/20">
                                Líder em Marketing Digital
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                                {title.split(city)[0]}
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                    {city}
                                </span>
                                {title.split(city)[1]}
                            </h1>
                            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                                {description}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href={service.ctaUrl}
                                    className="px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                                >
                                    {service.cta}
                                </Link>
                                <Link
                                    href={`https://wa.me/5548999999999?text=Olá, vi a página de ${service.slugPrefix} em ${city} e gostaria de saber mais.`}
                                    target="_blank"
                                    className="px-8 py-4 text-lg font-medium text-white border border-white/10 rounded-full hover:bg-white/5 transition-all"
                                >
                                    Falar no WhatsApp
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-zinc-900/50">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Por que escolher nossa agência em {city}?
                            </h2>
                            <p className="text-zinc-400 mb-8 text-lg">
                                Combinamos dados, criatividade e tecnologia para entregar resultados reais.
                            </p>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-500">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <span className="text-lg font-medium">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-600/20 p-8 rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="w-full h-full rounded-xl bg-black border border-white/10 flex items-center justify-center overflow-hidden relative">
                                    {/* Abstract Graph UI */}
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                    <div className="relative z-10 text-center">
                                        <div className="text-6xl font-bold text-white mb-2">+325%</div>
                                        <div className="text-yellow-500 font-medium">ROI Médio</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="container px-6 mx-auto relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        Pronto para dominar <span className="text-yellow-500">{city}</span>?
                    </h2>
                    <Link
                        href={service.ctaUrl}
                        className="inline-flex items-center gap-2 px-10 py-5 text-xl font-bold text-black bg-white rounded-full hover:bg-zinc-200 transition-all"
                    >
                        Começar Agora <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
