"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Serviços", href: "/servicos" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Planos", href: "/planos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
        }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-300 ${scrolled
          ? "mx-6 rounded-2xl glass border-white/10 bg-black/50"
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
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
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
          className="md:hidden absolute top-20 left-6 right-6 p-6 rounded-2xl glass bg-black/90 border-white/10 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-zinc-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
