import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/constants/config";
import {
  ShieldCheck,
  DollarSign,
  UserCheck,
  ArrowRight,
  Gift,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#04080a] text-white">
      {/* Luzes Volumétricas de Fundo (Cyan & Emerald Orbs) */}
      <div className="absolute top-10 left-10 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[650px] h-[650px] bg-emerald-500/15 rounded-full blur-[180px] pointer-events-none" />

      {/* Grid Mesh Digital em Gradiente Linear */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,242,254,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,230,118,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna da Esquerda: Copy, Badges & CTAs */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Badge Neon Renda Passiva Real */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071a20]/80 border border-cyan-400/50 text-cyan-300 text-xs font-black tracking-widest uppercase shadow-[0_0_18px_rgba(0,242,254,0.25)] backdrop-blur-md">
              <span className="text-[#00e676] animate-pulse">➜</span>
              <span>RENDA PASSIVA REAL</span>
            </div>

            {/* Headline Principal */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.06] text-white">
              Transforme sua internet{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#00e676] to-[#05f292] filter drop-shadow-[0_0_30px_rgba(0,230,118,0.5)]">
                em dinheiro
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Com o Honeygain, você compartilha sua conexão de internet e recebe pagamentos em dólar, de forma segura e automática.
            </p>

            {/* 3 Mini Badges em Micro-cards Escuros com Glassmorphism */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-emerald-500/25 bg-[#071a20]/80 backdrop-blur-md text-xs font-semibold text-slate-200 shadow-[0_0_15px_rgba(0,230,118,0.05)] hover:border-[#00e676]/50 transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#00e676]" />
                <span>Seguro e confiável</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-emerald-500/25 bg-[#071a20]/80 backdrop-blur-md text-xs font-semibold text-slate-200 shadow-[0_0_15px_rgba(0,230,118,0.05)] hover:border-[#00e676]/50 transition-colors">
                <DollarSign className="w-4 h-4 text-[#00e676]" />
                <span>Pagamentos em USD</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-emerald-500/25 bg-[#071a20]/80 backdrop-blur-md text-xs font-semibold text-slate-200 shadow-[0_0_15px_rgba(0,230,118,0.05)] hover:border-[#00e676]/50 transition-colors">
                <UserCheck className="w-4 h-4 text-[#00e676]" />
                <span>Sem complicação</span>
              </div>
            </div>

            {/* Botão de Ação Primário com Glow e Link Oficial */}
            <div className="pt-3 space-y-3">
              <div>
                <a
                  href={SITE_CONFIG.referralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#00e676] hover:bg-[#05f292] text-[#050b0e] font-black text-base sm:text-lg shadow-[0_0_30px_rgba(0,230,118,0.5)] transition-all hover:scale-105 active:scale-95"
                >
                  <span>Comece Agora — É Grátis</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                <Gift className="w-4 h-4 text-[#00e676]" />
                <span>Bônus inicial de <strong>${SITE_CONFIG.bonusAmountUsd}.00 USD</strong> garantido no cadastro</span>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Render 3D Oficial Ultra-HD (/hero-bee.png) */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-4">
            {/* Halo de luz volumétrica */}
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#00e676]/20 via-cyan-400/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-20 animate-float transition-transform duration-500 hover:scale-[1.03]">
              <Image
                src="/hero-bee.png"
                alt="Honeygain 3D Smartphone, Mascote e Moedas"
                width={620}
                height={620}
                priority
                className="w-full max-w-[480px] sm:max-w-[540px] h-auto object-contain drop-shadow-[0_0_40px_rgba(0,230,118,0.25)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
