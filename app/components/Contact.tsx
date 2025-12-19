"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Vamos criar algo <span className="text-blue-500">Genial?</span>
            </motion.h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-lg">
              Entre em contato conosco e descubra como podemos elevar o patamar da sua marca com design e estratégia.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-blue-400">
                  @
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="font-medium">contato@agenciagenios.com.br</p>
                </div>
              </div>
               <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-green-400">
                  WA
                </div>
                 <div>
                  <p className="text-sm text-zinc-500">WhatsApp</p>
                  <p className="font-medium">Confira no link do perfil</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <form className="glass-card p-8 md:p-10 rounded-3xl space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Seu Nome</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600"
                  placeholder="João Silva"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Email Corporativo</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600"
                  placeholder="joao@empresa.com"
                />
              </div>

               <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Serviço de Interesse</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all [&>option]:bg-black">
                  <option>Identidade Visual</option>
                  <option>Sistemas e Apps</option>
                  <option>Design Gráfico</option>
                  <option>Edição de Vídeo</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600 resize-none"
                  placeholder="Conte um pouco sobre o seu projeto..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                Enviar Mensagem
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
