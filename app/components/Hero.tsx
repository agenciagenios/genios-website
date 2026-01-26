"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container px-6 mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-yellow-400 bg-yellow-500/10 rounded-full border border-yellow-500/20 backdrop-blur-sm">
            Transformando ideias em inovações
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Agência <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Gênios</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light">
            Design minimalista, tecnologia de ponta e estratégias de SEO que colocam sua marca no topo.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#contato"
              className="px-8 py-4 text-lg font-medium text-white bg-yellow-500 rounded-full hover:bg-yellow-500/80 transition-all shadow-[0_0_20px_rgba(0,113,227,0.4)] hover:shadow-[0_0_30px_rgba(0,113,227,0.6)]"
            >
              Começar Projeto
            </a>
            <a
              href="#servicos"
              className="px-8 py-4 text-lg font-medium text-white border border-white/10 rounded-full hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              Ver Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
