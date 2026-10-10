import React from "react";
import { Lock, UserX, ShieldCheck } from "lucide-react";

export function SecuritySection() {
  const securityPills = [
    {
      icon: Lock,
      title: "Criptografia de ponta",
      desc: "Tráfego residencial 100% blindado",
    },
    {
      icon: UserX,
      title: "Sem acesso a dados pessoais",
      desc: "Zero acesso a fotos, arquivos ou histórico",
    },
    {
      icon: ShieldCheck,
      title: "Conformidade com padrões internacionais",
      desc: "Total conformidade com RGPD e CCPA",
    },
  ];

  const companies = [
    { name: "Google", font: "font-sans font-bold" },
    { name: "amazon", font: "font-mono font-bold lowercase" },
    { name: "Meta", font: "font-sans font-black" },
    { name: "Microsoft", font: "font-sans font-semibold tracking-tight" },
    { name: "verizon", font: "font-sans font-extrabold italic" },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050b0e] text-white">
      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Conteúdo & 3 Pílulas de Segurança */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071a1f] border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,242,254,0.15)]">
                <span className="text-[#00e676]">➜</span>
                <span>SEGURANÇA E PRIVACIDADE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Seus dados estão protegidos
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                O Honeygain usa tráfego residencial criptografado para conectar empresas Fortune 500, realizando pesquisas de mercado, verificação de anúncios e muito mais.
              </p>
            </div>

            {/* 3 Badges de Segurança */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {securityPills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.title}
                    className="p-4 rounded-2xl bg-[#071419]/90 border border-emerald-500/20 flex flex-col items-start gap-2 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="p-2 rounded-xl bg-[#0d2229] text-[#00e676]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-white">{pill.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-1">{pill.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lado Direito: Escudo Holográfico 3D com Cadeado */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Escudo Gigante SVG */}
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 flex items-center justify-center">
              <svg viewBox="0 0 200 240" className="w-full h-full filter drop-shadow-[0_0_35px_rgba(0,242,254,0.4)]">
                {/* Linhas externas do escudo */}
                <path
                  d="M100 10 L180 45 V125 C180 180 100 225 100 225 C100 225 20 180 20 125 V45 Z"
                  fill="#071419"
                  stroke="#00f2fe"
                  strokeWidth="3"
                />
                <path
                  d="M100 25 L165 55 V120 C165 168 100 205 100 205 C100 205 35 168 35 120 V55 Z"
                  fill="#040c0f"
                  stroke="#00e676"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
              </svg>

              {/* Cadeado Central Brilhante */}
              <div className="absolute flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00e676] to-[#00f2fe] p-1 shadow-[0_0_30px_rgba(0,230,118,0.6)]">
                  <div className="w-full h-full rounded-xl bg-[#071216] flex items-center justify-center text-[#00e676]">
                    <Lock className="w-9 h-9" />
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase mt-3">
                  ENCRYPTED 256-BIT
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Faixa Inferior de Empresas */}
        <div className="text-center space-y-6 pt-4 border-t border-emerald-500/10">
          <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold block">
            Empresas que usam nosso tráfego
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
