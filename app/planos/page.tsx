import { Metadata } from "next";
import PlanosContent from "./PlanosContent";

export const metadata: Metadata = {
  title: "Planos de Social Media | Gestão de Redes Sociais",
  description:
    "Planos de Social Media para empresas que desejam crescer no Instagram, Facebook e outras redes sociais. Gestão profissional, criação de conteúdo, design estratégico e tráfego pago para gerar resultados reais.",

  alternates: {
    canonical: "https://agenciagenios.com.br/planos",
  },

  openGraph: {
    title: "Planos de Social Media | Agência Gênios",
    description:
      "Gestão profissional de redes sociais com planos flexíveis. Conteúdo estratégico, design premium e anúncios para aumentar alcance, engajamento e vendas.",
    url: "https://agenciagenios.com.br/planos",
    siteName: "Agência Gênios",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Planos de Social Media da Agência Gênios",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Planos de Social Media | Agência Gênios",
    description:
      "Planos completos de gestão de redes sociais com foco em crescimento, engajamento e conversão.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function PlanosPage() {
  return <PlanosContent />;
}
