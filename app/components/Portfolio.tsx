"use client";

import { motion } from "framer-motion";

// TO-DO PEGAR DINAMICO DO DATA
const projects = [
  { title: "AAA", category: "App Development", color: "bg-yellow-600" },
  { title: "BBB", category: "Identidade Visual", color: "bg-purple-600" },
  { title: "CCC", category: "Gravação Aérea", color: "bg-indigo-600" },
  { title: "DDD", category: "Motion Graphics", color: "bg-pink-600" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-zinc-900/30">
        <div className="container px-6 mx-auto">
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Trabalhos Recentes</h2>
                <div className="h-1 w-20 bg-yellow-500 rounded-full"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Placeholder Background */}
                        <div className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                        
                        <div className="absolute bottom-0 left-0 p-8">
                            <span className="text-yellow-400 text-sm font-medium mb-2 block">{project.category}</span>
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
            
             <div className="text-center mt-12">
                <button className="text-white border-b border-yellow-500 pb-1 hover:text-yellow-400 transition-colors">Ver todos os projetos</button>
            </div>
        </div>
    </section>
  );
}
