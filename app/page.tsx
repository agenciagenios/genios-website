import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SaaSShowcase from "./components/SaaSShowcase";
import Stats from "./components/Stats";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agência Gênios | Marketing Digital, Design e Tecnologia",
  description: "A Agência Gênios impulsiona seu negócio com estratégias de marketing digital, design de alta conversão e desenvolvimento de sistemas web personalizados.",
  alternates: {
    canonical: "https://agenciagenios.com.br",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Services />
      <Stats />
      <SaaSShowcase />
      <Portfolio limit={4} />
      <Contact />
    </main>
  );
}
