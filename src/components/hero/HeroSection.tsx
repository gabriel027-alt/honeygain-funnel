import React from "react";
import { SITE_CONFIG } from "@/constants/config";
import {
  ShieldCheck,
  DollarSign,
  UserCheck,
  ArrowRight,
  TrendingUp,
  Gift,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-18 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050b0e] text-white">
      {/* Background Glows Ciano e Verde Neon */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-emerald-950/20 to-transparent pointer-events-none" />

      {/* Cyber Grid Lines no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,242,254,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna da Esquerda: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Badge Renda Passiva Real */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071a1f] border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,242,254,0.15)]">
              <span className="text-[#00e676]">➜</span>
              <span>RENDA PASSIVA REAL</span>
            </div>

            {/* Headline Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Transforme sua internet{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#00e676] to-[#05f292] filter drop-shadow-[0_0_25px_rgba(0,230,118,0.3)]">
                em dinheiro
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Com o Honeygain, você compartilha sua conexão de internet e recebe pagamentos em dólar, de forma segura e automática.
            </p>

            {/* 3 Mini Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#071a1f]/80 border border-emerald-500/20 text-xs text-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#00e676]" />
                <span>Seguro e confiável</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#071a1f]/80 border border-emerald-500/20 text-xs text-slate-200">
                <DollarSign className="w-4 h-4 text-[#00e676]" />
                <span>Pagamentos em USD</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#071a1f]/80 border border-emerald-500/20 text-xs text-slate-200">
                <UserCheck className="w-4 h-4 text-[#00e676]" />
                <span>Sem complicação</span>
              </div>
            </div>

            {/* Botão de Ação & Bônus */}
            <div className="pt-4 space-y-3">
              <div>
                <a
                  href={SITE_CONFIG.referralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#00e676] hover:bg-[#05f292] text-[#050b0e] font-extrabold text-base sm:text-lg shadow-[0_0_30px_rgba(0,230,118,0.45)] hover:shadow-[0_0_40px_rgba(0,230,118,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Comece Agora — É Grátis</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Gift className="w-3.5 h-3.5 text-[#00e676]" />
                <span>Bônus inicial garantido de <strong>$3,00 a $5,00 USD</strong></span>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Mockup 3D Celular + Abelha Honeygain */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Halo de luz traseira */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#00e676]/25 to-cyan-400/25 rounded-full blur-3xl pointer-events-none" />

            {/* Smartphone Container */}
            <div className="relative w-72 sm:w-80 rounded-[40px] p-3.5 bg-gradient-to-b from-cyan-500/30 via-emerald-500/20 to-transparent border border-cyan-400/30 shadow-[0_0_50px_rgba(0,230,118,0.2)]">
              {/* Moldura do Celular */}
              <div className="rounded-[32px] bg-[#071419] p-5 border border-emerald-500/30 relative overflow-hidden">
                {/* Cabeçalho do App Honeygain */}
                <div className="flex items-center justify-between pb-4 border-b border-emerald-500/10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#00e676] flex items-center justify-center text-[10px] font-black text-[#050b0e]">
                      🐝
                    </div>
                    <span className="text-sm font-bold text-white tracking-tight">honeygain</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#00e676] animate-ping" />
                </div>

                {/* Saldo acumulado */}
                <div className="py-6 text-center space-y-1">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Total Earnings</span>
                  <div className="text-3xl font-black text-white tracking-tight flex items-center justify-center gap-1">
                    <span className="text-[#00e676]">$</span> 42.36
                  </div>
                  <span className="text-[10px] text-emerald-400 flex items-center justify-center gap-1 font-semibold">
                    <TrendingUp className="w-3 h-3" /> +$ 3.00 Bônus Ativado
                  </span>
                </div>

                {/* Mini Gráfico Neon */}
                <div className="h-16 w-full relative flex items-end justify-between px-1 pt-2 pb-1 border-t border-emerald-500/10">
                  <svg className="w-full h-full" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                    <path
                      d="M0 35 Q 20 20, 40 28 T 75 12 T 100 5"
                      stroke="#00e676"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <path
                      d="M0 35 Q 20 20, 40 28 T 75 12 T 100 5 L 100 40 L 0 40 Z"
                      fill="url(#greenGradient)"
                      opacity="0.25"
                    />
                    <defs>
                      <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00e676" />
                        <stop offset="100%" stopColor="#071419" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Rodapé do mockup */}
                <div className="pt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Tráfego Compartilhado</span>
                  <span className="text-[#00e676] font-bold">14.2 GB</span>
                </div>
              </div>
            </div>

            {/* Mascote Abelhinha Honeygain 3D / Badge flutuante */}
            <div className="absolute -bottom-6 -right-2 sm:-right-4 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#00e676] via-[#00f2fe] to-[#071419] p-1 shadow-[0_0_35px_rgba(0,230,118,0.5)] animate-bounce duration-1000">
              <div className="w-full h-full rounded-full bg-[#071216] flex flex-col items-center justify-center relative overflow-hidden border border-[#00e676]/40">
                <span className="text-3xl sm:text-4xl">🐝</span>
                <span className="text-[10px] font-black text-[#00e676] tracking-wider uppercase mt-1">
                  100% PASSIVO
                </span>
              </div>
            </div>

            {/* Moeda Cripto / Dólar Flutuante à Esquerda */}
            <div className="absolute top-12 -left-3 sm:-left-6 w-12 h-12 rounded-full bg-[#00e676] text-[#050b0e] font-black flex items-center justify-center text-xl shadow-[0_0_25px_rgba(0,230,118,0.7)] animate-pulse">
              $
            </div>
            <div className="absolute bottom-20 -left-2 w-9 h-9 rounded-full bg-[#00f2fe] text-[#050b0e] font-black flex items-center justify-center text-sm shadow-[0_0_20px_rgba(0,242,254,0.6)]">
              $
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
