
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Termos de Uso | Agência Gênios",
    description: "Termos e condições para uso dos serviços e sistemas da Agência Gênios.",
};

export default function TermosUsoPage() {
    return (
        <main className="min-h-screen py-32 px-4 sm:px-8 max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                    Termos de Uso
                </h1>
                <p className="text-xl text-neutral-400">
                    Última atualização: <span className="text-white font-medium">Janeiro de 2026</span>
                </p>
            </div>

            <section className="glass-card p-8 rounded-2xl space-y-6">
                <div className="space-y-4">
                    <p className="text-neutral-300 leading-relaxed">
                        Bem-vindo à <strong>Agência Gênios</strong>. Ao acessar nosso site, contratar nossos serviços ou utilizar nossos aplicativos (como o "Gênios Clientes"), você concorda em cumprir estes Termos de Uso.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Serviços</h2>
                    <p className="text-neutral-300">
                        A Agência Gênios fornece serviços de Design Gráfico, Desenvolvimento de Sistemas, Criação de Apps e Identidade Visual. O escopo detalhado de cada serviço é definido em contrato específico ou proposta comercial aprovada.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Uso Aceitável</h2>
                    <p className="text-neutral-300">
                        Você concorda em usar nossos serviços e sistemas apenas para fins legais e de acordo com estes Termos. É proibido:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                        <li>Usar nossos serviços de forma que viole qualquer lei ou regulamento.</li>
                        <li>Tentar violar a segurança de qualquer rede, sistema ou servidor da Agência Gênios.</li>
                        <li>Engenharia reversa ou tentativa de copiar nossos softwares e códigos-fonte.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Propriedade Intelectual</h2>
                    <p className="text-neutral-300">
                        Todo o conteúdo, marcas, logos, softwares e designs apresentados em nosso site e aplicativos são de propriedade exclusiva da Agência Gênios ou de seus licenciadores, protegidos por leis de direitos autorais e propriedade intelectual.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitação de Responsabilidade</h2>
                    <p className="text-neutral-300">
                        A Agência Gênios não será responsável por quaisquer danos indiretos, incidentais ou consequentes decorrentes do uso ou da incapacidade de usar nossos serviços, exceto conforme previsto em lei.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Alterações nos Termos</h2>
                    <p className="text-neutral-300">
                        Podemos atualizar estes Termos de Uso periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações. O uso continuado dos serviços após as alterações constitui aceitação dos novos termos.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Lei Aplicável</h2>
                    <p className="text-neutral-300">
                        Estes termos são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa será submetida ao foro da comarca da sede da empresa.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contato</h2>
                    <p className="text-neutral-300">
                        Para questões relacionadas a estes termos, entre em contato pelo e-mail: <a href="mailto:contato@agenciagenios.com.br" className="text-blue-400 hover:underline">contato@agenciagenios.com.br</a>.
                    </p>
                </div>
            </section>
        </main>
    );
}
