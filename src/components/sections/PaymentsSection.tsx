import React from "react";
import Image from "next/image";
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
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
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
        <div className="w-8 h-8 rounded-full bg-[#26A17B] text-white font-black flex items-center justify-center text-sm shadow-[0_0_15px_rgba(38,161,123,0.6)]">
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
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-[#04080a] font-black flex items-center justify-center text-sm shadow-[0_0_15px_rgba(6,182,212,0.6)]">
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071a20]/80 border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-widest uppercase shadow-[0_0_18px_rgba(0,242,254,0.2)] backdrop-blur-md">
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

        {/* Layout Grid: 3 Cards de Métodos + Showcase da Carteira 3D */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Lado Esquerdo: 3 Cards dos Métodos de Pagamento */}
          <div className="lg:col-span-7 space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`cyber-card rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${method.colorBorder}`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-[#040c0f] border border-cyan-500/20 shrink-0">
                    {method.iconSvg}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-white">{method.name}</h3>
                      {method.subType && (
                        <span className="text-xs text-slate-400 font-mono">{method.subType}</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {method.desc}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-emerald-500/10 shrink-0">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${method.badgeColor}`}>
                    {method.badge}
                  </span>
                  <span className="text-xs font-bold text-[#00e676] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] shadow-[0_0_6px_#00e676]" />
                    Ativo no Brasil
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Lado Direito: Arte 3D da Carteira Digital (/wallet-3d-semfundo.png) */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-2">
            <div className="relative z-20 animate-float transition-transform duration-500 hover:scale-[1.03]">
              <div className="rounded-3xl overflow-hidden border border-emerald-500/30 drop-shadow-[0_0_40px_rgba(0,230,118,0.25)] bg-[#04080a]">
                <Image
                  src="/wallet-3d-semfundo.png"
                  alt="Carteira Digital 3D com Moedas e Cartões Neon"
                  width={560}
                  height={420}
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>

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
