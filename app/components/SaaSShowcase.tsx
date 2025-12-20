"use client";

import { motion } from "framer-motion";
import { ExternalLink, Tag, AlertCircle, Calendar } from "lucide-react";
import { useRef, useState, MouseEvent } from "react";
import { AppStatus, apps } from "../data/apps";

const StatusBadge = ({ status }: { status: AppStatus }) => {
  switch (status) {
    case 'live':
      return (
        <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 backdrop-blur-md rounded-full text-xs font-bold text-green-400 border border-green-500/20 shadow-lg shadow-black/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Disponível
        </span>
      );
    case 'development':
      return (
        <span className="flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 backdrop-blur-md rounded-full text-xs font-bold text-yellow-400 border border-yellow-500/20 shadow-lg shadow-black/20">
          <AlertCircle size={12} />
          Em Desenvolvimento
        </span>
      );
    case 'planning':
      return (
        <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 backdrop-blur-md rounded-full text-xs font-bold text-blue-400 border border-blue-500/20 shadow-lg shadow-black/20">
          <Calendar size={12} />
          Em Planejamento
        </span>
      );
  }
};

export default function SaaSShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse Drag Logic
  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-32 relative overflow-hidden bg-black/50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-6 mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Nossos <span className="text-yellow-500">Sistemas & Apps</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Soluções proprietárias desenvolvidas para escalar negócios e otimizar processos.
        </p>
      </div>

      {/* Scroll Container with CSS Snap + Mouse Drag */}
      <div
        ref={scrollRef}
        className={`flex overflow-x-auto snap-x snap-mandatory pb-12 px-6 md:px-[max(2rem,calc((100vw-1280px)/2+2rem))] gap-8 no-scrollbar ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {apps.map((app, i) => {
          const isImage = app.cover.includes('/') || app.cover.includes('.');

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="snap-center shrink-0 w-[350px] md:w-[400px] glass-card rounded-3xl overflow-hidden border border-white/10 group hover:border-yellow-500/30 transition-all select-none"
            >
              {/* Cover Area */}
              <div className={`h-48 relative overflow-hidden ${isImage ? '' : app.cover}`}>
                {isImage ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={app.cover} alt={app.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-black/20" />
                )}

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Status & Version Header */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                  <StatusBadge status={app.status} />
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-[10px] font-mono text-zinc-300 border border-white/10 shadow-lg">
                    {app.version}
                  </span>
                </div>

                {/* App Icon (Bottom Left) */}
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg overflow-hidden relative">
                    {/* Fallback container in case image is missing / placeholder */}
                    {app.icon ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={app.icon} alt="App Icon" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-zinc-800" />
                    )}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-white font-bold text-lg drop-shadow-md">{app.title}</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {app.tags.map((tag, t) => (
                    <span key={t} className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-zinc-400 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                      <Tag size={10} /> {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {app.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                  {app.description}
                </p>

                {/* Action Button */}
                {app.status === 'live' ? (
                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Acessar Plataforma <ExternalLink size={16} />
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 text-zinc-500 font-bold rounded-xl border border-white/5 cursor-not-allowed"
                  >
                    {app.status === 'development' ? 'Em Breve' : 'Aguarde'}
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Spacer for right-side overflow padding */}
        <div className="shrink-0 w-6 md:w-[max(2rem,calc((100vw-1280px)/2+2rem))]" />
      </div>
    </section>
  );
}
