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

  // Estados dos sliders com valores padrão fiéis ao mockup (3 dispositivos, 16 horas)
  const [devices, setDevices] = useState<number>(3);
  const [hoursPerDay, setHoursPerDay] = useState<number>(16);
  const [copied, setCopied] = useState<boolean>(false);

  // Calibragem exata do mockup: 3 aparelhos x 16 horas = $18.72 USD / R$ 103.01 BRL
  const factor = 18.72 / (3 * 16); // 0.39 USD por dispositivo/hora no mês
  const estimatedUsd = devices * hoursPerDay * factor;
  const estimatedBrl = estimatedUsd * SITE_CONFIG.usdToBrlRate;

  const handleCopy = () => {
    navigator.clipboard.writeText(SITE_CONFIG.referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="calculadora" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050b0e] text-white">
      {/* Glows de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071a1f] border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <span className="text-[#00e676]">➜</span>
            <span>CALCULADORA DE GANHOS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Veja quanto você pode{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#00e676] to-[#05f292]">
              ganhar por mês
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Ajuste os parâmetros abaixo e veja sua estimativa de ganhos em tempo real. É simples, rápido e sem compromisso.
          </p>
        </div>

        {/* Card Principal da Calculadora */}
        <div className="rounded-3xl bg-[#071419]/90 backdrop-blur-xl border border-emerald-500/30 p-6 sm:p-10 shadow-[0_0_40px_rgba(0,230,118,0.15)] space-y-8">
          
          {/* Slider 1: Dispositivos */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label htmlFor={devicesId} className="flex items-center gap-2 text-slate-200">
                <Laptop className="w-4 h-4 text-[#00e676]" />
                <span>Dispositivos Conectados</span>
              </label>
              <span className="text-slate-200 font-bold">
                {devices} {devices === 1 ? "dispositivo" : "dispositivos"}
              </span>
            </div>

            <input
              id={devicesId}
              type="range"
              min="1"
              max="5"
              step="1"
              value={devices}
              onChange={(e) => setDevices(Number(e.target.value))}
              className="w-full h-2 bg-[#0d2229] rounded-lg appearance-none cursor-pointer accent-[#00e676] focus:outline-none"
            />

            <div className="flex justify-between text-xs text-slate-500 font-mono">
              <span>1</span>
              <span>5</span>
            </div>
          </div>

          {/* Slider 2: Horas/Dia Online */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label htmlFor={hoursId} className="flex items-center gap-2 text-slate-200">
                <Clock className="w-4 h-4 text-[#00e676]" />
                <span>Horas/Dia Online</span>
              </label>
              <span className="text-slate-200 font-bold">
                {hoursPerDay} horas
              </span>
            </div>

            <input
              id={hoursId}
              type="range"
              min="8"
              max="24"
              step="1"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Number(e.target.value))}
              className="w-full h-2 bg-[#0d2229] rounded-lg appearance-none cursor-pointer accent-[#00e676] focus:outline-none"
            />

            <div className="flex justify-between text-xs text-slate-500 font-mono">
              <span>8h</span>
              <span>24h</span>
            </div>
          </div>

          {/* Caixa de Resultado */}
          <div className="rounded-2xl bg-[#040c0f] border border-emerald-500/20 p-6 text-center space-y-2">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              Seu ganho estimado por mês
            </span>

            <div className="text-2xl sm:text-4xl font-black text-white flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span>$ {estimatedUsd.toFixed(2)} USD</span>
              <span className="text-[#00e676]">➔</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e676] to-[#00f2fe]">
                R$ {estimatedBrl.toFixed(2).replace(".", ",")} BRL
              </span>
            </div>

            <p className="text-xs text-slate-500">
              (câmbio aproximado: 1 USD = R$ {SITE_CONFIG.usdToBrlRate.toFixed(2).replace(".", ",")})
            </p>
          </div>

          {/* Bloco Verde de Ativação / Cupom de Entrada */}
          <div className="rounded-2xl bg-gradient-to-r from-[#00e676] to-[#05f292] p-6 text-[#050b0e] space-y-4 shadow-[0_0_30px_rgba(0,230,118,0.3)]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#050b0e]/10">
                <Gift className="w-6 h-6 text-[#050b0e]" />
              </div>
              <div className="text-left">
                <h4 className="font-extrabold text-base sm:text-lg leading-tight">
                  Ative sua máquina agora com crédito inicial garantido de ${SITE_CONFIG.bonusAmountUsd}.00 USD
                </h4>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={SITE_CONFIG.referralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#050b0e] hover:bg-[#0a181e] text-white font-extrabold text-sm sm:text-base transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg"
              >
                <span>Começar Agora — É Grátis</span>
                <ArrowRight className="w-4 h-4 text-[#00e676]" />
              </a>
            </div>

            {/* Link de indicação com botão copiar */}
            <div className="flex items-center justify-center gap-2 pt-1 text-xs font-mono font-medium text-[#050b0e]/90">
              <span className="truncate max-w-[280px] sm:max-w-none underline underline-offset-2">
                {SITE_CONFIG.referralUrl}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="p-1 rounded bg-[#050b0e]/20 hover:bg-[#050b0e]/30 transition-colors"
                title="Copiar link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black" />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
