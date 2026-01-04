"use client";

import { motion } from "framer-motion";
import { ServiceConfig } from "@/app/data/service-config";
import { Play, Star, Zap, Eye, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface CreativeTemplateProps {
    service: ServiceConfig;
    city: string;
}

export default function CreativeTemplate({ service, city }: CreativeTemplateProps) {
    const title = service.titlePromise.replace("{{city}}", city);
    const description = service.description.replace("{{city}}", city);
    const benefits = service.benefits.map(b => b.replace("{{city}}", city));

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />
                </div>

                <div className="container px-6 mx-auto relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8"
                    >
                        {title.split(city)[0]}
                        <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            {city}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-zinc-300 max-w-2xl mx-auto font-light mb-12"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            href="#contato"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors shadow-xl shadow-white/10"
                        >
                            <Play className="w-5 h-5 fill-black" /> {service.cta}
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Showreel / Visuals */}
            <section className="py-20">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="aspect-[4/3] relative group overflow-hidden rounded-2xl bg-zinc-900 border border-white/10"
                            >
                                <div className="absolute inset-0 md:group-hover:bg-purple-900/20 transition-colors" />
                                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-yellow-400" />
                                        {benefit}
                                    </h3>
                                </div>
                                {/* Placeholder for noise/video effect */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                        <h2 className="text-4xl font-bold mb-2">Vamos criar algo incrível?</h2>
                        <p className="text-zinc-400">Sua marca em {city} nunca mais será a mesma.</p>
                    </div>
                    <Link
                        href="#contato"
                        className="w-full md:w-auto px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 font-medium"
                    >
                        Fazer Orçamento <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
