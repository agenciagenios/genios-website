import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import SmoothScroll from "./components/SmoothScroll";
import JsonLd from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agenciagenios.com.br"),
  title: {
    default: "Agência Gênios | Design, Sistemas e Identidade Visual",
    template: "%s | Agência Gênios",
  },
  description: "Transforme sua marca com a Agência Gênios. Especialistas em Identidade Visual, Apps, Design Gráfico e Edição de Vídeo. Design minimalista e alta performance.",
  keywords: [
    "Agência de Publicidade",
    "Design Gráfico",
    "Criação de Apps",
    "Identidade Visual",
    "Gravação Aérea",
    "SEO",
    "Agência Digital",
    "Sistemas Web",
    "Marketing Digital",
  ],
  authors: [{ name: "Agência Gênios" }],
  creator: "Agência Gênios",
  publisher: "Agência Gênios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Agência Gênios | Design, Sistemas e Identidade Visual",
    description: "Do conceito à inovação. Transformamos ideias em realidade digital com design premium e tecnologia de ponta.",
    url: "https://agenciagenios.com.br",
    siteName: "Agência Gênios",
    images: [
      {
        url: "/og-image.png", // Make sure to create this image or update path
        width: 1200,
        height: 630,
        alt: "Agência Gênios - Transformando Ideias em Realidade",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência Gênios",
    description: "Do conceito à inovação. Transformamos ideias em realidade digital.",
    images: ["/og-image.png"], // Reusing OG image for consistency
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "apple-mobile-web-app-title": "Gênios",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-yellow-500/30`}
      >
        <SmoothScroll />
        <Header />
        {children}
        <JsonLd />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
