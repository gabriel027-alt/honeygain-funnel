import React from 'react';
import Image from 'next/image';
import { Download, Wifi, DollarSign, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Baixe o app',
    description: 'Instale o Honeygain no seu celular ou PC.',
    icon: Download,
  },
  {
    number: '2',
    title: 'Conecte-se',
    description: 'Deixe o app rodando em segundo plano.',
    icon: Wifi,
  },
  {
    number: '3',
    title: 'Ganhe',
    description: 'Receba pagamentos em USD, direto na sua conta.',
    icon: DollarSign,
  },
];

const benefits = [
  'Funciona no celular e PC',
  'Sem precisar de habilidades técnicas',
  'Pagamento automático',
  'Suporte 24/7',
];

const partners = ['Google', 'amazon', 'Meta', 'Microsoft', 'verizon'];

export function HowItWorks() {  return (
    <section id="como-funciona" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050b0e] text-white">
      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071a1f] border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <span className="text-[#00e676]">➜</span>
            <span>COMO FUNCIONA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            É assim que você ganha
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Em poucos passos, sua conexão de internet já começa a gerar renda. Tudo é automático e seguro.
          </p>
        </div>

        {/* 3 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-[#071419]/80 border border-emerald-500/20 p-6 sm:p-8 flex flex-col items-center text-center space-y-4 hover:border-emerald-500/40 transition-colors"
              >
                <div className="relative w-16 h-16 rounded-full bg-[#0d2229] border border-emerald-500/40 flex items-center justify-center text-[#00e676] shadow-[0_0_20px_rgba(0,230,118,0.2)]">
                  <Icon className="w-7 h-7" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#00e676] text-[#050b0e] text-xs font-black flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#00e676] font-bold text-xl">
                    ➔
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Showcase dos Dispositivos */}
        <div className="rounded-3xl bg-[#071419]/70 border border-emerald-500/20 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex justify-center items-center py-4">
            <div className="relative w-full max-w-[500px]">
              <Image
                src="/devices-semfundo.png"
                alt="Ecossistema Honeygain em Dispositivos Conectados"
                width={720}
                height={480}
                className="w-full max-w-[500px] mx-auto drop-shadow-[0_0_50px_rgba(0,242,254,0.2)]"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-lg font-bold text-white mb-2">Simplicidade total:</h4>
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00e676] shrink-0" />
                <span className="text-sm font-medium text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marcas Parceiras */}
        <div className="text-center space-y-6 pt-4 border-t border-emerald-500/10">
          <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold block">
            SEU TRÁFEGO AJUDA GRANDES EMPRESAS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {partners.map((partner) => (
              <span key={partner} className="text-xl sm:text-2xl text-slate-300 font-bold">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;