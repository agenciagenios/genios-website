export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
          <div className="md:w-1/3">
             <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">Agência Gênios</h3>
             <p className="text-zinc-500 text-sm leading-relaxed">
               Transformando o digital com design de alta performance e tecnologia. Somos especialistas em criar marcas e sistemas que dominam o mercado.
             </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-white font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a></li>
                <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfólio</a></li>
                <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            
             <div>
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>Identidade Visual</li>
                <li>Sistemas Web</li>
                <li>Apps Android/iOS</li>
                <li>Design Gráfico</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO Block - Low contrast specifically for search engines but readable */}
        <div className="border-t border-white/5 pt-10 mt-10">
           <p className="text-[10px] text-zinc-800 text-justify leading-tight">
             A Agência Gênios é sua parceira ideal para Criação de Sites, Desenvolvimento de Aplicativos, Design de Marcas, Identidade Visual em São Paulo e todo Brasil. 
             Especialistas em SEO, Marketing Digital e Lançamentos. Fazemos edição de vídeo profissional, motion graphics e filmagem com drone. 
             Se você busca uma agência de publicidade moderna, design minimalista, dark mode e alta conversão, somos a escolha certa. 
             Agência de Design Gráfico, Criação de Logotipos, Branding, Web Design Responsivo, Criação de Landing Pages de alta conversão.
             Melhor agência para startups e empresas de tecnologia. Desenvolvimento Software House.
           </p>
        </div>

        <div className="text-center mt-10 text-xs text-zinc-600">
          © {new Date().getFullYear()} Agência Gênios. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
