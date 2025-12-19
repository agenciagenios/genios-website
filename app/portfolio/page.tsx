"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../data/projects";

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
       <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
             Nosso Portfólio
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
             Conheça alguns dos projetos onde transformamos desafios em resultados extraordinários.
          </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
             <Link key={project.id} href={`/portfolio/${project.id}`}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/5 hover:border-yellow-500/50 transition-all"
                >
                    {/* Placeholder Background - In real app use Image component */}
                    <div className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="text-yellow-400 text-sm font-medium mb-2 block tracking-wider uppercase">{project.category}</span>
                                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                            </div>
                            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                →
                            </span>
                        </div>
                    </div>
                </motion.div>
             </Link>
          ))}
       </div>
    </div>
  );
}
