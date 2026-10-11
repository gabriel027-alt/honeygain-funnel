"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/constants/config";
import {
  Star,
  CheckCircle2,
  Users,
  DollarSign,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";

export function TestimonialsSection() {
  const [copied, setCopied] = useState(false);

  const testimonials = [
    {
      name: "Juliana S.",
      city: "São Paulo - SP",
      avatarGradient: "from-emerald-400 to-[#00e676]",
      quote: "Já consegui sacar meu primeiro pagamento em USD. É real e funciona mesmo!",
      amount: "$ 52.40 USD",
      status: "Saque realizado",
    },
    {
      name: "Rafael M.",
      city: "Belo Horizonte - MG",
      avatarGradient: "from-cyan-400 to-blue-500",
      quote: "Uso no meu PC e no celular. É automático e não atrapalha em nada.",
      amount: "$ 36.17 USD",
      status: "Saque realizado",
    },
    {
      name: "Camila R.",
      city: "Curitiba - PR",
      avatarGradient: "from-teal-400 to-emerald-500",
      quote: "Super fácil de usar e o suporte é excelente. Recomendo demais!",
      amount: "$ 78.90 USD",
      status: "Saque realizado",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "10M+",
      label: "Usuários ativos",
    },
    {
      icon: DollarSign,
      value: "$2.5M+",
      label: "Pagamentos realizados",
    },
    {
      icon: Star,
      value: "4.6/5",
      label: "Avaliação na Play Store",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(SITE_CONFIG.referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#04080a] text-white">
      {/* Luz volumétrica de fundo */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[550px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06151b] border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-widest uppercase shadow-[0_0_18px_rgba(0,242,254,0.2)]">
            <span className="text-[#00e676] animate-pulse">➜</span>
            <span>PROVAS REAIS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Pessoas reais,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#00e676] to-[#05f292] filter drop-shadow-[0_0_20px_rgba(0,230,118,0.3)]">
              resultados reais
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Milhões de pessoas já estão ganhando com o Honeygain. Veja alguns depoimentos:
          </p>
        </div>

        {/* 3 Cards de Depoimento em Cyber-Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="cyber-card rounded-3xl p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Perfil e Estrelas */}
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${t.avatarGradient} p-[2px] shadow-[0_0_15px_rgba(0,242,254,0.3)]`}>
                    <div className="w-full h-full rounded-full bg-[#040c0f] flex items-center justify-center font-black text-sm text-white">
                      {t.name.slice(0, 2)}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{t.name}</h3>
                    <span className="text-xs text-slate-400">{t.city}</span>
                  </div>
                </div>

                {/* Estrelas Brilhantes */}
                <div className="flex items-center gap-1 text-amber-400 filter drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Box de Saque Realizado */}
              <div className="pt-4 border-t border-emerald-500/15 flex items-center justify-between">
                <span className="text-base font-black text-[#00e676] font-mono drop-shadow-[0_0_8px_rgba(0,230,118,0.4)]">
                  {t.amount}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00e676]" />
                  <span>{t.status}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas / Números Globais */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-2">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="cyber-card rounded-2xl p-6 flex items-center justify-center gap-4 text-center sm:text-left"
              >
                <div className="w-13 h-13 rounded-2xl bg-[#06202a] border border-cyan-400/30 flex items-center justify-center text-[#00e676] shrink-0 shadow-[0_0_15px_rgba(0,230,118,0.2)]">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block font-mono">
                    {s.value}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{s.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card CTA: Comece agora e seja o próximo! */}
        <div className="cyber-card rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-2xl mx-auto border-emerald-500/40 shadow-[0_0_50px_rgba(0,230,118,0.2)]">
          <h3 className="text-2xl sm:text-4xl font-black text-white">
            Comece agora e seja o próximo!
          </h3>

          <div>
            <a
              href={SITE_CONFIG.referralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#00e676] to-[#05f292] text-[#04080a] font-black text-base shadow-[0_0_30px_rgba(0,230,118,0.5)] hover:shadow-[0_0_45px_rgba(0,230,118,0.8)] hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <span>Começar Agora — É Grátis</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 pt-1 text-xs font-mono text-slate-400">
            <span className="truncate max-w-[260px] sm:max-w-none text-[#00e676] font-bold">
              {SITE_CONFIG.referralUrl}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-[#07212b] hover:bg-[#0c3343] text-slate-300 transition-colors"
              title="Copiar link oficial"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#00e676]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
