
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidade | Agência Gênios",
    description: "Entenda como a Agência Gênios coleta, usa e protege seus dados pessoais.",
};

export default function PoliticaPrivacidadePage() {
    return (
        <main className="min-h-screen py-32 px-4 sm:px-8 max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                    Política de Privacidade
                </h1>
                <p className="text-xl text-neutral-400">
                    Última atualização: <span className="text-white font-medium">Janeiro de 2026</span>
                </p>
            </div>

            <section className="glass-card p-8 rounded-2xl space-y-6">
                <div className="space-y-4">
                    <p className="text-neutral-300 leading-relaxed">
                        A <strong>Agência Gênios</strong> está comprometida em proteger a sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você utiliza nosso site e nossos aplicativos (como o "Gênios Clientes").
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Coleta de Informações</h2>
                    <p className="text-neutral-300">
                        Coletamos informações que você nos fornece diretamente, como:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                        <li>Dados de identificação (nome, cpf/cnpj).</li>
                        <li>Informações de contato (e-mail, telefone, endereço).</li>
                        <li>Dados de login e senha para acesso aos nossos sistemas.</li>
                        <li>Informações de pagamento e transações (processadas de forma segura).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Uso das Informações</h2>
                    <p className="text-neutral-300">
                        Utilizamos seus dados para:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                        <li>Fornecer, operar e manter nossos serviços e aplicativos.</li>
                        <li>Melhorar, personalizar e expandir nossos serviços.</li>
                        <li>Entender e analisar como você utiliza nossos serviços.</li>
                        <li>Desenvolver novos produtos, serviços, recursos e funcionalidades.</li>
                        <li>Comunicar com você, seja diretamente ou através de um dos nossos parceiros, inclusive para atendimento ao cliente.</li>
                        <li>Enviar atualizações e outras informações relacionadas ao serviço, para fins de marketing e promoção.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Compartilhamento de Dados</h2>
                    <p className="text-neutral-300">
                        Não vendemos seus dados pessoais. Podemos compartilhar informações com prestadores de serviços terceirizados que nos ajudam a operar o negócio (ex: processadores de pagamento, hospedagem), sempre sob obrigações de confidencialidade.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Segurança</h2>
                    <p className="text-neutral-300">
                        Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso, uso, alteração ou destruição não autorizados.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Seus Direitos</h2>
                    <p className="text-neutral-300">
                        Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais. Para exercer esses direitos, entre em contato conosco através dos canais oficiais.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Contato</h2>
                    <p className="text-neutral-300">
                        Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail: <a href="mailto:contato@agenciagenios.com.br" className="text-blue-400 hover:underline">contato@agenciagenios.com.br</a>.
                    </p>
                </div>
            </section>
        </main>
    );
}
