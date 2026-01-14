import { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfólio | Projetos e Cases de Sucesso",
  description:
    "Portfólio da Agência Gênios com projetos reais em design, identidade visual, sites, sistemas e aplicativos. Conheça nossos cases de sucesso e resultados entregues.",

  alternates: {
    canonical: "https://agenciagenios.com.br/portfolio",
  },

  openGraph: {
    title: "Portfólio | Agência Gênios",
    description:
      "Conheça projetos e cases de sucesso da Agência Gênios. Soluções em design, sistemas web, aplicativos e identidade visual para empresas no Brasil e exterior.",
    url: "https://agenciagenios.com.br/portfolio",
    siteName: "Agência Gênios",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de projetos da Agência Gênios",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfólio | Agência Gênios",
    description:
      "Veja projetos reais e cases de sucesso em design, sites, sistemas e aplicativos desenvolvidos pela Agência Gênios.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function PortfolioPage() {
  return <PortfolioContent />;
}
