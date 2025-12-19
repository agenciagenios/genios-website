import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agência Gênios | Design, Sistemas e Identidade Visual",
  description: "Transforme sua marca com a Agência Gênios. Especialistas em Identidade Visual, Apps, Design Gráfico e Edição de Vídeo. Design minimalista e alta performance.",
  keywords: ["Agência de Publicidade", "Design Gráfico", "Criação de Apps", "Identidade Visual", "Gravação Aérea", "SEO", "Agência Digital"],
  openGraph: {
      title: "Agência Gênios",
      description: "Do conceito à inovação. Transformamos ideias em realidade digital.",
      type: "website",
      locale: "pt_BR",
  }
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
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
