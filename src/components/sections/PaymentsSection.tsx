import React from "react";
import { Clock, Zap, Wallet } from "lucide-react";

export function PaymentsSection() {
  const paymentMethods = [
    {
      id: "paypal",
      name: "PayPal",
      type: "USD",
      desc: "Saque direto para sua conta PayPal.",
      badge: "Moeda Fiduciária",
      color: "from-blue-500 to-indigo-600",
      accent: "#3b82f6",
      iconSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 20.5H9.5L10.7 13H8.2L7 20.5Z"
            fill="#0079C1"
          />
          <path
            d="M19.5 7.8C19 5.5 17 4 14.2 4H7.5L5.5 16.5H9.5L10.3 11.5H12.8C16.2 11.5 18.8 10 19.5 7.8Z"
            fill="#00457C"
          />
          <path
            d="M16.5 10.5C15.8 12.5 14 13.8 11.5 13.8H9.8L8.8 20H11.5L12.3 15H13.8C16.8 15 19.2 13.7 19.8 10.5H16.5Z"
            fill="#0079C1"
          />
        </svg>
      ),
    },
    {
      id: "usdt",
      name: "USDT",
      type: "Criptomoeda estável",
      subType: "(Tron / ERC-20)",
      desc: "Criptomoeda estável e segura.",
      badge: "Stablecoin 1:1 USD",
      color: "from-emerald-500 to-teal-600",
      accent: "#10b981",
      iconSvg: (
        <div className="w-8 h-8 rounded-full bg-[#26A17B] text-white font-black flex items-center justify-center text-sm shadow-[0_0_15px_rgba(38,161,123,0.5)]">
          ₮
        </div>
      ),
    },
    {
      id: "jumptask",
      name: "JumpTask",
      type: "Cripto",
      subType: "(JMPT)",
      desc: "Receba em JMPT diretamente na sua wallet.",
      badge: "+10% de Bônus",
      color: "from-cyan-500 to-blue-600",
      accent: "#06b6d4",
      iconSvg: (
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-[#050b0e] font-black flex items-center justify-center text-sm shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          J
        </div>
      ),
    },
  ];

  return (
    <section id="pagamentos" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050b0e] text-white">
      {/* Glow de fundo */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-14">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071a1f] border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <span className="text-[#00e676]">➜</span>
            <span>PAGAMENTOS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Receba seus ganhos do seu jeito
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Escolha entre saque em dólar via PayPal ou criptomoedas. Rápido, seguro e sem burocracia.
          </p>
        </div>

        {/* 3 Cards de Métodos de Pagamento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="rounded-3xl bg-[#071419]/90 border border-emerald-500/20 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(0,230,118,0.15)] transition-all hover:translate-y-[-3px] space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#0d2229] border border-emerald-500/20">
                    {method.iconSvg}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0d2229] border border-emerald-500/30 text-emerald-300">
                    {method.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {method.name}
                    {method.subType && (
                      <span className="text-xs text-slate-400 font-normal">{method.subType}</span>
                    )}
                  </h3>
                  <span className="text-xs font-semibold text-[#00e676] block mt-0.5">
                    {method.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {method.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-500/10 flex items-center gap-2 text-xs text-slate-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#00e676]" />
                <span>Disponível no Brasil</span>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de Saque e Processamento */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#071419] border border-emerald-500/20">
            <Wallet className="w-4 h-4 text-[#00e676]" />
            <span>Mínimo de saque: <strong className="text-white">$20 USD</strong></span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#071419] border border-emerald-500/20">
            <Zap className="w-4 h-4 text-[#00e676]" />
            <span>Processamento: <strong className="text-white">até 24h</strong></span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#071419] border border-emerald-500/20">
            <Clock className="w-4 h-4 text-[#00e676]" />
            <span>Saques 100% sob demanda</span>
          </div>
        </div>

      </div>
    </section>
  );
}
