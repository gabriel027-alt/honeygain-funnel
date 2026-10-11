"use client";

import React, { useState, useId } from "react";
import { SITE_CONFIG } from "@/constants/config";
import {
  Laptop,
  Clock,
  Gift,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";

export function EarningsCalculator() {
  const devicesId = useId();
  const hoursId = useId();

  // Estados dos sliders: 3 dispositivos e 16 horas (valores padrão de alta conversão do mockup)
  const [devices, setDevices] = useState<number>(3);
  const [hoursPerDay, setHoursPerDay] = useState<number>(16);
  const [copied, setCopied] = useState<boolean>(false);

  // Proporção matemática calibrada: 3 aparelhos x 16 horas = $18.72 USD e R$ 103.01 BRL
  const factor = 18.72 / (3 * 16);
  const estimatedUsd = devices * hoursPerDay * factor;
  const estimatedBrl = estimatedUsd * SITE_CONFIG.usdToBrlRate;

  const handleCopy = () => {
    navigator.clipboard.writeText(SITE_CONFIG.referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="calculadora" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#04080a] text-white">
      {/* Luz volumétrica de fundo (Deep Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06151b] border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-widest uppercase shadow-[0_0_18px_rgba(0,242,254,0.2)]">
            <span className="text-[#00e676] animate-pulse">➜</span>
            <span>CALCULADORA DE GANHOS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Veja quanto você pode{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#00e676] to-[#05f292] filter drop-shadow-[0_0_20px_rgba(0,230,118,0.3)]">
              ganhar por mês
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Ajuste os parâmetros abaixo e veja sua estimativa de ganhos em tempo real. É simples, rápido e sem compromisso.
          </p>
        </div>

        {/* Card Principal da Calculadora em Glassmorphism Cyberpunk */}
        <div className="cyber-card rounded-3xl p-6 sm:p-10 space-y-8 relative overflow-hidden">
          
          {/* Slider 1: Dispositivos Conectados */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-bold">
              <label htmlFor={devicesId} className="flex items-center gap-2.5 text-slate-200">
                <div className="p-1.5 rounded-lg bg-[#00e676]/10 text-[#00e676]">
                  <Laptop className="w-4 h-4" />
                </div>
                <span>Dispositivos Conectados</span>
              </label>
              <span className="text-[#00e676] font-mono font-black text-base bg-[#07242e] px-3 py-1 rounded-xl border border-cyan-500/30">
                {devices} {devices === 1 ? "dispositivo" : "dispositivos"}
              </span>
            </div>

            <div className="relative pt-1">
              <input
                id={devicesId}
                type="range"
                min="1"
                max="5"
                step="1"
                value={devices}
                onChange={(e) => setDevices(Number(e.target.value))}
                className="w-full h-2.5 bg-[#091a20] rounded-lg appearance-none cursor-pointer accent-[#00e676] focus:outline-none shadow-inner"
              />
            </div>

            <div className="flex justify-between text-xs text-slate-500 font-mono font-semibold px-1">
              <span>1</span>
              <span>5</span>
            </div>
          </div>

          {/* Slider 2: Horas/Dia Online */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-bold">
              <label htmlFor={hoursId} className="flex items-center gap-2.5 text-slate-200">
                <div className="p-1.5 rounded-lg bg-[#00e676]/10 text-[#00e676]">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Horas/Dia Online</span>
              </label>
              <span className="text-[#00e676] font-mono font-black text-base bg-[#07242e] px-3 py-1 rounded-xl border border-cyan-500/30">
                {hoursPerDay} horas
              </span>
            </div>

            <div className="relative pt-1">
              <input
                id={hoursId}
                type="range"
                min="8"
                max="24"
                step="1"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="w-full h-2.5 bg-[#091a20] rounded-lg appearance-none cursor-pointer accent-[#00e676] focus:outline-none shadow-inner"
              />
            </div>

            <div className="flex justify-between text-xs text-slate-500 font-mono font-semibold px-1">
              <span>8h</span>
              <span>24h</span>
            </div>
          </div>

          {/* Caixa de Estimativa Gigante */}
          <div className="rounded-2xl bg-[#040c0f]/90 border border-emerald-500/25 p-7 text-center space-y-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-mono font-bold block">
              Seu ganho estimado por mês
            </span>

            <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-white flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
              <span className="tracking-tight">$ {estimatedUsd.toFixed(2)} USD</span>
              <span className="text-[#00e676] animate-pulse">➔</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e676] via-[#05f292] to-cyan-300 filter drop-shadow-[0_0_15px_rgba(0,230,118,0.4)]">
                R$ {estimatedBrl.toFixed(2).replace(".", ",")} BRL
              </span>
            </div>

            <p className="text-xs text-slate-400 font-mono pt-1">
              (câmbio aproximado: 1 USD = R$ {SITE_CONFIG.usdToBrlRate.toFixed(2).replace(".", ",")})
            </p>
          </div>

          {/* Box de Presente Verde Neon no Rodapé */}
          <div className="rounded-2xl bg-gradient-to-r from-[#00e676] via-[#05f292] to-[#00e676] p-6 text-[#04080a] space-y-4 shadow-[0_0_35px_rgba(0,230,118,0.35)]">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#04080a]/15 flex items-center justify-center text-[#04080a] shrink-0">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-base sm:text-lg leading-tight">
                  Ative sua máquina agora com crédito inicial garantido de ${SITE_CONFIG.bonusAmountUsd}.00 USD
                </h4>
              </div>
            </div>

            <div>
              <a
                href={SITE_CONFIG.referralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#04080a] hover:bg-[#07171d] text-white font-black text-base shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Começar Agora — É Grátis</span>
                <ArrowRight className="w-5 h-5 text-[#00e676] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Link oficial com botão de copiar 1 clique */}
            <div className="flex items-center justify-center gap-2 pt-1 text-xs font-mono font-bold text-[#04080a]/90">
              <span className="truncate max-w-[280px] sm:max-w-none underline underline-offset-2">
                {SITE_CONFIG.referralUrl}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="p-1.5 rounded-lg bg-[#04080a]/20 hover:bg-[#04080a]/30 transition-colors"
                title="Copiar link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#04080a]" /> : <Copy className="w-3.5 h-3.5 text-[#04080a]" />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
