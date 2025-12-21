"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Check } from "lucide-react";
import { useState } from "react";
import { general } from "../data/general";

// --- Configuration Types ---
type FieldType = "text" | "checkbox" | "money" | "password" | "textarea";

interface QuestionConfig {
    id: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    required?: boolean;
    dependentOn?: {
        field: string;
        value: boolean;
    };
}

// --- Service-Specific Data ---
const SERVICE_QUESTIONS: Record<string, QuestionConfig[]> = {
    "Identidade Visual": [
        {
            id: "projectName",
            label: "Nome da marca/projeto",
            type: "text",
            placeholder: "Ex: TechSolutions",
            required: true,
        },
        {
            id: "businessType",
            label: "Ramo de atuação",
            type: "text",
            placeholder: "Ex: Tecnologia, Moda, Alimentação...",
            required: true,
        },
        {
            id: "hasCurrentLogo",
            label: "Já possui logo/identidade atual?",
            type: "checkbox",
            required: false,
        },
        {
            id: "preferredColors",
            label: "Cores de preferência",
            type: "text",
            placeholder: "Ex: Azul e Branco, Neutras, Vibrantes...",
            required: false,
        },
        {
            id: "brandMessage",
            label: "O que espera transmitir com a marca?",
            type: "textarea",
            placeholder: "Ex: Confiança, inovação, elegância...",
            required: true,
        },
    ],
    "Sistemas & Apps": [
        {
            id: "projectType",
            label: "Tipo de projeto",
            type: "text",
            placeholder: "Ex: Site, Aplicativo Mobile, Sistema Web...",
            required: true,
        },
        {
            id: "projectDescription",
            label: "Descrição resumida da ideia",
            type: "textarea",
            placeholder: "Descreva o que o sistema deve fazer...",
            required: true,
        },
        {
            id: "hasDesign",
            label: "Já possui design/layout pronto?",
            type: "checkbox",
            required: false,
        },
        {
            id: "keyFeatures",
            label: "Funcionalidades principais",
            type: "textarea",
            placeholder: "Ex: Login, Pagamento, Chat, Dashboard...",
            required: false,
        },
    ]
};

interface ServiceBriefingModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceName: string;
}

export default function ServiceBriefingModal({
    isOpen,
    onClose,
    serviceName,
}: ServiceBriefingModalProps) {
    const [formData, setFormData] = useState<Record<string, any>>({});

    const questions = SERVICE_QUESTIONS[serviceName] || [];

    const handleInputChange = (id: string, value: any) => {
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSendToWhatsApp = () => {
        // Construct the message
        let message = `*Olá! Gostaria de um orçamento para: ${serviceName}*\n\n`;
        message += `*Briefing Inicial:*\n\n`;

        questions.forEach((q) => {
            // Check dependency
            if (q.dependentOn) {
                const dependentValue = formData[q.dependentOn.field];
                if (dependentValue !== q.dependentOn.value) return;
            }

            let value = formData[q.id];

            if (q.type === 'checkbox') {
                value = value ? "Sim" : "Não";
            }

            if (value) {
                message += `*${q.label}*: ${value}\n`;
            }
        });

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = general.whatsapp;
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg p-6"
                    >
                        <div className="glass-card rounded-3xl p-8 relative max-h-[90vh] overflow-y-auto">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <h2 className="text-2xl font-bold text-white mb-2">
                                Briefing: {serviceName}
                            </h2>
                            <p className="text-zinc-400 mb-6 text-sm">
                                Responda algumas perguntas para entendermos melhor seu projeto.
                            </p>

                            <div className="space-y-5">
                                {questions.map((question) => {
                                    if (question.dependentOn) {
                                        const dependencyValue = formData[question.dependentOn.field];
                                        const isDependencyMet = question.dependentOn.value === true
                                            ? dependencyValue === true
                                            : !dependencyValue;
                                        if (!isDependencyMet) return null;
                                    }

                                    return (
                                        <div key={question.id} className="space-y-2">
                                            <label className="text-sm font-medium text-zinc-300 block">
                                                {question.label}
                                            </label>

                                            {question.type === "text" && (
                                                <input
                                                    type="text"
                                                    placeholder={question.placeholder}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                                    value={formData[question.id] || ""}
                                                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                                                />
                                            )}

                                            {question.type === "textarea" && (
                                                <textarea
                                                    placeholder={question.placeholder}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 transition-colors min-h-[100px]"
                                                    value={formData[question.id] || ""}
                                                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                                                />
                                            )}

                                            {question.type === "password" && (
                                                <input
                                                    type="password"
                                                    placeholder={question.placeholder}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                                    value={formData[question.id] || ""}
                                                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                                                />
                                            )}

                                            {question.type === "money" && (
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">R$</span>
                                                    <input
                                                        type="text"
                                                        placeholder="0,00"
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                                        value={formData[question.id] || ""}
                                                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                                                    />
                                                </div>
                                            )}

                                            {question.type === "checkbox" && (
                                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors" onClick={() => handleInputChange(question.id, !formData[question.id])}>
                                                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${formData[question.id] ? 'bg-yellow-500 border-yellow-500 text-black' : 'border-zinc-500'}`}>
                                                        {formData[question.id] && <CheckIcon />}
                                                    </div>
                                                    <span className="text-sm text-zinc-300 pointer-events-none select-none">
                                                        {question.label}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}

                                <button
                                    onClick={handleSendToWhatsApp}
                                    className="w-full py-4 mt-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                                >
                                    <MessageCircle size={20} />
                                    Enviar Briefing no WhatsApp
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

function CheckIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    )
}
