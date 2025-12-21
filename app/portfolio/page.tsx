import { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Exemplos reais de como transformamos marcas. Identidade Visual, Sites, Apps e muito mais. Veja nossos cases de sucesso.",
  alternates: {
    canonical: "https://agenciagenios.com.br/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
