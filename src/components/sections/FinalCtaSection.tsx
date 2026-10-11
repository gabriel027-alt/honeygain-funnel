"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/constants/config";
import { Logo } from "@/components/common/Logo";
import { CyberBee } from "@/components/common/CyberBee";
import { Coin3D } from "@/components/common/Coin3D";
import {
  ShieldCheck,
  DollarSign,
  Headphones,
  UserCheck,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";

export function FinalCtaSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SITE_CONFIG.referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const guarantees = [
    { icon: ShieldCheck, label: "Seguro e confiável" },
    { icon: DollarSign, label: "Pagamentos em USD" },
    { icon: Headphones, label: "Suporte 24/7" },
    { icon: UserCheck, label: "Sem complicação" },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#04080a] text-white overflow-hidden">
      {/* Luz volumétrica de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 cyber-card rounded-3xl p-8 sm:p-14 border-emerald-500/40 shadow-[0_0_60px_rgba(0,230,118,0.25)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Textos, Badges & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Logo />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06151b] border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-widest uppercase">
              <span className="text-[#00e676] animate-pulse">➜</span>
              <span>RENDA PASSIVA REAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Sua conexão{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#00e676] to-[#05f292] filter drop-shadow-[0_0_20px_rgba(0,230,118,0.4)]">
                vale dinheiro
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed">
              Junte-se a milhões de pessoas que já estão ganhando com o Honeygain. É rápido, seguro e sem complicação.
            </p>

            <div className="pt-2 space-y-3">
              <div>
                <a
                  href={SITE_CONFIG.referralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#00e676] to-[#05f292] text-[#04080a] font-black text-base shadow-[0_0_35px_rgba(0,230,118,0.55)] hover:shadow-[0_0_50px_rgba(0,230,118,0.85)] hover:scale-[1.03] active:scale-[0.98] transition-all"
                >
                  <span>Começar Agora — É Grátis</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="truncate max-w-[280px] sm:max-w-none text-[#00e676] font-bold">
                  {SITE_CONFIG.referralUrl}
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-[#07242e] hover:bg-[#0c3a4a] text-slate-300 transition-colors"
                  title="Copiar link oficial"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#00e676]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* 4 Pontos de Confiança */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300 font-semibold">
              {guarantees.map((g) => {
                const Icon = g.icon;
                return (
                  <div key={g.label} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#00e676] shrink-0" />
                    <span>{g.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lado Direito: Celular 3D Flutuante + CyberBee Mascot + Moeda 3D */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            {/* Moeda Flutuante Topo */}
            <div className="absolute top-2 -left-2 z-30">
              <Coin3D size="md" delay="0.5s" />
            </div>

            {/* Smartphone em Perspectiva */}
            <div className="w-64 sm:w-72 rounded-[36px] bg-[#07212a] border border-cyan-400/40 p-3.5 shadow-2xl relative [transform:perspective(1000px)_rotateY(-10deg)]">
              <div className="rounded-[28px] bg-[#03090c] p-5 text-center space-y-3 border border-emerald-500/25">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block">Total Earnings</span>
                <div className="text-3xl font-black text-white flex items-center justify-center gap-1">
                  <span className="text-[#00e676]">$</span> 42.36
                </div>
                <div className="w-full h-1.5 bg-[#0a232c] rounded-full overflow-hidden mt-2">
                  <div className="w-3/4 h-full bg-gradient-to-r from-[#00e676] to-cyan-400" />
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold block">Pronto para saque imediato</span>
              </div>
            </div>

            {/* Mascote CyberBee Flutuante 3D Sem Emojis */}
            <div className="absolute -bottom-6 -right-6 sm:-right-8 z-30">
              <CyberBee size={130} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
