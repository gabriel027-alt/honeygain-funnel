import React from "react";
import { Download, Wifi, DollarSign, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: 1,
      icon: Download,
      title: "Baixe o app",
      desc: "Instale o Honeygain no seu celular ou PC.",
    },
    {
      num: 2,
      icon: Wifi,
      title: "Conecte-se",
      desc: "Deixe o app rodando em segundo plano.",
    },
    {
      num: 3,
      icon: DollarSign,
      title: "Ganhe",
      desc: "Receba pagamentos em USD, direto na sua conta.",
    },
  ];

  const benefits = [
    "Funciona no celular e PC",
    "Sem precisar de habilidades técnicas",
    "Pagamento automático",
    "Suporte 24/7",
  ];

  const companies = [
    { name: "Google", font: "font-sans font-bold" },
    { name: "amazon", font: "font-mono font-bold lowercase" },
    { name: "Meta", font: "font-sans font-black" },
    { name: "Microsoft", font: "font-sans font-semibold tracking-tight" },
    { name: "verizon", font: "font-sans font-extrabold italic" },
  ];

  return (
    <section id="como-funciona" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050b0e] text-white">
      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Cabeçalho */}
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
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-2xl bg-[#071419]/80 border border-emerald-500/20 p-6 sm:p-8 flex flex-col items-center text-center space-y-4 hover:border-emerald-500/40 transition-colors"
              >
                {/* Círculo do Ícone com número */}
                <div className="relative w-16 h-16 rounded-full bg-[#0d2229] border border-emerald-500/40 flex items-center justify-center text-[#00e676] shadow-[0_0_20px_rgba(0,230,118,0.2)]">
                  <Icon className="w-7 h-7" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#00e676] text-[#050b0e] text-xs font-black flex items-center justify-center">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.desc}</p>

                {/* Seta conectora para desktop */}
                {idx < 2 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#00e676] font-bold text-xl">
                    ➔
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bloco de Dispositivos e Lista de Vantagens */}
        <div className="rounded-3xl bg-[#071419]/70 border border-emerald-500/20 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Lado Esquerdo: Mockup Múltiplos Dispositivos */}
          <div className="lg:col-span-7 flex justify-center items-end gap-3 sm:gap-4 relative py-4">
            {/* Celular 1 */}
            <div className="w-24 sm:w-28 rounded-2xl bg-[#0d2229] border border-emerald-500/30 p-2 shadow-lg">
              <div className="h-32 rounded-xl bg-[#050b0e] flex flex-col items-center justify-center text-center p-2">
                <span className="text-[10px] text-slate-400">Ganhos</span>
                <span className="text-xs font-bold text-[#00e676] mt-1">$42.36</span>
              </div>
            </div>

            {/* Laptop Central */}
            <div className="w-48 sm:w-64 rounded-2xl bg-[#071419] border border-cyan-400/40 p-3 shadow-2xl relative -mb-2">
              <div className="h-36 rounded-xl bg-[#050b0e] flex flex-col items-center justify-center text-center p-3">
                <span className="text-[11px] text-slate-400">Total Earnings</span>
                <span className="text-xl sm:text-2xl font-black text-white mt-1">
                  <span className="text-[#00e676]">$</span> 42.36
                </span>
                <div className="w-full h-1 bg-[#0d2229] rounded mt-4 overflow-hidden">
                  <div className="w-3/4 h-full bg-[#00e676]" />
                </div>
              </div>
            </div>

            {/* Celular 2 */}
            <div className="w-24 sm:w-28 rounded-2xl bg-[#0d2229] border border-emerald-500/30 p-2 shadow-lg">
              <div className="h-32 rounded-xl bg-[#050b0e] flex flex-col items-center justify-center text-center p-2">
                <span className="text-[10px] text-slate-400">Online</span>
                <span className="w-2 h-2 rounded-full bg-[#00e676] mt-2 animate-ping" />
              </div>
            </div>
          </div>

          {/* Lado Direito: Lista de Vantagens com Check verde */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-lg font-bold text-white mb-2">Simplicidade total:</h4>
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00e676] shrink-0" />
                <span className="text-sm font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Faixa de Empresas (Seu Tráfego Ajuda Grandes Empresas) */}
        <div className="text-center space-y-6 pt-4 border-t border-emerald-500/10">
          <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold block">
            SEU TRÁFEGO AJUDA GRANDES EMPRESAS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {companies.map((c) => (
              <span key={c.name} className={`text-xl sm:text-2xl text-slate-300 ${c.font}`}>
                {c.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
