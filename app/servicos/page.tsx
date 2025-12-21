import { Metadata } from "next";
import ServicosContent from "./ServicosContent";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça nossos serviços de Identidade Visual, Desenvolvimento de Apps, Design Gráfico e Edição de Vídeo. Soluções completas para elevar sua marca.",
  alternates: {
    canonical: "https://agenciagenios.com.br/servicos",
  },
};

export default function ServicesPage() {
  return <ServicosContent />;
}
