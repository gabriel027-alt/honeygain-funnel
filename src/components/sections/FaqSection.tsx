"use client";

import React, { useState } from "react";
import { ChevronDown, Shield, Battery, DollarSign, Lock } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primeiro aberto por padrão conforme mockup

  const faqs = [
    {
      icon: Shield,
      question: "Consome meus dados pessoais?",
      answer:
        "Não. O Honeygain usa apenas tráfego residencial criptografado, sem acessar seus dados pessoais. O tráfego é usado por empresas Fortune 500 para pesquisa de mercado, verificação de anúncios e análise de dados.",
    },
    {
      icon: Battery,
      question: "Gasta minha bateria ou rede móvel?",
      answer:
        "Você pode travar o app para rodar apenas no Wi-Fi e somente enquanto o celular estiver carregando ou no PC, sem consumir seu plano móvel nem esgotar sua bateria.",
    },
    {
      icon: DollarSign,
      question: "Como recebo meus ganhos?",
      answer:
        "Os saques são feitos em USD (PayPal) ou cripto (JumpTask/USDT). O processo é seguro e transferido diretamente para a sua conta.",
    },
    {
      icon: Lock,
      question: "É seguro?",
      answer:
        "Sim. O Honeygain é uma plataforma global com milhões de usuários e tecnologia de criptografia avançada, garantindo total privacidade.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050b0e] text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071a1f] border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <span className="text-[#00e676]">➜</span>
            <span>PERGUNTAS FREQUENTES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Tire suas dúvidas
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Aqui estão as principais dúvidas sobre o Honeygain. Se ainda tiver alguma pergunta, nosso suporte está pronto para ajudar.
          </p>
        </div>

        {/* Accordion Interativo */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;

            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-[#071419]/90 border border-emerald-500/20 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#0d2229]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-xl bg-[#0d2229] text-[#00e676] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-white text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-[#00e676] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-emerald-500/10">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
