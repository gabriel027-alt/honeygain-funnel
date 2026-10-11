"use client";

import React, { useState } from "react";
import { ChevronDown, Shield, Battery, DollarSign, Lock } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 1º item aberto por padrão conforme referência

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
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#04080a] text-white">
      {/* Luz volumétrica de fundo */}
      <div className="absolute top-1/2 left-1/4 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-14">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06151b] border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-widest uppercase shadow-[0_0_18px_rgba(0,242,254,0.2)]">
            <span className="text-[#00e676] animate-pulse">➜</span>
            <span>PERGUNTAS FREQUENTES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Tire suas dúvidas
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Aqui estão as principais dúvidas sobre o Honeygain. Se ainda tiver alguma pergunta, nosso suporte está pronto para ajudar.
          </p>
        </div>

        {/* Accordion Interativo com Transições Suaves */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;

            return (
              <div
                key={faq.question}
                className="cyber-card rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#07242e]/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#07242e] to-[#0c3a4a] text-[#00e676] flex items-center justify-center shrink-0 border border-cyan-500/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-white text-base sm:text-lg">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-[#00e676] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 drop-shadow-[0_0_8px_#00e676]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-cyan-500/10">
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
