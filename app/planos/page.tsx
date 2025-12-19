import { Metadata } from "next";
import PlanosContent from "./PlanosContent";

export const metadata: Metadata = {
  title: "Planos e Preços",
  description: "Escolha o plano ideal para alavancar suas redes sociais. Planos Start, Pro e Plus com gestão de tráfego e design premium.",
  alternates: {
    canonical: "https://agenciagenios.com/planos",
  },
};

export default function PlanosPage() {
  return <PlanosContent />;
}
