import React from "react";
import { UserCheck, ShieldCheck, Headphones, Zap } from "lucide-react";

export function BenefitsSection() {
  const cards = [
    {
      icon: UserCheck,
      title: "Renda passiva real",
      desc: "Seu tráfego vale dinheiro.",
    },
    {
      icon: ShieldCheck,
      title: "Seguro e criptografado",
      desc: "Seus dados são protegidos.",
    },
    {
      icon: Headphones,
      title: "Suporte global",
      desc: "Equipe pronta para ajudar.",
    },
    {
      icon: Zap,
      title: "Flexível e sem limites",
      desc: "Você escolhe quando usar.",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050b0e] text-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Textos & 4 Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071a1f] border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,242,254,0.15)]">
                <span className="text-[#00e676]">➜</span>
                <span>POR QUE HONEYGAIN?</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Mais do que dinheiro,{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#00e676] to-[#05f292]">
                  é liberdade
                </span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base max-w-lg">
                Transforme o tempo que você já passa online em uma fonte de renda extra, sem esforço.
              </p>
            </div>

            {/* Grid 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="p-5 rounded-2xl bg-[#071419]/90 border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:translate-y-[-2px] space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0d2229] border border-emerald-500/30 flex items-center justify-center text-[#00e676]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{c.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lado Direito: Visual Isométrico Futurista Holográfico */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Laptop / Interface Holográfica */}
            <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-tr from-[#071419] via-[#0b242c] to-[#071419] border border-cyan-400/40 p-6 shadow-[0_0_40px_rgba(0,242,254,0.2)] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <span className="text-[10px] font-mono text-cyan-300">SECURE_NETWORK // 100% PASSIVE</span>
              </div>

              {/* Telas internas simuladas */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#040c0f] border border-emerald-500/20">
                  <span className="text-[10px] text-slate-400 block">Uptime</span>
                  <span className="text-sm font-mono font-bold text-[#00e676]">99.98% Ativo</span>
                </div>
                <div className="p-3 rounded-xl bg-[#040c0f] border border-emerald-500/20">
                  <span className="text-[10px] text-slate-400 block">Velocidade</span>
                  <span className="text-sm font-mono font-bold text-cyan-400">Zero Lag</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#040c0f] border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-300 font-semibold block">Créditos em Tempo Real</span>
                  <span className="text-lg font-black text-[#00e676]">+ 42.36 USD</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#00e676]/10 text-[#00e676] border border-[#00e676]/30 font-bold">
                  Sincronizado
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
