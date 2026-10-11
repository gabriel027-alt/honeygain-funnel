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
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#04080a] text-white">
      {/* Luz volumétrica de fundo */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Textos & 4 Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06151b] border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-widest uppercase shadow-[0_0_18px_rgba(0,242,254,0.2)]">
                <span className="text-[#00e676] animate-pulse">➜</span>
                <span>POR QUE HONEYGAIN?</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Mais do que dinheiro,{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#00e676] to-[#05f292] filter drop-shadow-[0_0_20px_rgba(0,230,118,0.3)]">
                  é liberdade
                </span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">
                Transforme o tempo que você já passa online em uma fonte de renda extra, sem esforço.
              </p>
            </div>

            {/* Grid 2x2 com Efeito Cyber-Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="cyber-card rounded-2xl p-6 space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#07242e] to-[#0c3a4a] border border-cyan-400/30 flex items-center justify-center text-[#00e676] shadow-[0_0_15px_rgba(0,230,118,0.2)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{c.title}</h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lado Direito: Terminal Holográfico 3D */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

            {/* Terminal Container */}
            <div className="relative w-full max-w-md cyber-card rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,242,254,0.15)] space-y-4 [transform:perspective(1000px)_rotateY(-6deg)]">
              <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                </div>
                <span className="text-[10px] font-mono text-cyan-300 tracking-wider">RESIDENTIAL_NETWORK // ACTIVE</span>
              </div>

              {/* Telas Internas */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#03090c] border border-emerald-500/20">
                  <span className="text-[10px] text-slate-400 font-mono block">Taxa de Conexão</span>
                  <span className="text-sm font-mono font-black text-[#00e676] mt-0.5 block">99.98% Uptime</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#03090c] border border-emerald-500/20">
                  <span className="text-[10px] text-slate-400 font-mono block">Impacto na CPU</span>
                  <span className="text-sm font-mono font-black text-cyan-400 mt-0.5 block">&lt; 1% (Zero Lag)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#03090c] border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-300 font-semibold block">Créditos em Tempo Real</span>
                  <span className="text-xl font-black text-[#00e676]">+ 42.36 USD</span>
                </div>
                <span className="text-[11px] px-3 py-1 rounded-full bg-[#00e676]/15 text-[#00e676] border border-[#00e676]/40 font-bold font-mono">
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
