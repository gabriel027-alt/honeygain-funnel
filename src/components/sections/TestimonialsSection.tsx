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
      avatarBg: "bg-emerald-500/20 text-emerald-300",
      quote: "Já consegui sacar meu primeiro pagamento em USD. É real e funciona mesmo!",
      amount: "$ 52.40 USD",
      status: "Saque realizado",
    },
    {
      name: "Rafael M.",
      city: "Belo Horizonte - MG",
      avatarBg: "bg-cyan-500/20 text-cyan-300",
      quote: "Uso no meu PC e no celular. É automático e não atrapalha em nada.",
      amount: "$ 36.17 USD",
      status: "Saque realizado",
    },
    {
      name: "Camila R.",
      city: "Curitiba - PR",
      avatarBg: "bg-teal-500/20 text-teal-300",
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050b0e] text-white">
      {/* Glow de fundo */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071a1f] border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <span className="text-[#00e676]">➜</span>
            <span>PROVAS REAIS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Pessoas reais,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#00e676] to-[#05f292]">
              resultados reais
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Milhões de pessoas já estão ganhando com o Honeygain. Veja alguns depoimentos:
          </p>
        </div>

        {/* 3 Cards de Depoimento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl bg-[#071419]/90 border border-emerald-500/20 p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(0,230,118,0.15)] transition-all space-y-6"
            >
              <div className="space-y-4">
                {/* Perfil e Estrelas */}
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full ${t.avatarBg} flex items-center justify-center font-bold text-sm border border-emerald-500/30`}>
                    {t.name.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{t.name}</h3>
                    <span className="text-xs text-slate-400">{t.city}</span>
                  </div>
                </div>

                {/* Estrelas */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Box de Saque Realizado */}
              <div className="pt-4 border-t border-emerald-500/10 flex items-center justify-between">
                <span className="text-sm font-black text-[#00e676]">{t.amount}</span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.status}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas / Números Globais */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="rounded-2xl bg-[#071419]/60 border border-emerald-500/15 p-5 flex items-center justify-center gap-4 text-center sm:text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0d2229] border border-emerald-500/30 flex items-center justify-center text-[#00e676] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">
                    {s.value}
                  </span>
                  <span className="text-xs text-slate-400">{s.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card CTA: Comece agora e seja o próximo! */}
        <div className="rounded-3xl bg-gradient-to-b from-[#071419] to-[#040c0f] border border-emerald-500/30 p-8 sm:p-10 text-center space-y-6 shadow-[0_0_40px_rgba(0,230,118,0.15)] max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Comece agora e seja o próximo!
          </h3>

          <div>
            <a
              href={SITE_CONFIG.referralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00e676] hover:bg-[#05f292] text-[#050b0e] font-extrabold text-base shadow-[0_0_25px_rgba(0,230,118,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Começar Agora — É Grátis</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 pt-1 text-xs font-mono text-slate-400">
            <span className="truncate max-w-[260px] sm:max-w-none text-[#00e676]">
              {SITE_CONFIG.referralUrl}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-[#0d2229] hover:bg-[#12303a] text-slate-300 transition-colors"
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
