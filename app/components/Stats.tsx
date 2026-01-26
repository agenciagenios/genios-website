"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Projetos Entregues", value: "2000+" },
    { label: "Clientes Satisfeitos", value: "80+" },
    { label: "Anos de Experiência", value: "5+" },
    { label: "Retenção Média", value: "98%" },
];

export default function Stats() {
    return (
        <section className="py-20 bg-zinc-900/50">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-zinc-400 text-sm md:text-base font-medium uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
