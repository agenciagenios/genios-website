import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SaaSShowcase from "./components/SaaSShowcase";

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
