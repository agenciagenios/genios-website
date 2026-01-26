"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Serviços", href: "/servicos" },
  { name: "Portfólio", href: "/portfolio" },
  {
    name: "Planos",
    href: "/planos",
    dropdown: [
      { name: "Social Media", href: "/planos/social-media", description: "Gestão completa de redes sociais" },
      { name: "Mercado", href: "/planos/mercado", description: "Posicionamento e vendas locais" },
      { name: "Artes", href: "/planos/artes", description: "Design gráfico profissional" },
      { name: "Edição de Vídeo", href: "/planos/edicao-de-video", description: "Reels, Shorts e YouTube" },
      { name: "Programação", href: "/planos/programacao", description: "Sistemas e automações" },
      { name: "Gestor de Tráfego", href: "/planos/gestor-de-trafego", description: "Anúncios que vendem" },
    ]
  },
  {
    name: "Institucional",
    href: "/sobre",
    dropdown: [
      { name: "Sobre Nós", href: "/sobre", description: "Conheça quem somos" },
      { name: "Privacidade", href: "/politica-de-privacidade", description: "Política de Privacidade" },
      { name: "Termos de Uso", href: "/termos-de-uso", description: "Nossos Termos de Uso" },
    ]
  },
  { name: "Contato", href: "/#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
        }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-300 ${scrolled
          ? "mx-6 rounded-2xl glass border-white/10"
          : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo-genios.svg"
              alt="Agência Gênios"
              width={160}
              height={45}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveMenu(item.name)}
                onMouseLeave={() => item.dropdown && setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors py-4 inline-block"
                >
                  {item.name}
                </Link>

                {item.dropdown && activeMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64"
                  >
                    <div className="glass-card bg-black/90 p-3 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col gap-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block p-3 rounded-xl hover:bg-white/5 transition-all group/sub"
                        >
                          <div className="text-sm font-bold text-white group-hover/sub:text-yellow-400 transition-colors">{subItem.name}</div>
                          <div className="text-[10px] text-zinc-500">{subItem.description}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
            <Link
              href="/#contato"
              className="px-5 py-2 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/10"
            >
              Orçamento
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 p-6 rounded-2xl glass bg-black/95 border-white/10 flex flex-col gap-2 max-h-[80vh] overflow-y-auto"
        >
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col border-b border-white/5 last:border-0 pb-2 mb-2 last:pb-0 last:mb-0">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleExpanded(item.name)}
                    className="text-lg font-medium text-zinc-300 hover:text-white flex items-center justify-between py-2"
                  >
                    {item.name}
                    <span className={`text-zinc-500 transition-transform ${expandedItems[item.name] ? 'rotate-180' : ''}`}>▾</span>
                  </button>
                  {expandedItems[item.name] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="flex flex-col gap-3 pl-4 py-2"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex flex-col"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-sm font-bold text-zinc-200">{subItem.name}</span>
                          <span className="text-[10px] text-zinc-500">{subItem.description}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-lg font-medium text-zinc-300 hover:text-white py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/#contato"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-5 py-3 text-center text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/10"
          >
            Orçamento
          </Link>
        </motion.div>
      )}
    </header>
  );
}
