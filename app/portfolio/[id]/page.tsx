import { projects } from "../../data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: `${project.title} | Portfólio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images || [],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="pt-40 text-center text-white">Projeto não encontrado.</div>;
  }

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
       <Link href="/portfolio" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> Voltar para Portfólio
       </Link>

       <div className="mb-16">
          <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 text-white ${project.color.replace('bg-', 'bg-opacity-20 text-opacity-100 bg-')}`}>
             {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">{project.title}</h1>
          <p className="text-2xl text-zinc-300 max-w-3xl leading-relaxed">
             {project.description}
          </p>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
             <div className="aspect-video rounded-3xl overflow-hidden glass-card relative bg-zinc-900 border border-white/10">
                 <div className={`absolute inset-0 ${project.color} opacity-20`} />
                 <div className="flex items-center justify-center h-full text-zinc-500">
                    Imagem Principal do Projeto (1920x1080)
                 </div>
             </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="aspect-square rounded-3xl overflow-hidden glass-card relative bg-zinc-900 border border-white/10">
                     <div className={`absolute inset-0 ${project.color} opacity-10`} />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden glass-card relative bg-zinc-900 border border-white/10">
                     <div className={`absolute inset-0 ${project.color} opacity-10`} />
                </div>
             </div>
          </div>

          <div className="space-y-10">
             <div className="glass-card p-8 rounded-3xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Sobre o Projeto</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                   {project.details}
                </p>
                <div className="h-px w-full bg-white/10 my-6" />
                <div className="space-y-4">
                   <div>
                      <span className="block text-xs text-zinc-500 uppercase tracking-wider">Cliente</span>
                      <span className="text-white font-medium">Confidencial</span>
                   </div>
                   <div>
                      <span className="block text-xs text-zinc-500 uppercase tracking-wider">Ano</span>
                      <span className="text-white font-medium">2024</span>
                   </div>
                   <div>
                      <span className="block text-xs text-zinc-500 uppercase tracking-wider">Serviços</span>
                      <span className="text-white font-medium">{project.category}</span>
                   </div>
                </div>
             </div>

             <div className="glass-card p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-600/20 to-orange-600/20">
                <h3 className="text-xl font-bold text-white mb-2">Gostou desse resultado?</h3>
                <p className="text-zinc-300 mb-6 text-sm">Vamos construir algo similar para a sua marca.</p>
                <a href="/#contato" className="block w-full py-3 bg-white text-black font-bold text-center rounded-xl hover:bg-zinc-200 transition-colors">
                   Solicitar Orçamento
                </a>
             </div>
          </div>
       </div>
    </div>
  );
}
