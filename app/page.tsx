import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SaaSShowcase from "./components/SaaSShowcase";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agência Gênios | Marketing Digital, Design e Tecnologia",
  description: "A Agência Gênios impulsiona seu negócio com estratégias de marketing digital, design de alta conversão e desenvolvimento de sistemas web personalizados.",
  alternates: {
    canonical: "https://agenciagenios.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Services />
      <SaaSShowcase />
      <Portfolio />
      <Contact />
    </main>
  );
}
