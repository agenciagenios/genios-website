
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Excluir Conta | Gênios Clientes",
    description: "Saiba como solicitar a exclusão de sua conta e dados no app Gênios Clientes.",
};

export default function ExcluirContaPage() {
    return (
        <main className="min-h-screen py-32 px-4 sm:px-8 max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                    Exclusão de Conta
                </h1>
                <p className="text-xl text-neutral-400">
                    App <span className="text-white font-medium">Gênios Clientes</span>
                </p>
            </div>

            <section className="glass-card p-8 rounded-2xl space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-white">Como solicitar a exclusão</h2>
                    <p className="text-neutral-300 leading-relaxed mb-4">
                        Prezamos pela sua privacidade e controle sobre seus dados. Se você deseja excluir sua conta e dados associados no aplicativo <strong>Gênios Clientes</strong>, siga um dos procedimentos abaixo:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-2">
                        {/**
                         * <li>
                            <strong>Via App:</strong> Acesse <em>Configurações {'>'} Minha Conta {'>'} Excluir Conta</em> e confirme a solicitação.
                        </li>
                         */}
                        <li>
                            <strong>Via Suporte:</strong> Envie um e-mail para <a href="mailto:contato@agenciagenios.com.br" className="text-blue-400 hover:underline">contato@agenciagenios.com.br</a> com o assunto "Exclusão de Conta - Gênios Clientes", informando seu e-mail de cadastro.
                        </li>
                    </ul>
                    <p className="text-neutral-400 text-sm mt-4">
                        Após a solicitação, seus dados serão processados para exclusão em até 30 dias.
                    </p>
                </div>
            </section>

            <section className="glass-card p-8 rounded-2xl space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-white">Política de Dados</h2>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-medium text-red-400 mb-2">Dados Excluídos</h3>
                            <p className="text-neutral-400 text-sm mb-3">
                                Os seguintes dados serão permanentemente removidos de nossos sistemas ativos:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-neutral-300 text-sm">
                                <li>Informações de perfil (Nome, Foto e outros dados)</li>
                                <li>Credenciais de acesso</li>
                                <li>Preferências de configuração no app</li>
                                <li>Identificadores de dispositivo</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-yellow-400 mb-2">Dados Mantidos</h3>
                            <p className="text-neutral-400 text-sm mb-3">
                                Algumas informações podem ser retidas por períodos adicionais para cumprimento de obrigações legais ou fiscais:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-neutral-300 text-sm">
                                <li>Registros de transações financeiras e notas fiscais (conforme legislação fiscal vigente)</li>
                                <li>Logs de acesso para auditoria de segurança (retidos por 6 meses conforme Marco Civil da Internet)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
