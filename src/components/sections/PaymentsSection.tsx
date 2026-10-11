import React from "react";
import { Clock, Zap, Wallet } from "lucide-react";

export function PaymentsSection() {
  const paymentMethods = [
    {
      id: "paypal",
      name: "PayPal",
      type: "USD",
      desc: "Saque direto para sua conta bancária via PayPal.",
      badge: "Moeda Fiduciária",
      colorBorder: "hover:border-blue-400/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]",
      badgeColor: "bg-blue-500/15 border-blue-500/30 text-blue-300",
      iconSvg: (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path d="M7 20.5H9.5L10.7 13H8.2L7 20.5Z" fill="#0079C1" />
          <path d="M19.5 7.8C19 5.5 17 4 14.2 4H7.5L5.5 16.5H9.5L10.3 11.5H12.8C16.2 11.5 18.8 10 19.5 7.8Z" fill="#00457C" />
          <path d="M16.5 10.5C15.8 12.5 14 13.8 11.5 13.8H9.8L8.8 20H11.5L12.3 15H13.8C16.8 15 19.2 13.7 19.8 10.5H16.5Z" fill="#0079C1" />
        </svg>
      ),
    },
    {
      id: "usdt",
      name: "USDT",
      type: "Criptomoeda estável",
      subType: "(Tron / ERC-20)",
      desc: "Criptomoeda estável e segura cotada 1:1 com o dólar.",
      badge: "Stablecoin 1:1 USD",
      colorBorder: "hover:border-[#00e676]/60 hover:shadow-[0_0_35px_rgba(0,230,118,0.3)]",
      badgeColor: "bg-[#00e676]/15 border-[#00e676]/30 text-[#00e676]",
      iconSvg: (
        <div className="w-9 h-9 rounded-full bg-[#26A17B] text-white font-black flex items-center justify-center text-base shadow-[0_0_15px_rgba(38,161,123,0.6)]">
          ₮
        </div>
      ),
    },
    {
      id: "jumptask",
      name: "JumpTask",
      type: "Cripto",
      subType: "(JMPT)",
      desc: "Receba em JMPT diretamente na sua wallet com bônus de rendimento.",
      badge: "+10% de Bônus",
      colorBorder: "hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.3)]",
      badgeColor: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
      iconSvg: (
        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-[#04080a] font-black flex items-center justify-center text-base shadow-[0_0_15px_rgba(6,182,212,0.6)]">
          J
        </div>
      ),
    },
  ];

  return (
    <section id="pagamentos" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#04080a] text-white">
      {/* Luz volumétrica de fundo */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06151b] border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-widest uppercase shadow-[0_0_18px_rgba(0,242,254,0.2)]">
            <span className="text-[#00e676] animate-pulse">➜</span>
            <span>PAGAMENTOS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Receba seus ganhos do seu jeito
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Escolha entre saque em dólar via PayPal ou criptomoedas. Rápido, seguro e sem burocracia.
          </p>
        </div>

        {/* 3 Cards de Métodos de Pagamento com Cyber-Card e Hover Brilhante */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`cyber-card rounded-3xl p-7 flex flex-col justify-between space-y-6 ${method.colorBorder}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#040c0f] border border-cyan-500/20">
                    {method.iconSvg}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${method.badgeColor}`}>
                    {method.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white flex items-center gap-2">
                    {method.name}
                    {method.subType && (
                      <span className="text-xs text-slate-400 font-normal">{method.subType}</span>
                    )}
                  </h3>
                  <span className="text-xs font-bold text-[#00e676] block mt-0.5">
                    {method.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {method.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-500/10 flex items-center gap-2 text-xs text-slate-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#00e676] shadow-[0_0_6px_#00e676]" />
                <span>Disponível no Brasil</span>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de Saque e Processamento */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#06151b] border border-emerald-500/25 shadow-md">
            <Wallet className="w-4 h-4 text-[#00e676]" />
            <span>Mínimo de saque: <strong className="text-white font-mono">$20 USD</strong></span>
          </div>
          <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#06151b] border border-emerald-500/25 shadow-md">
            <Zap className="w-4 h-4 text-[#00e676]" />
            <span>Processamento: <strong className="text-white font-mono">até 24h</strong></span>
          </div>
          <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#06151b] border border-emerald-500/25 shadow-md">
            <Clock className="w-4 h-4 text-[#00e676]" />
            <span>Saques 100% sob demanda</span>
          </div>
        </div>

      </div>
    </section>
  );
}
