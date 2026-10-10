"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/constants/config";
import { Logo } from "@/components/common/Logo";
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050b0e] text-white overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 rounded-3xl bg-gradient-to-br from-[#071419] to-[#040c0f] border border-emerald-500/30 p-8 sm:p-12 shadow-[0_0_50px_rgba(0,230,118,0.2)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Lado Esquerdo */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Logo />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071a1f] border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider uppercase">
              <span className="text-[#00e676]">➜</span>
              <span>RENDA PASSIVA REAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Sua conexão{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#00e676] to-[#05f292]">
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00e676] hover:bg-[#05f292] text-[#050b0e] font-extrabold text-base shadow-[0_0_30px_rgba(0,230,118,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Começar Agora — É Grátis</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="truncate max-w-[280px] sm:max-w-none text-[#00e676]">
                  {SITE_CONFIG.referralUrl}
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-1 rounded bg-[#0d2229] hover:bg-[#13303a] text-slate-300 transition-colors"
                  title="Copiar link"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#00e676]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* 4 Pontos de Confiança */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
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

          {/* Lado Direito: Celular + Abelhinha Mascot */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="w-60 sm:w-64 rounded-3xl bg-[#071419] border border-cyan-400/40 p-4 shadow-2xl relative">
              <div className="rounded-2xl bg-[#040c0f] p-4 text-center space-y-2">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Total Earnings</span>
                <div className="text-3xl font-black text-white">
                  <span className="text-[#00e676]">$</span> 42.36
                </div>
                <div className="w-full h-1.5 bg-[#0d2229] rounded-full overflow-hidden mt-3">
                  <div className="w-2/3 h-full bg-[#00e676]" />
                </div>
              </div>
            </div>

            {/* Mascote Abelha */}
            <div className="absolute -bottom-4 -right-2 w-24 h-24 rounded-full bg-gradient-to-tr from-[#00e676] to-cyan-400 p-1 shadow-[0_0_30px_rgba(0,230,118,0.6)] flex items-center justify-center animate-bounce duration-1000">
              <div className="w-full h-full rounded-full bg-[#071419] flex items-center justify-center text-3xl">
                🐝
              </div>
            </div>

            {/* Moeda flutuante */}
            <div className="absolute top-2 -left-4 w-10 h-10 rounded-full bg-[#00e676] text-[#050b0e] font-black flex items-center justify-center text-lg shadow-[0_0_20px_rgba(0,230,118,0.8)]">
              $
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
