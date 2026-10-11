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
    { name: "Google", style: "font-sans font-bold" },
    { name: "amazon", style: "font-mono font-bold lowercase" },
    { name: "Meta", style: "font-sans font-black" },
    { name: "Microsoft", style: "font-sans font-semibold tracking-tight" },
    { name: "verizon", style: "font-sans font-extrabold italic" },
  ];

  return (
    <section id="como-funciona" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#04080a] text-white">
      {/* Luz volumétrica de fundo */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[500px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06151b] border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-widest uppercase shadow-[0_0_18px_rgba(0,242,254,0.2)]">
            <span className="text-[#00e676] animate-pulse">➜</span>
            <span>COMO FUNCIONA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            É assim que você ganha
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Em poucos passos, sua conexão de internet já começa a gerar renda. Tudo é automático e seguro.
          </p>
        </div>

        {/* 3 Círculos Numerados com Linha de Conexão com Nós Acesos */}
        <div className="relative">
          {/* Linha de conexão horizontal nos nós para desktop */}
          <div className="hidden md:block absolute top-12 inset-x-24 h-0.5 bg-gradient-to-r from-transparent via-[#00e676]/40 to-transparent z-0">
            <div className="absolute inset-0 bg-[#00f2fe]/30 blur-sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="cyber-card rounded-2xl p-7 flex flex-col items-center text-center space-y-4"
                >
                  {/* Círculo com Número e Efeito Glow */}
                  <div className="relative w-18 h-18 rounded-full bg-gradient-to-tr from-[#061e27] to-[#0a2f3d] border border-cyan-400/40 flex items-center justify-center text-[#00e676] shadow-[0_0_25px_rgba(0,230,118,0.25)]">
                    <Icon className="w-8 h-8" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-[#00e676] to-[#05f292] text-[#04080a] text-xs font-black flex items-center justify-center shadow-[0_0_10px_#00e676]">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white pt-1">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bloco de Dispositivos Flutuando em Sobreposição & Vantagens */}
        <div className="cyber-card rounded-3xl p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Lado Esquerdo: Dispositivos em Sobreposição com Perspectiva 3D */}
          <div className="lg:col-span-7 flex justify-center items-end gap-3 sm:gap-4 relative py-6">
            
            {/* Smartphone Esquerdo */}
            <div className="w-24 sm:w-32 rounded-3xl bg-[#061a22] border border-cyan-500/30 p-2 shadow-2xl [transform:rotate(-6deg)] hover:[transform:rotate(0deg)] transition-transform duration-300">
              <div className="h-36 rounded-2xl bg-[#040c0f] flex flex-col items-center justify-center text-center p-2 border border-emerald-500/20">
                <span className="text-[10px] text-slate-400 font-mono">Mobile App</span>
                <span className="text-xs font-black text-[#00e676] mt-1">$ 42.36</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] mt-2 animate-ping" />
              </div>
            </div>

            {/* Laptop Central de Destaque */}
            <div className="w-56 sm:w-72 rounded-2xl bg-[#07242e] border border-cyan-400/50 p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(0,242,254,0.2)] relative z-20 [transform:scale(1.05)]">
              <div className="h-40 rounded-xl bg-[#03090c] flex flex-col items-center justify-center text-center p-4 border border-emerald-500/30">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Active Node: Windows</span>
                <span className="text-2xl sm:text-3xl font-black text-white mt-1">
                  <span className="text-[#00e676]">$</span> 42.36
                </span>
                <div className="w-full h-1.5 bg-[#0a232c] rounded-full mt-4 overflow-hidden">
                  <div className="w-4/5 h-full bg-gradient-to-r from-[#00e676] to-cyan-400" />
                </div>
                <span className="text-[10px] text-cyan-300 font-mono mt-2">100% Piloto Automático</span>
              </div>
            </div>

            {/* Smartphone Direito */}
            <div className="w-24 sm:w-32 rounded-3xl bg-[#061a22] border border-cyan-500/30 p-2 shadow-2xl [transform:rotate(6deg)] hover:[transform:rotate(0deg)] transition-transform duration-300">
              <div className="h-36 rounded-2xl bg-[#040c0f] flex flex-col items-center justify-center text-center p-2 border border-emerald-500/20">
                <span className="text-[10px] text-slate-400 font-mono">Tablet</span>
                <span className="text-xs font-black text-cyan-400 mt-1">Sincronizado</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 animate-pulse" />
              </div>
            </div>

          </div>

          {/* Lado Direito: Lista de Vantagens com Checkbox Verde Neon */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xl font-bold text-white mb-2">Simplicidade e performance:</h4>
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-3.5 p-3 rounded-xl bg-[#040c0f]/60 border border-emerald-500/15">
                <CheckCircle2 className="w-5 h-5 text-[#00e676] shrink-0 drop-shadow-[0_0_8px_#00e676]" />
                <span className="text-sm font-semibold text-slate-200">{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Faixa de Empresas Parceiras */}
        <div className="text-center space-y-6 pt-6 border-t border-cyan-500/10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block">
            SEU TRÁFEGO AJUDA GRANDES EMPRESAS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {companies.map((c) => (
              <span key={c.name} className={`text-xl sm:text-2xl text-slate-300 hover:text-white transition-colors ${c.style}`}>
                {c.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
