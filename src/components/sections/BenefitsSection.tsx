import React from "react";
import {
  UserCheck,
  ShieldCheck,
  Headphones,
  Zap,
  TrendingUp,
  Cpu,
  Globe2,
  Lock,
} from "lucide-react";

export function BenefitsSection() {
  const cards = [
    {
      icon: UserCheck,
      title: "Renda passiva real",
      desc: "Seu tráfego vale dinheiro real, pago todo mês.",
    },
    {
      icon: ShieldCheck,
      title: "Seguro e criptografado",
      desc: "Seus dados privados continuam 100% blindados.",
    },
    {
      icon: Headphones,
      title: "Suporte global",
      desc: "Equipe especializada pronta para ajudar 24/7.",
    },
    {
      icon: Zap,
      title: "Flexível e sem limites",
      desc: "Você decide quando pausar ou ativar o app.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#04080a] text-white">
      {/* Luz volumétrica de fundo */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Coluna da Esquerda: Copy & 4 Cards (2x2) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071a20]/80 border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-widest uppercase shadow-[0_0_18px_rgba(0,242,254,0.2)] backdrop-blur-md">
                <span className="text-[#00e676] animate-pulse">➜</span>
                <span>POR QUE HONEYGAIN?</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Mais do que dinheiro,{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#00e676] to-[#05f292] filter drop-shadow-[0_0_20px_rgba(0,230,118,0.4)]">
                  é liberdade
                </span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">
                Transforme o tempo que você já passa online em uma fonte de renda extra contínua, sem esforço e no piloto automático.
              </p>
            </div>

            {/* Grid 2x2 com Espaçamento Amplo e Glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="cyber-card rounded-2xl p-6 space-y-3 border border-cyan-500/15 hover:border-[#00e676]/50 transition-all hover:translate-y-[-2px]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#07242e] to-[#0c3a4a] border border-cyan-400/30 flex items-center justify-center text-[#00e676] shadow-[0_0_15px_rgba(0,230,118,0.25)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{c.title}</h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Coluna da Direita: Card de Destaque Grande com Glassmorphism Real e Métricas em Tempo Real */}
          <div className="lg:col-span-5 relative w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00e676]/10 via-cyan-400/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative bg-[#071920]/70 border border-cyan-400/20 backdrop-blur-xl rounded-3xl p-7 sm:p-9 shadow-[0_0_50px_rgba(0,242,254,0.1)] space-y-6">
              {/* Header do Card com Status Ativo */}
              <div className="flex items-center justify-between pb-4 border-b border-cyan-500/15">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00e676] animate-ping" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    Monitoramento da Rede
                  </span>
                </div>
                <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#00e676]/15 border border-[#00e676]/30 text-[#00e676]">
                  Ativo & Conectado
                </span>
              </div>

              {/* Grid 2x2 de Telemetria e Métricas */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-[#040d12]/90 border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] mb-1">
                    <Globe2 className="w-3.5 h-3.5 text-[#00e676]" />
                    <span>Uptime da Rede</span>
                  </div>
                  <span className="text-base font-mono font-black text-white">99.98%</span>
                  <span className="text-[10px] text-[#00e676] block mt-0.5 font-mono">Alta Estabilidade</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#040d12]/90 border border-cyan-500/20">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] mb-1">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Uso de CPU</span>
                  </div>
                  <span className="text-base font-mono font-black text-cyan-300">&lt; 0.8%</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5 font-mono">Zero Travamentos</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#040d12]/90 border border-cyan-500/20">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] mb-1">
                    <Lock className="w-3.5 h-3.5 text-[#00e676]" />
                    <span>Segurança</span>
                  </div>
                  <span className="text-base font-mono font-black text-white">256-bit SSL</span>
                  <span className="text-[10px] text-[#00e676] block mt-0.5 font-mono">Totalmente Blindado</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#040d12]/90 border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] mb-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Monetização</span>
                  </div>
                  <span className="text-base font-mono font-black text-amber-300">Residencial</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5 font-mono">Tarifa Máxima</span>
                </div>
              </div>

              {/* Box de Saldo Dinâmico */}
              <div className="p-4 rounded-2xl bg-[#040d12] border border-cyan-500/30 space-y-1.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Rendimento Simulado Acumulando
                </span>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-black text-white font-mono flex items-center gap-1">
                    <span className="text-[#00e676]">$</span> 42.36 USD
                  </div>
                  <span className="text-xs font-mono font-bold text-[#00e676] flex items-center gap-1 bg-[#00e676]/10 px-2 py-0.5 rounded-md border border-[#00e676]/20">
                    <TrendingUp className="w-3.5 h-3.5" /> +12.5% este mês
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#091b22] rounded-full overflow-hidden mt-2">
                  <div className="w-3/4 h-full bg-gradient-to-r from-[#00e676] to-[#00f2fe]" />
                </div>
              </div>

              {/* Mensagem de garantia passiva */}
              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                Sem cliques, sem tarefas e sem anúncios. O app trabalha de forma 100% silenciosa em segundo plano.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
