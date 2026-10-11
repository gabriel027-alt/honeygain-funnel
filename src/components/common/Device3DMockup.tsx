import React from "react";
import { Coin3D } from "@/components/common/Coin3D";
import { CyberBee } from "@/components/common/CyberBee";
import { TrendingUp, Wifi, Zap } from "lucide-react";

export function Device3DMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center select-none py-10">
      {/* Luz volumétrica de fundo (Deep Glow) */}
      <div className="absolute w-80 h-80 bg-gradient-to-tr from-[#00e676]/20 via-cyan-400/20 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Grid de perspectiva do piso cibernético (Cyber Highway floor) */}
      <div className="absolute -bottom-10 inset-x-0 h-44 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_top,rgba(0,0,0,1)_0%,transparent_100%)]">
        <div className="w-full h-full [transform:perspective(300px)_rotateX(65deg)] bg-[linear-gradient(to_right,rgba(0,242,254,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,230,118,0.15)_1px,transparent_1px)] bg-[size:28px_28px] opacity-70" />
      </div>

      {/* Moeda 3D 1 (Topo Esquerdo) */}
      <div className="absolute -top-3 left-4 sm:-left-2 z-30">
        <Coin3D size="lg" delay="0.2s" />
      </div>

      {/* Moeda 3D 2 (Lateral Esquerda Inferior) */}
      <div className="absolute bottom-16 -left-4 sm:-left-8 z-30">
        <Coin3D size="md" delay="1s" />
      </div>

      {/* Moeda 3D 3 (Lateral Direita Superior) */}
      <div className="absolute top-8 right-2 sm:-right-4 z-30">
        <Coin3D size="sm" delay="1.8s" />
      </div>

      {/* SMARTPHONE COM PERSPECTIVA 3D */}
      <div className="relative z-20 [transform:perspective(1200px)_rotateY(-12deg)_rotateX(6deg)_scale(1.02)] transition-transform duration-500 hover:[transform:perspective(1200px)_rotateY(-4deg)_rotateX(2deg)_scale(1.04)]">
        {/* Moldura Externa com Efeito Neon e Reflexo de Borda */}
        <div className="w-72 sm:w-80 rounded-[44px] p-3.5 bg-gradient-to-b from-[#00f2fe]/40 via-[#07242e] to-[#00e676]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(0,230,118,0.25)] border border-cyan-400/40 relative">
          
          {/* Brilho de Reflexo na lateral direita */}
          <div className="absolute top-10 right-1 w-1 h-32 bg-cyan-300/40 rounded-full blur-[1px]" />

          {/* Moldura Interna do Smartphone */}
          <div className="rounded-[36px] bg-[#051116] p-5 border border-emerald-500/30 overflow-hidden relative space-y-5">
            
            {/* Notch / Câmera frontal */}
            <div className="flex justify-center -mt-1">
              <div className="w-20 h-4 bg-[#020709] rounded-full flex items-center justify-center gap-2 border border-cyan-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                <div className="w-2 h-1 bg-[#091f27] rounded-full" />
              </div>
            </div>

            {/* Cabeçalho do App Honeygain */}
            <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#00e676] to-cyan-400 p-[1.5px] shadow-[0_0_10px_#00e676]">
                  <div className="w-full h-full rounded-full bg-[#051116] flex items-center justify-center text-xs font-black text-[#00e676]">
                    H
                  </div>
                </div>
                <span className="text-sm font-black tracking-tight text-white">honeygain</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00e676]/10 border border-[#00e676]/30 text-[10px] text-[#00e676] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-ping" />
                <span>Ativo</span>
              </div>
            </div>

            {/* Display do Saldo Total Acumulado */}
            <div className="py-2 text-center space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">Total Earnings</span>
              <div className="text-4xl font-black text-white tracking-tight flex items-center justify-center gap-1">
                <span className="text-[#00e676] drop-shadow-[0_0_8px_#00e676]">$</span> 42.36
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                <TrendingUp className="w-3 h-3" /> +$ 3.00 Bônus de Entrada
              </div>
            </div>

            {/* Gráfico de Ondas de Dados Neon */}
            <div className="h-20 w-full relative pt-2">
              <svg className="w-full h-full" viewBox="0 0 120 45" fill="none" preserveAspectRatio="none">
                <path
                  d="M0 38 Q 20 22, 40 32 T 80 12 T 120 5"
                  stroke="#00e676"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 38 Q 20 22, 40 32 T 80 12 T 120 5 L 120 45 L 0 45 Z"
                  fill="url(#screenWave)"
                  opacity="0.35"
                />
                <defs>
                  <linearGradient id="screenWave" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00e676" />
                    <stop offset="60%" stopColor="#00f2fe" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#051116" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Widgets de Status */}
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-emerald-500/20 text-[11px]">
              <div className="p-2 rounded-xl bg-[#040c0f] border border-emerald-500/15 flex items-center gap-2">
                <Wifi className="w-3.5 h-3.5 text-cyan-400" />
                <div>
                  <span className="text-slate-400 block text-[9px]">Tráfego</span>
                  <span className="font-bold text-white">14.2 GB</span>
                </div>
              </div>
              <div className="p-2 rounded-xl bg-[#040c0f] border border-emerald-500/15 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#00e676]" />
                <div>
                  <span className="text-slate-400 block text-[9px]">Taxa</span>
                  <span className="font-bold text-[#00e676]">Máxima</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MASCOTE ABELHA FLUTUANTE 3D (Posicionada à Direita) */}
      <div className="absolute -bottom-6 -right-6 sm:-right-10 z-30">
        <CyberBee size={135} />
      </div>
    </div>
  );
}
