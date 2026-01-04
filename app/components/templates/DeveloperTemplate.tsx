"use client";

import { motion } from "framer-motion";
import { ServiceConfig } from "@/app/data/service-config";
import { Terminal, Cpu, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface DeveloperTemplateProps {
    service: ServiceConfig;
    city: string;
}

export default function DeveloperTemplate({ service, city }: DeveloperTemplateProps) {
    const title = service.titlePromise.replace("{{city}}", city);
    const description = service.description.replace("{{city}}", city);
    const benefits = service.benefits.map(b => b.replace("{{city}}", city));

    return (
        <div className="min-h-screen bg-[#050510] text-white selection:bg-blue-500/30 font-mono">
            {/* Grid Background */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <div className="h-px flex-1 bg-white/10 ml-4" />
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 font-sans">
                                {title.split(city)[0]}
                                <span className="text-blue-500 bg-clip-text">
                                    {city}
                                </span>
                                {title.split(city)[1]}
                            </h1>

                            <p className="text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
                                <span className="text-blue-400">&gt;</span> {description}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href={service.ctaUrl}
                                    className="px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                                >
                                    {service.cta}
                                </Link>
                                <div className="text-zinc-600 text-sm">
                  // Disponível para projetos imediatos
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative lg:h-[500px] w-full bg-[#0A0A1B] border border-white/10 rounded-xl p-6 overflow-hidden shadow-2xl"
                        >
                            {/* Code Preview Mockup */}
                            <div className="font-mono text-sm text-zinc-400 space-y-2">
                                <div className="text-blue-400">import <span className="text-white">Success</span> from <span className="text-green-400">'{city.toLowerCase()}'</span>;</div>
                                <div className="text-purple-400">const <span className="text-yellow-400">App</span> = () =&gt; &#123;</div>
                                <div className="pl-4 text-zinc-500">// Otimizado para alta performance</div>
                                <div className="pl-4">return (</div>
                                <div className="pl-8 text-blue-300">&lt;DigitalTransformation</div>
                                <div className="pl-12 text-indigo-300">speed=<span className="text-orange-400">&#123;100&#125;</span></div>
                                <div className="pl-12 text-indigo-300">security=<span className="text-orange-400">&#123;true&#125;</span></div>
                                <div className="pl-12 text-indigo-300">location=<span className="text-green-400">"{city}"</span></div>
                                <div className="pl-8 text-blue-300">/&gt;</div>
                                <div className="pl-4">);</div>
                                <div>&#125;</div>
                            </div>

                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tech Stack / Benefits */}
            <section className="py-24 bg-white/5 border-y border-white/5 relative bg-zinc-900/50">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-black/40 border border-white/10 rounded-lg hover:border-blue-500/50 transition-colors group"
                            >
                                <div className="mb-4 text-blue-500 group-hover:scale-110 transition-transform origin-left">
                                    <Terminal className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 font-sans">{benefit}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 text-center">
                <div className="container mx-auto px-6">
                    <Link
                        href={service.ctaUrl}
                        className="group inline-flex items-center gap-4 text-3xl md:text-5xl font-bold text-white hover:text-blue-400 transition-colors"
                    >
                        Iniciar Desenvolvimento <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
