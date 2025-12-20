"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { general } from "../data/general";

// --- Configuration Types ---
type FieldType = "text" | "checkbox" | "money" | "password";

interface QuestionConfig {
    id: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    required?: boolean;
    dependentOn?: {
        field: string;
        value: boolean; // Show if the dependent field has this value
    };
}

// --- Configuration Object ---
const QUESTIONS_CONFIG: QuestionConfig[] = [
    {
        id: "instagram",
        label: "Qual o Instagram da empresa?",
        type: "text",
        placeholder: "@seuinstagram",
        required: true,
    },
    {
        id: "facebook",
        label: "Qual o Facebook da empresa?",
        type: "text",
        placeholder: "facebook.com/suaempresa",
        required: true,
    },
    {
        id: "investInAds",
        label: "Deseja investir em tráfego pago?",
        type: "checkbox",
        required: false,
    },
    {
        id: "adBudget",
        label: "Qual valor deseja investir em tráfego?",
        type: "money",
        placeholder: "R$ 0,00",
        required: true,
        dependentOn: {
            field: "investInAds",
            value: true,
        },
    },
    {
        id: "hasMetaBusiness",
        label: "Já possui Meta Business Suite configurado?",
        type: "checkbox",
        required: false,
    },
    {
        id: "accessPasswords",
        label: "Informe as senhas de acesso (Instagram/Facebook)",
        type: "password", // Or text, user asked for access passwords logic
        placeholder: "Usuário e senha...",
        required: true,
        dependentOn: {
            field: "hasMetaBusiness",
            value: false, // Show if they DON'T have it configured (implied they need setup or giving direct access)
        },
    },
    // EXTRA
    {
        id: "useChatbot",
        label: "Você já usa um sistema de chatbot?",
        type: "checkbox",
        required: false,
    },
    {
        id: "testGeniosChat",
        label: "Deseja testar o GêniosCHAT?",
        type: "checkbox",
        required: false,
        dependentOn: {
            field: "useChatbot",
            value: false, // Show if they DON'T use a chatbot
        },
    },
];

interface HirePlanModalProps {
    isOpen: boolean;
    onClose: () => void;
    planName: string;
    planPrice: string;
}

export default function HirePlanModal({
    isOpen,
    onClose,
    planName,
    planPrice,
}: HirePlanModalProps) {
    const [formData, setFormData] = useState<Record<string, any>>({});

    const handleInputChange = (id: string, value: any) => {
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSendToWhatsApp = () => {
        // Construct the message
        let message = `*Olá! Gostaria de contratar o Plano ${planName}* (R$ ${planPrice}/mês)\n\n`;
        message += `Following are my details:\n\n`;

        QUESTIONS_CONFIG.forEach((q) => {
            // Check dependency
            if (q.dependentOn) {
                const dependentValue = formData[q.dependentOn.field];
                // If the dependent value doesn't match the condition, skip this field
                if (dependentValue !== q.dependentOn.value) return;
            }

            let value = formData[q.id];

            // Better formatting for booleans
            if (q.type === 'checkbox') {
                value = value ? "Sim" : "Não";
            }

            if (value) {
                message += `*${q.label}*: ${value}\n`;
            }
        });

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = general.whatsapp; // TODO: Replace with actual number
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
                                Contratar {planName}
                            </h2>
                            <p className="text-zinc-400 mb-6 text-sm">
                                Preencha os dados abaixo para darmos continuidade no seu atendimento.
                            </p>

                            <div className="space-y-5">
                                {QUESTIONS_CONFIG.map((question) => {
                                    // Logic to determine visibility
                                    if (question.dependentOn) {
                                        const dependencyValue = formData[question.dependentOn.field];
                                        // If the dependency value in form data matches the required value, SHOW it.
                                        // NOTE: Checkboxes defaulting to undefined/false is typical.
                                        // If dependentOn value is true, we need formData to be true.
                                        // If dependentOn value is false, we need formData to be falsy (false or undefined).

                                        const isDependencyMet = question.dependentOn.value === true
                                            ? dependencyValue === true
                                            : !dependencyValue; // Handles false or undefined as "not checked"

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

                                            {question.type === "password" && (
                                                <textarea
                                                    placeholder={question.placeholder}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 transition-colors min-h-[80px]"
                                                    value={formData[question.id] || ""}
                                                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                                                />
                                            )}

                                            {question.type === "money" && (
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">R$</span>
                                                    <input
                                                        type="text" // Using text for simplicity, could implement masking
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
                                                        {question.label} {/* For checkbox, label usually goes next to box */}
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
                                    Enviar via WhatsApp
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
