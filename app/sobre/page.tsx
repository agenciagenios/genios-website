import { Metadata } from "next";
import SobreContent from "./SobreContent";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Somos arquitetos de experiências memoráveis. Conheça a história, a equipe e os valores da Agência Gênios.",
  alternates: {
    canonical: "https://agenciagenios.com/sobre",
  },
};

export default function AboutPage() {
  return <SobreContent />;
}
