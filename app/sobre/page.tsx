import { Metadata } from "next";
import SobreContent from "./SobreContent";

export const metadata: Metadata = {
  title: "Sobre a Agência Gênios | Quem Somos",
  description:
    "Conheça a Agência Gênios, nossa história, valores e propósito. Somos especialistas em design, tecnologia e marketing digital, criando experiências digitais estratégicas para marcas que buscam crescimento.",

  alternates: {
    canonical: "https://agenciagenios.com.br/sobre",
  },

  openGraph: {
    title: "Sobre a Agência Gênios",
    description:
      "Descubra a história, os valores e a visão da Agência Gênios. Unimos design, tecnologia e estratégia para transformar marcas em experiências digitais memoráveis.",
    url: "https://agenciagenios.com.br/sobre",
    siteName: "Agência Gênios",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sobre a Agência Gênios",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobre a Agência Gênios",
    description:
      "Conheça a história, os valores e o propósito da Agência Gênios.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function AboutPage() {
  return <SobreContent />;
}
