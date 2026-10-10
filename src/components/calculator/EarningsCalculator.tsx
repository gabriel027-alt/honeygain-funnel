"use client";

import React, { useState, useId } from "react";
import { SITE_CONFIG } from "@/constants/config";
import {
  Calculator,
  Laptop,
  Clock,
  Zap,
  Gift,
  ArrowRight,
  TrendingUp,
  DollarSign,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export function EarningsCalculator() {
  const devicesInputId = useId();
  const hoursInputId = useId();
  // Estados para os sliders e opções
  const [devices, setDevices] = useState<number>(3);
  const [hoursPerDay, setHoursPerDay] = useState<number>(18);
  const [enableContentDelivery, setEnableContentDelivery] = useState<boolean>(true);

  // Estimativa de tráfego base: ~0.10 GB por hora por dispositivo
  // 1 GB compartilhado no Honeygain = 100 créditos = $0.10 USD
  const trafficGbPerMonth = devices * hoursPerDay * 30 * 0.085;
  const trafficEarningsUsd = trafficGbPerMonth * 0.10;

  // Content Delivery: ~6 créditos/hora ativa = $0.006 por hora por dispositivo elegível
  const cdEarningsUsd = enableContentDelivery
    ? devices * hoursPerDay * 30 * 0.006
    : 0;

  // Bônus diário aproximado da Lucky Pot (Pote da Sorte): média de ~20 créditos/dia = $0.60/mês
  const luckyPotBonusUsd = 0.60;

  // Ganhos mensais base sem o bônus de entrada
  const monthlyEarningsRawUsd = trafficEarningsUsd + cdEarningsUsd + luckyPotBonusUsd;
  
  // Total do 1º mês considerando os $5.00 de boas-vindas
  const firstMonthTotalUsd = monthlyEarningsRawUsd + SITE_CONFIG.bonusAmountUsd;

  // Conversão para Real (BRL)
  const monthlyEarningsBrl = monthlyEarningsRawUsd * SITE_CONFIG.usdToBrlRate;
  const firstMonthTotalBrl = firstMonthTotalUsd * SITE_CONFIG.usdToBrlRate;
  const annualEarningsBrl = (monthlyEarningsRawUsd * 12 + SITE_CONFIG.bonusAmountUsd) * SITE_CONFIG.usdToBrlRate;

  // Porcentagem para o saque mínimo ($20) só com o bônus de entrada
  const signupProgressPercentage = (SITE_CONFIG.bonusAmountUsd / SITE_CONFIG.minimumPayoutUsd) * 100;

  return (
    <section id="calculadora" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header do componente */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" />
            <span>Simulador Oficial de Rendimento Passivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Descubra quanto você pode lucrar <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">sem fazer nada</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Ajuste a quantidade de aparelhos conectados e as horas diárias para calcular sua renda estimada em Dólar e Real.
          </p>
        </div>

        {/* Grid Principal da Calculadora */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Coluna da Esquerda: Controles / Sliders */}
          <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-black/50">
            <div className="space-y-8">
              {/* Slider 1: Dispositivos */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor={devicesInputId} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                    <Laptop className="w-4 h-4 text-amber-400" />
                    <span>Dispositivos Conectados:</span>
                  </label>
                  <span className="text-lg font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/20">
                    {devices} {devices === 1 ? "aparelho" : "aparelhos"}
                  </span>
                </div>
                <input
                  id={devicesInputId}
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={devices}
                  onChange={(e) => setDevices(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>1 dispositivo</span>
                  <span>5 dispositivos</span>
                  <span>10 dispositivos</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Computador, notebook, celular Android ou TV Box antigos contam!</span>
                </p>
              </div>

              {/* Slider 2: Horas Ativas */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor={hoursInputId} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>Tempo Conectado por Dia:</span>
                  </label>
                  <span className="text-lg font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/20">
                    {hoursPerDay} {hoursPerDay === 1 ? "hora" : "horas"} / dia
                  </span>
                </div>
                <input
                  id={hoursInputId}
                  type="range"
                  min="1"
                  max="24"
                  step="1"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>4 horas</span>
                  <span>12 horas</span>
                  <span>24h (100% no fundo)</span>
                </div>
              </div>

              {/* Toggle: Content Delivery */}
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">Content Delivery (CD)</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                        + Lucrativo
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Monetização acelerada para computadores com conexão de alta velocidade.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setEnableContentDelivery(!enableContentDelivery)}
                  aria-pressed={enableContentDelivery}
                  aria-label="Ativar ou desativar Content Delivery"
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    enableContentDelivery ? "bg-amber-400" : "bg-slate-700"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-slate-950 shadow-md ring-0 transition duration-200 ease-in-out ${
                      enableContentDelivery ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Dica de boas-vindas / Saque Mínimo */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-emerald-400" />
                  <span>Seu bônus cobre <strong>25% do primeiro saque</strong></span>
                </span>
                <span className="font-semibold text-emerald-400">${SITE_CONFIG.bonusAmountUsd}.00 / ${SITE_CONFIG.minimumPayoutUsd}.00</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${signupProgressPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Card de Resultados e CTA */}
          <div className="lg:col-span-5 relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 shadow-2xl shadow-amber-500/10">
            {/* Tag de Destaque Superior */}
            <div className="flex items-center justify-between gap-2 mb-6">
              <span className="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> Rendimento Estimado
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                <Gift className="w-3.5 h-3.5" /> +$5.00 no cadastro
              </span>
            </div>

            {/* Resultado Principal em Reais */}
            <div className="space-y-1 mb-6">
              <span className="text-xs text-slate-400 font-medium">Estimativa mensal (com bônus):</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  R$ {firstMonthTotalBrl.toFixed(2).replace(".", ",")}
                </span>
                <span className="text-sm font-semibold text-slate-400">/mês</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-sm font-medium text-amber-400">
                <DollarSign className="w-4 h-4" />
                <span>~ ${firstMonthTotalUsd.toFixed(2)} USD (Dólares)</span>
              </div>
            </div>

            {/* Cards com subdivisões de ganhos */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-slate-850/80 bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">Mês seguinte (recorrente)</span>
                <span className="text-lg font-bold text-slate-100">
                  R$ {monthlyEarningsBrl.toFixed(2).replace(".", ",")}
                </span>
                <span className="text-[11px] text-slate-500 block">
                  (${monthlyEarningsRawUsd.toFixed(2)} USD)
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-850/80 bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">Projeção Anual (12 meses)</span>
                <span className="text-lg font-bold text-amber-400">
                  R$ {annualEarningsBrl.toFixed(2).replace(".", ",")}
                </span>
                <span className="text-[11px] text-slate-500 block">
                  100% passivo
                </span>
              </div>
            </div>

            {/* Aviso transparente */}
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/40 p-3 rounded-xl border border-slate-800 mb-6">
              <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Ganhos variam conforme a demanda da sua operadora de internet na sua região.</span>
            </div>

            {/* CTA Oficial com Link de Indicação */}
            <div className="space-y-3">
              <a
                href={SITE_CONFIG.referralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
              >
                <span>Resgatar Bônus de $5.00 e Começar</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-[11px] text-center text-slate-400">
                Código de indicação oficial ativado: <strong className="text-amber-400">{SITE_CONFIG.referralCode}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
