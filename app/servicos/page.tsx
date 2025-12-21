import { Metadata } from "next";
import ServicosContent from "./ServicosContent";

export const metadata: Metadata = {
  title: "Serviços | Design, Sites, Sistemas e Marketing Digital",
  description:
    "Serviços da Agência Gênios em design gráfico, identidade visual, desenvolvimento de sites e sistemas, aplicativos e marketing digital. Soluções estratégicas para fortalecer e escalar sua marca.",

  alternates: {
    canonical: "https://agenciagenios.com.br/servicos",
  },

  openGraph: {
    title: "Serviços | Agência Gênios",
    description:
      "Conheça os serviços da Agência Gênios: design profissional, identidade visual, sites, sistemas web, aplicativos e estratégias de marketing digital.",
    url: "https://agenciagenios.com.br/servicos",
    siteName: "Agência Gênios",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Serviços da Agência Gênios",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Serviços | Agência Gênios",
    description:
      "Soluções completas em design, sites, sistemas e marketing digital para empresas que buscam crescimento.",
    images: ["/og_image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return <ServicosContent />;
}
